let Rank = artifacts.require('Rank')
let Register = artifacts.require('Register')
let BattleManager2 = artifacts.require('BattleManager2')
let BattleManager3 = artifacts.require('BattleManager3')

module.exports = function(deployer) {
    deployer.then(async function() {
        let rank = await Rank.deployed()
        let battleManager2 = await BattleManager2.deployed()
        let battleManager3 = await BattleManager3.deployed()
        let register = await Register.deployed()

        await register.setRankAddress(Rank.address)
        await rank.addSigner(Register.address)

        await battleManager2.setRankAddress(Rank.address)
        await rank.addSigner(BattleManager2.address)

        await battleManager3.setRankAddress(Rank.address)
        await rank.addSigner(BattleManager3.address)
    })
}
