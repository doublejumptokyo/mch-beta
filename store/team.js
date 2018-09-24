import skillsData from '~/assets/data/skills.json'

export const state = () => []

export const getters = {
  units(state) {
    return Array.from(Array(3).keys()).map(index => state[`unit${index + 1}`])
  },
  newUnits(state) {
    return Array.from(Array(3).keys()).map(index => state[index])
  },
  getSkill() {
    return skillId => skillsData.find(skill => skill.id === skillId)
  }
}

export const mutations = {
  SET_TEAM(state, team) {
    team.forEach(unit => state.push(unit))
    // team.forEach((unit, i) => {
    //   // team.push({
    //   //   unit: unit.filter((id, index) => index < 3),
    //   //   skillOrder: unit.filter((id, index) => index > 2)
    //   // })
    //   state[i] = {
    //     unit: unit.filter((id, index) => index < 3),
    //     skillOrder: unit.filter((id, index) => index > 2)
    //   }
    // })
    // Array.from(Array(3).keys()).forEach(index => {
    //   state[`unit${index + 1}`] = team[`unit${index + 1}`]
    //   state[index] = team[index]
    //   state.ids.push(team[`unit${index + 1}`])
    // })
  },
  SET_IDS(state, { index, newIds }) {
    state[index] = newIds
  }
}
