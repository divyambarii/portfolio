// about-tweaks.jsx
// Three expressive controls that reshape the *feel* of the About page —
// not single-property pixel-pushing. Each lever moves a coordinated set of
// design-system tokens at once.
//
//   Surface & ink  — the whole two-temperature palette (paper, ink, hairlines,
//                    marker, nav glass) shifts between warm editorial, cool
//                    archive, and clinical high-contrast.
//   Reading rhythm — type size, line-height, measure, and section spacing move
//                    together: dense memo → editorial → Stripe-Press essay.
//   Emphasis       — the signature highlight: yellow marker, quiet ink underline,
//                    or austere bold ink.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "surface": "Cream",
  "rhythm": "Editorial",
  "emphasis": "Marker"
}/*EDITMODE-END*/;

// ── Coordinated token sets ───────────────────────────────────────────────────

const PALETTES = {
  Cream: {
    '--paper': '#F0E8D8', '--paper-warm': '#ECE1CB', '--surface': '#FFFFFF',
    '--surface-tint': '#FAF4E6', '--ink': '#1A1815', '--ink-muted': '#5F584D',
    '--ink-faint': '#948D7E', '--rule': '#DDD2B8', '--rule-strong': '#C4B695',
    '--marker': '#F8E16C', navbg: 'rgba(240,232,216,0.92)',
  },
  Cool: {
    '--paper': '#E7E7E1', '--paper-warm': '#DCDCD4', '--surface': '#FAFAF8',
    '--surface-tint': '#F0F0EB', '--ink': '#1B1C1E', '--ink-muted': '#565A60',
    '--ink-faint': '#8B8F96', '--rule': '#D3D3CC', '--rule-strong': '#B6B7AE',
    '--marker': '#E8DF8E', navbg: 'rgba(231,231,225,0.92)',
  },
  Mono: {
    '--paper': '#FAF8F3', '--paper-warm': '#EFECE3', '--surface': '#FFFFFF',
    '--surface-tint': '#F5F3ED', '--ink': '#111110', '--ink-muted': '#44413A',
    '--ink-faint': '#6C685F', '--rule': '#D9D3C5', '--rule-strong': '#B4AC9A',
    '--marker': '#F6DA45', navbg: 'rgba(250,248,243,0.95)',
  },
};

const RHYTHMS = {
  Compact:   { size: '15.5px', lh: 1.5,  measure: '600px', pad: 'var(--sp-7)', lede: 'clamp(18px,1.9vw,21px)' },
  Editorial: { size: '17px',   lh: 1.6,  measure: '660px', pad: 'var(--sp-8)', lede: 'clamp(20px,2.2vw,24px)' },
  Spacious:  { size: '18.5px', lh: 1.78, measure: '720px', pad: 'var(--sp-9)', lede: 'clamp(22px,2.5vw,27px)' },
};

function emphasisCSS(mode) {
  if (mode === 'Underline') {
    return `
      mark,.mark{background:none;padding:0;color:var(--ink);font-style:normal;
        text-decoration:underline;text-decoration-color:var(--forest);
        text-decoration-thickness:2px;text-underline-offset:3px;}
      mark.strong,.mark-strong{background:none;padding:0;text-decoration-thickness:3px;}`;
  }
  if (mode === 'Quiet') {
    return `
      mark,.mark{background:none;padding:0;color:var(--ink);font-weight:600;font-style:normal;}
      mark.strong,.mark-strong{background:none;padding:0;font-weight:700;}`;
  }
  // Marker (default) — re-emitted so it keeps tracking the active --marker token
  return `
    mark,.mark{background:linear-gradient(180deg,transparent 55%,var(--marker) 55%,var(--marker) 92%,transparent 92%);
      padding:0 0.15em;color:var(--ink);font-style:normal;}
    mark.strong,.mark-strong{background:var(--marker);padding:0 0.25em;}`;
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    const root = document.documentElement;
    const pal = PALETTES[t.surface] || PALETTES.Cream;
    Object.keys(pal).forEach((k) => { if (k !== 'navbg') root.style.setProperty(k, pal[k]); });

    const r = RHYTHMS[t.rhythm] || RHYTHMS.Editorial;
    root.style.setProperty('--w-reading', r.measure);

    const el = document.getElementById('tweak-overrides');
    if (el) {
      el.textContent = `
        body,.nav{transition:background-color 220ms ease,color 220ms ease;}
        .nav{background:${pal.navbg};}
        body{font-size:${r.size};line-height:${r.lh};}
        .about-section{padding:${r.pad} 0;}
        .about-section p,.about-section ul,.about-section ul li{font-size:${r.size};line-height:${r.lh};}
        .hero-lede{font-size:${r.lede};}
        ${emphasisCSS(t.emphasis)}
      `;
    }
  }, [t.surface, t.rhythm, t.emphasis]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Surface & ink" />
      <TweakRadio label="Palette" value={t.surface}
                  options={['Cream', 'Cool', 'Mono']}
                  onChange={(v) => setTweak('surface', v)} />
      <TweakSection label="Reading rhythm" />
      <TweakRadio label="Pacing" value={t.rhythm}
                  options={['Compact', 'Editorial', 'Spacious']}
                  onChange={(v) => setTweak('rhythm', v)} />
      <TweakSection label="Emphasis" />
      <TweakRadio label="Highlight" value={t.emphasis}
                  options={['Marker', 'Underline', 'Quiet']}
                  onChange={(v) => setTweak('emphasis', v)} />
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById('tweaks-root')).render(<App />);
