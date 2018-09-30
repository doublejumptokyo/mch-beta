let DeckManager = artifacts.require('DeckManager')
let Rank = artifacts.require('Rank')
let BattleManager2 = artifacts.require('BattleManager2')

module.exports = function (deployer) {
    deployer.then(async function() {
        await deployer.deploy(BattleManager2)

        let battleManager2 = await BattleManager2.deployed()
        let rank = await Rank.deployed()
        await rank.addSigner(BattleManager2.address)
        await battleManager2.setRankAddress(Rank.address)
        await battleManager2.setDeckManagerAddress(DeckManager.address)

    });
}
