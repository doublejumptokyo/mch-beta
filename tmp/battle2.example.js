const C_ABI_BattleManager2 = [
    {
      "constant": true,
      "inputs": [],
      "name": "battleId",
      "outputs": [
        {
          "name": "",
          "type": "uint32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "addressToBattleId",
      "outputs": [
        {
          "name": "",
          "type": "uint32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "State$win",
      "outputs": [
        {
          "name": "",
          "type": "uint8"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "account",
          "type": "address"
        }
      ],
      "name": "isSigner",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "rank",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "State$progress",
      "outputs": [
        {
          "name": "",
          "type": "uint8"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint32"
        }
      ],
      "name": "battleIdToBattleInfo",
      "outputs": [
        {
          "name": "attacker",
          "type": "address"
        },
        {
          "name": "defender",
          "type": "address"
        },
        {
          "name": "actionCounts",
          "type": "uint8"
        },
        {
          "name": "state",
          "type": "uint8"
        },
        {
          "name": "rankBattle",
          "type": "bool"
        },
        {
          "name": "exists",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "deckManager",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "renounceSigner",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "account",
          "type": "address"
        }
      ],
      "name": "addSigner",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "battleId",
          "type": "uint32"
        },
        {
          "indexed": true,
          "name": "attacker",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "defender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "data",
          "type": "uint256[7]"
        },
        {
          "indexed": false,
          "name": "randomSeed",
          "type": "uint16"
        }
      ],
      "name": "BattleStart2",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "battleId",
          "type": "uint32"
        },
        {
          "indexed": true,
          "name": "attacker",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "defender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "result",
          "type": "uint8"
        },
        {
          "indexed": false,
          "name": "actionCounts",
          "type": "uint8"
        }
      ],
      "name": "BattleEnd2",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "account",
          "type": "address"
        }
      ],
      "name": "SignerAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "account",
          "type": "address"
        }
      ],
      "name": "SignerRemoved",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_deckManagerAddress",
          "type": "address"
        }
      ],
      "name": "setDeckManagerAddress",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_rankAddress",
          "type": "address"
        }
      ],
      "name": "setRankAddress",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_address",
          "type": "address"
        },
        {
          "name": "_rankBattle",
          "type": "bool"
        }
      ],
      "name": "start",
      "outputs": [
        {
          "name": "",
          "type": "uint32"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_battleId",
          "type": "uint32"
        },
        {
          "name": "_result",
          "type": "uint8"
        },
        {
          "name": "_actionCounts",
          "type": "uint8"
        }
      ],
      "name": "setResult",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "end",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "position",
          "type": "uint8"
        },
        {
          "name": "ids",
          "type": "uint256[3]"
        },
        {
          "name": "params",
          "type": "int16[4]"
        },
        {
          "name": "skills",
          "type": "uint16[4]"
        }
      ],
      "name": "getEventData",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    }
  ];
    
const C_ADDRESS_BattleManager2 = '0x8608db694a4a9d5769438ba46325c348150a3865';
    
const E_ABI_BattleStart2 = [
    {
      "indexed": true,
      "name": "battleId",
      "type": "uint32"
    },
    {
      "indexed": true,
      "name": "attacker",
      "type": "address"
    },
    {
      "indexed": true,
      "name": "defender",
      "type": "address"
    },
    {
      "indexed": false,
      "name": "data",
      "type": "uint256[7]"
    },
    {
      "indexed": false,
      "name": "randomSeed",
      "type": "uint16"
    }
  ];
    
const E_ABI_BattleAction2 = [
    {
      "indexed": true,
      "name": "battleId",
      "type": "uint32"
    },
    {
      "indexed": false,
      "name": "actionCounts",
      "type": "uint8"
    },
    {
      "indexed": false,
      "name": "skillId",
      "type": "uint16"
    },
    {
      "indexed": false,
      "name": "actionPosition",
      "type": "uint8"
    },
    {
      "indexed": false,
      "name": "effectPositions",
      "type": "bool[7]"
    },
    {
      "indexed": false,
      "name": "poisonDamage",
      "type": "int16"
    },
    {
      "indexed": false,
      "name": "data",
      "type": "uint128[7]"
    }
  ];

const E_ABI_BattleCompleted2 = [
    {
      "indexed": true,
      "name": "battleId",
      "type": "uint32"
    },
    {
      "indexed": false,
      "name": "result",
      "type": "uint8"
    },
    {
      "indexed": false,
      "name": "actionCounts",
      "type": "uint8"
    }
  ];  

const E_ABI_BattleEnd2 = [
    {
      "indexed": true,
      "name": "battleId",
      "type": "uint32"
    },
    {
      "indexed": true,
      "name": "attacker",
      "type": "address"
    },
    {
      "indexed": true,
      "name": "defender",
      "type": "address"
    },
    {
      "indexed": false,
      "name": "result",
      "type": "uint8"
    },
    {
      "indexed": false,
      "name": "actionCounts",
      "type": "uint8"
    }
  ];
    
    
