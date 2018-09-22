pragma solidity ^0.4.23;

import "../lib/openzeppelin-solidity/contracts/ownership/Ownable.sol";

contract ItemType is Ownable {
    
    mapping(uint16 => ItemTypeData) internal itemTypes;
    uint16 constant supplyLimit = 10000;

    struct ItemTypeData {
        bytes  itemName;
        bytes  image;
        uint16 supply;
        int16  ratioPHY;
        int16  ratioINT;
        int16  ratioAGI;
        int16  ratioHP;
        uint16 activeSkillId;
        uint16 rarity; 
        bool exists;   
    }

    function setItemType(
        uint16 _itemType,
        string _itemName,
        string _image,
        uint16 _supply,
        int16  _ratioPHY,
        int16  _ratioINT,
        int16  _ratioAGI,
        int16  _ratioHP,
        uint16 _activeSkillId,
        uint16 _rarity
    ) public onlyOwner {
        require(_itemType > 0);
        require(_supply > 0 && _supply < supplyLimit);
        require(!itemTypes[_itemType].exists);
        itemTypes[_itemType] = ItemTypeData(
            bytes(_itemName),
            bytes(_image),
            _supply,
            _ratioPHY,
            _ratioINT,
            _ratioAGI,
            _ratioHP,
            _activeSkillId,
            _rarity,
            true
        );
    }

    function getItemType(uint16 _itemType) public view returns (
        string _itemName,
        string _image,
        uint16 _supply,
        int16  _ratioPHY,
        int16  _ratioINT,
        int16  _ratioAGI,
        int16  _ratioHP,
        uint16 _activeSkillId,
        uint16 _rarity
    ) {
        ItemTypeData storage itemTypeData = itemTypes[_itemType];
        require(itemTypeData.exists);
        _itemName = string(itemTypeData.itemName);
        _image = string(itemTypeData.image);
        _supply = itemTypeData.supply;
        _ratioPHY = itemTypeData.ratioPHY;
        _ratioINT = itemTypeData.ratioINT;
        _ratioAGI = itemTypeData.ratioAGI;
        _ratioHP = itemTypeData.ratioHP;
        _activeSkillId = itemTypeData.activeSkillId;
        _rarity = itemTypeData.rarity;
    }
        
}