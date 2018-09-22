pragma solidity ^0.4.23;

import "../lib/openzeppelin-solidity/contracts/ownership/Ownable.sol";

import "../hero/HeroAsset.sol";
import "../hero/Hero.sol";
import "../item/ItemAsset.sol";
import "../item/Item.sol";
import "./BattleTransaction.sol";

//This is for PvP
contract BattleBeta is Ownable {
    
    Hero      public hero;
    HeroAsset public heroAsset;
    Item      public item;
    ItemAsset public itemAsset;
    BattleTransaction public battleTransaction;

    mapping(address=>Party) public addressToParty;

    constructor () {
        
    }

    struct Party {
        Unit unit1;
        Unit unit2;
        Unit unit3;
    }

    struct Unit {
        uint32 hero;
        uint32 item1;
        uint32 item2;
        uint16 activeSkill1;
        uint16 activeSkill2;
        uint16 activeSkill3;
    }

    function setHeroAddress(address _hero) public onlyOwner{
        hero = Hero(_hero);
    }

    function setHeroAssetAddress(address _heroAsset) public onlyOwner{
        heroAsset = HeroAsset(_heroAsset);
    }

    function setItemAddress(address _item) public onlyOwner{
        item = Item(_item);
    }

    function setItemAssetAddress(address _itemAsset) public onlyOwner{
        itemAsset = ItemAsset(_itemAsset);
    }

    function setBattleTransactionAddress(address _battleTransaction) public onlyOwner{
        battleTransaction = BattleTransaction(_battleTransaction);

    }

    function setParty(
        uint256[6] _hero1,
        uint256[6] _hero2,
        uint256[6] _hero3     
    ) public {
        Party memory party; 
        party.unit1.hero = uint32(_hero1[0]);
        party.unit1.item1 = uint32(_hero1[1]);
        party.unit1.item2 = uint32(_hero1[2]);
        party.unit1.activeSkill1 = uint16(_hero1[3]);
        party.unit1.activeSkill2 = uint16(_hero1[4]);
        party.unit1.activeSkill3 = uint16(_hero1[5]);
        party.unit2.hero = uint32(_hero2[0]);
        party.unit2.item1 = uint32(_hero2[1]);
        party.unit2.item2 = uint32(_hero2[2]);
        party.unit2.activeSkill1 = uint16(_hero2[3]);
        party.unit2.activeSkill2 = uint16(_hero2[4]);
        party.unit2.activeSkill3 = uint16(_hero2[5]);
        party.unit3.hero = uint32(_hero3[0]);
        party.unit3.item1 = uint32(_hero3[1]);
        party.unit3.item2 = uint32(_hero3[2]);
        party.unit3.activeSkill1 = uint16(_hero3[3]);
        party.unit3.activeSkill2 = uint16(_hero3[4]);
        party.unit3.activeSkill3 = uint16(_hero3[5]);   
        addressToParty[msg.sender] = party; 
    }

    function getParty(address _address) public view returns (
        uint256[6] _hero1,
        uint256[6] _hero2,
        uint256[6] _hero3          
    ) {
        Party memory party = addressToParty[_address]; 
        _hero1[0] = party.unit1.hero;
        _hero1[1] = party.unit1.item1;
        _hero1[2] = party.unit1.item2;
        _hero1[3] = party.unit1.activeSkill1;
        _hero1[4] = party.unit1.activeSkill2;
        _hero1[5] = party.unit1.activeSkill3;
        _hero2[0] = party.unit2.hero;
        _hero2[1] = party.unit2.item1;
        _hero2[2] = party.unit2.item2;
        _hero2[3] = party.unit2.activeSkill1;
        _hero2[4] = party.unit2.activeSkill2;
        _hero2[5] = party.unit2.activeSkill3;
        _hero3[0] = party.unit3.hero;
        _hero3[1] = party.unit3.item1;
        _hero3[2] = party.unit3.item2;
        _hero3[3] = party.unit3.activeSkill1;
        _hero3[4] = party.unit3.activeSkill2;
        _hero3[5] = party.unit3.activeSkill3;
    }  

    function startBattle(address _opponent) public {

        int16[4] memory _param;
        uint16[2] memory _skill;

        Party memory _myParty = addressToParty[msg.sender];
        Unit memory _unit;
        
        _unit = _myParty.unit1;
        (_param, _skill) = _getPartyParam(_unit.hero, _unit.item1, _unit.item2);

        battleTransaction.setUnit(
            0, 
            _param[0], 
            _param[1], 
            _param[2], 
            _param[3], 
            _unit.activeSkill1, 
            _unit.activeSkill2,
            _unit.activeSkill3, 
            _skill[1], 
            _unit.hero, 
            _unit.item1, 
            _unit.item2, 
            battleTransaction.init());

        _unit = _myParty.unit2;
        (_param, _skill) = _getPartyParam(_unit.hero, _unit.item1, _unit.item2);

        battleTransaction.setUnit(
            1, 
            _param[0], 
            _param[1], 
            _param[2], 
            _param[3], 
            _unit.activeSkill1, 
            _unit.activeSkill2,
            _unit.activeSkill3, 
            _skill[1], 
            _unit.hero, 
            _unit.item1, 
            _unit.item2, 
            battleTransaction.init());

        _unit = _myParty.unit3;
        (_param, _skill) = _getPartyParam(_unit.hero, _unit.item1, _unit.item2);

        battleTransaction.setUnit(
            2, 
            _param[0], 
            _param[1], 
            _param[2], 
            _param[3], 
            _unit.activeSkill1, 
            _unit.activeSkill2,
            _unit.activeSkill3, 
            _skill[1], 
            _unit.hero, 
            _unit.item1, 
            _unit.item2, 
            battleTransaction.init());            

        Party memory _oppenentParty = addressToParty[_opponent];

        _unit = _oppenentParty.unit1;
        (_param, _skill) = _getPartyParam(_unit.hero, _unit.item1, _unit.item2);

        battleTransaction.setUnit(
            3, 
            _param[0], 
            _param[1], 
            _param[2], 
            _param[3], 
            _unit.activeSkill1, 
            _unit.activeSkill2,
            _unit.activeSkill3, 
            _skill[1], 
            _unit.hero, 
            _unit.item1, 
            _unit.item2, 
            battleTransaction.init());     

        _unit = _oppenentParty.unit2;
        (_param, _skill) = _getPartyParam(_unit.hero, _unit.item1, _unit.item2);

        battleTransaction.setUnit(
            4, 
            _param[0], 
            _param[1], 
            _param[2], 
            _param[3], 
            _unit.activeSkill1, 
            _unit.activeSkill2,
            _unit.activeSkill3, 
            _skill[1], 
            _unit.hero, 
            _unit.item1, 
            _unit.item2, 
            battleTransaction.init());     

        _unit = _oppenentParty.unit3;
        (_param, _skill) = _getPartyParam(_unit.hero, _unit.item1, _unit.item2);

        battleTransaction.setUnit(
            5, 
            _param[0], 
            _param[1], 
            _param[2], 
            _param[3], 
            _unit.activeSkill1, 
            _unit.activeSkill2,
            _unit.activeSkill3, 
            _skill[1], 
            _unit.hero, 
            _unit.item1, 
            _unit.item2, 
            battleTransaction.init());                

    }

    function _getPartyParam(uint _hero, uint _item1, uint _item2) internal returns (int16[4] _param, uint16[2] _skill) {

        int16[3] memory tempHero;
        int16[4] memory tempItem;

        (,,,tempHero,_skill,,,,,,) = hero.getHero(_hero);
        
        _param[1] = tempHero[0];
        _param[2] = tempHero[1];
        _param[3] = tempHero[2];

        (,,,tempItem,,,) = item.getItem(_item1);

        _param[0] = _param[0] + tempItem[0];
        _param[1] = _param[1] + tempItem[1];
        _param[2] = _param[2] + tempItem[2];        
        _param[3] = _param[3] + tempItem[3];        

        (,,,tempItem,,,) = item.getItem(_item2);

        _param[0] = _param[0] + tempItem[0];
        _param[1] = _param[1] + tempItem[1];
        _param[2] = _param[2] + tempItem[2];        
        _param[3] = _param[3] + tempItem[3];     

    }

}