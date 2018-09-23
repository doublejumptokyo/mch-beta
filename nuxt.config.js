const SITE_INFO = {
  url: 'http://tanaka.djty.co',
  title: 'My Crypto Heroes',
  description: 'My Crypto Heroes'
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
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: SITE_INFO.description
      },
      { property: 'og:title', content: SITE_INFO.title },
      // { property: 'og:image', content: require('~/assets/images/key_visual.jpg') },
      { property: 'og:description', content: SITE_INFO.description },
      { name: 'robots', content: 'noindex' },
      { name: 'googlebot', content: 'noindex' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
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
      }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['~/plugins/ks-vue-scrollmagic', 'vue-cropper'],
    publicPath: '/static/'
  },
  plugins: [
    '~/plugins/axios',
    '~/plugins/font-awesome',
    '~/plugins/i18n.js',
    { src: '~/plugins/ks-vue-scrollmagic', ssr: false },
    { src: '~/plugins/swiper', ssr: false },
    { src: '~/plugins/vue-highcharts', ssr: true },
    { src: '~/plugins/vue-observe-visibility', ssr: false },
    { src: '~/plugins/vue-cropper', ssr: false },
    { src: '~/plugins/vue-clipboard', ssr: false },
    { src: '~/plugins/eth-account-manager', ssr: false },
    { src: '~/plugins/dc-key-manager', ssr: false },
    { src: '~/plugins/dc-account-manager', ssr: false },
    { src: '~/plugins/dc-register', ssr: false }
  ],
  css: ['swiper/dist/css/swiper.css', 'animate.css/animate.css'],
  modules: [
    // '@nuxtjs/font-awesome',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/proxy',
    // '@nuxtjs/bulma',
    ['nuxt-sass-resources-loader', ['~/assets/styles/main.scss']]
  ],
  proxy: {
    '/api': 'https://www.origin.sand.mch.djty.co',
    '/tmp': 'https://www.origin.sand.mch.djty.co'
  }
}
