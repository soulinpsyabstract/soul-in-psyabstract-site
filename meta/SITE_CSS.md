# SITE CSS — ADDITIONS REQUIRED
# Agent: CSS fixer
# File to edit: /srv/SIPA_V8/04_RUNTIME/MIRRORS/soul-in-psyabstract-site/assets/css/main.css

## ADD THESE CSS BLOCKS (append to end of main.css)

### 1. Image zoom overlay (lightbox)
```css
/* ── image zoom overlay ──────────────────────────────────── */
.img-zoom-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.92);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  cursor: zoom-out;
  padding: 20px;
}
.img-zoom-overlay img {
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 0 40px rgba(0,0,0,.8);
}
.img-zoom-close {
  position: fixed;
  top: 16px;
  right: 20px;
  background: rgba(255,255,255,.1);
  border: none;
  color: #fff;
  font-size: 28px;
  cursor: pointer;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.img-zoom-close:hover { background: rgba(255,255,255,.2); }
.art img { cursor: zoom-in; }
```

### 2. NFT cards grid
```css
/* ── nft page ────────────────────────────────────────────── */
.nft-card img { width:100%; display:block; aspect-ratio:4/5; object-fit:cover; }
.nft-links-row { display:flex; gap:14px; flex-wrap:wrap; margin-bottom:20px; }
.nft-count { color:var(--muted); font-size:14px; margin-bottom:12px; }
```

### 3. Audio player styles (songs page)
```css
/* ── audio player ────────────────────────────────────────── */
.track-item {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 14px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: rgba(255,255,255,.02);
  margin-bottom: 10px;
}
.track-title {
  font-weight: 700;
  font-size: 15px;
  color: var(--ink);
}
.track-item audio {
  width: 100%;
  height: 36px;
  accent-color: var(--aqua);
}
/* songs-root list styling */
#songs-root p {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 14px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: rgba(255,255,255,.02);
  margin-bottom: 10px;
}
#songs-root p b {
  font-size: 15px;
  color: var(--aqua);
}
#songs-root audio {
  width: 100%;
  accent-color: var(--aqua);
}
```

### 4. Contacts page cards
```css
/* ── contacts page ───────────────────────────────────────── */
.contact-links { display: flex; flex-direction: column; gap: 10px; margin-top: 14px; }
.contact-link {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: rgba(255,255,255,.02);
  color: var(--ink);
  text-decoration: none;
  transition: background .15s;
}
.contact-link:hover { background: rgba(127,243,231,.08); color: var(--aqua); text-decoration: none; }
.contact-link .label { font-weight: 700; min-width: 110px; }
.contact-link .value { color: var(--muted); font-size: 14px; }
.eth-row {
  display: flex; align-items: center; gap: 10px; flex-wrap: wrap;
  padding: 12px 16px; border: 1px solid var(--line); border-radius: 14px;
  background: rgba(255,255,255,.02); font-family: ui-monospace, monospace; font-size: 13px;
}
.eth-row .label { color: var(--aqua); font-weight: 700; }
.eth-row .addr { color: var(--muted); word-break: break-all; }
```

### 5. lang toggle — section show/hide
```css
/* ── lang sections ───────────────────────────────────────── */
[data-lang] { display: none; }
[data-lang].show { display: block; }
```

### 6. Art title in gallery cards
```css
/* ── art title ───────────────────────────────────────────── */
.art-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--ink);
  margin: 2px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.muted { color: var(--muted); font-size: 12px; }
```

### 7. hero-card rotator animation
```css
/* ── hero rotator ────────────────────────────────────────── */
.hero-card { animation: fadeSlide .4s ease; }
@keyframes fadeSlide {
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
}
.hero-card__row { display:flex; align-items:center; gap:8px; }
.hero-card__bullet {
  width:6px; height:6px; border-radius:50%;
  background:var(--aqua); flex-shrink:0;
  box-shadow: 0 0 8px var(--aqua);
}
.hero-card__text { color:var(--muted); font-size:14px; line-height:1.5; }
```

## CURRENT STATE
main.css already has: badge, buybar, btn.primary, modal, toast, responsive grid, art card styles
Append ONLY the missing blocks above. Do not modify existing styles.
File: /srv/SIPA_V8/04_RUNTIME/MIRRORS/soul-in-psyabstract-site/assets/css/main.css
