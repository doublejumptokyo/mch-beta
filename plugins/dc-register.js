import RegisterData from '~/build/contracts/Register.json'
import UserData from '~/build/contracts/User.json'

class Register {
  constructor(accountManager) {
    const registerAbi = RegisterData.abi
    const registerAddress = RegisterData.networks['default'].address
    this.contract = accountManager.getContract(registerAbi, registerAddress)
  }

  async isRegistered() {
    return await this.contract.methods.isRegistered().call()
  }

  async register() {
    return new Promise((resolve, reject) => {
      this.contract.methods
        .register()
        .send()
        .on('receipt', resolve)
        .on('error', reject)
    })
  }
}

class User {
  constructor(accountManager) {
    const userAbi = UserData.abi
    const userAddress = UserData.networks['default'].address
    this.contract = accountManager.getContract(userAbi, userAddress)
  }

  async create() {
    return new Promise((resolve, reject) => {
      this.contract.methods
        .createUserAccount()
        .send()
        .on('receipt', resolve)
        .on('error', reject)
    })
  }

  async get() {
    return await this.contract.methods.getAccount().call()
  }

  async setName(name) {
    return new Promise((resolve, reject) => {
      this.contract.methods
        .setName(name)
        .send()
        .on('receipt', resolve)
        .on('error', reject)
    })
  }
}

export default async ({ app, store }, inject) => {
  if (!store.getters.isLoggedIn) return

  const register = new Register(app.$accountManager)
  const user = new User(app.$accountManager)

  const isRegistered = await register.isRegistered()
  if (!isRegistered) {
    await register.register()
  }

  const response = await user.get()
  if (response.exists) {
    store.commit('user/SET_NAME', response.name)
  } else {
    await user.create()
    const response = await user.get()
    store.commit('user/SET_NAME', response.name)
  }

  inject('user', user)
}
