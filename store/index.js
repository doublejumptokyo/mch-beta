export const state = () => ({
  env: {},
  ethAddress: '',
  dappsChainPrivateKeyBase64: '0x'
})

export const getters = {
  isLoggedIn(state) {
    const key = state.dappsChainPrivateKeyBase64
    return key && key !== '0x'
  }
}

export const mutations = {
  SET_ENV(state, env) {
    state.env = env
  },
  SET_ETH_ADDRESS(state, address) {
    state.ethAddress = address
  },
  SET_PRIVATE_KEY(state, key = null) {
    const storageKeyName = `mch-beta-${state.ethAddress}:loom_key`
    let newKey = null

    // payload
    if (key === null) {
      let key = window && window.localStorage.getItem(storageKeyName)

      // localStorage
      if (!key || key === '0x') {
        newKey = '0x'
      } else {
        newKey = key
      }
    } else {
      newKey = key
    }
    state.dappsChainPrivateKeyBase64 = newKey
    window && window.localStorage.setItem(storageKeyName, newKey)
  },
  DELETE_PRIVATE_KEYS(state) {
    Array.from(Array(window.localStorage.length).keys())
      .map(index => window.localStorage.key(index))
      .forEach(key => {
        if (key.startsWith('mch-beta-')) {
          window.localStorage.removeItem(key)
        }
      })
    state.dappsChainPrivateKeyBase64 = '0x'
  }
}

export const actions = {
  async nuxtServerInit({ commit }) {
    const env = await this.$axios.$get('/config/env.json')
    commit('SET_ENV', env)
  }
}
