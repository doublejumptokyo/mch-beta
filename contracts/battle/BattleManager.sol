pragma solidity 0.4.24;

import "./BattleTransaction.sol";
import "../deck/DeckManager.sol";
import "../hero/Hero.sol";
import "../extension/Extension.sol";
import "../lib/openzeppelin-solidity/contracts/ownership/Ownable.sol";


contract BattleManager is Ownable {

    enum Status {init, inProgress, finished}

    DeckManager public deckManager;
    Hero public hero;
    Extension public extension;
    BattleTransaction public battleTransaction;
    
    mapping(address=>uint32) public addressToBattleId;
    mapping(uint32=>Status) public battleIdToStatus;

    function setDeckManagerAddress(address _deckManagerAddress) public onlyOwner {
        deckManager = DeckManager(_deckManagerAddress);
    }
    
    function setHeroAddress(address _heroAddress) public onlyOwner {
        hero = Hero(_heroAddress);
    }

    function setExtensionAddress(address _extensionAddress) public onlyOwner {
        extension = Extension(_extensionAddress);
    }

    function setBattleTransactionAddress(address _battleTransactionAddress) public onlyOwner {
        battleTransaction = BattleTransaction(_battleTransactionAddress);
    }

    function getCurrentBattleId() public view returns (uint32) {
        return addressToBattleId[msg.sender];
    }
    
    function battle(address _address) public {
        uint32 battleId = battleTransaction.init();

        uint256[6][3] memory allyUnits;
        uint256[6][3] memory enemyUnits;
        (allyUnits[0], allyUnits[1], allyUnits[2]) = deckManager.getDeck(msg.sender);
        (enemyUnits[0], enemyUnits[1], enemyUnits[2]) = deckManager.getDeck(_address);

        int16[4] sumParams;
        int16[4] params;
        uint16 passiveSkillId;

        sumParams[0] = 0; sumParams[1] = 0; sumParams[2] = 0; sumParams[3] = 0;
        (,params[0],params[1],params[2],params[3],,passiveSkillId,,) = hero.getHero(allyUnits[0][0]);
        sumParams[0] += params[0]; sumParams[1] += params[1]; sumParams[2] += params[2]; sumParams[3] += params[3];
        (,params[0],params[1],params[2],params[3],,) = extension.getExtension(allyUnits[0][1]);
        sumParams[0] += params[0]; sumParams[1] += params[1]; sumParams[2] += params[2]; sumParams[3] += params[3];
        (,params[0],params[1],params[2],params[3],,) = extension.getExtension(allyUnits[0][2]);
        sumParams[0] += params[0]; sumParams[1] += params[1]; sumParams[2] += params[2]; sumParams[3] += params[3];
/*
        battleTransaction.setUnit(
            0, sumParams[0], sumParams[0], sumParams[0], sumParams[0],
            allyUnits[0][3], allyUnits[0][4], allyUnits[0][5], passiveSkillId,
            allyUnits[0][0], allyUnits[0][1], allyUnits[0][2], battleId
        );

/*        
        
        int16 hpSum; int16 phySum; int16 intlSum; int16 agiSum;
        int16 hp; int16 phy; int16 intl; int16 agi;
        uint16 passiveSkillId;


        hpSum = 0; phySum = 0; intlSum = 0; agiSum = 0;
        (,hp,phy,intl,agi,,passiveSkillId,,) = hero.getHero(allyUnits[0][0]);
        hpSum += hp; phySum += phy; intlSum += intl; agiSum += agi;
        (,hp,phy,intl,agi,,) = extension.getExtension(allyUnits[0][1]);
        hpSum += hp; phySum += phy; intlSum += intl; agiSum += agi;
        (,hp,phy,intl,agi,,) = extension.getExtension(allyUnits[0][2]);
        hpSum += hp; phySum += phy; intlSum += intl; agiSum += agi;

        battleTransaction.setUnit(
            0, hpSum, phySum, intlSum, agiSum,
            uint16(allyUnits[0][3]), uint16(allyUnits[0][4]), uint16(allyUnits[0][5]), passiveSkillId,
            uint32(allyUnits[0][0]), uint32(allyUnits[0][1]), uint32(allyUnits[0][2]), battleId
        );

        
        */
        
        
        
    }
}