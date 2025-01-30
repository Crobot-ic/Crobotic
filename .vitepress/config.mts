import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Crobotic",lang: 'fr-FR',
  titleTemplate: ':title - Crobotic',
  description: "Association de Robotique",
  markdown: {
    math: true
  },


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
    ['script', { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-BEFKEWYH1Q' }],
    ['script', {}, `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-BEFKEWYH1Q');
    `],

  ]
  ,
  base: '/Crobotic/',
  themeConfig: {
    logo: 'logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Formations', link: '/Formations/Arduino/arduino' },
      { text: 'Projets', link: '/Projets/avenir' },
    ],

    sidebar: {
      '/Formations/': {
        text: 'Formations',
        items: [
          {
            text: 'Formation - Arduino',
            collapsed: true,
            items: [
              {text: 'Arduino', link: '/Formations/Arduino/arduino'},
              {text: 'Code', link: '/Formations/Arduino/arduino-code'},
              {text: 'Exercice 1', link: '/Formations/Arduino/arduino-ex1'},
              {text: 'Exercice 2', link: '/Formations/Arduino/arduino-ex2'},
              {text: 'Exercice 3', link: '/Formations/Arduino/arduino-ex3'},
              {text: 'Ressources', link: '/Formations/Arduino/arduino-ressources'}
            ]
          },
          {
            text: 'Formation - ESP32',
            collapsed: true,
            items: [
              {text: 'ESP32', link: '/Formations/ESP32/esp32-intro'},
              {text: 'Arduino IDE', link: '/Formations/ESP32/esp32-arduino'},
              {text: 'Platform IO', link: '/Formations/ESP32/esp32-platformio'},
              {text: 'Connexion Wifi avec ESP32', link: '/Formations/ESP32/esp32-wifi'},
              {text: 'ESPHome', link: '/Formations/ESP32/esp32-esphome'},
              {text: 'Exemple 1', link: '/Formations/ESP32/esp32-exemple1'},
              {text: 'Exemple 2', link: '/Formations/ESP32/esp32-exemple2'},
              {text: 'Projet', link: '/Formations/ESP32/esp32-projet'}
            ]
          },
          {
            text: 'Formation - RaspberryPi',
            collapsed: true,
            items: [
              {text: 'RaspberryPi', link: '/Formations/Raspberry/raspberry-intro'},

            ]
          },
          {
            text: 'Formation - Electricité',
            collapsed: true,
            items: [
              {text: 'Introduction', link: '/Formations/Electricite/elec-intro'},
              {text: 'Lois', link: '/Formations/Electricite/elec-lois'},
            ]
          }
        ]
      },
      '/Projets/': {
        text: 'Projets',
        items: [
          {
            text: 'Projets - Crobotic',
            collapsed: true,
            items: [
              {text: 'Projet 1', link: '/Projets/avenir'},
              {text: 'Projet 2', link: '/Projets/avenir'},
              {text: 'Projet 3', link: '/Projets/avenir'},
            ]
          },
          {
            text: 'Projets - Personnel',

            collapsed: true,
            items: [
              {text: 'Projet 1', link: '/Projets/avenir'},
              {text: 'Projet 2', link: '/Projets/avenir'},

            ]
          },

        ]
      },
    },

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
