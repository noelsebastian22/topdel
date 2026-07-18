---
name: TopDel Renovation
description: Custom joinery, documented like a shop drawing — measured, annotated, precise.
colors:
  ink: "#0f2240"
  blueprint-blue: "#2e6fb7"
  paper-tint: "#eaf1f8"
  tape-yellow: "#ffb917"
  tape-yellow-hover: "#ffc945"
  ink-hover: "#1a3560"
  slate: "#4a5a72"
  white: "#ffffff"
  error-red: "#a4271b"
  line: "rgba(15, 34, 64, 0.16)"
  line-on-dark: "rgba(255, 255, 255, 0.35)"
typography:
  display:
    fontFamily: "Archivo Variable, Archivo, sans-serif"
    fontSize: "clamp(2.4rem, 5.4vw, 4.2rem)"
    fontWeight: 850
    lineHeight: 1.05
    letterSpacing: "-0.015em"
    fontVariation: "width 112%"
  headline:
    fontFamily: "Archivo Variable, Archivo, sans-serif"
    fontSize: "clamp(1.9rem, 3.6vw, 2.8rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.015em"
    fontVariation: "width 115%"
  title:
    fontFamily: "Archivo Variable, Archivo, sans-serif"
    fontSize: "1.35rem"
    fontWeight: 800
    lineHeight: 1.1
  body:
    fontFamily: "Instrument Sans Variable, Instrument Sans, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "IBM Plex Mono, ui-monospace, monospace"
    fontSize: "0.66rem"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "0.16em"
rounded:
  sm: "6px"
  md: "10px"
  full: "50%"
spacing:
  gutter: "clamp(1.25rem, 4vw, 2.5rem)"
  section-y: "clamp(4.5rem, 9vw, 7.5rem)"
  container: "min(1160px, 100% - 2 * var(--gutter))"
components:
  button-primary:
    backgroundColor: "{colors.tape-yellow}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0.95rem 1.7rem"
  button-primary-hover:
    backgroundColor: "{colors.tape-yellow-hover}"
    textColor: "{colors.ink}"
  button-ghost:
    textColor: "{colors.white}"
    rounded: "{rounded.sm}"
    padding: "0.95rem 1.7rem"
  button-navy:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.sm}"
    padding: "0.95rem 1.7rem"
  card-service:
    backgroundColor: "{colors.white}"
    textColor: "{colors.slate}"
    rounded: "{rounded.sm}"
    padding: "1.7rem 1.6rem 1.9rem"
  input-field:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0.7rem 0.85rem"
---

# Design System: TopDel Renovation

## 1. Overview

**Creative North Star: "The Shop Drawing"**

The whole site behaves like a joiner's working drawing brought to full scale. Everything is *measured*: dimension lines run down the hero with real tick marks, mono spec labels annotate every photo and section the way a fabrication sheet annotates a part, and the copy talks in millimetres. The premium, bespoke quality this brand wants is not carried by ornament or gloss — it's carried by **precision**. A drawing that's exact reads as expensive; a drawing that's fussy reads as cheap. When in doubt, tighten alignment and trust the whitespace, don't add decoration.

The palette is a literal drafting metaphor: deep drafting-navy as the ink, blueprint-blue for the annotation layer, drafting-paper tint for the alternate ground, and a single tape-measure yellow that appears only where the visitor is meant to act. Structure is flat and honest — surfaces are defined by hairline rules, not by drop shadows — so the page feels like paper on a bench, not a stack of floating cards. Real installed-joinery photography does the emotional work; the drawing language frames it.

This system explicitly rejects four things, straight from the brand's anti-references: **generic IKEA / flat-pack** catalogue styling (this is made-to-measure, never modular), **cheap tradie clip-art** (no spinning badges, starbursts, or "10 YEARS!" noise), **corporate SaaS / startup** tropes (no gradient hero, no icon-and-heading feature-card monoculture, no stock-illustration people), and **overwrought luxury** (no gold serifs, no ornament-as-status). Refinement here is hands-on and earned.

