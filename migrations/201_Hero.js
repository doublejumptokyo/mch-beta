var Hero = artifacts.require('./Hero.sol');
var HeroManager = artifacts.require('./HeroManager.sol');

module.exports = function (deployer) {
    deployer.then(async function() {
        const hero = await Hero.deployed();
        await hero.addMinter(HeroManager.address);
    });
}
