pragma solidity ^0.4.23;

import "./HeroType.sol";

contract Hero is HeroType {

    event levelUp(uint256 heroId, uint16 level);

    mapping(uint256 => HeroData) public heroes;
    mapping(uint16 => uint256[]) public heroTypeIds;

    mapping(uint16 => int16) public rarityToInitialPram;
    mapping(uint16 => uint16) public rarityToExtensions;
    mapping(uint16 => int16) public rarityToUpgrade;

    mapping(uint=>mapping(uint=>int)) public levelStandard;

    mapping(bytes => uint16) internal ipfsTypes;

    address public heroManagerAddress;
    address public heroMasterAddress; 

    int16 public baseParam;
    int16 public paramUp;

    constructor () {
        paramUp = 3;
        baseParam = 120;
        rarityToInitialPram[1] = 12;
        rarityToInitialPram[2] = 18;
        rarityToInitialPram[3] = 21;
        rarityToInitialPram[4] = 27;
        rarityToInitialPram[5] = 36;
        rarityToExtensions[5] = 6; 
        rarityToUpgrade[5] = 30; 
        levelStandard[5][2] = 90;
        levelStandard[5][3] = 185;
        levelStandard[5][4] = 284;
        levelStandard[5][5] = 388;
        levelStandard[5][6] = 497;
        levelStandard[5][7] = 612;
        levelStandard[5][8] = 733;
        levelStandard[5][9] = 859;
        levelStandard[5][10] = 992;
        levelStandard[5][11] = 1132;
        levelStandard[5][12] = 1279;
        levelStandard[5][13] = 1433;
        levelStandard[5][14] = 1594;
        levelStandard[5][15] = 1764;
        levelStandard[5][16] = 1942;
        levelStandard[5][17] = 2129;
        levelStandard[5][18] = 2326;
        levelStandard[5][19] = 2532;
        levelStandard[5][20] = 2749;
        levelStandard[5][21] = 2976;
        levelStandard[5][22] = 3215;
        levelStandard[5][23] = 3465;
        levelStandard[5][24] = 3729;
        levelStandard[5][25] = 4005;
        levelStandard[5][26] = 4295;
        levelStandard[5][27] = 4600;
        levelStandard[5][28] = 4920;
        levelStandard[5][29] = 5256;
        levelStandard[5][30] = 5609;
        levelStandard[5][31] = 5979;
        levelStandard[5][32] = 6368;
        levelStandard[5][33] = 6777;
        levelStandard[5][34] = 7206;
        levelStandard[5][35] = 7656;
        levelStandard[5][36] = 8129;
        levelStandard[5][37] = 8625;
        levelStandard[5][38] = 9147;
        levelStandard[5][39] = 9694;
        levelStandard[5][40] = 10269;
        levelStandard[5][41] = 10872;
        levelStandard[5][42] = 11506;
        levelStandard[5][43] = 12171;
        levelStandard[5][44] = 12869;
        levelStandard[5][45] = 13603;
        levelStandard[5][46] = 14373;
        levelStandard[5][47] = 15182;
        levelStandard[5][48] = 16031;
        levelStandard[5][49] = 16922;
        levelStandard[5][50] = 17858;
        levelStandard[5][51] = 18841;
        levelStandard[5][52] = 19873;
        levelStandard[5][53] = 20957;
        levelStandard[5][54] = 22095;
        levelStandard[5][55] = 23290;
        levelStandard[5][56] = 24544;
        levelStandard[5][57] = 25861;
        levelStandard[5][58] = 27244;
        levelStandard[5][59] = 28697;
        levelStandard[5][60] = 30221;
        levelStandard[5][61] = 31823;
        levelStandard[5][62] = 33504;
        levelStandard[5][63] = 35269;
        levelStandard[5][64] = 37122;
        levelStandard[5][65] = 39068;
        levelStandard[5][66] = 41112;
        levelStandard[5][67] = 43257;
        levelStandard[5][68] = 45510;
        levelStandard[5][69] = 47876;
        levelStandard[5][70] = 50360;
        levelStandard[5][71] = 52968;
        levelStandard[5][72] = 55706;
        levelStandard[5][73] = 58581;
        levelStandard[5][74] = 61600;
        levelStandard[5][75] = 64770;
        levelStandard[5][76] = 68099;
        levelStandard[5][77] = 71594;
        levelStandard[5][78] = 75263;
        levelStandard[5][79] = 79117;
        levelStandard[5][80] = 83162;
        levelStandard[5][81] = 87411;
        levelStandard[5][82] = 91871;
        levelStandard[5][83] = 96555;
        levelStandard[5][84] = 101472;
        levelStandard[5][85] = 106636;
        levelStandard[5][86] = 112058;
        levelStandard[5][87] = 117751;
        levelStandard[5][88] = 123728;
        levelStandard[5][89] = 130005;
        levelStandard[5][90] = 136595;
        levelStandard[5][91] = 143515;
        levelStandard[5][92] = 150780;
        levelStandard[5][93] = 158409;
        levelStandard[5][94] = 166420;
        levelStandard[5][95] = 174831;
        levelStandard[5][96] = 183662;
        levelStandard[5][97] = 192936;
        levelStandard[5][98] = 202672;
        levelStandard[5][99] = 212896;
        levelStandard[5][100] = 223631;
    } 

    struct HeroData {
        uint16 heroType;
        uint16 level;
        int32  experience;        
        bytes  alias;
        bytes  imageIpfs;
        bool   imageSet;
        bool   exists;
        uint[6] items;
    }
    
    modifier onlyHeroManagerAddress() {
        require(msg.sender == heroManagerAddress);
        _;
    }

    modifier onlyHeroMasterAddress() {
        require(msg.sender == heroMasterAddress);
        _;
    }

    function setHeroMasterAddress(address _heroMasterAddress) public onlyOwner {
        heroMasterAddress = _heroMasterAddress;
    }

    function setHeroManagerAddress(address _heroManagerAddress) public onlyOwner {
        heroManagerAddress = _heroManagerAddress;
    }

    function updataHeroMaster() public onlyHeroMasterAddress {
        //update logid goes here
    }

    function setIpfsType(string _ipfs, uint16 _type) public onlyOwner {
        ipfsTypes[bytes(_ipfs)] = _type;
    }

    function getIpfsType(string _ipfs) public view returns (uint16) {
        return ipfsTypes[bytes(_ipfs)];
    }

    function createHero(uint16 _heroType) public onlyHeroManagerAddress returns (uint256) {
        HeroTypeData memory heroTypeData = heroTypes[_heroType];
        require(heroTypeIds[_heroType].length < heroTypeData.supply);

        uint256 _heroId = _heroType * supplyLimit + heroTypeIds[_heroType].length + 1;

        HeroData storage heroData = heroes[_heroId];
        heroData.heroType = _heroType;
        heroData.level = 1;
        heroData.alias = heroTypeData.heroName;
        heroData.imageIpfs = heroTypeData.image;        

        heroTypeIds[_heroType].push(_heroId);
        
        return _heroId;
    } 

    function setAlias(uint256 _heroId, string _alias) public onlyHeroManagerAddress {
        HeroData storage heroData = heroes[_heroId];
        heroData.alias = bytes(_alias);
    }
    
    function setIpfs(uint256 _heroId, string _ipfs) public onlyHeroManagerAddress {
        require(getIpfsType(_ipfs) != 0);
        HeroData storage heroData = heroes[_heroId];
        //require(!heroData.imageSet); 

        heroData.imageIpfs = bytes(_ipfs);
        heroData.imageSet = true;
    }

    function addExperience(uint256 _heroId, int32 _experience) public onlyHeroManagerAddress {
        HeroData storage heroData = heroes[_heroId];
        HeroTypeData memory heroTypeData = heroTypes[heroData.heroType];
        heroData.experience += _experience;
    
        for(uint16 i = heroData.level + 1; i <= 100; i++){
            if(levelStandard[heroTypeData.rarity][i] <= heroData.experience) {
                if(!heroData.imageSet && i > 20){
                    break;
                }
                heroData.level++;
                emit levelUp(_heroId, heroData.level);
            } else {
                break;
            }
        }
    }

    function addItem(uint256 _heroId, uint16 _itemIndex, uint256 _itemId) public onlyHeroManagerAddress {
        HeroData storage heroData = heroes[_heroId];
        HeroTypeData memory heroTypeData = heroTypes[heroData.heroType];
        //require(rarityToExtensions[heroTypeData.rarity] > _itemIndex);
        heroData.items[_itemIndex] = _itemId;    
    }

    function getHero(uint256 _heroId) public view returns (
        uint16  _heroType,
        uint16  _level,
        int32   _experience,
        int16[3] _params,
        uint16[2] _skills,
        string  _alias,
        string  _imageIpfs,
        bool    _imageSet,
        uint[6]  _extensions,
        uint[6]  _items,
        bool   _itemSet
    ) {
        HeroData memory heroData = heroes[_heroId];
        HeroTypeData memory heroTypeData = heroTypes[heroData.heroType];
        _heroType = heroData.heroType;
        _experience = heroData.experience;
        _level = heroData.level;
        (_params[0], _params[1], _params[2]) = _returnParams(_heroId);
        (_skills[0], _skills[1]) = _returnSkills(_heroId);
        _alias = string(heroData.alias);
        _imageIpfs = string(heroData.imageIpfs);
        _imageSet = heroData.imageSet;
        _extensions = _getExtensions(_heroId);
        _items = heroData.items;
        _itemSet = _isItemSet(_heroId);
    }

    function _getExtensions(uint _heroId) internal view returns(uint[6] extensions){
        HeroData memory heroData = heroes[_heroId];
        HeroTypeData memory heroTypeData = heroTypes[heroData.heroType];       
        
        uint temp = uint(keccak256(_heroId));
        for (uint16 i = 1; i <= rarityToExtensions[heroTypeData.rarity]; i++) {
            temp = temp>>1;
            extensions[i-1] = temp%10 + 1;
        }        
    }

    function _isItemSet(uint _heroId) internal view returns(bool){
        HeroData memory heroData = heroes[_heroId];
        HeroTypeData memory heroTypeData = heroTypes[heroData.heroType];       

        uint i;
        for(i=0; i<rarityToExtensions[heroTypeData.rarity];i++){
            if(heroData.items[i] == 0){
                return false;
            } 
        }
        return true;            
    }

    function _returnSkills(
        uint256  _heroId  
    ) public view returns (
        uint16   _activeSkill,
        uint16   _passiveSkill        
    ) {
        HeroData memory heroData = heroes[_heroId];
        HeroTypeData memory heroTypeData = heroTypes[heroData.heroType];        
        if(heroData.imageSet) {
            _activeSkill = getIpfsType(string(heroData.imageIpfs));
        } else {
            _activeSkill = heroTypeData.initalActiveSkillId;
        }
        _passiveSkill = heroTypeData.passiveSkillId;
    }

    function _returnParams(
        uint256  _heroId  
    ) public view returns (
        int16   _phy,
        int16   _int,
        int16   _agi        
    ) {
        HeroData memory heroData = heroes[_heroId];
        HeroTypeData memory heroTypeData = heroTypes[heroData.heroType];
        
        int16 _base = rarityToInitialPram[heroTypeData.rarity] + paramUp * int16(heroData.level - 1);
         
        if(heroData.imageSet){ 
            int temp1;
            int16 temp2;
            int16 temp3;
            int16 temp4;
            int16 temp5;

            (temp1, temp2, temp3, temp4, temp5) = _returnRandamFromHash(string(heroData.imageIpfs));

            if (temp2 == 0) {
                if (temp3 == 0) {
                    heroTypeData.ratioPHY = heroTypeData.ratioPHY + temp4;
                    heroTypeData.ratioINT = heroTypeData.ratioINT - temp5;
               } else {
                    heroTypeData.ratioPHY = heroTypeData.ratioPHY + temp4;
                    heroTypeData.ratioAGI = heroTypeData.ratioAGI - temp5;
                }
            } else if (temp2 == 1) {
                if (temp3 == 0) {
                    heroTypeData.ratioINT = heroTypeData.ratioINT + temp4;
                    heroTypeData.ratioPHY = heroTypeData.ratioPHY - temp5;
                } else {
                    heroTypeData.ratioINT = heroTypeData.ratioINT + temp4;
                    heroTypeData.ratioAGI = heroTypeData.ratioAGI - temp5;
                }            
            } else {
                if (temp3 == 0) {
                    heroTypeData.ratioAGI = heroTypeData.ratioAGI + temp4;
                    heroTypeData.ratioPHY = heroTypeData.ratioPHY - temp5;
                } else {
                    heroTypeData.ratioAGI = heroTypeData.ratioAGI + temp4;
                    heroTypeData.ratioINT = heroTypeData.ratioINT - temp5;
                }
            }
        }
    
        if(_isItemSet(_heroId)) {
            _base = _base + rarityToUpgrade[heroTypeData.rarity];
        } 

        _phy =  _base * heroTypeData.ratioPHY / baseParam;
        _int =  _base * heroTypeData.ratioINT / baseParam;
        _agi =  _base * heroTypeData.ratioAGI / baseParam;

    }

    function _returnRandamFromHash(string _ipfsStr) internal pure returns (int temp1, int16 temp2, int16 temp3, int16 temp4, int16 temp5){
        temp1 = int(keccak256(_ipfsStr));
        temp2 = int16((temp1>>1)%3);
        temp3 = int16((temp1>>2)%2);
        temp4 = int16((temp1>>3)%7);
        temp5 = int16((temp1>>4)%7);
    }

}