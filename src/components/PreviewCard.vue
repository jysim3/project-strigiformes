<template>
  <v-card height="300" rounded="lg" elevation="3">
    <v-img
      :src="img"
      class="up"
      position="center top"
      style="height: 100%"
      @click="hover = !hover"
      @mouseover="hover = true"
      @mouseleave="hover = false"
    >
      <v-dialog width="1000">
        <template v-slot:activator="{ on, attrs }">
          <v-expand-transition>
            <div v-if="hover" :class="['v-card--reveal']">
              <v-list three-line>
                <v-list-item>
                  <v-list-item-content>
                    <div class="text-h6 mb-1">
                      {{ heading }}
                    </div>
                    <div class="text-body-2">
                      {{ subheading }}
                    </div>
                  </v-list-item-content>
                </v-list-item>
                <v-row class="justify-end mx-auto">
                  <v-card-actions>
                    <v-btn text color="accent" v-on="on" v-bind="attrs"
                      >See more</v-btn
                    >
                  </v-card-actions>
                </v-row>
              </v-list>
            </div>
          </v-expand-transition>
        </template>

        <v-card>
          <v-container fluid>
            <v-row justify="space-between">
              <v-col cols="12" md="5" class="pa-0" order-md="2">
                <v-img :src="img" contain />
              </v-col>
              <v-col cols="12" md="5" order-md="1">
                <div class="ml-5">
                  <h2 class="text-h5 mt-8">{{ heading }}</h2>
                  <div>
                    <v-btn
                      color="primary"
                      outlined
                      rounded
                      small
                      disabled
                      class="my-2 mr-2"
                      v-for="tag in tags"
                      :key="tag"
                      >{{ tag }}</v-btn
                    >
                  </div>
                  <p class="text-body-2 text--secondary">{{ subheading }}</p>
                  <p class="text-body-2">{{ content }}</p>
                  <v-btn
                    v-if="href"
                    color="primary"
                    class="mb-3"
                    :to="{ name: 'project', params: { project_id: id } }"
                    target="blank"
                  >
                    Read more
                  </v-btn>
                  <div v-else>
                    <p class="text-h6">Contact me to know more</p>
                    <v-btn
                      small
                      class="mb-3"
                      href="http://m.me/notgangboss"
                      target="blank"
                      color="primary"
                      fab
                      ><span
                        class="iconify"
                        data-icon="mdi:facebook-messenger"
                      ></span
                    ></v-btn>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-dialog>
      <div class="triangle" v-if="!hover" />
    </v-img>
  </v-card>
</template>
<script>
export default {
  name: "PreviewCard",
  props: {
    heading: String,
    subheading: String,
    img: String,
    href: String,
    id: String,
    content: String,
    tags: Array,
  },
  data: () => ({
    hover: false,
  }),
};
</script>
<style>
.v-card--reveal {
  position: absolute;

  opacity: 90%;
  width: 100%;
  bottom: 0;
}
.triangle {
  width: 0px;
  height: 0px;
  border-bottom: 50px solid white;
  opacity: 50%;
  border-left: 50px solid transparent;
  bottom: 0;
  right: 0;
  position: absolute;
}
</style>
