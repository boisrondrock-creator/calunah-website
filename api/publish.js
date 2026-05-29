/* ============================================================
   CALUNAH — /api/publish  (Vercel Serverless Function)
   Writes JSON content files to GitHub so Vercel auto-deploys.
   The GitHub token lives in Vercel env vars — never in the browser.

   Required Vercel Environment Variables:
     GITHUB_TOKEN  — Personal Access Token with repo Contents write access
   Optional:
     PUBLISH_SECRET — shared secret checked against admin; defaults to btoa('Calunah@2024')
   ============================================================ */

const https = require('https');

const OWNER  = 'boisrondrock-creator';
const REPO   = 'calunah-website';
const BRANCH = 'main';

/* ── helpers ── */
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
    const data   = body ? JSON.stringify(body) : null;
    const opts   = {
      hostname: 'api.github.com',
      path,
      method,
      headers: {
        Authorization:  `Bearer ${token}`,
        Accept:         'application/vnd.github+json',
        'User-Agent':   'CALUNAH-Admin/1.0',
        'X-GitHub-Api-Version': '2022-11-28',
        ...(data ? { 'Content-Type':'application/json', 'Content-Length': Buffer.byteLength(data) } : {})
      }
    };
    const req = https.request(opts, res => {
      let out = '';
      res.on('data', c => out += c);
      res.on('end',  () => resolve({ status: res.statusCode, body: out }));
    });
    req.on('error', reject);
    if (data) req.write(data);
    req.end();
  });
}

async function getFileSHA(token, filePath) {
  try {
    const r = await ghRequest('GET', `/repos/${OWNER}/${REPO}/contents/${filePath}`, token);
    if (r.status !== 200) return null;
    return JSON.parse(r.body).sha || null;
  } catch { return null; }
}

async function pushFile(token, filePath, content) {
  const sha  = await getFileSHA(token, filePath);
  const b64  = Buffer.from(JSON.stringify(content, null, 2)).toString('base64');
  const body = { message: `Admin: update ${filePath}`, content: b64, branch: BRANCH };
  if (sha) body.sha = sha;
  const r = await ghRequest('PUT', `/repos/${OWNER}/${REPO}/contents/${filePath}`, token, body);
  return r.status === 200 || r.status === 201;
}

/* ── handler ── */
module.exports = async function handler(req, res) {
  /* CORS */
  res.setHeader('Access-Control-Allow-Origin',  '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') { res.status(200).end(); return; }
  if (req.method !== 'POST')   { res.status(405).json({ error: 'Method not allowed' }); return; }

  /* Auth */
  let body;
  try { body = await readBody(req); }
  catch { res.status(400).json({ error: 'Invalid JSON body' }); return; }

  const expectedSecret = process.env.PUBLISH_SECRET || 'Q2FsdW5haEAyMDI0';
  if (body.secret !== expectedSecret) {
    res.status(401).json({ error: 'Unauthorized' }); return;
  }

  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    res.status(500).json({ error: 'GITHUB_TOKEN not set in Vercel environment variables. See Setup Guide in Settings.' });
    return;
  }

  /* Push files */
  const { files } = body;
  if (!files || typeof files !== 'object') {
    res.status(400).json({ error: 'No files provided' }); return;
  }

  const results = {};
  for (const [filePath, content] of Object.entries(files)) {
    try {
      results[filePath] = await pushFile(token, filePath, content);
    } catch (e) {
      results[filePath] = false;
    }
  }

  res.status(200).json({ ok: true, results });
};
