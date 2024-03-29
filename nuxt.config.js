export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Begoña - Ilustraciones y Arte',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: `https://www.paypal.com/sdk/js?currency=EUR&client-id=${process.env.PAYPAL_CLIENT_ID}`,
        body: true
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-glide.js',
    '~/plugins/api.js',
    '~/plugins/vue-mask.js',
    '~/plugins/filters.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://github.com/nuxt-community/svg-sprite-module
    '@nuxtjs/svg-sprite',
    // https://github.com/nuxt-community/dotenv-module#nuxtjsdotenv
    '@nuxtjs/dotenv'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    'cookie-universal-nuxt', // https://www.npmjs.com/package/cookie-universal-nuxt
    // https://github.com/JulianMar/nuxt-bugsnag
    [
      'nuxt-bugsnag',
      {
        config: {
          apiKey: process.env.BUGSNAG_API_KEY
        }
      }
    ],
    // https://github.com/nuxt-community/markdownit-module
    '@nuxtjs/markdownit'
  ],
  markdownit: {
    runtime: true, // Support `$md()`
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true,
    html: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  publicRuntimeConfig: {
    apiBaseUrl:
      process.env.API_BASE_URL ||
      'http://localhost:8000/api-begonia-personal/v1/',
    paypalClientId: process.env.PAYPAL_CLIENT_ID,
    bugsnagApiKey:
      process.env.BUGSNAG_API_KEY || 'cbc77d1ea4c5661e85acb36b01f225cd'
  },

  // runtime eslinting (https://typescript.nuxtjs.org/guide/lint#runtime-lint)
  typescript: {
    typeCheck: false
    // TODO: esta config hace que los builds en Vercel fallen
    // typeCheck: {
    //   eslint: {
    //     files: './**/*.{ts,js,vue}'
    //   }
    // }
  },

  // compilacion mas rapida
  tailwindcss: {
    jit: true
  }
}
