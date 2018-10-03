const C_ABI_BattleTransaction = [
    {
      "constant": true,
      "inputs": [],
      "name": "finishedCounts",
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
      "name": "progressCounts",
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
          "type": "uint256"
        }
      ],
      "name": "battleIds",
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
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
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
      ],
      "name": "BattleAction2",
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
      "name": "BattleCompleted2",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_battleId",
          "type": "uint32"
        },
        {
          "name": "_data",
          "type": "uint256[7]"
        },
        {
          "name": "_randomSeed",
          "type": "uint16"
        }
      ],
      "name": "setBattle",
      "outputs": [],
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
        }
      ],
      "name": "next",
      "outputs": [
        {
          "name": "",
          "type": "uint8"
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
          "name": "counts",
          "type": "uint8"
        }
      ],
      "name": "nexts",
      "outputs": [
        {
          "name": "result",
          "type": "uint8"
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
          "name": "id",
          "type": "uint16"
        },
        {
          "name": "condition",
          "type": "uint8"
        },
        {
          "name": "rate",
          "type": "int16"
        }
      ],
      "name": "initSkill",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "id",
          "type": "uint16"
        },
        {
          "name": "target",
          "type": "uint8"
        },
        {
          "name": "param",
          "type": "uint8"
        },
        {
          "name": "calc",
          "type": "uint8"
        },
        {
          "name": "rate",
          "type": "int16"
        },
        {
          "name": "minRate",
          "type": "int16"
        },
        {
          "name": "damage",
          "type": "bool"
        }
      ],
      "name": "addSkillEffect",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "id",
          "type": "uint16"
        }
      ],
      "name": "getSkill",
      "outputs": [
        {
          "name": "exist",
          "type": "bool"
        },
        {
          "name": "condition",
          "type": "uint8"
        },
        {
          "name": "conditionRate",
          "type": "int16"
        },
        {
          "name": "effects",
          "type": "uint8"
        },
        {
          "name": "target",
          "type": "uint8[3]"
        },
        {
          "name": "param",
          "type": "uint8[3]"
        },
        {
          "name": "calc",
          "type": "uint8[3]"
        },
        {
          "name": "rate",
          "type": "int16[3]"
        },
        {
          "name": "minRate",
          "type": "int16[3]"
        },
        {
          "name": "damage",
          "type": "bool[3]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ];
    
const C_ADDRESS_BattleTransaction = '0xee8916f0ae2bc8c1cf75314a58c0f7afab79d3d8';
    
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
    },
    {
      "indexed": false,
      "name": "randomSeed",
      "type": "uint16"
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
    
let battleTransaction = $nuxt.$accountManager.getContract(C_ABI_BattleTransaction, C_ADDRESS_BattleTransaction);
    
    
// ここまで決め打ち、ここから実行
    

let actions = [];
let completed;
let res1;
let res2 = [];
let rawEvent;

// BattleStart2
// 0xcc22171b38ec51213fff72a8a777428ea09f8b1e140406e632206810f0de0e92
// BattleEnd2
// 0xba6b1b08ac122b4bd8dacadefb4cf338ac51d73f977ad29d6db5d55c1e1fb326
// BattleAction2
// 0x3e8346021d48c796b34795a1af434bf29578eb4c1b964d21f9f03601a449b2ce
// BattleCompleted2
// 0x89c381bcb7ff6e4dd45d036f97b14266a82bccbb76c866752a9d4ddade3dd6ec

(async () => { 
/*
    var unit0 = web3.toBigNumber('10010010001010010001030110001015601560570250342011200120091033000000000000000');
    var unit1 = web3.toBigNumber('11010020001030080001030070001012601260310770342008200120101034000000000000000');
    var unit2 = web3.toBigNumber('12010030001040060001030100001017401740340660342004200120071035000000000000000');
    var unit3 = web3.toBigNumber('13040090018050040007030100007019201920810260492007200220011014000000000000000');
    var unit4 = web3.toBigNumber('14040070053030070007050060007018001800300870432010200320011012000000000000000');
    var unit5 = web3.toBigNumber('15040050091040060007030060007013201320390800492005200120041010000000000000000');
    var unit6 = web3.toBigNumber(0);
*/

res1 = await battleTransaction.methods.setBattle(502, [
'10010010001010010001030110001015601560570250342011200120091033000000000000000',
'11010020001030080001030070001012601260310770342008200120101034000000000000000',
'12010030001040060001030100001017401740340660342004200120071035000000000000000',
'13040090018050040007030100007019201920810260492007200220011014000000000000000',
'14040070053030070007050060007018001800300870432010200320011012000000000000000',
'15040050091040060007030060007013201320390800492005200120041010000000000000000',
'0',
], 0).send();

//    res1 = await battleTransaction.methods.setBattle(500, [unit0,unit1,unit2,unit3,unit4,unit5,unit6], 0).send();
    res2.push(await battleTransaction.methods.nexts(5).send());
    res2.push(await battleTransaction.methods.nexts(5).send());
    res2.push(await battleTransaction.methods.nexts(5).send());
    res2.push(await battleTransaction.methods.nexts(5).send());
    res2.push(await battleTransaction.methods.nexts(5).send());
    res2.push(await battleTransaction.methods.nexts(5).send());
    res2.push(await battleTransaction.methods.nexts(5).send());
    res2.push(await battleTransaction.methods.nexts(5).send());
    res2.push(await battleTransaction.methods.nexts(5).send());
    res2.push(await battleTransaction.methods.nexts(5).send());
    res2.push(await battleTransaction.methods.nexts(5).send());
    res2.push(await battleTransaction.methods.nexts(5).send());
    res2.push(await battleTransaction.methods.nexts(5).send());
    res2.push(await battleTransaction.methods.nexts(5).send());
    res2.push(await battleTransaction.methods.nexts(5).send());
    res2.push(await battleTransaction.methods.nexts(5).send());
    res2.push(await battleTransaction.methods.nexts(5).send());
    res2.push(await battleTransaction.methods.nexts(5).send());
    res2.push(await battleTransaction.methods.nexts(5).send());
    res2.push(await battleTransaction.methods.nexts(5).send());
    res2.push(await battleTransaction.methods.nexts(5).send());
    res2.push(await battleTransaction.methods.nexts(5).send());
    res2.push(await battleTransaction.methods.nexts(5).send());
    res2.push(await battleTransaction.methods.nexts(5).send());
    res2.push(await battleTransaction.methods.nexts(5).send());
    res2.push(await battleTransaction.methods.nexts(5).send());
    res2.push(await battleTransaction.methods.nexts(5).send());
    res2.push(await battleTransaction.methods.nexts(5).send());
    res2.push(await battleTransaction.methods.nexts(5).send());
    res2.push(await battleTransaction.methods.nexts(5).send());
    res2.push(await battleTransaction.methods.nexts(5).send());
    res2.push(await battleTransaction.methods.nexts(5).send());
    res2.push(await battleTransaction.methods.nexts(5).send());
    res2.push(await battleTransaction.methods.nexts(5).send());
    res2.push(await battleTransaction.methods.nexts(5).send());
    res2.push(await battleTransaction.methods.nexts(5).send());
    res2.push(await battleTransaction.methods.nexts(5).send());
    res2.push(await battleTransaction.methods.nexts(5).send());
    res2.push(await battleTransaction.methods.nexts(5).send());
    res2.push(await battleTransaction.methods.nexts(5).send());

/*
    rawEvent = res.events.BattleStart2.raw;
    rawEvent.topics.shift();
    start = $nuxt.$accountManager.web3.eth.abi.decodeLog(E_ABI_BattleStart, rawEvent.data, rawEvent.topics);
    start.units = encodeBattleStart(start.data);

    /*
    let hasNext;
    do {
        res = await battleManager.methods.next().send();
        for (let index in res.events) {
            rawEvent = res.events[index].raw;
            rawEvent.topics.shift();
            let action = $nuxt.$accountManager.web3.eth.abi.decodeLog(E_ABI_BattleAction, rawEvent.data, rawEvent.topics);
            action.units = encodeBattleAction(action.data);
            action.effectPositions = encodeEffectPositions(action.effectPositions);
            actions.push(action);
        }
        hasNext = await battleManager.methods.hasNext().call();
    } while (hasNext);
    */

    /*
    res = await battleManager.methods.end().send();
    rawEvent = res.events.BattleEnd2.raw;
    rawEvent.topics.shift();
    end = $nuxt.$accountManager.web3.eth.abi.decodeLog(E_ABI_BattleEnd, rawEvent.data, rawEvent.topics);
*/
    console.log('end');
})();

// endが表示されたら終わり

