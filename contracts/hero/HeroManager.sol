pragma solidity 0.4.24;

import "./Hero.sol";
import "./HeroAsset.sol";
import "./IpfsType.sol";
import "../lib/openzeppelin-solidity/contracts/ownership/Ownable.sol";
import "../lib/openzeppelin-solidity/contracts/access/roles/MinterRole.sol";


contract HeroManager is Ownable, MinterRole {

    uint16 public constant HERO_TYPE_OFFSET = 10000;
    uint16 public constant DEFAULT_SKILL_ID = 2001;

    Hero public hero;
    HeroAsset public heroAsset;
    IpfsType public ipfsType;

    function setHeroAddress(address _heroAddress) public onlyOwner {
        hero = Hero(_heroAddress);
    }

    function setHeroAssetAddress(address _heroAssetAddress) public onlyOwner {
        heroAsset = HeroAsset(_heroAssetAddress);
    }

    function setIpfsTypeAddress(address _ipfsTypeAddress) public onlyOwner {
        ipfsType = IpfsType(_ipfsTypeAddress);
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

    function forceTransferFrom(address _from, address _to, uint256 _tokenId) public onlyMinter {
        heroAsset.forceTransferFrom(_from, _to, _tokenId);
    }    

    function forceMintHero(address _to, uint256 _heroId) public onlyMinter {
        uint16 _heroType = uint16(_heroId / HERO_TYPE_OFFSET);
        uint16 _heroLength = hero.getHeroTypeLength(_heroType);
        uint256 _lastHeroId = uint256(_heroType) * HERO_TYPE_OFFSET + _heroLength;
        
        if(_heroId > _lastHeroId){
            mintHero(_to, _heroId);
        } else {
            address _from = heroAsset.ownerOf(_heroId);
            forceTransferFrom(_from, _to, _heroId);
        }
    }
    
    function updateHero(uint256 _heroId) public onlyMinter {
        hero.updateHero(_heroId);
    }

    function presetIpfs(string _ipfs, uint16 _skillId) public onlyMinter {
        ipfsType.set(_ipfs, _skillId);
    }

    function forceUnsetIpfs(uint256 _heroId) public onlyMinter {
        hero.setIpfs(_heroId, "", DEFAULT_SKILL_ID);
    }

    function setAliasName(uint256 _heroId, string _aliasName) public {
        require(msg.sender == heroAsset.ownerOf(_heroId));
        hero.setAliasName(_heroId, _aliasName);
    }

    function setIpfs(uint256 _heroId, string _ipfs) public {
        require(msg.sender == heroAsset.ownerOf(_heroId));
        uint16 skillId = ipfsType.get(_ipfs);
        require(skillId != 0);
        hero.setIpfs(_heroId, _ipfs, skillId);
    }

    function unsetIpfs(uint256 _heroId) public {
        require(msg.sender == heroAsset.ownerOf(_heroId));
        hero.setIpfs(_heroId, "", DEFAULT_SKILL_ID);
    }
}
