// Bump CACHE whenever the game HTML changes.
// Only hangout-* caches are cleaned up so the main game's cache (same origin) is untouched.
const CACHE = 'hangout-mock-1.6';
const ASSETS = [
  './',
  './index.html',
  './Hangout_Mock_1.5.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './cg/sample_normal.jpg',
  './cg/sample_kiss.jpg',
  './cg/sample_intimate.jpg'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith('hangout-') && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).catch(() => caches.match('./index.html'));
    })
  );
});
