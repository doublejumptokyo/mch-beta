var BattleTest1 = artifacts.require('BattleTest1')

contract('BattleTest1', function(accounts) {
  let test
  let start
  let action
  let battleId

  before('deploy', async function() {
    test = await BattleTest1.new()
    await test.setSkill()
  })

  it('init', async function() {
    let init = await test.initEx()
    battleId = +init.logs[0].args.battleId.toString()
    console.log('init: battleId = ' + battleId)
  })

  it('setUnit', async function() {
    await test.setUnit(
      0,
      450,
      100,
      50,
      50,
      3,
      2,
      3,
      100,
      1001,
      1002,
      1003,
      battleId
    )
    await test.setUnit(
      1,
      300,
      120,
      30,
      50,
      2,
      3,
      2,
      100,
      2001,
      2002,
      2003,
      battleId
    )
    await test.setUnit(
      2,
      300,
      50,
      100,
      50,
      11,
      12,
      21,
      100,
      3001,
      3002,
      3003,
      battleId
    )
    await test.setUnit(
      3,
      500,
      100,
      50,
      50,
      3,
      3,
      3,
      100,
      4001,
      4002,
      4003,
      battleId
    )
    await test.setUnit(
      4,
      400,
      130,
      40,
      30,
      2,
      2,
      2,
      100,
      5001,
      5002,
      5003,
      battleId
    )
    await test.setUnit(
      5,
      300,
      20,
      150,
      30,
      12,
      11,
      22,
      100,
      6001,
      6002,
      6003,
      battleId
    )
  })

  it('start', async function() {
    start = await test.start(battleId)

    let result = {}
    result.battleId = +start.logs[0].args.battleId.toString()

    let units = []
    for (u = 0; u < 7; u++) {
      let data = start.logs[0].args.data[u].toString()
      if (data === '0') continue
      let s
      let e
      s = 1
      e = s + 1
      let position = +data.substring(s, e)
      s = e
      e = s + 9
      let heroId = +data.substring(s, e)
      s = e
      e = s + 9
      let itemId1 = +data.substring(s, e)
      s = e
      e = s + 9
      let itemId2 = +data.substring(s, e)
      s = e
      e = s + 4
      let maxHp = +data.substring(s, e)
      s = e
      e = s + 4
      let hp = +data.substring(s, e)
      s = e
      e = s + 3
      let phy = +data.substring(s, e)
      s = e
      e = s + 3
      let intl = +data.substring(s, e)
      s = e
      e = s + 3
      let agi = +data.substring(s, e)
      s = e
      e = s + 4
      let a1 = +data.substring(s, e)
      s = e
      e = s + 4
      let a2 = +data.substring(s, e)
      s = e
      e = s + 4
      let a3 = +data.substring(s, e)
      s = e
      e = s + 4
      let p = +data.substring(s, e)
      units[u] = {
        position: position,
        heroId: heroId,
        itemId1: itemId1,
        itemId2: itemId2,
        maxHp: maxHp,
        hp: hp,
        phy: phy,
        int: intl,
        agi: agi,
        active1: a1,
        active2: a2,
        active3: a3,
        passive: p
      }
    }

    result.units = units
    console.log('let start = ' + JSON.stringify(result) + ';')
  })

  it('nexts', async function() {
    console.log('let actions = [];')
    for (i = 0; i < 100; i++) {
      action = await test.next(battleId)
      let result = {}
      result.battleId = +action.logs[0].args.battleId.toString()
      result.actionCounts = +action.logs[0].args.actionCounts.toString()
      result.skillId = +action.logs[0].args.skillId.toString()
      result.actionPosition = +action.logs[0].args.actionPosition.toString()
      result.effectPositions = []
      for (j = 0; j < 7; j++) {
        if (action.logs[0].args.effectPositions[j])
          result.effectPositions.push(j)
      }

      units = []
      for (u = 0; u < 7; u++) {
        let data = action.logs[0].args.data[u].toString()
        let s
        let e
        if (data === '0') continue
        s = 1
        e = s + 1
        let position = +data.substring(s, e)
        s = e
        e = s + 4
        let hp = +data.substring(s, e)
        s = e
        e = s + 3
        let phy = +data.substring(s, e)
        s = e
        e = s + 3
        let intl = +data.substring(s, e)
        s = e
        e = s + 3
        let agi = +data.substring(s, e)
        s = e
        e = s + 4
        let charge = +data.substring(s, e)
        s = e
        e = s + 1
        let state = +data.substring(s, e)
        s = e
        e = s + 3
        let activeCounts = +data.substring(s, e)
        s = e
        e = s + 1
        let passiveEnabled = +data.substring(s, e)
        s = e
        e = s + 1
        let extra = +data.substring(s, e)
        units[u] = {
          position: position,
          hp: hp,
          phy: phy,
          int: intl,
          agi: agi,
          charge: charge,
          state: state,
          activeCounts: activeCounts,
          passiveEnabled: passiveEnabled,
          extra: extra
        }
      }
      result.units = units
      console.log('actions[' + (i + 1) + '] = ' + JSON.stringify(result) + ';')
    }
  })
})
