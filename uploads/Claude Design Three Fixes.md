# Claude Design — Three Fixes: Contact Page, De-dash, Simpler Homepage Copy

**Paste into Claude Design. Three separate tasks below. Keep everything else in the portfolio untouched.**

---

## TASK 1 — Build a working Contact page

The "Contact" nav link currently goes nowhere. Create a dedicated contact page and wire the nav link to it.

**Create `contact.html`** in the same design system (cream `#F0E8D8`, ink, forest, Manrope + IBM Plex Mono, same nav header as every other page).

Content:
- Same site nav header (Work / About / Résumé / Contact)
- Page heading: **Let's talk**
- Short line under it: *Open to senior product design roles globally. Always happy to talk systems, research, or a good design problem.*
- A clean list of real contact methods, each clickable:
  - Email: divyambariux@gmail.com  → `mailto:divyambariux@gmail.com`
  - LinkedIn → (use the existing LinkedIn URL already used elsewhere on the site; if none exists, leave a clearly marked placeholder `[LinkedIn URL]`)
  - Behance → (use the existing Behance URL already on the site; placeholder if none)
  - Phone (optional): +91 95552 87377 → `tel:+919555287377`
- A short closing line: *Based in Delhi, open to relocation anywhere. I reply within 48 hours.*
- Keep it simple and elegant. No contact form needed (a form requires a backend); clickable email and links are cleaner and actually work on a static site.

Then update the "Contact" link in the nav on EVERY page so it points to `contact.html`.

---

## TASK 2 — Remove em-dashes and en-dashes everywhere (de-AI the writing)

Across the ENTIRE site (all pages: home, about, all case studies, resume, contact, the UI-map page), remove em-dashes (—) and en-dashes (–) from the visible body and heading copy. They read as AI-generated.

Replace them naturally, choosing whatever fits the sentence:
- Often a period and a new sentence works best.
- Sometimes a comma.
- Sometimes a colon.
- Sometimes just removing it and rewording slightly.

Rules:
- Do NOT just swap "—" for a hyphen "-". That looks just as off. Rewrite the punctuation so the sentence flows naturally.
- Keep real hyphens in genuine compound words (for example: "self-checkout", "voice-first", "state-machine", "real-time", "first-time", "cross-functional", "color-coded", "audit-ready"). Those are correct and should stay.
- Only target the dash-as-pause (— and –) used to join clauses, not legitimate hyphenated words.
- Don't change meaning. Don't cut content. Just fix the punctuation so it reads like a human wrote it.

Example of the kind of change wanted:
- Before: "Voice was not a feature — voice was the product."
- After: "Voice was not a feature. Voice was the product."

Go through every page carefully and report how many you changed per page.

---

## TASK 3 — Simplify the homepage case study descriptions

On the homepage, the short descriptions under each case study card should be readable by anyone, including non-designers. Right now they may use designer jargon. Rewrite the three card descriptions in plain, warm, simple language that a non-designer would understand and enjoy, while still sounding credible.

Keep them short (one or two simple sentences). Use the rewrites below:

**Payment Box Pro**
Plain-language description:
*A money-tracking system for a car loan company. I turned five messy, disconnected tools into one clear record, so the team could finally trust the numbers and close cases without chasing spreadsheets.*

**Farmer.Chat**
Plain-language description:
*An app that helps farmers get expert farming advice just by talking to it. I designed it for people who cannot read or type, so they could ask questions in their own voice and get answers they trust.*

**Grab & Go**
Plain-language description:
*A friendlier way to check out at a store by yourself. I redesigned the self-checkout experience so anyone, including first-timers and older shoppers, can scan, pay, and leave without confusion or waiting for help.*

Rules:
- Keep the card titles and tags as they are; only change the description line.
- No jargon (avoid "systems thinking", "state machine", "constraint-driven", "north star" on these cards). Save that language for inside the case studies.
- Keep the tone warm and confident, not boastful.
- Make sure no em-dashes or en-dashes appear in these (apply Task 2 here too).

---

## Verification checklist
- [ ] `contact.html` created in the design system, with working email/LinkedIn/Behance links
- [ ] "Contact" nav link updated to `contact.html` on every page
- [ ] Em-dashes and en-dashes removed from all visible copy site-wide, rewritten naturally (not just swapped for hyphens)
- [ ] Legitimate hyphenated compound words left intact
- [ ] Homepage's three case study descriptions replaced with the plain-language versions
- [ ] Card titles and tags unchanged
- [ ] Per-page count of dash changes reported
- [ ] Nothing else altered; site still responsive

---

**Do all three tasks, run the checklist, and report back (including the dash-change counts and any contact links you had to leave as placeholders).**
