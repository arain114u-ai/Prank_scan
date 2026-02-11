self.addEventListener('install', function(event) {
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  console.log("Service Worker Active");
});

self.addEventListener('fetch', function(event) {
  event.respondWith(fetch(event.request));
});
