# Portfolio Build Brief — Divyambari Saxena, Product Designer

**Version 1.0 · May 2026**

A self-contained brief. Pair with three attachments before pasting:
1. My latest résumé (PDF)
2. "The Single Source of Financial Truth" — Payment Box Pro case study (PDF)
3. Behance link: `https://www.behance.net/gallery/249484785/Designing-Voice-First-AI-for-Rural-India-Africa`

---

## 0 · Your role

You are acting as a **senior product designer + frontend engineer + portfolio strategist**, building a personal portfolio for me. You think like a hiring committee for a senior product design role at a tier-1 product company (Razorpay, CRED, Stripe, Linear, Notion). You write like a thoughtful editor at Stripe Press. You code in semantic HTML and modern CSS.

You will **not**:
- Use AI-sounding phrases ("delve into", "leverage", "navigate the landscape", "in the realm of")
- Use buzzword UX language ("crafted", "passionate about user-centric design", "I love solving problems")
- Generate generic placeholder copy
- Default to Inter as the typeface
- Add gradients, glassmorphism, or kinetic motion
- Build dark mode
- Build flashy hero animations or scroll-triggered choreography

You will:
- Match the voice of a 3-year designer who has shipped real work and writes like a quiet adult
- Write case studies that read like internal product memos, not marketing pages
- Use restraint as a craft signal
- Build for mobile-first responsiveness without losing editorial density on desktop

---

## 1 · Who I am

| | |
|---|---|
| **Name** | Divyambari Saxena |
| **Location** | Delhi NCR, India |
| **Experience** | ~3 years shipped product work |
| **Currently** | Product Designer at **CarDekho Financial Services (Rupyy)** — fintech, lending workflows, payments, design systems |
| **Previously** | UX Designer at **Digital Green** (2023–2025) — AI advisory products for smallholder farmers across India and East Africa |
| **Education** | Bachelor of Visual Arts, University of Lucknow |
| **Email** | saxenadivyambari@gmail.com |
| **LinkedIn** | linkedin.com/in/divyambari |
| **Behance** | behance.net/divyambsaxena |

---

## 2 · Positioning thesis

> **A product designer working at the seam between fintech systems and emerging-market research, with AI as a method rather than a category.**

The narrowing is intentional. "Product Designer" alone is too generic. "Fintech Designer" alone undersells the field-research depth. "UX Researcher" undersells the systems work. The intersection is rare and defensible.

**What I should NOT be positioned as** (these have been considered and explicitly rejected):
- Web Designer / Solopreneur / Digital Creator (wrong buyer signal)
- UX Researcher (limits earnings ceiling)
- UX Engineer (no coding evidence)
- Design Strategist (premature, needs 5+ yrs)
- Visual / UI Designer (undersells systems work)

---

## 3 · Strategic objectives

### Target buyers (in order of fit)

| Tier | Companies |
|---|---|
| **Primary** | Razorpay, Zerodha/Rainmatter, Slice, Niyo, Jupiter, Cashfree, Groww, KhataBook, Meesho, Microsoft India, Atlassian India, Google India |
| **Mission-led** | Gates Foundation tech roles, Google.org, IDinsight, IDEO.org, Khan Academy, Bharat-tier-2 product teams |
| **Stretch (over time)** | Stripe APAC, Notion, Linear, Figma, Airbnb |

### Recruiter journey (the path the IA must serve)

- **0–5 sec:** sees current employer, prior employer, scope of work. Decides whether to keep reading.
- **5–30 sec:** scans the two case study cards. Each one shows problem + outcome.
- **30–90 sec:** opens one case study. Sees TL;DR, structure, decisions, impact in one scroll.
- **90–180 sec:** if convinced, opens About → finds writing voice + ownership signals → forwards to hiring manager.

### What I want a hiring manager to feel after closing the tab

> *"She thinks in state machines, not screens. She did 1L+ farmer interviews and shipped an AI bot for people who can't read. She writes like she's been doing this longer than three years. Forward to design lead."*

That impression is the design brief.

---

## 4 · Design direction

### Aesthetic anchors

- **Stripe editorial pages** — typography-led, generous whitespace, prose-dominant
- **Linear, Vercel, Notion** — modern product-company calm
- **leedave.com** — editorial restraint, almost a styled document
- **My own Payment Box Pro case study (the attached PDF)** — this is the design language I want the entire site to inherit

