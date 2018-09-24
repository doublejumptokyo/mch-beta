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
    
    mapping(address=>BattleMatch) public addressToBattleMatch;
    
    struct BattleMatch {
        uint32 battleId;
        int16 rank;
        address opponent;
        uint8 state; // 0:none, 1:progress, 2:win, 3:lose, 4:timeup
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
    
    function battle(address _address) public {
        uint32 battleId = battleTransaction.init();
        
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
        addressToBattleMatch[msg.sender] = BattleMatch(battleId, _rank, _address, 0, true);
    }
    
    function next() public {
        BattleMatch storage battleMatch = addressToBattleMatch[msg.sender];
        require(battleMatch.exists);

        if (battleMatch.state == 0) {
            battleTransaction.start(battleMatch.battleId);
            return;
        } else if (battleMatch.state != 1) {
            return;
        }
        
        BattleContext.BattleState result = battleTransaction.nexts(battleMatch.battleId, TURN_COUNTS);
        if (result == BattleContext.BattleState.win) {
            battleMatch.state = 2;
            rank.swap(msg.sender, battleMatch.opponent);
            battleMatch.rank = rank.getRank(msg.sender);
        } else if (result == BattleContext.BattleState.lose) {
            battleMatch.state = 3;
        } else if (result == BattleContext.BattleState.timeUp) {
            battleMatch.state = 4;
        }
    }

    function getState() public view returns (bool, uint32, address, uint8) {
        BattleMatch storage battleMatch = addressToBattleMatch[msg.sender];
        require(battleMatch.exists);
        bool hasNext = battleMatch.state < 2;
        return (hasNext, battleMatch.battleId, battleMatch.opponent, battleMatch.state);
    }

}