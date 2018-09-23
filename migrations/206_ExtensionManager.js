var Extension = artifacts.require('./Extension.sol');
var ExtensionAsset = artifacts.require('./ExtensionAsset.sol');
var ExtensionManager = artifacts.require('./ExtensionManager.sol');
var Register = artifacts.require('./Register.sol');

module.exports = function (deployer) {
    deployer.then(async function() {
        const extensionManager = await ExtensionManager.deployed();
        await extensionManager.setExtensionAddress(Extension.address);
        await extensionManager.setExtensionAssetAddress(ExtensionAsset.address);
        await extensionManager.addMinter(Register.address);
        await extensionManager.addMinter('0xE0078b70fC486334724F2d8deb57aF0BAf3355eA');
    });
}