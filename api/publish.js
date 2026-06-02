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
  const ok = r.status === 200 || r.status === 201;
  if (!ok) {
    let detail = '';
    try { detail = JSON.parse(r.body).message || ''; } catch {}
    console.error(`pushFile ${filePath} → HTTP ${r.status}: ${detail}`);
    return { ok: false, status: r.status, message: detail };
  }
  return { ok: true };
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

  // Prefer the Vercel env var; fall back to a strong baked-in secret (not the
  // old guessable Base64). Setting PUBLISH_SECRET in Vercel overrides this and
  // is the most secure option.
  const expectedSecret = process.env.PUBLISH_SECRET || 'clnh_CrF4vkeWGdZU8JeD5CFo23NayoIED0s7PM12Veixwwq1BZ9s';
  if (!body.secret || body.secret !== expectedSecret) {
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

  // SECURITY: only allow writes to known-safe locations. This blocks path
  // traversal (../) and overwriting source/code files even if the secret leaks.
  function isAllowedPath(p) {
    if (typeof p !== 'string') return false;
    if (p.includes('..') || p.startsWith('/') || p.includes('\\')) return false;
    return p === 'data/.deploy' ||
           (p.startsWith('data/') && p.endsWith('.json')) ||
           (p.startsWith('images/') && /\.(png|jpe?g|webp|avif|gif|pdf)$/i.test(p));
  }

  const results = {};
  let firstError = null;
  for (const [filePath, content] of Object.entries(files)) {
    if (!isAllowedPath(filePath)) {
      results[filePath] = false;
      if (!firstError) firstError = { status: 400, message: 'Path not allowed: ' + filePath };
      continue;
    }
    try {
      const r = await pushFile(token, filePath, content);
      results[filePath] = r.ok === true;
      if (!r.ok && !firstError) {
        firstError = { status: r.status, message: r.message || '' };
      }
    } catch (e) {
      results[filePath] = false;
      if (!firstError) firstError = { status: 0, message: String(e && e.message || e) };
    }
  }

  /* If everything failed, surface the real GitHub reason so the admin
     panel can show a helpful message (e.g. expired/insufficient token). */
  const anyOk = Object.values(results).some(v => v === true);
  if (!anyOk && firstError) {
    let hint = firstError.message || 'GitHub rejected the request';
    if (firstError.status === 401) hint = 'GitHub token is invalid or expired (401). Regenerate it and update GITHUB_TOKEN in Vercel.';
    else if (firstError.status === 403) hint = 'GitHub token lacks permission (403). It needs Contents: Read and write on this repo.';
    else if (firstError.status === 404) hint = 'Repo or path not found (404). Check the token has access to calunah-website.';
    res.status(200).json({ ok: true, results, githubError: hint, githubStatus: firstError.status });
    return;
  }

  res.status(200).json({ ok: true, results });
};
