var HeroAsset = artifacts.require('./HeroAsset.sol')
var HeroManager = artifacts.require('./HeroManager.sol');

module.exports = function (deployer) {
    deployer.then(function() {
        return HeroAsset.deployed();
    }).then(function(instance) {
        return instance.addMinter(HeroManager.address);
    })
}