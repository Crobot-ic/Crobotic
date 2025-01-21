import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Crobotic",
  description: "Association de Robotique",
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
    vite: {
      vue: {
        template: {
          compilerOptions: {
            isCustomElement: (tag) => tag === "Projets",
          },
        },
      },
    },
  }
})
