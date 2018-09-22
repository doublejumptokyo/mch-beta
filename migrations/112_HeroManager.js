var HeroManager = artifacts.require('./HeroManager.sol');

module.exports = function(deployer) {
  deployer.deploy(HeroManager)
}
