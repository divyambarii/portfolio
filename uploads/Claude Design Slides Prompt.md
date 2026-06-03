# Claude Design Prompt — Add Real Project Slides to Payment Box Pro

**Copy everything below and paste into Claude Design, then attach the 5 images.**

---

## Context for you (Claude Design)

I'm adding **5 real strategic slides** from my actual work at CarDekho/Rupyy to my Payment Box Pro case study. These slides show my systems thinking, data analysis, and project leadership — which are stronger than UI mockups.

I need you to **place these 5 images strategically** in the existing `work/payment-box-pro.html` case study, in the right narrative positions, with captions that tie each slide to the "systems design" thesis.

**Important:**
- Keep the existing design system (colors, fonts, spacing — paper #F0E8D8, ink #1A1815, forest #1F4A3B, marker #F8E16C, Manrope + IBM Plex Mono)
- Images should be full-width within the content container, with rounded corners and a subtle shadow
- Each image gets a caption below it in IBM Plex Mono, muted color, smaller font
- Maintain the existing case study text — these images *supplement*, they don't replace the writing

---

## The 5 images (rename them before uploading)

Please rename the uploaded files to these names and reference them in the HTML:

| Upload file | Rename to | Content |
|-------------|-----------|---------|
| WhatsApp...Business.jpeg | `pbp-context.jpg` | Systems/Users/Events mapping |
| WhatsApp...Business__1_.jpeg | `pbp-problem.jpg` | Problem Understanding + Root Cause |
| WhatsApp...Business__2_.jpeg | `pbp-data.jpg` | Data Centricity (44%, 10%) |
| WhatsApp...Business__3_.jpeg | `pbp-ownership.jpg` | 4-month Ownership timeline |
| WhatsApp...Business__4_.jpeg | `pbp-outcome.jpg` | Outcome (Current vs Future State) |

Store them in an `images/` folder: `images/pbp-context.jpg`, etc.

---

## Where to place each image (in narrative order)

### **IMAGE PLACEMENT 1: `pbp-context.jpg` (Systems mapping)**

**Section:** 01 — The Problem  
**Placement:** Right after the opening problem description, before the persona cards.

**Add this HTML block:**

```html
<figure style="margin: var(--sp-8) 0;">
  <img src="images/pbp-context.jpg" alt="Systems, users, and events mapping for the Ledger Management System" 
    style="width: 100%; border-radius: 8px; box-shadow: 0 4px 16px rgba(26,24,21,0.12); display: block;">
  <figcaption style="font-family: var(--font-mono); font-size: 13px; color: var(--ink-muted); margin-top: var(--sp-2); line-height: 1.5;">
    The ecosystem before design: Two systems (Loan Box, Payment Box), three user roles (Maker, Checker, Payment Ops), and a core financial truth — for every case, debit must equal credit. Mapping this was the first step to understanding where the truth was getting lost.
  </figcaption>
</figure>
```

---

### **IMAGE PLACEMENT 2: `pbp-problem.jpg` (Problem Understanding)**

**Section:** 01 — The Problem  
**Placement:** After the context image, to deepen the problem framing.

**Add this HTML block:**

```html
<figure style="margin: var(--sp-8) 0;">
  <img src="images/pbp-problem.jpg" alt="Problem understanding: audit risk, manual reconciliation, root cause, and approach" 
    style="width: 100%; border-radius: 8px; box-shadow: 0 4px 16px rgba(26,24,21,0.12); display: block;">
  <figcaption style="font-family: var(--font-mono); font-size: 13px; color: var(--ink-muted); margin-top: var(--sp-2); line-height: 1.5;">
    Two surface problems — audit risk and manual reconciliation — traced to one root cause: no single source of financial truth per case. The approach: a ledger built on case-closure immutability, ledger-derived invoicing, and auto-reconciliation.
  </figcaption>
</figure>
```

---

### **IMAGE PLACEMENT 3: `pbp-data.jpg` (Data Centricity)**

**Section:** 02 — The North Star (or end of Section 01)  
**Placement:** To quantify the scale of the problem before introducing the solution.

**Add this HTML block:**

```html
<figure style="margin: var(--sp-8) 0;">
  <img src="images/pbp-data.jpg" alt="Data analysis showing 44% audit risk exposure and 10% off-system edge cases" 
    style="width: 100%; border-radius: 8px; box-shadow: 0 4px 16px rgba(26,24,21,0.12); display: block;">
  <figcaption style="font-family: var(--font-mono); font-size: 13px; color: var(--ink-muted); margin-top: var(--sp-2); line-height: 1.5;">
    The true scale, quantified: Across 26,943 cases, 44% carried audit risk from non-zero ledger balances, and 10% involved money movement never recorded in the system. Together, nearly half of all transactions — which made a unified ledger a systemic necessity, not a nice-to-have.
  </figcaption>
</figure>
```

---

### **IMAGE PLACEMENT 4: `pbp-ownership.jpg` (4-month timeline)**

**Section:** 04 — Key Decisions (or a new "Process / Ownership" section)  
**Placement:** To show how you led the project over four months.

**Add this HTML block (with a small heading):**

```html
<h3 style="margin-top: var(--sp-10); margin-bottom: var(--sp-4); font-size: 20px; font-weight: 600;">How I owned this, month by month</h3>

<figure style="margin: var(--sp-6) 0;">
  <img src="images/pbp-ownership.jpg" alt="Four-month ownership timeline from understanding the ecosystem to building for handoff" 
    style="width: 100%; border-radius: 8px; box-shadow: 0 4px 16px rgba(26,24,21,0.12); display: block;">
  <figcaption style="font-family: var(--font-mono); font-size: 13px; color: var(--ink-muted); margin-top: var(--sp-2); line-height: 1.5;">
    From ecosystem understanding (Month 1) to designing the ledger framework and the first-ever success flow (Month 2), to refining through OPS deep-dives and edge-case prioritization (Month 3), to end-to-end workflow diagrams and PRD authoring for handoff (Month 4). I owned this from research to specification.
  </figcaption>
</figure>
```

---

### **IMAGE PLACEMENT 5: `pbp-outcome.jpg` (Outcome)**

**Section:** 06 — Impact  
**Placement:** As the centerpiece of the impact section, showing before/after.

**Add this HTML block:**

```html
<figure style="margin: var(--sp-8) 0;">
  <img src="images/pbp-outcome.jpg" alt="Outcome: current state versus future state across audit risk, reconciliation, traceability, visibility, and resolution" 
    style="width: 100%; border-radius: 8px; box-shadow: 0 4px 16px rgba(26,24,21,0.12); display: block;">
  <figcaption style="font-family: var(--font-mono); font-size: 13px; color: var(--ink-muted); margin-top: var(--sp-2); line-height: 1.5;">
    The shift: audit risk from 44% of cases to 85–90% closing audit-ready; reconciliation from email-only to system-tracked; financial movement from invisible to fully time-ordered in a single Case View. North Star metric: % of cases locked within 3 months of disbursal.
  </figcaption>
</figure>
```

---

## Cleanup instructions

1. **Remove or de-emphasize the older HTML mockup tables** (the Ledger Summary table and Global View tabs that were built as text-based placeholders) — these real slides replace them. If you think one mockup still adds value, keep it; otherwise replace with these real artifacts.

2. **Keep all existing written content** (the prose, decisions, edge cases, reflection). These images supplement the writing, they don't replace it.

3. **Ensure responsive behavior:** On mobile, images should scale to full width and remain legible. Add `max-width: 100%; height: auto;` if needed.

4. **Image loading:** Add `loading="lazy"` to each `<img>` tag for performance.

---

## Verification checklist

After placement, verify:

- [ ] All 5 images appear in the Payment Box Pro case study
- [ ] Images are in narrative order: Context → Problem → Data → Ownership → Outcome
- [ ] Each image has a caption in IBM Plex Mono, muted color
- [ ] Images are full-width with rounded corners and subtle shadow
- [ ] The "How I owned this, month by month" heading appears above the ownership image
- [ ] Existing case study text is intact
- [ ] Images are responsive (scale on mobile)
- [ ] `loading="lazy"` added to all images
- [ ] Design system (colors, fonts) unchanged

---

## Why this matters

These 5 slides transform the case study from "here's a design" to "here's how I think." A hiring manager will see:

1. **Systems mapping** → "She understands ecosystems"
2. **Problem + root cause** → "She diagnoses, not just designs"
3. **Data analysis** → "She quantifies problems"
4. **Ownership timeline** → "She leads end-to-end"
5. **Outcome** → "She delivers measurable impact"

This is the strongest possible proof of the "systems designer" positioning.

---

**Implement these 5 placements, then return the updated case study. Let me know when it's ready.**
