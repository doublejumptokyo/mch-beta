pragma solidity 0.4.24;

import "./HeroType.sol";


contract Hero is HeroType {

    event HeroSetting (uint256 heroId, string name, string ipfs);

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
        string aliasName;
        string ipfs;
        bool exists;
    }

    function setIpfs(uint256 _heroId, string _ipfs, uint16 _activeSkillId) public onlyMinter {
        HeroData storage data = heroes[_heroId];
        require(data.exists);
        data.ipfs = _ipfs;
        data.activeSkillId = _activeSkillId;
        
        emit HeroSetting (_heroId, data.aliasName, data.ipfs);
    }

    function setAliasName(uint256 _heroId, string _aliasName) public onlyMinter {
        HeroData storage data = heroes[_heroId];
        require(data.exists);
        data.aliasName = _aliasName;

        emit HeroSetting (_heroId, data.aliasName, data.ipfs);
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
        data.exists = true;
        
        heroTypeIds[_heroType].push(_heroId);
    } 

    function updateHero(uint256 _heroId) public onlyMinter {
        HeroData storage data = heroes[_heroId];
        require(data.exists);
        
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
    }

    function getHero(uint256 _heroId) public view returns (
        uint16  heroType,
        int16   hp,
        int16   phy,
        int16   intl,
        int16   agi,
        uint16  activeSkillId,
        uint16  passiveSkillId,
        string  aliasName,
        string  ipfs
    ) {
        HeroData memory data = heroes[_heroId];
        require(data.exists);
        HeroTypeData memory typeData = heroTypes[data.heroType];
        heroType = data.heroType;
        hp = data.hp;
        phy = data.phy;
        intl = data.intl;
        agi = data.agi;
        activeSkillId = data.activeSkillId;
        passiveSkillId = typeData.passiveSkillId;
        aliasName = string(data.aliasName);
        ipfs = string(data.ipfs);
    }
    
    function getHeroTypeLength(uint16 _heroType) public view returns (uint16) {
        return uint16(heroTypeIds[_heroType].length);
    }
}
