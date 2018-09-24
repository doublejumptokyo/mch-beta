pragma solidity 0.4.24;

import "./BattleContext.sol";
import "./BattleTransaction.sol";
import "../deck/DeckManager.sol";
import "../match/Rank.sol";
import "../hero/Hero.sol";
import "../extension/Extension.sol";
import "../lib/openzeppelin-solidity/contracts/ownership/Ownable.sol";


contract BattleManager is Ownable {

    uint8 public constant TURN_COUNTS = 20;

    DeckManager public deckManager;
    BattleTransaction public battleTransaction;
    Rank public rank;
    
    mapping(address=>BattleInfo) public addressToBattleInfo;
    mapping(address=>BattleInfo) public addressToBattleInfoDev;
    
    struct BattleInfo {
        uint32 battleId;
        int16 rank;
        address opponent;
        uint8 state; // 0:none, 1:progress, 2:win, 3:lose, 4:timeup
        bool rankBattle;
        bool exists;
    }

    function setDeckManagerAddress(address _deckManagerAddress) public onlyOwner {
        deckManager = DeckManager(_deckManagerAddress);
    }

    function setBattleTransactionAddress(address _battleTransactionAddress) public onlyOwner {
        battleTransaction = BattleTransaction(_battleTransactionAddress);
    }

    function setRankAddress(address _rankAddress) public onlyOwner {
        rank = Rank(_rankAddress);
    }

    function battle(address _address, bool _rankBattle) public {
        uint32 battleId = battleTransaction.init(msg.sender, _address);
        
        uint256[3] memory ids;
        int16[4] memory params;
        uint16[4] memory skills;

        (ids, params, skills) = deckManager.getUnit(msg.sender, 0);
        battleTransaction.setUnit(battleId, 0, ids, params, skills);

        (ids, params, skills) = deckManager.getUnit(msg.sender, 1);
        battleTransaction.setUnit(battleId, 1, ids, params, skills);

        (ids, params, skills) = deckManager.getUnit(msg.sender, 2);
        battleTransaction.setUnit(battleId, 2, ids, params, skills);

        (ids, params, skills) = deckManager.getUnit(_address, 0);
        battleTransaction.setUnit(battleId, 3, ids, params, skills);

        (ids, params, skills) = deckManager.getUnit(_address, 1);
        battleTransaction.setUnit(battleId, 4, ids, params, skills);

        (ids, params, skills) = deckManager.getUnit(_address, 2);
        battleTransaction.setUnit(battleId, 5, ids, params, skills);

        int16 _rank = rank.getRank(msg.sender);
        addressToBattleInfo[msg.sender] = BattleInfo(battleId, _rank, _address, 0, _rankBattle, true);
    }
    
    function next() public {
        BattleInfo storage battleInfo = addressToBattleInfo[msg.sender];
        require(battleInfo.exists);

        if (battleInfo.state == 0) {
            battleTransaction.start(battleInfo.battleId);
            return;
        } else if (battleInfo.state != 1) {
            return;
        }
        
        BattleContext.BattleState result = battleTransaction.nexts(battleInfo.battleId, TURN_COUNTS);
        if (result == BattleContext.BattleState.win) {
            battleInfo.state = 2;
            if (battleInfo.rankBattle) {
                rank.swap(msg.sender, battleInfo.opponent);
                battleInfo.rank = rank.getRank(msg.sender);
            }
        } else if (result == BattleContext.BattleState.lose) {
            battleInfo.state = 3;
        } else if (result == BattleContext.BattleState.timeUp) {
            battleInfo.state = 4;
        }
    }

    function getState() public view returns (bool, uint32, address, uint8, bool) {
        BattleInfo storage battleInfo = addressToBattleInfo[msg.sender];
        require(battleInfo.exists);
        bool hasNext = battleInfo.state < 2;
        return (hasNext, battleInfo.battleId, battleInfo.opponent, battleInfo.state, battleInfo.rankBattle);
    }

    // ----- dev

    function battleDev(address _attacker, address _defender) public {
        uint32 battleId = battleTransaction.init(_attacker, _defender);
        
        uint256[3] memory ids;
        int16[4] memory params;
        uint16[4] memory skills;

        (ids, params, skills) = deckManager.getUnit(_attacker, 0);
        battleTransaction.setUnit(battleId, 0, ids, params, skills);

        (ids, params, skills) = deckManager.getUnit(_attacker, 1);
        battleTransaction.setUnit(battleId, 1, ids, params, skills);

        (ids, params, skills) = deckManager.getUnit(_attacker, 2);
        battleTransaction.setUnit(battleId, 2, ids, params, skills);

        (ids, params, skills) = deckManager.getUnit(_defender, 0);
        battleTransaction.setUnit(battleId, 3, ids, params, skills);

        (ids, params, skills) = deckManager.getUnit(_defender, 1);
        battleTransaction.setUnit(battleId, 4, ids, params, skills);

        (ids, params, skills) = deckManager.getUnit(_defender, 2);
        battleTransaction.setUnit(battleId, 5, ids, params, skills);

        int16 _rank = rank.getRank(_attacker);
        addressToBattleInfoDev[_attacker] = BattleInfo(battleId, _rank, _defender, 0, false, true);
    }
    
    function nextDev(address _attacker) public {
        BattleInfo storage battleInfo = addressToBattleInfoDev[_attacker];
        require(battleInfo.exists);

        if (battleInfo.state == 0) {
            battleTransaction.start(battleInfo.battleId);
            return;
        } else if (battleInfo.state != 1) {
            return;
        }
        
        BattleContext.BattleState result = battleTransaction.nexts(battleInfo.battleId, TURN_COUNTS);
        if (result == BattleContext.BattleState.win) {
            battleInfo.state = 2;
            if (battleInfo.rankBattle) {
                rank.swap(_attacker, battleInfo.opponent);
                battleInfo.rank = rank.getRank(_attacker);
            }
        } else if (result == BattleContext.BattleState.lose) {
            battleInfo.state = 3;
        } else if (result == BattleContext.BattleState.timeUp) {
            battleInfo.state = 4;
        }
    }

    function getStateDev(address _attacker) public view returns (bool, uint32, address, uint8, bool) {
        BattleInfo storage battleInfo = addressToBattleInfoDev[_attacker];
        require(battleInfo.exists);
        bool hasNext = battleInfo.state < 2;
        return (hasNext, battleInfo.battleId, battleInfo.opponent, battleInfo.state, battleInfo.rankBattle);
    }

}
