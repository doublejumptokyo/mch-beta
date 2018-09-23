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
        Unit unit1;
        Unit unit2;
        Unit unit3;
    }

    struct Unit {
        uint256 heroId;
        uint256 extensionId1;
        uint256 extensionId2;
        uint256 activeSkillId1;
        uint256 activeSkillId2;
        uint256 activeSkillId3;
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

        deck.unit1.heroId = _unit1[0];
        deck.unit1.extensionId1 = _unit1[1];
        deck.unit1.extensionId2 = _unit1[2];
        deck.unit1.activeSkillId1 = _unit1[3];
        deck.unit1.activeSkillId2 = _unit1[4];
        deck.unit1.activeSkillId3 = _unit1[5];

        deck.unit2.heroId = _unit2[0];
        deck.unit2.extensionId1 = _unit2[1];
        deck.unit2.extensionId2 = _unit2[2];
        deck.unit2.activeSkillId1 = _unit2[3];
        deck.unit2.activeSkillId2 = _unit2[4];
        deck.unit2.activeSkillId3 = _unit2[5];

        deck.unit3.heroId = _unit3[0];
        deck.unit3.extensionId1 = _unit3[1];
        deck.unit3.extensionId2 = _unit3[2];
        deck.unit3.activeSkillId1 = _unit3[3];
        deck.unit3.activeSkillId2 = _unit3[4];
        deck.unit3.activeSkillId3 = _unit3[5];
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

        deck.unit1.heroId = _unit1[0];
        deck.unit1.extensionId1 = _unit1[1];
        deck.unit1.extensionId2 = _unit1[2];
        deck.unit1.activeSkillId1 = _unit1[3];
        deck.unit1.activeSkillId2 = _unit1[4];
        deck.unit1.activeSkillId3 = _unit1[5];

        deck.unit2.heroId = _unit2[0];
        deck.unit2.extensionId1 = _unit2[1];
        deck.unit2.extensionId2 = _unit2[2];
        deck.unit2.activeSkillId1 = _unit2[3];
        deck.unit2.activeSkillId2 = _unit2[4];
        deck.unit2.activeSkillId3 = _unit2[5];

        deck.unit3.heroId = _unit3[0];
        deck.unit3.extensionId1 = _unit3[1];
        deck.unit3.extensionId2 = _unit3[2];
        deck.unit3.activeSkillId1 = _unit3[3];
        deck.unit3.activeSkillId2 = _unit3[4];
        deck.unit3.activeSkillId3 = _unit3[5];
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

        _unit1[0] = deck.unit1.heroId;
        _unit1[1] = deck.unit1.extensionId1;
        _unit1[2] = deck.unit1.extensionId2;
        _unit1[3] = deck.unit1.activeSkillId1;
        _unit1[4] = deck.unit1.activeSkillId2;
        _unit1[5] = deck.unit1.activeSkillId3;
        
        _unit2[0] = deck.unit2.heroId;
        _unit2[1] = deck.unit2.extensionId1;
        _unit2[2] = deck.unit2.extensionId2;
        _unit2[3] = deck.unit2.activeSkillId1;
        _unit2[4] = deck.unit2.activeSkillId2;
        _unit2[5] = deck.unit2.activeSkillId3;

        _unit3[0] = deck.unit3.heroId;
        _unit3[1] = deck.unit3.extensionId1;
        _unit3[2] = deck.unit3.extensionId2;
        _unit3[3] = deck.unit3.activeSkillId1;
        _unit3[4] = deck.unit3.activeSkillId2;
        _unit3[5] = deck.unit3.activeSkillId3;
    }

}