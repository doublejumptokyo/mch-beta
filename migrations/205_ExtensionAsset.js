var ExtensionAsset = artifacts.require('./ExtensionAsset.sol')
var ExtensionManager = artifacts.require('./ExtensionManager.sol');

module.exports = function (deployer) {
    deployer.then(async function() {
        const extensionAsset = await ExtensionAsset.deployed();
        await extensionAsset.addMinter(ExtensionManager.address);
    });
}