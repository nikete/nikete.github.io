// Bump this version whenever a cached asset changes.
const CACHE_PREFIX = 'nikete-sax-';
const CACHE_NAME = `${CACHE_PREFIX}v1`;
const SCOPE = new URL(self.registration.scope);
const INDEX_URL = new URL('index.html', SCOPE).href;
const CORE = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-180.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
].map(path => new URL(path, SCOPE).href);

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(CORE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys
        .filter(key => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME)
        .map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  // A controlled page can request other site paths; leave those untouched.
  if (event.request.method !== 'GET' || url.origin !== SCOPE.origin ||
      !url.pathname.startsWith(SCOPE.pathname)) return;

  const resourceURL = new URL(url.pathname, SCOPE).href;
  if (!CORE.includes(resourceURL)) return;

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    if (event.request.mode === 'navigate') {
      // Prefer current HTML online, with the saved trainer available offline.
      try {
        const response = await fetch(event.request);
        if (response.ok) await cache.put(INDEX_URL, response.clone());
        return response;
      } catch (error) {
        const saved = await cache.match(INDEX_URL);
        if (saved) return saved;
        throw error;
      }
    }

    const saved = await cache.match(event.request);
    if (saved) return saved;
    const response = await fetch(event.request);
    if (response.ok && response.type !== 'opaque') {
      await cache.put(event.request, response.clone());
    }
    return response;
  })());
});
