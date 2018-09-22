pragma solidity ^0.4.23;

import "./Hero.sol";
import "./HeroAsset.sol";
import "../lib/openzeppelin-solidity/contracts/ownership/Ownable.sol";

contract HeroManager is Ownable {
 
    address public heroSalesAddress;

    Hero public hero;
    HeroAsset public heroAsset;

    modifier onlyHeroSalesAddress() {
        require(msg.sender == heroSalesAddress);
        _;
    }

    function setSalesAddress(address _salesAddress) public onlyOwner {
        heroSalesAddress = Hero(_salesAddress);
    }

    function setHeroAddress(address _heroAddress) public onlyOwner {
        hero = Hero(_heroAddress);
    }

    function setHeroAssetAddress(address _heroAssetAddress) public onlyOwner {
        heroAsset = HeroAsset(_heroAssetAddress);
    }

    function addExperience(uint256 _heroId, int32 _experience) public onlyOwner  {
        hero.addExperience(_heroId, _experience);
    }

    function createHero(uint16 _heroType, address _owner) public onlyHeroSalesAddress {
        uint256 _tokenId = hero.createHero(_heroType);
        heroAsset.mintHeroAsset(_owner, _tokenId);
    }    

    function setAlias(uint256 _heroId, string _alias) public {
        require(msg.sender == heroAsset.ownerOf(_heroId));
        hero.setAlias(_heroId, _alias);
    }

    function setIpfs(uint256 _heroId, string _ipfs) public {
        require(msg.sender == heroAsset.ownerOf(_heroId));
        hero.setIpfs(_heroId, _ipfs);
    }

    function addItem(uint256 _heroId, uint16 _itemIndex, uint256 _itemId) public {
        require(msg.sender == heroAsset.ownerOf(_heroId));        
        hero.addItem(_heroId, _itemIndex, _itemId);
    }

}