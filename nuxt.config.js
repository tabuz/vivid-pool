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
      {
        name: 'keywords',
        content:
          'vivid, stake, pool, staking, cardano, crypto, bitcoin, ethereum, tutorial, guide, poradnik, ADA, BTC, stakowac, jak, kryptowaluty, polska',
      },

      // Open Graph
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://vivid-pool.info',
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Vivid Stake Pool',
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:image',
        name: 'og:image',
        property: 'og:image',
        content: 'https://vivid-pool.info/images/vivid-splash.png',
      },

      // Twitter
      {
        hid: 'twitter:site',
        property: 'twitter:site',
        content: '@Cryptoguys4',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        property: 'twitter:image',
        content: 'https://vivid-pool.info/images/vivid-splash.png',
      },
      {
        hid: 'twitter:domain',
        name: 'twitter:domain',
        property: 'twitter:domain',
        content: 'vivid-pool.info',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        property: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/gtag.js'],

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
    '@nuxtjs/dayjs',
    '@nuxtjs/sitemap',
  ],
  dayjs: {
    locales: ['en', 'pl'],
    defaultLocale: 'en',
    plugins: ['relativeTime'],
  },
  sitemap: {
    hostname: 'https://vivid-pool.info',
  },
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
    optionsPath: './plugins/vuetify.options.js',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
