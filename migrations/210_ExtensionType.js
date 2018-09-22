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

        await extensionManager.setExtensionType(1001, "", 0, 8, 0, 0, 999, 1, 9999);
        await extensionManager.setExtensionType(3001, "", 0, 0, 14, 10, 999, 3, 9999);
        await extensionManager.setExtensionType(3002, "", 0, 24, 0, 0, 999, 3, 9999);
        await extensionManager.setExtensionType(3003, "", 72, 0, 0, 0, 999, 3, 9999);
        await extensionManager.setExtensionType(3004, "", 0, 6, 18, 0, 999, 3, 9999);
        await extensionManager.setExtensionType(3005, "", 51, 7, 0, 0, 999, 3, 9999);
        await extensionManager.setExtensionType(3006, "", 21, 0, 17, 0, 999, 3, 9999);
        await extensionManager.setExtensionType(4001, "", 0, 0, 32, 0, 999, 4, 9999);
        await extensionManager.setExtensionType(5001, "", 0, 25, 0, 15, 999, 5, 9999);
        await extensionManager.setExtensionType(5002, "", 0, 0, 27, 13, 999, 5, 9999);
    });
}
