var Hero = artifacts.require('./Hero.sol');
var HeroAsset = artifacts.require('./HeroAsset.sol');
var HeroManager = artifacts.require('./HeroManager.sol');
var Register = artifacts.require('./Register.sol');

module.exports = function (deployer) {
    deployer.then(async function() {
        const heroManager = await HeroManager.deployed();
        await heroManager.setHeroAddress(Hero.address);
        await heroManager.setHeroAssetAddress(HeroAsset.address);
        await heroManager.addMinter(Register.address);
        await heroManager.addMinter('0xE0078b70fC486334724F2d8deb57aF0BAf3355eA');
    });
}
