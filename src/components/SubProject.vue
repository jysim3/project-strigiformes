<template>
  <v-card>
    <v-card-text>
      <div>{{ type }}</div>
      <p class="text-h5 text--primary">
        {{ title }}
      </p>
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
      <div class="text--primary">{{ subtitle }}</div>
    </v-card-text>
    <v-card-actions>
      <v-btn text @click="reveal = true" :disabled="lines.length < 1">
        What's good?
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card
        v-if="reveal"
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: 100%"
      >
        <v-card-text class="pb-0">
          <p class="text-h5 text--primary">CV Lines</p>
          <ul>
            <li v-for="line in lines" :key="line">{{ line }}</li>
          </ul>
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-btn text @click="reveal = false"> Close </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>
<script>
export default {
  name: "SubProject",
  props: {
    title: String,
    subtitle: String,
    lines: Array,
    tags: Array,
    type: String,
  },
  data: () => ({
    reveal: false,
  }),
};
</script>
<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1;
  position: absolute;
  width: 100%;
}
</style>
