export const state = () => []

export const getters = {
  get(state) {
    return id => state.find(extension => extension.id === id)
  }
}

export const mutations = {
  SET_EXTENSION(state, extension) {
    state.push(extension)
  }
}