### Mood

- Editorial · premium · content-led · grounded · adult · quiet confidence
- "Reads like a Stripe customer story, not a Dribbble shot"

### Hard rejects

- ❌ Gradients beyond the most subtle (no neon, no glassmorphism)
- ❌ Bold-on-everything (use weight + size for hierarchy, not bold + color)
- ❌ Dribbble-style hero illustrations
- ❌ Scroll-triggered animations, parallax, kinetic typography
- ❌ Dark mode (light only)
- ❌ Stock photography of "diverse designers at work"
- ❌ AI-generated hero images
- ❌ The default "Made with Framer" / "Made with Webflow" footer

---

## 5 · Design system (exact tokens)

### Colors

```
--paper:           #F0E8D8   /* warm cream — the page itself */
--paper-warm:      #ECE1CB
--surface:         #FFFFFF   /* white cards on cream */
--surface-tint:    #FAF4E6

--ink:             #1A1815   /* warm near-black text */
--ink-muted:       #5F584D
--ink-faint:       #948D7E

--rule:            #DDD2B8
--rule-strong:     #C4B695

--forest:          #1F4A3B   /* the trust accent */
--forest-hover:    #2D6552
--forest-tint:     #DCE7DE   /* North Star block bg */
--forest-edge:     #B5CDBC

--marker:          #F8E16C   /* yellow highlight — signature element */
--marker-soft:     #FDF1B0
--coral:           #C75A4A   /* ✕ marks, before-state */
```

### Typography

- **Body & headings:** `Manrope` (Google Fonts, weights 300–800, variable)
- **Mono / metadata / eyebrows:** `IBM Plex Mono` (Google Fonts, weights 400, 500)
- **No serif.** No Inter. No Geist.

### Type scale

| Level | Size | Weight | Letter-spacing |
|---|---|---|---|
| H1 / Display | `clamp(42px, 7vw, 72px)` | 600 | -0.035em |
| H2 / Section | `clamp(28px, 3.4vw, 38px)` | 600 | -0.028em |
| H3 | 22px | 600 | -0.022em |
| H4 / sub-section | 17px | 600 | -0.018em |
| Body | 17px | 400 | -0.003em |
| Lede | 19–22px | 400 | -0.005em |
| Mono small | 12–13px | 400 | 0–0.08em (tracked uppercase) |

### Spacing (4px base, geometric)

`4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128 · 160 · 200`

All spacing through CSS variables `--sp-1` to `--sp-12`. Never inline pixel values.

### Reading widths

| Use | Max-width |
|---|---|
| Reading column (prose) | 660px |
| Content column (case study body) | 880px |
| Wide container | 1180px |

### The marker highlight (signature element)

The yellow marker highlight from the case study is the single most recognizable visual element. Use it as `<mark>` tags around **one or two phrases per section** — never more. The CSS:

```css
mark {
  background: linear-gradient(180deg,
    transparent 55%,
    var(--marker) 55%,
    var(--marker) 92%,
    transparent 92%);
  padding: 0 0.15em;
}
```

Apply to: key claims, signature numbers ("1L+ farmers"), inflection words. **Never** apply to: navigation, headers, body prose without intent.

### Motion

- Hover transitions only: `160–200ms ease`
- No scroll-triggered animation
- No parallax
- No autoplay video
- No fade-in on load

---

## 6 · Information architecture

### Sitemap (deliberately small)

```
/                              Homepage
├── /work
│   ├── /work/payment-box-pro       Case study 1 — Fintech ledger
│   └── /work/farmer-chat           Case study 2 — Voice-first AI
├── /about                          About + how I work
├── /resume.pdf                     (user adds this file)
└── footer everywhere:              email · LinkedIn · Behance · résumé
```

Two case studies. No more, no fewer. Curation is the signal.

### Homepage hierarchy

1. **Sticky nav** — name (left), 4 links (right), mono type
2. **Hero** — status pills · H1 positioning · lede with employer anchors · Now/Then/Lens meta strip
3. **Selected Work** — two case study cards (number · meta · title · 1-line problem · arrow)
4. **Approach** — short paragraph about how I work + link to About
5. **Metrics strip** — five numbers, mono labels (1,000+ screens · 1L+ users · 5+ languages · 25+ components · 3 yrs)
6. **Pull quote** — the fintech precision quote from Payment Box Pro
7. **CTA** — eyebrow ("Currently hiring? Read this.") · H2 · availability paragraph · contact links
8. **Footer** — © · email · LinkedIn · Behance · résumé

