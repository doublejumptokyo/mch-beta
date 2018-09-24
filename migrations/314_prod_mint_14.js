let HeroManager = artifacts.require('HeroManager');

module.exports = function(deployer) {
    deployer.then(async function() {
        let heroManager = await HeroManager.deployed();

        await heroManager.forceMintHero("0xF036dE56F2966540D2ed8d4F50A55003518a4EB1", 20010522) // Block:6390391 EthAddr:0x144345e4D07AC6dd52C278d975Ca252ee8175F27
    });
}