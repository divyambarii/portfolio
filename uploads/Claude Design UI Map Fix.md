# Claude Design — Fix the Grab & Go UI Map Display

**Paste into Claude Design. Goal: remove the two large inline flow images from the case study body and replace them with a clean button that opens a dedicated full-screen page where the flows can be viewed properly.**

---

## Problem

The two large flow images (`gg-ui-flowmap-labeled.png` and `gg-ui-annotated-hifi.png`) are currently embedded inline in the Grab & Go case study. They're extremely tall and detail-dense, so inline they look cluttered, unbalanced, and the screens are too small to read. The current "click to expand" overlay also looks messy.

## Fix

Remove both images from the inline case-study flow. Replace them with a single clean **call-to-action card/button** in the relevant section that links to a new dedicated page presenting both flows properly at full size.

---

## Step 1 — Remove inline embeds

In `work/grab-and-go.html`, remove the inline `<figure>` blocks (and any "click to expand" overlay styling) for:
- `gg-ui-flowmap-labeled.png`
- `gg-ui-annotated-hifi.png`

Keep all other images and prose exactly as they are.

## Step 2 — Add a clean CTA card where those images were

In the section where the flow was (around "How We Got There" / system modeling), insert a tidy button card styled in the design system:

```html
<a href="work/grab-and-go-uimap.html" 
   style="display:flex; align-items:center; justify-content:space-between; gap:var(--sp-4);
          margin:var(--sp-8) 0; padding:var(--sp-5) var(--sp-6);
          background:var(--surface); border:1px solid rgba(26,24,21,0.10);
          border-radius:12px; text-decoration:none; color:var(--ink);
          box-shadow:0 2px 8px rgba(26,24,21,0.06); transition:all .2s;">
  <span style="display:flex; flex-direction:column; gap:4px;">
    <span style="font-family:var(--font-display); font-weight:600; font-size:18px;">View the full UI map &amp; annotated flow</span>
    <span style="font-family:var(--font-mono); font-size:13px; color:var(--ink-muted);">Every screen and state — onboarding to invoice — with design rationale. Opens full screen.</span>
  </span>
  <span style="font-family:var(--font-mono); font-size:22px; color:var(--forest); flex-shrink:0;">&rarr;</span>
</a>
```

(Add a subtle hover: border darkens to `--forest`, shadow lifts slightly.)

## Step 3 — Create the dedicated page `work/grab-and-go-uimap.html`

Build a new page in the SAME design system (cream `#F0E8D8`, ink, forest, Manrope + IBM Plex Mono, same nav header as other pages). This page exists to show the two large flows at full size with room to breathe.

Structure:
- Same site nav header (Work / About / Résumé / Contact)
- A back link at top: "&larr; Back to Grab & Go" → `work/grab-and-go.html`
- Page title: **Grab & Go — Full UI Map**
- Short intro line: *The complete screen-by-screen flow and the high-fidelity, annotated screens refined through user testing.*
- **Section 1 heading:** "UI Mapping — full flow"
  - Display `gg-ui-flowmap-labeled.png` at full content width (max ~1180px), `width:100%; height:auto`, generous vertical margins, rounded corners, subtle shadow. Because it's tall, this is fine here — the page is dedicated to it.
  - Caption (mono, muted): *Every screen and state across the journey — onboarding, login, store selection, scanning, error recovery, Face ID, duplicate detection, payment, and invoice.*
- **Section 2 heading:** "High-fidelity screens, annotated"
  - Display `gg-ui-annotated-hifi.png` the same way.
  - Caption: *Refined through user testing — color-coded scanning (essentials, restricted, fresh produce), guest location selection, facial recognition to reduce staff dependency, and save-for-later with time-based expiry.*
- Optional: an "Open image full size" text link under each, pointing directly at the image file, so viewers can zoom to read fine annotations.
- Footer / back link repeated at bottom.

Make it fully responsive (images scale, never overflow horizontally).

## Step 4 — Wire navigation

- The CTA card in the case study links to `work/grab-and-go-uimap.html`.
- The UI-map page links back to `work/grab-and-go.html` (top and bottom).
- The UI-map page is reachable ONLY from the Grab & Go case study (it should not appear in the main homepage Work grid — it's a sub-page).

## Step 5 — Privacy check
The annotated hi-fi image contains close-up face photos (Face ID section). If those are real identifiable people, flag it so I can decide whether to blur before publishing.

---

## Verification checklist
- [ ] Both large flow images removed from the inline case study body
- [ ] Messy "click to expand" overlay removed
- [ ] Clean CTA card added in their place, styled in the design system
- [ ] New page `work/grab-and-go-uimap.html` created in the same design system + nav
- [ ] Both flows displayed full-width on the dedicated page with captions
- [ ] "Open image full size" links work for deep zoom
- [ ] Back links to the case study work (top + bottom)
- [ ] Sub-page NOT added to the homepage Work grid
- [ ] Fully responsive; no horizontal overflow
- [ ] Rest of Grab & Go and the portfolio untouched
- [ ] Face-photo privacy flagged if applicable

---

**Attach `gg-ui-flowmap-labeled.png` and `gg-ui-annotated-hifi.png` if not already in the project. Make the change, run the checklist, and report back.**
