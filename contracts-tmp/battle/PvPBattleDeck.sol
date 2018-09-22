pragma solidity ^0.4.23;

import "../lib/openzeppelin-solidity/contracts/ownership/Ownable.sol";
import "../hero/HeroAsset.sol";
import "../item/ItemAsset.sol";

//This is for PvP
contract PvPBattleDeck is Ownable {
    
    mapping (uint=>Party) public landToParty;

    HeroAsset heroAssetAddress;
    ItemAsset itemAssetAddress;

    struct Party {
        Unit unit1;
        Unit unit2;
        Unit unit3;
    }

    struct Unit {
        uint256 hero;
        uint256 item1;
        uint256 item2;
        uint256 activeSkill1;
        uint256 activeSkill2;
        uint256 activeSkill3;
    }
    
    function setHeroAssetAddress(address _heroAssetAddress) public onlyOwner{
        heroAssetAddress = HeroAsset(_heroAssetAddress);
    }

    function setitemAssetAddress(address _itemAssetAddress) public onlyOwner{
        itemAssetAddress = ItemAsset(_itemAssetAddress);
    }

    function isOwnedHeroAsset(
        uint256[6] _hero1,
        uint256[6] _hero2,
        uint256[6] _hero3 
    ) public returns (bool){
        return true;
    }

    function isOwnedLandAsset(
        uint256 _land        
    ) public returns (bool){
        return true;
    }   

    function isAttackable(
        uint256 _land
    ) public returns (bool){
        return true;
    }   

    function defence(
        uint256   _land,
        uint256[6] _hero1,
        uint256[6] _hero2,
        uint256[6] _hero3     
    ) public {
        require(isOwnedHeroAsset(_hero1, _hero2, _hero3));
        Party storage party = landToParty[_land]; 
        party.unit1.hero = _hero1[0];
        party.unit1.item1 = _hero1[1];
        party.unit1.item2 = _hero1[2];
        party.unit1.activeSkill1 = _hero1[3];
        party.unit1.activeSkill2 = _hero1[4];
        party.unit1.activeSkill3 = _hero1[5];
        party.unit2.hero = _hero2[0];
        party.unit2.item1 = _hero2[1];
        party.unit2.item2 = _hero2[2];
        party.unit2.activeSkill1 = _hero2[3];
        party.unit2.activeSkill2 = _hero2[4];
        party.unit2.activeSkill3 = _hero2[5];
        party.unit3.hero = _hero3[0];
        party.unit3.item1 = _hero3[1];
        party.unit3.item2 = _hero3[2];
        party.unit3.activeSkill1 = _hero3[3];
        party.unit3.activeSkill2 = _hero3[4];
        party.unit3.activeSkill3 = _hero3[5];        
    }

    function getDeck(uint256 _landId) public returns (
        uint256[6] _hero1,
        uint256[6] _hero2,
        uint256[6] _hero3          
    ) {
        Party memory party = landToParty[_landId]; 
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

    function attack(
        uint256   _land,
        uint256[6] _hero1,
        uint256[6] _hero2,
        uint256[6] _hero3     
    ) public {
        require(isAttackable(_land));
        require(isOwnedHeroAsset(_hero1, _hero2, _hero3));
        //
    }

}