var BattleManager = artifacts.require('./BattleManager.sol')

module.exports = function(deployer) {
  deployer.deploy(BattleManager)
}
