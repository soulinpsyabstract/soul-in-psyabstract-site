// Service Worker — Soul In PsyAbstract
const CACHE = 'sipa-v6';
const PRECACHE = [
  '/','/index.html','/gallery.html','/nft.html','/manifest.html',
  '/poems.html','/songs.html','/faq.html','/contacts.html','/ai.html',
  '/soulwish.html','/store.html','/token.html',
  '/assets/css/main.css?v=6',
  '/assets/js/core.js','/assets/js/data.js','/assets/js/gallery.js',
  '/assets/js/buy-modal.js','/assets/js/pay-config.js','/assets/js/pwa.js',
  '/manifest.webmanifest'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(PRECACHE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(
    ks.filter(k => k !== CACHE).map(k => caches.delete(k))
  )).then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request).then(r => {
      const clone = r.clone();
      caches.open(CACHE).then(c => c.put(e.request, clone));
      return r;
    }).catch(() => caches.match(e.request))
  );
});
