# Exemple 3 : Entrée analogique + Ports PWM

Dans cet exercice, nous verrons comment faire varier l'intensité d'une LED RVB (ou RGB) à l'aide de trois potentiomètres.

Pour cet exercice, nous allons utiliser la fonction map() qui prend en argument : **map(value, fromLow, fromHigh, toLow, toHigh)**

Les paramètres de la fonction map sont les suivants :

- value : le numéro à cartographier.
- fromLow : la limite inférieure de la plage de valeurs actuelle.
- fromHigh : la limite supérieure de la plage de valeurs actuelle.
- toLow : la limite inférieure de la plage cible.
- toHigh : la limite supérieure de la plage cible

Comme nous l'avons vu précédemment, le potentiomètre reçoit une valeur comprise entre 0 et 1023, tandis qu'une LED peut afficher des couleurs sur une plage de 255. Nous devons donc mapper la valeur du potentiomètre pour la faire correspondre à une valeur de la LED.

```cpp
int ledR = 11; // Mettre sur un port pwm les broches de la led RVB
int ledV= 10;
int ledB= 9;

int potentioR;
int potentioV;
int potentioB;

void setup()
{
  pinMode(11, OUTPUT);
  pinMode(10, OUTPUT);
  pinMode(9, OUTPUT);
}

void loop()
{
  potentiR = map(analogRead(A0), 0, 1023, 0, 255);
  potentioV = map(analogRead(A1), 0, 1023, 0, 255);
  potentioG = map(analogRead(A2), 0, 1023, 0, 255);
  
  analogWrite(ledR , potenR);
  analogWrite(ledV , potenB);
  analogWrite(ledB , potenG);
  
  delay(50);
}
```

# Exercice

Maintenant, vous pouvez créer le jeu Simon :

Le jeu consiste à afficher une séquence lumineuse, et le joueur doit se souvenir de la séquence. Plus on avance dans le jeu plus le nombre de couleurs à retenir augmente. Pour cela, vous aurez besoin d'au moins 4 LEDs (ou plus, en fonction de la difficulté), d'un nombre correspondant de boutons pour que le joueur puisse valider ses choix, ainsi que d'un autre bouton pour démarrer le jeu ou le relancer.

Pour la correction ou pour de l’aide, vous pouvez demander sur le serveur discord de l’association Crobotic → https://discord.gg/xVffABKj