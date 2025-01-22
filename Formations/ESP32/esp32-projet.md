# Station météo

![Station météo](https://github.com/lmarzen/esp32-weather-epd/blob/main/showcase/demo-london.jpg?raw=true)

## Objectif

Réalisation d'une station météo à l'aide d'un esp32 et d'un écran e-papier. 
La station météo s'appuiera sur les données d'un capteur BME280 pour afficher la température, l'humidité et la pression atmosphérique.
Mais aussi sur l'API, OpenWeatherMap pour afficher la météo actuelle et les prévisions à 5 jours.

## Source

https://github.com/lmarzen/esp32-weather-epd?tab=readme-ov-file#hardware


## Matériels

| **Composant**                     | **Prix** | **Lien**                                                                                            |
|-----------------------------------|----------|-----------------------------------------------------------------------------------------------------|
| 7.5inch (800×480) E-Paper Display | 50 €     | [Lien](https://fr.aliexpress.com/item/1005002870223620.html?gatewayAdapt=glo2fra4itemAdapt) |
| DESPI-C02 Adapter Board           | 10 €     | [Lien](https://www.aliexpress.us/item/1005004633084221.html?gatewayAdapt=4itemAdapt)       |
| FireBeetle 2 ESP32                | 10 €     | [Lien](https://www.dfrobot.com/product-2195.html)                                            |
| BME280                            | 1 €      | -                                                                                                   |
| 3.7V LiPo Battery 5000mAh         | 10 €     | -                                                                                                   |
| **Total**                         | **90 €** |                                                                                                     |

https://www.waveshare.com/product/7.5inch-e-paper-hat.htm

## Avantages des écrans E-Paper

- **Faible consommation d'énergie** : Les écrans E-Paper consomment de l'énergie uniquement lors des rafraîchissements.
- **Mémoire non volatile** : Les images restent affichées même sans alimentation.


## Configuration, Compilation et Téléversement

1. **Installer PlatformIO** :
    - Installez Visual Studio Code.
    - Ajoutez l'extension PlatformIO.
2. **Cloner le dépôt** :
    - Clonez ou téléchargez le dépôt de ce projet.
3. **Configurer le projet** :
    - Modifiez `config.cpp` et `config.h` pour renseigner les identifiants Wi-Fi, la clé API OpenWeatherMap, et les réglages spécifiques au matériel.
4. **Téléverser le code** :
    - Connectez l'ESP32 via USB.
    - Compilez et téléversez le code en utilisant PlatformIO.


## Clé API OpenWeatherMap

1. **Inscription** :
    - Créez un compte gratuit sur [OpenWeatherMap](https://openweathermap.org/api).
2. **Accès à l'API** :
    - Souscrivez au plan "One Call by Call" pour accéder aux API nécessaires.
3. **Conseils d'utilisation** :
    - Limitez les appels API pour éviter de dépasser le quota gratuit.