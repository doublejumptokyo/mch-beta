import Web3 from 'web3'

class EthAccountManager {
  static async createAsync(web3provider) {
    const browserWeb3 = new Web3(web3provider)
    const ethAccountManager = new EthAccountManager(browserWeb3)
    let userAccount = await ethAccountManager.getCurrentAccountAsync()
    setInterval(async () => {
      // Check if account has changed
      const account = await ethAccountManager.getCurrentAccountAsync()
      if (account !== userAccount) {
        userAccount = account
        // Call some function to update the UI with the new account
        location.reload()
      }
    }, 100)

    if (!userAccount) {
      throw new Error(
        'Cannot connect to MetaMask, \nPlease check if MetaMask is installed and active'
      )
    }

    return ethAccountManager
  }

  constructor(browserWeb3) {
    this.browserWeb3 = browserWeb3
  }

  async getCurrentAccountAsync() {
    const account = await this.browserWeb3.eth.getAccounts()
    return account[0]
  }

  async getSignatureAsync(dataToSign) {
    const address = await this.getCurrentAccountAsync()
    const sig = await this.browserWeb3.eth.personal.sign(
      dataToSign,
      address,
      ''
    )
    return sig
  }

  async signTypedData(token, callback) {
    const method = 'eth_signTypedData'
    const from = await this.getCurrentAccountAsync()
    const msgParams = [
      {
        type: 'string',
        name: 'Message',
        value: 'Welcome To My Crypto Heroes'
      },
      {
        type: 'string',
        name: 'Address',
        value: from
      },
      {
        type: 'string',
        name: 'Token',
        value: token
      }
    ]
    // const from = this.browserWeb3.eth.accounts[0];
    const params = [msgParams, from]
    console.dir(params)
    this.browserWeb3.currentProvider.sendAsync(
      { method, params, from },
      callback
    )
    // return await this.browserWeb3.currentProvider.sendAsync({method, params, from});
  }
}

export default async ({ store }, inject) => {
  // Walletがあるかのチェック
  let hasWallet = !!window.web3
  if (hasWallet && window.web3.currentProvider.hasOwnProperty('enable')) {
    const addresses = await window.web3.currentProvider.enable()
    hasWallet = !!addresses.length
  }

  // ログインしているか（特にMetamask）のチェック
  let ethManager
  try {
    ethManager = await EthAccountManager.createAsync(
      window.web3.currentProvider
    )
  } catch (e) {
    hasWallet = false
  }

  store.commit('SET_HAS_WALLET', hasWallet)
  if (!hasWallet) {
    store.commit('SET_IS_LOGGING_IN', false)
  }

  if (!store.state.hasWallet) return

  const ethAddress = await ethManager.getCurrentAccountAsync()
  store.commit('SET_ETH_ADDRESS', ethAddress)

  inject('ethManager', ethManager)
}
