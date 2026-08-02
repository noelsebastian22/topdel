import type { APIRoute } from 'astro';

// Generated rather than dropped in public/ so it always tracks `site` in
// astro.config.mjs — a hard-coded sitemap URL goes stale the moment the
// domain changes.
export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL('sitemap.xml', site).href;

  return new Response(
    ['User-agent: *', 'Allow: /', '', `Sitemap: ${sitemap}`, ''].join('\n'),
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
  );
};
