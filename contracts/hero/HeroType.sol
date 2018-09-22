pragma solidity ^0.4.23;
import "../lib/openzeppelin-solidity/contracts/ownership/Ownable.sol";

contract HeroType is Ownable {

    mapping(uint16 => HeroTypeData) public heroTypes;
    uint16 public supplyLimit = 10000;

    struct HeroTypeData {
        bytes  heroName;
        bytes  image;
        uint16 supply; 
        int16  ratioPHY;
        int16  ratioINT;
        int16  ratioAGI;
        uint16 initalActiveSkillId;
        uint16 passiveSkillId;
        uint16 rarity;
        bool exists;
    }

    function setHeroType(
        uint16 _heroType,
        string _heroName,
        string _image,
        uint16 _supply,
        int16  _ratioPHY,
        int16  _ratioINT,
        int16  _ratioAGI,
        uint16 _initalActiveSkillId,
        uint16 _passiveSkillId,
        uint16 _rarity
    ) public onlyOwner {
        HeroTypeData storage heroTypeData = heroTypes[_heroType];
        require(_heroType > 0);
        require(_supply > 0 && _supply < supplyLimit);
        require(!heroTypeData.exists);
        heroTypeData.heroName = bytes(_heroName);
        heroTypeData.image = bytes(_image);
        heroTypeData.supply =  _supply;
        heroTypeData.ratioPHY = _ratioPHY;
        heroTypeData.ratioINT = _ratioINT;
        heroTypeData.ratioAGI = _ratioAGI;
        heroTypeData.initalActiveSkillId = _initalActiveSkillId;
        heroTypeData.passiveSkillId = _passiveSkillId;
        heroTypeData.rarity = _rarity;
        heroTypeData.exists = true;
    }

    function getHeroType(uint16 _heroType) public view returns (
        string _heroName,
        string _image,
        uint16 _supply,
        int16  _ratioPHY,
        int16  _ratioINT,
        int16  _ratioAGI,
        uint16 _initalActiveSkillId,
        uint16 _passiveSkillId,
        uint16 _rarity
    ) {
        HeroTypeData memory heroTypeData = heroTypes[_heroType];
        require(heroTypeData.exists);
        _heroName = string(heroTypeData.heroName);
        _image = string(heroTypeData.image);
        _supply = heroTypeData.supply;
        _ratioPHY = heroTypeData.ratioPHY;
        _ratioINT = heroTypeData.ratioINT;
        _ratioAGI = heroTypeData.ratioAGI;
        _initalActiveSkillId = heroTypeData.initalActiveSkillId;
        _passiveSkillId = heroTypeData.passiveSkillId;
        _rarity = heroTypeData.rarity;
    }
}
