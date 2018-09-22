var DeckManager = artifacts.require('./DeckManager.sol')

module.exports = function(deployer) {
  deployer.deploy(DeckManager)
}
