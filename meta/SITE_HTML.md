# SITE HTML — BUGS & FIXES REQUIRED
# Agent: HTML fixer
# Site root: /srv/SIPA_V8/04_RUNTIME/MIRRORS/soul-in-psyabstract-site/

## BUGS TO FIX

### BUG 1 — manifest.html wrong ID
File: manifest.html line 45
Current: `<pre class="txt" id="text-article"></pre>`
Fix: `<pre class="txt" id="manifest-article"></pre>`
Why: core.js renderTextPage() looks for #manifest-article, not #text-article

### BUG 2 — poems.html wrong ID
File: poems.html line 45
Current: `<pre class="txt" id="text-article"></pre>`
Fix: `<pre class="txt" id="poems-article"></pre>`
Why: core.js renderTextPage() looks for #poems-article

### BUG 3 — contacts.html no content renderer
File: contacts.html
Current: `<div id="contacts-root"></div>` + loads core.js + data.js (no contacts script)
Fix: Add a <script> block AFTER core.js that renders contacts from this hardcoded data:
```
email: soulinpsyabstract@gmail.com
instagram: https://www.instagram.com/soul.in.psyabstract
telegram: https://t.me/messycketch
tiktok: https://www.tiktok.com/@soul.in.psyabstract
threads: https://www.threads.net/@soul.in.psyabstract
rarible: https://og.rarible.com/soulinpsyabstract
zora: https://zora.co/@soulinpsyabstract
whatsapp: https://wa.me/972525074743
paypal_me: https://paypal.me/SoulInPsyAbstract?locale.x=en_US
eth: 0x2a7fFb7B3174fcA16CD2476a55E39f9Ea2d04073
```
Render as pill links list inside #contacts-root. Use CSS class .pill for links.
Also render ETH address with copy button.

### BUG 4 — nft.html no artwork previews
File: nft.html
Current: loads core.js + data.js — buildNFT() only shows text links
Fix: Add script src="assets/js/nft.js" AFTER data.js
nft.js should: read window.__DATA__.ART, find items with nft field not empty (items 1-21 have nft links from data.js), show artwork image grid where each card = img + title + "View on Rarible" button
Also show: header section with links to https://og.rarible.com/soulinpsyabstract and https://zora.co/@soulinpsyabstract

### BUG 5 — all pages lang="en" should be lang="ru"
Files: gallery.html, manifest.html, poems.html, songs.html, nft.html, contacts.html, faq.html, ai.html
All have `<html lang="en">` — fix to `<html lang="ru">`

### BUG 6 — all pages have wrong tagline
Current tag text: "SIPA · pages connected · no 404 drama"
Fix to: "Marina · hearts · spirals · UV neon · abstract line art"

### BUG 7 — gallery.html missing count in header
Current: `<h2>Gallery</h2>` with empty section above grid
Fix: Change the h2 section to:
```html
<section class="card">
  <h2 data-i18n-ru="Галерея" data-i18n-en="Gallery">Галерея</h2>
  <div class="small">94 работы · оригиналы · от $400</div>
</section>
```

## FILE PATHS
- manifest.html: /srv/SIPA_V8/04_RUNTIME/MIRRORS/soul-in-psyabstract-site/manifest.html
- poems.html: /srv/SIPA_V8/04_RUNTIME/MIRRORS/soul-in-psyabstract-site/poems.html
- contacts.html: /srv/SIPA_V8/04_RUNTIME/MIRRORS/soul-in-psyabstract-site/contacts.html
- nft.html: /srv/SIPA_V8/04_RUNTIME/MIRRORS/soul-in-psyabstract-site/nft.html
- gallery.html: /srv/SIPA_V8/04_RUNTIME/MIRRORS/soul-in-psyabstract-site/gallery.html

## DO NOT TOUCH
- index.html (was just rebuilt)
- assets/js/ files (separate agent)
- assets/css/ files (separate agent)
