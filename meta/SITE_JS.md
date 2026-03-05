# SITE JS — BUGS & FIXES REQUIRED
# Agent: JS fixer
# Site root: /srv/SIPA_V8/04_RUNTIME/MIRRORS/soul-in-psyabstract-site/

## KEY ARCHITECTURE
- core.js: boots everything — lang toggle, rotator, text pages, gallery (if #gallery-grid), NFT (if #nft-list), buy modal
- gallery.js: renders 94 art cards into #gallery, handles buy via window.openBuy() shim
- data.js: window.__DATA__.ART array with 94 items: {code, file, title_ru, title_en, price_usd, nft, sold}
- text-pages.js: tries to load manifest-text, poems-text, songs-html IDs — CONFLICT with core.js

## BUG 1 — hero_phrases.json wrong format
File: /srv/SIPA_V8/04_RUNTIME/MIRRORS/soul-in-psyabstract-site/assets/texts/hero_phrases.json
Current content (object format):
```json
{"en":["In the moment of panic...","I draw chaos...","UV reveals..."],"ru":["В момент паники...","Я рисую хаос...","Под UV..."]}
```
Problem: core.js Rotator does `Array.isArray(data)?data:[]` — objects become empty array, rotator shows nothing.
Fix: Rewrite as ARRAY of objects, each with ru and en keys:
```json
[
  {"ru":"В момент паники она всё равно делает правильное.","en":"In the moment of panic, she still does the right thing."},
  {"ru":"Я рисую хаос, пока он не стал формой.","en":"I draw chaos before it becomes form."},
  {"ru":"Под UV проявляется то, что прячет дневной свет.","en":"UV reveals what daylight hides."},
  {"ru":"Честность важнее идеальности.","en":"Honesty over perfection."},
  {"ru":"Каждая линия — это нерв, а не украшение.","en":"Every line is a nerve, not decoration."},
  {"ru":"Сердце в центре каждой работы — не символ, это адрес.","en":"The heart in every work is not a symbol. It is an address."},
  {"ru":"Хаос — это честность материала.","en":"Chaos is the honesty of the material."},
  {"ru":"Двойная реальность: при свете и в темноте под UV.","en":"Dual reality: daylight and UV glow."}
]
```
Write this to /srv/SIPA_V8/04_RUNTIME/MIRRORS/soul-in-psyabstract-site/assets/texts/hero_phrases.json

## BUG 2 — gallery.js buy uses primitive confirm/prompt/alert
File: /srv/SIPA_V8/04_RUNTIME/MIRRORS/soul-in-psyabstract-site/assets/js/gallery.js line 74-82
Current openBuy uses confirm() → prompt() → alert() which is bad UX.
Fix: Remove the openBuy shim (lines 73-82). Instead use PSA.openBuyModal from core.js:
```javascript
btn.addEventListener('click', (e) => {
  e.preventDefault();
  if (window.PSA && window.PSA.openBuyModal) {
    window.PSA.openBuyModal({id: i, price: price, title: artTitle});
  } else {
    window.open('https://paypal.me/SoulInPsyAbstract/' + price, '_blank');
  }
});
```
Also expose openBuyModal in core.js PSA namespace (see BUG 4).

## BUG 3 — gallery.js no image zoom/lightbox
File: /srv/SIPA_V8/04_RUNTIME/MIRRORS/soul-in-psyabstract-site/assets/js/gallery.js
After rendering img element, add click handler for fullscreen preview:
```javascript
img.style.cursor = 'zoom-in';
img.addEventListener('click', () => {
  const ov = document.createElement('div');
  ov.className = 'img-zoom-overlay';
  ov.innerHTML = `<img src="${img.src}" alt="${img.alt}"><button class="img-zoom-close">×</button>`;
  document.body.appendChild(ov);
  ov.addEventListener('click', () => ov.remove());
});
```
CSS for .img-zoom-overlay is handled by CSS agent.

## BUG 4 — core.js openBuyModal not exposed in PSA namespace
File: /srv/SIPA_V8/04_RUNTIME/MIRRORS/soul-in-psyabstract-site/assets/js/core.js
Current: `openBuyModal` is defined inside IIFE, not accessible from outside.
Fix: After the openBuyModal function definition (around line 320), add:
```javascript
PSA.openBuyModal = openBuyModal;
```
(PSA = window.PSA is already set at top of IIFE)

## BUG 5 — nft.js needed (create new file)
File to create: /srv/SIPA_V8/04_RUNTIME/MIRRORS/soul-in-psyabstract-site/assets/js/nft.js
Purpose: render NFT page artwork previews
Logic:
- Read window.__DATA__.ART
- Filter items where nft field is non-empty string (items with Rarible NFT links)
- Data.js items 1-21 correspond to NFT links in site.config.json nft.links array
- Create grid of art cards: image + title_ru/title_en + "Rarible →" link
- Also show 2 collection links at top: og.rarible.com/soulinpsyabstract and zora.co/@soulinpsyabstract
- Mount point: #nft-list (already in nft.html)
- nft.js replaces core.js buildNFT behavior
Example card structure:
```html
<article class="art nft-card">
  <a href="{nft_link}" target="_blank" rel="noopener">
    <img src="/assets/img/{file}" alt="{title_ru}">
  </a>
  <div class="meta">
    <div class="title">{title_ru}</div>
    <a class="pill" href="{nft_link}" target="_blank" rel="noopener">Rarible →</a>
  </div>
</article>
```

## NFT DATA (from data.js)
Items 1-21 have NFT links — use this mapping (art number → Rarible URL):
1 → https://og.rarible.com/token/0xc9154424b823b10579895ccbe442d41b9abd96ed:...46501
2 → https://og.rarible.com/token/0xc9154424b823b10579895ccbe442d41b9abd96ed:...46499
(etc. — read from window.__DATA__.ART[i].nft OR use site.config.json nft.links)

## IMPORTANT
- Do NOT edit core.js buildGallery() — it targets #gallery-grid which doesn't exist on any page currently (gallery.html uses #gallery for gallery.js). So buildGallery never fires. Fine.
- core.js buildNFT() reads ST.cfg.nft.links from site.config.json — it DOES have links but shows them as plain text. nft.js will override this behavior since it will populate #nft-list directly.
- All files are at /srv/SIPA_V8/04_RUNTIME/MIRRORS/soul-in-psyabstract-site/assets/js/
