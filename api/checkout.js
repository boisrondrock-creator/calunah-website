/* ============================================================
   CALUNAH — /api/checkout  (Vercel Serverless Function)
   Creates a Stripe Checkout Session for event tickets and returns
   the hosted-checkout URL. Stripe collects the buyer's email and
   emails a professional receipt automatically after payment.

   Required Vercel Environment Variable:
     STRIPE_SECRET_KEY  — your Stripe secret key (sk_live_... or sk_test_...)

   No npm dependency: calls the Stripe REST API directly over https,
   matching the dependency-free pattern used in publish.js / upload.js.
   ============================================================ */

const https = require('https');

/* Read + parse JSON body */
function readBody(req) {
  return new Promise((resolve, reject) => {
    let raw = '';
    req.on('data', c => raw += c);
    req.on('end',  () => { try { resolve(raw ? JSON.parse(raw) : {}); } catch (e) { reject(e); } });
    req.on('error', reject);
  });
}

/* POST form-encoded data to the Stripe API */
function stripeRequest(path, key, formBody) {
  return new Promise((resolve, reject) => {
    const data = formBody;
    const opts = {
      hostname: 'api.stripe.com',
      path,
      method: 'POST',
      headers: {
        Authorization:  `Bearer ${key}`,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(data)
      }
    };
    const r = https.request(opts, res => {
      let out = '';
      res.on('data', c => out += c);
      res.on('end',  () => {
        try { resolve({ status: res.statusCode, body: JSON.parse(out) }); }
        catch { resolve({ status: res.statusCode, body: { raw: out } }); }
      });
    });
    r.on('error', reject);
    r.write(data);
    r.end();
  });
}

/* Encode a flat list of [key, value] pairs as x-www-form-urlencoded */
function encodeForm(pairs) {
  return pairs
    .map(([k, v]) => encodeURIComponent(k) + '=' + encodeURIComponent(v))
    .join('&');
}

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin',  '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') { res.status(200).end(); return; }
  if (req.method !== 'POST')   { res.status(405).json({ error: 'Method not allowed' }); return; }

  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    res.status(500).json({ error: 'Stripe is not configured yet. Add STRIPE_SECRET_KEY in Vercel → Settings → Environment Variables.' });
    return;
  }

  let body;
  try { body = await readBody(req); }
  catch { res.status(400).json({ error: 'Invalid request' }); return; }

  /* Expected from the website:
     { eventTitle, ticketLabel, price (USD dollars), quantity, eventId } */
  const eventTitle  = String(body.eventTitle  || 'CALUNAH Event').slice(0, 120);
  const ticketLabel = String(body.ticketLabel || 'Ticket').slice(0, 80);
  const priceUSD    = Number(body.price);
  let   quantity    = parseInt(body.quantity, 10);
  if (!quantity || quantity < 1) quantity = 1;
  if (quantity > 30) quantity = 30;

  if (!priceUSD || priceUSD <= 0) {
    res.status(400).json({ error: 'Invalid ticket price' });
    return;
  }
  const unitAmount = Math.round(priceUSD * 100); // dollars → cents

  /* Build the return URLs from the request origin so it works on
     both the vercel.app domain and calunah.org */
  const origin =
    req.headers.origin ||
    (req.headers.host ? `https://${req.headers.host}` : 'https://calunah.org');

  const productName = `${eventTitle} — ${ticketLabel}`;

  const form = encodeForm([
    ['mode', 'payment'],
    ['success_url', `${origin}/?ticket=success`],
    ['cancel_url',  `${origin}/?ticket=cancelled#events`],
    ['billing_address_collection', 'auto'],
    /* Single line item, buyer may adjust quantity at checkout */
    ['line_items[0][quantity]', String(quantity)],
    ['line_items[0][adjustable_quantity][enabled]', 'true'],
    ['line_items[0][adjustable_quantity][minimum]', '1'],
    ['line_items[0][adjustable_quantity][maximum]', '30'],
    ['line_items[0][price_data][currency]', 'usd'],
    ['line_items[0][price_data][unit_amount]', String(unitAmount)],
    ['line_items[0][price_data][product_data][name]', productName],
    ['line_items[0][price_data][product_data][description]', `CALUNAH ticket purchase — ${ticketLabel}`],
    /* Save useful info on the payment for your records */
    ['metadata[event]', eventTitle],
    ['metadata[ticket_type]', ticketLabel],
    ['metadata[event_id]', String(body.eventId || '')],
    /* Ensure Stripe emails a receipt for this payment */
    ['payment_intent_data[description]', productName]
  ]);

  try {
    const r = await stripeRequest('/v1/checkout/sessions', key, form);
    if (r.status >= 200 && r.status < 300 && r.body && r.body.url) {
      res.status(200).json({ url: r.body.url });
    } else {
      const msg = (r.body && r.body.error && r.body.error.message) || 'Could not create checkout session';
      res.status(502).json({ error: msg });
    }
  } catch (e) {
    res.status(500).json({ error: 'Checkout request failed' });
  }
};
