// Installation du service worker
self.addEventListener('install', (event) => {
    console.log('[SW] Installation');

    event.waitUntil(
        caches.open('v1').then((cache) => {
            console.log('[SW] Mise en cache des fichiers');
            return cache.addAll([
                '/',
                '/Crobotic/index.html',
                '/Crobotic/',
                '/logo-192.png',
                '/logo-512.png',
            ]);
        })
    );
});

// Activation du service worker
self.addEventListener('activate', (event) => {
    console.log('[SW] Activation');
    event.waitUntil(self.clients.claim());
});

// Gestion des requêtes réseau
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                console.log('[SW] Réponse en cache', event.request);
                return cachedResponse;
            }
            console.log('[SW] Requête réseau', event.request);
            return fetch(event.request);
        })
    );
});
