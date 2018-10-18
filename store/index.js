import Web3 from 'web3'

export const strict = false

export const state = () => ({
  env: {},
  hasWallet: false,
  ethAddress: '',
  loomAddress: '',
  dappsChainPrivateKeyBase64: '',
  isLoggingIn: true
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
  SET_HAS_WALLET(state, hasWallet) {
    state.hasWallet = hasWallet
    this.$cookies.set('mch-beta:has_wallet', hasWallet)
  },
  SET_ETH_ADDRESS(state, address) {
    state.ethAddress = address
  },
  SET_LOOM_ADDRESS(state, address) {
    state.loomAddress = address
    this.$cookies.set('mch-beta:loom_address', address)
  },
  SET_PRIVATE_KEY(state, key) {
    state.dappsChainPrivateKeyBase64 = key
  },
  DELETE_PRIVATE_KEYS(state) {
    state.dappsChainPrivateKeyBase64 = null
    this.$cookies.remove('mch-beta:has_wallet')
    this.$cookies.remove('mch-beta:loom_address')
  },
  SET_IS_LOGGING_IN(state, isLoggingIn) {
    state.isLoggingIn = isLoggingIn
  }
}

export const actions = {
  async nuxtServerInit({ commit }) {
    const env = await this.$axios.$get('/config/env.json')
    commit('SET_ENV', env)
  },
  checkLoggedIn({ state, commit }) {
    if (!state.hasWallet) {
      commit('SET_IS_LOGGING_IN', false)
      return false
    }
    const storageKeyName = `mch-beta-${state.ethAddress}:loom_key`
    const key = window && window.localStorage.getItem(storageKeyName)
    commit('SET_PRIVATE_KEY', key)
    commit('SET_IS_LOGGING_IN', false)
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
    this.$cookies.set('mch-beta:has_wallet', true)
    this.$cookies.set('mch-beta:loom_address', 'LOOM_ADDRESS')
    window && window.location.reload()
  },
  async logout({ commit }) {
    Array.from(Array(window.localStorage.length).keys())
      .map(index => window.localStorage.key(index))
      .filter(key => key.startsWith('mch-beta-'))
      .forEach(key => window.localStorage.removeItem(key))
    commit('DELETE_PRIVATE_KEYS')
  }
}
