# Before / after slider — Nano Banana (Gemini) image prompts

## How to run these

**Branch, don't chain.** Generate the base once, then make **two separate edits off that
same base image**. Never feed the "before" into the "after" — each generation drifts the
geometry slightly, and chaining compounds the drift until the slider visibly misaligns.

```
                    ┌─→ Prompt 2 (edit base) → before.jpg
Prompt 1 → base.png ┤
                    └─→ Prompt 3 (edit base) → after.jpg
```

### Step by step in the Gemini app

1. **New chat.** Paste Prompt 1. Set aspect ratio **3:2** and resolution **4K** in the
   image options. Generate 3–4 variations.
2. **Pick the most head-on one** and download it. A base with tilted verticals ruins both
   halves, so be fussy here — this is the only decision that can't be fixed later.
3. **Start a brand new chat.** Attach the downloaded base. Paste Prompt 2. Download the
   result as `before`.
4. **Start another brand new chat.** Attach the same base again. Paste Prompt 3. Download
   as `after`.

**The fresh chat each time is the part people skip.** If you stay in one thread, Gemini
edits the most recent image in the conversation — so your "after" gets built on top of
the dated "before" instead of the clean base, and you're back to chaining. A new chat with
the base attached is the only way to guarantee both edits start from the same pixels.

If a result drifts, don't accept it and patch it — reply in that same chat with
*"keep the exact camera position, wall dimensions and floor line from the uploaded image"*
and regenerate. Editing an already-drifted image never pulls it back into register.

### Sizing

Generate at **3:2 landscape, 4K**. The stage is `aspect-ratio: 16/10` on desktop and `4/5`
on mobile with `object-fit: cover`, so 3:2 crops a little off the sides on desktop and a
lot on mobile — keep the wardrobe centred and leave dead wall at the left and right edges.

Both files must come out the **same pixel dimensions**. Save them to
`src/assets/transform/before.jpg` and `after.jpg`, overwriting the placeholders. Nothing
else needs changing — the page picks them up automatically.

---

## Prompt 1 — the base room

> Photorealistic interior photograph of an empty bedroom wall recess in a modern
> Australian home. The recess is a rectangular alcove roughly 2.6 metres wide and
> 2.4 metres tall, set into a plain painted wall, completely empty — no wardrobe, no
> shelving, no doors. Plain plasterboard walls in a warm off-white. A slim horizontal
> air-conditioning vent sits in the wall directly above the recess. White painted
> skirting board runs along the base of the wall. Neutral beige low-pile carpet on the
> floor.
>
> Camera: shot straight on, perpendicular to the wall, lens axis exactly level, no
> converging verticals, 35mm full-frame equivalent, eye level at about 1.5 metres. The
> recess is centred in frame with even space on the left and right. Soft natural daylight
> entering from the left, gentle falloff to the right, no harsh shadows, no visible light
> fixtures. Clean, calm, estate-agent photography. 3:2 landscape aspect ratio, high
> resolution, sharp throughout.
>
> No people, no text, no watermarks, no furniture, no decor.

Generate a few and pick the one with the squarest, most head-on geometry — a tilted base
will make both halves of the slider look wrong.

---

## Prompt 2 — the "before" *(optional)*

Skip this if your base already looks suitably tired. Every extra edit is another chance
for the model to nudge the walls. If you do run it, keep the changes **surface-level
only** — finishes and wear, never geometry.

> Using this exact image, keep the camera position, framing, perspective, wall
> dimensions, ceiling height, vent position, skirting line and floor line **completely
> unchanged**. Change only the surface condition and contents of the recess so it looks
> dated and unrenovated:
>
> - Repaint the walls a tired yellowed cream with visible scuffs, patched filler marks
>   and uneven sheen
> - Add a single old varnished timber frame around the mouth of the recess, slightly
>   chipped
> - Inside the recess, add one lone chrome hanging rail spanning the width, empty, with a
>   plain painted shelf above it and a low painted divider partway down
> - Add a scuffed, dented painted back wall inside the recess
> - Make the carpet older and flattened with faint traffic marks
> - Slightly dull and flatten the overall lighting
>
> Do not move the camera. Do not change the aspect ratio. Do not add furniture, people,
> text or watermarks.

---

## Prompt 3 — the "after"

Run this against **the base image**, not the output of Prompt 2.

> Using this exact image, keep the camera position, framing, perspective, wall
> dimensions, ceiling height, vent position, skirting line and floor line **completely
> unchanged**. Install a custom-built floor-to-ceiling wardrobe that fills the recess
> exactly wall to wall, with no gaps or filler panels at the sides or top:
>
> - Four tall flat-slab hinged doors in a matte dove-grey finish, two on the far left and
>   two on the far right, with slim matte-black vertical bar handles
> - An open central bay between them, split into two equal compartments by a vertical
>   divider, each with a slim brass hanging rail
> - Warm LED strip lighting recessed under the shelf above each hanging rail, casting a
>   soft glow down onto the clothes
> - Below the open bay, two side-by-side banks of three deep drawers in the same matte
>   dove-grey, with matte-black bar pulls
> - Neatly spaced clothes on matching dark timber hangers — charcoal, navy and cream
>   shirts and jackets, evenly spaced, not crowded
> - A small stack of folded linen, a low potted plant and a single small framed photo on
>   the lower shelves, styled sparsely
> - Crisp painted walls in a clean warm white, fresh white skirting, clean carpet
>
> Cabinetry finish: flat matte laminate, precise shadow gaps, millimetre-accurate
> reveals, tradesman-level fit. Warm interior daylight from the left plus the LED accent
> glow. Photorealistic, sharp, high resolution.
>
> Do not move the camera. Do not change the aspect ratio. Do not add people, text,
> logos or watermarks.

---

## Checking the pair before you ship it

1. Open both images stacked in any editor and flick between them. The skirting line,
   ceiling line, vent and floor line must sit on **identical pixels**. If they shift,
   regenerate — don't try to nudge it in post.
2. Confirm both files are the same dimensions.
3. Drag the slider slowly across the join. Misalignment shows up worst right at the
   handle.

## A note on using these

These are AI-generated illustrations of the kind of transformation TopDel does, not
photographs of a real TopDel job. If the site presents them as an actual customer's
before and after, that's a claim that isn't true — and it's exactly the sort of thing a
cautious homeowner notices. The moment TopDel can send through a genuine matched pair
off a phone, swap these out: real ones will convert better anyway.
