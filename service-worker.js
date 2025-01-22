// Liste des fichiers essentiels à pré-cacher
const PRECACHE_FILES = [
    '/',
    '/Crobotic/',
    '/Crobotic/Formations/ESP32/esp32-intro.html',
    '/Crobotic/index.html',
    '/Crobotic/assets/app.js',
    '/Crobotic/assets/style.css',
    '/logo-192.png',
    '/logo-512.png',
];

// Installation du service worker
self.addEventListener('install', (event) => {
    console.log('[SW] Installation');
    event.waitUntil(
        caches.open('static-cache').then((cache) => {
            console.log('[SW] Pré-caching des fichiers essentiels');
            return cache.addAll(PRECACHE_FILES);
        })
    );
    self.skipWaiting(); // Active immédiatement le service worker
});

// Activation du service worker
self.addEventListener('activate', (event) => {
    console.log('[SW] Activation');
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            // Supprime les anciens caches si nécessaire
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== 'static-cache' && cacheName !== 'dynamic-cache') {
                        console.log('[SW] Suppression de l’ancien cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

// Gestion des requêtes réseau avec cache dynamique
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                console.log('[SW] Réponse en cache:', event.request.url);
                return cachedResponse;
            }

            console.log('[SW] Récupération réseau et mise en cache:', event.request.url);
            return fetch(event.request)
                .then((response) => {
                    // Vérifiez que la réponse est valide avant de la mettre en cache
                    if (
                        !response ||
                        response.status !== 200 ||
                        response.type !== 'basic'
                    ) {
                        return response;
                    }

                    return caches.open('dynamic-cache').then((cache) => {
                        cache.put(event.request, response.clone());
                        return response;
                    });
                })
                .catch((error) => {
                    console.error('[SW] Erreur lors de la récupération:', error);
                    return new Response(
                        'Ressource non disponible hors ligne.',
                        { status: 404 }
                    );
                });
        })
    );
});
