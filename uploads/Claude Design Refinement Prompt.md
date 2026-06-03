# Refinement Brief for Claude Design — Copy & Paste Ready

**Status:** Ready to implement  
**Total changes:** 6 (3 text-based, 3 screenshot-ready placeholders)  
**Effort:** 6–8 hours  
**Priority:** Critical — unlocks broader hiring reach

---

## What to do

I'm giving you a critical analysis of the portfolio post-repositioning. The positioning changes (v1 → v2) worked, but the case studies still look domain-specific, which confuses hiring managers at non-fintech companies.

Here are the refinements needed:

---

## CHANGE 1: Add narrative bridge to About page

**File:** about.html  
**Location:** After the "I take systems seriously" section, before "I take research seriously"  
**Type:** Add new paragraph

**Add this heading + paragraph:**

```html
<h3 style="margin-top: var(--sp-8); margin-bottom: var(--sp-4); font-size: 18px; font-weight: 600;">How my case studies fit together</h3>

<p style="font-size: 16px; color: var(--ink); line-height: 1.7; margin-bottom: var(--sp-6);">
  The two case studies on my portfolio look different on the surface — one is a fintech ledger system, the other is an AI advisory app for smallholder farmers. But they're solving the same design problem: how to build systems for real constraint.
</p>

<p style="font-size: 16px; color: var(--ink); line-height: 1.7; margin-bottom: var(--sp-6);">
  In fintech, constraint is <mark>precision</mark>. Every state label, every transaction record, every audit trail carries compliance and financial consequence. The screens follow from the data model; the UX follows from the systems thinking.
</p>

<p style="font-size: 16px; color: var(--ink); line-height: 1.7; margin-bottom: var(--sp-6);">
  In farming, constraint is <mark>access</mark>. Users had low digital literacy, no shared language with the design team, limited bandwidth, and only voice as a reliable input modality. The interface had to be voice-first; the interactions had to be research-informed and resilient to failure.
</p>

<p style="font-size: 16px; color: var(--ink); line-height: 1.7; margin-bottom: var(--sp-6);">
  Different domains. Same principle: when building for real constraint — whether it's regulatory, technical, or human — the design thinking is identical. Precision. Humility. Systems-first, screens second.
</p>

<p style="font-size: 16px; color: var(--ink); line-height: 1.7; margin-bottom: var(--sp-8);">
  This is why I can ship in fintech, social impact, consumer products, or B2B SaaS. The constraint changes; the approach stays the same.
</p>
```

**Why:** Makes both case studies cohere around one principle (constraint-driven design), not scattered domains. Signals to non-fintech hiring managers that the methodology applies everywhere.

---

## CHANGE 2: Reframe Payment Box Pro intro

**File:** work/payment-box-pro.html  
**Location:** Case study hero section (eyebrow + title + TL;DR)  
**Type:** Text replacement

### Replace the eyebrow:

**Old:**
```
Case study · Fintech · B2B internal tool
```

**New:**
```
Case study · Systems Design · B2B internal tool
```

**Rationale:** "Systems Design" is broader than "Fintech." Signals the principle applies beyond fintech to any system where precision matters.

---

### Replace the TL;DR opening paragraph:

**Old:**
```
The product team was disbursing crores of rupees in vehicle loans across five disconnected tools, and no single tool could answer the question "did this case actually close?" I designed PAYMENT BOX Pro's Ledger System — a unified, immutable, state-machine-driven record per lending case, anchored to a single North Star metric. The result: reconciliation moved from a month-end Excel ritual to a real-time signal.
```

**New:**
```
When precision is the constraint, systems design is the solution. The product team was managing crores of rupees in vehicle loans across five disconnected tools — no single source of truth, no audit trail, reconciliation buried in Excel. I designed PAYMENT BOX Pro's Ledger System: one immutable, state-machine-driven record per case, where every transaction is timestamped, locked, and traceable. The principle: in systems where compliance matters, the data model <mark>is</mark> the design. Outcome: reconciliation moved from month-end ritual to real-time signal.
```

**Key changes:**
- Lead with principle: "When precision is the constraint, systems design is the solution"
- De-emphasize "vehicle loans" (sounds too fintech-specific)
- Emphasize the *thinking*: "data model is the design"
- Make it clear this applies to any precision-critical system

---

## CHANGE 3: Reframe Farmer.Chat intro

**File:** work/farmer-chat.html  
**Location:** Case study hero section  
**Type:** Text replacement

### Replace the eyebrow:

**Old:**
```
Case study · AI product · Field research · Social impact
```