**Key Characteristics:**
- Measured and annotated — mono spec labels and dimension lines are the signature, not an accent.
- Flat and honest — hairline borders define surface; shadow is rare and deliberate.
- One-action colour — tape-measure yellow means "do this," and nothing else.
- Photography-led trust — real TopDel installs only; a colour block is never a stand-in for a photo.
- Australian, plain-spoken, exact.

## 2. Colors

A drafting-table palette: navy ink, blueprint-blue annotations, paper tint, and one high-visibility yellow held in reserve.

### Primary
- **Drafting Navy** (`#0f2240`): The ink of the whole system. Carries the header, footer, hero ground, the dark "Process" band, headings on light, and body text emphasis. It is the dominant dark surface — roughly a third of the page sits on it. Text on navy is white or a white transparency; never grey.

### Secondary
- **Blueprint Blue** (`#2e6fb7`): The annotation layer. Used for links, every mono spec label, photo captions, eyebrow dimension-lines, and small technical metadata. It is a *labelling* colour, not a fill — it rarely appears as a background.

### Tertiary
- **Tape-Measure Yellow** (`#ffb917`, hover `#ffc945`): The single action colour. Primary buttons, the brand mark tile, the focus ring, the address-plate border, and the full-bleed contact band. Governed by a hard rule (below). Text on yellow is always Drafting Navy.

### Neutral
- **Drafting-Paper Tint** (`#eaf1f8`): The alternate section ground (Services, Testimonials) that separates bands without a border. A cool, blueprint-leaning off-white — never a warm cream.
- **Slate** (`#4a5a72`): Body text on white and paper-tint. Meets AA on both. Do not lighten it for "elegance."
- **White** (`#ffffff`): Default page ground and card fill.
- **Hairline** (`rgba(15,34,64,0.16)` on light; `rgba(255,255,255,0.35)` on dark): Borders and dividers. The primary way surfaces are separated.
- **Fault Red** (`#a4271b`): Reserved solely for form error states. Never decorative.

### Named Rules
**The One-Action Yellow Rule.** Tape-measure yellow is only ever used on something the visitor is meant to *do* (a primary CTA, the phone action) or on the two brand fixtures that stand in for it (the mark tile, the address plate). It is forbidden as a decorative fill, a heading colour, or a section background — with exactly two sanctioned exceptions: the deliberate contact band, which is itself one big call to action, and the hero H1 accent span ("the millimetre."), the brand's promise rendered in the brand's colour, once per site. If yellow appears anywhere else and nothing there is clickable, it's wrong.

**The No-Grey-On-Colour Rule.** Text on navy or yellow is never mid-grey. On navy, use white or a white transparency (≥0.72 for body). On yellow, use Drafting Navy. Grey on a colour reads as washed-out and undercuts the precision.

## 3. Typography

**Display Font:** Archivo Variable (with Archivo, sans-serif fallback) — width axis pushed to 115–125%.
**Body Font:** Instrument Sans Variable (with Instrument Sans, sans-serif).
**Label / Mono Font:** IBM Plex Mono (400 / 500).

**Character:** A grotesque-sans hierarchy with one deliberate trick — Archivo's width axis is expanded (`font-stretch: 115–125%`) so headings read broad, planted, and confident, like stencilled signage on a workshop wall. Instrument Sans keeps body copy neutral and legible underneath. IBM Plex Mono is the drawing's annotation hand: it labels, dimensions, and captions, and it is the single strongest carrier of the "shop drawing" voice. The three sit on a clear contrast axis (expanded-grotesque display / neutral humanist body / technical mono), so they never blur together.

