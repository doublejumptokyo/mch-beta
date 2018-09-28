import BattleManagerData from '~/build/contracts/BattleManager.json'

const E_ABI_BattleStart = [
  {
    indexed: true,
    name: 'battleId',
    type: 'uint32'
  },
  {
    indexed: true,
    name: 'attacker',
    type: 'address'
  },
  {
    indexed: true,
    name: 'defender',
    type: 'address'
  },
  {
    indexed: false,
    name: 'data',
    type: 'uint256[7]'
  }
]

const E_ABI_BattleAction = [
  {
    indexed: true,
    name: 'battleId',
    type: 'uint32'
  },
  {
    indexed: false,
    name: 'actionCounts',
    type: 'uint8'
  },
  {
    indexed: false,
    name: 'skillId',
    type: 'uint16'
  },
  {
    indexed: false,
    name: 'actionPosition',
    type: 'uint8'
  },
  {
    indexed: false,
    name: 'effectPositions',
    type: 'bool[7]'
  },
  {
    indexed: false,
    name: 'poisonDamage',
    type: 'int16'
  },
  {
    indexed: false,
    name: 'data',
    type: 'uint128[7]'
  }
]

const E_ABI_BattleEnd = [
  {
    indexed: true,
    name: 'battleId',
    type: 'uint32'
  },
  {
    indexed: true,
    name: 'attacker',
    type: 'address'
  },
  {
    indexed: true,
    name: 'defender',
    type: 'address'
  },
  {
    indexed: false,
    name: 'result',
    type: 'uint8'
  }
]

class BattleManager {
  constructor(accountManager) {
    this.accountManager = accountManager
    const battleManagerAbi = BattleManagerData.abi
    const battleManagerAddress = BattleManagerData.networks['default'].address
    this.contract = accountManager.getContract(
      battleManagerAbi,
      battleManagerAddress
    )
  }

  async start(opponentLoomAddress) {
    const res = await this.contract.methods
      .start(opponentLoomAddress, false)
      .send()
    const rawEvent = res.events[0].raw
    rawEvent.topics.shift()
    const start = this.accountManager.web3.eth.abi.decodeLog(
      E_ABI_BattleStart,
      rawEvent.data,
      rawEvent.topics
    )
    start.units = this.encodeBattleStart(start.data)
    window.start = start
    return start
  }

  async next() {
    const res = await this.contract.methods.next().send()
    let actions = []
    for (let index in res.events) {
      const rawEvent = res.events[index].raw
      rawEvent.topics.shift()
      let action = this.accountManager.web3.eth.abi.decodeLog(
        E_ABI_BattleAction,
        rawEvent.data,
        rawEvent.topics
      )
      action = this.encodeBattleAction(action)
      action.units = this.encodeBattleActionUnits(action.data)
      action.effectPositions = this.encodeEffectPositions(
        action.effectPositions
      )
      actions.push(action)

      console.log(
        'count',
        action.actionCounts,
        'hp',
        ...action.units.map(unit => unit.hp)
      )
    }
    const hasNext = await this.contract.methods.hasNext().call()
    return { actions, hasNext }
  }

  async end() {
    const res = await this.contract.methods.end().send()
    const rawEvent = res.events[0].raw
    rawEvent.topics.shift()
    let end = this.accountManager.web3.eth.abi.decodeLog(
      E_ABI_BattleEnd,
      rawEvent.data,
      rawEvent.topics
    )
    end = this.encodeBattleEnd(end)

    window.end = end

    return end
  }

  encodeBattleStart(rawData) {
    let units = []
    for (let u = 0; u < 7; u++) {
      let data = rawData[u].toString()
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
    return units
  }

  encodeBattleAction(action) {
    action.actionCounts = +action.actionCounts
    action.actionPosition = +action.actionPosition
    action.battleId = +action.battleId
    action.poisonDamage = +action.poisonDamage
    action.skillId = +action.skillId
    return action
  }

  encodeBattleActionUnits(rawData) {
    let units = []
    for (let u = 0; u < 7; u++) {
      let data = rawData[u]
      if (data === '0') continue
      let s
      let e
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
    return units
  }

  encodeEffectPositions(positions) {
    let results = []
    for (let i in positions) {
      if (positions[i]) results.push(+i)
    }
    return results
  }

  encodeBattleEnd(end) {
    end.battleId = +end.battleId
    end.result = +end.result
    return end
  }
}

export default async ({ app, store }, inject) => {
  if (!store.getters.isLoggedIn) return
  const battleManager = new BattleManager(app.$accountManager)
  inject('battleManager', battleManager)
}
