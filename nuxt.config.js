require('dotenv').config()
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const isDev = process.env.NODE_ENV === 'development'

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
  components: [
    '~/components' // default level is 0
  ],

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
    '@nuxtjs/dotenv',
    'vuefront-nuxt'
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
    },
    babel: {
      plugins: ['lodash', 'preval', ['@babel/plugin-proposal-private-methods', { loose: true }]]
    },
    transpile: ['@vuefront/checkout-app'],
    extractCSS: !isDev,
    corejs: 2,
    optimization: {
      splitChunks: {
        chunks: 'all',
        automaticNameDelimiter: '.',
        name: 'test',
        maxSize: 256000,
        minSize: 50000
      }
    },
    plugins: [
      new LodashModuleReplacementPlugin({
        shorthands: true
      })
    ]
  },

  generate: {
    dir: 'public',
    concurrency: 5,
    subFolders: false,
    crawler: true
  }
}
