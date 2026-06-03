# Portfolio Revision Brief for Claude Design

**Prepared for:** Divyambari Saxena  
**Date:** May 29, 2026  
**Status:** Ready to implement  
**Urgency:** HIGH — these changes unlock global hiring reach

---

## Executive Summary

The portfolio is **structurally sound** and **visually strong**, but the positioning is **too narrow and geographically anchored**. The changes below shift from:

- ❌ "Fintech specialist + emerging markets expert" (India-focused)
- ✅ "Systems designer who ships for constraint" (globally relevant)

And:

- ❌ "Based in Delhi NCR" (geographic constraint signal)
- ✅ "Open to relocation globally" (hiring signal: flexibility + ambition)

This is not a redesign. It's a **repositioning refinement** + **missing image callouts**.

---

## Priority Matrix

| Priority | Task | Severity | Effort | Files | Impact |
|----------|------|----------|--------|-------|--------|
| **1** | Reposition homepage H1 from fintech-specific to systems-first | 🔴 HIGH | 5 min | index.html | Unlocks non-fintech hiring |
| **2** | Change "Based in Delhi NCR" to "Open to relocation globally" | 🔴 HIGH | 2 min | index.html, about.html | Signals global readiness |
| **3** | Update CTA from "ships in fintech" to "ships in production" | 🟠 MEDIUM | 2 min | index.html | Removes domain gate |
| **4** | Rewrite availability line ("relocation within India" → "anywhere") | 🟠 MEDIUM | 2 min | index.html | Consistency |
| **5** | Soften "Approach" section (fintech + farming → systems + constraint) | 🟠 MEDIUM | 5 min | index.html | Better generalization |
| **6** | Update About page hero and intro | 🟠 MEDIUM | 5 min | about.html | Consistency |
| **7** | Add image placeholders / callouts | 🟡 LOW | 0 min (notes only) | Both case studies | Guidance for screenshots |

---

## DETAILED CHANGES

### **CHANGE #1: Homepage Hero H1 (PRIORITY 1)**

**File:** `index.html`  
**Line:** ~56  
**Current:**
```html
<h1>Product designer working at the seam between <mark>fintech systems</mark> and <mark>emerging-market research</mark>.</h1>
```

**Problem:** Too narrow. Excludes consumer products, B2B SaaS, Stripe, Notion, Linear.

**Replace with Option A (Recommended — systems-first, most powerful):**
```html
<h1>Product designer who thinks in <mark>systems</mark> and ships for <mark>real constraint</mark>.</h1>
```

**OR Option B (More explicit about experience):**
```html
<h1>Product designer. <strong>3 years shipping in production.</strong> Expertise: systems design, accessibility, AI workflows.</h1>
```

**OR Option C (If you want to keep a reference to your background):**
```html
<h1>Product designer working in <mark>fintech systems</mark>, <mark>accessibility design</mark>, and <mark>AI workflows</mark>. Currently at CarDekho Financial Services.</h1>
```

**Rationale:** Option A is the strongest because it leads with your core thinking (systems + constraint) rather than your domain. This broadens the appeal without losing credibility.

**Action:** Pick ONE option and replace the entire H1.

---

### **CHANGE #2: Hero Status Pill — Location (PRIORITY 1)**

**File:** `index.html`  
**Line:** ~51  
**Current:**
```html
<span class="pill"><span class="dot"></span>Based in Delhi NCR</span>
```

**Replace with:**
```html
<span class="pill"><span class="dot"></span>Open to relocation globally</span>
```

**Rationale:** Signals geographic flexibility + ambition. Most Indian designers claim "remote only" or "Delhi-based," which limits global hiring opportunities. This one sentence moves you from local-market-competitive to global-market-competitive.

**Action:** Direct text replacement. One line.

---

### **CHANGE #3: Homepage CTA H2 (PRIORITY 1)**

**File:** `index.html`  
**Line:** ~185  
**Current:**
```html
<h2>Looking for someone who thinks in systems and ships in fintech?</h2>
```

**Replace with:**
```html
<h2>Looking for someone who thinks in systems and ships in production?</h2>
```

**Rationale:** Removes the domain gate. "Fintech" is specific; "production" is universal. A Razorpay PM reads "ships in production" and thinks "yes." A Linear PM reads the same and thinks "yes." A Notion PM reads it and thinks "yes."

**Action:** Direct text replacement.

---

### **CHANGE #4: Availability Line (PRIORITY 2)**

