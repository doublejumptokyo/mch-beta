var ExtensionManager = artifacts.require('./ExtensionManager.sol');

module.exports = function(deployer) {
  deployer.deploy(ExtensionManager)
}
