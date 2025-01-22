# ESP32 - Exemple : Contrôle de LEDs et Capteur de Température

**Auteur :** Corentin-k  
**Description :** Ce projet illustre comment utiliser un ESP32 pour :
- Récupérer des données d'un capteur de température et d'humidité DHT11.
- Contrôler un ruban de LEDs RGB (WS2812) via un serveur web intégré.

L'ensemble du code est disponible sur le GitHub de Corentin-k : [Home-Vue](https://github.com/Corentin-k/Home-Vue).


## Objectifs

1. **Découvrir les bases de l'ESP32** :
    - Configuration réseau (Wi-Fi, IP statique).
    - Création d'un serveur web basique.
2. **Manipuler les capteurs et périphériques** :
    - Lecture de données d'un capteur DHT11.
    - Contrôle d'un ruban de LEDs WS2812.
3. **Apprendre à créer des API simples** :
    - Gestion des requêtes HTTP GET.
    - Réponses JSON pour faciliter l'intégration.



## Matériel nécessaire

1. **ESP32** : Microcontrôleur avec support Wi-Fi et Bluetooth.
2. **DHT11** : Capteur de température et d'humidité.
3. **Ruban LED WS2812** : LEDs RGB adressables.
4. **Câblage** :
    - Connectez le DHT11 au pin GPIO4 (ou un autre pin adapté).
    - Connectez les LEDs au pin GPIO2 (ou un pin compatible PWM).
5. **Alimentation :** 5V pour les LEDs et l'ESP32.

---


## Fonctionnalités du projet

1. **Lecture des données du DHT11 :**
    - Récupère la température et l'humidité.
    - Accessible via une route API `/getDHT11Data`.

2. **Contrôle des LEDs :**
    - Change la couleur des LEDs en envoyant les valeurs RGB via `/setColor`.
    - Exemples de requêtes :
        - **Rouge** : `/setColor?r=255&g=0&b=0`
        - **Vert** : `/setColor?r=0&g=255&b=0`
        - **Bleu** : `/setColor?r=0&g=0&b=255`

3. **Page d'accueil :**
    - Accessible via `/`.
    - Indique que le serveur fonctionne.


## Code source

Le code suivant contient toutes les explications nécessaires pour bien comprendre son fonctionnement :

<<< @/Formations/ESP32/esp_led.ino{cpp}

