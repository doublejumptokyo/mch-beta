let HeroManager = artifacts.require('HeroManager');

module.exports = function(deployer) {
    deployer.then(async function() {
        let heroManager = await HeroManager.deployed();

        await heroManager.forceMintHero("0x7F228E5FD608aF891CBB586296ff787fC460453f", 20010662) // Block:6395545 EthAddr:0x25Add7BDB0eb050F9FDEf65de8f23C26c197D017
        await heroManager.forceMintHero("0x425f847d145399a39cB04A98616E45cD8FC5Db28", 20010663) // Block:6395545 EthAddr:0xCf5598f6DE00528c9Cc99D5b2a147dc2a51c34AC
    });
}