**New:**
```
Case study · Accessibility Design · AI · Constraint-Driven UX
```

### Replace the title:

**Old:**
```
Designing voice-first AI for rural India & Africa.
```

**New:**
```
Building accessible AI experiences for users with real constraints.
```

**Rationale:** "Constraints" (universal) instead of "rural India & Africa" (location-specific). Makes it clear the principle applies anywhere users have barriers to access.

---

### Replace the TL;DR paragraph:

**Old:**
```
Building Farmer.Chat — an AI advisory platform for smallholder farmers with first-time smartphone access, low digital literacy, and no shared language with the team designing it. Two years of field research with 1,00,000+ farmers across India and East Africa showed three core insights: (1) voice was not a feature, voice was the product, (2) identity belongs to the crop, not the user, (3) trust is transferred, not earned. Platform engagement rose 25%, repeat engagement 35%, knowledge recall 28%.
```

**New:**
```
When your users can't read the product, can't type, and have never seen a chatbot, how do you design AI? That was the constraint: Farmer.Chat, built for smallholder farmers with low digital literacy, no shared language with the design team, and voice as the only reliable input modality. Two years of field research with 1,00,000+ farmers across India and East Africa revealed the principle: design <mark>for</mark> constraint, not around it. Voice-first, not text-first. Crop-identity, not user-identity. Research-driven, not assumed. The result: +25% engagement, +35% repeat use, +28% knowledge recall. The principle applies wherever users have real barriers to access.
```

**Key changes:**
- Lead with constraint: "When your users can't read the product..."
- De-emphasize "rural India & Africa"
- Emphasize principle: "design FOR constraint, not around it"
- End with: "principle applies wherever users have real barriers" — signals global relevance

---

## CHANGE 4: Add collaborator names (if available)

**File:** work/payment-box-pro.html  
**Location:** Section 08 (Reflection / Team credits)  
**Type:** Optional enhancement

### Current:
```
Team: Product Manager · Two Engineering Managers · Ops + Finance stakeholders.
```

### Update to (if you remember names):
```
Team:
- Product Manager: [Name] · CarDekho Financial Services
- Engineering Lead: [Name]
- Finance Stakeholder: [Name/role]

My ownership: UX architecture, state-machine design, all eleven edge-case flows, 
persona-view definitions, design-system contributions, research synthesis with Ops + Finance.
```

**Do the same for Farmer.Chat section 08:**

### Current:
```
Team: Cross-functional team of researchers, engineers, content designers, agricultural 
domain experts, and extension partners across India and East Africa.
```

### Update to:
```
Team:
- Product Lead: [Name] · Digital Green
- Research Partner: [Organization name if known]
- Engineering: [Names/roles if available]
- Domain Expert: [Agricultural specialist name]

My ownership: Research lead on voice and identity work; end-to-end UX for Farmer.Chat; 
prototype + testing on Vistaar; content-experience design on E-farm.
```

**Why:** Naming real collaborators signals seniority and credibility. If you don't remember names, it's OK to skip.

---

## CHANGE 5: Add Figma screenshots — Payment Box Pro

**File:** work/payment-box-pro.html  
**Location:** Three specific moments in the case study  
**Type:** Screenshot placeholders + captions

### Screenshot 1: Ledger Summary mockup

**Location in document:** Right after "Case-Level View — Financial Timeline" description, before the HTML table mockup.

**Add this HTML comment placeholder:**

```html
<!-- 
SCREENSHOT PLACEHOLDER: Ledger Summary tab from Figma
- Show: Header with case ID, transaction table, status badges
- Dimensions: 940px wide
- Design elements: Green accent on status, monospaced numbers, clear hierarchy
- File: Screenshot from Figma design system

CAPTION TO ADD BELOW IMAGE:
"Ledger Summary: Every transaction is timestamped, immutable, and signed off before case lock. 
This view shows the actual shipping design — green accent for terminal states, monospaced 
fonts for precision, status badges for clarity."
-->
```

### Screenshot 2: North Star metric card

**Location in document:** Right after the North Star card definition.

**Add this HTML comment placeholder:**

```html
<!-- 
SCREENSHOT PLACEHOLDER: North Star metric card from Figma
- Show: Card design with green tint background, ★ symbol, large title, definition prose
- Match design system: forest green (#1F4A3B), Manrope font, proper spacing
- File: Screenshot from Figma

CAPTION TO ADD BELOW IMAGE:
"North Star metric: Surfaced to the team as both a strategic principle and a tangible UI element. 
The green tint and ★ symbol signal importance without shouting."
-->
```

