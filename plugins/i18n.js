import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({ app, req }) => {
  let locale = 'en'
  if (process.client) {
    // browserから取る場合はnavigator経由で取得
    locale =
      window.navigator.language &&
      window.navigator.language.substr(0, 2) === 'ja'
        ? 'ja'
        : 'en'
  } else if (req) {
    // ssrの場合はrequestから取得)
    locale = req.headers['accept-language']
      ? req.headers['accept-language']
          .split(',')[0]
          .toLocaleLowerCase()
          .substr(0, 2)
      : 'en'
    locale = locale === 'ja' ? 'ja' : 'en'
  }
  app.i18n = new VueI18n({
    locale: locale || 'en',
    fallbackLocale: 'en',
    messages: {
      en: require('~/locales/en.json'),
      ja: require('~/locales/ja.json')
    }
  })
}
