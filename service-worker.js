// Installation du service worker
self.addEventListener('install', (event) => {
    console.log('[SW] Installation');
    self.skipWaiting(); // Active le service worker immédiatement
});

// Activation du service worker
self.addEventListener('activate', (event) => {
    console.log('[SW] Activation');
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            // Supprimez les anciens caches si nécessaire
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== 'dynamic-cache') {
                        console.log('[SW] Suppression de l’ancien cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim(); // Prend immédiatement le contrôle des pages ouvertes
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
