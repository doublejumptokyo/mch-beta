pragma solidity 0.4.24;

import "./Extension.sol";
import "./ExtensionAsset.sol";
import "../lib/openzeppelin-solidity/contracts/ownership/Ownable.sol";
import "../lib/openzeppelin-solidity/contracts/access/roles/MinterRole.sol";


contract ExtensionManager is Ownable, MinterRole {

    uint16 public constant EXTENSION_TYPE_OFFSET = 10000;

    Extension public extension;
    ExtensionAsset public extensionAsset;

    function setExtensionAddress(address _extensionAddress) public onlyOwner {
        extension = Extension(_extensionAddress);
    }

    function setExtensionAssetAddress(address _extensionAssetAddress) public onlyOwner {
        extensionAsset = ExtensionAsset(_extensionAssetAddress);
    }

    function setExtensionType(
        uint16 _type,
        string _name,
        int16  _hp,
        int16  _phy,
        int16  _intl,
        int16  _agi,
        uint16 _activeSkillId,
        uint16 _rarity,
        uint16 _supplyLimit
    ) public onlyMinter {
        extension.setExtensionType(
            _type,
            _name,
            _hp,
            _phy,
            _intl,
            _agi,
            _activeSkillId,
            _rarity
        );
        extensionAsset.setSupplyLimit(_type, _supplyLimit);
    }


    function mintExtensionByType(address _owner, uint16 _extensionType) public onlyMinter returns (uint256) {
        uint16 current = extension.getExtensionTypeLength(_extensionType);
        current++;
        uint256 _extensionId = uint256(_extensionType) * EXTENSION_TYPE_OFFSET + current;
        mintExtension(_owner, _extensionId);
        return _extensionId;
    }    

    function mintExtension(address _owner, uint256 _extensionId) public onlyMinter {
        extension.createExtension(_extensionId);
        extensionAsset.mintExtensionAsset(_owner, _extensionId);
    }    

    function setAliasName(uint256 _extensionId, string _aliasName) public {
        require(msg.sender == extensionAsset.ownerOf(_extensionId));
        extension.setAliasName(_extensionId, _aliasName);
    }

}
