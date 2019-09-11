import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.red.darken2,
        secondary: colors.grey.lighten1,
        accent: colors.red.accent2,
        error: colors.red.accent4,
        info: colors.blue.lighten1,
        success: colors.green.lighten2,
        warning: colors.amber.darken2
      }
    }
  },
  icons: {
    iconfont: 'mdi'
  }
})
