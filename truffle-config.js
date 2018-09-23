/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */

const LoomTruffleProvider = require('loom-truffle-provider')

const loomLocal = new LoomTruffleProvider(
  'default',
  'http://127.0.0.1:46658/rpc',
  'http://127.0.0.1:46658/query',
  'NoODOcSzIe2ZaAw/gstdc1Xx+2k9yZd7u5MlqjIWlm6xwNw+O2dQjPUIZbntsne0tbO2m9un8MQ3f/9T5gzqxw=='
)

const loomSand = new LoomTruffleProvider(
  'default',
  'http://loom.sand.mch.djty.co:46658/rpc',
  'http://loom.sand.mch.djty.co:46658/query',
  'NoODOcSzIe2ZaAw/gstdc1Xx+2k9yZd7u5MlqjIWlm6xwNw+O2dQjPUIZbntsne0tbO2m9un8MQ3f/9T5gzqxw=='
)

module.exports = {
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },

  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*',
      gas: 6721975
    },
    loom_local: {
      provider: loomLocal,
      network_id: '*',
      gas: 100000000
    },
    loom_sand: {
      provider: loomSand,
      network_id: '*',
      gas: 100000000
    }
  }
}
