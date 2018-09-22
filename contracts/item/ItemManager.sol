pragma solidity ^0.4.21;

import "./Item.sol";
import "./ItemAsset.sol";
import "../lib/openzeppelin-solidity/contracts/ownership/Ownable.sol";

contract ItemManager is Ownable {
 
    address public salesAddress;

    Item public item;
    ItemAsset public itemAsset;

    function setItemAddress(address _itemAddress) public onlyOwner {
        item = Item(_itemAddress);
    }

    function setItemAssetAddress(address _itemAssetAddress) public onlyOwner {
        itemAsset = ItemAsset(_itemAssetAddress);
    }

    function createItem(uint16 _itemType, address _owner) public {
        uint256 _tokenId = item.createItem(_itemType);
        itemAsset.mintItemAsset(_owner, _tokenId);
    }    

    function setAlias(uint256 _itemId, string _alias) public {
        require(msg.sender == itemAsset.ownerOf(_itemId));
        item.setAlias(_itemId, _alias);
    }

    function addExperience(uint256 _itemId, int32 _experience) public onlyOwner  {
        item.addExperience(_itemId, _experience);
    }

}