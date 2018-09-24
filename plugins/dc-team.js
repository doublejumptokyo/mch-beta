import DeckManagerData from '~/build/contracts/DeckManager.json'

class Team {
  constructor(accountManager) {
    const deckManagerAbi = DeckManagerData.abi
    const deckManagerAddress = DeckManagerData.networks['default'].address
    this.contract = accountManager.getContract(
      deckManagerAbi,
      deckManagerAddress
    )
  }

  async get(address) {
    const units = await this.contract.methods.getDeck(address).call()
    const newUnits = Array.from(Array(3).keys()).map(index => {
      return units[index].map(str => Number(str))
    })
    return newUnits
  }

  async set(team) {
    return new Promise((resolve, reject) => {
      this.contract.methods
        .setDeck(...team)
        .send()
        .on('receipt', resolve)
        .on('error', reject)
    })
  }
}

export default async ({ app, store }, inject) => {
  if (!store.getters.isLoggedIn) return
  const team = new Team(app.$accountManager)

  const address = store.state.loomAddress
  const units = await team.get(address)

  store.commit('team/SET_TEAM', units)

  inject('team', team)
}
