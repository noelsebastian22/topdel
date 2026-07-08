# Memory — Gallery Page Complete + Desktop Verified

Last updated: 2026-07-07 18:51

## What was built

- `src/data/gallery.ts` — shared data module: `categories` (6: wardrobes, kitchens, office-display, prayer-cabinets, face-plates, laundry), `galleryItems` (19 items with `img`, `category`, `caption`, `alt`), `countFor(slug)` helper. Single source of truth for homepage tiles and gallery page.
- 19 real client photos in `src/assets/gallery/` (named by convention).
- `src/components/SiteHeader.astro` / `SiteFooter.astro` — extracted shared header/footer; header takes `current?` prop so "Our work" gets `aria-current="page"` on /gallery.
- `src/pages/index.astro` — #work section reworked into 6 category tiles (photo + mono count) deep-linking to `/gallery?category=<slug>`; "View all 19 photos" button; Kitchen service card added.
- `src/pages/gallery.astro` — full gallery page:
  - Dark `.g-hero` intro band.
  - Chip filter row (ALL + 6 categories with counts, `aria-pressed`, live `#gStatus` "SHOWING N PHOTOS").
  - 3/2/1-column responsive grid with IntersectionObserver scroll-reveal (`.g-fig` → `.g-fig.in`).
  - `?category=` deep-link honoured on load, kept in sync via `history.replaceState`.
  - Native `<dialog>` lightbox: 1600px webp per photo via `getImage()`, yellow × close, backdrop-click + Esc, backdrop/dialog fade + figure rise-scale via `@starting-style` + `allow-discrete`, prev/next ‹ › buttons (ArrowLeft/ArrowRight, wrap-around, filter-aware), `.lb-solo` hides nav when only 1 photo shown, 0.18s image micro-fade on swap.
- `src/styles/global.css` line 32 — `html:has(dialog[open]) { overflow: hidden; scrollbar-gutter: stable; }` — prevents layout-shift jerk when lightbox opens.

## Decisions made

- One shared `gallery.ts` data module — homepage counts and gallery filtering can never drift apart.
- Chip filter is single-select (ALL or one category), not additive — matches the 6-category scale.
- Native `<dialog>` for lightbox (free focus trap, Esc, ::backdrop) + pure-CSS animation as progressive enhancement.
- Lightbox prev/next cycles only through currently-filtered photos, not all 19.
- Transform on inner `<figure>`, not the `<dialog>` itself — avoids re-anchoring the `position: fixed` stacking context during the open animation.

## Problems solved

- **Preview server serves stale builds** — port 4324 runs `astro preview` (built dist/). Source edits DO NOT appear until `npm run build`. Always rebuild before browser-verifying.
- **Gallery hero H1 invisible (navy on navy)** — `h1 { color: var(--ink) }` in global.css beats inherited color; fixed with explicit `color: var(--white)` on `.g-hero h1`.
- **Lightbox dialog pinned top-left** — `* { margin: 0 }` reset kills UA `margin: auto` dialog centering; restored with `margin: auto` on `.lightbox`.
- **Lightbox open layout-shift jerk** — solved with `scrollbar-gutter: stable` on `html:has(dialog[open])` (global.css line 32).

## Current state

- `npm run build` passes. Both pages (`/` and `/gallery`) fully functional.
- **Desktop verification complete** — all gallery features confirmed working live:
  - 19 photos load, all 6 filter chips correct, counts accurate.
  - Clicking a chip updates active style, status line, and URL (`?category=slug`).
  - Scroll-reveal IntersectionObserver fires correctly.
  - Lightbox opens with caption, prev/next nav, close button all working.
- 768px partially verified (previous session); 375px verification **not yet done**.
- Git status: last commit `08cebf8 style: add basic animations` — gallery page changes are **uncommitted**.

## Next session starts with

1. **Commit the gallery work** — `git add -A && git commit -m "feat: gallery page with filters, lightbox, scroll-reveal"`.
2. **375px mobile verification** — check: homepage tiles stack to 1-col, chips wrap and scroll horizontally, 1-col grid, lightbox centred + animated, ‹ › buttons reachable.
3. After that, pre-launch TODO sweep (see Open questions).

## Open questions

- Real `site` domain needed in `astro.config.mjs` before deploying (currently placeholder).
- `FORM_ENDPOINT` in contact form is a placeholder — needs real endpoint wired up.
- Footer Facebook URL is a placeholder.
- Testimonials in `src/data/testimonials.json` are mock entries — must swap for real ones before go-live (ACCC risk).
