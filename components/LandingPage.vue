<template>
  <v-app>
    <v-main>
      <v-container class="mt-10">
        <template>
          <v-carousel>
            <v-carousel-item
              v-for="(item, i) in items"
              :key="i"
              :src="item.src"
              reverse-transition="fade-transition"
              transition="fade-transition"
            ></v-carousel-item>
          </v-carousel>
        </template>

        <!-- Projects Section -->
        <v-row id="projects" class="mt-10">
          <v-col
            cols="12"
            md="4"
            v-for="(project, index) in projects"
            :key="index"
          >
            <v-card outlined height="400px">
              <v-img :src="project.image" height="200px"></v-img>
              <v-card-title>{{ project.title }}</v-card-title>
              <v-card-text>{{ project.description }}</v-card-text>
              <v-card-actions>
                <v-btn :href="project.link" target="_blank" color="primary"
                  >View Project</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer app padless>
      <v-col class="text-center" cols="12">
        <v-divider></v-divider>
        <v-row>
          <v-col class="text-center">
            <v-btn icon href="https://www.facebook.com" target="_blank">
              <v-icon>mdi-facebook</v-icon>
            </v-btn>
            <v-btn icon href="https://www.twitter.com" target="_blank">
              <v-icon>mdi-twitter</v-icon>
            </v-btn>
            <v-btn icon href="https://www.linkedin.com" target="_blank">
              <v-icon>mdi-linkedin</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <span>&copy; 2024 My Portfolio. All rights reserved.</span>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "PortfolioPage",
  layout: "default",
  data() {
    return {
      drawer: false,
      items: [
        { src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg" },
        { src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg" },
        { src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg" },
        { src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg" },
      ],
      projects: [
        {
          title: "Delivery Management",
          description:
            "A fast and reliable delivery service platform that streamlines the shipping process for businesses and customers.",
          image:
            "https://www.restapp.com/wp-content/uploads/2021/12/online_pizza_order-1.png",
          link: "https://example.com/project-one",
        },
        {
          title: "Inventory Management",
          description:
            "A comprehensive solution for tracking and managing inventory in warehouses and retail stores and optimizing stock levels.",
          image:
            "https://www.veeqo.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fhfb264dqso7g%2F7BIuhKgTlUYlNRQrWwd9FE%2Fd3bd1aa1d0a9dadd21a4601035a2e123%2Fmultichannel-orders-screenshot.jpg&w=2560&q=75",
          link: "https://example.com/project-two",
        },
        {
          title: "POS System",
          description:
            "An efficient point-of-sale system designed to improve sales processes and manage transactions seamlessly.",
          image: "https://www.salesplay.com/wp-content/uploads/2021/12/1-7.png",
          link: "https://example.com/project-three",
        },
        {
          title: "Website Development",
          description:
            "A mobile application that assists drivers in managing their routes, deliveries, and communication with dispatch.",
          image:
            "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210401151214/What-is-Website.png",
          link: "https://example.com/project-four",
        },
      ],
    };
  },
};
</script>

<style></style>
