# Portfolio Revision Brief for Claude Design — FINAL

**Designer:** Divyambari Saxena  
**Date:** May 29, 2026  
**Status:** Ready to implement immediately  
**H1 Decision:** Option B (locked in)

---

## Quick Summary

The portfolio is **strong structurally**, but **too narrow in positioning**. These text-only changes shift from "fintech+emerging-markets specialist" to "systems designer who ships in production globally."

**Total effort:** 24 minutes  
**Files to update:** 4 (index.html, about.html, 2 case studies)  
**Design/layout changes:** NONE — purely text repositioning

---

## THE EXACT CHANGES TO MAKE

### **CHANGE 1: Homepage H1**
**File:** `index.html` | **Line:** ~56

**Current:**
```html
<h1>Product designer working at the seam between <mark>fintech systems</mark> and <mark>emerging-market research</mark>.</h1>
```

**Replace with:**
```html
<h1><strong>Product designer.</strong> <mark>3 years shipping in production.</mark> Expertise: systems design, accessibility, AI workflows.</h1>
```

**Why:** Leads with confidence. Makes it clear this is someone who has shipped real work at scale. The three expertise areas (systems, accessibility, AI) apply to ANY domain — fintech, consumer, B2B, health, etc.

---

### **CHANGE 2: Hero Status Pill — Location**
**File:** `index.html` | **Line:** ~51

**Current:**
```html
<span class="pill"><span class="dot"></span>Based in Delhi NCR</span>
```

**Replace with:**
```html
<span class="pill"><span class="dot"></span>Open to relocation globally</span>
```

**Why:** Signals geographic flexibility. Most Indian designers say "remote only" or "Delhi-based" — you're saying "anywhere." Hiring signal: flexibility + ambition.

---

### **CHANGE 3: Hero Lede (Paragraph below H1)**
**File:** `index.html` | **Line:** ~58–60

**Current:**
```html
<p class="hero-lede">
  Currently at <strong>CarDekho Financial Services (Rupyy)</strong>, designing the ledger and payments systems underneath a vehicle-lending product. Previously at <strong>Digital Green</strong>, where my research and design reached <mark class="strong">1,00,000+ smallholder farmers</mark> across India and East Africa.
</p>
```

**Replace with:**
```html
<p class="hero-lede">
  Currently at <strong>CarDekho Financial Services</strong>, designing ledger and payment systems for lending. Previously at <strong>Digital Green</strong>, where I built AI advisory products for <mark class="strong">1,00,000+ users</mark> across India and East Africa. Both roles: designing systems for real constraint.
</p>
```

**Why:** Reframes your work as "systems for constraint" rather than "fintech" + "emerging markets." One principle, multiple domains.

---

### **CHANGE 4: CTA H2**
**File:** `index.html` | **Line:** ~185

**Current:**
```html
<h2>Looking for someone who thinks in systems and ships in fintech?</h2>
```

**Replace with:**
```html
<h2>Looking for someone who thinks in systems and ships in production?</h2>
```

**Why:** "Production" is universal. "Fintech" is a gate. This removes the gate.

---

### **CHANGE 5: Availability Line**
**File:** `index.html` | **Line:** ~187

**Current:**
```html
<p>
  I'm open to senior product design roles — particularly in fintech, AI products, and inclusive-design teams. Remote, hybrid, or relocation within India. I reply within 48 hours.
</p>
```

**Replace with:**
```html
<p>
  I'm open to senior product design roles globally — systems-heavy products, AI workflows, and teams building for constraint. Remote, hybrid, or relocation anywhere. I reply within 48 hours.
</p>
```

**Why:** "Globally" + "relocation anywhere" signals you're not India-anchored. "Systems-heavy" is broader than fintech. "Building for constraint" is a principle that applies everywhere.

---

### **CHANGE 6: Approach Section (Fintech paragraph)**
**File:** `index.html` | **Line:** ~130

**Current:**
```html
<p style="font-size: 18px; color: var(--ink-muted); line-height: 1.6; margin-bottom: var(--sp-4);">
  Fintech taught me <mark>precision</mark>: in a payment flow, a wrong state label is a compliance event. Field research in agricultural India taught me <mark>humility</mark>: most of what I assumed about users was wrong, and the only way to find out was to sit in a kitchen and listen.
</p>
```

**Replace with:**
```html
<p style="font-size: 18px; color: var(--ink-muted); line-height: 1.6; margin-bottom: var(--sp-4);">
  Systems thinking taught me <mark>precision</mark>: in state-driven workflows, every field name and label carries consequence. Designing for users with constraints I don't share taught me <mark>humility</mark>: most of what I assume is wrong, and the only way to find out is to listen carefully.
</p>
```

**Why:** Makes the principles universal, not domain-specific. A consumer PM reads this and nods. A fintech PM reads this and nods. Everyone understands.

---

### **CHANGE 7: About Page H1**
**File:** `about.html` | **Line:** ~29

**Current:**
```html
<h1>Three years of shipped work at the intersection of <mark>fintech</mark>, <mark>research</mark>, and <mark>AI</mark>.</h1>
```

