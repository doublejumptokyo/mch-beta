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
        let contracts = [
            Register,
            User,
            HeroAsset,
            Hero,
            HeroManager,
            ExtensionAsset,
            Extension,
            ExtensionManager,
            DeckManager,
            Rank,
            BattleTransaction,
            BattleManager,
        ]

        for (let index in contracts) {
            await deployer.deploy(contracts[index])
        }
    });
}
