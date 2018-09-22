pragma solidity 0.4.24;

import "./HeroType.sol";


contract Hero is HeroType {

    uint16 public constant HERO_TYPE_OFFSET = 10000;

    mapping(uint256 => HeroData) public heroes;
    mapping(uint16 => uint256[]) public heroTypeIds;

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

    function setIpfs(uint256 _heroId, string _ipfs, uint16 _activeSkillId) public onlyMinter {
        HeroData storage data = heroes[_heroId];
        require(data.exists);
        data.ipfs = bytes(_ipfs);
        data.activeSkillId = _activeSkillId;
    }

    function setAliasName(uint256 _heroId, string _aliasName) public onlyMinter {
        HeroData storage data = heroes[_heroId];
        require(data.exists);
        data.aliasName = bytes(_aliasName);
    }

    function createHero(uint256 _heroId) public onlyMinter {
        HeroData storage data = heroes[_heroId];
        require(!data.exists);
        
        uint16 _heroType = uint16(_heroId / HERO_TYPE_OFFSET);
        HeroTypeData memory heroTypeData = heroTypes[_heroType];
        require(heroTypeData.exists);

        data.heroType = _heroType;
        data.hp = heroTypeData.hp;
        data.phy = heroTypeData.phy;
        data.intl = heroTypeData.intl;
        data.agi = heroTypeData.agi;
        data.ipfs = heroTypeData.ipfs;
        data.activeSkillId = heroTypeData.initalActiveSkillId;
        
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
        HeroData memory data = heroes[_heroId];
        require(data.exists);
        HeroTypeData memory typeData = heroTypes[data.heroType];
        _heroType = data.heroType;
        _hp = data.hp;
        _phy = data.phy;
        _intl = data.intl;
        _agi = data.agi;
        _activeSkillId = data.activeSkillId;
        _passiveSkillId = typeData.passiveSkillId;
        _aliasName = string(data.aliasName);
        _ipfs = string(data.ipfs);
    }
    
    function getHeroTypeLength(uint16 _heroType) public view returns (uint16) {
        return uint16(heroTypeIds[_heroType].length);
    }
}