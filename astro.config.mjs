import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://topdelrenovation.com.au',
  compressHTML: true,
  build: {
    // Astro's default ('auto') only inlines stylesheets under 4kB, which left
    // both page stylesheets (~4.2kB each) as render-blocking <link>s — Lighthouse
    // measured ~960ms of blocked first render on mobile. Two pages of scoped CSS
    // is small enough that inlining beats the extra round trip outright.
    inlineStylesheets: 'always',
  },
});
