# Memory — Socials + Contact Actions + Web3Forms Wiring, + Footer Wordmark Fix, + Audit

Last updated: 2026-07-18

## Session update (2026-07-18): Hero video → Gemini-generated image swap

### What was built

- **Hero image generated with Gemini (nano banana)** from an art-directed prompt (16:9,
  wide interior, wardrobe on right third, quiet blue wall on left for headline space,
  natural light, no people). Watermark sparkle cropped off the right edge (150px) →
  final source **`src/assets/hero-wardrobe.jpg` (2666×1536, ~583KB)**. Uncropped
  original preserved at **`gallery/hero-wardrobe-master.png`**.
- **`src/pages/index.astro`** — hero `<video>` fully replaced with an `astro:assets`
  `<Picture>`: avif/webp/jpg at 5 widths (~18KB mobile webp → ~286KB full-width avif),
  `loading="eager"` + `fetchpriority="high"` (LCP), explicit `width`/`height` (no CLS),
  `object-position: 56%` desktop / `60%` on phones. Navy scrim + shop-drawing dimension
  annotations kept as-is. Desktop parallax retargeted to the image (still
  `prefers-reduced-motion` gated). **Removed**: video toggle button, lazy-load video JS,
  `.video-toggle` styles. Old video + poster left in `public/media/` unreferenced
  (recoverable). `CLAUDE.md` updated to match.
- Build verified clean; `dist/` hero `<picture>` markup, parallax target, and zero stale
  `heroVideo`/`videoToggle`/`hero-poster` references all confirmed.

### Git state

- New branch **`hero-image-swap`** (branched off `color-theme-change`), commit
  **`1e5e5eb`** (3 files: `index.astro`, `hero-wardrobe.jpg`, `hero-wardrobe-master.png`),
  **pushed** with tracking → PR link:
  https://github.com/noelsebastian22/topdel/pull/new/hero-image-swap
- Note: a PR from `hero-image-swap` will include the earlier `color-theme-change`
  commits unless that branch merges first (or the branch is rebased onto `main`).

### NOT satisfied — rework needed (user feedback)

- **The hero image alignment does not look good in place — the image needs to be
  changed/regenerated.** Re-art-direct the composition (where the wardrobe sits vs.
  where the headline sits) and/or re-tune crop + `object-position` per breakpoint.
- **Hero typography needs a rethink** alongside the new image — headline size,
  placement, and how it interacts with the image's quiet zone should be redesigned
  together, not patched.

### Next session starts with

1. Regenerate/re-art-direct the hero image (fix composition/alignment) — prompt and
   pipeline from this session are reusable; remember to crop the Gemini watermark edge
   and keep the uncropped master in `gallery/`.
2. Rethink hero typography as part of the same pass (consider `/impeccable typeset`).
3. Then the standing carryovers below (Web3Forms key, PRs, mobile verification).

## Session update: footer wordmark comment fix + `/impeccable audit`

- `src/components/SiteFooter.astro` — fixed a stale code comment that still read
  `Split "TopDel Renovations" into a two-tier wordmark…` (plural) after the business name
  was corrected to the singular `TopDel Renovation` in `src/data/site.ts`. Comment now reads
  `Split "TopDel Renovation" into a two-tier wordmark…`. **Code-comment-only change** — the
  rendered wordmark already read correctly (`BUSINESS_NAME.split(' ')` derives it from data,
  not the comment). Verified no other stale `Renovations` (plural) strings anywhere in
  source/docs — `PRODUCT.md`, `DESIGN.md`, `CLAUDE.md` already say "TopDel Renovation"
  (singular) correctly. The one remaining plural, `topdel_renovations` in `INSTAGRAM_URL`
  (`src/data/site.ts`), is the actual Instagram handle — correct as-is, not a bug.
- Ran `/impeccable audit` across the whole site (`SiteHeader.astro`, `SiteFooter.astro`,
  `index.astro`, `gallery.astro`, `Layout.astro`, `global.css`, `data/site.ts`,
  `data/gallery.ts`). **Score: 17/20 (Good)**. Build not re-verified this pass (no code
  logic changed beyond the comment).

### Audit findings (not yet fixed — logged for next session)

- **P2 — Eyebrow on every section.** `.eyebrow` (mono, uppercase, tracked, drafting-tick
  `::before`/`::after`) appears on ~6 of 7 sections (hero, about, services, process, work,
  testimonials). Differentiated from the generic AI kicker by the blueprint tick-mark styling,
  but the *cadence* (identical device on every section) still matches the "AI grammar" tell.
  Consider varying the cadence in a future `/impeccable layout` or `/impeccable typeset` pass —
  not urgent, the drafting motif is a deliberate, documented brand device per `DESIGN.md`.
- **P2 — Touch targets under 44×44px.** `.nav-toggle` (~42×27px), gallery `.chip` filter
  buttons (~30px tall), `.lb-nav` lightbox arrows on mobile (40×40px). All still clear the
  WCAG 2.2 AA 24×24px minimum, but sit below the 44×44 recommendation. Candidate for
  `/impeccable adapt`.
- **P3 — Required form fields not visually marked.** Only optional fields carry an
  "optional" label suffix; required fields rely on the browser's native validation only.
  Candidate for `/impeccable clarify`.
- **P3 — Persistent `will-change: transform`** on `.magnetic` (hero CTA) and the hero video
  is set for the full page lifetime rather than toggled on interaction. Minor compositor
  overhead. Candidate for `/impeccable optimize`.
- No P0/P1 design issues found. Contrast checked and passes comfortably across all major
  text/background pairs (body slate-on-white ~7:1, blueprint blue links ~5.15:1, footer
  translucent white-on-navy ~10.5:1).

