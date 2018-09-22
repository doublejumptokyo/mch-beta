export const state = () => ({
  myTeam: [
    {
      hp: 2000,
      maxHp: 2000,
      imageUrl: require('~/assets/images/heroes/003.png')
    },
    {
      hp: 2000,
      maxHp: 2000,
      imageUrl: require('~/assets/images/heroes/004.png')
    },
    {
      hp: 2000,
      maxHp: 2000,
      imageUrl: require('~/assets/images/heroes/006.png')
    }
  ],
  opponentTeam: [
    {
      hp: 2000,
      maxHp: 2000,
      imageUrl: require('~/assets/images/character-1.png')
    },
    {
      hp: 2000,
      maxHp: 2000,
      imageUrl: require('~/assets/images/character-4.png')
    },
    {
      hp: 2000,
      maxHp: 2000,
      imageUrl: require('~/assets/images/heroes/009.png')
    }
  ],
  initial: [
    {
      position: 1,
      heroId: 1,
      item1Id: 1,
      item2Id: 2,
      maxHp: 2000,
      hp: 2000,
      phy: 100,
      int: 100,
      agi: 100
    },
    {
      position: 2,
      heroId: 2,
      item1Id: 1,
      item2Id: 2,
      maxHp: 2000,
      hp: 2000,
      phy: 100,
      int: 100,
      agi: 100
    },
    {
      position: 3,
      heroId: 3,
      item1Id: 1,
      item2Id: 2,
      maxHp: 2000,
      hp: 2000,
      phy: 100,
      int: 100,
      agi: 100
    },
    {
      position: 4,
      heroId: 4,
      item1Id: 1,
      item2Id: 2,
      maxHp: 2000,
      hp: 2000,
      phy: 100,
      int: 100,
      agi: 100
    },
    {
      position: 5,
      heroId: 5,
      item1Id: 1,
      item2Id: 2,
      maxHp: 2000,
      hp: 2000,
      phy: 100,
      int: 100,
      agi: 100
    },
    {
      position: 6,
      heroId: 6,
      item1Id: 1,
      item2Id: 2,
      maxHp: 2000,
      hp: 2000,
      phy: 100,
      int: 100,
      agi: 100
    }
  ],
  actions: [
    {
      actionCount: 0,
      skillId: 1,
      actionPosition: 1,
      effectPositions: [1],
      data: 1
    },
    {
      actionCount: 0,
      skillId: 1,
      actionPosition: 1,
      effectPositions: [1],
      data: 1
    }
  ]
})

export const getters = {
  getStatus(state) {
    return (team, index, type) => {
      return state[team][index][type]
    }
  }
}
