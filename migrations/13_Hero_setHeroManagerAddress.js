var Hero = artifacts.require("Hero");
var HeroManager = artifacts.require("HeroManager");

module.exports = function (deployer) {
    deployer.then(function() {
        return Hero.deployed();
    }).then(function(instance) {
        return instance.setHeroManagerAddress(HeroManager.address);
    })
}