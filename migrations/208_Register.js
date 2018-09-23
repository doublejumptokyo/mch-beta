var Register = artifacts.require('./Register.sol');
var HeroManager = artifacts.require('./HeroManager.sol');
var ExtensionManager = artifacts.require('./ExtensionManager.sol');
var DeckManager = artifacts.require('./DeckManager.sol');

module.exports = function (deployer) {
    deployer.then(async function() {
        const register = await Register.deployed();
        await register.setHeroManagerAddress(HeroManager.address);
        await register.setExtensionManagerAddress(ExtensionManager.address);
        await register.setDeckManagerAddress(DeckManager.address);
    });
}
