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
    Array.from(Array(3).keys()).forEach(index => {
      units[`unit${index + 1}`] = units[`unit${index + 1}`].map(str =>
        Number(str)
      )
    })
    return units
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
