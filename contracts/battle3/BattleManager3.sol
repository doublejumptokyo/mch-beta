pragma solidity 0.4.24;

import "../deck/DeckManager.sol";
import "../match/Rank.sol";
import "../hero/Hero.sol";
import "../extension/Extension.sol";
import "../lib/openzeppelin-solidity/contracts/access/roles/SignerRole.sol";


contract BattleManager3 is SignerRole {

    event BattleStart3(uint32 indexed battleId, address indexed attacker, address indexed defender, uint256[7] data, uint16 randomSeed);
    event BattleEnd3(uint32 indexed battleId, address indexed attacker, address indexed defender, bool win);

    uint16 constant private WINNER_CODE_SALT = 15839;

    uint32 public currentBattleId = 60000;
    mapping(address=>BattleInfo) battles;
    DeckManager public deckManager;
    Rank public rank;

    struct BattleInfo {
        uint32 battleId;
        address attacker;
        address defender;
        uint256[7] data;
        uint16 randomSeed;
        uint16 winnerCode;
        bool rankBattle;
        bool exists;
    }

    function setDeckManagerAddress(address _deckManagerAddress) public onlySigner {
        deckManager = DeckManager(_deckManagerAddress);
    }

    function setRankAddress(address _rankAddress) public onlySigner {
        rank = Rank(_rankAddress);
    }

    function start(address _defender, bool _rankBattle) public {
        address _attacker = msg.sender;

        uint256[3] memory ids;
        int16[4] memory params;
        uint16[4] memory skills;
        uint256[7] memory eventDatas;

        (ids, params, skills) = deckManager.getUnit(_attacker, 0);
        eventDatas[0] = getEventData(0, ids, params, skills);

        (ids, params, skills) = deckManager.getUnit(_attacker, 1);
        eventDatas[1] = getEventData(1, ids, params, skills);

        (ids, params, skills) = deckManager.getUnit(_attacker, 2);
        eventDatas[2] = getEventData(2, ids, params, skills);

        (ids, params, skills) = deckManager.getUnit(_defender, 0);
        eventDatas[3] = getEventData(3, ids, params, skills);

        (ids, params, skills) = deckManager.getUnit(_defender, 1);
        eventDatas[4] = getEventData(4, ids, params, skills);

        (ids, params, skills) = deckManager.getUnit(_defender, 2);
        eventDatas[5] = getEventData(5, ids, params, skills);

        currentBattleId++;
        uint16 randomSeed = uint16(keccak256(abi.encodePacked(blockhash(block.number-1))));
        uint16 winnerCode = uint16(keccak256(abi.encodePacked(randomSeed + WINNER_CODE_SALT)));
        battles[_attacker] = BattleInfo(
            currentBattleId,
            _attacker,
            _defender,
            eventDatas,
            randomSeed,
            winnerCode,
            _rankBattle,
            true
        );

        emit BattleStart3(currentBattleId, _attacker, _defender, eventDatas, randomSeed);
    }
    
    function end(uint16 _winnerCode) public {
        BattleInfo storage battleInfo = battles[msg.sender];
        if (!battleInfo.exists) return;

        bool win = battleInfo.winnerCode == _winnerCode;

        if (battleInfo.rankBattle && win) {
            rank.swap(battleInfo.attacker, battleInfo.defender);
        }
        
        emit BattleEnd3(battleInfo.battleId, battleInfo.attacker, battleInfo.defender, win);
        
        delete battles[msg.sender];
    }

    function getBattleInfo(address attacker) public view onlySigner returns (uint32 battleId, uint256[7] data, uint16 randomSeed, uint16 winnerCode) {
        BattleInfo storage battleInfo = battles[attacker];
        require(battleInfo.exists);
        
        battleId = battleInfo.battleId;
        data = battleInfo.data;
        randomSeed = battleInfo.randomSeed;
        winnerCode = battleInfo.winnerCode;
    }

    /*
      highest digit(tmp): 1
      position          : 1
      hero id           : 9
      item id 1         : 9
      item id 2         : 9
      max hp            : 4
      hp                : 4
      phy               : 3
      int               : 3
      agi               : 3
      active skill id 1 : 4
      active skill id 2 : 4
      active skill id 3 : 4
      passive skill id  : 4
    */
    function getEventData(uint8 position, uint256[3] ids, int16[4] params, uint16[4] skills) public pure returns (uint256) {
        uint256 digit = 77;
        uint256 result = 0;
        
        digit -= 1; result += uint256(1) * (10**digit); // 1
        digit -= 1; result += uint256(position) * (10**digit); // 1
        digit -= 9; result += uint256(ids[0]) * (10**digit); // 9
        digit -= 9; result += uint256(ids[1]) * (10**digit); // 9
        digit -= 9; result += uint256(ids[2]) * (10**digit); // 9
        digit -= 4; result += uint256(params[0]) * (10**digit); // 4
        digit -= 4; result += uint256(params[0]) * (10**digit); // 4
        digit -= 3; result += uint256(params[1]) * (10**digit); // 3
        digit -= 3; result += uint256(params[2]) * (10**digit); // 3
        digit -= 3; result += uint256(params[3]) * (10**digit); // 3
        digit -= 4; result += uint256(skills[0]) * (10**digit); // 4
        digit -= 4; result += uint256(skills[1]) * (10**digit); // 4
        digit -= 4; result += uint256(skills[2]) * (10**digit); // 4
        digit -= 4; result += uint256(skills[3]) * (10**digit); // 4

        return result;
    }

    // following code for dev

    function getSender() public view returns (address) {
        return msg.sender;
    }
    
    function getData() public pure returns (uint256[7] results) {
        results[0] = 10010010001010010001030110001015601560570250342011200120091033000000000000000;
        results[1] = 11010020001030080001030070001012601260310770342008200120101034000000000000000;
        results[2] = 12010030001040060001030100001017401740340660342004200120071035000000000000000;
        results[3] = 13040090018050040007030100007019201920810260492007200220011014000000000000000;
        results[4] = 14040070053030070007050060007018001800300870432010200320011012000000000000000;
        results[5] = 15040050091040060007030060007013201320390800492005200120041010000000000000000;
        results[6] = 0;
    }

    function initBattle(address attacker, address defender, bool rankBattle) public {
        uint256[7] memory data;
        data[0] = 10010010001010010001030110001015601560570250342011200120091033000000000000000;
        data[1] = 11010020001030080001030070001012601260310770342008200120101034000000000000000;
        data[2] = 12010030001040060001030100001017401740340660342004200120071035000000000000000;
        data[3] = 13040090018050040007030100007019201920810260492007200220011014000000000000000;
        data[4] = 14040070053030070007050060007018001800300870432010200320011012000000000000000;
        data[5] = 15040050091040060007030060007013201320390800492005200120041010000000000000000;
        data[6] = 0;

        uint16 randomSeed = uint16(keccak256(abi.encodePacked(blockhash(block.number-1))));
        uint16 winnerCode = uint16(keccak256(abi.encodePacked(randomSeed + WINNER_CODE_SALT)));
        battles[attacker] = BattleInfo(
            100,
            attacker,
            defender,
            data,
            randomSeed,
            winnerCode,
            rankBattle,
            true
        );
    }

}
