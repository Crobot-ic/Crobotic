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

<Projets></Projets>




## <span class="custom-title">Projets Personnels des membres</span>



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
    avatar: 'https://avatars.githubusercontent.com/u/123359546?s=400&u=210a71763e5c1d9a759c080a409ae88f2bdbd5a5&v=4',
    name: 'Baptiste L.',
    title: 'President',
    links: [
      { icon: 'github', link: 'https://github.com/Corentin-k' },
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/123359546?s=400&u=210a71763e5c1d9a759c080a409ae88f2bdbd5a5&v=4',
    name: 'Corentin K.',
    title: 'Vice Président',
    links: [
      { icon: 'github', link: 'https://github.com/Corentin-k' }
    ]
  },
{
    avatar: 'https://avatars.githubusercontent.com/u/123359546?s=400&u=210a71763e5c1d9a759c080a409ae88f2bdbd5a5&v=4',
    name: 'Roy T.T.',
    title: 'Vice secrétaire',
    links: [
      { icon: 'github', link: 'https://github.com/Corentin-k' }
    ]
  },
{
    avatar: 'https://avatars.githubusercontent.com/u/123359546?s=400&u=210a71763e5c1d9a759c080a409ae88f2bdbd5a5&v=4',
    name: 'Thibault M.',
    title: 'Secrétaire',
    links: [
      { icon: 'linkedin', link: 'https://github.com/Corentin-k' }
    ]
  },
{
    avatar: 'https://avatars.githubusercontent.com/u/123359546?s=400&u=210a71763e5c1d9a759c080a409ae88f2bdbd5a5&v=4',
    name: 'Tristan M.',
    title: 'Trésorier',
    links: [
      { icon: 'discord', link: 'https://github.com/Corentin-k' }
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

