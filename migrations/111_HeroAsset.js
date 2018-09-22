var HeroAsset = artifacts.require('./HeroAsset.sol')

module.exports = function(deployer) {
  deployer.deploy(HeroAsset)
}
