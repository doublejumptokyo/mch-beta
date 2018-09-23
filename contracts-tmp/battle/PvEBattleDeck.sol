pragma solidity ^0.4.23;

import "../lib/openzeppelin-solidity/contracts/ownership/Ownable.sol";
import "../hero/HeroAsset.sol";
import "../item/ItemAsset.sol";
import "./RentalHeroes.sol";

//This is for PvE
contract PvEBattleDeck is Ownable {

    event Depature(address _owner, uint256 _deckIndex);
    event Return(address _owner, uint256 _deckIndex);

    HeroAsset heroAssetAddress;
    ItemAsset itemAssetAddress;
    RentalHeroes rentalHeroesAddress;
    
    mapping(address=>Party[3]) public userDeck;
    
    struct Party {
        Unit unit1;
        Unit unit2;
        Unit unit3;
        Unit unit4;
        uint64  at;
        bool lock;
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

    function setRentalHeroesAddress(address _rentalHeroesAddress) public onlyOwner{
        rentalHeroesAddress = RentalHeroes(_rentalHeroesAddress);
    }

    function isOwnedHeroAsset(
        uint256[6] _hero1,
        uint256[6] _hero2,
        uint256[6] _hero3 
    ) public returns (bool){
        return true;
    }

/*
    function isRentalAvailable(
        uint256 _hero
    ) public returns (bool){
        //
        return true;
    }
*/

    function isFinished(
        address _address, uint256 _deckIndex
    ) public returns (bool){
        return true;
    }    

    function setDeck(
        uint256   _deckIndex,
        uint256[6] _hero1,
        uint256[6] _hero2,
        uint256[6] _hero3, 
        uint256 _rentalIndex        
    ) public {
        Party storage party = userDeck[msg.sender][_deckIndex]; 
        require(!party.lock);
        require(isOwnedHeroAsset(_hero1, _hero2, _hero3));
//        require(isRentalHeroAvailabe(_rentalIndex));        
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

        uint256[6] memory _hero4 = rentalHeroesAddress.getDeck(_rentalIndex);
        rentalHeroesAddress.rentalUnit(_rentalIndex);

        party.unit4.hero = _hero4[0];
        party.unit4.item1 = _hero4[1];
        party.unit4.item2 = _hero4[2];
        party.unit4.activeSkill1 = _hero4[3];
        party.unit4.activeSkill2 = _hero4[4];
        party.unit4.activeSkill3 = _hero4[5];
    }
    
    function getDeck(address _address, uint256 _deckIndex) public returns (
        uint256[6] _hero1,
        uint256[6] _hero2,
        uint256[6] _hero3, 
        uint256[6] _hero4              
    ) {
        Party memory party = userDeck[_address][_deckIndex]; 
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
        _hero4[0] = party.unit4.hero;
        _hero4[1] = party.unit4.item1;
        _hero4[2] = party.unit4.item2;
        _hero4[3] = party.unit4.activeSkill1;
        _hero4[4] = party.unit4.activeSkill2;
        _hero4[5] = party.unit4.activeSkill3;
    }

    function depature(uint256 _deckIndex) public {
        Party storage party = userDeck[msg.sender][_deckIndex]; 
        require(!party.lock);
//        require(isOwnedHeroAsset(party.unit1, party.unit2, party.unit3));
//        require(isRentalHeroAvailabe(party.hero4));
        party.at = uint64(block.timestamp);
        party.lock = true;
    }

    function arrival(uint256 _deckIndex) public {
        require(isFinished(msg.sender, _deckIndex));
        userDeck[msg.sender][_deckIndex].lock = false;        
    }

}