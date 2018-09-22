pragma solidity ^0.4.23;

import "./Hero.sol";
import "./HeroAsset.sol";
import "../lib/openzeppelin-solidity/contracts/ownership/Ownable.sol";
import "../lib/openzeppelin-solidity/contracts/access/roles/MinterRole.sol";


contract HeroManager is Ownable, MinterRole {

    Hero public hero;
    HeroAsset public heroAsset;

    function setHeroAddress(address _heroAddress) public onlyOwner {
        hero = Hero(_heroAddress);
    }

    function setHeroAssetAddress(address _heroAssetAddress) public onlyOwner {
        heroAsset = HeroAsset(_heroAssetAddress);
    }

    function mintHero(address _owner, uint256 _heroId) public onlyMinter {
        hero.createHero(_heroId);
        heroAsset.mintHeroAsset(_owner, _heroId);
    }    

    function setAlias(uint256 _heroId, string _aliasName) public {
        require(msg.sender == heroAsset.ownerOf(_heroId));
        hero.setAliasName(_heroId, _aliasName);
    }

    // function setIpfs(uint256 _heroId, string _ipfs) public {}

}
