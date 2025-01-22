---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Crobot'ic"
  tagline: Association de Robotique
  image:
    src: logo.png 
    alt: "Logo Crobot'ic"
  actions:
    - theme: brand
      text: Formations
      link: /Formations/Arduino/arduino
    - theme: alt
      text: Découvrir nos projets
      link: /api-examples

features:
  - title:  "🧠 Apprendre"
    details: Formez-vous à la robotique avec nos guides sur Arduino, ESP32, Raspberry Pi, et plus encore.
  - title:  "🤖 Construire"
    details: Participez à la construction de robots et des projets électroniques.
  - title: "💡Innover"
    details: Rejoignez une communauté d'innovateurs et participez à des ...
  

---


## <span class="custom-title">Projets</span>

<script setup>
import Projets from './components/Projets.vue'
</script>

<Projets></Projets>

