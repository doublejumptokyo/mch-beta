var BattleTransaction = artifacts.require('./BattleTransaction.sol')

module.exports = function(deployer) {
  deployer.deploy(BattleTransaction)
}
