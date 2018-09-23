pragma solidity 0.4.24;

import "../deck/DeckManager.sol";



contract BattleManager is SignerRole {

    enum Status {init, hoge}

    DeckManager public deckManager;
    mapping(address=>uint32) public addressToBattleId;
//    mapping(uint32=>)

    function setDeckManagerAddress(address _deckManagerAddress) public  {
        deckManager = DeckManager(_deckManagerAddress);
    }

    
}