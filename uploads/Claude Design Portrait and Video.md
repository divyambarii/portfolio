# Claude Design — Add Portrait + Walkthrough Video to the About Page

**Paste into Claude Design. Attach the portrait photo. The video link is already included below.**

---

## The task

Add two things to the **About page** (`about.html`), both in the existing design system (cream `#F0E8D8`, ink `#1A1815`, ink-muted `#5F584D`, forest `#1F4A3B`, marker `#F8E16C`, surface `#FFFFFF`, fonts Manrope + IBM Plex Mono):

1. A portrait photo of me (attached).
2. A walkthrough video (YouTube, embedded).

Do not change any other page. Do not rewrite the existing About copy. only wrap it into the new layout.

---

## Page flow (target order for the top of the About page)

1. Portrait photo + intro heading/paragraph (side by side on desktop)
2. The walkthrough video
3. Then the existing deeper sections (systems, research, how the case studies fit together, etc.)

---

## PART 1 — Portrait photo

Rename the attached file to `about-portrait.jpg`, store in `images/`.

Place it at the TOP of the About page, paired with the opening intro as a two-column layout on desktop (portrait ~40 percent left, intro text ~60 percent right). On mobile, stack: portrait first (centered, capped at about 260 to 280px wide), then text.

```html
<div style="display:flex; gap:var(--sp-8); align-items:center; flex-wrap:wrap; margin:var(--sp-8) 0;">
  <img src="images/about-portrait.jpg" 
    alt="Portrait of Divyambari Saxena" 
    loading="lazy"
    style="width:100%; max-width:320px; height:auto; border-radius:12px; 
           box-shadow:0 4px 20px rgba(26,24,21,0.15); display:block; flex-shrink:0;">
  <div style="flex:1; min-width:280px;">
    <!-- existing About intro heading + first paragraph go here, unchanged -->
  </div>
</div>
```

Rules: rounded corners (12px), subtle shadow, natural portrait aspect ratio (no stretching or awkward crop), no filters (the photo's warm terracotta background already suits the palette). Fully responsive.

---

## PART 2 — Walkthrough video

Embed this YouTube video (unlisted) directly below the portrait + intro block, above the deeper sections.

Video: `https://youtu.be/5WNxLYGj_cw`  (embed URL: `https://www.youtube.com/embed/5WNxLYGj_cw`)

```html
<section style="margin: var(--sp-10) 0;">
  <p style="font-family:var(--font-mono); font-size:13px; text-transform:uppercase; letter-spacing:0.05em; color:var(--ink-muted); margin-bottom:var(--sp-3);">
    A short walkthrough
  </p>
  <div style="position:relative; width:100%; padding-top:56.25%; border-radius:12px; overflow:hidden; box-shadow:0 4px 16px rgba(26,24,21,0.12);">
    <iframe 
      src="https://www.youtube.com/embed/5WNxLYGj_cw" 
      title="Portfolio walkthrough"
      style="position:absolute; top:0; left:0; width:100%; height:100%; border:0;"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
      loading="lazy">
    </iframe>
  </div>
  <p style="font-family:var(--font-mono); font-size:13px; color:var(--ink-muted); margin-top:var(--sp-2);">
    A short overview of how I think about design and the work on this site.
  </p>
</section>
```

Rules: responsive 16:9 (the padding-top:56.25% handles this), lazy-loaded so it does not slow the page, no autoplay with sound, rounded corners + subtle shadow to match the site.

---

## Rules for both
- Match the existing design system exactly. no new colors, no off-brand styling.
- Fully responsive. nothing overflows on mobile. portrait and video both scale cleanly.
- Do not change the existing About copy. just wrap the intro into the new two-column block.
- Do not change any other page.
- No em-dashes or en-dashes in any label or caption text you add.

---

## Verification checklist
- [ ] Portrait added at top of About, paired with intro, two-column on desktop, stacked on mobile
- [ ] Walkthrough video embedded directly below, responsive 16:9, lazy-loaded, no autoplay-with-sound
- [ ] Page order: portrait + intro, then video, then existing deeper sections
- [ ] Both have rounded corners + subtle shadow matching the design system
- [ ] No stretching of the portrait, no overflow anywhere on mobile
- [ ] Existing About copy unchanged
- [ ] No dashes in added labels/captions
- [ ] No other page changed

---

**Add the portrait and the video, run the checklist, and report back.**
