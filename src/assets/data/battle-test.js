export let start = {
  battleId: 1,
  units: [
    {
      position: 0,
      heroId: 1001,
      itemId1: 1002,
      itemId2: 1003,
      maxHp: 500,
      hp: 500,
      phy: 100,
      int: 50,
      agi: 50,
      active1: 1,
      active2: 2,
      active3: 1,
      passive: 100
    },
    {
      position: 1,
      heroId: 2001,
      itemId1: 2002,
      itemId2: 2003,
      maxHp: 300,
      hp: 300,
      phy: 120,
      int: 30,
      agi: 50,
      active1: 2,
      active2: 1,
      active3: 2,
      passive: 100
    },
    {
      position: 2,
      heroId: 3001,
      itemId1: 3002,
      itemId2: 3003,
      maxHp: 300,
      hp: 300,
      phy: 50,
      int: 100,
      agi: 50,
      active1: 11,
      active2: 12,
      active3: 21,
      passive: 100
    },
    {
      position: 3,
      heroId: 4001,
      itemId1: 4002,
      itemId2: 4003,
      maxHp: 500,
      hp: 500,
      phy: 100,
      int: 50,
      agi: 50,
      active1: 1,
      active2: 1,
      active3: 1,
      passive: 100
    },
    {
      position: 4,
      heroId: 5001,
      itemId1: 5002,
      itemId2: 5003,
      maxHp: 400,
      hp: 400,
      phy: 130,
      int: 40,
      agi: 30,
      active1: 2,
      active2: 2,
      active3: 2,
      passive: 100
    },
    {
      position: 5,
      heroId: 6001,
      itemId1: 6002,
      itemId2: 6003,
      maxHp: 300,
      hp: 300,
      phy: 20,
      int: 150,
      agi: 30,
      active1: 12,
      active2: 11,
      active3: 22,
      passive: 100
    }
  ]
}
export let actions = []
actions[1] = {
  battleId: 1,
  actionCounts: 1,
  skillId: 1,
  actionPosition: 0,
  effectPositions: [3],
  units: [
    {
      position: 0,
      hp: 500,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 0,
      status: 0,
      activeCounts: 1,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 1,
      hp: 300,
      phy: 120,
      int: 30,
      agi: 50,
      charge: 1050,
      status: 0,
      activeCounts: 0,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 2,
      hp: 300,
      phy: 50,
      int: 100,
      agi: 50,
      charge: 1050,
      status: 0,
      activeCounts: 0,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 3,
      hp: 440,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 1050,
      status: 0,
      activeCounts: 0,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 4,
      hp: 400,
      phy: 130,
      int: 40,
      agi: 30,
      charge: 910,
      status: 0,
      activeCounts: 0,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 5,
      hp: 300,
      phy: 20,
      int: 150,
      agi: 30,
      charge: 910,
      status: 0,
      activeCounts: 0,
      passiveEnabled: 0,
      extra: 0
    }
  ]
}
actions[2] = {
  battleId: 1,
  actionCounts: 2,
  skillId: 2,
  actionPosition: 1,
  effectPositions: [3, 4, 5],
  units: [
    {
      position: 0,
      hp: 500,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 0,
      status: 0,
      activeCounts: 1,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 1,
      hp: 300,
      phy: 120,
      int: 30,
      agi: 50,
      charge: 0,
      status: 0,
      activeCounts: 1,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 2,
      hp: 300,
      phy: 50,
      int: 100,
      agi: 50,
      charge: 1050,
      status: 0,
      activeCounts: 0,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 3,
      hp: 412,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 1050,
      status: 0,
      activeCounts: 0,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 4,
      hp: 372,
      phy: 130,
      int: 40,
      agi: 30,
      charge: 910,
      status: 0,
      activeCounts: 0,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 5,
      hp: 257,
      phy: 20,
      int: 150,
      agi: 30,
      charge: 910,
      status: 0,
      activeCounts: 0,
      passiveEnabled: 0,
      extra: 0
    }
  ]
}
actions[3] = {
  battleId: 1,
  actionCounts: 3,
  skillId: 11,
  actionPosition: 2,
  effectPositions: [3],
  units: [
    {
      position: 0,
      hp: 500,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 0,
      status: 0,
      activeCounts: 1,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 1,
      hp: 300,
      phy: 120,
      int: 30,
      agi: 50,
      charge: 0,
      status: 0,
      activeCounts: 1,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 2,
      hp: 300,
      phy: 50,
      int: 100,
      agi: 50,
      charge: 0,
      status: 0,
      activeCounts: 1,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 3,
      hp: 337,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 1050,
      status: 0,
      activeCounts: 0,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 4,
      hp: 372,
      phy: 130,
      int: 40,
      agi: 30,
      charge: 910,
      status: 0,
      activeCounts: 0,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 5,
      hp: 257,
      phy: 20,
      int: 150,
      agi: 30,
      charge: 910,
      status: 0,
      activeCounts: 0,
      passiveEnabled: 0,
      extra: 0
    }
  ]
}
actions[4] = {
  battleId: 1,
  actionCounts: 4,
  skillId: 1,
  actionPosition: 3,
  effectPositions: [0],
  units: [
    {
      position: 0,
      hp: 440,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 0,
      status: 0,
      activeCounts: 1,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 1,
      hp: 300,
      phy: 120,
      int: 30,
      agi: 50,
      charge: 0,
      status: 0,
      activeCounts: 1,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 2,
      hp: 300,
      phy: 50,
      int: 100,
      agi: 50,
      charge: 0,
      status: 0,
      activeCounts: 1,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 3,
      hp: 337,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 0,
      status: 0,
      activeCounts: 1,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 4,
      hp: 372,
      phy: 130,
      int: 40,
      agi: 30,
      charge: 910,
      status: 0,
      activeCounts: 0,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 5,
      hp: 257,
      phy: 20,
      int: 150,
      agi: 30,
      charge: 910,
      status: 0,
      activeCounts: 0,
      passiveEnabled: 0,
      extra: 0
    }
  ]
}
actions[5] = {
  battleId: 1,
  actionCounts: 5,
  skillId: 2,
  actionPosition: 4,
  effectPositions: [0, 1, 2],
  units: [
    {
      position: 0,
      hp: 409,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 150,
      status: 0,
      activeCounts: 1,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 1,
      hp: 269,
      phy: 120,
      int: 30,
      agi: 50,
      charge: 150,
      status: 0,
      activeCounts: 1,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 2,
      hp: 261,
      phy: 50,
      int: 100,
      agi: 50,
      charge: 150,
      status: 0,
      activeCounts: 1,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 3,
      hp: 337,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 150,
      status: 0,
      activeCounts: 1,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 4,
      hp: 372,
      phy: 130,
      int: 40,
      agi: 30,
      charge: 0,
      status: 0,
      activeCounts: 1,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 5,
      hp: 257,
      phy: 20,
      int: 150,
      agi: 30,
      charge: 1040,
      status: 0,
      activeCounts: 0,
      passiveEnabled: 0,
      extra: 0
    }
  ]
}
actions[6] = {
  battleId: 1,
  actionCounts: 6,
  skillId: 12,
  actionPosition: 5,
  effectPositions: [0, 1, 2],
  units: [
    {
      position: 0,
      hp: 364,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 150,
      status: 0,
      activeCounts: 1,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 1,
      hp: 218,
      phy: 120,
      int: 30,
      agi: 50,
      charge: 150,
      status: 0,
      activeCounts: 1,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 2,
      hp: 225,
      phy: 50,
      int: 100,
      agi: 50,
      charge: 150,
      status: 0,
      activeCounts: 1,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 3,
      hp: 337,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 150,
      status: 0,
      activeCounts: 1,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 4,
      hp: 372,
      phy: 130,
      int: 40,
      agi: 30,
      charge: 0,
      status: 0,
      activeCounts: 1,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 5,
      hp: 257,
      phy: 20,
      int: 150,
      agi: 30,
      charge: 0,
      status: 0,
      activeCounts: 1,
      passiveEnabled: 0,
      extra: 0
    }
  ]
}
actions[7] = {
  battleId: 1,
  actionCounts: 7,
  skillId: 2,
  actionPosition: 0,
  effectPositions: [3, 4, 5],
  units: [
    {
      position: 0,
      hp: 364,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 0,
      status: 0,
      activeCounts: 2,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 1,
      hp: 218,
      phy: 120,
      int: 30,
      agi: 50,
      charge: 1050,
      status: 0,
      activeCounts: 1,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 2,
      hp: 225,
      phy: 50,
      int: 100,
      agi: 50,
      charge: 1050,
      status: 0,
      activeCounts: 1,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 3,
      hp: 313,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 1050,
      status: 0,
      activeCounts: 1,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 4,
      hp: 348,
      phy: 130,
      int: 40,
      agi: 30,
      charge: 780,
      status: 0,
      activeCounts: 1,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 5,
      hp: 221,
      phy: 20,
      int: 150,
      agi: 30,
      charge: 780,
      status: 0,
      activeCounts: 1,
      passiveEnabled: 0,
      extra: 0
    }
  ]
}
actions[8] = {
  battleId: 1,
  actionCounts: 8,
  skillId: 1,
  actionPosition: 1,
  effectPositions: [3],
  units: [
    {
      position: 0,
      hp: 364,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 0,
      status: 0,
      activeCounts: 2,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 1,
      hp: 218,
      phy: 120,
      int: 30,
      agi: 50,
      charge: 0,
      status: 0,
      activeCounts: 2,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 2,
      hp: 225,
      phy: 50,
      int: 100,
      agi: 50,
      charge: 1050,
      status: 0,
      activeCounts: 1,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 3,
      hp: 241,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 1050,
      status: 0,
      activeCounts: 1,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 4,
      hp: 348,
      phy: 130,
      int: 40,
      agi: 30,
      charge: 780,
      status: 0,
      activeCounts: 1,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 5,
      hp: 221,
      phy: 20,
      int: 150,
      agi: 30,
      charge: 780,
      status: 0,
      activeCounts: 1,
      passiveEnabled: 0,
      extra: 0
    }
  ]
}
actions[9] = {
  battleId: 1,
  actionCounts: 9,
  skillId: 12,
  actionPosition: 2,
  effectPositions: [3, 4, 5],
  units: [
    {
      position: 0,
      hp: 364,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 0,
      status: 0,
      activeCounts: 2,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 1,
      hp: 218,
      phy: 120,
      int: 30,
      agi: 50,
      charge: 0,
      status: 0,
      activeCounts: 2,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 2,
      hp: 225,
      phy: 50,
      int: 100,
      agi: 50,
      charge: 0,
      status: 0,
      activeCounts: 2,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 3,
      hp: 211,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 1050,
      status: 0,
      activeCounts: 1,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 4,
      hp: 316,
      phy: 130,
      int: 40,
      agi: 30,
      charge: 780,
      status: 0,
      activeCounts: 1,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 5,
      hp: 197,
      phy: 20,
      int: 150,
      agi: 30,
      charge: 780,
      status: 0,
      activeCounts: 1,
      passiveEnabled: 0,
      extra: 0
    }
  ]
}
actions[10] = {
  battleId: 1,
  actionCounts: 10,
  skillId: 1,
  actionPosition: 3,
  effectPositions: [0],
  units: [
    {
      position: 0,
      hp: 304,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 0,
      status: 0,
      activeCounts: 2,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 1,
      hp: 218,
      phy: 120,
      int: 30,
      agi: 50,
      charge: 0,
      status: 0,
      activeCounts: 2,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 2,
      hp: 225,
      phy: 50,
      int: 100,
      agi: 50,
      charge: 0,
      status: 0,
      activeCounts: 2,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 3,
      hp: 211,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 0,
      status: 0,
      activeCounts: 2,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 4,
      hp: 316,
      phy: 130,
      int: 40,
      agi: 30,
      charge: 780,
      status: 0,
      activeCounts: 1,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 5,
      hp: 197,
      phy: 20,
      int: 150,
      agi: 30,
      charge: 780,
      status: 0,
      activeCounts: 1,
      passiveEnabled: 0,
      extra: 0
    }
  ]
}
actions[11] = {
  battleId: 1,
  actionCounts: 11,
  skillId: 2,
  actionPosition: 4,
  effectPositions: [0, 1, 2],
  units: [
    {
      position: 0,
      hp: 273,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 300,
      status: 0,
      activeCounts: 2,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 1,
      hp: 187,
      phy: 120,
      int: 30,
      agi: 50,
      charge: 300,
      status: 0,
      activeCounts: 2,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 2,
      hp: 186,
      phy: 50,
      int: 100,
      agi: 50,
      charge: 300,
      status: 0,
      activeCounts: 2,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 3,
      hp: 211,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 300,
      status: 0,
      activeCounts: 2,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 4,
      hp: 316,
      phy: 130,
      int: 40,
      agi: 30,
      charge: 0,
      status: 0,
      activeCounts: 2,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 5,
      hp: 197,
      phy: 20,
      int: 150,
      agi: 30,
      charge: 1040,
      status: 0,
      activeCounts: 1,
      passiveEnabled: 0,
      extra: 0
    }
  ]
}
actions[12] = {
  battleId: 1,
  actionCounts: 12,
  skillId: 11,
  actionPosition: 5,
  effectPositions: [0],
  units: [
    {
      position: 0,
      hp: 161,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 300,
      status: 0,
      activeCounts: 2,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 1,
      hp: 187,
      phy: 120,
      int: 30,
      agi: 50,
      charge: 300,
      status: 0,
      activeCounts: 2,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 2,
      hp: 186,
      phy: 50,
      int: 100,
      agi: 50,
      charge: 300,
      status: 0,
      activeCounts: 2,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 3,
      hp: 211,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 300,
      status: 0,
      activeCounts: 2,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 4,
      hp: 316,
      phy: 130,
      int: 40,
      agi: 30,
      charge: 0,
      status: 0,
      activeCounts: 2,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 5,
      hp: 197,
      phy: 20,
      int: 150,
      agi: 30,
      charge: 0,
      status: 0,
      activeCounts: 2,
      passiveEnabled: 0,
      extra: 0
    }
  ]
}
actions[13] = {
  battleId: 1,
  actionCounts: 13,
  skillId: 1,
  actionPosition: 0,
  effectPositions: [3],
  units: [
    {
      position: 0,
      hp: 161,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 0,
      status: 0,
      activeCounts: 3,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 1,
      hp: 187,
      phy: 120,
      int: 30,
      agi: 50,
      charge: 1050,
      status: 0,
      activeCounts: 2,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 2,
      hp: 186,
      phy: 50,
      int: 100,
      agi: 50,
      charge: 1050,
      status: 0,
      activeCounts: 2,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 3,
      hp: 151,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 1050,
      status: 0,
      activeCounts: 2,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 4,
      hp: 316,
      phy: 130,
      int: 40,
      agi: 30,
      charge: 650,
      status: 0,
      activeCounts: 2,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 5,
      hp: 197,
      phy: 20,
      int: 150,
      agi: 30,
      charge: 650,
      status: 0,
      activeCounts: 2,
      passiveEnabled: 0,
      extra: 0
    }
  ]
}
actions[14] = {
  battleId: 1,
  actionCounts: 14,
  skillId: 2,
  actionPosition: 1,
  effectPositions: [3, 4, 5],
  units: [
    {
      position: 0,
      hp: 161,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 0,
      status: 0,
      activeCounts: 3,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 1,
      hp: 187,
      phy: 120,
      int: 30,
      agi: 50,
      charge: 0,
      status: 0,
      activeCounts: 3,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 2,
      hp: 186,
      phy: 50,
      int: 100,
      agi: 50,
      charge: 1050,
      status: 0,
      activeCounts: 2,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 3,
      hp: 123,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 1050,
      status: 0,
      activeCounts: 2,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 4,
      hp: 288,
      phy: 130,
      int: 40,
      agi: 30,
      charge: 650,
      status: 0,
      activeCounts: 2,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 5,
      hp: 154,
      phy: 20,
      int: 150,
      agi: 30,
      charge: 650,
      status: 0,
      activeCounts: 2,
      passiveEnabled: 0,
      extra: 0
    }
  ]
}
actions[15] = {
  battleId: 1,
  actionCounts: 15,
  skillId: 21,
  actionPosition: 2,
  effectPositions: [0],
  units: [
    {
      position: 0,
      hp: 261,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 0,
      status: 0,
      activeCounts: 3,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 1,
      hp: 187,
      phy: 120,
      int: 30,
      agi: 50,
      charge: 0,
      status: 0,
      activeCounts: 3,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 2,
      hp: 186,
      phy: 50,
      int: 100,
      agi: 50,
      charge: 0,
      status: 0,
      activeCounts: 3,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 3,
      hp: 123,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 1050,
      status: 0,
      activeCounts: 2,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 4,
      hp: 288,
      phy: 130,
      int: 40,
      agi: 30,
      charge: 650,
      status: 0,
      activeCounts: 2,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 5,
      hp: 154,
      phy: 20,
      int: 150,
      agi: 30,
      charge: 650,
      status: 0,
      activeCounts: 2,
      passiveEnabled: 0,
      extra: 0
    }
  ]
}
actions[16] = {
  battleId: 1,
  actionCounts: 16,
  skillId: 1,
  actionPosition: 3,
  effectPositions: [0],
  units: [
    {
      position: 0,
      hp: 201,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 0,
      status: 0,
      activeCounts: 3,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 1,
      hp: 187,
      phy: 120,
      int: 30,
      agi: 50,
      charge: 0,
      status: 0,
      activeCounts: 3,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 2,
      hp: 186,
      phy: 50,
      int: 100,
      agi: 50,
      charge: 0,
      status: 0,
      activeCounts: 3,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 3,
      hp: 123,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 0,
      status: 0,
      activeCounts: 3,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 4,
      hp: 288,
      phy: 130,
      int: 40,
      agi: 30,
      charge: 650,
      status: 0,
      activeCounts: 2,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 5,
      hp: 154,
      phy: 20,
      int: 150,
      agi: 30,
      charge: 650,
      status: 0,
      activeCounts: 2,
      passiveEnabled: 0,
      extra: 0
    }
  ]
}
actions[17] = {
  battleId: 1,
  actionCounts: 17,
  skillId: 2,
  actionPosition: 4,
  effectPositions: [0, 1, 2],
  units: [
    {
      position: 0,
      hp: 170,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 450,
      status: 0,
      activeCounts: 3,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 1,
      hp: 156,
      phy: 120,
      int: 30,
      agi: 50,
      charge: 450,
      status: 0,
      activeCounts: 3,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 2,
      hp: 147,
      phy: 50,
      int: 100,
      agi: 50,
      charge: 450,
      status: 0,
      activeCounts: 3,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 3,
      hp: 123,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 450,
      status: 0,
      activeCounts: 3,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 4,
      hp: 288,
      phy: 130,
      int: 40,
      agi: 30,
      charge: 0,
      status: 0,
      activeCounts: 3,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 5,
      hp: 154,
      phy: 20,
      int: 150,
      agi: 30,
      charge: 1040,
      status: 0,
      activeCounts: 2,
      passiveEnabled: 0,
      extra: 0
    }
  ]
}
actions[18] = {
  battleId: 1,
  actionCounts: 18,
  skillId: 22,
  actionPosition: 5,
  effectPositions: [3, 4, 5],
  units: [
    {
      position: 0,
      hp: 170,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 450,
      status: 0,
      activeCounts: 3,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 1,
      hp: 156,
      phy: 120,
      int: 30,
      agi: 50,
      charge: 450,
      status: 0,
      activeCounts: 3,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 2,
      hp: 147,
      phy: 50,
      int: 100,
      agi: 50,
      charge: 450,
      status: 0,
      activeCounts: 3,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 3,
      hp: 173,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 450,
      status: 0,
      activeCounts: 3,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 4,
      hp: 344,
      phy: 130,
      int: 40,
      agi: 30,
      charge: 0,
      status: 0,
      activeCounts: 3,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 5,
      hp: 188,
      phy: 20,
      int: 150,
      agi: 30,
      charge: 0,
      status: 0,
      activeCounts: 3,
      passiveEnabled: 0,
      extra: 0
    }
  ]
}
actions[19] = {
  battleId: 1,
  actionCounts: 19,
  skillId: 1,
  actionPosition: 0,
  effectPositions: [3],
  units: [
    {
      position: 0,
      hp: 170,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 0,
      status: 0,
      activeCounts: 4,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 1,
      hp: 156,
      phy: 120,
      int: 30,
      agi: 50,
      charge: 1050,
      status: 0,
      activeCounts: 3,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 2,
      hp: 147,
      phy: 50,
      int: 100,
      agi: 50,
      charge: 1050,
      status: 0,
      activeCounts: 3,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 3,
      hp: 113,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 1050,
      status: 0,
      activeCounts: 3,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 4,
      hp: 344,
      phy: 130,
      int: 40,
      agi: 30,
      charge: 520,
      status: 0,
      activeCounts: 3,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 5,
      hp: 188,
      phy: 20,
      int: 150,
      agi: 30,
      charge: 520,
      status: 0,
      activeCounts: 3,
      passiveEnabled: 0,
      extra: 0
    }
  ]
}
actions[20] = {
  battleId: 1,
  actionCounts: 20,
  skillId: 2,
  actionPosition: 1,
  effectPositions: [3, 4, 5],
  units: [
    {
      position: 0,
      hp: 170,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 0,
      status: 0,
      activeCounts: 4,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 1,
      hp: 156,
      phy: 120,
      int: 30,
      agi: 50,
      charge: 0,
      status: 0,
      activeCounts: 4,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 2,
      hp: 147,
      phy: 50,
      int: 100,
      agi: 50,
      charge: 1050,
      status: 0,
      activeCounts: 3,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 3,
      hp: 85,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 1050,
      status: 0,
      activeCounts: 3,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 4,
      hp: 316,
      phy: 130,
      int: 40,
      agi: 30,
      charge: 520,
      status: 0,
      activeCounts: 3,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 5,
      hp: 145,
      phy: 20,
      int: 150,
      agi: 30,
      charge: 520,
      status: 0,
      activeCounts: 3,
      passiveEnabled: 0,
      extra: 0
    }
  ]
}
actions[21] = {
  battleId: 1,
  actionCounts: 21,
  skillId: 11,
  actionPosition: 2,
  effectPositions: [3],
  units: [
    {
      position: 0,
      hp: 170,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 0,
      status: 0,
      activeCounts: 4,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 1,
      hp: 156,
      phy: 120,
      int: 30,
      agi: 50,
      charge: 0,
      status: 0,
      activeCounts: 4,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 2,
      hp: 147,
      phy: 50,
      int: 100,
      agi: 50,
      charge: 0,
      status: 0,
      activeCounts: 4,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 3,
      hp: 10,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 1050,
      status: 0,
      activeCounts: 3,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 4,
      hp: 316,
      phy: 130,
      int: 40,
      agi: 30,
      charge: 520,
      status: 0,
      activeCounts: 3,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 5,
      hp: 145,
      phy: 20,
      int: 150,
      agi: 30,
      charge: 520,
      status: 0,
      activeCounts: 3,
      passiveEnabled: 0,
      extra: 0
    }
  ]
}
actions[22] = {
  battleId: 1,
  actionCounts: 22,
  skillId: 1,
  actionPosition: 3,
  effectPositions: [0],
  units: [
    {
      position: 0,
      hp: 110,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 0,
      status: 0,
      activeCounts: 4,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 1,
      hp: 156,
      phy: 120,
      int: 30,
      agi: 50,
      charge: 0,
      status: 0,
      activeCounts: 4,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 2,
      hp: 147,
      phy: 50,
      int: 100,
      agi: 50,
      charge: 0,
      status: 0,
      activeCounts: 4,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 3,
      hp: 10,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 0,
      status: 0,
      activeCounts: 4,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 4,
      hp: 316,
      phy: 130,
      int: 40,
      agi: 30,
      charge: 520,
      status: 0,
      activeCounts: 3,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 5,
      hp: 145,
      phy: 20,
      int: 150,
      agi: 30,
      charge: 520,
      status: 0,
      activeCounts: 3,
      passiveEnabled: 0,
      extra: 0
    }
  ]
}
actions[23] = {
  battleId: 1,
  actionCounts: 23,
  skillId: 2,
  actionPosition: 4,
  effectPositions: [0, 1, 2],
  units: [
    {
      position: 0,
      hp: 79,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 600,
      status: 0,
      activeCounts: 4,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 1,
      hp: 125,
      phy: 120,
      int: 30,
      agi: 50,
      charge: 600,
      status: 0,
      activeCounts: 4,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 2,
      hp: 108,
      phy: 50,
      int: 100,
      agi: 50,
      charge: 600,
      status: 0,
      activeCounts: 4,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 3,
      hp: 10,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 600,
      status: 0,
      activeCounts: 4,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 4,
      hp: 316,
      phy: 130,
      int: 40,
      agi: 30,
      charge: 0,
      status: 0,
      activeCounts: 4,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 5,
      hp: 145,
      phy: 20,
      int: 150,
      agi: 30,
      charge: 1040,
      status: 0,
      activeCounts: 3,
      passiveEnabled: 0,
      extra: 0
    }
  ]
}
actions[24] = {
  battleId: 1,
  actionCounts: 24,
  skillId: 12,
  actionPosition: 5,
  effectPositions: [0, 1, 2],
  units: [
    {
      position: 0,
      hp: 34,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 600,
      status: 0,
      activeCounts: 4,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 1,
      hp: 74,
      phy: 120,
      int: 30,
      agi: 50,
      charge: 600,
      status: 0,
      activeCounts: 4,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 2,
      hp: 72,
      phy: 50,
      int: 100,
      agi: 50,
      charge: 600,
      status: 0,
      activeCounts: 4,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 3,
      hp: 10,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 600,
      status: 0,
      activeCounts: 4,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 4,
      hp: 316,
      phy: 130,
      int: 40,
      agi: 30,
      charge: 0,
      status: 0,
      activeCounts: 4,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 5,
      hp: 145,
      phy: 20,
      int: 150,
      agi: 30,
      charge: 0,
      status: 0,
      activeCounts: 4,
      passiveEnabled: 0,
      extra: 0
    }
  ]
}
actions[25] = {
  battleId: 1,
  actionCounts: 25,
  skillId: 2,
  actionPosition: 0,
  effectPositions: [3, 4, 5],
  units: [
    {
      position: 0,
      hp: 34,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 0,
      status: 0,
      activeCounts: 5,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 1,
      hp: 74,
      phy: 120,
      int: 30,
      agi: 50,
      charge: 1050,
      status: 0,
      activeCounts: 4,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 2,
      hp: 72,
      phy: 50,
      int: 100,
      agi: 50,
      charge: 1050,
      status: 0,
      activeCounts: 4,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 3,
      hp: 0,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 1050,
      status: 0,
      activeCounts: 4,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 4,
      hp: 292,
      phy: 130,
      int: 40,
      agi: 30,
      charge: 390,
      status: 0,
      activeCounts: 4,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 5,
      hp: 109,
      phy: 20,
      int: 150,
      agi: 30,
      charge: 390,
      status: 0,
      activeCounts: 4,
      passiveEnabled: 0,
      extra: 0
    }
  ]
}
actions[26] = {
  battleId: 1,
  actionCounts: 26,
  skillId: 1,
  actionPosition: 1,
  effectPositions: [4],
  units: [
    {
      position: 0,
      hp: 34,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 0,
      status: 0,
      activeCounts: 5,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 1,
      hp: 74,
      phy: 120,
      int: 30,
      agi: 50,
      charge: 0,
      status: 0,
      activeCounts: 5,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 2,
      hp: 72,
      phy: 50,
      int: 100,
      agi: 50,
      charge: 1050,
      status: 0,
      activeCounts: 4,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 3,
      hp: 0,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 1050,
      status: 0,
      activeCounts: 4,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 4,
      hp: 220,
      phy: 130,
      int: 40,
      agi: 30,
      charge: 390,
      status: 0,
      activeCounts: 4,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 5,
      hp: 109,
      phy: 20,
      int: 150,
      agi: 30,
      charge: 390,
      status: 0,
      activeCounts: 4,
      passiveEnabled: 0,
      extra: 0
    }
  ]
}
actions[27] = {
  battleId: 1,
  actionCounts: 27,
  skillId: 12,
  actionPosition: 2,
  effectPositions: [4, 5],
  units: [
    {
      position: 0,
      hp: 34,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 0,
      status: 0,
      activeCounts: 5,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 1,
      hp: 74,
      phy: 120,
      int: 30,
      agi: 50,
      charge: 0,
      status: 0,
      activeCounts: 5,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 2,
      hp: 72,
      phy: 50,
      int: 100,
      agi: 50,
      charge: 0,
      status: 0,
      activeCounts: 5,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 3,
      hp: 0,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 1050,
      status: 0,
      activeCounts: 4,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 4,
      hp: 188,
      phy: 130,
      int: 40,
      agi: 30,
      charge: 390,
      status: 0,
      activeCounts: 4,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 5,
      hp: 85,
      phy: 20,
      int: 150,
      agi: 30,
      charge: 390,
      status: 0,
      activeCounts: 4,
      passiveEnabled: 0,
      extra: 0
    }
  ]
}
actions[28] = {
  battleId: 1,
  actionCounts: 28,
  skillId: 2,
  actionPosition: 4,
  effectPositions: [0, 1, 2],
  units: [
    {
      position: 0,
      hp: 3,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 750,
      status: 0,
      activeCounts: 5,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 1,
      hp: 43,
      phy: 120,
      int: 30,
      agi: 50,
      charge: 750,
      status: 0,
      activeCounts: 5,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 2,
      hp: 33,
      phy: 50,
      int: 100,
      agi: 50,
      charge: 750,
      status: 0,
      activeCounts: 5,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 3,
      hp: 0,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 1050,
      status: 0,
      activeCounts: 4,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 4,
      hp: 188,
      phy: 130,
      int: 40,
      agi: 30,
      charge: 0,
      status: 0,
      activeCounts: 5,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 5,
      hp: 85,
      phy: 20,
      int: 150,
      agi: 30,
      charge: 1040,
      status: 0,
      activeCounts: 4,
      passiveEnabled: 0,
      extra: 0
    }
  ]
}
actions[29] = {
  battleId: 1,
  actionCounts: 29,
  skillId: 11,
  actionPosition: 5,
  effectPositions: [0],
  units: [
    {
      position: 0,
      hp: 0,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 750,
      status: 0,
      activeCounts: 5,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 1,
      hp: 43,
      phy: 120,
      int: 30,
      agi: 50,
      charge: 750,
      status: 0,
      activeCounts: 5,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 2,
      hp: 33,
      phy: 50,
      int: 100,
      agi: 50,
      charge: 750,
      status: 0,
      activeCounts: 5,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 3,
      hp: 0,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 1050,
      status: 0,
      activeCounts: 4,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 4,
      hp: 188,
      phy: 130,
      int: 40,
      agi: 30,
      charge: 0,
      status: 0,
      activeCounts: 5,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 5,
      hp: 85,
      phy: 20,
      int: 150,
      agi: 30,
      charge: 0,
      status: 0,
      activeCounts: 5,
      passiveEnabled: 0,
      extra: 0
    }
  ]
}
actions[30] = {
  battleId: 1,
  actionCounts: 30,
  skillId: 2,
  actionPosition: 1,
  effectPositions: [4, 5],
  units: [
    {
      position: 0,
      hp: 0,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 750,
      status: 0,
      activeCounts: 5,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 1,
      hp: 43,
      phy: 120,
      int: 30,
      agi: 50,
      charge: 0,
      status: 0,
      activeCounts: 6,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 2,
      hp: 33,
      phy: 50,
      int: 100,
      agi: 50,
      charge: 1050,
      status: 0,
      activeCounts: 5,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 3,
      hp: 0,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 1050,
      status: 0,
      activeCounts: 4,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 4,
      hp: 160,
      phy: 130,
      int: 40,
      agi: 30,
      charge: 260,
      status: 0,
      activeCounts: 5,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 5,
      hp: 42,
      phy: 20,
      int: 150,
      agi: 30,
      charge: 260,
      status: 0,
      activeCounts: 5,
      passiveEnabled: 0,
      extra: 0
    }
  ]
}
actions[31] = {
  battleId: 1,
  actionCounts: 31,
  skillId: 21,
  actionPosition: 2,
  effectPositions: [2],
  units: [
    {
      position: 0,
      hp: 0,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 750,
      status: 0,
      activeCounts: 5,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 1,
      hp: 43,
      phy: 120,
      int: 30,
      agi: 50,
      charge: 0,
      status: 0,
      activeCounts: 6,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 2,
      hp: 108,
      phy: 50,
      int: 100,
      agi: 50,
      charge: 0,
      status: 0,
      activeCounts: 6,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 3,
      hp: 0,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 1050,
      status: 0,
      activeCounts: 4,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 4,
      hp: 160,
      phy: 130,
      int: 40,
      agi: 30,
      charge: 260,
      status: 0,
      activeCounts: 5,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 5,
      hp: 42,
      phy: 20,
      int: 150,
      agi: 30,
      charge: 260,
      status: 0,
      activeCounts: 5,
      passiveEnabled: 0,
      extra: 0
    }
  ]
}
actions[32] = {
  battleId: 1,
  actionCounts: 32,
  skillId: 2,
  actionPosition: 4,
  effectPositions: [1, 2],
  units: [
    {
      position: 0,
      hp: 0,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 750,
      status: 0,
      activeCounts: 5,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 1,
      hp: 12,
      phy: 120,
      int: 30,
      agi: 50,
      charge: 900,
      status: 0,
      activeCounts: 6,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 2,
      hp: 69,
      phy: 50,
      int: 100,
      agi: 50,
      charge: 900,
      status: 0,
      activeCounts: 6,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 3,
      hp: 0,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 1050,
      status: 0,
      activeCounts: 4,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 4,
      hp: 160,
      phy: 130,
      int: 40,
      agi: 30,
      charge: 0,
      status: 0,
      activeCounts: 6,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 5,
      hp: 42,
      phy: 20,
      int: 150,
      agi: 30,
      charge: 1040,
      status: 0,
      activeCounts: 5,
      passiveEnabled: 0,
      extra: 0
    }
  ]
}
actions[33] = {
  battleId: 1,
  actionCounts: 33,
  skillId: 22,
  actionPosition: 5,
  effectPositions: [4, 5],
  units: [
    {
      position: 0,
      hp: 0,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 750,
      status: 0,
      activeCounts: 5,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 1,
      hp: 12,
      phy: 120,
      int: 30,
      agi: 50,
      charge: 900,
      status: 0,
      activeCounts: 6,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 2,
      hp: 69,
      phy: 50,
      int: 100,
      agi: 50,
      charge: 900,
      status: 0,
      activeCounts: 6,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 3,
      hp: 0,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 1050,
      status: 0,
      activeCounts: 4,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 4,
      hp: 216,
      phy: 130,
      int: 40,
      agi: 30,
      charge: 0,
      status: 0,
      activeCounts: 6,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 5,
      hp: 76,
      phy: 20,
      int: 150,
      agi: 30,
      charge: 0,
      status: 0,
      activeCounts: 6,
      passiveEnabled: 0,
      extra: 0
    }
  ]
}
actions[34] = {
  battleId: 1,
  actionCounts: 34,
  skillId: 2,
  actionPosition: 1,
  effectPositions: [4, 5],
  units: [
    {
      position: 0,
      hp: 0,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 750,
      status: 0,
      activeCounts: 5,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 1,
      hp: 12,
      phy: 120,
      int: 30,
      agi: 50,
      charge: 0,
      status: 0,
      activeCounts: 7,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 2,
      hp: 69,
      phy: 50,
      int: 100,
      agi: 50,
      charge: 1050,
      status: 0,
      activeCounts: 6,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 3,
      hp: 0,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 1050,
      status: 0,
      activeCounts: 4,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 4,
      hp: 188,
      phy: 130,
      int: 40,
      agi: 30,
      charge: 130,
      status: 0,
      activeCounts: 6,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 5,
      hp: 33,
      phy: 20,
      int: 150,
      agi: 30,
      charge: 130,
      status: 0,
      activeCounts: 6,
      passiveEnabled: 0,
      extra: 0
    }
  ]
}
actions[35] = {
  battleId: 1,
  actionCounts: 35,
  skillId: 11,
  actionPosition: 2,
  effectPositions: [4],
  units: [
    {
      position: 0,
      hp: 0,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 750,
      status: 0,
      activeCounts: 5,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 1,
      hp: 12,
      phy: 120,
      int: 30,
      agi: 50,
      charge: 0,
      status: 0,
      activeCounts: 7,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 2,
      hp: 69,
      phy: 50,
      int: 100,
      agi: 50,
      charge: 0,
      status: 0,
      activeCounts: 7,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 3,
      hp: 0,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 1050,
      status: 0,
      activeCounts: 4,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 4,
      hp: 108,
      phy: 130,
      int: 40,
      agi: 30,
      charge: 130,
      status: 0,
      activeCounts: 6,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 5,
      hp: 33,
      phy: 20,
      int: 150,
      agi: 30,
      charge: 130,
      status: 0,
      activeCounts: 6,
      passiveEnabled: 0,
      extra: 0
    }
  ]
}
actions[36] = {
  battleId: 1,
  actionCounts: 36,
  skillId: 1,
  actionPosition: 1,
  effectPositions: [4],
  units: [
    {
      position: 0,
      hp: 0,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 750,
      status: 0,
      activeCounts: 5,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 1,
      hp: 12,
      phy: 120,
      int: 30,
      agi: 50,
      charge: 0,
      status: 0,
      activeCounts: 8,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 2,
      hp: 69,
      phy: 50,
      int: 100,
      agi: 50,
      charge: 1050,
      status: 0,
      activeCounts: 7,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 3,
      hp: 0,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 1050,
      status: 0,
      activeCounts: 4,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 4,
      hp: 36,
      phy: 130,
      int: 40,
      agi: 30,
      charge: 1040,
      status: 0,
      activeCounts: 6,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 5,
      hp: 33,
      phy: 20,
      int: 150,
      agi: 30,
      charge: 1040,
      status: 0,
      activeCounts: 6,
      passiveEnabled: 0,
      extra: 0
    }
  ]
}
actions[37] = {
  battleId: 1,
  actionCounts: 37,
  skillId: 12,
  actionPosition: 2,
  effectPositions: [4, 5],
  units: [
    {
      position: 0,
      hp: 0,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 750,
      status: 0,
      activeCounts: 5,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 1,
      hp: 12,
      phy: 120,
      int: 30,
      agi: 50,
      charge: 0,
      status: 0,
      activeCounts: 8,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 2,
      hp: 69,
      phy: 50,
      int: 100,
      agi: 50,
      charge: 0,
      status: 0,
      activeCounts: 8,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 3,
      hp: 0,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 1050,
      status: 0,
      activeCounts: 4,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 4,
      hp: 4,
      phy: 130,
      int: 40,
      agi: 30,
      charge: 1040,
      status: 0,
      activeCounts: 6,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 5,
      hp: 9,
      phy: 20,
      int: 150,
      agi: 30,
      charge: 1040,
      status: 0,
      activeCounts: 6,
      passiveEnabled: 0,
      extra: 0
    }
  ]
}
actions[38] = {
  battleId: 1,
  actionCounts: 38,
  skillId: 2,
  actionPosition: 4,
  effectPositions: [1, 2],
  units: [
    {
      position: 0,
      hp: 0,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 750,
      status: 0,
      activeCounts: 5,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 1,
      hp: 0,
      phy: 120,
      int: 30,
      agi: 50,
      charge: 0,
      status: 0,
      activeCounts: 8,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 2,
      hp: 30,
      phy: 50,
      int: 100,
      agi: 50,
      charge: 0,
      status: 0,
      activeCounts: 8,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 3,
      hp: 0,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 1050,
      status: 0,
      activeCounts: 4,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 4,
      hp: 4,
      phy: 130,
      int: 40,
      agi: 30,
      charge: 0,
      status: 0,
      activeCounts: 7,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 5,
      hp: 9,
      phy: 20,
      int: 150,
      agi: 30,
      charge: 1040,
      status: 0,
      activeCounts: 6,
      passiveEnabled: 0,
      extra: 0
    }
  ]
}
actions[39] = {
  battleId: 1,
  actionCounts: 39,
  skillId: 12,
  actionPosition: 5,
  effectPositions: [2],
  units: [
    {
      position: 0,
      hp: 0,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 750,
      status: 0,
      activeCounts: 5,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 1,
      hp: 0,
      phy: 120,
      int: 30,
      agi: 50,
      charge: 0,
      status: 0,
      activeCounts: 8,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 2,
      hp: 0,
      phy: 50,
      int: 100,
      agi: 50,
      charge: 0,
      status: 0,
      activeCounts: 8,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 3,
      hp: 0,
      phy: 100,
      int: 50,
      agi: 50,
      charge: 1050,
      status: 0,
      activeCounts: 4,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 4,
      hp: 4,
      phy: 130,
      int: 40,
      agi: 30,
      charge: 0,
      status: 0,
      activeCounts: 7,
      passiveEnabled: 0,
      extra: 0
    },
    {
      position: 5,
      hp: 9,
      phy: 20,
      int: 150,
      agi: 30,
      charge: 0,
      status: 0,
      activeCounts: 7,
      passiveEnabled: 0,
      extra: 0
    }
  ]
}