**File:** `index.html`  
**Line:** ~187  
**Current:**
```html
<p>
  I'm open to senior product design roles — particularly in fintech, AI products, and inclusive-design teams. Remote, hybrid, or relocation within India. I reply within 48 hours.
</p>
```

**Replace with:**
```html
<p>
  I'm open to senior product design roles globally — particularly systems-heavy products, AI workflows, and teams building for constraint. Remote, hybrid, or relocation anywhere. I reply within 48 hours.
</p>
```

**Rationale:** 
- "globally" signals you're not India-only
- "relocation anywhere" is the hiring manager's green flag (vs. "within India")
- "systems-heavy products" is broader than "fintech"
- "teams building for constraint" is a principle that applies everywhere

**Action:** Find the entire paragraph and replace it.

---

### **CHANGE #5: Approach Section Rewrite (PRIORITY 2)**

**File:** `index.html`  
**Line:** ~130 (inside the approach-section)  
**Current:**
```html
<p style="font-size: 18px; color: var(--ink-muted); line-height: 1.6; margin-bottom: var(--sp-4);">
  Fintech taught me <mark>precision</mark>: in a payment flow, a wrong state label is a compliance event. Field research in agricultural India taught me <mark>humility</mark>: most of what I assumed about users was wrong, and the only way to find out was to sit in a kitchen and listen.
</p>
```

**Replace with:**
```html
<p style="font-size: 18px; color: var(--ink-muted); line-height: 1.6; margin-bottom: var(--sp-4);">
  Systems thinking taught me <mark>precision</mark>: in state-driven workflows, every field name and label carries consequence. Designing for users with constraints I don't share taught me <mark>humility</mark>: most of what I assume about users is wrong, and the only way to find out is to listen carefully.
</p>
```

**Rationale:** Makes the principles universal (not fintech-specific or farming-specific). A consumer product PM reads this and thinks "yes, I need precision and humility." A fintech PM reads it and thinks "yes, this applies to my world too."

**Action:** Replace the entire paragraph (just the first `<p>` in the approach section).

---

### **CHANGE #6: About Page Hero (PRIORITY 2)**

**File:** `about.html`  
**Line:** ~29  
**Current:**
```html
<h1>Three years of shipped work at the intersection of <mark>fintech</mark>, <mark>research</mark>, and <mark>AI</mark>.</h1>
```

**Replace with:**
```html
<h1>Three years of shipped work in <mark>systems design</mark>, <mark>constraint-based UX</mark>, and <mark>AI workflows</mark>.</h1>
```

**Rationale:** Same logic — broader, more universally relevant than "fintech, research, AI."

**Action:** Replace the entire H1.

---

### **CHANGE #7: About Page Intro (PRIORITY 2)**

**File:** `about.html`  
**Line:** ~32  
**Current:**
```html
<p class="hero-lede" style="margin-top: var(--sp-6);">
  I'm a product designer based in Delhi NCR. I grew up in Lucknow, studied Visual Arts at the University of Lucknow, and moved into product design because the field rewarded the two things I cared about most: <strong>thinking carefully</strong>, and <strong>listening hard</strong>.
</p>
```

**Replace with:**
```html
<p class="hero-lede" style="margin-top: var(--sp-6);">
  I'm a product designer, currently based in Delhi, open to relocation anywhere. I grew up in Lucknow, studied Visual Arts at the University of Lucknow, and moved into product design because the field rewards the two things I care about most: <strong>thinking carefully</strong>, and <strong>listening hard</strong>.
</p>
```

**Rationale:** Signals geographic flexibility without removing the Delhi context. Personal touch intact.

**Action:** Replace the paragraph.

---

### **CHANGE #8: About Page — "Systems" Explanation (PRIORITY 2)**

**File:** `about.html`  
**Line:** ~43-44 (inside the "I take systems seriously" section)  
**Current:**
```html
<p>
  The case studies on this site lean heavily on <mark>state machines</mark>, edge cases, and data models — because in fintech, those <em>are</em> the design. A payment flow with eight transaction states isn't an interaction problem; it's a structural one. The screens follow from the structure, not the other way around. My favourite design tool right now is Whimsical, not Figma.
</p>
```

**Replace with:**
```html
<p>
  The case studies on this site lean heavily on <mark>state machines</mark>, edge cases, and data models — because in systems-heavy products, those <em>are</em> the design. A ledger with eight transaction states isn't an interaction problem; it's a structural one. Screens follow from structure, not the other way around. My favourite design tool is Whimsical, not Figma.
</p>
```

**Rationale:** "in systems-heavy products" is broader than "in fintech." The logic applies to admin tools, financial systems, marketplaces, etc.

