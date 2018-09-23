var BattleManager = artifacts.require('./BattleManager.sol');
var Rank = artifacts.require('./Rank.sol');
var BattleTransaction = artifacts.require('./BattleTransaction.sol');
var DeckManager = artifacts.require('./DeckManager.sol');

module.exports = function (deployer) {
    deployer.then(async function() {
        const battleManager = await BattleManager.deployed();
        await battleManager.setDeckManagerAddress(DeckManager.address);
        await battleManager.setBattleTransactionAddress(BattleTransaction.address);
        await battleManager.setRankAddress(Rank.address);
    });
}