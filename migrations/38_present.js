let Present = artifacts.require('Present')
let HeroManager = artifacts.require('HeroManager')
let ExtensionManager = artifacts.require('ExtensionManager')

module.exports = function (deployer) {
    deployer.then(async function() {
        await deployer.deploy(Present);
        let present = await Present.deployed();
        await present.setHeroManagerAddress(HeroManager.address)
        await present.setExtensionManagerAddress(ExtensionManager.address)

        let heroManager = await HeroManager.deployed()
        let extensionManager = await ExtensionManager.deployed()
        await heroManager.addMinter(Present.address)
        await extensionManager.addMinter(Present.address)

        await present.setPresentItem(1, 3002);
        await present.setPresentItem(1, 3003);

        await present.setPresentItem(2, 4008);
        await present.setPresentItem(2, 3012);
    })
}
