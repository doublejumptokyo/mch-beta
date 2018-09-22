export const state = () => ({
  env: {},
  dappsChainPrivateKeyBase64: '0x'
})

export const mutations = {
  SET_ENV(state, env) {
    state.env = env
  },
  set(state, key) {
    state.dappsChainPrivateKeyBase64 = key
    window.localStorage.setItem('auth', key)
    //Cookies.set("auth", key);
  }
}

export const actions = {
  async nuxtServerInit({ commit }) {
    const env = await this.$axios.$get('/config/env.json')
    commit('SET_ENV', env)
  }
}
