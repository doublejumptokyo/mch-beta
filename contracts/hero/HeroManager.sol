pragma solidity 0.4.24;

import "./Hero.sol";
import "./HeroAsset.sol";
import "../lib/openzeppelin-solidity/contracts/ownership/Ownable.sol";
import "../lib/openzeppelin-solidity/contracts/access/roles/MinterRole.sol";


contract HeroManager is Ownable, MinterRole {

    uint16 public constant HERO_TYPE_OFFSET = 10000;

    Hero public hero;
    HeroAsset public heroAsset;

    function setHeroAddress(address _heroAddress) public onlyOwner {
        hero = Hero(_heroAddress);
    }

    function setHeroAssetAddress(address _heroAssetAddress) public onlyOwner {
        heroAsset = HeroAsset(_heroAssetAddress);
    }

    function setHeroType(
        uint16 _heroType,
        string _heroName,
        string _ipfs,
        int16  _hp,
        int16  _phy,
        int16  _intl,
        int16  _agi,
        uint16 _initalActiveSkillId,
        uint16 _passiveSkillId,
        uint16 _rarity,
        uint16 _supplyLimit
    ) public onlyMinter {
        hero.setHeroType(
            _heroType,
            _heroName,
            _ipfs,
            _hp,
            _phy,
            _intl,
            _agi,
            _initalActiveSkillId,
            _passiveSkillId,
            _rarity
        );
        heroAsset.setSupplyLimit(_heroType, _supplyLimit);
    }

    function mintHeroByType(address _owner, uint16 _heroType) public onlyMinter returns (uint256) {
        uint16 current = hero.getHeroTypeLength(_heroType);
        current++;
        uint256 _heroId = uint256(_heroType) * HERO_TYPE_OFFSET + current;
        mintHero(_owner, _heroId);
        return _heroId;
    }    

    function mintHero(address _owner, uint256 _heroId) public onlyMinter {
        hero.createHero(_heroId);
        heroAsset.mintHeroAsset(_owner, _heroId);
    }    

    function setAliasName(uint256 _heroId, string _aliasName) public {
        require(msg.sender == heroAsset.ownerOf(_heroId));
        hero.setAliasName(_heroId, _aliasName);
    }

    function forceTransferFrom( address _from, address _to, uint256 _tokenId) public onlyMinter {
        heroAsset.forceTransferFrom(_from, _to, _tokenId);
    }    

    // function setIpfs(uint256 _heroId, string _ipfs) public {}

}
