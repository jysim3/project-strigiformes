<template>
  <v-app>
    <v-container>
      <v-row class="mt-4">
        <v-col cols="auto">
          <v-img
            :src="require('./assets/logo.webp')"
            class="mr-2"
            max-width="100"
          />
        </v-col>
        <v-col cols="auto" align-self="center">
          <h1 class="text-h6"> Project Owl </h1>
        </v-col>
          <v-col cols="auto" align-self="center">
            <a class="text-body-1" color="primary">Home</a>
          </v-col>
          <v-col cols="auto" align-self="center">
            <a class="text-body-1" color="primary">Projects </a>
          </v-col>

        <v-spacer></v-spacer>

        <v-col cols="2">
          <v-btn
            href="http://jysim3.com"
            target="_blank"
            text
          >
            <span class="mr-2">jysim3</span>
            <v-icon>mdi-open-in-new</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
