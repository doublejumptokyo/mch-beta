var Hero = artifacts.require('./Hero.sol');
var HeroManager = artifacts.require('./HeroManager.sol');

module.exports = function (deployer) {
    deployer.then(function() {
        return Hero.deployed();
    }).then(function(instance) {
        return instance.setHeroManagerAddress(HeroManager.address);
    })
}
