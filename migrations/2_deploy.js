var Hero = artifacts.require("Hero");
var HeroAsset = artifacts.require("HeroAsset");

module.exports = function(deployer) {

    deployer.then(function() {
        return HeroAsset.new();
    }).then(function(instance) {
    }
    deployer.deploy(Hero);
    deployer.deploy(HeroAsset);
};
