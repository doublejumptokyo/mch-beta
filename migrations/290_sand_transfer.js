let HeroManager = artifacts.require('HeroManager');

module.exports = function(deployer) {
    deployer.then(async function() {
        let heroManager = await HeroManager.deployed();

        await heroManager.forceMintHero("0x90Cfe1ebD922583Dddf2fF3533Ec5679F64E2CAE", 30010077) // Block:6382063 EthAddr:0xbDbfE5F4D8775472b0398F88FC378ec2E5518558
        await heroManager.forceMintHero("0x90Cfe1ebD922583Dddf2fF3533Ec5679F64E2CAE", 20010360) // Block:6382063 EthAddr:0xbDbfE5F4D8775472b0398F88FC378ec2E5518558
        await heroManager.forceMintHero("0x90Cfe1ebD922583Dddf2fF3533Ec5679F64E2CAE", 20010224) // Block:6382258 EthAddr:0xbDbfE5F4D8775472b0398F88FC378ec2E5518558
        await heroManager.forceMintHero("0xf305D18224B18B5cD9A047Dc77A5b5b0bd87a9e3", 40010012) // Block:6382469 EthAddr:0x8Cdea15f8536e65A443eFd518BcDD7C22AC267EF
        await heroManager.forceMintHero("0x90Cfe1ebD922583Dddf2fF3533Ec5679F64E2CAE", 20010223) // Block:6382632 EthAddr:0xbDbfE5F4D8775472b0398F88FC378ec2E5518558
        await heroManager.forceMintHero("0x90Cfe1ebD922583Dddf2fF3533Ec5679F64E2CAE", 30010080) // Block:6382766 EthAddr:0xbDbfE5F4D8775472b0398F88FC378ec2E5518558
        await heroManager.forceMintHero("0x90Cfe1ebD922583Dddf2fF3533Ec5679F64E2CAE", 20010365) // Block:6382780 EthAddr:0xbDbfE5F4D8775472b0398F88FC378ec2E5518558
        await heroManager.forceMintHero("0x90Cfe1ebD922583Dddf2fF3533Ec5679F64E2CAE", 30010081) // Block:6382784 EthAddr:0xbDbfE5F4D8775472b0398F88FC378ec2E5518558
        await heroManager.forceMintHero("0x136629ad98f9ea3b811da476BC535De3c3B9F2Bd", 40030028) // Block:6387435 EthAddr:0x2Fef65e4D69a38bf0dd074079f367CDF176eC0De
        await heroManager.forceMintHero("0x751634bA174BF431Ae49BB74B7Dd1B578813976c", 20010439) // Block:6389254 EthAddr:0xB1A25D6E37ad12579801eBb6787636fd63ba87cc
    });
}