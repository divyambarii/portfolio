# Divyambari Saxena — Portfolio

A production-ready portfolio built on the design system from "The Single Source of Financial Truth" case study. Warm cream paper · forest-green accent · yellow marker highlights · Manrope + IBM Plex Mono.

## Files

```
portfolio/
├── index.html                       Homepage
├── about.html                       About + approach
├── resume.html                      Web résumé — recruiter-friendly
├── work/
│   ├── payment-box-pro.html         Case study 1 — fintech ledger
│   └── farmer-chat.html             Case study 2 — voice-first AI
├── styles.css                       Shared stylesheet
├── PROMPT.md                        Master strategic brief (paste into any AI to rebuild)
└── README.md                        This file
```

## Pages explained

| Page | Purpose | Length |
|---|---|---|
| `index.html` | Recruiter's first impression. Hero, two case studies, approach, metrics, CTA. | 1 scroll |
| `about.html` | Voice + ownership signals. Read by anyone considering a longer engagement. | 3–4 scrolls |
| `resume.html` | Canonical résumé as HTML — searchable, link-able, printable to PDF cleanly. Replaces the need to host a PDF (though PDF link is also there). | 2 scrolls |
| `work/payment-box-pro.html` | The flagship case study. Eight-section template, inline product mockups, state-machine SVG. | 5 scrolls |
| `work/farmer-chat.html` | The differentiator case study. Research-led, three-insight structure. | 4 scrolls |

## Deployment (30 minutes)

1. **Drop a real `resume.pdf`** into the portfolio root (the download link on `resume.html` expects it).
2. **Push to Vercel** (recommended — drag the folder onto vercel.com).
   - Alternatives: Netlify, Cloudflare Pages, GitHub Pages.
3. **Buy a custom domain** (`divyambari.com` or `.design`) and drop the Framer subdomain. This is the single highest-leverage change for credibility.
4. **Add `og-image.png`** (1200×630, typographic) for LinkedIn previews.

## Design system at a glance

### Color tokens

| Token | Hex | Used for |
|---|---|---|
| `--paper` | `#F0E8D8` | Warm cream background |
| `--ink` | `#1A1815` | Primary text |
| `--ink-muted` | `#5F584D` | Body muted |
| `--forest` | `#1F4A3B` | Single accent — links, North Star, active states |
| `--marker` | `#F8E16C` | Yellow highlight on key phrases (signature element) |
| `--coral` | `#C75A4A` | ✕ marks, "gave up" trade-offs |

### Typography

- **Body + display:** Manrope (300–800, variable) — Google Fonts
- **Mono + metadata:** IBM Plex Mono (400, 500) — Google Fonts
- **No serif. No Inter. No Geist.**

### Signature components

- The marker highlight (`<mark>`) — yellow Stabilo effect on key phrases
- Persona cards with badge (PO / FT / AU / 01 / 02 / 03)
- North Star block (forest tint background)
- Decision list with explicit "Gave up" trade-offs
- Product mockups rendered as **styled HTML** (no images required)
- Inline state-machine SVG
- Pull quote with forest-green left border

## What's still on you

1. **Add `resume.pdf`** at root.
2. **Add real screenshots** to case studies where natural — the HTML mockups are placeholders that work, but real Figma artifacts complete the picture (NDA permitting).
3. **Update LinkedIn headline** to match the positioning thesis:
   > Product Designer · Fintech systems & emerging-market research · Currently at CarDekho Financial Services
4. **Update Behance** — hide or reframe Netflix and MITTI (they leak the old portfolio identity).
5. **OG image** at `og-image.png` for LinkedIn shares.

## Self-verification (before going live)

| Check | Pass criteria |
|---|---|
| Cover the H1; read only the meta strip | Reader knows current/prior employer + lens in 5 sec |
| Read case study TL;DR only | Problem, decision, outcome clear in 3 sentences |
| Grep the codebase for `delve`, `leverage`, `passionate`, `robust` | Zero hits |
| Resize browser to 375px | Layout holds; type readable; no horizontal scroll |
| Disable JS in browser | Site fully works |
| Print preview the résumé | Clean A4 layout; nav and footer hidden; marker becomes underline |
| Lighthouse audit | Performance > 95, Accessibility > 95, Best Practices > 95, SEO > 95 |

## Accessibility

- Semantic HTML throughout (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- WCAG AA color contrast on all text/background pairs
- All interactive elements keyboard-reachable
- SVG state machine has `role="img"` + `aria-label`
- Minimal motion, hover-only — no scroll-triggered animation
- Print stylesheet on the résumé converts marker to underline for readability

## Contact (canonical)

- **Email:** divyambariux@gmail.com *(harmonized — the old saxenadivyambari address is no longer referenced)*
- **Phone:** +91 95552 87377
- **LinkedIn:** linkedin.com/in/divyambari
- **Behance:** behance.net/divyambsaxena

## Strategic context

The portfolio is intentionally small. Two case studies, one résumé page, one about, one homepage. Curation is the signal. Earlier work (Netflix Desktop Redesign, SmartCheckout, MITTI) lives on Behance as archive; nothing is hidden, but nothing competes with the two shipped projects.

For the full strategic brief — positioning thesis, recruiter journey, hiring psychology, what NOT to build — see `PROMPT.md`. That file is the canonical source of truth and can be pasted into any AI to rebuild or evolve this portfolio in 30 minutes.

---

**Last updated:** May 2026.
