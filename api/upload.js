/* ============================================================
   CALUNAH — /api/upload  (Vercel Serverless Function)
   Uploads a single binary file (image, PDF) to GitHub.
   Requires same GITHUB_TOKEN and PUBLISH_SECRET env vars as /api/publish.
   ============================================================ */

const https = require('https');

const OWNER  = 'boisrondrock-creator';
const REPO   = 'calunah-website';
const BRANCH = 'main';

function readBody(req) {
  return new Promise((resolve, reject) => {
    let raw = '';
    req.on('data', c => raw += c);
    req.on('end',  () => { try { resolve(JSON.parse(raw)); } catch(e) { reject(e); } });
    req.on('error', reject);
  });
}

function ghRequest(method, path, token, body) {
  return new Promise((resolve, reject) => {
    const data = body ? JSON.stringify(body) : null;
    const opts = {
      hostname: 'api.github.com',
      path,
      method,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github+json',
        'User-Agent': 'CALUNAH-Admin/1.0',
        'X-GitHub-Api-Version': '2022-11-28',
        ...(data ? { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(data) } : {})
      }
    };
    const req = https.request(opts, res => {
      let out = '';
      res.on('data', c => out += c);
      res.on('end', () => resolve({ status: res.statusCode, body: out }));
    });
    req.on('error', reject);
    if (data) req.write(data);
    req.end();
  });
}

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') { res.status(200).end(); return; }
  if (req.method !== 'POST') { res.status(405).json({ error: 'Method not allowed' }); return; }

  let body;
  try { body = await readBody(req); }
  catch { res.status(400).json({ error: 'Invalid JSON body' }); return; }

  const expectedSecret = process.env.PUBLISH_SECRET || 'OsPPszE_rqA-aDzf35EtpEJ3Am4q-d4JIydECACb-zSA8lvwVTIRbw';
  if (!body.secret || body.secret !== expectedSecret) {
    res.status(401).json({ error: 'Unauthorized' }); return;
  }

  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    res.status(500).json({ error: 'GITHUB_TOKEN not set in Vercel environment variables' }); return;
  }

  const { path, content } = body;
  if (!path || !content) {
    res.status(400).json({ error: 'Missing path or content' }); return;
  }

  // SECURITY: uploads may only go into known-safe locations.
  // Images → images/  |  PDFs → data/pdfs/
  // Blocks path traversal and prevents writing code/HTML/JS files.
  const isImage = path.startsWith('images/') && /\.(png|jpe?g|webp|avif|gif)$/i.test(path);
  const isPdf   = path.startsWith('data/pdfs/') && /\.pdf$/i.test(path);
  if (path.includes('..') || path.startsWith('/') || path.includes('\\') || (!isImage && !isPdf)) {
    res.status(400).json({ error: 'Upload path not allowed. Images go in images/, PDFs in data/pdfs/.' });
    return;
  }
  // Cap upload size (~3.5MB raw / ~4.7MB base64) — Vercel Hobby request body limit is 4.5MB
  if (typeof content === 'string' && content.length > 6 * 1024 * 1024) {
    res.status(413).json({ error: 'File too large. Please resize the image to under 3 MB before uploading.' }); return;
  }

  try {
    /* URL-encode each path segment so filenames with spaces/special chars work */
    const encodedPath = path.split('/').map(s => encodeURIComponent(s)).join('/');

    /* Check if file exists (to get SHA for update) */
    let sha = null;
    const check = await ghRequest('GET', `/repos/${OWNER}/${REPO}/contents/${encodedPath}`, token);
    if (check.status === 200) {
      sha = JSON.parse(check.body).sha;
    }

    const putBody = {
      message: `Upload: ${path}`,
      content, /* already base64 from FileReader */
      branch: BRANCH
    };
    if (sha) putBody.sha = sha;

    const r = await ghRequest('PUT', `/repos/${OWNER}/${REPO}/contents/${encodedPath}`, token, putBody);
    if (r.status === 200 || r.status === 201) {
      res.status(200).json({ ok: true, path });
    } else {
      res.status(500).json({ error: `GitHub returned ${r.status}`, detail: r.body });
    }
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
};
