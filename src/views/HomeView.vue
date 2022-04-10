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
    <!--
    <v-row class="mb-2" ref="exampleProjects">
      <h6 class="text-h6 font-weight-medium">Existing Projects to Contribute</h6>
    </v-row>
    -->
    <v-row class="mb-2" justify="center" justify-md="start" ref="exampleProjects">
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

export default {
  name: "HomeView",

  data() {
    return {
      projects: [
        {
          heading: "Website",
          subheading:
            "Learn the language with the highest demand, Javascript (Github 2021)! Build websites such as this one! ",
          img: require("../assets/website.gif"),
          content:
            "Don't get intimidated by the difficulty of this project. They are easier than expected and incredibly fun!",
          href: "",
          tags: ["Javascript", "React", "Vue"],
        },
        {
          heading: "Artificial Intelligence",
          subheading:
            "Use AI to do various different tasks, this example shows the machine learning to play snake by itself using machine learning.",
          img: "http://jysim3.com/db/static/pygame-window-2020-07-08-13-34-27_Trim.gif",
          content:
            "Don't get intimidated by the difficulty of this project. They are easier than expected and incredibly fun!",
          href: "",
          tags: ["AI", "Python"],
        },
        {
          heading: "App with amazing technology",
          subheading:
            "Using technology such as NFC or QR Code, there is no doubt that employer will be impressed with your skills.",
          img: require("../assets/pointr-qr.png"),
          content:
            "Don't get intimidated by the difficulty of this project. They are easier than expected and incredibly fun!",
          href: "",
          tags: ["QR", "Web", "Apps"],
        },
        {
          heading: "Messenger app",
          subheading:
            "Whether it is iOS, Android or cross-platform, create an app that allows you and your friend to chat among each other. You can be sure no one is spying on you!",
          content:
            "Don't get intimidated by the difficulty of this project. They are easier than expected and incredibly fun!",
          img: "https://cdn.dribbble.com/users/878428/screenshots/15392719/media/9c31c2b0672390e6a42880efe82c52e3.png",
          href: "",
          tags: ["iOS", "Android", "Apps"],
        },
        {
          heading: "Trading bot",
          subheading:
            "Make a crypto trading bot with Python. With a trading bot portfolio, you will be certain that the employer will be impressed.",
          content:
            "Don't get intimidated by the difficulty of this project. They are easier than expected and incredibly fun!",
          img: "https://raw.githubusercontent.com/freqtrade/freqtrade/develop/docs/assets/freqtrade-screenshot.png",
          href: "",
          tags: ["Crypto", "Python"],
        },
        {
          heading: "Make a game",
          subheading:
            "Make a game using Unity and C#. Find out more about what company values when you present your game project.",
          content:
            "Don't get intimidated by the difficulty of this project. They are easier than expected and incredibly fun!",
          img: require("../assets/game-preview.gif"),
          href: "",
          tags: ["Unity", "C#"],
        },
      ],
    };
  },
  components: {
    PreviewCard,
  },
};
</script>
