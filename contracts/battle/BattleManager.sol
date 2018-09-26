pragma solidity 0.4.24;

import "./BattleContext.sol";
import "./BattleTransaction.sol";
import "../deck/DeckManager.sol";
import "../match/Rank.sol";
import "../hero/Hero.sol";
import "../extension/Extension.sol";
import "../lib/openzeppelin-solidity/contracts/ownership/Ownable.sol";


contract BattleManager is Ownable {

    uint8 public constant TURN_COUNTS = 10;

    DeckManager public deckManager;
    BattleTransaction public battleTransaction;
    Rank public rank;
    
    mapping(address=>BattleInfo) public addressToBattleInfo;
    mapping(address=>BattleInfo) public addressToBattleInfoDev;
    
    enum State {progress, win, lose, timeUp, finished}
    
    struct BattleInfo {
        uint32 battleId;
        address attacker;
        address defender;
        State state;
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

    function start(address _address, bool _rankBattle) public {
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

        battleTransaction.start(battleId);

        addressToBattleInfo[msg.sender] = BattleInfo(battleId, msg.sender, _address, State.progress, _rankBattle, true);
    }
    
    function next() public {
        BattleInfo storage battleInfo = addressToBattleInfo[msg.sender];
        require(battleInfo.exists);

        if (battleInfo.state != State.progress) return;
        
        BattleContext.BattleState result = battleTransaction.nexts(battleInfo.battleId, TURN_COUNTS);

        if (result == BattleContext.BattleState.win) {
            battleInfo.state = State.win;
        } else if (result == BattleContext.BattleState.lose) {
            battleInfo.state = State.lose;
        } else if (result == BattleContext.BattleState.timeUp) {
            battleInfo.state = State.timeUp;
        }
    }
    
    function end() public {
        BattleInfo storage battleInfo = addressToBattleInfo[msg.sender];
        require(battleInfo.exists);
        
        if(battleInfo.state == State.progress || battleInfo.state == State.finished) return;

        battleTransaction.end(battleInfo.battleId);
        
        if (battleInfo.rankBattle && battleInfo.state == State.win) {
            rank.swap(msg.sender, battleInfo.defender);
        }
        battleInfo.state = State.finished;
    }

    function hasNext() public view returns (bool) {
        BattleInfo storage battleInfo = addressToBattleInfo[msg.sender];
        return battleInfo.exists && battleInfo.state == State.progress;
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

        battleTransaction.start(battleId);

        addressToBattleInfoDev[_attacker] = BattleInfo(battleId, _attacker, _defender, State.progress, false, true);
    }
    
    function nextDev(address _attacker) public {
        BattleInfo storage battleInfo = addressToBattleInfo[_attacker];
        require(battleInfo.exists);

        if (battleInfo.state != State.progress) return;
        
        BattleContext.BattleState result = battleTransaction.nexts(battleInfo.battleId, TURN_COUNTS);

        if (result == BattleContext.BattleState.win) {
            battleInfo.state = State.win;
        } else if (result == BattleContext.BattleState.lose) {
            battleInfo.state = State.lose;
        } else if (result == BattleContext.BattleState.timeUp) {
            battleInfo.state = State.timeUp;
        }
    }

    function endDev(address _attacker) public {
        BattleInfo storage battleInfo = addressToBattleInfo[_attacker];
        require(battleInfo.exists);
        
        if(battleInfo.state == State.progress || battleInfo.state == State.finished) return;

        battleTransaction.end(battleInfo.battleId);
        
        if (battleInfo.rankBattle && battleInfo.state == State.win) {
            rank.swap(battleInfo.attacker, battleInfo.defender);
        }
        battleInfo.state = State.finished;
    }

    function hasNextDev(address _attacker) public view returns (bool) {
        BattleInfo storage battleInfo = addressToBattleInfo[_attacker];
        return battleInfo.exists && battleInfo.state == State.progress;
    }

}
