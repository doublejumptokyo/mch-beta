export const state = () => [
  {
    id: 1,
    name: 'Awesome Team 1',
    positions: [
      {
        id: 1,
        hero: 1,
        item1: 1,
        item2: 2,
        activeSkillOrder: ['hero', 'item1', 'item2']
      },
      {
        id: 2,
        hero: 2,
        item1: 3,
        item2: 4,
        activeSkillOrder: ['hero', 'item1', 'item2']
      },
      {
        id: 3,
        hero: 3,
        item1: 5,
        item2: 6,
        activeSkillOrder: ['hero', 'item1', 'item2']
      }
    ]
  },
  {
    id: 2,
    name: 'Awesome Team 2',
    positions: [
      {
        id: 1,
        hero: 4,
        item1: 7,
        item2: 8,
        activeSkillOrder: ['hero', 'item1', 'item2']
      },
      {
        id: 2,
        hero: 5,
        item1: 9,
        item2: 10,
        activeSkillOrder: ['hero', 'item1', 'item2']
      },
      {
        id: 3,
        hero: 6,
        item1: 11,
        item2: 12,
        activeSkillOrder: ['hero', 'item1', 'item2']
      }
    ]
  },
  {
    id: 3,
    name: 'Awesome Team 3',
    positions: [
      {
        id: 1,
        hero: 7,
        item1: 13,
        item2: 14,
        activeSkillOrder: ['hero', 'item1', 'item2']
      },
      {
        id: 2,
        hero: 8,
        item1: 15,
        item2: 16,
        activeSkillOrder: ['hero', 'item1', 'item2']
      },
      {
        id: 3,
        hero: 9,
        item1: 1,
        item2: 2,
        activeSkillOrder: ['hero', 'item1', 'item2']
      }
    ]
  }
]

export const getters = {
  getStatus(state, getters, rootState) {
    return (teamId, positionId) => {
      const team = state.find(team => team.id === teamId)
      const position = team.positions.find(
        position => position.id === positionId
      )
      const hero = rootState.heroes.find(hero => hero.id === position.hero)
      const item1 = rootState.items.find(item => item.id === position.item1)
      const item2 = rootState.items.find(item => item.id === position.item2)
      return {
        hp: hero.status.hp,
        agi: hero.status.agi + item1.status.agi + item2.status.agi,
        phy: hero.status.phy + item1.status.phy + item2.status.phy,
        int: hero.status.int + item1.status.int + item2.status.int
      }
    }
  }
}

export const mutations = {
  CHANGE_POSITION(state, payload) {
    const team = state.find(team => team.id === payload.id)
    team.positions = payload.positions
  },
  CHANGE_POSITION_CONTENT(state, payload) {
    const team = state.find(team => team.id === payload.team.id)
    const position = team.positions.find(
      position => position.id === payload.position.id
    )
    position.hero = payload.hero.id
    position.item1 = payload.item1.id
    position.item2 = payload.item2.id
    position.activeSkillOrder = [].concat(payload.activeSkillOrder)
  }
}
