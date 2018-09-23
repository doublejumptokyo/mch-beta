pragma solidity 0.4.24;

import "../hero/HeroAsset.sol";
import "../hero/Hero.sol";
import "../extension/ExtensionAsset.sol";
import "../extension/Extension.sol";
import "../lib/openzeppelin-solidity/contracts/access/roles/SignerRole.sol";


contract DeckManager is SignerRole {

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
        uint256 active1;
        uint256 active2;
        uint256 active3;
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
        require(!deck.exists);

        deck.units[0].hero = _unit1[0];
        deck.units[0].extension1 = _unit1[1];
        deck.units[0].extension2 = _unit1[2];
        deck.units[0].active1 = _unit1[3];
        deck.units[0].active2 = _unit1[4];
        deck.units[0].active3 = _unit1[5];

        deck.units[1].hero = _unit2[0];
        deck.units[1].extension1 = _unit2[1];
        deck.units[1].extension2 = _unit2[2];
        deck.units[1].active1 = _unit2[3];
        deck.units[1].active2 = _unit2[4];
        deck.units[1].active3 = _unit2[5];

        deck.units[2].hero = _unit3[0];
        deck.units[2].extension1 = _unit3[1];
        deck.units[2].extension2 = _unit3[2];
        deck.units[2].active1 = _unit3[3];
        deck.units[2].active2 = _unit3[4];
        deck.units[2].active3 = _unit3[5];

        deck.exists = true;
    }

    function setDeck(
        uint256[6] _unit1,
        uint256[6] _unit2,
        uint256[6] _unit3
    ) public {
        check(_unit1);
        check(_unit2);
        check(_unit3);

        Deck storage deck = decks[msg.sender];
        require(deck.exists);

        deck.units[0].hero = _unit1[0];
        deck.units[0].extension1 = _unit1[1];
        deck.units[0].extension2 = _unit1[2];
        deck.units[0].active1 = _unit1[3];
        deck.units[0].active2 = _unit1[4];
        deck.units[0].active3 = _unit1[5];

        deck.units[1].hero = _unit2[0];
        deck.units[1].extension1 = _unit2[1];
        deck.units[1].extension2 = _unit2[2];
        deck.units[1].active1 = _unit2[3];
        deck.units[1].active2 = _unit2[4];
        deck.units[1].active3 = _unit2[5];

        deck.units[2].hero = _unit3[0];
        deck.units[2].extension1 = _unit3[1];
        deck.units[2].extension2 = _unit3[2];
        deck.units[2].active1 = _unit3[3];
        deck.units[2].active2 = _unit3[4];
        deck.units[2].active3 = _unit3[5];
    }

    function check (
        uint256[6] _unit
    ) internal view {
        require(msg.sender == heroAsset.ownerOf(_unit[0]));
        require(msg.sender == extensionAsset.ownerOf(_unit[1]));
        require(msg.sender == extensionAsset.ownerOf(_unit[2]));
        uint256[3] memory activeSkills;
        (,,,,,activeSkills[0],,,) = hero.getHero(_unit[0]);
        (,,,,,activeSkills[1],) = extension.getExtension(_unit[1]);
        (,,,,,activeSkills[2],) = extension.getExtension(_unit[2]);
        bool[3] memory used;
        for (uint8 i = 3; i < 6; i++) {
            uint256 activeSkill = _unit[i];
            bool checked = false;
            for (uint8 j = 0; j < 3; j++) {
                if (!used[j] && activeSkills[j] == activeSkill) {
                    used[j] = true;
                    checked = true;
                    break;
                }
            }
            require(checked);
        }
    }

    function getDeck(address _address) public view returns (
        uint256[6] _unit1,
        uint256[6] _unit2,
        uint256[6] _unit3
    ) {
        Deck storage deck = decks[_address];

        _unit1[0] = deck.units[0].hero;
        _unit1[1] = deck.units[0].extension1;
        _unit1[2] = deck.units[0].extension2;
        _unit1[3] = deck.units[0].active1;
        _unit1[4] = deck.units[0].active2;
        _unit1[5] = deck.units[0].active3;
        
        _unit2[0] = deck.units[1].hero;
        _unit2[1] = deck.units[1].extension1;
        _unit2[2] = deck.units[1].extension2;
        _unit2[3] = deck.units[1].active1;
        _unit2[4] = deck.units[1].active2;
        _unit2[5] = deck.units[1].active3;

        _unit3[0] = deck.units[2].hero;
        _unit3[1] = deck.units[2].extension1;
        _unit3[2] = deck.units[2].extension2;
        _unit3[3] = deck.units[2].active1;
        _unit3[4] = deck.units[2].active2;
        _unit3[5] = deck.units[2].active3;
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

        (,params[0],params[1],params[2],params[3],,skills[3],,) = hero.getHero(deck.units[_index].hero);
        sumParams[0] += params[0]; sumParams[1] += params[1]; sumParams[2] += params[2]; sumParams[3] += params[3];

        (,params[0],params[1],params[2],params[3],,) = extension.getExtension(deck.units[_index].extension1);
        sumParams[0] += params[0]; sumParams[1] += params[1]; sumParams[2] += params[2]; sumParams[3] += params[3];

        (,params[0],params[1],params[2],params[3],,) = extension.getExtension(deck.units[_index].extension2);
        sumParams[0] += params[0]; sumParams[1] += params[1]; sumParams[2] += params[2]; sumParams[3] += params[3];
        
        skills[0] = uint16(deck.units[_index].active1);
        skills[1] = uint16(deck.units[_index].active2);
        skills[2] = uint16(deck.units[_index].active3);
    }
}