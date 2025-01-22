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
                '/Crobotic/Formation',
                '/Crobotic/Formation/Arduino/arduino.html',
                '/Crobotic/Formation/ESP32/esp32-intro.html',

                // Images du dossier Arduino
                '/Crobotic/Formation/Arduino/img/arduino_ide.png',
                '/Crobotic/Formation/Arduino/img/arduino_ide2.png',
                '/Crobotic/Formation/Arduino/img/bouton-schema.png',
                '/Crobotic/Formation/Arduino/img/bouton.png',
                '/Crobotic/Formation/Arduino/img/br.png',
                '/Crobotic/Formation/Arduino/img/Breadboard.png',
                '/Crobotic/Formation/Arduino/img/ex1.png',
                '/Crobotic/Formation/Arduino/img/ex2.png',
                '/Crobotic/Formation/Arduino/img/fond.jpg',
                '/Crobotic/Formation/Arduino/img/fond2.jpg',
                '/Crobotic/Formation/Arduino/img/led.png',
                '/Crobotic/Formation/Arduino/img/logo.png',
                '/Crobotic/Formation/Arduino/img/mega.png',
                '/Crobotic/Formation/Arduino/img/nano.png',
                '/Crobotic/Formation/Arduino/img/pins.png',
                '/Crobotic/Formation/Arduino/img/Potentiometre.png',
                '/Crobotic/Formation/Arduino/img/pwm.jpg',
                '/Crobotic/Formation/Arduino/img/uno.png',
                // Images du dossier ESP32
                '/Crobotic/Formation/ESP32/img/Ap.png',
                '/Crobotic/Formation/ESP32/img/fond-esp.png',
                '/Crobotic/Formation/ESP32/img/img.png',
                '/Crobotic/Formation/ESP32/img/station.png'
            ]);
        }).catch(error => {
            console.error('[SW] Erreur lors de la mise en cache:', error);
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
            return fetch(event.request).then((response) => {
                // Mettre en cache les ressources récupérées du réseau
                return caches.open('v1').then((cache) => {
                    cache.put(event.request, response.clone());
                    return response;
                });
            });
        })
    );
});
