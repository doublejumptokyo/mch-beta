pragma solidity 0.4.24;

import "../hero/HeroAsset.sol";
import "../hero/Hero.sol";
import "../extension/ExtensionAsset.sol";
import "../extension/Extension.sol";
import "../lib/openzeppelin-solidity/contracts/access/roles/SignerRole.sol";


contract DeckManager is SignerRole {

    event DeckSetting (address indexed user, uint256[6] unit1, uint256[6] unit2, uint256[6] unit3);

    mapping(address => Deck) decks;

    HeroAsset heroAsset;
    Hero hero;
    ExtensionAsset extensionAsset;
    Extension extension;

    struct Deck {
        Unit[3] units;
        bool exists;
    }

    struct Unit {
        uint256 hero;
        uint256 extension1;
        uint256 extension2;
        uint256 skillOrder1;
        uint256 skillOrder2;
        uint256 skillOrder3;
    }
    
    function setHeroAssetAddress(address _heroAssetAddress) public onlySigner {
        heroAsset = HeroAsset(_heroAssetAddress);
    }

    function setHeroAddress(address _heroAddress) public onlySigner {
        hero = Hero(_heroAddress);
    }

    function setExtensionAssetAddress(address _extensionAssetAddress) public onlySigner {
        extensionAsset = ExtensionAsset(_extensionAssetAddress);
    }

    function setExtensionAddress(address _extensionAddress) public onlySigner {
        extension = Extension(_extensionAddress);
    }
    
    function setInitialDeck(
        address _address,
        uint256[6] _unit1,
        uint256[6] _unit2,
        uint256[6] _unit3
    ) public onlySigner {
        Deck storage deck = decks[_address];

        deck.units[0].hero = _unit1[0];
        deck.units[0].extension1 = _unit1[1];
        deck.units[0].extension2 = _unit1[2];
        deck.units[0].skillOrder1 = _unit1[3];
        deck.units[0].skillOrder2 = _unit1[4];
        deck.units[0].skillOrder3 = _unit1[5];

        deck.units[1].hero = _unit2[0];
        deck.units[1].extension1 = _unit2[1];
        deck.units[1].extension2 = _unit2[2];
        deck.units[1].skillOrder1 = _unit2[3];
        deck.units[1].skillOrder2 = _unit2[4];
        deck.units[1].skillOrder3 = _unit2[5];

        deck.units[2].hero = _unit3[0];
        deck.units[2].extension1 = _unit3[1];
        deck.units[2].extension2 = _unit3[2];
        deck.units[2].skillOrder1 = _unit3[3];
        deck.units[2].skillOrder2 = _unit3[4];
        deck.units[2].skillOrder3 = _unit3[5];

        deck.exists = true;
        
        emit DeckSetting (_address, _unit1, _unit2, _unit3);
    }

    function setDeck(
        uint256[6] _unit1,
        uint256[6] _unit2,
        uint256[6] _unit3
    ) public {
        check(msg.sender, _unit1);
        check(msg.sender, _unit2);
        check(msg.sender, _unit3);
        checkDuplicate(_unit1, _unit2, _unit3);

        Deck storage deck = decks[msg.sender];
        require(deck.exists);

        deck.units[0].hero = _unit1[0];
        deck.units[0].extension1 = _unit1[1];
        deck.units[0].extension2 = _unit1[2];
        deck.units[0].skillOrder1 = _unit1[3];
        deck.units[0].skillOrder2 = _unit1[4];
        deck.units[0].skillOrder3 = _unit1[5];

        deck.units[1].hero = _unit2[0];
        deck.units[1].extension1 = _unit2[1];
        deck.units[1].extension2 = _unit2[2];
        deck.units[1].skillOrder1 = _unit2[3];
        deck.units[1].skillOrder2 = _unit2[4];
        deck.units[1].skillOrder3 = _unit2[5];

        deck.units[2].hero = _unit3[0];
        deck.units[2].extension1 = _unit3[1];
        deck.units[2].extension2 = _unit3[2];
        deck.units[2].skillOrder1 = _unit3[3];
        deck.units[2].skillOrder2 = _unit3[4];
        deck.units[2].skillOrder3 = _unit3[5];

        emit DeckSetting (msg.sender, _unit1, _unit2, _unit3);
    }

    function check (
        address _owner, uint256[6] _unit
    ) internal view {
        require(_owner == heroAsset.ownerOf(_unit[0]));
        require(_owner == extensionAsset.ownerOf(_unit[1]));
        require(_owner == extensionAsset.ownerOf(_unit[2]));
        require(_unit[3] + _unit[4] + _unit[5] == 3);
        require((_unit[3] + 1) * (_unit[4] + 1 ) * (_unit[5] + 1) == 6);
    }

    function checkDuplicate (
        uint256[6] _unit1,
        uint256[6] _unit2,
        uint256[6] _unit3
    ) internal pure {
        require(_unit1[0] != _unit2[0] && _unit2[0] != _unit3[0] && _unit3[0] != _unit1[0]);
        require(_unit1[1] != _unit1[2] && _unit1[1] != _unit2[1] && _unit1[1] != _unit2[2] && _unit1[1] != _unit3[1] && _unit1[1] != _unit3[2]);
        require(_unit1[2] != _unit2[1] && _unit1[2] != _unit2[2] && _unit1[2] != _unit3[1] && _unit1[2] != _unit3[2]);
        require(_unit2[1] != _unit2[2] && _unit2[1] != _unit3[1] && _unit2[1] != _unit3[2]);
        require(_unit2[2] != _unit3[1] && _unit2[2] != _unit3[2]);
        require(_unit3[1] != _unit3[2]);
    }    

    function getDeck(address _address) public view returns (
        uint256[6] unit1,
        uint256[6] unit2,
        uint256[6] unit3
    ) {
        Deck storage deck = decks[_address];

        unit1[0] = deck.units[0].hero;
        unit1[1] = deck.units[0].extension1;
        unit1[2] = deck.units[0].extension2;
        unit1[3] = deck.units[0].skillOrder1;
        unit1[4] = deck.units[0].skillOrder2;
        unit1[5] = deck.units[0].skillOrder3;
        
        unit2[0] = deck.units[1].hero;
        unit2[1] = deck.units[1].extension1;
        unit2[2] = deck.units[1].extension2;
        unit2[3] = deck.units[1].skillOrder1;
        unit2[4] = deck.units[1].skillOrder2;
        unit2[5] = deck.units[1].skillOrder3;

        unit3[0] = deck.units[2].hero;
        unit3[1] = deck.units[2].extension1;
        unit3[2] = deck.units[2].extension2;
        unit3[3] = deck.units[2].skillOrder1;
        unit3[4] = deck.units[2].skillOrder2;
        unit3[5] = deck.units[2].skillOrder3;
    }

    function getUnit(address _address, uint8 _index) public view returns (
        uint256[3] ids, int16[4] sumParams, uint16[4] skills
    ) {
        Deck storage deck = decks[_address];
        require(deck.exists);

        ids[0] = deck.units[_index].hero;
        ids[1] = deck.units[_index].extension1;
        ids[2] = deck.units[_index].extension2;

        int16[4] memory params;
        uint16[3] memory activeSkills;

        (,params[0],params[1],params[2],params[3],activeSkills[0],skills[3],,) = hero.getHero(deck.units[_index].hero);
        sumParams[0] += params[0]; sumParams[1] += params[1]; sumParams[2] += params[2]; sumParams[3] += params[3];

        (,params[0],params[1],params[2],params[3],activeSkills[1],) = extension.getExtension(deck.units[_index].extension1);
        sumParams[0] += params[0]; sumParams[1] += params[1]; sumParams[2] += params[2]; sumParams[3] += params[3];

        (,params[0],params[1],params[2],params[3],activeSkills[2],) = extension.getExtension(deck.units[_index].extension2);
        sumParams[0] += params[0]; sumParams[1] += params[1]; sumParams[2] += params[2]; sumParams[3] += params[3];
        
        skills[0] = activeSkills[deck.units[_index].skillOrder1];
        skills[1] = activeSkills[deck.units[_index].skillOrder2];
        skills[2] = activeSkills[deck.units[_index].skillOrder3];
    }

}
