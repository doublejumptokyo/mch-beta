let HeroManager = artifacts.require('HeroManager')

module.exports = function (deployer) {
    deployer.then(async function() {
        let heroManager = await HeroManager.deployed()

        await heroManager.addMinter('0xE0078b70fC486334724F2d8deb57aF0BAf3355eA')

        // await heroManager.mintHero('address', 10010001)
    });
}
