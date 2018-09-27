import RankData from '~/build/contracts/Rank.json'

class Rank {
  constructor(accountManager) {
    const rankAbi = RankData.abi
    const rankAddress = RankData.networks['default'].address
    this.contract = accountManager.getContract(rankAbi, rankAddress)
  }

  async list(from) {
    return await this.contract.methods.list(from).call()
  }
}

export default async ({ app, store }, inject) => {
  if (!store.getters.isLoggedIn) return
  const rank = new Rank(app.$accountManager)
  inject('rank', rank)
}
