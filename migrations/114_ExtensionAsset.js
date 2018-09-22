var ExtensionAsset = artifacts.require('./ExtensionAsset.sol')

module.exports = function(deployer) {
  deployer.deploy(ExtensionAsset)
}
