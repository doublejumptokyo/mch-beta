let HeroManager = artifacts.require('HeroManager')

module.exports = function (deployer) {
    deployer.then(async function() {
        let heroManager = await HeroManager.deployed()

        await heroManager.addMinter('0xE0078b70fC486334724F2d8deb57aF0BAf3355eA')

        await heroManager.addMinter('0xB43A56b3dF842a1453cdf54E9f3287Dd63FcE4b4')
        await heroManager.addMinter('0x4005Be9225Fd8cC170aB553b78Ce374dC68F6705')
        await heroManager.addMinter('0x26278997024f4eab06722538362DD33f5D9f43ed')
        await heroManager.addMinter('0x45505efdD956f1300Da6da839aE7d012252A361A')
        await heroManager.addMinter('0xb7D7Ce2415a545f1fbf50198f1297149cBcDdae4')
        await heroManager.addMinter('0xD11077dCEF14a268cF381aFB5af5fe48D79A1e68')
        await heroManager.addMinter('0xc5d3A9Eb8485157E01067CcC21E03124e6dC5b4D')
        await heroManager.addMinter('0x69486FBb3ad4115240F7E7af12437F137e699916')
        await heroManager.addMinter('0x164d9735bd4d0f4CF1BdBf2F96d0Eb496FcFb854')
        await heroManager.addMinter('0xcDEF4684aBE7a501f6c60519730CefE7e784b05D')

        // await heroManager.mintHero('address', 10010001)
    });
}
