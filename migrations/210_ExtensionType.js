var ExtensionManager = artifacts.require('./ExtensionManager.sol');

module.exports = function(deployer) {
    deployer.then(async function() {
        const extensionManager = await ExtensionManager.deployed();

        /*
            function setExtensionType(
                uint16 _type,
                string _name,
                int16  _hp,
                int16  _phy,
                int16  _intl,
                int16  _agi,
                uint16 _activeSkillId,
                uint16 _rarity
        */
        await extensionManager.setExtensionType(5006,'Codex Atlanticus',0,0,27,13,2002,5,9999);
        await extensionManager.setExtensionType(5004,'Heshikiri Hasebe',0,25,0,15,2003,5,9999);
        await extensionManager.setExtensionType(4006,'Crime and Punishment',0,0,32,0,2004,4,9999);
        await extensionManager.setExtensionType(3011,'Brave Shield',51,7,0,0,2005,3,9999);
        await extensionManager.setExtensionType(3010,'Brave Armor',72,0,0,0,2006,3,9999);
        await extensionManager.setExtensionType(3008,'Brave Musket',0,6,18,0,2007,3,9999);
        await extensionManager.setExtensionType(3007,'Wisdom Quill',21,0,17,0,2008,3,9999);
        await extensionManager.setExtensionType(3006,'Wisdom book',0,0,14,10,2009,3,9999);
        await extensionManager.setExtensionType(3001,'Brave Blade',0,24,0,0,2010,3,9999);
        await extensionManager.setExtensionType(1001,'Novice Blade',0,8,0,0,2011,1,9999);
    });
}
