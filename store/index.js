import Web3 from 'web3'

export const state = () => ({
  env: {},
  ethAddress: '',
  dappsChainPrivateKeyBase64: null
})

export const getters = {
  isLoggedIn(state) {
    return !!state.dappsChainPrivateKeyBase64
  }
}

export const mutations = {
  SET_ENV(state, env) {
    state.env = env
  },
  SET_ETH_ADDRESS(state, address) {
    state.ethAddress = address
  },
  SET_PRIVATE_KEY(state, key) {
    state.dappsChainPrivateKeyBase64 = key
  },
  DELETE_PRIVATE_KEYS(state) {
    state.dappsChainPrivateKeyBase64 = null
  }
}

export const actions = {
  async nuxtServerInit({ commit }) {
    const env = await this.$axios.$get('/config/env.json')
    commit('SET_ENV', env)
  },
  checkLoggedIn({ state, commit }) {
    const storageKeyName = `mch-beta-${state.ethAddress}:loom_key`
    const key = window && window.localStorage.getItem(storageKeyName)
    commit('SET_PRIVATE_KEY', key)
    return key
  },
  async login({ state }) {
    const storageKeyName = `mch-beta-${state.ethAddress}:loom_key`
    const privateKey = state.dappsChainPrivateKeyBase64
    if (privateKey) return
    const token = await this.$keyManager.getTokenAsync()
    const ethAddress = await this.$ethManager.getCurrentAccountAsync()
    const message = `MyCryptoHeroes\nLogin:${ethAddress}\nToken:${token}`
    const dataToSign = Web3.utils.utf8ToHex(message)
    const sig = await this.$ethManager.getSignatureAsync(dataToSign)
    const key = await this.$keyManager.loginAsync(ethAddress, sig, message)
    window && window.localStorage.setItem(storageKeyName, key)
    window && window.location.reload()
  },
  async logout({ commit }) {
    Array.from(Array(window.localStorage.length).keys())
      .map(index => window.localStorage.key(index))
      .forEach(key => {
        if (key.startsWith('mch-beta-')) {
          window.localStorage.removeItem(key)
        }
      })
    commit('DELETE_PRIVATE_KEYS')
  }
}
