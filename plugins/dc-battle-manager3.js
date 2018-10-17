import BattleManagerData from '~/build/contracts/BattleManager3.json'

import {
  NonceTxMiddleware,
  SignedTxMiddleware,
  Client,
  Address,
  LocalAddress,
  CryptoUtils,
  Contract
} from 'loom-js'

import { NullMessage, BattleResponse } from '@/assets/types/types_pb'

class BattleManager3 {
  static async createAsync(
    accountManager,
    { chainId, readClient, writeClient },
    privateKeyBase64
  ) {
    const contractName = 'KeyManager'
    const privateKey = CryptoUtils.B64ToUint8Array(privateKeyBase64)
    const publicKey = CryptoUtils.publicKeyFromPrivateKey(privateKey)
    const localAddress = LocalAddress.fromPublicKey(publicKey)

    const client = new Client(chainId, writeClient, readClient)
    client.on('error', data => {
      console.error(data)
    })

    // required middleware
    client.txMiddleware = [
      new NonceTxMiddleware(publicKey, client),
      new SignedTxMiddleware(privateKey)
    ]

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

  async startAsync(opponentLoomAddress) {
    console.log('start begin')
    const res = await this.contract.methods
      .start(opponentLoomAddress, false)
      .send()
    this.startRes = res
    console.log(res)
    console.log('start end')
  }

  async endAsync(winnerCode) {
    console.log('end begin')
    const res = await this.contract.methods.end(winnerCode).send()
    this.endRes = res
    console.log(res)
    console.log('end finished')
  }

  async battleAsync() {
    const params = new NullMessage()
    const result = await this.keyManager.callAsync(
      'Battle',
      params,
      new BattleResponse()
    )
    window.battleRes = result
  }
}

export default async ({ app, store }, inject) => {
  if (!store.getters.isLoggedIn) return
  const key = await store.dispatch('checkLoggedIn')
  if (key) {
    const battleManager = await BattleManager3.createAsync(
      app.$accountManager,
      store.state.env.dappsChain,
      key
    )
    inject('battleManager3', battleManager)
  }
}
