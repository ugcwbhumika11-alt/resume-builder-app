const CACHE_NAME = 'my-app-v1';

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
    return cache.addAll([
  '/resume-builder-app/',
  '/resume-builder-app/index.html',
  '/resume-builder-app/manifest.json',
  '/resume-builder-app/sw.js'
]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
