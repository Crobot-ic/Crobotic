// Installation du service worker
self.addEventListener('install', (event) => {
    console.log('[SW] Installation');

    event.waitUntil(
        caches.open('v1').then((cache) => {
            console.log('[SW] Mise en cache des fichiers');
            return cache.addAll([
                '/', // Page d'accueil
                '/Crobotic/index.html', // Page principale
                '/Crobotic/', // Dossier racine
                '/logo-192.png', // Icône de l'application
                '/logo-512.png', // Icône de l'application pour les écrans plus grands
                '/Crobotic/Formation', // Page de formation
                '/Crobotic/Formation/Arduino/arduino.html', // Page Arduino
                '/Crobotic/Formation/ESP32/esp32-intro.html', // Page ESP32
                '/Crobotic/assets' // Dossier des ressources (images, etc.)
            ]);
        }).catch(error => {
            console.error('[SW] Erreur lors de la mise en cache:', error);
        })
    );

    self.skipWaiting(); // Force l'activation immédiate du service worker
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
            return fetch(event.request).then((response) => {
                // Mettre en cache les nouvelles ressources récupérées du réseau
                return caches.open('v1').then((cache) => {
                    cache.put(event.request, response.clone());
                    return response;
                });
            });
        }).catch((error) => {
            console.error('[SW] Erreur lors de la récupération', error);
            // Retourner une réponse par défaut ou une page d'erreur si tout échoue
            return new Response('Erreur de récupération des ressources', {
                status: 404,
                statusText: 'Ressources non disponibles'
            });
        })
    );
});
