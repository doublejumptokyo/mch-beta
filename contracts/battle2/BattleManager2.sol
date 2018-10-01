pragma solidity 0.4.24;

import "../deck/DeckManager.sol";
import "../match/Rank.sol";
import "../hero/Hero.sol";
import "../extension/Extension.sol";
import "../lib/openzeppelin-solidity/contracts/access/roles/SignerRole.sol";


contract BattleManager2 is SignerRole {

    event BattleStart2(uint32 indexed battleId, address indexed attacker, address indexed defender, uint256[7] data, uint16 randomSeed);
    event BattleEnd2(uint32 indexed battleId, address indexed attacker, address indexed defender, uint8 result, uint8 actionCounts);

    uint8 constant public State$progress = 0;
    uint8 constant public State$win = 2;

    DeckManager public deckManager;
    Rank public rank;
    
    uint32 public battleId = 30000;
    mapping(address=>uint32) public addressToBattleId;
    mapping(uint32=>BattleInfo) public battleIdToBattleInfo;

    struct BattleInfo {
        address attacker;
        address defender;
        uint8 actionCounts;
        uint8 state;
        bool rankBattle;
        bool exists;
    }

    function setDeckManagerAddress(address _deckManagerAddress) public onlySigner {
        deckManager = DeckManager(_deckManagerAddress);
    }

    function setRankAddress(address _rankAddress) public onlySigner {
        rank = Rank(_rankAddress);
    }

    function start(address _address, bool _rankBattle) public returns (uint32) {
        battleId++;
        
        uint256[3] memory ids;
        int16[4] memory params;
        uint16[4] memory skills;
        uint256[7] memory eventDatas;

        (ids, params, skills) = deckManager.getUnit(msg.sender, 0);
        eventDatas[0] = getEventData(0, ids, params, skills);

        (ids, params, skills) = deckManager.getUnit(msg.sender, 1);
        eventDatas[1] = getEventData(1, ids, params, skills);

        (ids, params, skills) = deckManager.getUnit(msg.sender, 2);
        eventDatas[2] = getEventData(2, ids, params, skills);

        (ids, params, skills) = deckManager.getUnit(_address, 0);
        eventDatas[3] = getEventData(3, ids, params, skills);

        (ids, params, skills) = deckManager.getUnit(_address, 1);
        eventDatas[4] = getEventData(4, ids, params, skills);

        (ids, params, skills) = deckManager.getUnit(_address, 2);
        eventDatas[5] = getEventData(5, ids, params, skills);

        uint16 randomSeed = uint16(keccak256(abi.encodePacked(blockhash(block.number-1))));

        emit BattleStart2(battleId, msg.sender, _address, eventDatas, randomSeed);

        addressToBattleId[msg.sender] = battleId;
        battleIdToBattleInfo[battleId] = BattleInfo(msg.sender, _address, 0, State$progress, _rankBattle, true);
    }
    
    function setResult(uint32 _battleId, uint8 _result, uint8 _actionCounts) public onlySigner {
        BattleInfo storage battleInfo = battleIdToBattleInfo[_battleId];
        if (!battleInfo.exists) return;
        
        battleInfo.state = _result;
        battleInfo.actionCounts = _actionCounts;
    }
    
    function end() public {
        uint32 _battleId = addressToBattleId[msg.sender];
        BattleInfo storage battleInfo = battleIdToBattleInfo[_battleId];
        if (!battleInfo.exists || battleInfo.state == State$progress) return;

        if (battleInfo.rankBattle && battleInfo.state == State$win) {
            rank.swap(msg.sender, battleInfo.defender);
        }
        
        emit BattleEnd2(_battleId, battleInfo.attacker, battleInfo.defender, battleInfo.state, battleInfo.actionCounts);
        
        delete addressToBattleId[msg.sender];
        delete battleIdToBattleInfo[_battleId];
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
}
