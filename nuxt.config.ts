export default {
  ssr: false,
  /*
  ** Headers of the page
  */
  head: {
    title: 'Мой день',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Социальный дневник' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#409eff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~/assets/main.sass'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/init',
    '~/plugins/element-ui',
    '~/plugins/v-mask',
    '~/plugins/vuelidate',
    '~/plugins/vue-content-placeholders'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // https://typescript.nuxtjs.org
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
    // https://nuxt-typed-vuex.danielcroe.com/
    'nuxt-typed-vuex',
    // https://github.com/ceigh/nuxt-userbase-module
    'nuxt-userbase-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    'nuxt-clipboard2'
  ],
  /*
  ** Userbase configuration
  */
  userbase: {
    appId: 'd57716d0-d33f-4a84-9d85-39caff782c52'
  },
  /*
  ** Common resources
  */
  styleResources: {
    sass: ['~/assets/breakpoints.sass']
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [
      /^element-ui/,
      /typed-vuex/
    ],
    extractCSS: true
    /*
    ** You can extend webpack config here
    */
    /*
    extend (_config, _ctx) {
    }
    */
  }
}
