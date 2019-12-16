export default {
  mode: 'universal',
  // //////////////////////////////////////////////////////////////////// Server
  // ---------------------------------------------------------------------------
  server: {
    port: 4000
  },
  // /////////////////////////////////////////////////////// Headers of the Page
  // ---------------------------------------------------------------------------
  head: {
    title: 'Displaced | An Original Documentary Series',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Burn your identity. Hide in a cargo box. Get to the refugee camp. Smoke shisha with your best friends. Restart life.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' }
    ]
  },
  // /////////////////////////////////////////////////////// Headers of the Page
  // ---------------------------------------------------------------------------
  backendBaseUrl: (function () {
    const env = process.env.NODE_ENV
    let url = ''
    switch (env) {
      case 'development': url = 'http://modify.displacedseries.com'; break
      case 'staging': url = 'http://modify.displacedseries.com'; break
      case 'production': url = 'http://modify.displacedseries.com'; break
    } return url
  }()),
  // ////////////////////////////////////////// Customize the progress-bar color
  // ---------------------------------------------------------------------------
  loading: { color: '#000000' },
  // /////////////////////////////////////////////////////////// Global CSS/SCSS
  // ---------------------------------------------------------------------------
  css: [
    '~/assets/scss/normalize.scss',
    '~/assets/scss/gridlex-2.7.1/gridlex.scss',
    '~/assets/scss/main.scss'
  ],
  styleResources: {
    scss: [
      '~/assets/scss/variables.scss'
    ]
  },
  // /////////////////////////////////// Plugins to load before mounting the App
  // ---------------------------------------------------------------------------
  plugins: [
    '~/api/index.js',
    '~/plugins/globalMethods.js'
  ],
  // /////////////////////////////////////////////////////// Nuxt.js Dev Modules
  // ---------------------------------------------------------------------------
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  // /////////////////////////////////////////////////////////// Nuxt.js Modules
  // ---------------------------------------------------------------------------
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/style-resources-module/
    '@nuxtjs/style-resources'
  ],
  // /////////////////////////////////////////////////////// Router + Middleware
  // ---------------------------------------------------------------------------
  router: {
    middleware: 'scroll-page'
  },
  // //////////////////////////////////////////////// Axios module configuration
  // -------------------------------------- See https://axios.nuxtjs.org/options
  axios: {
  },
  // /////////////////////////////////////////////////////// Build configuration
  // ------------------------------------------------ Extend webpack config here
  build: {
    hotMiddleware: {
      client: {
        overlay: false
      }
    },
    extend (config, ctx) {
    }
  }
}
