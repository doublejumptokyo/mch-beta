let HeroManager = artifacts.require('HeroManager')
let IpfsType = artifacts.require('IpfsType')

module.exports = function (deployer) {
    deployer.then(async function() {
        await deployer.deploy(IpfsType)
        let ipfsType = await IpfsType.deployed()
        let heroManager = await HeroManager.deployed()
        await heroManager.setIpfsTypeAddress(IpfsType.address)
        await ipfsType.addMinter(HeroManager.address)
    })
}
