import { defineConfig } from 'astro/config';

import securityHeaders from './security-headers.mjs';

export default defineConfig({
  site: 'https://topdelrenovation.com.au',
  compressHTML: true,
  // Emits dist/_headers (CSP, X-Content-Type-Options, Permissions-Policy),
  // which Cloudflare applies to every asset it serves.
  integrations: [securityHeaders()],
  build: {
    // Astro's default ('auto') only inlines stylesheets under 4kB, which left
    // both page stylesheets (~4.2kB each) as render-blocking <link>s — Lighthouse
    // measured ~960ms of blocked first render on mobile. Two pages of scoped CSS
    // is small enough that inlining beats the extra round trip outright.
    inlineStylesheets: 'always',
  },
});
