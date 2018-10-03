let BattleTransaction2 = artifacts.require('BattleTransaction2')
// let BattleManager = artifacts.require('BattleManager')

module.exports = function (deployer) {
    deployer.then(async function() {
        await deployer.deploy(BattleTransaction2)
    });
}
