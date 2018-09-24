pragma solidity 0.4.24;

import "./ExtensionType.sol";


contract Extension is ExtensionType {

    uint16 public constant EXTENSION_TYPE_OFFSET = 10000;

    mapping(uint256 => ExtensionData) public extensions;
    mapping(uint16 => uint256[]) public extensionTypeIds;
    address public extensionManagerAddress;

    struct ExtensionData {
        uint16 extensionType;
        int16 hp;
        int16 phy;
        int16 intl;
        int16 agi;
        uint16 activeSkillId;
        bytes  aliasName;
        bool   exists;
    }

    function setAliasName(uint256 _extensionId, string _aliasName) public onlyMinter {
        ExtensionData storage data = extensions[_extensionId];
        require(data.exists);
        data.aliasName = bytes(_aliasName);
    }

    function createExtension(uint256 _extensionId) public onlyMinter {
        ExtensionData storage data = extensions[_extensionId];
        require(!data.exists);
        
        uint16 _type = uint16(_extensionId / EXTENSION_TYPE_OFFSET);
        ExtensionTypeData memory typeData = extensionTypes[_type];
        require(typeData.exists);

        data.extensionType = _type;
        data.hp = typeData.hp;
        data.phy = typeData.phy;
        data.intl = typeData.intl;
        data.agi = typeData.agi;
        data.activeSkillId = typeData.activeSkillId;
        data.exists = true;
        
        extensionTypeIds[_type].push(_extensionId);
    } 

    function updateExtension(uint256 _extensionId) public onlyMinter {
        ExtensionData storage data = extensions[_extensionId];
        require(data.exists);
        
        uint16 _type = uint16(_extensionId / EXTENSION_TYPE_OFFSET);
        ExtensionTypeData memory typeData = extensionTypes[_type];
        require(typeData.exists);

        data.extensionType = _type;
        data.hp = typeData.hp;
        data.phy = typeData.phy;
        data.intl = typeData.intl;
        data.agi = typeData.agi;
        data.activeSkillId = typeData.activeSkillId;
    } 

    function getExtension(uint256 _extensionId) public view returns (
        uint16  extensionType,
        int16   hp,
        int16   phy,
        int16   intl,
        int16   agi,
        uint16  activeSkillId,
        string  aliasName
    ) {
        ExtensionData memory data = extensions[_extensionId];
        require(data.exists);
        extensionType = data.extensionType;
        hp = data.hp;
        phy = data.phy;
        intl = data.intl;
        agi = data.agi;
        activeSkillId = data.activeSkillId;
        aliasName = string(data.aliasName);
    }

    function getExtensionTypeLength(uint16 _extensionType) public view returns (uint16) {
        return uint16(extensionTypeIds[_extensionType].length);
    }

}
