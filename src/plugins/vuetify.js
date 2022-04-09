import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'


Vue.use(Vuetify);

export default new Vuetify({

  theme: {
        options: { customProperties: true },

    themes: {
      light: {
        primary: colors.brown.darken3, // #E53935
        secondary: colors.brown.lighten5, // #FFCDD2
        accent: "#FD1510", // #3F51B5
      },
    },
  },
});
