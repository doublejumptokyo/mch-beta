var Hero = artifacts.require("Hero");
var HeroAsset = artifacts.require('./HeroAsset.sol');
var HeroManager = artifacts.require("HeroManager");

module.exports = function (deployer) {
    deployer.then(function() {
        return HeroManager.deployed();
    }).then(function(instance) {
        return instance.setHeroAddress(Hero.address);
    }).then(function(instance) {
        return HeroManager.deployed();
    }).then(function(instance) {
        return instance.setHeroAssetAddress(HeroAsset.address);
    })
}