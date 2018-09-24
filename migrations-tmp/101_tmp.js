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
        await deployer.deploy(DeckManager)

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

        await deckManager.addSigner(Register.address)
        await battleManager.setDeckManagerAddress(DeckManager.address)
        await register.setDeckManagerAddress(DeckManager.address)

    });
}
