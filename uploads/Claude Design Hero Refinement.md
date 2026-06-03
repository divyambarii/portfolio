# Claude Design Brief — About Page Hero Refinement

**Page:** About
**Goal:** Fix emphasis overload and weak vertical rhythm in the hero. The layout isn't broken, but the current version undercuts the "systems designer" credibility through highlight overuse, sloppy marker geometry, and competing typographic voices.

**Constraints:** Keep all design tokens, fonts (Manrope + IBM Plex Mono), and the two-column layout. Do NOT change navigation, the color palette, or copy beyond what's specified below.

---

## Diagnosis (why these changes)

| Issue | Problem it creates |
|---|---|
| Three consecutive marker highlights (`systems design`, `constraint-based UX`, `AI workflows`) | Flattens emphasis — when everything is highlighted, nothing is. Creates a noisy ragged left edge. |
| Inconsistent highlight geometry | Uneven padding, baselines, descender clipping — a tell to design-literate reviewers. |
| Large dead zone between headline and body | Two text blocks float with no grid relationship. |
| Abrupt jump: display-bold headline → thin grey body | No intermediate type step. |
| Inline bold in body (`thinking carefully`, `listening hard`) | A fourth emphasis style competing on one screen. |
| Rounded-corner + drop-shadow photo card | Reads dated (2020 SaaS), not editorial/senior. |

---

## Changes

### 1. Headline emphasis — reduce to a single highlight
Currently three phrases are marker-highlighted, which flattens emphasis. **Remove all three marker highlights.** Keep the entire headline in solid ink (`#1A1815`), and highlight **only one** phrase — `systems design` — with the marker (`#F8E16C`). Everything else stays unhighlighted ink. One highlight = one clear signal.

> *Alternative to consider:* if you'd rather lead the eye to `AI workflows` (the forward-looking, differentiating bet), swap the single highlight to that phrase instead. Pick one — not all three.

### 2. Fix marker highlight geometry
The highlight must be a clean, consistent block:
- Equal horizontal padding: `0.15em` each side
- Sits behind the text as a slight, skew-free rectangle
- Aligns to a stable baseline that clears descenders (no clipping against letterforms)
- Use `box-decoration-break: clone` so multi-line wraps stay clean

### 3. Tighten vertical rhythm
Reduce the gap between the headline and the intro paragraph from the current ~120px to roughly **48px** on desktop. Both text blocks keep the same left edge (already correct).

### 4. Add an intermediate type step
The jump from huge display-bold headline to thin grey body is too abrupt. Add a **single-line lead sentence** between them:
- Medium weight, ink color (`#1A1815`), ~22px
- Suggested copy: *"I design systems that hold up under real-world constraint."*
- The grey body paragraph follows below this lead line.

### 5. Body paragraph — remove inline bold
Remove the bold treatment on `thinking carefully` and `listening hard`. Keep the whole paragraph in the grey body color (current `#6B665E` or equivalent). The display headline already carries the emphasis weight; the body should be calm and even.

### 6. Photo treatment — modernize
- Remove the drop shadow.
- Reduce corner radius from the current large rounding to a tight **8px** (or square it entirely — square reads more editorial and senior).
- Keep the image as-is otherwise.

### 7. Vertical alignment
Top-align the photo with the `ABOUT` eyebrow label — the photo's top edge and the eyebrow should sit on the same horizontal line. Currently the photo starts lower.

---

## Summary of emphasis hierarchy (target end state)

1. **Display headline** (bold, ink) — carries primary weight
2. **One marker highlight** — single focal signal
3. **Lead line** (medium, ink, ~22px) — bridge
4. **Body paragraph** (grey, even, no inline bold) — calm support

Four voices reduced to a clean, intentional ladder.
