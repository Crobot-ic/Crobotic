import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Crobotic",
  description: "Association de Robotique",


    head: [
      ['link', { rel: 'manifest', href: '/Crobotic/manifest.webmanifest' }],
      ['script', { type: 'text/javascript' }, `
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('/Crobotic/service-worker.js').then((registration) => {
            console.log('Service Worker enregistré avec succès: ', registration);
          }).catch((error) => {
            console.log('Erreur d enregistrement du Service Worker: ', error);
          });
        });
      }
    `],
    ]

  ,
  base: '/Crobotic/',
  themeConfig: {
    logo: 'logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Formations', link: '/Formations/Arduino/arduino' }
    ],

    sidebar: [
      {
        text: 'Formations',
        items: [
          {
          text: 'Formation - Arduino',
          items: [
            { text: 'Arduino', link: '/Formations/Arduino/arduino' },
            { text: 'Code', link: '/Formations/Arduino/arduino-code' },
            { text: 'Exercice 1', link: '/Formations/Arduino/arduino-ex1' },
            { text: 'Exercice 2', link: '/Formations/Arduino/arduino-ex2' },
            { text: 'Exercice 3', link: '/Formations/Arduino/arduino-ex3' },
            { text: 'Ressources', link: '/Formations/Arduino/arduino-ressources' }
          ]
          },
          {
            text: 'Formation - ESP32',
            items: [
              { text: 'ESP32', link: '/Formations/ESP32/esp32-intro' },
              { text: 'Arduino IDE', link: '/Formations/ESP32/esp32-arduino' },
              { text: 'Connexion Wifi avec ESP32', link: '/Formations/ESP32/esp32-wifi' },
                { text: 'Exemple', link: '/Formations/ESP32/esp32-exemple' },
              { text: 'Platform IO', link: '/Formations/ESP32/esp32-platformio' },
              { text: 'Projet', link: '/Formations/ESP32/esp32-projet' },
              { text: 'Ressources', link: '/Formations/ESP32/esp32-ressources' }
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'discord', link: 'https://discord.gg/K45Ffdjw' }
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: "Réaliser par l'association Crobot'ic.",
      copyright: "© 2025 Crobot'ic. Tous droits réservés."
    },

  },

})
