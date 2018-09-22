var HeroAsset = artifacts.require('./HeroAsset.sol')
var HeroManager = artifacts.require('./HeroManager.sol');

module.exports = function (deployer) {
    deployer.then(async function() {
        const heroAsset = await HeroAsset.deployed();
        await heroAsset.addMinter(HeroManager.address);
    });
}