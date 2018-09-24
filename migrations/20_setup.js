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
        let register = await Register.deployed()
        let user = await User.deployed()
        let heroAsset = await HeroAsset.deployed()
        let hero = await Hero.deployed()
        let heroManager = await HeroManager.deployed()
        let extensionAsset = await ExtensionAsset.deployed()
        let extension = await Extension.deployed()
        let extensionManager = await ExtensionManager.deployed()
        let deckManager = await DeckManager.deployed()
        let rank = await Rank.deployed()
        let battleTransaction = await BattleTransaction.deployed()
        let battleManager = await BattleManager.deployed()

        await heroAsset.addMinter(HeroManager.address)
        await heroManager.setHeroAssetAddress(HeroAsset.address)

        await hero.addMinter(HeroManager.address)
        await heroManager.setHeroAddress(Hero.address)

        await heroManager.addMinter(Register.address)
        await register.setHeroManagerAddress(HeroManager.address)

        await extensionAsset.addMinter(ExtensionManager.address)
        await extensionManager.setExtensionAssetAddress(ExtensionAsset.address)

        await extension.addMinter(ExtensionManager.address)
        await extensionManager.setExtensionAddress(Extension.address)

        await extensionManager.addMinter(Register.address)
        await register.setExtensionManagerAddress(ExtensionManager.address)

        await deckManager.addSigner(Register.address)
        await register.setDeckManagerAddress(DeckManager.address)
        await battleManager.setDeckManagerAddress(DeckManager.address)

        await rank.addSigner(Register.address)
        await register.setRankAddress(Rank.address)

        await rank.addSigner(BattleManager.address)
        await battleManager.setRankAddress(Rank.address)

        await battleManager.setBattleTransactionAddress(BattleTransaction.address)
    });
}
