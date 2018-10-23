import {
  NonceTxMiddleware,
  SignedTxMiddleware,
  Client,
  Address,
  LocalAddress,
  CryptoUtils,
  Contract
} from 'loom-js'

import {
  NullMessage,
  Status,
  Text,
  EthSig,
  EthAddress,
  LoomAddress
} from '@/assets/types/types_pb'

class DAppChainKeyManager {
  static async createAsync({ chainId, readClient, writeClient }) {
    const contractName = 'KeyManager'
    const privateKey = CryptoUtils.generatePrivateKey()
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

    return new DAppChainKeyManager(client, publicKey, keyManager)
  }

  constructor(client, publicKey, keyManager) {
    this.client = client
    this.publicKey = publicKey
    this.contract = keyManager
  }

  getCurrentAccount() {
    return LocalAddress.fromPublicKey(this.publicKey).toString()
  }

  getContractAddress() {
    //return this.contract.contractAddr.local.toString();
  }

  async status() {
    const params = new NullMessage()
    const result = await this.contract.staticCallAsync(
      'Status',
      params,
      new Status()
    )
    this.status = result
    return result
  }

  async EchoAsync(msg) {
    const params = new Text()
    params.setBody(msg)
    const result = await this.contract.staticCallAsync(
      'Echo',
      params,
      new Text()
    )
    return result.getBody()
  }

  async getSenderAsync() {
    const params = new Text()
    const result = await this.contract.staticCallAsync(
      'GetSender',
      params,
      new Text()
    )
    return result.getBody()
  }

  async getTokenAsync() {
    const params = new NullMessage()
    const result = await this.contract.staticCallAsync(
      'GetOneTimeToken',
      params,
      new Text()
    )
    return result.getBody()
  }

  async echoAsync(body) {
    const params = new Text()
    params.setBody(body)
    const result = await this.contract.staticCallAsync(
      'Echo',
      params,
      new Text()
    )
    return result.getBody()
  }

  async getKeyAsync(body) {
    const params = new Text()
    params.setBody(body)
    const result = await this.contract.staticCallAsync(
      'GetKey',
      params,
      new Text()
    )
    return result.getBody()
  }

  async setKeyAsync(body) {
    const params = new Text()
    params.setBody(body)
    await this.contract.callAsync('SetKey', params)
  }

  async deleteKeyAsync(body) {
    const params = new Text()
    params.setBody(body)
    await this.contract.callAsync('SetKey', params)
  }

  async getLoomAddressAsync(ethAddr) {
    const param = new EthAddress()
    param.setEthAddress(ethAddr)
    const result = await this.contract.staticCallAsync(
      'GetLoomAddress',
      param,
      new LoomAddress()
    )
    return result.getLoomAddress()
  }

  async loginAsync(ethAddress, sig, msg) {
    const params = new EthSig()
    params.setEthAddress(ethAddress)
    params.setSignedMessage(sig)
    params.setRawMessage(msg)
    const result = await this.contract.callAsync('Login', params, new Text())
    return result.getBody()
  }
}

export default async ({ store }, inject) => {
  if (!store.state.hasWallet) return

  const key = await store.dispatch('checkLoggedIn')
  if (!key) {
    const keyManager = await DAppChainKeyManager.createAsync(
      store.state.env.dappsChain
    )
    inject('keyManager', keyManager)
  }
}
