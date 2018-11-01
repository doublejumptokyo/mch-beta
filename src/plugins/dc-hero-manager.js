import HeroManagerData from '~~/build/contracts/HeroManager.json'

class HeroManager {
  constructor(accountManager) {
    this.accountManager = accountManager
    const heroManagerAbi = HeroManagerData.abi
    const heroManagerAddress = HeroManagerData.networks['default'].address
    this.contract = accountManager.getContract(
      heroManagerAbi,
      heroManagerAddress
    )
  }

  async set(id, hash) {
    await this.contract.methods.setIpfs(id, hash).send()
  }

  async unset(id) {
    await this.contract.methods.unsetIpfs(id).send()
  }

  async forceUnset(id) {
    await this.contract.methods.forceUnsetIpfs(id).send()
  }
}

export default async ({ app, store }, inject) => {
  if (!store.getters.isLoggedIn) return
  const heroManager = new HeroManager(app.$accountManager)
  inject('heroManager', heroManager)
}
