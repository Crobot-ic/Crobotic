// Version du cache
const CACHE_NAME = 'static-cache-v4';
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
        caches.open(CACHE_NAME).then(async (cache) => {
            console.log('[SW] Pré-caching des fichiers essentiels');
            for (const file of PRECACHE_FILES) {
                try {
                    await cache.add(file);
                } catch (error) {
                    console.error('[SW] Erreur lors du précaching de:', file, error);
                }
            }
        })
    );
    self.skipWaiting(); // Force l'installation immédiate
});



// Activation du service worker
self.addEventListener('activate', (event) => {
    console.log('[SW] Activation');
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('[SW] Suppression de l’ancien cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );

    self.clients.claim().then(() => {
        self.clients.matchAll({ type: 'window' }).then((clients) => {
            clients.forEach((client) => {
                client.navigate(client.url);
            });
        });
    });
});


// Gestion des requêtes réseau avec cache dynamique
self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);

    // Ignorer les requêtes avec un schéma non supporté
    if (!url.protocol.startsWith('http')) {
        console.log('[SW] Requête ignorée (schéma non supporté):', url.href);
        return;
    }

    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                console.log('[SW] Réponse en cache:', event.request.url);
                return cachedResponse;
            }

            console.log('[SW] Récupération réseau et mise en cache:', event.request.url);
            return fetch(event.request)
                .then((response) => {
                    if (
                        !response ||
                        response.status !== 200 ||
                        response.type !== 'basic'
                    ) {
                        return response;
                    }

                    return caches.open(CACHE_NAME).then((cache) => {
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

self.addEventListener('activate', (event) => {
    console.log('[SW] Activation');
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('[SW] Suppression de l’ancien cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );

    // Forcer les clients à utiliser la nouvelle version
    event.waitUntil(
        self.clients.claim().then(() => {
            self.clients.matchAll({ type: 'window' }).then((clients) => {
                clients.forEach((client) => {
                    client.navigate(client.url);
                });
            });
        })
    );
});