### Case study hierarchy (universal 8-section template)

Every case study follows this spine. **Never deviate.**

| # | Section | Purpose |
|---|---|---|
| **00** | Hero (eyebrow + title + subtitle + meta table + TL;DR) | First-30-second story |
| **01** | The Problem | What was actually broken and how I framed it |
| **02** | The North Star (or equivalent strategic frame) | The single criterion the design optimized against |
| **03** | The Solution | What I built — with visual product mockups |
| **04** | Key Decisions | 3–5 decisions, each with "gave up: X" — the trade-offs |
| **05** | Edge Cases / Systems Thinking | Where the real design lived; depth signal |
| **06** | Impact | Before/after, quantified |
| **07** | What I'd Do Differently | The seniority paragraph — never skip this |
| **08** | Reflection | Pull quote + team + ownership credits |

---

## 7 · Visual components to build

These are the components the design system must support:

1. **Marker highlight** (`<mark>`) — yellow Stabilo effect
2. **Status pills** — mono text, dot indicator, forest-green for "available"
3. **Project cards** (homepage) — number · meta · title · description · arrow, hover-shifts-right
4. **Metric strip** — large number + mono label, 4–5 across
5. **Hero meta block** — Now / Then / Lens, grid of label-value pairs
6. **Eyebrow** — mono, uppercase, 12px, tracked
7. **Section number** — "01 — Problem" pattern with em-dash
8. **Before/After table** — coral ✕ for before, forest ✓ for after
9. **Persona card** — badge (PO/FT/AU) · role · summary · bulleted pains
10. **North Star block** — forest-tint background, ★ label, big title, muted prose
11. **Stat grid** — 4 large numbers + mono descriptions
12. **Pull quote** — left forest-green border, 24–32px, italic-optional
13. **Decision list** — two-column: "what + reasoning" + "gave up: trade-off in mono uppercase"
14. **Edge case list** — header with tag pill on right + body prose
15. **Impact table** — Metric · Before · After
16. **Product mockup** — styled HTML rendering of actual UI:
    - mockup-bar (top label strip)
    - tabs (with count badges)
    - data table (with status dots: settled / pending / failed / locked / mismatch)
    - footer (with totals)
17. **State-machine SVG** — inline, semantic, accessible, renders crisp on retina
18. **Next-project footer** — label + big title + arrow, on every case study

---

## 8 · Voice and writing

### Tone principles

- **Specific over general.** "1,000+ shipped screens" beats "lots of shipped work."
- **Decisions over deliverables.** Open every section with what you chose, not what you built.
- **Trade-offs visible.** Every decision is paired with what was given up.
- **Honest reflection.** Every case study ends with "What I'd do differently" — this is the most senior section.
- **Quiet confidence.** Never "passionate." Never "obsessed." Never "thrilled."

### Sentence patterns that work

- "The work was not to redesign an interface. It was to redesign the system underneath the interface."
- "X taught me Y."
- "Before I opened Figma, I argued for…"
- "A small design call with large operational consequences."
- "The most important design work happens before pixels."

### Words to remove on sight

| Don't use | Replace with |
|---|---|
| Crafted | Designed / built / shipped |
| Leverage | Use |
| Delve into | Examine / discuss / walk through |
| Empower | (cut entirely, almost always filler) |
| Passionate about | (cut entirely) |
| Ecosystem | System / product / platform |
| Synergy | Connection / overlap |
| Holistic | (cut, usually filler) |
| Seamlessly | (cut, usually filler) |
| Robust | Reliable / sturdy / tested |
| Cutting-edge | New / recent / modern |
| Game-changing | (cut entirely) |
| Stakeholder buy-in | Team agreement |
| Best-in-class | (cut, usually filler) |

---

## 9 · Content — projects to include

### Project 1: Payment Box Pro Ledger (use the attached PDF in full)

Lift content directly from the attached PDF but elevate the writing per the voice rules above. Include:

