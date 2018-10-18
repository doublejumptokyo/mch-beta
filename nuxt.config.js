const isProduction = process.env.NODE_ENV === 'production'

const SITE_INFO = {
  title: 'My Crypto Heroes',
  description:
    'In the near future...\nRecords of past heroes have all vanished into the Crypto World.\n\nIt is your job as a data miner to dive into the depth of the Crypto World\nto battle enemies and restore the heroes back to their finest forms.\nCollect and strengthen your heroes through battles and trades to stay ahead of the other miners!\n\nMy Crypto Heroes\nWhere you can find the best heroes imaginable...',
  faviconPath: '/favicon.png',
  gaTrackingId: 'UA-119742974-1',
  primaryColor: '#444'
}

const modules = [
  '@nuxtjs/axios',
  '@nuxtjs/proxy',
  '@nuxtjs/toast',
  'cookie-universal-nuxt',
  'nuxt-fontawesome',
  ['@nuxtjs/google-gtag', { id: SITE_INFO.gaTrackingId }],
  ['nuxt-sass-resources-loader', ['~/assets/styles/main.scss']]
]

const axios = isProduction
  ? {
      https: true,
      proxy: false
    }
  : {
      proxy: true
    }

const proxy = isProduction
  ? {}
  : {
      '/api': 'https://beta.mycryptoheroes.net',
      '/events': 'https://beta.mycryptoheroes.net',
      '/now.json': 'https://beta.mycryptoheroes.net'
    }

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: SITE_INFO.title,
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Titillium+Web:300,400,600'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Merriweather+Sans:300,800'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Oswald:200,300,400,500,600,700&amp;subset=cyrillic,latin-ext,vietnamese'
      },
      {
        rel: 'alternate',
        hreflang: 'en',
        href: 'https://beta.mycryptoheroes.net/'
      },
      {
        rel: 'alternate',
        hreflang: 'ja',
        href: 'https://beta.mycryptoheroes.net/'
      }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: SITE_INFO.primaryColor },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['ks-vue-scrollmagic', 'vue-cropper', 'web3', 'loom-js', 'lodash']
  },
  plugins: [
    '~/plugins/axios',
    '~/plugins/i18n.js',
    { src: '~/plugins/console', ssr: false },
    { src: '~/plugins/ks-vue-scrollmagic', ssr: false },
    { src: '~/plugins/swiper', ssr: false },
    { src: '~/plugins/vue-highcharts', ssr: true },
    { src: '~/plugins/vue-observe-visibility', ssr: false },
    { src: '~/plugins/vue-cropper', ssr: false },
    { src: '~/plugins/vue-clipboard', ssr: false },
    { src: '~/plugins/eth-account-manager', ssr: false },
    { src: '~/plugins/dc-key-manager', ssr: false },
    { src: '~/plugins/dc-account-manager', ssr: false },
    { src: '~/plugins/dc-register', ssr: false },
    { src: '~/plugins/dc-hero', ssr: false },
    { src: '~/plugins/dc-extension', ssr: false },
    { src: '~/plugins/dc-team', ssr: false },
    { src: '~/plugins/dc-rank', ssr: false },
    { src: '~/plugins/dc-battle-manager', ssr: false },
    { src: '~/plugins/dc-battle-manager2', ssr: false },
    { src: '~/plugins/dc-battle-manager3', ssr: false },
    { src: '~/plugins/dc-battle-manager4', ssr: false },
    { src: '~/plugins/dc-present', ssr: false },
    { src: '~/plugins/dc-hero-manager', ssr: false }
  ],
  css: ['swiper/dist/css/swiper.css', 'animate.css/animate.css'],
  modules,
  axios,
  proxy,
  toast: {
    duration: 3000
  },
  fontawesome: {
    component: 'fa-icon',
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      },
      {
        set: '@fortawesome/free-regular-svg-icons',
        icons: ['far']
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab']
      }
    ]
  }
}
