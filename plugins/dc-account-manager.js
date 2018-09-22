import Web3 from 'web3'

import {
  NonceTxMiddleware,
  SignedTxMiddleware,
  Client,
  LocalAddress,
  CryptoUtils,
  LoomProvider
} from 'loom-js'

export default class DAppChainAccountManager {
  static async createAsync(
    { chainId, readClient, writeClient },
    privateKeyBase64
  ) {
    const privateKey = CryptoUtils.B64ToUint8Array(privateKeyBase64)
    const publicKey = CryptoUtils.publicKeyFromPrivateKey(privateKey)
    const from = LocalAddress.fromPublicKey(publicKey).toString()
    const client = new Client(chainId, writeClient, readClient)
    client.on('error', data => {
      console.error(data)
    })
    // required middleware
    client.txMiddleware = [
      new NonceTxMiddleware(publicKey, client),
      new SignedTxMiddleware(privateKey)
    ]

    const web3 = new Web3(new LoomProvider(client, privateKey))

    return new DAppChainAccountManager(client, publicKey, from, web3)
  }

  constructor(client, publicKey, from, web3) {
    this.client = client
    this.publicKey = publicKey
    this.from = from
    this.web3 = web3
  }

  getContract(abi, contractAddress) {
    const from = this.from
    return new this.web3.eth.Contract(abi, contractAddress, { from })
  }
}
