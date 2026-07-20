# Memory — Hero Redesign (image, scrim, type, kicker, CTAs, services strip)

Last updated: 2026-07-18 (afternoon session)

## What was built

All committed as **`8dbc549`** on branch **`hero-image-swap`**, pushed to origin.
Build verified clean (`npx astro build`, 2 pages) and new elements confirmed in `dist/index.html`.

- **Hero image regenerated & re-art-directed** (this resolves the previous session's
  "alignment doesn't look good" feedback). New processed source at
  **`src/assets/hero-wardrobe.jpg` (~485KB, down from 7.8MB original)**; uncropped
  master archived at **`gallery/hero-wardrobe-master.png`**; previous jpg kept as
  **`src/assets/hero-wardrobe-backup.jpg`** (now tracked). Astro generates the full
  responsive set (webp 17KB–174KB + jpg fallbacks).
- **`src/pages/index.astro`** — full hero redesign:
  - **Scrim lightened**: was 90%→55%→25% ink gradient; now
    `78deg, ink 46% → ink 22% at 46% → transparent by 78%`. Photo reads as a photo.
  - **H1 downsized**: `clamp(2.4rem, 5.4vw, 4.2rem)` @ `font-stretch: 112%`
    (was `clamp(2.6rem, 7.2vw, 5.2rem)` @ 122%) — sized to the image's quiet zone.
  - **Yellow accent**: "the millimetre." wrapped in `<span class="hl">` →
    `var(--yellow)`. Documented as a sanctioned Yellow Rule exception.
  - **Two-tier kicker**: mono eyebrow now just "Custom joinery"; new
    `.hero-kicker-sub` line "Measured · Made · Installed" (white 0.78 alpha).
  - **CTAs replaced**: primary = "Book a free measure &amp; quote" → `#contact`
    (was the phone `tel:` link); secondary = "View our projects" → `#work`.
  - **`.hero-services` icon strip**: nav under CTAs — Wardrobes / Kitchens /
    Home office / Laundry, inline stroke SVGs + mono labels, hairline top border +
    dividers, all link to `#services`, hover/focus → yellow. Collapses to 2×2 grid
    at ≤599px (`padding-inline: 0`, no left borders).
- **`src/styles/global.css`** — hero entrance stagger extended:
  `.hero-kicker-sub` delay 0.1s, `.hero-services` delay 0.68s. (File was also
  reformatted/prettified this session — multi-line declarations; intentional.)
- **`DESIGN.md`** — kept in sync: display spec frontmatter (fontSize + width 112%),
  Hierarchy Display bullet rewritten (accent span, "premium is air not scale"),
  **One-Action Yellow Rule now lists exactly two sanctioned exceptions**: the
  contact band + the hero H1 accent span.

## Decisions made

- Hero premium feel = smaller type + lighter scrim + restraint, NOT scale.
- Yellow on the H1 closing phrase is a deliberate, documented one-per-site
  exception to the One-Action Yellow Rule — don't "fix" it back.
- Primary hero conversion action is now the quote form (`#contact`), not the phone
  call. Phone remains primary in the contact band.
- Services strip lives in the hero as an "annotation layer" device (shop-drawing
  metaphor) and doubles as section nav.

## Problems solved

- Original generated image was 7.8MB — processed down to 485KB before Astro's
  responsive pipeline. Keep this crop/optimize step for any future regenerations
  (and keep cropping the Gemini watermark edge; masters go in `gallery/`).

## Current state

- `hero-image-swap` @ `8dbc549`, pushed (`1e5e5eb..8dbc549`). Working tree clean.
- **Not merged to `main`** — branch was cut from `color-theme-change`, so a PR from
  `hero-image-swap` includes those earlier commits unless `color-theme-change`
  merges first or the branch is rebased. User was offered a merge/PR and hasn't
  decided yet.
- Build passes; hero verified in dist markup. **Not yet visually reviewed in a
  browser by the user this session.**

## Next session starts with

1. User eyeballs the new hero in the browser (`npx astro dev`) — expect possible
   tweak requests (scrim %, `object-position`, icon strip spacing).
2. Decide merge strategy: merge/PR `hero-image-swap` (and the underlying
   `color-theme-change` commits) into `main`.
3. Standing carryovers:
   - Web3Forms: real access key still a `TODO-` placeholder in
     `src/pages/index.astro` — waiting on client's email address. Form won't
     deliver until swapped.
   - 375px real-viewport mobile verification (Chrome here can't shrink below
     ~1291px) — now also covers the new 2×2 `.hero-services` grid.
   - Audit P2/P3 items logged 2026-07-18: eyebrow cadence on every section,
     touch targets <44px (`.nav-toggle`, gallery `.chip`, `.lb-nav`), required
     form fields not visually marked, persistent `will-change` on `.magnetic`.

## Open questions / go-live blockers

- Web3Forms `access_key` — needs client email + real key (store as placeholder
  until then; never commit the real key to memory.md).
- `site` domain still placeholder in `astro.config.mjs`.
- Mock testimonials in `src/data/testimonials.json` — replace with real before
  go-live (ACCC risk).
- Old hero video + poster still sitting unreferenced in `public/media/` —
  delete or keep as recoverable?
