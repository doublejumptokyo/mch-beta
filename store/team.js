export const state = () => ({
  unit1: null,
  unit2: null,
  unit3: null
})

export const getters = {
  units(state) {
    return Array.from(Array(3).keys()).map(index => state[`unit${index + 1}`])
  }
}

export const mutations = {
  SET_TEAM(state, team) {
    state.unit1 = team.unit1
    state.unit2 = team.unit2
    state.unit3 = team.unit3
  }
}
