import{_ as t,c as a,ag as r,o}from"./chunks/framework.LfFz_NPV.js";const u=JSON.parse('{"title":"Station météo","description":"","frontmatter":{"0":"N","1":"e","2":" ","3":"f","4":"o","5":"n","6":"c","7":"t","8":"i","9":"o","10":"n","11":"n","12":"e","13":" ","14":"p","15":"a","16":"s","17":" ","18":"s","19":"u","20":"r","21":" ","22":"l","23":"a","24":" ","25":"5","26":"g","27":" ","28":"e","29":"t","30":" ","31":"n","32":"e","33":"c","34":"e","35":"s","36":"s","37":"i","38":"t","39":"y","40":" ","41":"u","42":"n","43":"e","44":" ","45":"c","46":"o","47":"n","48":"n","49":"e","50":"x","51":"i","52":"o","53":"n","54":" ","55":"2","56":".","57":"1","58":"g","59":"h","60":"z"},"headers":[],"relativePath":"Formations/ESP32/esp32-projet.md","filePath":"Formations/ESP32/esp32-projet.md"}'),i={name:"Formations/ESP32/esp32-projet.md"};function l(n,e,s,d,p,h){return o(),a("div",null,e[0]||(e[0]=[r('<h1 id="station-meteo" tabindex="-1">Station météo <a class="header-anchor" href="#station-meteo" aria-label="Permalink to &quot;Station météo&quot;">​</a></h1><p><img src="https://github.com/lmarzen/esp32-weather-epd/blob/main/showcase/demo-london.jpg?raw=true" alt="Station météo"></p><h2 id="objectif" tabindex="-1">Objectif <a class="header-anchor" href="#objectif" aria-label="Permalink to &quot;Objectif&quot;">​</a></h2><p>Réalisation d&#39;une station météo à l&#39;aide d&#39;un esp32 et d&#39;un écran e-papier. La station météo s&#39;appuiera sur les données d&#39;un capteur BME280 pour afficher la température, l&#39;humidité et la pression atmosphérique. Mais aussi sur l&#39;API, OpenWeatherMap pour afficher la météo actuelle et les prévisions à 5 jours.</p><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p><a href="https://github.com/lmarzen/esp32-weather-epd?tab=readme-ov-file#hardware" target="_blank" rel="noreferrer">https://github.com/lmarzen/esp32-weather-epd?tab=readme-ov-file#hardware</a></p><h2 id="materiels" tabindex="-1">Matériels <a class="header-anchor" href="#materiels" aria-label="Permalink to &quot;Matériels&quot;">​</a></h2><table tabindex="0"><thead><tr><th><strong>Composant</strong></th><th><strong>Prix</strong></th><th><strong>Lien</strong></th></tr></thead><tbody><tr><td>7.5inch (800×480) E-Paper Display</td><td>50 €</td><td><a href="https://fr.aliexpress.com/item/1005002870223620.html?gatewayAdapt=glo2fra4itemAdapt" target="_blank" rel="noreferrer">Lien</a></td></tr><tr><td>DESPI-C02 Adapter Board</td><td>10 €</td><td><a href="https://www.aliexpress.us/item/1005004633084221.html?gatewayAdapt=4itemAdapt" target="_blank" rel="noreferrer">Lien</a></td></tr><tr><td>FireBeetle 2 ESP32</td><td>10 €</td><td><a href="https://www.dfrobot.com/product-2195.html" target="_blank" rel="noreferrer">Lien</a></td></tr><tr><td>BME280</td><td>1 €</td><td>-</td></tr><tr><td>3.7V LiPo Battery 5000mAh</td><td>10 €</td><td>-</td></tr><tr><td><strong>Total</strong></td><td><strong>90 €</strong></td><td></td></tr></tbody></table><p><a href="https://www.waveshare.com/product/7.5inch-e-paper-hat.htm" target="_blank" rel="noreferrer">https://www.waveshare.com/product/7.5inch-e-paper-hat.htm</a></p><h2 id="avantages-des-ecrans-e-paper" tabindex="-1">Avantages des écrans E-Paper <a class="header-anchor" href="#avantages-des-ecrans-e-paper" aria-label="Permalink to &quot;Avantages des écrans E-Paper&quot;">​</a></h2><ul><li><strong>Faible consommation d&#39;énergie</strong> : Les écrans E-Paper consomment de l&#39;énergie uniquement lors des rafraîchissements.</li><li><strong>Mémoire non volatile</strong> : Les images restent affichées même sans alimentation.</li></ul><h2 id="configuration-compilation-et-televersement" tabindex="-1">Configuration, Compilation et Téléversement <a class="header-anchor" href="#configuration-compilation-et-televersement" aria-label="Permalink to &quot;Configuration, Compilation et Téléversement&quot;">​</a></h2><ol><li><strong>Installer PlatformIO</strong> : <ul><li>Installez Visual Studio Code.</li><li>Ajoutez l&#39;extension PlatformIO.</li></ul></li><li><strong>Cloner le dépôt</strong> : <ul><li>Clonez ou téléchargez le dépôt de ce projet.</li></ul></li><li><strong>Configurer le projet</strong> : <ul><li>Modifiez <code>config.cpp</code> et <code>config.h</code> pour renseigner les identifiants Wi-Fi, la clé API OpenWeatherMap, et les réglages spécifiques au matériel.</li></ul></li><li><strong>Téléverser le code</strong> : <ul><li>Connectez l&#39;ESP32 via USB.</li><li>Compilez et téléversez le code en utilisant PlatformIO.</li></ul></li></ol><h2 id="cle-api-openweathermap" tabindex="-1">Clé API OpenWeatherMap <a class="header-anchor" href="#cle-api-openweathermap" aria-label="Permalink to &quot;Clé API OpenWeatherMap&quot;">​</a></h2><ol><li><strong>Inscription</strong> : <ul><li>Créez un compte gratuit sur <a href="https://openweathermap.org/api" target="_blank" rel="noreferrer">OpenWeatherMap</a>.</li></ul></li><li><strong>Accès à l&#39;API</strong> : <ul><li>Souscrivez au plan &quot;One Call by Call&quot; pour accéder aux API nécessaires.</li></ul></li><li><strong>Conseils d&#39;utilisation</strong> : <ul><li>Limitez les appels API pour éviter de dépasser le quota gratuit.</li></ul></li></ol>',15)]))}const m=t(i,[["render",l]]);export{u as __pageData,m as default};