**Replace with:**
```html
<h1>Three years of shipped work in <mark>systems design</mark>, <mark>accessibility</mark>, and <mark>AI workflows</mark>.</h1>
```

**Why:** Same principle as the homepage — broad enough to apply everywhere.

---

### **CHANGE 8: About Page Intro**
**File:** `about.html` | **Line:** ~32

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

**Why:** Signals relocation openness without removing your home context. Keeps the personal touch.

---

### **CHANGE 9: About Page — "Systems" Section**
**File:** `about.html` | **Line:** ~43–44

**Current:**
```html
<p>
  The case studies on this site lean heavily on <mark>state machines</mark>, edge cases, and data models — because in fintech, those <em>are</em> the design. A payment flow with eight transaction states isn't an interaction problem; it's a structural one. The screens follow from the structure, not the other way around. My favourite design tool right now is Whimsical, not Figma.
</p>
```

**Replace with:**
```html
<p>
  The case studies on this site lean heavily on <mark>state machines</mark>, edge cases, and data models — because in systems-heavy products, those <em>are</em> the design. A ledger with eight transaction states isn't an interaction problem; it's a structural one. Screens follow from structure, not the other way around. My favourite design tool is Whimsical.
</p>
```

**Why:** "Systems-heavy products" instead of "fintech." Applies to lending, admin tools, marketplaces, etc.

---

### **CHANGE 10: About Page — "Research" Section**
**File:** `about.html` | **Line:** ~48–49

**Current:**
```html
<p>
  At Digital Green I spent two years doing mixed-methods research with smallholder farmers across India and East Africa — moderated interviews, contextual inquiry, prototype testing in five languages, longitudinal usage analysis. The work taught me that <mark>the gap between what users say and what users do</mark> is the entire job. Self-reported preferences are not data. Observed behaviour is.
</p>
```

**Replace with:**
```html
<p>
  In my research, I've spent two years doing mixed-methods work with users in constraint — smallholder farmers, first-time smartphone users, low-literacy populations across India and East Africa. Moderated interviews, contextual inquiry, prototype testing in five languages, longitudinal analysis. The work taught me that <mark>the gap between what users say and what users do</mark> is the entire job. Self-reported preferences are not data. Observed behaviour is.
</p>
```

**Why:** Repositions from "emerging-markets specialist" to "accessibility specialist," which applies everywhere. Keeps the concrete examples for credibility.

---

## IMAGE CALLOUTS

Add these as HTML comments in the case study files. Do NOT add placeholder images yet — just mark where screenshots should go.

### **Payment Box Pro (work/payment-box-pro.html)**

**After the "Case-Level View" description (around line 220), add:**
```html
<!-- SCREENSHOT PLACEHOLDER: Figma mockup of Ledger Summary tab showing actual UI design 
     (header with case ID, status badge; transaction table with 4-5 rows) -->
```

**After the North Star card definition (around line 140), add:**
```html
<!-- SCREENSHOT PLACEHOLDER: Figma design of North Star metric card 
     (green tint, ★ symbol, large title) -->
```

### **Farmer.Chat (work/farmer-chat.html)**

**In the persona-grid section (around line 80), add:**
```html
<!-- SCREENSHOT PLACEHOLDER: Mobile onboarding flow showing crop selection UI 
     (icons for crops, voice-first CTA button, actual design from Figma) -->
```

**After the decision-list (around line 180), add:**
```html
<!-- SCREENSHOT PLACEHOLDER: Voice interface component showing button states, 
     microphone UI, and icon-based navigation from Figma -->
```

---

## VERIFICATION CHECKLIST

After making all changes, verify:

- [ ] Homepage H1 now starts with "Product designer. 3 years shipping in production."
- [ ] "Delhi NCR" is gone — replaced with "globally" and "anywhere"
- [ ] CTA says "ships in production" not "ships in fintech"
- [ ] No paragraph still says "Fintech taught me" or "Field research in agricultural India"
- [ ] About page says "open to relocation anywhere"
- [ ] All case study content and metrics are UNCHANGED (only HTML comments added for image callouts)
- [ ] Design system (colors, fonts, spacing) is UNCHANGED
- [ ] Lighthouse audit still passes > 95 on all metrics

---

## WHAT TO DO NOW

1. **Copy everything above this line** (from "Portfolio Revision Brief" to "WHAT TO DO NOW")
2. **Go to your Claude Design project**
3. **Paste it with this message:**

```
Here's my final revision brief with my H1 decision locked in (Option B).

Please make all the text changes listed in "THE EXACT CHANGES TO MAKE" section.
These are 10 direct text replacements — no layout or design changes.

Files to update:
- index.html (6 changes)
- about.html (4 changes)
- work/payment-box-pro.html (add 2 image comment placeholders)
- work/farmer-chat.html (add 2 image comment placeholders)

After you finish, run through the VERIFICATION CHECKLIST to confirm everything is correct.

Let me know when it's ready.
```

4. **Claude Design will implement** and return the updated files
5. **You verify** using the checklist
6. **Deploy to Vercel**

---

**You're ready. Send this to Claude Design now.**
