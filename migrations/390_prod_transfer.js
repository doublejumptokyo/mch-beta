let HeroManager = artifacts.require('HeroManager');

module.exports = function(deployer) {
    deployer.then(async function() {
        let heroManager = await HeroManager.deployed();

        await heroManager.forceMintHero("0x81A86481F753545A1E427d8946c5600655f0e6D9", 30010077) // Block:6382063 EthAddr:0xbDbfE5F4D8775472b0398F88FC378ec2E5518558
        await heroManager.forceMintHero("0x81A86481F753545A1E427d8946c5600655f0e6D9", 20010360) // Block:6382063 EthAddr:0xbDbfE5F4D8775472b0398F88FC378ec2E5518558
        await heroManager.forceMintHero("0x81A86481F753545A1E427d8946c5600655f0e6D9", 20010224) // Block:6382258 EthAddr:0xbDbfE5F4D8775472b0398F88FC378ec2E5518558
        await heroManager.forceMintHero("0x658F6d9539838b8B8788586A9e587a6Bda8Ab624", 40010012) // Block:6382469 EthAddr:0x8Cdea15f8536e65A443eFd518BcDD7C22AC267EF
        await heroManager.forceMintHero("0x81A86481F753545A1E427d8946c5600655f0e6D9", 20010223) // Block:6382632 EthAddr:0xbDbfE5F4D8775472b0398F88FC378ec2E5518558
        await heroManager.forceMintHero("0x81A86481F753545A1E427d8946c5600655f0e6D9", 30010080) // Block:6382766 EthAddr:0xbDbfE5F4D8775472b0398F88FC378ec2E5518558
        await heroManager.forceMintHero("0x81A86481F753545A1E427d8946c5600655f0e6D9", 20010365) // Block:6382780 EthAddr:0xbDbfE5F4D8775472b0398F88FC378ec2E5518558
        await heroManager.forceMintHero("0x81A86481F753545A1E427d8946c5600655f0e6D9", 30010081) // Block:6382784 EthAddr:0xbDbfE5F4D8775472b0398F88FC378ec2E5518558
        await heroManager.forceMintHero("0x740821Ef4f5Bb4571e655811B901fAa52b56977c", 40030028) // Block:6387435 EthAddr:0x2Fef65e4D69a38bf0dd074079f367CDF176eC0De
        await heroManager.forceMintHero("0x36ba8E820b2701Fd0bDA118D7bAD4149cA4d9eBA", 20010439) // Block:6389254 EthAddr:0xB1A25D6E37ad12579801eBb6787636fd63ba87cc
    });
}