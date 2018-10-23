export const state = () => []

export const getters = {
  get(state) {
    return id => state.find(hero => hero.id === id)
  }
}

export const mutations = {
  SET_HERO(state, hero) {
    state.push(hero)
  }
}
