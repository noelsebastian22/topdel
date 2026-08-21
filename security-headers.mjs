import { createHash } from 'node:crypto';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * Writes `dist/_headers` — the security headers Cloudflare Workers applies to
 * every static asset it serves (same file format Pages uses; Workers static
 * assets reads it natively and never serves the file itself).
 *
 * The Content-Security-Policy has to be generated rather than hand-written:
 * Astro inlines every page's <script> into the HTML, so allowing them means
 * either 'unsafe-inline' (which makes script-src worthless) or a sha256 hash
 * per script — and those hashes change whenever the JS does. Generating them
 * from the built HTML keeps the policy correct without anyone remembering to
 * update it.
 *
 * Known and accepted: Cloudflare's Bot Fight Mode injects its own inline
 * "JavaScript Detections" bootstrap into every HTML response, and the browser
 * refuses it — one console error per page load. It cannot be hashed (the
 * snippet embeds a per-request ray id and timestamp, so its hash differs every
 * response) and Cloudflare's documented fix, a CSP nonce it rewrites into the
 * injected tag, needs a per-response header this static site has no way to
 * emit. The site's own scripts are unaffected; the only loss is the
 * `cf.bot_management.js_detection.passed` signal, which nothing here uses.
 * To silence it, turn off Bot Fight Mode (Cloudflare → Security → Bots), or
 * add `no-transform` to the Cache-Control of HTML responses, which stops the
 * injection at the edge.
 *
 * Two consequences worth knowing before adding third-party code to the site:
 * - An external script (analytics, chat widget, embed) will be blocked until
 *   its origin is added to `script-src` below, and anything it fetches until
 *   its origin is added to `connect-src`.
 * - Headers only exist on the deployed/preview build. `astro dev` serves
 *   without them, so CSP breakage shows up in `npm run preview` or on
 *   Cloudflare, not in dev.
 */

// Inline <script> only — anything with a src= is covered by 'self'.
const INLINE_SCRIPT = /<script(?![^>]*\ssrc[\s=])[^>]*>([\s\S]*?)<\/script>/gi;

// Web3Forms takes the quote-form submission (see the form handler in index.astro).
const FORM_API = 'https://api.web3forms.com';

/**
 * Permissions-Policy: deny every powerful feature the site doesn't use, which
 * is all of them. `()` is an empty allowlist — not the page, not any iframe.
 */
const PERMISSIONS_POLICY = [
  'accelerometer',
  'autoplay',
  'camera',
  'display-capture',
  'encrypted-media',
  'fullscreen',
  'geolocation',
  'gyroscope',
  'magnetometer',
  'microphone',
  'midi',
  'payment',
  'picture-in-picture',
  'publickey-credentials-get',
  'screen-wake-lock',
  'usb',
  'xr-spatial-tracking',
]
  .map((feature) => `${feature}=()`)
  .join(', ');

async function htmlFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) return htmlFiles(full);
      return entry.name.endsWith('.html') ? [full] : [];
    }),
  );
  return files.flat();
}

async function inlineScriptHashes(distDir) {
  const hashes = new Set();
  for (const file of await htmlFiles(distDir)) {
    const html = await readFile(file, 'utf8');
    for (const [, body] of html.matchAll(INLINE_SCRIPT)) {
      // The hash covers the script body byte for byte, exactly as the browser
      // sees it — no trimming, no entity decoding (<script> is raw text).
      if (body === '') continue;
      hashes.add(`'sha256-${createHash('sha256').update(body, 'utf8').digest('base64')}'`);
    }
  }
  return [...hashes].sort();
}

function csp(scriptHashes) {
  return [
    "default-src 'self'",
    "base-uri 'self'",
    "object-src 'none'",
    "frame-ancestors 'none'",
    "form-action 'self'",
    `script-src 'self' ${scriptHashes.join(' ')}`,
    // 'unsafe-inline' rather than hashes: the nav and the before/after slider
    // carry style="--i:0" / style="--pos: 50%" attributes, and a style-src with
    // hashes in it makes the browser ignore 'unsafe-inline' — which would drop
    // those custom properties and break both. Inline styles are a far weaker
    // vector than inline script, and no user input is rendered on this site.
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data:", // data: — the select-arrow SVG in index.astro's CSS
    "font-src 'self'", // @fontsource, self-hosted
    `connect-src 'self' ${FORM_API}`,
    'upgrade-insecure-requests',
  ].join('; ');
}

/** @returns {import('astro').AstroIntegration} */
export default function securityHeaders() {
  return {
    name: 'topdel:security-headers',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const distDir = fileURLToPath(dir);
        const scriptHashes = await inlineScriptHashes(distDir);
        const file = [
          '# Generated by security-headers.mjs at build time — do not edit by hand.',
          '/*',
          `  Content-Security-Policy: ${csp(scriptHashes)}`,
          '  X-Content-Type-Options: nosniff',
          `  Permissions-Policy: ${PERMISSIONS_POLICY}`,
          '',
        ].join('\n');
        await writeFile(path.join(distDir, '_headers'), file, 'utf8');
        logger.info(`_headers written (${scriptHashes.length} inline script hashes)`);
      },
    },
  };
}
