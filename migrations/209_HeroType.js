var HeroManager = artifacts.require('./HeroManager.sol');

module.exports = function(deployer) {
    deployer.then(async function() {
        const heroManager = await HeroManager.deployed();
        await heroManager.setHeroType(1001, "MCH Warrior", "", 12, 5, 3, 4, 999, 1028, 1, 9999);
        await heroManager.setHeroType(1002, "MCH Tactician", "", 12, 3, 5, 4, 999, 1029, 1, 9999);
        await heroManager.setHeroType(1003, "MCH Artist", "", 12, 4, 4, 4, 999, 1030, 1, 9999);
    });
}
