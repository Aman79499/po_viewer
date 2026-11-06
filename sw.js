// Minimal service worker: makes the app installable. Data always comes live from Apps Script.
self.addEventListener('install', function (e) { self.skipWaiting(); });
self.addEventListener('activate', function (e) { self.clients.claim(); });
self.addEventListener('fetch', function () {});