## What was built

All changes this session are in the **working tree, uncommitted**, on branch `color-theme-change`:

- **`src/data/site.ts`** — phone display format fixed `043 000 6015` → `0430 006 015`
  (standard AU mobile grouping). Added three social constants as the single source of truth:
  - `WHATSAPP_URL = 'https://wa.me/61430006015'` (same business number, intl format, digits only)
  - `INSTAGRAM_URL = 'https://www.instagram.com/topdel_renovations/'`
  - `FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=100063475035157'`
- **`src/pages/index.astro`**:
  - Contact band (`#contact`): replaced the giant `.cta-phone` headline number with a **two-tier
    action block** (`.contact-actions`). Tier 1 `.contact-buttons`: two `.btn.btn-navy.contact-btn`
    buttons — **Call 0430 006 015** (phone SVG, `tel:`) and **WhatsApp us** (WhatsApp glyph SVG,
    `wa.me`, opens new tab). Tier 2 `.contact-follow`: mono-font "FOLLOW THE WORK —" label +
    two 44px circular `.social-link` icon buttons (Instagram outline SVG, Facebook glyph SVG),
    both open new tab. All icons are inline SVG (same approach as the lightbox fix).
  - Hero button label simplified: `Call 0430 006 015 — free quote` → `Call 0430 006 015`.
  - Removed old `.cta-phone` CSS; added `.contact-actions/.contact-buttons/.contact-follow/
    .follow-label/.social-link` styles (social-link hover → navy bg + yellow icon).
  - **Web3Forms wiring** in the `<script>`: `FORM_ENDPOINT = 'https://api.web3forms.com/submit'`,
    `WEB3FORMS_KEY = 'TODO-REPLACE-WITH-CLIENT-ACCESS-KEY'` (placeholder). On submit, appends
    `access_key`, `subject`, `from_name` to the FormData. Guard: if key `.startsWith('TODO')` it
    shows the error state instead of posting. Fallback error copy updated to `0430 006 015`.
- **`src/components/SiteFooter.astro`** — imports the 3 new constants; Contact column now lists
  WhatsApp, Facebook (real profile URL, replaced the old `facebook.com` placeholder + its TODO),
  and Instagram. All open new tab.

## Decisions made (from /architect session, user-confirmed)

- **Two-tier contact block** chosen over a flat row of 4 equal buttons: Call/WhatsApp are
  conversion actions (primary weight), Facebook/Instagram are browsing actions (secondary icons).
  Keeps the contact band's conversion job from being diluted.
- **Web3Forms** chosen for form email (over Formspree / host-native): fits the existing
  `fetch`-to-endpoint JS with minimal rework, free at realistic volume, no hosting lock-in.
- Socials scope = Instagram, Facebook, WhatsApp only (no email link, no LinkedIn).
- WhatsApp number = the existing business number (+61 430 006 015) — user confirmed it's the same
  number already on the site, NOT a second number. So one number, two channels (call + WhatsApp).
- Hero: label cleanup only, NO socials in the hero (keeps hero focused on look-at-work / call).
- Link opening = `target="_blank" rel="noopener"` for socials/WhatsApp; mobile OSes hand off to
  installed apps automatically. Industry-standard, no embedded widgets.
- Social links + phone live as constants in `src/data/site.ts` (single source of truth).

## Problems solved

- Chrome couldn't resize below ~1291px effective width on this macOS setup, so true 375px
  screenshot verification wasn't possible. Verified mobile behaviour by **reading the CSS**
  instead: `.contact-grid` → 1 col at ≤899px, `.qf-row` → 1 col at ≤599px, and
  `.contact-buttons` has `flex-wrap: wrap` so Call/WhatsApp wrap cleanly on narrow screens.

## Current state

- `npm run build` **passes**. Built `dist/` confirmed to contain correct hrefs across both pages:
  `tel:0430006015` ×4, `wa.me/61430006015` ×3, Instagram ×3, Facebook ×3.
- Verified in browser at desktop (localhost:4322): contact band renders correctly — two navy
  buttons, two circular social icons, form intact. Icons centre correctly.
- **The form will NOT deliver email until the real Web3Forms access key replaces the TODO
  placeholder.** Client's email address is still pending (user waiting on client).
- **Nothing committed this session.** Working tree also still holds the prior session's
  **uncommitted `src/pages/gallery.astro` lightbox SVG-icon fix** (see below) — don't lose it.

## Next session starts with

1. **Commit strategy** — there are two logically separate uncommitted changes on
   `color-theme-change`: (a) the gallery lightbox SVG-icon centering fix (prior session), and
   (b) this session's socials/contact/Web3Forms work. Consider two commits.
2. When the client's email arrives: sign up at web3forms.com with it, paste the real access key
   into `WEB3FORMS_KEY` in `src/pages/index.astro` (2-line swap), then test a real submission.
3. Carryover still pending: **open the PR** for `color-theme-change`
   (https://github.com/noelsebastian22/topdel/pull/new/color-theme-change); **375px mobile
   verification** on a real narrow viewport (couldn't be done in-browser here).

## Open questions / go-live blockers

- Web3Forms `access_key` placeholder — needs client's email + real key before the form works.
- `site` domain still placeholder in `astro.config.mjs`.
- Mock testimonials in `src/data/testimonials.json` (currently empty array / mock) — swap for
  real before go-live (ACCC risk).
- Prior lightbox fix (`gallery.astro`) unverified in-browser (dev server for gallery not opened
  this session) — worth a quick click-through of the lightbox chevrons/close before committing.
