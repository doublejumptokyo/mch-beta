import xml2js from 'xml2js'

export const state = () => ({
  list: [],
  link: ''
})

export const mutations = {
  SET_LIST(state, list) {
    state.list = list
  },
  SET_LINK(state, link) {
    state.link = link
  }
}

export const actions = {
  async fetch({ commit }) {
    const xml = await this.$axios.$get('/feed')
    const parseString = xml2js.parseString
    const data = await new Promise(resolve => {
      parseString(xml, (message, xmlres) => {
        resolve(xmlres.rss.channel.shift())
      })
    })
    commit('SET_LIST', data.item.filter((item, i) => i < 5))
    commit('SET_LINK', data.link.shift())
  }
}
