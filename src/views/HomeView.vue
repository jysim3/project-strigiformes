<template>
  <v-container fill-height>
    <v-row align-self="center" class="mb-5">
      <v-col cols="12" md="6">
        <v-row class="mt-md-10" justify="center" justify-md="start">
          <v-col cols="10">
            <h1 class="text-h2 font-weight-medium">
              Make <span class="font-weight-bold">fun</span> project, Get
              <span class="font-weight-bold">real</span> job
            </h1>
          </v-col>
        </v-row>
        <v-row justify="center" justify-md="start">
          <v-col cols="10">
            <p class="text-subheading-1 text--secondary">
              Why focus on your career and not have fun? Why have party all day
              and disregard your career? Learn to make and contribute to real
              fun projects that will contribute to your CV and impress your
              employer. Understand what companies are looking for when hiring
              from industry professionals in top tech company such as Google.
            </p>
          </v-col>
        </v-row>
        <v-row class="my-5" justify="center" justify-md="start">
          <v-btn
            color="accent"
            large
            elevation="1"
            @click="$vuetify.goTo($refs.exampleProjects)"
            >Browse projects</v-btn
          >
        </v-row>
      </v-col>
      <v-col
        cols="12"
        md="6"
        class="d-flex flex-column align-center justify-content-center mb-10"
        ><v-img
          :src="require('../assets/home-vector.png')"
          max-height="350"
          max-width="350"
          contain
      /></v-col>
    </v-row>
    <v-row
      class="mb-2"
      justify="center"
      justify-md="start"
      ref="exampleProjects"
    >
      <h6 class="text-h6 font-weight-medium">
        Existing Projects to Contribute
      </h6>
    </v-row>
    <v-row align="stretch">
      <v-col cols="12" md="3" v-for="item in currentProjects" :key="item.id">
        <PreviewCard v-bind="item" />
      </v-col>
    </v-row>
    <v-row
      class="mb-2"
      justify="center"
      justify-md="start"
      ref="exampleProjects"
    >
      <h6 class="text-h6 font-weight-medium">New Projects Ideas to Work On</h6>
    </v-row>
    <v-row align="stretch">
      <v-col cols="12" md="3" v-for="item in projects" :key="item.id">
        <PreviewCard v-bind="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PreviewCard from "../components/PreviewCard.vue";
import {
  current_projects as currentProjects,
  projects,
} from "@/assets/data.js";

export default {
  name: "HomeView",

  data() {
    // console.log(data);
    return {
      currentProjects,
      projects,
    };
  },
  components: {
    PreviewCard,
  },
};
</script>
