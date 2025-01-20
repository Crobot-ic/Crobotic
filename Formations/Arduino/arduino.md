![fond2.jpg](img/fond2.jpg)

# Introduction à Arduino

### Histoire :

Arduino est une carte électronique issue d'un projet visant à réduire les coûts des projets d'école, celle de Design d'Interaction à Ivrea, en Italie. L'équipe a conçu cette carte et en a fait un projet open source, permettant ainsi à de nombreux passionnés d'électronique et de programmation de créer facilement des projets innovants et de partager leurs réalisations.

::: tip

💡 Le nom Arduino trouve son origine dans le nom du bar dans lequel l’équipe avait l'habitude de se retrouver. Arduino est aussi le nom d'un roi italien, personnage historique de la ville « Arduin d’Ivrée ». (https://fr.flossmanuals.net/arduino/historique-du-projet-arduino/)

:::

## TinkerCard pour une version en ligne

![Tinkercad](https://www.tinkercad.com/assets_fe_n42rjo/js/tinkercad-frontend/browser/assets/images/tinkercad-lockup-white.svg)

[Tinkercad | From mind to design in minutes](https://www.tinkercad.com/)

## Arduino IDE 2.2.1

![Arduino IDE](https://docs.arduino.cc/static/e534053def4bc0eb97a3b6ba9cf31853/4ef49/ide-2-overview.png)

[Software](https://www.arduino.cc/en/software)

- Pour Compiler un code sur Arduino IDE :

  Dans Tools puis dans Board, sélectionnez le nom de votre carte Arduino facilement trouvable sur votre carte.

  Et Sélectionner le port de la carte normalement automatiquement détecté.

  ![Untitled](./img/arduino_ide.png)

  Le premier bouton check permet de vérifier l’ensemble de votre code s'il est bon du point de vue syntaxique.

  Et le second bouton permet de transférer le code sur votre carte Arduino.

  Vous pouvez également télécharger des bibliothèques avec la barre de menu verticale à droite :

  ![Untitled](./img/arduino_ide2.png)

  ::: tip

    💡 Dans file/exemple, Arduino met à disposition les codes exemples de nombreux composants.

  :::

# Types de carte

Celle de base : **UNO**

![Untitled](./img/uno.png)

Avec plus de PIN : **MEGA**

![Untitled](./img/mega.png)

Ou plus petit : **NANO**

![Untitled](./img/nano.png)

http://blewando.fr/elv/Promo2018/th14/pag6.html

## Les PINS 

![https://arduino.blaisepascal.fr/presentation/materiel/materiel-arduino/](./img/pins.png)

https://arduino.blaisepascal.fr/presentation/materiel/materiel-arduino/

Il y a deux types d’entrée sur une carte Arduino

- Il y a les **entrées numériques**, qui détectent tout signal électrique ”Allumer ou éteint” renvoyé par un capteur, comme un bouton.
    - Les ports PWM (notés~) permettent de faire varier la tension en jouant sur la fréquence, c'est-à-dire avoir une tension moyenne. Ces ports pourront être utilisés pour faire varier l tensions d’un moteur ou l’intensité d’une led.

  !https://passionelectronique.fr/wp-content/uploads/signal-pwm-arduino-rapport-cyclique-variable.jpg

- Et les **entrées analogiques** qui sont capables de lire la valeur d'une tension renvoyée par des capteurs tels que les potentiomètres, les capteurs d'humidité ou de température.
- Entrée RX et TX

## Autre Elements

| Image                                                               | Description   |
|---------------------------------------------------------------------|---------------|
| <img src="./img/Breadboard.png" width="200" alt="Breadboard">       | Breadboard    |
| <img src="./img/Potentiometre.png" width="200" alt="Potentiomètre"> | Potentiomètre |
| <img src="./img/led.png" width="200" alt="LED">                     | LED           |
| <img src="./img/bouton.png" width="200" alt="Bouton">               | Bouton        |


::: danger

⚠️ Le courant électrique dans une LED ne circule que dans un seul sens : de l'anode vers la cathode. L’anode étant la plus grande branche



Schéma interne d’un bouton :

![https://arduino.blaisepascal.fr/le-bouton-poussoir/](./img/bouton-schema.png)

https://arduino.blaisepascal.fr/le-bouton-poussoir/

Schéma interne d’une breadboard :

![https://arduino.blaisepascal.fr/le-bouton-poussoir/](./img/br.png)

http://www.lafabriquediy.com/tutoriel/breadboard-ou-plaque-a-bidouille-1-89/

:::