# Claude Design Prompt — Place Final Visuals in Case Studies

**Copy everything below and paste into Claude Design. Attach Images 1–8 only (the cream/forest ones). Do NOT attach Images 9–12 (black/blue).**

---

## Overview

I have 8 on-brand visuals (warm cream background, forest green — they match the portfolio perfectly). Place them into my two case studies at the right narrative moments, with captions.

I am NOT using the 4 black-background Napkin visuals (state machine, Sankey, iceberg, pie) — they clash with the design system. Instead, you'll **rebuild the state machine natively** using my design tokens (content provided below).

**Design tokens (for the native state machine and all captions):**
```css
--paper: #F0E8D8; --ink: #1A1815; --ink-muted: #5F584D;
--forest: #1F4A3B; --forest-tint: #DCE7DE; --marker: #F8E16C;
--coral: #C75A4A; --surface: #FFFFFF;
--font-display: 'Manrope'; --font-mono: 'IBM Plex Mono';
```

---

## Rename the 8 images before uploading

| Content of image | Rename to |
|------------------|-----------|
| Abstract systems/nodes hero (no text) | `pbp-hero.png` |
| Systems/Users/Events map (Loan Box, Payment Box, DEBIT=CREDIT) | `pbp-systems.png` |
| Five systems → one unified ledger (Disconnected/Consolidated) | `pbp-consolidation.png` |
| 44%/10% donut with Total Cases 26,943 | `pbp-data.png` |
| Voice wave → farmer + plant hero (no text) | `fc-hero.png` |
| Voice-first flow (5 numbered steps) | `fc-flow.png` |
| Three insight cards (voice/crop/trust) | `fc-insights.png` |
| Designing for constraint (radial, 4 constraints) | `fc-constraint.png` |

Store all in `images/`.

---

## Standard image component (use for ALL placed images)

```html
<figure style="margin: var(--sp-8) 0;">
  <img src="images/FILENAME.png" alt="DESCRIPTIVE_ALT" loading="lazy"
    style="width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 16px rgba(26,24,21,0.10); display: block;">
  <figcaption style="font-family: var(--font-mono); font-size: 13px; color: var(--ink-muted); margin-top: var(--sp-2); line-height: 1.5;">
    CAPTION_TEXT
  </figcaption>
</figure>
```

---

# PAYMENT BOX PRO — placements (work/payment-box-pro.html)

### 1. `pbp-hero.png` — Hero / intro
**Placement:** Top of the case study, right after the title/TL;DR, before Section 01.
**Caption:**
```
Systems design is about making order legible — turning scattered tools and silent risk into one source of truth.
```

### 2. `pbp-systems.png` — The ecosystem
**Placement:** Section 01 (Problem), after the opening description.
**Caption:**
```
The ecosystem before design: two systems, three roles, one rule — for every case, debit must equal credit. Mapping this revealed where the truth was getting lost.
```

### 3. `pbp-data.png` — The scale, quantified
**Placement:** Section 01 (Problem) or top of Section 02, after the systems map.
**Caption:**
```
The problem, quantified: across 26,943 cases, 44% carried audit risk and 10% lived entirely off-system. Together, nearly half of all transactions — which made a unified ledger a systemic necessity.
```

### 4. `pbp-consolidation.png` — The solution shift
**Placement:** Section 03 (Solution), as the opening visual.
**Caption:**
```
The shift: five disconnected tools collapsed into a single immutable ledger — accurate, complete, and trusted.
```

### 5. NATIVE STATE MACHINE — build this in HTML/CSS (do not use an image)
**Placement:** Section 03 (Solution) or Section 04 (Key Decisions).
**Heading:** `The ledger state machine`

Build a horizontal flow using the design tokens. Linear path:
```
Pending → Settlement → Settled → Posted → [branch]
```
From **Posted**, three branches:
- **Ledger nets to zero** → **Case Locked** (forest/positive — this is the goal state; highlight with marker)
- **Cancelled** → **Reversal Entry** (neutral)
- **Failed** → **Reprocessing** (coral/negative — loops back, does NOT reach Case Locked)

