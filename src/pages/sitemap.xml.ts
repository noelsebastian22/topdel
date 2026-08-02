import type { APIRoute } from 'astro';

// Two-page site, so a hand-rolled sitemap beats pulling in @astrojs/sitemap.
// Add any new route here when one appears. Trailing slashes are deliberate:
// Astro's directory build format makes /gallery/ the canonical form, and a
// sitemap that disagrees with the canonical tag is worse than no sitemap.
const PAGES: { path: string; priority: string }[] = [
  { path: '/', priority: '1.0' },
  { path: '/gallery/', priority: '0.7' },
];

export const GET: APIRoute = ({ site }) => {
  const lastmod = new Date().toISOString().slice(0, 10);

  const urls = PAGES.map(
    ({ path, priority }) => `  <url>
    <loc>${new URL(path, site).href}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${priority}</priority>
  </url>`
  ).join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } }
  );
};
