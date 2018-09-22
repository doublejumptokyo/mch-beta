pragma solidity ^0.4.23;
import "./ItemType.sol";

contract Item is ItemType {

    event levelUp(uint256 itemId, uint16 level);

    mapping(uint256 => ItemData) internal items;
    mapping(uint16 => uint256[]) internal itemTypeIds;    

    mapping(uint16 => int16) public rarityToInitialPram;
    mapping(uint=>mapping(uint=>int)) public levelStandard;

    address public itemManagerAddress;
    address public itemMasterAddress;    

    int16 paramUp = 1;
    int16 public baseParam;

    struct ItemData {
        uint16 itemType;
        uint16 level;
        int32  experience;  
        bytes  alias;  
        bool   exists;       
    }

    constructor () {

        paramUp = 1;
        //initial set
        baseParam = 120;
        rarityToInitialPram[1] = 12;
        rarityToInitialPram[2] = 18;
        rarityToInitialPram[3] = 21;
        rarityToInitialPram[4] = 27;
        rarityToInitialPram[5] = 36;
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

    modifier onlyItemManagerAddress() {
        require(msg.sender == itemManagerAddress);
        _;
    }

    function setItemManagerAddress(address _itemManagerAddress) public onlyOwner {
        itemManagerAddress = _itemManagerAddress;
    }

    function setItemMasterAddress(address _itemMasterAddress) public onlyOwner {
        itemMasterAddress = _itemMasterAddress;
    }

    function createItem(uint16 _itemType) public onlyItemManagerAddress returns (uint256) {
        ItemTypeData memory itemTypeData = itemTypes[_itemType];
        require(itemTypeIds[_itemType].length < itemTypeData.supply);
        uint256 _itemId = _itemType * supplyLimit + itemTypeIds[_itemType].length + 1;
        ItemData storage itemData = items[_itemId];
        itemData.itemType = _itemType;
        itemData.level = 1;
        itemData.alias = itemTypeData.itemName;
        itemTypeIds[_itemType].push(_itemId);
        return _itemId;
    }   

    function setAlias(uint256 _itemId, string _alias) public onlyItemManagerAddress {
        ItemData storage itemData = items[_itemId];
        itemData.alias = bytes(_alias);
    }

    function addExperience(uint256 _itemId, int32 _experience) public onlyItemManagerAddress {
        items[_itemId].experience += _experience;
        for(uint i = items[_itemId].level + 1; i <= 100; i++){
            if(levelStandard[itemTypes[items[_itemId].itemType].rarity][i] <= items[_itemId].experience) {
                items[_itemId].level++;                
                emit levelUp(_itemId, items[_itemId].level);
            } else {
                break;
            }
        }
    }

    function getItem(uint256 _itemId) public view returns (
        uint16  _itemType,
        uint16  _level,
        int32   _experience,
        int16[4] _params,
        uint16  _skills,
        string  _alias,
        string  _imageIpfs
    ) {
        ItemData memory itemData = items[_itemId];
        ItemTypeData memory itemTypeData = itemTypes[itemData.itemType];
        _itemType = itemData.itemType;
        _experience = itemData.experience;
        _level = itemData.level;
        (_params[0], _params[1], _params[2], _params[3]) = _returnParams(_itemId);
        _skills = itemTypeData.activeSkillId;
        _alias = string(itemData.alias);
        _imageIpfs = string(itemTypeData.image);
    }

    function _returnParams(
        uint256  _itemId  
    ) public view returns (
        int16   _phy,
        int16   _int,
        int16   _agi,  
        int16   _hp      
    ) {
        ItemData memory itemData = items[_itemId];
        ItemTypeData memory itemTypeData = itemTypes[itemData.itemType];
        
        int16 _base = rarityToInitialPram[itemTypeData.rarity] + paramUp * int16(itemData.level - 1);
    
        _phy =  _base * itemTypeData.ratioPHY / baseParam;
        _int =  _base * itemTypeData.ratioINT / baseParam;
        _agi =  _base * itemTypeData.ratioAGI / baseParam;
        _hp  =  _base * itemTypeData.ratioHP  / baseParam;

    }    

}