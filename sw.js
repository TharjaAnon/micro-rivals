const CACHE_NAME = 'micro-rivals-9.5';
const PRECACHE = [
  './index.html', './Urban_Wards_Weapons_9.5.html', './Urban_Wards_Weapons_9.4.html', './manifest.webmanifest',
  './icon-192.png', './icon-512.png', './apple-touch-icon.png'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(names => Promise.all(
    names.filter(name => name.startsWith('micro-rivals-') && name !== CACHE_NAME)
      .map(name => caches.delete(name))
  )).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(cached => cached ||
    fetch(event.request).catch(() => caches.match('./index.html'))
  ));
});
