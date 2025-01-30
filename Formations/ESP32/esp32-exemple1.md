# Exemple 1

Dans cet exercice, nous allons contrôler un servo moteur à l'aide d'une page web. 
L'ESP32 agira comme un point d'accès WiFi et servira une page web pour contrôler le servo moteur.

Utilisation de la bibliothèque `ESP32Servo` pour contrôler le servo moteur :
- `Servo monServo` : Définition du servo.
- `monServo.attach(servoPin)` : Initialisation du servo sur le pin `servoPin`.
- `monServo.write(position)` : Positionne le servo à l'angle `position`.

Création d'une page web avec l'esp32:

- Configuration du point d'accès WiFi :
    - `WiFi.softAPConfig(local_IP, gateway, subnet)` : Configuration de l'adresse IP statique.
    - `WiFi.softAP(ssid, password)` : Création du point d'accès.
- Création du serveur web :
    - `WiFiServer server(80)` : Création du serveur web sur le port 80.
    - `server.begin()` : Démarrage du serveur web.
    - `WiFiClient client = server.available()` : Attente d'une connexion client.
    - `client.println()` : Envoi de données au client.
    - `client.stop()` : Déconnexion du client.
    - `client.read()` : Lecture des données du client.
    - `client.available()` : Vérifie si des données sont disponibles.
    - `client.connected()` : Vérifie si le client est connecté.
- Creation de la page web:
    - `client.println("HTTP/1.1 200 OK")` : En-tête de la réponse HTTP.
    - `client.println("Content-type:text/html")` : Type de contenu HTML.
    - `client.println("<!DOCTYPE html><html>")` : Début de la page HTML.
    - `client.println("<head><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">")` : Balise head.
    - `client.println(" ")` : Pour ajout des balises HTML.
    - `client.println("</html>")` : Fin de la page HTML.


```cpp
#include <WiFi.h>
#include <ESP32Servo.h>

// Définition du servo
Servo monServo;
const int servoPin = 13;

// Configuration WiFi
const char *ssid = "NomDuRéseau";
const char *password = "MotDePasse";
IPAddress local_IP(192, 168, 1, 1);
IPAddress gateway(192, 168, 1, 1);
IPAddress subnet(255, 255, 255, 0);

WiFiServer server(80);
String header;
unsigned long currentTime;
unsigned long previousTime;
const long timeoutTime = 2000;

int position = 90;  // Position initiale du servo
const int step = 5; // Pas d'augmentation/diminution

void setup() {
Serial.begin(115200);

monServo.attach(servoPin);
monServo.write(position);

WiFi.softAPConfig(local_IP, gateway, subnet);
WiFi.softAP(ssid, password);
server.begin();

Serial.println("Point d'accès créé !");
Serial.print("Adresse IP : ");
Serial.println(WiFi.softAPIP());
}

void loop() {
WiFiClient client = server.available();

if (client) {
currentTime = millis();
previousTime = currentTime;
Serial.println("Nouveau client connecté.");

    String currentLine = ""; 
    while (client.connected() && currentTime - previousTime <= timeoutTime) {
      currentTime = millis();
      if (client.available()) { 
        char c = client.read(); 
        Serial.write(c);
        header += c;
        if (c == '\n') {
          if (currentLine.length() == 0) {

            // Gestion des requêtes pour changer l'angle du servo
            if (header.indexOf("GET /servo/plus") >= 0) {
                position = min(position + step, 180);
            } else if (header.indexOf("GET /servo/moins") >= 0) {
                position = max(position - step, 0);
            } else if (header.indexOf("GET /servo/0") >= 0) {
                position = 0;
            } else if (header.indexOf("GET /servo/90") >= 0) {
                position = 90;
            } else if (header.indexOf("GET /servo/180") >= 0) {
                position = 180;
            }

            monServo.write(position);
            Serial.println("Servo positionné à : " + String(position));

            // Envoi de la page HTML
            client.println("HTTP/1.1 200 OK");
            client.println("Content-type:text/html");
            client.println("Connection: close");
            client.println();
            
            client.println("<!DOCTYPE html><html>");
            client.println("<head><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">");
            client.println("<link rel=\"icon\" href=\"data:,\">");
            client.println("<style>html { font-family: Helvetica; text-align: center;}</style></head>");
            client.println("<body><h1>ESP32 Servo Control</h1>");
            
            client.println("<p>Servo Position: <b>" + String(position) + "</b></p>");
            client.println("<p><a href=\"/servo/moins\"><button>-</button></a>");
            client.println(" <b>" + String(position) + "</b> ");
            client.println("<a href=\"/servo/plus\"><button>+</button></a></p>");
            
            client.println("<p>");
            client.println("<a href=\"/servo/0\"><button>0</button></a>");
            client.println("<a href=\"/servo/90\"><button>90</button></a>");
            client.println("<a href=\"/servo/180\"><button>180</button></a>");
            client.println("</p>");

            client.println("</body></html>");
            client.println();
            
            break;
          } else {
            currentLine = "";
          }
        } else if (c != '\r') {
          currentLine += c;
        }
      }
    }
    header = "";
    client.stop();
    Serial.println("Client déconnecté.");
}
}
```