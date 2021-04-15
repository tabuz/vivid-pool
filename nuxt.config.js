export default {
  telemetry: false,
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    middleware: ['dot_grid'],
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Vivid Stake Pool',
    title: 'Vivid Stake Pool',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/eslint-module',
  ],
  eslint: {
    fix: true,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxt/content',
    [
      'nuxt-i18n',
      {
        locales: [
          {
            code: 'en',
            file: 'en-GB.js',
          },
          {
            code: 'pl',
            file: 'pl-PL.js',
          },
        ],
        defaultLocale: 'en',
        lazy: true,
        langDir: 'lang/',
      },
    ],
  ],
  generate: {
    routes() {
      const { $content } = require('@nuxt/content')

      const routes = []

      return $content('en', 'guide')
        .fetch()
        .then((docs_content) => {
          return routes.concat(
            docs_content.map((c) => {
              const route = `/guide/${c.category}/${c.slug}`
              return {
                route,
                payload: docs_content,
              }
            })
          )
        })
        .then((routes) => {
          return $content('pl', 'guide')
            .fetch()
            .then((docs_content) => {
              return routes.concat(
                docs_content.map((c) => {
                  const route = `/pl/guide/${c.category}/${c.slug}`
                  return {
                    route,
                    payload: docs_content,
                  }
                })
              )
            })
        })
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    options: {
      customProperties: true,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
