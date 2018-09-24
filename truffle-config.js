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
const { readFileSync } = require('fs');
const LoomTruffleProvider = require('loom-truffle-provider');

const loomLocal = new LoomTruffleProvider(
  'default',
  'http://127.0.0.1:46658/rpc',
  'http://127.0.0.1:46658/query',
  'NoODOcSzIe2ZaAw/gstdc1Xx+2k9yZd7u5MlqjIWlm6xwNw+O2dQjPUIZbntsne0tbO2m9un8MQ3f/9T5gzqxw=='
)

const sandChainID = "default";
const sandRead = "http://loom.sand.mch.djty.co:46658/query";
const sandWrite = "http://loom.sand.mch.djty.co:46658/rpc";

const loomSand = new LoomTruffleProvider(
    sandChainID,
    sandWrite,
    sandRead,
    'NoODOcSzIe2ZaAw/gstdc1Xx+2k9yZd7u5MlqjIWlm6xwNw+O2dQjPUIZbntsne0tbO2m9un8MQ3f/9T5gzqxw=='
);

// Address 0xB43A56b3dF842a1453cdf54E9f3287Dd63FcE4b4
const loomSand01 = new LoomTruffleProvider(
    sandChainID,
    sandWrite,
    sandRead,
    readFileSync('./.keys/minter01.key', 'utf-8'),
);


// Address 0x4005Be9225Fd8cC170aB553b78Ce374dC68F6705
const loomSand02 = new LoomTruffleProvider(
    sandChainID,
    sandWrite,
    sandRead,
    readFileSync('./.keys/minter02.key', 'utf-8'),
);

// Address 0x26278997024f4eab06722538362DD33f5D9f43ed
const loomSand03 = new LoomTruffleProvider(
    sandChainID,
    sandWrite,
    sandRead,
    readFileSync('./.keys/minter03.key', 'utf-8'),
);

// Address 0x45505efdD956f1300Da6da839aE7d012252A361A
const loomSand04 = new LoomTruffleProvider(
    sandChainID,
    sandWrite,
    sandRead,
    readFileSync('./.keys/minter04.key', 'utf-8'),
);

// Address 0xb7D7Ce2415a545f1fbf50198f1297149cBcDdae4
const loomSand05 = new LoomTruffleProvider(
    sandChainID,
    sandWrite,
    sandRead,
    readFileSync('./.keys/minter05.key', 'utf-8'),
);

// Address 0xD11077dCEF14a268cF381aFB5af5fe48D79A1e68
const loomSand06 = new LoomTruffleProvider(
    sandChainID,
    sandWrite,
    sandRead,
    readFileSync('./.keys/minter06.key', 'utf-8'),
);

// Address 0xc5d3A9Eb8485157E01067CcC21E03124e6dC5b4D
const loomSand07 = new LoomTruffleProvider(
    sandChainID,
    sandWrite,
    sandRead,
    readFileSync('./.keys/minter07.key', 'utf-8'),
);

// Address 0x69486FBb3ad4115240F7E7af12437F137e699916
const loomSand08 = new LoomTruffleProvider(
    sandChainID,
    sandWrite,
    sandRead,
    readFileSync('./.keys/minter08.key', 'utf-8'),
);

// Address 0x164d9735bd4d0f4CF1BdBf2F96d0Eb496FcFb854
const loomSand09 = new LoomTruffleProvider(
    sandChainID,
    sandWrite,
    sandRead,
    readFileSync('./.keys/minter09.key', 'utf-8'),
);

// Address 0xcDEF4684aBE7a501f6c60519730CefE7e784b05D
const loomSand10 = new LoomTruffleProvider(
    sandChainID,
    sandWrite,
    sandRead,
    readFileSync('./.keys/minter10.key', 'utf-8'),
);

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
    },
    loom_sand01: {
      provider: loomSand01,
      network_id: '*',
      gas: 100000000
    },
    loom_sand02: {
      provider: loomSand02,
      network_id: '*',
      gas: 100000000
    },
    loom_sand03: {
      provider: loomSand03,
      network_id: '*',
      gas: 100000000
    },
    loom_sand04: {
      provider: loomSand04,
      network_id: '*',
      gas: 100000000
    },
    loom_sand05: {
      provider: loomSand05,
      network_id: '*',
      gas: 100000000
    },
    loom_sand06: {
      provider: loomSand06,
      network_id: '*',
      gas: 100000000
    },
    loom_sand07: {
      provider: loomSand07,
      network_id: '*',
      gas: 100000000
    },
    loom_sand08: {
      provider: loomSand08,
      network_id: '*',
      gas: 100000000
    },
    loom_sand09: {
      provider: loomSand09,
      network_id: '*',
      gas: 100000000
    },
    loom_sand10: {
      provider: loomSand10,
      network_id: '*',
      gas: 100000000
    },
  }
}
