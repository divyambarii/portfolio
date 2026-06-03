# Claude Design — FINAL Grab & Go Visual Assembly Prompt

**Paste this whole thing into Claude Design and attach the 9 image files listed below. This is the complete, final instruction set for the Grab & Go case study visuals.**

---

## Context

The Grab & Go case study page already exists (`work/grab-and-go.html`) with all its written content. This task is ONLY about visuals: placing 9 real image assets, rebuilding 6 conceptual diagrams natively in my design system, and wiring up navigation. Do not rewrite the existing prose.

**Leave the rest of the portfolio (homepage, About, Payment Box Pro, Farmer.Chat, resume) untouched except for the one homepage card change noted at the end.**

---

## Design tokens (use for every caption + every rebuilt diagram)

```css
--paper: #F0E8D8; --ink: #1A1815; --ink-muted: #5F584D;
--forest: #1F4A3B; --forest-tint: #DCE7DE; --marker: #F8E16C;
--coral: #C75A4A; --surface: #FFFFFF;
--font-display: 'Manrope'; --font-mono: 'IBM Plex Mono';
```

Rules: problem/negative = coral; solution/positive = forest; highlight one key item with marker; cards = white fill, thin border `1px solid rgba(26,24,21,0.08)`, 8px radius, soft shadow; captions = mono, 13px, ink-muted. **No black backgrounds, no blue, no off-brand colors anywhere.**

---

## PART A — Embed these 9 real images

Standard component for each:
```html
<figure style="margin: var(--sp-8) 0;">
  <img src="images/FILENAME" alt="ALT" loading="lazy"
    style="width:100%; height:auto; border-radius:8px; box-shadow:0 4px 16px rgba(26,24,21,0.10); display:block;">
  <figcaption style="font-family:var(--font-mono); font-size:13px; color:var(--ink-muted); margin-top:var(--sp-2); line-height:1.5;">CAPTION</figcaption>
</figure>
```

Place each at the section indicated:

1. **`gg-ui-onboarding-set.png`** → Section 12 (The Redesign: Guided Checkout), as the opening visual.
   Caption: *Onboarding into Guided Checkout — a clear entry point, store locator, and branded splash. Shopping starts with orientation, not confusion.*

2. **`gg-ui-scan-and-stores.png`** → Section 12 or 17 (shopper intent / scanning).
   Caption: *Find a store, then scan to add — the core loop. Item recognition surfaces the product instantly with a single tap to add.*

3. **`gg-ui-edge-cases.png`** → Section 22 (Giving Users Back Their Time — edge cases) or near the edge-case table.
   Caption: *Designing for the hard moments: age verification, scan errors, and unrecognized items each get a clear, non-punishing path forward.*

4. **`gg-ui-annotated-flow.png`** → Section 13 (How We Got There) or Section 21 (adaptive framework). This is a key artifact — give it room.
   Caption: *The full flow, annotated with design decisions: custom UX writing, color-coded scanning (red for restricted, green for fresh produce), and verified profiles to reduce staff dependency. Every choice traced to a user need.*

5. **`gg-ui-full-flowmap.png`** → Section 16 or 23 (system modeling / SmartCheckout).
   Caption: *End-to-end system map: every screen and state, wired into one coherent flow. Designing the system, not just the screens.*

6. **`gg-photo-snackaisle.png`** → Section 04 (Kickoff) or 05 (Tracing the Friction).
   Caption: *Field research in a real store — observing how shoppers actually move, hesitate, and decide. No scripts, no assumptions.*

7. **`gg-photo-shop-haircolor.png`** → Section 05 (Tracing the Friction), alongside the snack-aisle photo as a small 2-up gallery if layout allows.
   Caption: *Watching real interactions in context — where shoppers paused, what confused them, and what they reached for help with.*

8. **`gg-photo-team-review.png`** → Section 03 (My Role) or 18 (usability sessions).
   Caption: *Cross-functional review: synthesizing field findings with the team and iterating on the flow between rounds.*

9. **`gg-photo-user-holding-app.png`** → Section 24 or 25 (Results / Impact) — this is the strongest photo, use it as the human payoff near the results.
   Caption: *A real shopper using Grab & Go in-store — the moment the design left the file and met the world.*

**Photo privacy:** if I've blurred faces, keep as provided. Do not add heavy filters to any photo — they must read as authentic.

---

## PART B — Rebuild these 6 diagrams NATIVELY (do not use images)

I have black-background/blue versions of these, but they clash. Rebuild each in the design tokens above, using the content below. Match the styling of the native components already in my Payment Box Pro case study.

### B1 — Friction Journey (Section 05 or 09)
Heading: `Where the journey breaks down`
A horizontal 7-stage journey bar: Approach Kiosk → Self Checkout → Scan Items → Bag Items → Review & Confirm → Make Payment → Exit. Below it, a frustration curve that spikes at "Bag Items" — call out the **Bagging Error Loop** as the worst friction point (use coral). Two zone labels across the top: "Friction" (early stages) and "Disruption" (later stages).
Caption: *Frustration mapped across the checkout journey. The bagging step is where the experience collapses — the "bagging error loop" that sends users back, or to staff.*

