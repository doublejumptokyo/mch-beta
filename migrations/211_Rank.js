var Rank = artifacts.require('./Rank.sol');
var Register = artifacts.require('./Register.sol');
var BattleManager = artifacts.require('./BattleManager.sol');

module.exports = function (deployer) {
    deployer.then(async function() {
        const rank = await Rank.deployed();
        await rank.addSigner(Register.address);
        await rank.addSigner(BattleManager.address);
    });
}