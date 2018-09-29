const C_ABI_BattleManager = [
    {
    "constant": true,
    "inputs": [
    {
    "name": "",
    "type": "address"
    }
    ],
    "name": "addressToBattleInfoDev",
    "outputs": [
    {
    "name": "battleId",
    "type": "uint32"
    },
    {
    "name": "attacker",
    "type": "address"
    },
    {
    "name": "defender",
    "type": "address"
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
    "constant": false,
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
    },
    {
    "constant": true,
    "inputs": [],
    "name": "TURN_COUNTS",
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
    "inputs": [],
    "name": "battleTransaction",
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
    "name": "owner",
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
    "name": "isOwner",
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
    "inputs": [
    {
    "name": "",
    "type": "address"
    }
    ],
    "name": "addressToBattleInfo",
    "outputs": [
    {
    "name": "battleId",
    "type": "uint32"
    },
    {
    "name": "attacker",
    "type": "address"
    },
    {
    "name": "defender",
    "type": "address"
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
    "inputs": [
    {
    "name": "newOwner",
    "type": "address"
    }
    ],
    "name": "transferOwnership",
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
    "name": "previousOwner",
    "type": "address"
    }
    ],
    "name": "OwnershipRenounced",
    "type": "event"
    },
    {
    "anonymous": false,
    "inputs": [
    {
    "indexed": true,
    "name": "previousOwner",
    "type": "address"
    },
    {
    "indexed": true,
    "name": "newOwner",
    "type": "address"
    }
    ],
    "name": "OwnershipTransferred",
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
    "name": "_battleTransactionAddress",
    "type": "address"
    }
    ],
    "name": "setBattleTransactionAddress",
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
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
    },
    {
    "constant": false,
    "inputs": [],
    "name": "next",
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
    "inputs": [],
    "name": "hasNext",
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
    "constant": false,
    "inputs": [
    {
    "name": "_attacker",
    "type": "address"
    },
    {
    "name": "_defender",
    "type": "address"
    }
    ],
    "name": "battleDev",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
    },
    {
    "constant": false,
    "inputs": [
    {
    "name": "_attacker",
    "type": "address"
    }
    ],
    "name": "nextDev",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
    },
    {
    "constant": false,
    "inputs": [
    {
    "name": "_attacker",
    "type": "address"
    }
    ],
    "name": "endDev",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
    },
    {
    "constant": true,
    "inputs": [
    {
    "name": "_attacker",
    "type": "address"
    }
    ],
    "name": "hasNextDev",
    "outputs": [
    {
    "name": "",
    "type": "bool"
    }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
    }
    ];
    
const C_ADDRESS_BattleManager = '0x3b86ffbd2e75972ebaf37a9900c3ef50f15ce9a2';
    
const E_ABI_BattleStart = [
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
}
];
    
const E_ABI_BattleAction = [
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
    
const E_ABI_BattleEnd = [
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
    
let battleManager = $nuxt.$accountManager.getContract(C_ABI_BattleManager, C_ADDRESS_BattleManager);
    
const E_NAME_BattleStart = '0x47c4d3e760f12a357789a6608964beeb51122cd2939d213cb53d34f9c5baf32a';
const E_NAME_BattleAction = '0x6f59c07d472385e2fb32a0f1805e30041ec4626a7f081eb3ecfe8b0d334c8f1e';
const E_NAME_BattleEnd = '0x4205ed0ed730eb299e5ca7dd2c60a3922859330a4e869c98c9e715b5cb1c019d';

const E_URL = 'https://beta.mycryptoheroes.net/events';

// ここまで決め打ち、ここから実行


let start;
let actions = [];
let end;

let battleId = 800;
let encodedBattleId = $nuxt.$accountManager.web3.eth.abi.encodeParameter('uint32', battleId);

let req = {};
req.limit = 1000;
req.topic1 = encodedBattleId;
let res;
let rawEvent;

(async()=>{

    req.name = E_NAME_BattleStart;
    res = await $nuxt.$axios.get(E_URL, {params: req});
    rawEvent = res.data[0];
    rawEvent.topics.shift();
    start = $nuxt.$accountManager.web3.eth.abi.decodeLog(E_ABI_BattleStart, rawEvent.data, rawEvent.topics);
    start.units = encodeBattleStart(start.data);

    req.name = E_NAME_BattleAction;
    res = await $nuxt.$axios.get(E_URL, {params: req});
    for (let index in res.data) {
        rawEvent = res.data[index];
        rawEvent.topics.shift();
        let action = $nuxt.$accountManager.web3.eth.abi.decodeLog(E_ABI_BattleAction, rawEvent.data, rawEvent.topics);
        action.units = encodeBattleAction(action.data);
        action.effectPositions = encodeEffectPositions(action.effectPositions);
        actions[action.actionCounts - 1] = action;
    }

    req.name = E_NAME_BattleEnd;
    res = await $nuxt.$axios.get(E_URL, {params: req});
    rawEvent = res.data[0];
    rawEvent.topics.shift();
    end = $nuxt.$accountManager.web3.eth.abi.decodeLog(E_ABI_BattleEnd, rawEvent.data, rawEvent.topics);
    
    console.log('end');

})();