function encodeBattleStart(rawData) {
    let units = [];
    for(u=0; u<7; u++) {
        let data = rawData[u].toString();
        if(data === '0') continue;
        let s;
        let e;
        s=1; e=s+1; let position = +data.substring(s,e);
        s=e; e=s+9; let heroId = +data.substring(s,e);
        s=e; e=s+9; let itemId1 = +data.substring(s,e);
        s=e; e=s+9; let itemId2 = +data.substring(s,e);
        s=e; e=s+4; let maxHp = +data.substring(s,e);
        s=e; e=s+4; let hp = +data.substring(s,e);
        s=e; e=s+3; let phy = +data.substring(s,e);
        s=e; e=s+3; let intl = +data.substring(s,e);
        s=e; e=s+3; let agi = +data.substring(s,e);
        s=e; e=s+4; let a1 = +data.substring(s,e);
        s=e; e=s+4; let a2 = +data.substring(s,e);
        s=e; e=s+4; let a3 = +data.substring(s,e);
        s=e; e=s+4; let p = +data.substring(s,e);
        units[u] = {
            'position': position,
            'heroId': heroId,
            'itemId1': itemId1,
            'itemId2': itemId2,
            'maxHp': maxHp,
            'hp': hp,
            'phy': phy,
            'int': intl,
            'agi': agi,
            'active1': a1,
            'active2': a2,
            'active3': a3,
            'passive': p
        };
    }
    return units;
}

function encodeBattleAction(rawData) {
    let units = [];
    for(u=0; u<7; u++) {
        let data = rawData[u];
        if(data === '0') continue;
        let s;
        let e;
        s=1; e=s+1; let position = +data.substring(s,e);
        s=e; e=s+4; let hp = +data.substring(s,e);
        s=e; e=s+3; let phy = +data.substring(s,e);
        s=e; e=s+3; let intl = +data.substring(s,e);
        s=e; e=s+3; let agi = +data.substring(s,e);
        s=e; e=s+4; let charge = +data.substring(s,e);
        s=e; e=s+1; let state = +data.substring(s,e);
        s=e; e=s+3; let activeCounts = +data.substring(s,e);
        s=e; e=s+1; let passiveEnabled = +data.substring(s,e);
        s=e; e=s+1; let extra = +data.substring(s,e);
        units[u] = {
            'position': position,
            'hp': hp,
            'phy': phy,
            'int': intl,
            'agi': agi,
            'charge': charge,
            'state': state,
            'activeCounts': activeCounts,
            'passiveEnabled': passiveEnabled,
            'extra': extra
        };
    }
    return units;
}

function encodeEffectPositions(positions) {
    let results = [];
    for(let i in positions) {
        if(positions[i]) results.push(i);
    }
    return results;
}

const E_NAME_BattleStart2 = '0xcc22171b38ec51213fff72a8a777428ea09f8b1e140406e632206810f0de0e92';
const E_NAME_BattleAction2 = '0x3e8346021d48c796b34795a1af434bf29578eb4c1b964d21f9f03601a449b2ce';
const E_NAME_BattleCompleted2 = '0x89c381bcb7ff6e4dd45d036f97b14266a82bccbb76c866752a9d4ddade3dd6ec';
const E_NAME_BattleEnd2 = '0xba6b1b08ac122b4bd8dacadefb4cf338ac51d73f977ad29d6db5d55c1e1fb326';

const E_URL = 'https://beta.mycryptoheroes.net/events';

let battleManager = $nuxt.$accountManager.getContract(C_ABI_BattleManager2, C_ADDRESS_BattleManager2);

    
// ここまで定数
    
    
let opponent = '0x3b107eba53c13d6cad7e338a6bc9f6436eb41559';

let start;
let actions = [];
let completed;
let end;

let req = {};
req.limit = 200;
let res;
let rawEvent;

(async () => { 
    console.log("start begin");

    res = await battleManager.methods.start(opponent, false).send();
    rawEvent = res.events.BattleStart2.raw;
    rawEvent.topics.shift();
    start = $nuxt.$accountManager.web3.eth.abi.decodeLog(E_ABI_BattleStart2, rawEvent.data, rawEvent.topics);
    start.units = encodeBattleStart(start.data);

    console.log("start finished");

    // ここまででBattle開始はできる

    let encodedBattleId = $nuxt.$accountManager.web3.eth.abi.encodeParameter('uint32', start.battleId);
    req.topic1 = encodedBattleId;

    const sleep = msec => new Promise(resolve => setTimeout(resolve, msec));

    console.log("action begin");
    while (true) {
        await sleep(1000);
        console.log("action try");
        req.name = E_NAME_BattleAction2;
        res = await $nuxt.$axios.get(E_URL, {params: req});
        for (let index in res.data) {
            rawEvent = res.data[index];
            rawEvent.topics.shift();
            let action = $nuxt.$accountManager.web3.eth.abi.decodeLog(E_ABI_BattleAction2, rawEvent.data, rawEvent.topics);
            action.units = encodeBattleAction(action.data);
            action.effectPositions = encodeEffectPositions(action.effectPositions);
            if(actions[action.actionCounts - 1] == undefined) actions[action.actionCounts - 1] = action;
        }

        req.name = E_NAME_BattleCompleted2;
        res = await $nuxt.$axios.get(E_URL, {params: req});
        if (res.data.length == 0) continue;

        rawEvent = res.data[0];
        rawEvent.topics.shift();
        completed = $nuxt.$accountManager.web3.eth.abi.decodeLog(E_ABI_BattleCompleted2, rawEvent.data, rawEvent.topics);
        if (completed.actionCounts == actions.length) break;
    }
    console.log("action finished");

    console.log("end begin");
    res = await battleManager.methods.end().send();
    rawEvent = res.events.BattleEnd2.raw;
    rawEvent.topics.shift();
    end = $nuxt.$accountManager.web3.eth.abi.decodeLog(E_ABI_BattleEnd2, rawEvent.data, rawEvent.topics);
    console.log("end finished");
})();

// endが表示されたら終わり

