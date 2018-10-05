import PresentData from '~/build/contracts/Present.json'

class Present {
  constructor(accountManager) {
    const presentAbi = PresentData.abi
    const presentAddress = PresentData.networks['default'].address
    this.contract = accountManager.getContract(presentAbi, presentAddress)
  }

  async canReceive() {
    return await this.contract.methods.canReceive().call()
  }

  async receive() {
    return new Promise((resolve, reject) => {
      this.contract.methods
        .receive()
        .send()
        .on('receipt', resolve)
        .on('error', reject)
    })
  }
}

export default async ({ app, store }, inject) => {
  if (!store.getters.isLoggedIn) return

  const present = new Present(app.$accountManager)

  const canReceive = await present.canReceive()
  if (canReceive) {
    await present.receive()
  }

  inject('present', present)
}