**Action:** Replace this paragraph.

---

### **CHANGE #9: About Page — "Research" Section (PRIORITY 2)**

**File:** `about.html`  
**Line:** ~48-49 (inside "I take research seriously")  
**Current:**
```html
<p>
  At Digital Green I spent two years doing mixed-methods research with smallholder farmers across India and East Africa — moderated interviews, contextual inquiry, prototype testing in five languages, longitudinal usage analysis. The work taught me that <mark>the gap between what users say and what users do</mark> is the entire job. Self-reported preferences are not data. Observed behaviour is.
</p>
```

**Replace with:**
```html
<p>
  In my research, I've spent two years doing mixed-methods work with users in constraint — smallholder farmers across India and East Africa, first-time smartphone users, low-literacy populations. Moderated interviews, contextual inquiry, prototype testing in five languages, longitudinal analysis. The work taught me that <mark>the gap between what users say and what users do</mark> is the entire job. Self-reported preferences are not data. Observed behaviour is.
</p>
```

**Rationale:** Repositions the work from "emerging-markets specialist" to "accessibility/constraint specialist," which is relevant everywhere. But keeps the concrete examples (farmers, low-literacy) for credibility.

**Action:** Replace this paragraph.

---

### **CHANGE #10: About Page — "What I'm Good At" (PRIORITY 2)**

**File:** `about.html`  
**Line:** ~67 (in the bulleted list)  
**Current:**
```html
<li>Designing for <strong>state-rich, ops-heavy systems</strong> — fintech ledgers, admin tools, lending workflows.</li>
<li>Mixed-methods research with <strong>low-literacy, multilingual, and first-time-online users</strong>.</li>
```

**Keep as-is** — these are already broad enough. No changes needed.

---

## IMAGE CALLOUTS (GUIDANCE FOR SCREENSHOTS)

### **Payment Box Pro case study**

Add real Figma screenshots at these three moments. Create placeholder comments or notes for now:

#### **Screenshot 1: Section 03 — The Solution**
**Location:** After "Case-Level View — Financial Timeline" description (around line 220)

**Placeholder note to add:**
```
[SCREENSHOT PLACEHOLDER: Figma mockup of the Ledger Summary tab]
- Shows: Header with case ID · Product name · Status badge
- Shows: Column headers (Date, Event, Debit, Credit, Status)
- Shows: 4–5 rows of transactions with correct typography and spacing
- Dimensions: 940px wide (matches mockup container width in CSS)
- Purpose: Proves the actual UI design, not just the HTML mockup

TO ADD: Screenshot from Figma. Can be a full view or cropped to the table area.
```

#### **Screenshot 2: Section 02 — The North Star**
**Location:** After "Financial Case Closure Rate" definition (around line 140)

**Placeholder note:**
```
[SCREENSHOT PLACEHOLDER: Figma card showing the North Star metric]
- Shows: Green-tinted background · ★ symbol · Large title · Muted prose
- Purpose: Visualizes the design decision; shows how the metric was surfaced to users

TO ADD: Screenshot from Figma or Figma Components panel.
```

#### **Screenshot 3: Section 04 — Key Decisions (Optional)**
**Location:** After the decision-list explaining the state machine (around line 300)

**Placeholder note:**
```
[OPTIONAL SCREENSHOT: State machine diagram as rendered in Figma]
- Purpose: Shows the actual design artifact (not just the SVG approximation)

TO ADD: Screenshot from Whimsical or Figma if available.
```

---

### **Farmer.Chat case study**

Add 2–3 real Figma screenshots:

#### **Screenshot 1: Section 02 — Research (Persona cards)**
**Location:** Inside the persona-grid section (around line 80–100)

**Current:** Three text-only persona cards  
**Add:** Screenshots of actual Figma designs showing:
- Onboarding screens with crop selection
- Voice-first interface (microphone UI)
- Icon-based navigation

**Placeholder note:**
```
[SCREENSHOT PLACEHOLDER: Mobile onboarding flow mockups]
- Shows: Crop selection screen with icons (wheat, tomato, goat, etc.)
- Shows: Voice-first CTA (microphone button)
- Shows: Crop-first framing (not user-centric)
- Purpose: Visualizes the design decisions made in section 03

TO ADD: 1–3 screenshots from Figma showing the actual UI.
```

#### **Screenshot 2: Section 03 — Key Decisions**
**Location:** After the decision-list (around line 180)

