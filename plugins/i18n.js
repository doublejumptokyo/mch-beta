import _ from 'lodash'
import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({ app, req }) => {
  let locale = 'en'
  if (process.client) {
    // browserから取る場合はnavigator経由で取得
    const navigator = _.get(window, 'navigator', {})
    locale = (
      _.head(navigator.languages) ||
      navigator.language ||
      navigator.browserLanguage ||
      navigator.userLanguage
    ).substr(0, 2)
  } else if (req) {
    // ssrの場合はrequestから取得)
    locale = req.headers['accept-language']
      ? req.headers['accept-language']
          .split(',')[0]
          .toLocaleLowerCase()
          .substr(0, 2)
      : 'en'
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
