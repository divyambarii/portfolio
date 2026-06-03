# Claude Design Prompt — Add Field Research Photos to Farmer.Chat

**Copy below and paste into Claude Design. Attach the field research photos (converted to JPG, faces blurred if you've chosen that route).**

---

## What these are

Real field-research photos from my two years at Digital Green — focus-group sessions with smallholder farmers (the actual users of Farmer.Chat). They go in the **Research section** of the Farmer.Chat case study as proof of ground-level fieldwork.

These are photographs, not illustrations — they intentionally have a different visual register from the diagrams. Frame them consistently so they feel deliberate.

---

## Before placing — prep notes

1. **File format:** All photos must be JPG or PNG (no HEIC — browsers can't render it). If any HEIC files come through, flag them so I can convert.
2. **Faces:** [If you blurred faces, say: "Faces are softened for privacy — keep them as provided."] [If not blurred, say: "Use as provided."]
3. **Rename files:**
   - Main wide group shot → `fc-research-1.jpg`
   - Second photo → `fc-research-2.jpg`
   - Third photo → `fc-research-3.jpg`
   - Store in `images/`

---

## Design tokens (for framing + captions)

```css
--paper: #F0E8D8; --ink: #1A1815; --ink-muted: #5F584D;
--forest: #1F4A3B; --forest-tint: #DCE7DE; --marker: #F8E16C;
--surface: #FFFFFF; --font-mono: 'IBM Plex Mono';
```

---

## Placement: Section 02 — Research

**If there are 2–3 photos**, present them as a small research gallery (a 2- or 3-column grid that stacks on mobile). If only 1 usable photo, present it full-width.

### Single photo (full-width) version:

```html
<figure style="margin: var(--sp-8) 0;">
  <img src="images/fc-research-1.jpg" alt="Field research session with smallholder farmers — focus group discussion" loading="lazy"
    style="width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 16px rgba(26,24,21,0.12); display: block;">
  <figcaption style="font-family: var(--font-mono); font-size: 13px; color: var(--ink-muted); margin-top: var(--sp-2); line-height: 1.5;">
    Field research in practice: a focus-group session with smallholder farmers. Two years of this — moderated interviews, contextual inquiry, prototype testing in five languages — is what turned assumptions into the three insights that reshaped the product.
  </figcaption>
</figure>
```

### Gallery (2–3 photos) version:

```html
<figure style="margin: var(--sp-8) 0;">
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: var(--sp-3);">
    <img src="images/fc-research-1.jpg" alt="Focus-group session with smallholder farmers" loading="lazy"
      style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px; box-shadow: 0 4px 16px rgba(26,24,21,0.12); display: block;">
    <img src="images/fc-research-2.jpg" alt="Field research with farming community" loading="lazy"
      style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px; box-shadow: 0 4px 16px rgba(26,24,21,0.12); display: block;">
    <!-- add third img if available -->
  </div>
  <figcaption style="font-family: var(--font-mono); font-size: 13px; color: var(--ink-muted); margin-top: var(--sp-2); line-height: 1.5;">
    Field research in practice: moderated sessions with smallholder farmers across India and East Africa. Sitting with users — in their context, in their language — is what turned assumptions into the three insights that reshaped the product.
  </figcaption>
</figure>
```

**Placement detail:** Put this gallery near the TOP of Section 02 (Research), before or right after the three insight cards (`fc-insights.png`). The flow should read: *"Here's where I was → here's what I learned."*

---

## Optional subtle unifying touch (only if it looks good)

To tie the photos visually to the warm palette WITHOUT destroying authenticity, you MAY add a very subtle warm overlay. Keep it barely-there — the photo must still read as a real, un-stylized photograph. If in doubt, skip this and leave photos natural.

```css
/* Optional: only if it doesn't muddy the photo */
filter: saturate(0.95) contrast(1.02);
```

Do NOT apply heavy duotones, sepia, or strong tints — field research photos lose credibility when they look over-processed.

---

## Rules

1. **Photos go ONLY in the Research section** of Farmer.Chat — they're research evidence, not decoration.
2. **Don't scatter them** across the case study.
3. **Keep captions in mono font**, consistent with all other visuals.
4. **Responsive:** grid stacks to single column on mobile.
5. **Don't add photos to Payment Box Pro** — that case study stays diagram-driven.

---

## Verification checklist

- [ ] Photos appear in Farmer.Chat Section 02 (Research) only
- [ ] All photos are JPG/PNG (no HEIC)
- [ ] Faces handled per the privacy choice noted above
- [ ] Consistent rounded corners + shadow + mono caption
- [ ] Gallery stacks cleanly on mobile
- [ ] No heavy filters — photos look authentic
- [ ] Payment Box Pro unchanged (no photos there)
- [ ] Existing prose and other visuals intact

---

**Add the field research photos to the Farmer.Chat Research section, frame them consistently, run the checklist, and return the updated case study.**