Use forest boxes with white text for main states, surface cards with forest borders for branches, coral accent for the Failed path. Make terminal state "Case Locked" visually distinct (marker highlight or forest-tint).

**Critical labels to include:**
- The rule: "A case can only lock when the ledger nets to zero."
- "Failed ≠ Reprocessing" (a failed transaction reprocesses; it never silently locks)

**Caption:**
```
The state machine that drove every UI decision. Terminal states are irreversible; a case locks only when the ledger nets to zero. Failure routes to reprocessing — never to a silent close.
```

---

# FARMER.CHAT — placements (work/farmer-chat.html)

### 6. `fc-hero.png` — Hero / intro
**Placement:** Top of the case study, after title/TL;DR.
**Caption:**
```
Designing for constraint: when a user can't read, can't type, and has never seen a chatbot, voice stops being a feature and becomes the product.
```

### 7. `fc-insights.png` — Research insights
**Placement:** Section 02 (Research), as the payoff of the research narrative.
**Caption:**
```
Three insights from two years of field research that reshaped the entire product: voice as product, crop-first identity, and trust that transfers through known extension workers.
```

### 8. `fc-flow.png` — The voice-first interaction
**Placement:** Section 03 (Key Decisions), illustrating the core interaction model.
**Caption:**
```
The voice-first interaction loop: tap, speak, process, respond, act — no typing, no reading required. Voice was the primary mode, not an accessibility add-on.
```

### 9. `fc-constraint.png` — The principle
**Placement:** Near the end — Section 03 (Decisions) close, or in the Reflection section.
**Caption:**
```
Constraints didn't limit the design — they shaped it. Every barrier (can't read, can't type, low bandwidth, no shared language) became a design directive that produced a better, more accessible product.
```

---

## Cleanup & rules

1. **Remove the 5 Rupyy raw-image embeds** if they're still present (we rebuilt that content natively earlier) — OR if you already rebuilt them as native components, keep those components and place these new visuals alongside, avoiding duplication. Specifically: the native "Systems table" component and the new `pbp-systems.png` cover similar ground — **keep the image (`pbp-systems.png`) and remove the native table** to avoid redundancy. Same for data: keep `pbp-data.png`, remove the native 44%/10% stat component. Keep the native Ownership timeline and native Outcome table (no image equivalent in this batch).
2. **Keep all existing prose.**
3. **One hero image per case study** (pbp-hero, fc-hero) — don't over-stack.
4. **Responsive:** all images `width:100%; height:auto`. State machine must stack/scroll cleanly on mobile.
5. **No black backgrounds anywhere** — everything stays in the warm cream/forest system.

---

## Final layout per case study (target)

**Payment Box Pro:**
1. Title + TL;DR
2. `pbp-hero.png`
3. Section 01 Problem + `pbp-systems.png` + `pbp-data.png`
4. Section 02 North Star
5. Section 03 Solution + `pbp-consolidation.png` + native state machine
6. Section 04 Key Decisions
7. Section 05 Edge cases
8. Native Ownership timeline ("How I owned this, month by month")
9. Section 06 Impact + native Outcome table
10. Reflection

**Farmer.Chat:**
1. Title + TL;DR
2. `fc-hero.png`
3. Section 01 Problem
4. Section 02 Research + `fc-insights.png`
5. Section 03 Key Decisions + `fc-flow.png`
6. Section 04 What I shipped
7. Section 05 Impact
8. `fc-constraint.png` + Reflection

---

## Verification checklist

- [ ] All 8 cream/forest images placed in correct sections
- [ ] NO black-background images anywhere
- [ ] State machine built natively in design tokens (not an image)
- [ ] "Failed ≠ Reprocessing" and "nets to zero" rules visible in state machine
- [ ] Each image has a mono-font caption
- [ ] One hero per case study, no over-stacking
- [ ] Redundant native components removed (systems table, 44%/10% stats) in favor of the images
- [ ] Native Ownership timeline + Outcome table retained
- [ ] All images responsive; state machine works on mobile
- [ ] Existing prose intact

---

**Place the 8 visuals, build the native state machine, run the checklist, and return both updated case studies. Let me know when ready.**