### B2 — Spectrum vs. Situation (Section 13 or 14 — inclusive design)
Heading: `Designing for spectrums and situations`
Two labeled groups of cards side by side.
**SPECTRUM** (permanent/inherent traits): Tech Literacy · Physical Ability · Language Proficiency · Attention Span · Cognitive Load · Hand Mobility · Visual Acuity · Hearing Sensitivity · Familiarity with Self-Checkout.
**SITUATION** (temporary/contextual): Rushing · Hands Full · Low Battery · Noisy Environment · Poor Lighting · Unfamiliar Store · With Kids · Wearing Gloves · Elderly User.
Render as two tidy grids of small forest-tint cards.
Caption: *Inclusive design means designing for spectrums (who the user is) and situations (what they're dealing with right now). Both shift the experience — neither fits the "default user" myth.*

### B3 — Hierarchy of Needs Pyramid (Section 15 — From Degradation to Adaptation)
Heading: `A hierarchy of needs for self-checkout`
A 3-tier pyramid (forest fills):
- Base — **Enabling**: Reliable, intuitive, accessible, transparent, secure
- Middle — **Empowering**: Effortless, adaptive, responsive, efficient
- Top — **Elevating**: Seamless, predictive, rewarding, engaging
Left-side label running up: "Grounded — solving practical checkout inefficiencies first." Right-side label: "Future Forward — designing a seamless, delightful experience."
Caption: *Rather than degrading features for hard environments, I built up from a stable base — enable first, then empower, then elevate.*

### B4 — Self-Checkout System Flow / Confidence Score (Section 19 or 21)
Heading: `The confidence-score flow`
A flowing path with these nodes: Customer Starts Scanning → System Checks Scan Accuracy → [branch on confidence]. **High Confidence** → Item Validated → Proceed to Payment → Checkout Completed (forest/positive path). **Low Confidence** → Requests Re-scan → Smart Intervention Prompts Assistance → rejoins flow (coral accent on the low-confidence branch).
Caption: *An adaptive flow driven by a confidence score: high confidence moves silently forward; low confidence prompts a gentle, specific intervention — never a dead stop.*

### B5 — Streamlined Checkout Process (Section 17 or 19)
Heading: `From random scanning to real-time correction`
A 5-step left-to-right process: Random Scanning (items scanned in any order) → Error Encounter (unreadable barcodes arise) → Manual Intervention (corrections needed, costs time) → Intelligent Suggestion (system suggests optimal scanning order) → Real-time Error Correction (errors fixed on the spot). Show progression from friction (coral, left) to resolution (forest, right).
Caption: *The system learns the shopper's pattern and shifts effort from manual correction to real-time, on-the-spot guidance.*

### B6 — Transaction Clarity / "We've Got Your Back" (Section 12 or 23)
Heading: `Three signals that build trust`
Three overlapping concepts around a center labeled **Transaction Process**:
- **Scanning Confirmation** — users know the system registered their items
- **Payment Status** — clarity that the transaction is complete
- **Completion Signal** — users know they can leave without further action
Render as three forest-tint cards or a simple Venn in the palette.
Caption: *Trust at checkout comes from three clear signals — did it scan, did it pay, can I go. Removing doubt at each was the difference between confidence and hesitation.*

---

## PART C — Skip entirely
Do not use: any stock photos (kiosk/Safeway/vintage-store/elderly/wine/touchscreen/self-checkout-bank), handwritten planning notes, duplicate aisle shots. The dense research context-map is optional — only include it small, with a caption noting "full context map available on request," if it fits naturally in Section 13; otherwise omit.

---

## PART D — Wire up navigation (the entry points)

1. **Homepage:** ensure the Grab & Go case study card exists in the portfolio grid, styled identically to the Payment Box Pro and Farmer.Chat cards. Title "Grab & Go", one-liner "Reimagining self-checkout — adaptive, inclusive, frustration-free", tags "Product Design · Accessibility · Research", linking to `work/grab-and-go.html`.
2. **Case-study loop:** add Grab & Go to the "Next project" navigation at the bottom of Payment Box Pro and Farmer.Chat, so all three link in a loop.
3. **Grab & Go page itself:** confirm it has working links back to Home and to the other two case studies (not a dead end).
4. **Report** which entry points already existed and which you added.

---

## Verification checklist

- [ ] All 9 real images embedded at the right sections with mono captions
- [ ] `gg-ui-annotated-flow.png` given prominent space (key artifact)
- [ ] `gg-photo-user-holding-app.png` placed near results as the human payoff
- [ ] All 6 diagrams rebuilt natively in cream/forest — NO black/blue versions used
- [ ] No stock photos, no handwritten notes, no duplicates anywhere
- [ ] Homepage Grab & Go card present and matching the other two
- [ ] Next-project loop includes all three case studies
- [ ] Grab & Go page links back to home + other case studies
- [ ] Everything responsive on mobile (images scale, diagrams stack)
- [ ] Existing Grab & Go prose untouched; rest of portfolio untouched
- [ ] Report of pre-existing vs. added entry points provided

---

**Files to attach (9):** gg-ui-onboarding-set.png, gg-ui-scan-and-stores.png, gg-ui-edge-cases.png, gg-ui-annotated-flow.png, gg-ui-full-flowmap.png, gg-photo-snackaisle.png, gg-photo-shop-haircolor.png, gg-photo-team-review.png, gg-photo-user-holding-app.png

**Assemble the visuals, rebuild the 6 diagrams natively, wire the navigation, run the checklist, and report back. This completes the Grab & Go case study.**
