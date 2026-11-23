// Coffee PWA — оновлення без видалення кешів інших сайтів на цьому домені.
const SW_VERSION = 'coffee-app-v20261123-2';

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names
      .filter(name => name.startsWith('coffee-app-') && name !== SW_VERSION)
      .map(name => caches.delete(name)));
    await self.clients.claim();
  })());
});
