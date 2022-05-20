<template>
  <div>
    <v-container>
      <v-row justify="space-between" v-if="projectDetail">
        <v-col cols="12" md="5" class="pa-0" order-md="2">
          <v-img :src="require('../assets/food_ocr.png')" contain />
        </v-col>
        <v-col cols="12" md="5" order-md="1">
          <div class="ml-5">
            <h2 class="text-h5 mt-8">{{ projectDetail.heading }}</h2>
            <div>
              <v-btn
                color="primary"
                outlined
                rounded
                small
                disabled
                class="my-2 mr-2"
                v-for="tag in projectDetail.tags"
                :key="tag"
                >{{ tag }}</v-btn
              >
            </div>
            <p class="text-body-2 text--secondary">
              {{ projectDetail.subheading }}
            </p>
            <p class="text-body-2">{{ projectDetail.content }}</p>
          </div>
        </v-col>
      </v-row>
      <v-row class="mb-2">
        <v-col cols="12">
          <h6 class="text-h6 font-weight-medium">
            SubProjects that will be good for you
          </h6>
        </v-col>
      </v-row>
      <v-row align="stretch">
        <v-col
          cols="9"
          sm="6"
          md="4"
          v-for="item in projectDetail.subproject"
          :key="item.title"
        >
          <SubProject v-bind="item" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { projectDetails } from "@/assets/data.js";
import SubProject from "@/components/SubProject.vue";

export default {
  name: "ProjectView",
  components: { SubProject },
  props: {
    projectId: String,
  },
  data() {
    return {
      tags: ["hello"],
      projectDetail: projectDetails[this.projectId],
    };
  },
  computed: {
    /*
    projectDetail() {
      if (projectDetails[this.projectId]) {
        return projectDetails[this.projectId];
      }
      return null;
    },
    */
  },
};
</script>
