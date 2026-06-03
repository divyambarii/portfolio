# Claude Design — Portrait Cropping & Framing (extension)

**Add this to the portrait + video prompt. It tells you how to crop and frame the portrait so it sits cleanly in the layout.**

---

## Context on the source image

The attached portrait is a tall vertical photo with a lot of empty terracotta background above the head and some negative space around the figure. Used raw, it will look too tall and unbalanced in the two-column layout. Crop and frame it so it reads as a tidy, intentional portrait.

---

## How to crop and frame

Do NOT stretch or distort the image. Achieve the crop using CSS `object-fit: cover` with `object-position`, so the original file stays intact and only the visible frame changes.

Target: a balanced portrait crop, roughly **4:5 aspect ratio** (slightly taller than square), with the face positioned in the upper-middle of the frame and a little breathing room above the head. Trim most of the empty background at the very top and the excess at the bottom.

Replace the portrait `<img>` from the main prompt with this framed version:

```html
<div style="width:100%; max-width:340px; aspect-ratio:4/5; border-radius:12px; overflow:hidden; box-shadow:0 4px 20px rgba(26,24,21,0.15); flex-shrink:0;">
  <img src="images/about-portrait.jpg" 
    alt="Portrait of Divyambari Saxena" 
    loading="lazy"
    style="width:100%; height:100%; object-fit:cover; object-position:center 28%; display:block;">
</div>
```

Notes on the controls:
- `aspect-ratio:4/5` sets the tidy portrait frame.
- `object-fit:cover` fills the frame without distortion (it crops, never stretches).
- `object-position:center 28%` pulls the framing toward the upper portion so the face sits nicely with a little headroom. Adjust this percentage if needed: a lower number (for example 20%) moves the crop up toward the top of the head, a higher number (for example 40%) moves it down toward the chin. Tune it so the eyes sit roughly in the upper third and the face is centered horizontally.
- `overflow:hidden` on the wrapper plus `border-radius` keeps the rounded corners clean.

---

## Responsive behavior
- On mobile, keep the same 4:5 frame, centered, capped at about 260 to 280px wide.
- The face should remain well-framed at every screen size (the `object-position` handles this automatically since it is percentage-based).

---

## Rules
- Never stretch or squash the image. only crop via object-fit.
- Keep the rounded corners (12px) and subtle shadow.
- No filters, no recoloring. the warm terracotta background stays as is.
- If `center 28%` does not frame the face well after rendering, adjust the vertical percentage until the eyes sit in the upper third and there is a small, even amount of headroom.

---

## Verification checklist (additions)
- [ ] Portrait displays in a clean 4:5 frame, not the raw tall aspect ratio
- [ ] Face well-positioned with slight headroom, eyes around the upper third
- [ ] Crop achieved via object-fit/object-position, image not stretched or distorted
- [ ] Frame looks balanced on both desktop and mobile
- [ ] Rounded corners + shadow intact, no filters applied

---

**Apply this cropping/framing to the portrait, tune object-position so the face sits well, run the checklist, and report back.**