### Hierarchy
- **Display** (Archivo, weight 850, `clamp(2.4rem, 5.4vw, 4.2rem)`, line-height 1.05, width 112%): Hero H1 only. Set over the hero photograph in white, with the closing phrase ("the millimetre.") in tape-measure yellow — the one sanctioned non-action use of yellow. Sized to sit inside the image's quiet zone; premium is carried by air and restraint, not scale. `text-wrap: balance`.
- **Headline** (Archivo, weight 800, `clamp(1.9rem, 3.6vw, 2.8rem)`, line-height 1.05, width 115%): Section H2s. Colour flips with the band (navy on light, white on the dark Process band).
- **Title** (Archivo, weight 800, `1.35rem`, line-height 1.1): Card and step H3s (services, process, footer columns).
- **Body** (Instrument Sans, weight 400, `1.0625rem`, line-height 1.6, colour Slate): Paragraph copy. Hold measures to ~34rem / 65–75ch; the hero sub and contact copy already cap near there.
- **Label** (IBM Plex Mono, weight 500, `~0.62–0.72rem`, letter-spacing `0.16–0.22em`, UPPERCASE, colour Blueprint Blue or Yellow on dark): Eyebrows, spec codes, captions, form field labels, dimension annotations, footer fine print.

### Named Rules
**The Mono-Is-The-Spec-Label Rule.** IBM Plex Mono is reserved for labels, specs, dimensions, and captions — the annotation layer of the drawing. It is never used for body copy, headings, or buttons. Every mono string is UPPERCASE with wide tracking (≥0.16em). This is the brand's signature; use it deliberately and it reads bespoke, scatter it and it reads like a costume.

**The Expanded-Width Rule.** Display and headline Archivo always carry the expanded width axis (`font-stretch` 115–125%). At default width the headings look ordinary; the expansion is what makes them TopDel. Letter-spacing floor stays at `-0.015em` — tight, but never touching.

## 4. Elevation

Flat by default. Depth is communicated by **hairline borders and colour blocking**, not by a shadow scale — the page is meant to feel like paper on a bench. Shadows are the rare exception, used only on the two elements that are genuinely lifted off the page, plus a functional blur on the sticky header once it detaches from the hero.

### Shadow Vocabulary
- **Lifted card** (`box-shadow: 0 14px 40px rgba(15,34,64,0.18)`): The quote form only. It floats above the yellow contact band because it's the moment of action.
- **Object drop** (`box-shadow: 0 10px 30px rgba(15,34,64,0.45)`): The address-plate fixture, so it reads as a physical made object sitting on the dark tile.
- **Sticky header** (`backdrop-filter: blur(10px)` + `box-shadow: 0 1px 0 rgba(255,255,255,0.08)` over `rgba(15,34,64,0.92)`): Appears only after scroll, to lift the nav off the content beneath it.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat and separated by 1px hairlines or a change of ground colour (white ↔ paper-tint ↔ navy). A component earns a shadow only if it is literally lifted or is *the* action on screen. If you're adding a shadow to make a card "pop," delete it and add a border instead.

## 5. Components

Interactive components read **precise and confident**: squared-ish 6px corners, firm hairline borders, one reserved action colour, tactile without being loud.

### Buttons
- **Shape:** Gently squared corners (6px, `--radius`). Display font (Archivo), weight 700, `padding: 0.95rem 1.7rem`, `transition: transform / background / color 0.18s ease`.
- **Primary (solid):** Tape-measure yellow ground, Drafting Navy text. Hover lightens to `#ffc945`. This is the one true CTA. On desktop with a fine pointer, the hero primary gains a subtle magnetic pull toward the cursor (motion-safe only).
- **Ghost:** Transparent with a `rgba(255,255,255,0.35)` border and white text — for secondary actions over dark/hero grounds. Hover brightens the border to solid white.
- **Navy:** Solid Drafting Navy ground, white text — used for the form submit, where yellow would clash with the yellow band. Hover lightens to `#1a3560`.

### Cards / Containers
- **Corner Style:** 6px (`--radius`).
- **Background:** White on default grounds; the inverted `.service--plate` tile uses Drafting Navy.
- **Shadow Strategy:** None by default (see Elevation). Border does the work.
- **Border:** 1px Hairline (`rgba(15,34,64,0.16)`).
- **Internal Padding:** Generous — `1.7rem 1.6rem 1.9rem` on service cards.

