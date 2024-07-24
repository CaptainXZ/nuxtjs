<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>My Portfolio</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn text to="/">Projects</v-btn>
      <v-btn text to="/pos">POS System</v-btn>

      <v-select
        v-model="locale"
        :items="locales"
        item-text="name"
        item-value="code"
        @change="changeLocale"
        dense
        hide-details
      ></v-select>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app> </v-navigation-drawer>

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
};
</script>

<style>
/* Add any styles you need */
</style>
