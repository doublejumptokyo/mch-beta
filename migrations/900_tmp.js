let BattleManager3 = artifacts.require('BattleManager3')
let DeckManager = artifacts.require('DeckManager')
let Rank = artifacts.require('Rank')

module.exports = function (deployer) {
   deployer.then(async function() {
        await deployer.deploy(BattleManager3)
        let battleManager = await BattleManager3.deployed()
        let rank = await Rank.deployed()

        await rank.addSigner(BattleManager3.address)
        await battleManager.setRankAddress(Rank.address)
        await battleManager.setDeckManagerAddress(DeckManager.address)
        // await battleManager.addSigner('0xb9fA0896573A89cF4065c43563C069b3B3C15c37')
    });
}
