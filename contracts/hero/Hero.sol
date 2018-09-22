pragma solidity ^0.4.23;

import "./HeroType.sol";


contract Hero is HeroType {

    uint16 public constant HERO_TYPE_OFFSET = 10000;

    mapping(uint256 => HeroData) public heroes;
    mapping(uint16 => uint256[]) public heroTypeIds;
    address public heroManagerAddress;

    struct HeroData {
        uint16 heroType;
        int16 hp;
        int16 phy;
        int16 intl;
        int16 agi;
        uint16 activeSkillId;
        bytes  aliasName;
        bytes  ipfs;
        bool   exists;
    }
    
    modifier onlyHeroManagerAddress() {
        require(msg.sender == heroManagerAddress);
        _;
    }

    function setHeroManagerAddress(address _heroManagerAddress) public onlyOwner {
        heroManagerAddress = _heroManagerAddress;
    }

    function setIpfs(uint256 _heroId, string _ipfs, uint16 _activeSkillId) public onlyHeroManagerAddress() {
        HeroData storage heroData = heroes[_heroId];
        require(heroData.exists);
        heroData.ipfs = bytes(_ipfs);
        heroData.activeSkillId = _activeSkillId;
    }

    function setAliasName(uint256 _heroId, string _aliasName) public onlyHeroManagerAddress() {
        HeroData storage heroData = heroes[_heroId];
        require(heroData.exists);
        heroData.aliasName = bytes(_aliasName);
    }

    function createHero(uint256 _heroId) public onlyHeroManagerAddress {
        HeroData storage heroData = heroes[_heroId];
        require(!heroData.exists);
        
        uint16 _heroType = uint16(_heroId / HERO_TYPE_OFFSET);
        HeroTypeData memory heroTypeData = heroTypes[_heroType];
        require(heroTypeData.exists);

        heroData.heroType = _heroType;
        heroData.hp = heroTypeData.hp;
        heroData.phy = heroTypeData.phy;
        heroData.intl = heroTypeData.intl;
        heroData.agi = heroTypeData.agi;
        heroData.ipfs = heroTypeData.ipfs;
        heroData.activeSkillId = heroTypeData.initalActiveSkillId;
        
        heroTypeIds[_heroType].push(_heroId);
    } 

    function getHero(uint256 _heroId) public view returns (
        uint16  _heroType,
        int16   _hp,
        int16   _phy,
        int16   _intl,
        int16   _agi,
        uint16  _activeSkillId,
        uint16  _passiveSkillId,
        string  _aliasName,
        string  _ipfs
    ) {
        HeroData memory heroData = heroes[_heroId];
        require(heroData.exists);
        HeroTypeData memory heroTypeData = heroTypes[heroData.heroType];
        _heroType = heroData.heroType;
        _hp = heroData.hp;
        _phy = heroData.phy;
        _intl = heroData.intl;
        _agi = heroData.agi;
        _activeSkillId = heroData.activeSkillId;
        _passiveSkillId = heroTypeData.passiveSkillId;
        _aliasName = string(heroData.aliasName);
        _ipfs = string(heroData.ipfs);
    }

}