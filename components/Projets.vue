<template>
  <div class="projets-container">
    <div v-for="projet in projets" :key="projet.title" class="projet-card">
      <h3>{{ projet.title }}</h3>
      <br>
      <img :src="projet.image" :alt="projet.alt" class="projet-image" />
      <p>{{ projet.description }}</p>
      <a :href="projet.link" class="projet-link">Voir le projet</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projets",
  data() {
    return {
      projets: [
        {
          title: "Matrice LED",
          image: "/Crobotic/img.png",
          alt: "Matrice LED",
          description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          link: "#",
        },
        {
          title: "Nao Robot",
          image: "/Crobotic/img_1-compressed.png",
          alt: "Robot Nao",
          description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          link: "#",
        },
        {
          title: "Voiture téléguidée",
          image: "/Crobotic/20231025_162910.jpg",
          alt: "Voiture robotisée",
          description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          link: "#",
        },
      ],
    };
  },
};
</script>

<style scoped>
.projets-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;

}

.projet-card {
  flex: 1;
  min-width: 300px;
  max-width: 350px;
  border: 1px solid #4c4848;
  border-radius: 12px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  background-color: #202127;
}

.projet-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.projet-image {
  height: 150px;
  width: auto;
  border-radius: 12px;
  margin: 0 auto 12px;
  object-fit: cover;
  display: block;
}

h3{
  color: #efd105;
}
.projet-link {
  color: #f97316;
  text-decoration: none;
  font-weight: bold;
}

.projet-link:hover {
  text-decoration: underline;
}
</style>