### Screenshot 3 (Optional): State machine diagram

**Location in document:** After the decision-list in Section 04.

**Add this HTML comment placeholder:**

```html
<!-- 
SCREENSHOT PLACEHOLDER (OPTIONAL): State machine diagram from Figma/Whimsical
- Show: Boxes, arrows, terminal states marked clearly
- Should be cleaner than the current SVG mockup
- File: Screenshot from Figma or Whimsical

CAPTION TO ADD BELOW IMAGE:
"State machine rendered in Figma: Every state transition is intentional; terminal states are 
irreversible. This diagram drove all the UI decisions that followed."
-->
```

---

## CHANGE 6: Add Figma screenshots — Farmer.Chat

**File:** work/farmer-chat.html  
**Location:** Three specific moments  
**Type:** Screenshot placeholders + captions

### Screenshot 1: Onboarding flow (mobile)

**Location in document:** Right before or after the decision-list in Section 03 (Key Decisions).

**Add this HTML comment placeholder:**

```html
<!-- 
SCREENSHOT PLACEHOLDER: Mobile onboarding flow from Figma
- Show: 2-3 screens of crop selection, voice-first UI, icon-based navigation
- Dimensions: Mobile-width (375px)
- Design elements: Crop icons, voice CTA (microphone icon prominent), button states
- File: Screenshot from Figma

CAPTION TO ADD BELOW IMAGE:
"Onboarding flow (mobile): Crop-first interaction using icon-based navigation. Voice was not 
an accessibility option; it was the primary interaction mode. The microphone CTA is prominent; 
text input appears only on tap."
-->
```

### Screenshot 2: Voice interface component

**Location in document:** After the voice-first decision explanation in Section 03.

**Add this HTML comment placeholder:**

```html
<!-- 
SCREENSHOT PLACEHOLDER: Voice interface component states from Figma
- Show: Microphone button in different states (listening, recording, processing)
- Design elements: Color changes, affordance clarity, feedback states
- File: Screenshot from Figma

CAPTION TO ADD BELOW IMAGE:
"Voice interface component: Microphone states (listening · recording · processing). Users 
needed clear feedback that the system was hearing them — especially critical for first-time 
users on unreliable networks."
-->
```

### Screenshot 3: Research insights visual

**Location in document:** Right after the three insight cards in Section 02 (Research).

**Add this HTML comment placeholder:**

```html
<!-- 
SCREENSHOT PLACEHOLDER: Research findings visualization from Figma
- Show: Persona cards, insight cards, or data visualization of research
- File: Screenshot from Figma

CAPTION TO ADD BELOW IMAGE:
"Research insights visualized: Three core findings that drove the product direction. These 
insights — voice as product, crop-identity, trust transferred — became the UX pillars for 
Farmer.Chat."
-->
```

---

## Implementation Checklist

After making these changes, verify:

- [ ] About page has the new "How my case studies fit together" section
- [ ] Payment Box Pro eyebrow says "Systems Design" not "Fintech"
- [ ] Payment Box Pro TL;DR starts with "When precision is the constraint..."
- [ ] Farmer.Chat eyebrow says "Accessibility Design · Constraint-Driven UX"
- [ ] Farmer.Chat title says "...for users with real constraints"
- [ ] Farmer.Chat TL;DR ends with "principle applies wherever users have real barriers"
- [ ] Collaborator names are added (if available)
- [ ] All six screenshot placeholders are in the correct locations
- [ ] All captions are present and tie back to the "constraint-driven design" principle
- [ ] No spelling errors or broken links
- [ ] Design system (colors, fonts, spacing) is intact

---

## What happens next

Once you've made these text changes and added the screenshot placeholders, send the files back to Divyambari. She will:

1. Take Figma screenshots and insert them at the placeholder locations
2. Deploy to Vercel
3. Update her LinkedIn
4. Begin outreach with the new, broader positioning

**Result:** Portfolio now reads as "systems designer who handles constraint anywhere" instead of "fintech specialist + farming specialist." This unlocks hiring from Notion, Linear, Stripe, and tier-1 Indian companies beyond just fintech.

---

## Questions for you (Claude Design)

Before you start:

1. **Are the HTML styling rules clear?** Should I provide CSS if you need custom styling for the new narrative paragraph?
2. **For the screenshots:** Should I note the exact pixel dimensions, or can you infer from the context?
3. **Timeline:** Can you turnaround all 6 changes in one day, or would you prefer to batch them?

Ready when you are.
