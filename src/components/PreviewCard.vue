<template>
  <v-hover v-slot="{ hover }">
    <v-card height="300" rounded="lg" elevation="3">
      <v-img :src="img" class="up" position="center top" style="height: 100%">
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
                      <v-btn
                        text
                        color="accent"
                        :link="href"
                        v-on="on"
                        v-bind="attrs"
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
              <v-row>
                <v-col cols="5">
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
                  </div>
                </v-col>
                <v-col cols="2"> </v-col>
                <v-col cols="5" class="pa-0">
                  <v-img :src="img" contain />
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-dialog>
        <div class="triangle" v-if="!hover" />
      </v-img>
    </v-card>
  </v-hover>
</template>
<script>
export default {
  name: "PreviewCard",
  props: {
    heading: String,
    subheading: String,
    img: String,
    href: String,
    tags: Array,
  },
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
