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
      link: /Projets/Assos/avenir

features:
  - title:  "🧠 Apprendre"
    details: Formez-vous à la robotique avec nos guides sur Arduino, ESP32, Raspberry Pi, et plus encore.
  - title:  "🤖 Construire"
    details: Participez à la construction de robots et des projets électroniques.
  - title: "💡Innover"
    details: Rejoignez une communauté d'innovateurs
  

---
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KSKFT9NP"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->



## <span class="custom-title">Projets</span>

<Projets></Projets>


<!--- ## <span class="custom-title">Projets Personnels des membres</span> -->

<script setup>
import Projets from './components/Projets.vue';


import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme';

const coreMembers = [
  {
    avatar: 'https://cdn.discordapp.com/avatars/689427361485160519/39c360f5799a637a6d23559d66935740.webp',
    name: 'Baptiste L.',
    title: 'Président',
    links: [
          { icon: 'github', link: 'https://github.com/Crobot-ic' },
        { icon: 'discord', link: 'https://discord.gg/vUWPQKYP' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/123359546?s=400&u=210a71763e5c1d9a759c080a409ae88f2bdbd5a5&v=4',
    name: 'Corentin K.',
    title: 'Vice-Président',
    links: [
      { icon: 'github', link: 'https://github.com/Corentin-k' },
      { icon: 'discord', link: 'https://discord.gg/vUWPQKYP' }
    ]
  },

{
    avatar: 'https://cdn.discordapp.com/avatars/781486043912208395/692b2bf80ab4a61d483ba3fe6bae8ed0.webp',
    name: 'Thibault M.',
    title: 'Secrétaire',
    links: [
{ icon: 'github', link: 'https://github.com/Crobot-ic' },
      { icon: 'discord', link: 'https://discord.gg/vUWPQKYP' }
    ]
  },
{
    avatar: 'https://cdn.discordapp.com/avatars/535548033031471169/a90162c23609d7cac7662554987a192f.webp',
    name: 'Tristan M.',
    title: 'Trésorier',
    links: [
{ icon: 'github', link: 'https://github.com/Crobot-ic' },
      { icon: 'discord', link: 'https://discord.gg/vUWPQKYP' }
    ]
  },

{
    avatar: 'https://cdn.discordapp.com/avatars/401503937519419393/f8d0060c17b467b3508bd07b9ffcb952.webp',
    name: 'Roy T.T.',
    title: 'Vice secrétaire',
    links: [
{ icon: 'github', link: 'https://github.com/Crobot-ic' },
      { icon: 'discord', link: 'https://discord.gg/vUWPQKYP' }
    ]
  },
  
];


</script>

<VPTeamPage>
<VPTeamPageTitle>
  <template #title ><span class="custom-title">La team Crobotic</span></template>
</VPTeamPageTitle>
<VPTeamPageSection>
<template #members>
<VPTeamMembers size="medium" :members="coreMembers" />
</template>
</VPTeamPageSection>
</VPTeamPage>