- The "Five systems, zero truth" framing
- All three personas (Payment Ops / Finance Team / Auditors) as persona cards
- The Financial Case Closure Rate as the North Star block
- Both product mockups (Ledger Summary + Global View) — render as styled HTML, not images
- The state-machine diagram — render as inline SVG
- All four key decisions with "gave up" annotations
- All four edge cases with tags
- The before/after impact table
- The three "what I'd do differently" paragraphs
- The fintech precision pull quote

### Project 2: Farmer.Chat (use my resume + Behance link)

Specific resume points to surface:
- Mixed-methods research with **1,00,000+ farmers** across India and East Africa
- **25%** engagement boost (UI revamp)
- **35%** repeat engagement (content design)
- **28%** knowledge recall (E-farm)
- **5+ languages**, WCAG-compliant
- **Vistaar pilot:** 20K+ farmers, onboarding cut by 2 days
- Farmer.Chat AI bot — voice-first multilingual

Structure the case study around three research insights:
1. **Voice was not a feature, voice was the product** — chat-with-voice-as-fallback was the wrong frame
2. **Identity belongs to the crop, not the user** — "I am a wheat farmer" → personalization by crop, not demographic
3. **Trust is transferred, not earned** — design for the extension worker / demonstrator, not just the end user

Five design decisions to surface with "gave up" annotations:
1. Voice-first interaction; text as fallback (gave up: faster engineering)
2. Iconography over labels (gave up: localization elegance)
3. Crop-first onboarding (gave up: tidier user model)
4. Designed for the demonstrator, not only the user (gave up: purist self-service)
5. WCAG beyond standard (gave up: brand-layer visual richness)

End with the pull quote: *"The most useful thing I learned at Digital Green is that designing for someone who does not share your language, your device, your literacy, your bandwidth, or your assumptions about technology is the actual job."*

---

## 10 · Output requirements

- **Static multi-page HTML.** No build step, no framework, no client-side router.
- **Five files:**
  - `index.html` (homepage)
  - `about.html` (about page)
  - `work/payment-box-pro.html` (case study 1)
  - `work/farmer-chat.html` (case study 2)
  - `styles.css` (shared)
  - `README.md` (deployment instructions)
- **Semantic HTML.** `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`. ARIA labels where useful.
- **Responsive.** Mobile-first breakpoints. Works at 320px, 768px, 1280px, 1920px.
- **Accessible.** WCAG AA color contrast. Keyboard-reachable. `role="img"` + `aria-label` on the SVG.
- **Print-friendly.** Hidden nav and footer. `mark` becomes underline in print.
- **Open Graph + Twitter Card meta tags** on every page.
- **No external dependencies** except Google Fonts (`Manrope` + `IBM Plex Mono`).
- **No JavaScript** unless absolutely necessary. The portfolio should work with JS disabled.

---

## 11 · Deployment

The portfolio is static. After build, the deployment path:

1. Buy a custom domain (`divyambari.com` or `.design`). Drop the Framer subdomain.
2. Deploy to **Vercel** (free, custom domain support, fastest path), or Netlify, or Cloudflare Pages.
3. Add the actual résumé PDF at `/resume.pdf`.
4. Add an OG image at `/og-image.png` (1200×630, typographic).
5. Update LinkedIn headline to match the positioning thesis. The portfolio rewrites the whole intro funnel only if LinkedIn agrees.

---

## 12 · How to verify the output (self-check before finalizing)

After building, run this 7-point check:

| # | Check | Pass criteria |
|---|---|---|
| 1 | Open the homepage. Cover the H1. Read only the meta strip. | A recruiter knows current employer + previous employer + lens within 5 seconds. |
| 2 | Open a case study. Scroll only the TL;DR. | A reader knows the problem, the decision, and the outcome in 3 sentences. |
| 3 | Search the whole site for AI-tell words ("delve", "leverage", "passionate", "robust"). | Zero hits. |
| 4 | Resize the browser to 375px width. | Layout holds; type stays readable; no horizontal scroll. |
| 5 | Disable JavaScript. | Site fully works. |
| 6 | Print the homepage. | Print stylesheet activates; nav + footer hidden; mark becomes underline. |
| 7 | Run a Lighthouse audit. | Performance > 95, Accessibility > 95, Best Practices > 95, SEO > 95. |

If any check fails, fix it before delivery. Restraint is a craft signal; broken craft signals undo restraint.

---

**End of brief.**

If anything in this brief is ambiguous, ask me before assuming. Restraint and specificity are the two requirements; everything else flows from those.
