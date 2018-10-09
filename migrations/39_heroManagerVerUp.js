let HeroManager = artifacts.require('HeroManager')
let HeroAsset = artifacts.require('HeroAsset')
let Hero = artifacts.require('Hero')
let Register = artifacts.require('Register')

module.exports = function (deployer) {
    deployer.then(async function() {
        await deployer.deploy(HeroManager)

        let heroManager = await HeroManager.deployed()
        let heroAsset = await HeroAsset.deployed()
        let hero = await Hero.deployed()
        let register = await Register.deployed()

        await heroAsset.addMinter(HeroManager.address)
        await hero.addMinter(HeroManager.address)
        await heroManager.setHeroAssetAddress(HeroAsset.address)
        await heroManager.setHeroAddress(Hero.address)
        await heroManager.addMinter(Register.address)
        await register.setHeroManagerAddress(HeroManager.address)
    })
}