### Inputs / Fields
- **Style:** White ground, 1px Hairline border, 6px corners, `0.7rem 0.85rem` padding. Labels are mono, uppercase, `0.16em` tracked, in Drafting Navy sitting above each field.
- **Focus:** `outline: 3px solid var(--blue)` with `1px` offset — a firm blueprint-blue ring, not a soft glow.
- **Error:** Status text turns Fault Red (`#a4271b`), uppercase mono; the form always offers the phone number as a fallback.

### Navigation
- **Style:** Fixed, transparent over the hero; on scroll it gains `rgba(15,34,64,0.92)` + `blur(10px)`. Links are white Instrument Sans (weight 500) at 0.9 opacity.
- **Hover:** Full opacity with a yellow underline (`text-underline-offset: 5px`).
- **Mobile (<900px):** Nav collapses to a two-bar toggle; the menu drops as a near-opaque navy panel. The desktop "Get in touch" button is hidden in the bar and repeated inside the mobile panel.

### Signature: Dimension Lines & Spec Eyebrows
The brand's fingerprint. The **eyebrow** is a mono label flanked by drafting tick-marks (`.eyebrow::before/::after` draw ruled ticks). The **hero dimension lines** (`.dim-v`, `.dim-h`) are mono annotations riding measured lines with end-ticks, reading "FLOOR TO CEILING — EVERY MM USED" and "WALL TO WALL · NO FILLER PANELS." These are hidden below 900px. Treat them as the drawing's measurement layer — precise, sparse, never decorative filler.

### Signature: Address Face Plate
A brand fixture: Drafting Navy tile, 3px yellow border, 10px corners, a huge expanded-Archivo house number in yellow over a mono street label. It doubles as a product sample and a visual anchor for the Services grid.

### Gallery Lightbox
Native `<dialog>` (`showModal`), navy backdrop at 0.88, image contained to `82svh`, mono caption, a yellow circular close button. Click-outside and a dedicated close button both dismiss.

## 6. Do's and Don'ts

### Do:
- **Do** keep tape-measure yellow (`#ffb917`) on actions only — the primary CTA, the phone, the mark, the plate, the contact band. Follow the One-Action Yellow Rule.
- **Do** carry every spec, dimension, caption, and field label in UPPERCASE IBM Plex Mono with ≥0.16em tracking. It's the shop-drawing voice.
- **Do** keep display and headline Archivo on the expanded width axis (`font-stretch` 115–125%); it's what makes the type TopDel.
- **Do** separate surfaces with 1px hairlines or a change of ground colour (white ↔ `#eaf1f8` ↔ navy). Reach for a border before a shadow.
- **Do** ship real installed-joinery photography with specific, voice-carrying alt text. "Every photo is a TopDel install — no stock imagery."
- **Do** keep body text in Slate (`#4a5a72`) or navy at ≥4.5:1; white or `rgba(255,255,255,≥0.72)` on navy.
- **Do** gate every animation behind `prefers-reduced-motion` with a static, already-visible fallback (the reveal pattern already does this).

### Don't:
- **Don't** style anything like **generic IKEA / flat-pack** — no catalogue modular-unit framing. This is made-to-measure.
- **Don't** add **cheap tradie clip-art**: no spinning badges, starbursts, checkmark-list clip-art, or "10 YEARS EXPERIENCE!" noise.
- **Don't** slip into **corporate SaaS / startup** tropes: no gradient hero, no repeating icon-and-heading feature-card grid, no stock-illustration people, no hero-metric template.
- **Don't** reach for **overwrought luxury** — no gold serifs, no ornament-as-status, no glassmorphism. Refinement here is precision, not gloss.
- **Don't** put mid-grey text on navy or yellow, and don't lighten Slate for "elegance." (The No-Grey-On-Colour Rule.)
- **Don't** use IBM Plex Mono for body copy, headings, or buttons — labels and specs only.
- **Don't** add drop shadows to make cards "pop." Flat by default; shadow only for the form, the plate, and the sticky header.
- **Don't** use a coloured `border-left`/`border-right` stripe as an accent, gradient-clipped text, or a tiny tracked eyebrow above *every* section — the eyebrow is a deliberate, tick-marked brand element, not per-section scaffolding.
