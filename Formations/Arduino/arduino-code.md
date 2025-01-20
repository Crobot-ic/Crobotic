# **LE CODE**

Un code Arduino est composé initialement de deux fonctions :

- Une fonction `setup` qui permet d’initialiser les entrées et sorties de chaque Pin utilisé. Vous devez spécifier si une broche sera utilisée en tant qu'entrée (**`INPUT`**) ou en tant que sortie (**`OUTPUT`**).

> Pour un bouton, il faudra le mettre en Input, car on veut récupérer les données lorsque celui-ci sera appuyé
>

> Une led sera donc mise en Output
>

```cpp
void setup ()
{
		pinMode(bouton, INPUT)
}
```

- Et la fonction **`loop`** contient le programme principal qui s'exécute en boucle. C'est ici qu’il faut définir les actions à effectuer en fonction des entrées et des sorties.

Pour interagir avec les entrées et sorties, vous pouvez utiliser les fonctions suivantes :

- **`digitalWrite(nom_Led, état)`**: Pour contrôler une sortie numérique (LED, par exemple). L'état peut être **`HIGH`** (élevé) ou **`LOW`** (bas).
- **`digitalRead(bouton)`**: Pour lire l'état d'une entrée numérique (bouton). La fonction renvoie **`HIGH`** si le bouton est enfoncé et **`LOW`** sinon.

# Terminal pour débogage

En Arduino le terminal s’appelle le Moniteur en Série. Il doit s’initialiser en spécifiant une vitesse de communication : `Serial.begin(9600)`

Pour afficher un texte et une variable, il faudra utiliser `Serial.print("")` ou `Serial.println()`pour ajouter un retour à la ligne.

```cpp
void loop() {
		int val = 10;
		Serial.print("La valeur est : ");
		Serial.println(val);
		delay(1000); 
}
```

[](https://www.tinkercad.com/things/f5BtLsEOKFx)

::: tip

💡 `delay` permet de mettre en pause le programme : 1s =1000

:::