pragma solidity 0.4.24;

import "../lib/openzeppelin-solidity/contracts/access/roles/MinterRole.sol";


contract ExtensionType is MinterRole {

    mapping(uint16 => ExtensionTypeData) public extensionTypes;

    struct ExtensionTypeData {
        bytes  name;
        int16  hp;
        int16  phy;
        int16  intl;
        int16  agi;
        uint16 activeSkillId;
        uint16 rarity; 
        bool exists;   
    }

    function setExtensionType(
        uint16 _type,
        string _name,
        int16  _hp,
        int16  _phy,
        int16  _intl,
        int16  _agi,
        uint16 _activeSkillId,
        uint16 _rarity
    ) public onlyMinter {
        ExtensionTypeData storage data = extensionTypes[_type];
        // require(!data.exists);
        data.name = bytes(_name);
        data.hp = _hp;
        data.phy = _phy;
        data.intl = _intl;
        data.agi = _agi;
        data.activeSkillId = _activeSkillId;
        data.rarity = _rarity;
        data.exists = true;
    }

    function getExtensionType(uint16 _type) public view returns (
        string name,
        int16  hp,
        int16  phy,
        int16  intl,
        int16  agi,
        uint16 activeSkillId,
        uint16 rarity
    ) {
        ExtensionTypeData memory data = extensionTypes[_type];
        require(data.exists);
        name = string(data.name);
        hp = data.hp;
        phy = data.phy;
        intl = data.intl;
        agi = data.agi;
        activeSkillId = data.activeSkillId;
        rarity = data.rarity;
    }

}
