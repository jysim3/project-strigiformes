<template>
  <v-app>
    <v-container>
      <v-row class="mt-4" align="center">
        <v-col cols="12" md="auto" class="d-flex justify-center">
          <v-img
            :src="require('./assets/logo.png')"
            class="mr-2"
            height="100"
            width="100"
          contain
          />
        </v-col>
        <v-col cols="12" md="auto" class="text-center">
          <h1 class="text-h6 font-weight-bold"> Project Owl </h1>
        </v-col>
        <v-col cols="12" md="auto" class="justify-center d-none d-md-flex">
          <v-col cols="auto">
            <a class="text-body-1" color="primary">Home</a>
          </v-col>
          <v-col cols="auto">
            <a class="text-body-1" color="primary">Projects </a>
          </v-col>
        </v-col>

        <v-spacer></v-spacer>

        <v-col cols="12" md="2" class="d-flex justify-center pt-0">
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
<style>
</style>
