export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  globalName: 'mancraft',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ShopMancraft',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/vue-tailwind'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    {
      src: '@nuxtjs/axios' // https://go.nuxtjs.dev/axios
      // options: { alias: process.env.NAME }
    },
    {
      src: '@nuxtjs/pwa' // https://go.nuxtjs.dev/pwa
      // options: { alias: process.env.NAME }
    },
    {
      src: 'cookie-universal-nuxt'
      // options: { alias: process.env.NAME }
    }
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    html: {
      minify: {
        collapseWhitespace: true,
        conservativeCollapse: true,
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
        removeComments: true
      }
    },
    terser: {
      parallel: true,
      cache: false,
      sourceMap: false,
      extractComments: false
    }
  },

  generate: {
    dir: 'public'
  }
}
