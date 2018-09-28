let Register = artifacts.require('Register')
let User = artifacts.require('User')
let HeroAsset = artifacts.require('HeroAsset')
let Hero = artifacts.require('Hero')
let HeroManager = artifacts.require('HeroManager')
let ExtensionAsset = artifacts.require('ExtensionAsset')
let Extension = artifacts.require('Extension')
let ExtensionManager = artifacts.require('ExtensionManager')
let DeckManager = artifacts.require('DeckManager')
let Rank = artifacts.require('Rank')
let BattleTransaction = artifacts.require('BattleTransaction')
let BattleManager = artifacts.require('BattleManager')

module.exports = function (deployer) {
    deployer.then(async function() {
        await deployer.deploy(BattleTransaction)
        await deployer.deploy(BattleManager)

        let battleManager = await BattleManager.deployed()
        let rank = await Rank.deployed()
        await rank.addSigner(BattleManager.address)
        await battleManager.setRankAddress(Rank.address)
        await battleManager.setBattleTransactionAddress(BattleTransaction.address)
        await battleManager.setDeckManagerAddress(DeckManager.address)

    });
}
