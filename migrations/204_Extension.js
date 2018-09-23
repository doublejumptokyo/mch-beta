var Extension = artifacts.require('./Extension.sol');
var ExtensionManager = artifacts.require('./ExtensionManager.sol');

module.exports = function (deployer) {
    deployer.then(async function() {
        const extension = await Extension.deployed();
        await extension.addMinter(ExtensionManager.address);
    });
}
