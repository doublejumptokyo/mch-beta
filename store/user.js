export const state = () => ({
  walletAddress: ''
})

export const mutations = {
  SET_ADDRESS(state, address) {
    state.walletAddress = address
  }
}
