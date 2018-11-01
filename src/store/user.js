export const state = () => ({
  name: ''
})

export const mutations = {
  SET_NAME(state, name) {
    state.name = name
  }
}

export const actions = {
  async rename({ commit }, name) {
    await this.$user.setName(name)
    commit('SET_NAME', name)
  }
}
