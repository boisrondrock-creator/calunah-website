/*
  CALUNAH — /api/ai-assist  (Vercel Serverless Function)
  Real-time AI writing assistant: grammar corrections + word completions.
  Supports English, French, and Haitian Kreyòl.

  Required Vercel Environment Variable:
    ANTHROPIC_API_KEY — your Anthropic API key (sk-ant-...)

  Gracefully returns empty results if the key is missing (feature silently inactive).
*/

const https = require('https');

function readBody(req) {
  return new Promise((resolve, reject) => {
    let raw = '';
    req.on('data',  c => raw += c);
    req.on('end',   () => { try { resolve(raw ? JSON.parse(raw) : {}); } catch(e) { reject(e); } });
    req.on('error', reject);
  });
}

function callAnthropic(apiKey, body) {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify(body);
    const opts = {
      hostname: 'api.anthropic.com',
      path:     '/v1/messages',
      method:   'POST',
      headers: {
        'x-api-key':         apiKey,
        'anthropic-version': '2023-06-01',
        'content-type':      'application/json',
        'content-length':    Buffer.byteLength(payload)
      }
    };
    const r = https.request(opts, res => {
      let out = '';
      res.on('data', c => out += c);
      res.on('end', () => {
        try   { resolve({ status: res.statusCode, body: JSON.parse(out) }); }
        catch { resolve({ status: res.statusCode, body: {} }); }
      });
    });
    r.on('error', reject);
    r.write(payload);
    r.end();
  });
}

const LANG_NAMES = {
  en: 'English',
  fr: 'French',
  kr: 'Haitian Kreyòl (Kreyòl ayisyen)'
};

const EMPTY = { hasError: false, correction: null, completions: [] };

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin',  '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') { res.status(200).end(); return; }
  if (req.method !== 'POST')   { res.status(405).json({ error: 'Method not allowed' }); return; }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    /* Feature disabled — client handles this gracefully */
    res.status(200).json({ ...EMPTY, unavailable: true });
    return;
  }

  let body;
  try { body = await readBody(req); }
  catch { res.status(400).json({ error: 'Bad request' }); return; }

  const { text, language = 'en' } = body;
  const clean = (text || '').trim();

  if (clean.length < 10) {
    res.status(200).json(EMPTY);
    return;
  }

  const langName = LANG_NAMES[language] || LANG_NAMES.en;
  const capped   = clean.slice(0, 600);

  const prompt =
`You are a concise writing assistant for CALUNAH, a nonprofit alumni association. The user is writing in ${langName}.

Their current text:
"""
${capped}
"""

Return ONLY a valid JSON object — no markdown, no explanation:
{
  "hasError": false,
  "correction": null,
  "completions": ["phrase 1", "phrase 2", "phrase 3"]
}

Rules:
- hasError: true ONLY if there is a real spelling or grammar mistake
- correction: the corrected full text in ${langName}, or null when hasError is false
- completions: exactly 3 natural phrase continuations (3-8 words each) in ${langName} that fit an alumni nonprofit context — thoughtful and professional
- Do NOT repeat existing text in completions, only the continuation
- Return ONLY the JSON, nothing else`;

  try {
    const result = await callAnthropic(apiKey, {
      model:      'claude-haiku-4-5-20251001',
      max_tokens: 280,
      messages:   [{ role: 'user', content: prompt }]
    });

    if (result.status !== 200 || !result.body.content) {
      res.status(200).json(EMPTY);
      return;
    }

    const raw   = (result.body.content[0]?.text || '').trim();
    const match = raw.match(/\{[\s\S]*\}/);
    if (!match) { res.status(200).json(EMPTY); return; }

    const parsed = JSON.parse(match[0]);
    res.status(200).json({
      hasError:    !!parsed.hasError,
      correction:  parsed.correction  || null,
      completions: Array.isArray(parsed.completions) ? parsed.completions.slice(0, 3) : []
    });
  } catch(e) {
    res.status(200).json(EMPTY);
  }
};