**Placeholder note:**
```
[SCREENSHOT PLACEHOLDER: Voice interface component in Figma]
- Shows: How voice-first was rendered (button states, feedback, etc.)
- Shows: Iconography instead of labels
- Purpose: Proves the design decisions were implemented

TO ADD: Screenshot showing the voice/icon design system.
```

#### **Screenshot 3: Section 05 — Impact**
**Location:** After the stat-grid with metrics (around line 280)

**Placeholder note:**
```
[OPTIONAL: Chart showing engagement lift]
- Shows: Before/after engagement graph
- Shows: The 25% / 35% / 28% metrics visualized
- Purpose: Makes the impact tangible

TO ADD: Screenshot of a chart or metric visualization (can be from Analytics, Mixpanel, etc.)
```

---

## FILES TO MODIFY

| File | Changes | Lines | Effort |
|------|---------|-------|--------|
| `index.html` | Changes #1–5 | 51, 56, 130, 185, 187 | 10 min |
| `about.html` | Changes #6–9 | 29, 32, 43, 48, 67 | 10 min |
| `work/payment-box-pro.html` | Add image callouts (notes only) | ~220, ~140, ~300 | 2 min |
| `work/farmer-chat.html` | Add image callouts (notes only) | ~80, ~180, ~280 | 2 min |
| **Total** | | | **24 min** |

---

## IMPLEMENTATION INSTRUCTIONS FOR CLAUDE DESIGN

**Claude Design, here's what to do:**

1. **Open the portfolio files** provided earlier (index.html, about.html, and case study files).

2. **Make the following text replacements** (in this order):
   - Change #1: Homepage H1 (pick one of the three options above)
   - Change #2: Location pill
   - Change #3: CTA H2
   - Change #4: Availability paragraph
   - Change #5: Approach section
   - Change #6: About H1
   - Change #7: About intro
   - Change #8: About "systems seriously" section
   - Change #9: About "research seriously" section

3. **For images (screenshots):**
   - Do NOT add placeholder images yet
   - Instead, add HTML comments at the locations marked above
   - Example: `<!-- SCREENSHOT PLACEHOLDER: Figma mockup of Ledger Summary -->`
   - This tells Divyambari where to insert screenshots later

4. **Verify the changes:**
   - Check that all H1s are updated
   - Check that "Delhi NCR" is gone (replaced with "globally" or "anywhere")
   - Check that "fintech" is not in the CTA anymore
   - Run a text search for "relocation within India" — should return 0 results
   - Visually scan index.html and about.html for consistency

5. **Output:** Return the updated HTML files for the four pages listed above.

---

## SELF-VERIFICATION CHECKLIST

After Claude Design implements the changes, **Divyambari should verify:**

- [ ] Homepage H1 talks about systems/constraint, NOT fintech/emerging-markets specifically
- [ ] "Based in Delhi NCR" is replaced with "globally" or "anywhere"
- [ ] CTA says "ships in production," not "ships in fintech"
- [ ] About page intro says "open to relocation anywhere," not "relocation within India"
- [ ] No paragraph still opens with "Fintech taught me" or "Field research in agricultural India"
- [ ] All references to your work still ground you (1,000+ screens, 1L+ farmers, 3 years) — you're not generic
- [ ] Lighthouse audit still passes (Performance > 95, Accessibility > 95)
- [ ] Design system (colors, fonts, spacing) is unchanged

---

## RATIONALE SUMMARY

**Why these changes matter:**

1. **Positioning fix:** From "I'm a fintech+emerging-markets specialist" to "I'm a systems designer who ships for constraint." The second is 5x broader and unlocks hiring from Razorpay, Linear, Notion, Stripe, and tier-1 Indian companies (Meesho, Groww, etc.).

2. **Location signal fix:** From "Delhi-based" to "open to global relocation." This moves you from local-market-competitive to global-market-competitive. One sentence does that work.

3. **Universality without losing credibility:** You're still the person who shipped 1,000+ screens at CarDekho and reached 1L+ farmers at Digital Green. You're not becoming generic. You're just describing what those accomplishments *mean* (systems thinking, accessibility design) rather than which *domain* they were in.

4. **Images:** The case studies need real Figma screenshots to prove the work. The HTML mockups are good placeholders, but they don't substitute for the actual design artifact.

---

## QUESTIONS FOR DIVYAMBARI

Before Claude Design implements, answer these:

1. **H1 positioning:** Which of the three options (A, B, or C) feels most authentic to you?
2. **Images:** Can you screenshot your actual Figma files? If NDA-restricted, are there other references you can use?
3. **Timeline:** When do you want this live?

---

**End of brief. Ready to implement when you are.**
