export const state = () => ({
  name: ''
})

export const mutations = {
  SET_NAME(state, name) {
    state.name = name
  }
}
