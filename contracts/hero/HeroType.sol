pragma solidity ^0.4.23;

import "../lib/openzeppelin-solidity/contracts/ownership/Ownable.sol";


contract HeroType is Ownable {

    mapping(uint16 => HeroTypeData) public heroTypes;

    struct HeroTypeData {
        bytes  heroName;
        bytes  ipfs;
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
    ) public onlyOwner {
        HeroTypeData storage heroTypeData = heroTypes[_heroType];
        // require(!heroTypeData.exists);
        heroTypeData.heroName = bytes(_heroName);
        heroTypeData.ipfs    = bytes(_ipfs);
        heroTypeData.hp = _hp;
        heroTypeData.phy = _phy;
        heroTypeData.intl = _intl;
        heroTypeData.agi = _agi;
        heroTypeData.initalActiveSkillId = _initalActiveSkillId;
        heroTypeData.passiveSkillId = _passiveSkillId;
        heroTypeData.rarity = _rarity;
        heroTypeData.exists = true;
    }

    function getHeroType(uint16 _heroType) public view returns (
        string _heroName,
        string _ipfs,
        int16  _hp,
        int16  _phy,
        int16  _intl,
        int16  _agi,
        uint16 _initalActiveSkillId,
        uint16 _passiveSkillId,
        uint16 _rarity
    ) {
        HeroTypeData memory heroTypeData = heroTypes[_heroType];
        require(heroTypeData.exists);
        _heroName = string(heroTypeData.heroName);
        _ipfs     = string(heroTypeData.ipfs);
        _hp = heroTypeData.hp;
        _phy = heroTypeData.phy;
        _intl = heroTypeData.intl;
        _agi = heroTypeData.agi;
        _initalActiveSkillId = heroTypeData.initalActiveSkillId;
        _passiveSkillId = heroTypeData.passiveSkillId;
        _rarity = heroTypeData.rarity;
    }

}
