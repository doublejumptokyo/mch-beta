import BattleManagerData from '~/build/contracts/BattleManager2.json'

const E_ABI_BattleStart2 = [
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
  },
  {
    indexed: false,
    name: 'randomSeed',
    type: 'uint16'
  }
]

const E_ABI_BattleAction2 = [
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

const E_ABI_BattleCompleted2 = [
  {
    indexed: true,
    name: 'battleId',
    type: 'uint32'
  },
  {
    indexed: false,
    name: 'result',
    type: 'uint8'
  },
  {
    indexed: false,
    name: 'actionCounts',
    type: 'uint8'
  }
]

const E_ABI_BattleEnd2 = [
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
  },
  {
    indexed: false,
    name: 'actionCounts',
    type: 'uint8'
  }
]

// const E_NAME_BattleStart2 =
//   '0xcc22171b38ec51213fff72a8a777428ea09f8b1e140406e632206810f0de0e92'
const E_NAME_BattleAction2 =
  '0x3e8346021d48c796b34795a1af434bf29578eb4c1b964d21f9f03601a449b2ce'
const E_NAME_BattleCompleted2 =
  '0x89c381bcb7ff6e4dd45d036f97b14266a82bccbb76c866752a9d4ddade3dd6ec'
// const E_NAME_BattleEnd2 =
//   '0xba6b1b08ac122b4bd8dacadefb4cf338ac51d73f977ad29d6db5d55c1e1fb326'

const E_URL = 'https://beta.mycryptoheroes.net/events'

class BattleManager {
  constructor(accountManager) {
    this.accountManager = accountManager
    this.actions = []
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
    const rawEvent = res.events.BattleStart2.raw
    rawEvent.topics.shift()
    const start = this.accountManager.web3.eth.abi.decodeLog(
      E_ABI_BattleStart2,
      rawEvent.data,
      rawEvent.topics
    )
    start.units = this.encodeBattleStart(start.data)
    window.start = start
    return start
  }

  async watch(battleId) {
    const sleep = msec => new Promise(resolve => setTimeout(resolve, msec))

    console.log('action begin')
    const bool = true
    while (bool) {
      await sleep(1000)
      console.log('action try')
      const req = {}
      req.limit = 200
      req.name = E_NAME_BattleAction2
      req.topic1 = battleId
      let res = await window.$nuxt.$axios.get(E_URL, { params: req })
      for (let index in res.data) {
        const rawEvent = res.data[index]
        rawEvent.topics.shift()
        let action = this.accountManager.web3.eth.abi.decodeLog(
          E_ABI_BattleAction2,
          rawEvent.data,
          rawEvent.topics
        )
        action = this.encodeBattleAction(action)
        action.units = this.encodeBattleActionUnits(action.data)
        action.effectPositions = this.encodeEffectPositions(
          action.effectPositions
        )
        if (this.actions[action.actionCounts - 1] == undefined)
          this.actions[action.actionCounts - 1] = action
      }

      req.name = E_NAME_BattleCompleted2
      res = await window.$nuxt.$axios.get(E_URL, { params: req })
      if (res.data.length === 0) continue

      const rawEvent = res.data[0]
      rawEvent.topics.shift()
      const completed = this.accountManager.web3.eth.abi.decodeLog(
        E_ABI_BattleCompleted2,
        rawEvent.data,
        rawEvent.topics
      )
      console.log(completed.actionCounts, this.actions.length)
      if (completed.actionCounts == this.actions.length) break
    }

    console.log('ok')
    // throw new Error()
    // return this.actions
  }

  async next() {
    const res = await this.contract.methods.next().send()
    let actions = []
    for (let index in res.events) {
      const rawEvent = res.events[index].raw
      rawEvent.topics.shift()
      let action = this.accountManager.web3.eth.abi.decodeLog(
        E_ABI_BattleAction2,
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
    console.log('end begin')
    const sleep2 = msec => new Promise(resolve => setTimeout(resolve, msec))
    let end;
    let result = 0
    while (result == 0) {
      const res = await this.contract.methods.end().send()
      const rawEvent = res.events.BattleEnd2.raw
      rawEvent.topics.shift()
      end = this.accountManager.web3.eth.abi.decodeLog(
        E_ABI_BattleEnd2,
        rawEvent.data,
        rawEvent.topics
      )
      result = end.result
      if (result == 0) await sleep2(1000)
    }
    console.log('end finished')
    console.log(end)
    end = this.encodeBattleEnd(end)
    return end
  }

  async _end() {
    const res = await this.contract.methods.end().send()
    const rawEvent = res.events[0].raw
    rawEvent.topics.shift()
    let end = this.accountManager.web3.eth.abi.decodeLog(
      E_ABI_BattleEnd2,
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
      if (positions[i]) results.push(i)
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
  inject('battleManager2', battleManager)
}
