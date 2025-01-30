# ESPHome : Simplifiez vos projets IoT

> "**ESPHome** est un système permettant de contrôler vos microcontrôleurs à l'aide de fichiers de configuration simples mais puissants. Il s'intègre parfaitement avec des systèmes domotiques comme Home Assistant."

📚 [Site officiel d'ESPHome](https://esphome.io/)

ESPHome est un projet open-source racheté par Home Assistant en 2019. Il permet de configurer et de contrôler des microcontrôleurs comme l'ESP32 ou l'ESP8266 sans avoir à écrire de code. Vous pouvez ainsi créer des capteurs, actionneurs, affichages et bien plus encore pour vos projets IoT.

## Pourquoi utiliser ESPHome ?

ESPHome facilite le développement et le déploiement de projets IoT en offrant :
- **Une configuration simplifiée** : pas besoin de coder, tout se fait via un fichier YAML.
- **Une intégration native avec Home Assistant**.
- **Des fonctionnalités avancées** comme les capteurs, actionneurs, affichages et plus encore.

### Fonctionnement d'ESPHome

1. **Configuration** : Vous décrivez le comportement de votre appareil dans un fichier YAML.
2. **Compilation** : ESPHome transforme ce fichier en un firmware.
3. **Téléversement** : Le firmware est chargé sur votre microcontrôleur.
4. **Contrôle** : L'appareil est prêt à être intégré dans votre système domotique.



## Installation d'ESPHome



### Étapes d'installation

1. **Installer ESPHome** :
   ```bash
   pip install esphome
   ```

2. **Créer un projet** :
   ```bash
   esphome wizard mon_appareil.yaml
   ```

3. **Compiler et téléverser le firmware** :
   ```bash
   esphome run mon_appareil.yaml
   ```

4. **Connexion à votre réseau Wi-Fi** : Pendant le téléversement, ESPHome vous demande vos informations Wi-Fi.



## Exemple de Configuration YAML

Voici un exemple simple pour un capteur de température et d'humidité avec un DHT22 :

```yaml
esphome:
  name: esp32_dht11
  platform: ESP32
  board: esp32dev

# Configuration Wi-Fi
wifi:
  ssid: "Votre_SSID"
  password: "Votre_MotDePasse"

  # Reconnexion automatique en cas de perte de connexion
  ap:
    ssid: "ESP32_DHT11_Fallback"
    password: "mot_de_passe_fallback"

# API pour Home Assistant
api:



# Configuration du capteur DHT11
sensor:
  - platform: dht
    pin: GPIO4  # Pin où le DHT11 est connecté (ici GPIO4)
    model: DHT11
    temperature:
      name: "Température ESP32"
      unit_of_measurement: "°C"
    humidity:
      name: "Humidité ESP32"
      unit_of_measurement: "%"
    update_interval: 10s  # Mise à jour toutes les 10 secondes

```

### Résultat attendu
- **Température Salon** et **Humidité Salon** seront visibles dans votre interface domotique.



## Intégration avec Home Assistant

Une fois votre appareil configuré et téléversé :
1. Ouvrez Home Assistant.
2. Allez dans **Paramètres > Appareils > Découverte**.
3. Votre appareil ESPHome devrait apparaître automatiquement !



## Ressources utiles

- 📖 **Documentation officielle** : [ESPHome.io](https://esphome.io/)
- 💬 **Communauté** : [Forum Home Assistant](https://community.home-assistant.io/)

