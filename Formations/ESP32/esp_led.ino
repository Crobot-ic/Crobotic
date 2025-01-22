#include "Freenove_WS2812_Lib_for_ESP32.h" // Pour la gestion du ruban LED
#include <WiFi.h>
#include <WebServer.h>                     // Pour la gestion du serveur web
#include <DHT.h>                            // Pour la gestion du capteur DHT11 (température et humidité)
#include <ArduinoJson.h>                   // Pour la gestion des données JSON

// Wi-Fi credentials
const char *ssid = "************";
const char *password = "*************";

// Static IP configuration
IPAddress local_IP(192, 168, 1, 201);
IPAddress gateway(192, 168, 1, 1);
IPAddress subnet(255, 255, 255, 0);

// LED strip configuration
#define LEDS_COUNT  145
#define LEDS_PIN    2
#define CHANNEL     0

// DHT11 configuration
#define DHTPIN 4     // Changez ceci au pin auquel votre DHT11 est connecté
#define DHTTYPE DHT11

Freenove_ESP32_WS2812 strip = Freenove_ESP32_WS2812(LEDS_COUNT, LEDS_PIN, CHANNEL, TYPE_GRB);
DHT dht(DHTPIN, DHTTYPE);

WebServer server(80);

unsigned long previousMillis = 0;
const long interval = 5000;  // Intervalle de 5 secondes pour la lecture du DHT11

void handleRoot() {
  server.sendHeader("Access-Control-Allow-Origin", "*"); // Autoriser les requêtes CORS
  server.send(200, "text/plain", "Hello, world!");
}

// Route pour définir la couleur de tous les LEDs
void handleSetColor() {
  server.sendHeader("Access-Control-Allow-Origin", "*");
  int r = server.arg("r").toInt();
  int g = server.arg("g").toInt();
  int b = server.arg("b").toInt();

  for (int i = 0; i < LEDS_COUNT; i++) {
    strip.setLedColorData(i, r, g, b);
  }
  strip.show();

  server.send(200, "text/plain", "Color set");
}

// Route pour obtenir les données du capteur DHT11
void handleGetDHT11Data() {
  server.sendHeader("Access-Control-Allow-Origin", "*");
  float temperature = dht.readTemperature();
  float humidity = dht.readHumidity();

  if (isnan(temperature) || isnan(humidity)) {
    server.send(500, "application/json", "{\"error\":\"Failed to read from DHT sensor\"}");
    return;
  }

  char jsonResponse[100];
  snprintf(jsonResponse, sizeof(jsonResponse), "{\"temperature\":%.2f,\"humidity\":%.2f}", temperature, humidity);

  server.send(200, "application/json", jsonResponse);
}



void handleStatus() {
  server.sendHeader("Access-Control-Allow-Origin", "*");
  server.send(200, "text/plain", "OK");
}


void handleOptions() {
  server.sendHeader("Access-Control-Allow-Origin", "*");
  server.sendHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  server.sendHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  server.send(204);
}


// Fonction pour lire les données du capteur DHT11
void printDHT11Data() {
  float temperature = dht.readTemperature();
  float humidity = dht.readHumidity();

  if (isnan(temperature) || isnan(humidity)) {
    Serial.println("Failed to read from DHT sensor!");
    return;
  }

  Serial.print("Temperature: ");
  Serial.print(temperature);
  Serial.print(" °C, Humidity: ");
  Serial.print(humidity);
  Serial.println(" %");
}

void setup() {
  Serial.begin(115200);
  delay(2000);

  // Static IP configuration
  if (!WiFi.config(local_IP, gateway, subnet)) {
    Serial.println("STA Failed to configure");
  }

  // Connect to Wi-Fi network
  Serial.print("Connecting to ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }

  Serial.println("Connected to WiFi");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());

  // Initializing LED strip
  strip.begin();
  strip.setBrightness(100);

  // Initializing DHT sensor
  dht.begin();

  // Setting up web server routes
  server.on("/", HTTP_GET, handleRoot);
  server.on("/setColor", HTTP_GET, handleSetColor);
  server.on("/getDHT11Data", HTTP_GET, handleGetDHT11Data);
  server.on("/status", HTTP_GET, handleStatus);
  server.on("/setColor", HTTP_OPTIONS, handleOptions);
  server.on("/getDHT11Data", HTTP_OPTIONS, handleOptions);
  server.on("/status", HTTP_OPTIONS, handleOptions);
  server.begin();
  Serial.println("HTTP server started");

  // Initial DHT11 reading
  printDHT11Data();
}

void loop() {
  server.handleClient();

  unsigned long currentMillis = millis();
  if (currentMillis - previousMillis >= interval) {
    previousMillis = currentMillis;
    printDHT11Data();
  }
}
