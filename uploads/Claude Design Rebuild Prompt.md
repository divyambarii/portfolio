# Claude Design Prompt — Rebuild Slide Content as Native Components

**Copy everything below and paste into Claude Design.**

---

## What I need

I previously added 5 raw image slides to my Payment Box Pro case study. **Remove all 5 images** — they clash with the portfolio's visual style (different colors, rough/unfinished look).

Instead, **rebuild their content natively** using the portfolio's existing design system, so everything looks intentional and on-brand. The content below is accurate and final — your job is to style it beautifully using my design tokens, NOT to redesign or reword the content.

---

## Design tokens to use (strict)

```css
--paper: #F0E8D8;        /* warm cream background */
--ink: #1A1815;          /* primary text */
--ink-muted: #5F584D;    /* secondary text */
--forest: #1F4A3B;       /* trust accent / headers */
--forest-tint: #DCE7DE;  /* tinted card backgrounds */
--marker: #F8E16C;       /* yellow highlight */
--coral: #C75A4A;        /* problem/negative states */
--surface: #FFFFFF;      /* cards */
--font-display: 'Manrope', sans-serif;
--font-mono: 'IBM Plex Mono', monospace;
```

**Rules:**
- Problem/negative content uses `--coral` accents (sparingly)
- Solution/positive content uses `--forest` accents
- Data/metrics use large Manrope bold + `--forest`
- All cards: `--surface` background, subtle border (`1px solid rgba(26,24,21,0.08)`), `border-radius: 8px`, soft shadow
- Metadata/labels: `--font-mono`, uppercase, small, `--ink-muted`
- Remove ALL references to "Rupyy" brand green (#2EA37C or similar) — use `--forest` instead

---

## COMPONENT 1: Systems / Users / Events (replaces pbp-context.jpg)

**Section:** 01 — The Problem  
**Placement:** After opening problem description.

**Build this as a styled table + side callout:**

**Heading:** `The ecosystem before design`

**Table content:**

| SYSTEM | USER | EVENTS |
|--------|------|--------|
| Loan Box | Sales Team | Transaction Undertaking sign · Raise payment request |
| Payment Box | Maker | Makes tranches from signed TU → sends for approval |
| Payment Box | Checker | Reviews tranches → authorises for payment release |
| Payment Box | Payment Ops | Adds received amount from bank · Handles money movement via email |

**Side callout box (forest-tint background):**
```
Core financial truth, every case:
DEBIT = CREDIT
(Money coming from bank = Money disbursed from Payment Box)

Two things tracked per case:
1 — Ledger Balance
2 — Convenience Fees
```

**Caption below:**
```
Two systems, three roles, one rule: for every case, debit must equal credit. Mapping this was the first step to finding where the truth was getting lost.
```

---

## COMPONENT 2: Problem Understanding (replaces pbp-problem.jpg)

**Section:** 01 — The Problem  
**Placement:** After Component 1.

**Build this as: two problem cards → root cause callout → three approach cards.**

**Heading:** `Two problems, one root cause`

**Two problem cards (side by side, coral accent):**

Card 1 — `⚠ Audit Risk`
```
Ledger balance does not settle to zero in Payment Box cases, creating debit-credit mismatches and increasing audit exposure.
```

Card 2 — `⟳ Manual Reconciliation`
```
Payment Ops teams reconcile cases manually through email, resulting in no system trail, limited visibility, and higher risk of errors.
```

**Root cause callout (full-width, forest-tint background, forest left border):**
```
ROOT CAUSE
No unified financial record — no single source of truth per case capturing all money movements. The result: non-net-zero ledgers, manual reconciliation, and elevated audit & compliance risk.
```

**Approach — three cards (forest accent, with marker highlight on titles):**

Card 1 — `Case Closure & Immutability`
```
A case is only closed when the ledger nets to zero.
```

Card 2 — `Ledger-Derived Invoicing`
```
Every invoice is generated directly from ledger entries.
```

Card 3 — `Reducing Manual Reconciliation`
```
Auto-reconciliation removes email-based reconciliation effort.
```

**Caption:**
```
Two surface problems traced to one root cause — then an approach built on three structural principles.
```

---

## COMPONENT 3: Data Centricity (replaces pbp-data.jpg)

**Section:** 02 — The North Star (or end of Section 01)  
**Placement:** To quantify the scale.

**Build this as: two large stat blocks + a context strip + a closing statement.**

**Heading:** `The true scale of the problem`

**Two large stat blocks (side by side):**

Block 1 (coral accent):
```
44%
Audit Risk Exposure

→ 4 in 10 cases over the last 3 months had ledger balances that didn't net to zero
→ Each creates a debit-credit mismatch
→ Every one carries silent audit and compliance risk
```

Block 2 (coral accent):
```
10%
Off-System Edge Cases

→ 1 in 10 cases involves money movement never recorded in Payment Box
→ Includes MRTB, RBNR reprocessing, DD & e-cheques
→ Handled entirely over email — zero traceability
```

**Context strip (mono font, muted, centered):**
```
Total cases analysed: 26,943  ·  Cases with non-zero conv. fee AND non-zero ledger balance: 11,768  ·  Window: last 3 months
```

**Closing statement (large, with marker highlight):**
```
Together, these two gaps cover nearly 50% of all transactions — making a unified ledger a systemic necessity, not a nice-to-have.
```

**Caption:**
```
The problem, quantified. Data turned an intuition into a mandate.
```

---

## COMPONENT 4: Ownership Timeline (replaces pbp-ownership.jpg)

**Section:** New subsection, after Section 04 (Key Decisions)  
**Placement:** To show end-to-end leadership.

**Build this as: a 4-column timeline (or 4 stacked cards on mobile), forest accent.**

**Heading:** `How I owned this, month by month`

**Four cards (numbered, with connecting flow):**

**Month 1 — Understanding the Ecosystem**
```
· Built a deep understanding of CTS workflows and mapped the flowchart
· Ran stakeholder interviews with Payment Ops & Finance to surface SOPs and pain points
· Developed a ground-up view of the existing problem landscape
```

**Month 2 — Designing the Ledger Framework**
```
· Identified key financial events and their trigger points across the lending journey
· Defined state-transition rules and case-closure logic for ledger balancing
· Drafted the first-ever Success Flow for the ledger
```

**Month 3 — Refining through Insights**
```
· Held deep-dives with the Ops team to uncover edge cases
· Prioritised edge cases by volume and built flows for each scenario
· Proposed actionables for quick identification of stuck/problematic cases
```

**Month 4 — Building for Handoff**
```
· Created end-to-end workflow diagrams covering all scenarios
· Developed happy-flow and sad-flow prototypes for the ledger lifecycle
· Authored the PRD for engineering handoff
```

**Caption:**
```
From ecosystem research to PRD authoring — owned end to end, across four months.
```

---

## COMPONENT 5: Outcome — Current vs Future State (replaces pbp-outcome.jpg)

**Section:** 06 — Impact  
**Placement:** Centerpiece of the impact section.

**Build this as: a styled before/after comparison table (5 rows), with a North Star footer.**

**Heading:** `The shift: current state → future state`

**Comparison table (Current = coral-tinted left, Future = forest-tinted right):**

| Dimension | Current State | Future State |
|-----------|---------------|--------------|
| **Audit Risk** | 44% of cases have non-zero ledger balance | 85–90% of cases close with a balanced, audit-ready ledger, backed by ERP/Oracle sync |
| **Manual Reconciliation** | 10% of cases reconciled entirely over email — no system trail | Phase 1: edge cases scoped with audit-ready solutions · Phase 2: remaining solutions deployed with minimal manual intervention |
| **Financial Traceability** | No chronological record of money movement within a case | Every entry's full lifecycle visible in Case View with UTR and supporting docs — all time-ordered |
| **Visibility** | No unified view of case health | Global View: all cases with lock/unlock status, settled entries, advanced filters, one-click actions |
| **Proactive Resolution** | No way to identify stuck/at-risk cases without manual work | Case sub-status tags flag cases, proactively alerting stakeholders to act |

**North Star footer (forest-tint box, with marker highlight on the metric):**
```
North Star Metric — % of cases locked within 3 months of disbursal
Supporting metric — % of cases closed without manual touch
```

**Caption:**
```
Five dimensions, each moved from reactive and invisible to proactive and audit-ready.
```

---

## Cleanup

1. **Delete all 5 image embeds** (`pbp-context.jpg`, `pbp-problem.jpg`, `pbp-data.jpg`, `pbp-ownership.jpg`, `pbp-outcome.jpg`) and their `<figure>` wrappers.
2. **Delete the `images/` references** for these five (you can keep the folder for future real screenshots).
3. **Keep all existing prose** in the case study — these components supplement the writing.
4. **Ensure mobile responsiveness:** tables scroll or stack; 4-column timeline becomes stacked cards; stat blocks stack vertically.

---

## Verification checklist

- [ ] All 5 raw images removed
- [ ] Component 1 (Systems table) built natively with forest-tint side callout
- [ ] Component 2 (Problem) has 2 coral problem cards + root cause + 3 forest approach cards
- [ ] Component 3 (Data) has two big stat blocks (44%, 10%) + context strip + closing statement
- [ ] Component 4 (Ownership) is a 4-card month-by-month timeline
- [ ] Component 5 (Outcome) is a 5-row before/after table + North Star footer
- [ ] Everything uses ONLY the design tokens (no Rupyy green)
- [ ] All captions present in IBM Plex Mono, muted
- [ ] Fully responsive on mobile
- [ ] Existing case study prose intact

---

## Why this matters

The content from those slides is excellent — it shows diagnosis, data, leadership, and measurable impact. But raw slides with clashing brand colors made the case study look unfinished. Rebuilt natively, this content becomes the strongest, most polished section of the portfolio — proof of systems thinking, rendered in a single coherent visual language.

---

**Rebuild these 5 components natively, remove the raw images, and return the updated case study. Let me know when ready.**
