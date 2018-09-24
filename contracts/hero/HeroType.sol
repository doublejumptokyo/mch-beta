pragma solidity 0.4.24;

import "../lib/openzeppelin-solidity/contracts/access/roles/MinterRole.sol";


contract HeroType is MinterRole {

    event HeroTypeSetting (uint16 heroType, string name, string ipfs, int16 hp, int16 phy, int16 intl, int16 agi, uint16 initialActiveSkillId, uint16 passiveSkillId, uint16 rarity);

    mapping(uint16 => HeroTypeData) public heroTypes;

    struct HeroTypeData {
        string  heroName;
        string  ipfs;
        int16  hp;
        int16  phy;
        int16  intl;
        int16  agi;
        uint16 initalActiveSkillId;
        uint16 passiveSkillId;
        uint16 rarity;
        bool   exists;
    }

    function setHeroType(
        uint16 _heroType,
        string _heroName,
        string _ipfs,
        int16  _hp,
        int16  _phy,
        int16  _intl,
        int16  _agi,
        uint16 _initalActiveSkillId,
        uint16 _passiveSkillId,
        uint16 _rarity
    ) public onlyMinter {
        HeroTypeData storage heroTypeData = heroTypes[_heroType];
        // require(!heroTypeData.exists);
        heroTypeData.heroName = _heroName;
        heroTypeData.ipfs = _ipfs;
        heroTypeData.hp = _hp;
        heroTypeData.phy = _phy;
        heroTypeData.intl = _intl;
        heroTypeData.agi = _agi;
        heroTypeData.initalActiveSkillId = _initalActiveSkillId;
        heroTypeData.passiveSkillId = _passiveSkillId;
        heroTypeData.rarity = _rarity;
        heroTypeData.exists = true;
        
        emit HeroTypeSetting (_heroType, _heroName, _ipfs, _hp, _phy, _intl, _agi, _initalActiveSkillId, _passiveSkillId, _rarity);
    }

    function getHeroType(uint16 _heroType) public view returns (
        string heroName,
        string ipfs,
        int16  hp,
        int16  phy,
        int16  intl,
        int16  agi,
        uint16 initalActiveSkillId,
        uint16 passiveSkillId,
        uint16 rarity
    ) {
        HeroTypeData memory heroTypeData = heroTypes[_heroType];
        require(heroTypeData.exists);
        heroName = heroTypeData.heroName;
        ipfs     = heroTypeData.ipfs;
        hp = heroTypeData.hp;
        phy = heroTypeData.phy;
        intl = heroTypeData.intl;
        agi = heroTypeData.agi;
        initalActiveSkillId = heroTypeData.initalActiveSkillId;
        passiveSkillId = heroTypeData.passiveSkillId;
        rarity = heroTypeData.rarity;
    }

}
