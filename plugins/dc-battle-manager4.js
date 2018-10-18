import { Address, LocalAddress, Contract } from 'loom-js'
import { NullMessage, Battle2Response } from '@/assets/types/battle_types_pb'
import BattleManagerData from '~/build/contracts/BattleManager3.json'

const E_ABI_BattleStart3 = [
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

const E_ABI_BattleEnd3 = [
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
    name: 'win',
    type: 'bool'
  }
]

class BattleManager3 {
  static async createAsync(accountManager) {
    const contractName = 'KeyManager'
    const client = accountManager.client
    const publicKey = accountManager.publicKey
    const localAddress = LocalAddress.fromPublicKey(publicKey)

    const contractAddr = await client.getContractAddressAsync(contractName)
    if (!contractAddr) {
      throw new Error('Failed to resolve contract address')
    }

    const callerAddr = new Address(client.chainId, localAddress)

    const keyManager = new Contract({
      contractAddr,
      contractName,
      callerAddr,
      client
    })

    return new BattleManager3(accountManager, client, publicKey, keyManager)
  }

  constructor(accountManager, client, publicKey, keyManager) {
    this.accountManager = accountManager
    this.client = client
    this.publicKey = publicKey
    this.keyManager = keyManager
    const battleManagerAbi = BattleManagerData.abi
    const battleManagerAddress = BattleManagerData.networks['default'].address
    this.contract = accountManager.getContract(
      battleManagerAbi,
      battleManagerAddress
    )
  }

  async startAsync(opponentLoomAddress, isRanked = false) {
    console.log('start begin')
    const res = await this.contract.methods
      .start(opponentLoomAddress, isRanked)
      .send()
      .catch(e => console.error(e))
    const rawEvent = res.events.BattleStart3.raw
    rawEvent.topics.shift()
    const start = this.accountManager.web3.eth.abi.decodeLog(
      E_ABI_BattleStart3,
      rawEvent.data,
      rawEvent.topics
    )
    start.units = this.encodeBattleStart(start.data)
    console.log('start end')
    return start
  }

  async endAsync(winnerCode) {
    console.log('end begin')
    const res = await this.contract.methods.end(winnerCode).send()
    const rawEvent = res.events.BattleEnd3.raw
    rawEvent.topics.shift()
    let end = this.accountManager.web3.eth.abi.decodeLog(
      E_ABI_BattleEnd3,
      rawEvent.data,
      rawEvent.topics
    )
    end = this.encodeBattleEnd(end)
    console.log('end finished')
    return end
  }

  async battleAsync() {
    console.log('battle begin')
    const params = new NullMessage()
    const result = await this.keyManager.callAsync(
      'Battle2',
      params,
      new Battle2Response()
    )
    console.log(result)
    window.result = result

    let actions = []
    result.getActionsList().forEach(pbAction => {
      let action = {
        actionCounts: pbAction.getActionCounts(),
        actionPosition: pbAction.getActionPosition(),
        poisonDamage: pbAction.getPoisonDamage(),
        skillId: pbAction.getSkillId(),
        effectPositions: this.encodeEffectPositions(
          pbAction.getEffectUnitsList()
        )
      }
      let units = []
      pbAction.getUnitsList().forEach(pbUnit => {
        let unit = {
          position: pbUnit.getPosition(),
          hp: pbUnit.getHp(),
          phy: pbUnit.getPhy(),
          int: pbUnit.getInt(),
          agi: pbUnit.getAgi(),
          charge: pbUnit.getCharge(),
          passiveEnabled: pbUnit.getPassiveEnabled(),
          state: pbUnit.getState()
        }
        units.push(unit)
      })
      action.units = units
      actions.push(action)
    })
    console.log(actions)
    console.log('battle end')
    return {
      actionCounts: actions.length,
      actions,
      isWon: result.getWin(),
      winnerCode: result.getWinnerCode()
    }
  }

  // async getActions(battleId, actionCounts) {
  //   console.log('action begin')
  //   let encodedActions = []
  //   const bool = true
  //   while (bool) {
  //     const sleep = msec => new Promise(resolve => setTimeout(resolve, msec))
  //     await sleep(1000)
  //     console.log('action try')
  //     const req = {}
  //     req.limit = 200
  //     req.name = 'BattleAction3'
  //     req.topic1 = battleId
  //     encodedActions = await window.$nuxt.$axios.$get('/events', {
  //       params: req
  //     })
  //     if (actionCounts === encodedActions.length) break
  //   }
  //   const hexToString = this.accountManager.web3.utils.hexToString
  //   const actions = encodedActions
  //     .map(action => JSON.parse(hexToString(action.data)))
  //     .map(action => this.encodeBattleAction(action))
  //     .map(action => {
  //       action.units = this.encodeBattleActionUnits(action.datas)
  //       return action
  //     })
  //     .map(action => {
  //       const positions = action.effectUnits
  //       action.effectPositions = this.encodeEffectPositions(positions)
  //       return action
  //     })
  //   actions.sort((p, c) => p.actionCounts - c.actionCounts)
  //   return actions
  // }

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

  encodeBattleEnd(end) {
    end.battleId = +end.battleId
    return end
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
      if (positions[i]) results.push(Number(i))
    }
    return results
  }
}

export default async ({ app, store }, inject) => {
  if (!store.getters.isLoggedIn) return
  const key = await store.dispatch('checkLoggedIn')
  if (key) {
    const battleManager = await BattleManager3.createAsync(app.$accountManager)
    inject('battleManager4', battleManager)
  }
}
