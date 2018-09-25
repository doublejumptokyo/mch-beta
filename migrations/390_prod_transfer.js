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
        await heroManager.forceMintHero("0x8820aBBA1598D89F9750A79AB0Acba580872cFa7", 30010007) // Block:6390665 EthAddr:0xA3aD2389F8666aDF188F61Bc59b553f4524AE102
        await heroManager.forceMintHero("0x849B10E978dbA9daaBE03eAD735f405a48e9378A", 40070024) // Block:6390774 EthAddr:0xd63DE3EE4197fDA5040d6045A3d4202c3b80f4DD
        await heroManager.forceMintHero("0x740821Ef4f5Bb4571e655811B901fAa52b56977c", 40090019) // Block:6391813 EthAddr:0x2Fef65e4D69a38bf0dd074079f367CDF176eC0De
        await heroManager.forceMintHero("0x88bA1F8951BF9E6018D2a2Ba7D703319FD919CF4", 40080001) // Block:6393721 EthAddr:0x62b8B7B7Af7CB5847Dd7335e0B6B4229CD1B7d48
    });
}