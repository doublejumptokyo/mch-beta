import skillsData from '~/assets/data/skills.json'

export const state = () => ({
  units: []
})

export const getters = {
  units(state) {
    return Array.from(Array(3).keys()).map(index => state[`unit${index + 1}`])
  },
  newUnits(state) {
    // return Array.from(Array(3).keys()).map(index => state[index])
    return Array.from(Array(3).keys()).map(index => state.units[index])
  },
  getSkill() {
    return skillId => skillsData.find(skill => skill.id === skillId)
  }
}

export const mutations = {
  SET_TEAM(state, team) {
    // team.forEach(unit => state.push(unit))
    state.units = team
  },
  SET_IDS(state, { index, newIds }) {
    state.units[index] = newIds
  },
  UPDATE_HERO(state, { index, id }) {
    state.units[index][0] = id
  }
}
