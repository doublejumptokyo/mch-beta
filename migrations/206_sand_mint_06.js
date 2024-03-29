let HeroManager = artifacts.require('HeroManager');

module.exports = function(deployer) {
    deployer.then(async function() {
        let heroManager = await HeroManager.deployed();

        await heroManager.forceMintHero("0x42280586B46B3075e3c961b38fc798df7bB6497d", 20010176) // Block:6371208 EthAddr:0x9cb845F189F7556ec5A9438cB8662dB645d551C0
        await heroManager.forceMintHero("0x25C20aA04cDf6A51d9E7F5dd98b1849B96D1b68F", 40090057) // Block:6371216 EthAddr:0x09a9eac4668da190C292B78187157022A0F77c6b
        await heroManager.forceMintHero("0x42280586B46B3075e3c961b38fc798df7bB6497d", 40020078) // Block:6371220 EthAddr:0x9cb845F189F7556ec5A9438cB8662dB645d551C0
        await heroManager.forceMintHero("0xcC80279112f94E66AE458b6d53440803F049e444", 40010043) // Block:6371232 EthAddr:0x264cbD2979105B4fc597206F5F90cA55CD63705D
        await heroManager.forceMintHero("0xf2f4F6567b1EfEC76Eb8EbC91Fa77C2b5822A833", 40010044) // Block:6371244 EthAddr:0xcAd8755c20aeDbD18Ff8111929b91aeb351507cA
        await heroManager.forceMintHero("0xfef18E6671b53b145C8DFa475180D4521491C99f", 40040036) // Block:6371260 EthAddr:0xb046CC9d96b1A77D30B35A3B0Cb8c18cDc7D5B42
        await heroManager.forceMintHero("0x1546f347184eCA5fF24a1d78181AE353a1d89Ac0", 40010045) // Block:6371260 EthAddr:0x635Bad82656765dcDA26E37e7F10819216553dBe
        await heroManager.forceMintHero("0x59fb279A7dD50545402b2EF763d71484E865A57F", 20010177) // Block:6371264 EthAddr:0x02Cba5C47a1cf111d103f6941E7d4489d08d5647
        await heroManager.forceMintHero("0xcC80279112f94E66AE458b6d53440803F049e444", 40090058) // Block:6371264 EthAddr:0x264cbD2979105B4fc597206F5F90cA55CD63705D
        await heroManager.forceMintHero("0xfef18E6671b53b145C8DFa475180D4521491C99f", 40020079) // Block:6371269 EthAddr:0xb046CC9d96b1A77D30B35A3B0Cb8c18cDc7D5B42
        await heroManager.forceMintHero("0xfef18E6671b53b145C8DFa475180D4521491C99f", 40060029) // Block:6371273 EthAddr:0xb046CC9d96b1A77D30B35A3B0Cb8c18cDc7D5B42
        await heroManager.forceMintHero("0xcC80279112f94E66AE458b6d53440803F049e444", 40010046) // Block:6371277 EthAddr:0x264cbD2979105B4fc597206F5F90cA55CD63705D
        await heroManager.forceMintHero("0xf2f4F6567b1EfEC76Eb8EbC91Fa77C2b5822A833", 40090059) // Block:6371277 EthAddr:0xcAd8755c20aeDbD18Ff8111929b91aeb351507cA
        await heroManager.forceMintHero("0x990D47c30De0918cBA6Ee5CFCE84fF3194f31Dfd", 40070029) // Block:6371281 EthAddr:0x8AB85CBe4C76738FaD550074916AB5a6368B8425
        await heroManager.forceMintHero("0x990D47c30De0918cBA6Ee5CFCE84fF3194f31Dfd", 40060030) // Block:6371286 EthAddr:0x8AB85CBe4C76738FaD550074916AB5a6368B8425
        await heroManager.forceMintHero("0xf2f4F6567b1EfEC76Eb8EbC91Fa77C2b5822A833", 40070030) // Block:6371287 EthAddr:0xcAd8755c20aeDbD18Ff8111929b91aeb351507cA
        await heroManager.forceMintHero("0xfef18E6671b53b145C8DFa475180D4521491C99f", 40090060) // Block:6371292 EthAddr:0xb046CC9d96b1A77D30B35A3B0Cb8c18cDc7D5B42
        await heroManager.forceMintHero("0xDDc70d985a766e74D50a15D50972b791E752A8EC", 40040037) // Block:6371294 EthAddr:0x189c7c007c6beDe6080caf2b856EA7797fbD1B4B
        await heroManager.forceMintHero("0xDDc70d985a766e74D50a15D50972b791E752A8EC", 20010178) // Block:6371296 EthAddr:0x189c7c007c6beDe6080caf2b856EA7797fbD1B4B
        await heroManager.forceMintHero("0xfef18E6671b53b145C8DFa475180D4521491C99f", 40010047) // Block:6371309 EthAddr:0xb046CC9d96b1A77D30B35A3B0Cb8c18cDc7D5B42
        await heroManager.forceMintHero("0x1D8DA6Dc71D4D557c1AD013D5c82fC33840595D1", 30010035) // Block:6371312 EthAddr:0x91f04ffE5AA427e977086746e7b9E1B997F2aFA8
        await heroManager.forceMintHero("0xA4F760925130532f3711e7b0B17E3FcC926A942C", 40020080) // Block:6371323 EthAddr:0x4E400216425E420fE387fB374b2085107ef223C5
        await heroManager.forceMintHero("0xA4F760925130532f3711e7b0B17E3FcC926A942C", 40060031) // Block:6371329 EthAddr:0x4E400216425E420fE387fB374b2085107ef223C5
        await heroManager.forceMintHero("0x93Eb48f7e9CdAb2a9F8f3264bEAB052e6cb527d7", 20010179) // Block:6371331 EthAddr:0x69Ee0F1DaE8091a38964995F1FcE6BD131a5A229
        await heroManager.forceMintHero("0xA4F760925130532f3711e7b0B17E3FcC926A942C", 40070031) // Block:6371333 EthAddr:0x4E400216425E420fE387fB374b2085107ef223C5
        await heroManager.forceMintHero("0xfef18E6671b53b145C8DFa475180D4521491C99f", 40030032) // Block:6371343 EthAddr:0xb046CC9d96b1A77D30B35A3B0Cb8c18cDc7D5B42
        await heroManager.forceMintHero("0xA4F760925130532f3711e7b0B17E3FcC926A942C", 40090061) // Block:6371352 EthAddr:0x4E400216425E420fE387fB374b2085107ef223C5
        await heroManager.forceMintHero("0xA4F760925130532f3711e7b0B17E3FcC926A942C", 40030033) // Block:6371354 EthAddr:0x4E400216425E420fE387fB374b2085107ef223C5
        await heroManager.forceMintHero("0xA4F760925130532f3711e7b0B17E3FcC926A942C", 40010048) // Block:6371358 EthAddr:0x4E400216425E420fE387fB374b2085107ef223C5
        await heroManager.forceMintHero("0x92d842C726182F34a60Cc4dA4a2bE11199b48DeE", 40020081) // Block:6371364 EthAddr:0x27ef834D4A530C8ba24006c88e67524A5d30eD27
        await heroManager.forceMintHero("0x92d842C726182F34a60Cc4dA4a2bE11199b48DeE", 30010036) // Block:6371387 EthAddr:0x27ef834D4A530C8ba24006c88e67524A5d30eD27
        await heroManager.forceMintHero("0xCeC4aF16E49620Fc19E57F06CC387B40D650835D", 40070032) // Block:6371403 EthAddr:0xBeD5F0F80d9281597D40035798e878b1E906654c
        await heroManager.forceMintHero("0x32A7cE1dCda8b437f287DEb907B06E943ec758f5", 20010180) // Block:6371403 EthAddr:0x87b8b0240514A795c8487B61b1B6Ea07F34B8d3B
        await heroManager.forceMintHero("0xFe9fe90Bb9F4c8255680ad83D2a19Fe6c63Bbd01", 20010181) // Block:6371479 EthAddr:0xDeeD7A1d5217a9d5D23ab0afa838340e1661F372
        await heroManager.forceMintHero("0xE7dE3997724fbB1A2aB9Be4E842B40EF149ff867", 20010182) // Block:6371488 EthAddr:0x10A99a97CB9e053E75912800b032F5B3E7B8FaFD
        await heroManager.forceMintHero("0x9F28fcE9e16D1BDc880386A211d7dbc5960E85E0", 40080023) // Block:6371500 EthAddr:0xf7cC1cbE562Ff9072aa221951BfCA9A1bfbC2b2a
        await heroManager.forceMintHero("0xA75f77F1a9F91e1A2479cABEfA4f07eeC0c5cF77", 20010183) // Block:6371500 EthAddr:0x97c57FAc598253c11F74Fe86aB2aAdB84626fdAf
        await heroManager.forceMintHero("0xBC78e6b20D97a15FDC3Df1314126226acC000948", 20010184) // Block:6371510 EthAddr:0x1D62cf8353F0ABf24fE71f021491A9d03eD59d2D
        await heroManager.forceMintHero("0x01a9778782F70B0A8fC922899F71934779681a74", 30010037) // Block:6371510 EthAddr:0xC474471670AD3680eC739d342e72D35355403C69
        await heroManager.forceMintHero("0x9F28fcE9e16D1BDc880386A211d7dbc5960E85E0", 40050025) // Block:6371512 EthAddr:0xf7cC1cbE562Ff9072aa221951BfCA9A1bfbC2b2a
        await heroManager.forceMintHero("0x2d9EFae6b93DdBf999337e166cf21858127B71aC", 40090062) // Block:6371517 EthAddr:0xD9D3d2034C76413A12a990AAdb59035cc594c1fC
        await heroManager.forceMintHero("0x2d9EFae6b93DdBf999337e166cf21858127B71aC", 40010049) // Block:6371520 EthAddr:0xD9D3d2034C76413A12a990AAdb59035cc594c1fC
        await heroManager.forceMintHero("0x76aEd79025Fbc7A43718Ab89B8426F2F88C818a7", 30010038) // Block:6371523 EthAddr:0x99a811E5c62ADD613975456292F836115AEa0164
        await heroManager.forceMintHero("0x2d9EFae6b93DdBf999337e166cf21858127B71aC", 40040038) // Block:6371527 EthAddr:0xD9D3d2034C76413A12a990AAdb59035cc594c1fC
        await heroManager.forceMintHero("0x2d9EFae6b93DdBf999337e166cf21858127B71aC", 40070033) // Block:6371536 EthAddr:0xD9D3d2034C76413A12a990AAdb59035cc594c1fC
        await heroManager.forceMintHero("0x2d9EFae6b93DdBf999337e166cf21858127B71aC", 40080024) // Block:6371540 EthAddr:0xD9D3d2034C76413A12a990AAdb59035cc594c1fC
        await heroManager.forceMintHero("0xc0f5E0EE827693eAB08E83C688BfA63eAa7BF529", 30010039) // Block:6371547 EthAddr:0x70E68fC54cf52215E875a667EDEF0ceC30B5Eb2e
        await heroManager.forceMintHero("0x2d9EFae6b93DdBf999337e166cf21858127B71aC", 40030034) // Block:6371557 EthAddr:0xD9D3d2034C76413A12a990AAdb59035cc594c1fC
        await heroManager.forceMintHero("0x6fD7bcE7B6793288Cd75c4B9EfBEDB5C43D84076", 20010185) // Block:6371557 EthAddr:0x339E441E8C3F0A8D30fFF883fcaAB62DfA1ebC15
        await heroManager.forceMintHero("0x2d9EFae6b93DdBf999337e166cf21858127B71aC", 40060032) // Block:6371563 EthAddr:0xD9D3d2034C76413A12a990AAdb59035cc594c1fC
        await heroManager.forceMintHero("0x5822ed26426FFC8519678e8414176910EF9a7B49", 20010186) // Block:6371564 EthAddr:0x125a3E5BF4a1B1dbfbFAA1540AAA3b39fEBdb513
        await heroManager.forceMintHero("0x5F5F92117c3649D54ff84fbF566D7aac82fa3Fcf", 20010187) // Block:6371565 EthAddr:0xF470d3c4F27f56B0C5885B385791f3AA3d09D8d3
        await heroManager.forceMintHero("0x2d9EFae6b93DdBf999337e166cf21858127B71aC", 40050026) // Block:6371569 EthAddr:0xD9D3d2034C76413A12a990AAdb59035cc594c1fC
        await heroManager.forceMintHero("0xDeDDfb250609097998cc25E676D4B83C4eEeE367", 20010188) // Block:6371581 EthAddr:0x0B27c52339DE642324BA1C8F5bb5481e3ae84D47
        await heroManager.forceMintHero("0x9E8Ec655C17598978C02106FDE1c4DEC3B4484af", 20010189) // Block:6371595 EthAddr:0x32dd41F668FF72d61f8be415DC1A38e8909C6230
        await heroManager.forceMintHero("0x2d731a806F46469a03A9f601E555095fEF394010", 20010190) // Block:6371600 EthAddr:0x89D16B00a4CF04576a969B0593a603FcA62019Fb
        await heroManager.forceMintHero("0x9E8Ec655C17598978C02106FDE1c4DEC3B4484af", 40040039) // Block:6371606 EthAddr:0x32dd41F668FF72d61f8be415DC1A38e8909C6230
        await heroManager.forceMintHero("0x3AF521a2805729b9108B6E28322a987A378D1559", 20010191) // Block:6371606 EthAddr:0xD15b3b19181B05b46D0F8bfec5c1258B95aD1A80
        await heroManager.forceMintHero("0xdd7A0c0AA9b00ac11Ee63CEb7c70854a60fa17df", 40080025) // Block:6371623 EthAddr:0x9F1BeE52A02890fEC054D35476efA97AC4870703
        await heroManager.forceMintHero("0x9c8Fba0ec4ACcB0E7cc31C9d52E58C5365176d72", 20010192) // Block:6371624 EthAddr:0xCbdFcB9D7436005cC8cfbf60f7c9A47B51584e43
        await heroManager.forceMintHero("0x9c8Fba0ec4ACcB0E7cc31C9d52E58C5365176d72", 40020082) // Block:6371631 EthAddr:0xCbdFcB9D7436005cC8cfbf60f7c9A47B51584e43
        await heroManager.forceMintHero("0x9c8Fba0ec4ACcB0E7cc31C9d52E58C5365176d72", 40090063) // Block:6371634 EthAddr:0xCbdFcB9D7436005cC8cfbf60f7c9A47B51584e43
        await heroManager.forceMintHero("0x9c8Fba0ec4ACcB0E7cc31C9d52E58C5365176d72", 40010050) // Block:6371642 EthAddr:0xCbdFcB9D7436005cC8cfbf60f7c9A47B51584e43
        await heroManager.forceMintHero("0xe934b00609cf66deE89759c839d9fA789Db04397", 40070034) // Block:6371642 EthAddr:0x24f958970d04A1fC57d912348F7A957dFA4d2e40
        await heroManager.forceMintHero("0xe934b00609cf66deE89759c839d9fA789Db04397", 20010193) // Block:6371646 EthAddr:0x24f958970d04A1fC57d912348F7A957dFA4d2e40
        await heroManager.forceMintHero("0x9c8Fba0ec4ACcB0E7cc31C9d52E58C5365176d72", 40030035) // Block:6371648 EthAddr:0xCbdFcB9D7436005cC8cfbf60f7c9A47B51584e43
        await heroManager.forceMintHero("0xA75f77F1a9F91e1A2479cABEfA4f07eeC0c5cF77", 40020083) // Block:6371655 EthAddr:0x97c57FAc598253c11F74Fe86aB2aAdB84626fdAf
        await heroManager.forceMintHero("0xEE8CFaf830bf161E58d59b7c6d6fB50721476f2b", 20010194) // Block:6371655 EthAddr:0xE99840f899d28566487F10E4046685f046958517
        await heroManager.forceMintHero("0xed3761D4f3b253a76A7E708a7e95F8cc49861757", 20010195) // Block:6371683 EthAddr:0x793E193a27744025F8F60736Eda8a863aCa5b699
        await heroManager.forceMintHero("0x9c8Fba0ec4ACcB0E7cc31C9d52E58C5365176d72", 40010051) // Block:6371690 EthAddr:0xCbdFcB9D7436005cC8cfbf60f7c9A47B51584e43
        await heroManager.forceMintHero("0x4A77F1F514802cCe5728f5BDA9e62A5eB786E345", 20010196) // Block:6371701 EthAddr:0xcc0B13B539C8c08817868A9855E40FF7fb8Df92D
        await heroManager.forceMintHero("0xAaD5729E6D7AEAFC0274DB79d6Cb1eee635BCbdF", 20010197) // Block:6371702 EthAddr:0x289BC64F25Af2785669DA79126a7B26A76cA956e
        await heroManager.forceMintHero("0x42A3aB7bb7EE97956ac3D78C75d5ecDFaf858D82", 40070035) // Block:6371724 EthAddr:0x23A5e94d0D6Ded8E93E7406dd8325378b151Ca66
        await heroManager.forceMintHero("0x42A3aB7bb7EE97956ac3D78C75d5ecDFaf858D82", 40060033) // Block:6371728 EthAddr:0x23A5e94d0D6Ded8E93E7406dd8325378b151Ca66
        await heroManager.forceMintHero("0x76aEd79025Fbc7A43718Ab89B8426F2F88C818a7", 40090064) // Block:6371752 EthAddr:0x99a811E5c62ADD613975456292F836115AEa0164
        await heroManager.forceMintHero("0x76aEd79025Fbc7A43718Ab89B8426F2F88C818a7", 40060034) // Block:6371762 EthAddr:0x99a811E5c62ADD613975456292F836115AEa0164
        await heroManager.forceMintHero("0x76aEd79025Fbc7A43718Ab89B8426F2F88C818a7", 40070036) // Block:6371764 EthAddr:0x99a811E5c62ADD613975456292F836115AEa0164
        await heroManager.forceMintHero("0xeF9f8DE1805A36807bf2C69E8631aaE1ef3fA8D4", 30010040) // Block:6371771 EthAddr:0xd80170377dd2869BfAC5e9dC3335A5AB7610981f
        await heroManager.forceMintHero("0x42A3aB7bb7EE97956ac3D78C75d5ecDFaf858D82", 20010198) // Block:6371776 EthAddr:0x23A5e94d0D6Ded8E93E7406dd8325378b151Ca66
        await heroManager.forceMintHero("0x4A77F1F514802cCe5728f5BDA9e62A5eB786E345", 30010041) // Block:6371787 EthAddr:0xcc0B13B539C8c08817868A9855E40FF7fb8Df92D
        await heroManager.forceMintHero("0x2727C1525B4ab3E5F6cb609EE070ed464480bA06", 40080026) // Block:6371811 EthAddr:0x009f51A963099f54E5601e4939f88aeF27643624
        await heroManager.forceMintHero("0x2727C1525B4ab3E5F6cb609EE070ed464480bA06", 20010199) // Block:6371814 EthAddr:0x009f51A963099f54E5601e4939f88aeF27643624
        await heroManager.forceMintHero("0x09532D8709fa9C7E3AD4624925C21AC9928998d7", 40020084) // Block:6371832 EthAddr:0xC15B308E6261Ae1a8970a04Ed89497cA414956fc
        await heroManager.forceMintHero("0xDdB6798107ead496aFCBab1B8b67000d83cBBAf4", 20010200) // Block:6371851 EthAddr:0xd222372f76D5558feC78aca73AD6f4CE81133a06
        await heroManager.forceMintHero("0xdd7A0c0AA9b00ac11Ee63CEb7c70854a60fa17df", 50020004) // Block:6371852 EthAddr:0x9F1BeE52A02890fEC054D35476efA97AC4870703
        await heroManager.forceMintHero("0xd9a41eEeADC05400698924eBF4aE096467765d26", 40020085) // Block:6371864 EthAddr:0x04E47c0462743e33024208e9873736b2Fe8d4d6c
        await heroManager.forceMintHero("0xdd7A0c0AA9b00ac11Ee63CEb7c70854a60fa17df", 50050014) // Block:6371865 EthAddr:0x9F1BeE52A02890fEC054D35476efA97AC4870703
        await heroManager.forceMintHero("0xd9a41eEeADC05400698924eBF4aE096467765d26", 40040040) // Block:6371866 EthAddr:0x04E47c0462743e33024208e9873736b2Fe8d4d6c
        await heroManager.forceMintHero("0xd9a41eEeADC05400698924eBF4aE096467765d26", 40010052) // Block:6371866 EthAddr:0x04E47c0462743e33024208e9873736b2Fe8d4d6c
        await heroManager.forceMintHero("0xdd7A0c0AA9b00ac11Ee63CEb7c70854a60fa17df", 40070037) // Block:6371871 EthAddr:0x9F1BeE52A02890fEC054D35476efA97AC4870703
        await heroManager.forceMintHero("0xCD24aEbab023610db1abdC806c7522C47b047a82", 40090065) // Block:6371872 EthAddr:0x255309578a5Aa7e0E30dD4Bda7A65C9Eee331a5C
        await heroManager.forceMintHero("0xCD24aEbab023610db1abdC806c7522C47b047a82", 40020086) // Block:6371874 EthAddr:0x255309578a5Aa7e0E30dD4Bda7A65C9Eee331a5C
        await heroManager.forceMintHero("0xdd7A0c0AA9b00ac11Ee63CEb7c70854a60fa17df", 40030036) // Block:6371876 EthAddr:0x9F1BeE52A02890fEC054D35476efA97AC4870703
        await heroManager.forceMintHero("0xf9462c7BB8B3102C9bE41adbeDcB9431Fd41003A", 40080027) // Block:6371876 EthAddr:0xb177C0bc965906c2C0Ac8f42260ba7F2b49fA16e
        await heroManager.forceMintHero("0x09532D8709fa9C7E3AD4624925C21AC9928998d7", 40090066) // Block:6371877 EthAddr:0xC15B308E6261Ae1a8970a04Ed89497cA414956fc
        await heroManager.forceMintHero("0x09532D8709fa9C7E3AD4624925C21AC9928998d7", 20010201) // Block:6371879 EthAddr:0xC15B308E6261Ae1a8970a04Ed89497cA414956fc
        await heroManager.forceMintHero("0xf9462c7BB8B3102C9bE41adbeDcB9431Fd41003A", 20010202) // Block:6371880 EthAddr:0xb177C0bc965906c2C0Ac8f42260ba7F2b49fA16e
        await heroManager.forceMintHero("0xCD24aEbab023610db1abdC806c7522C47b047a82", 40020087) // Block:6371883 EthAddr:0x255309578a5Aa7e0E30dD4Bda7A65C9Eee331a5C
        await heroManager.forceMintHero("0x03890b1712329F57221D4B36003Cb4a30BD90257", 40050027) // Block:6371909 EthAddr:0x12BCEFAff8878F84Fdd4ce2f33C3b49Ee43dE948
        await heroManager.forceMintHero("0x42280586B46B3075e3c961b38fc798df7bB6497d", 40080028) // Block:6371914 EthAddr:0x9cb845F189F7556ec5A9438cB8662dB645d551C0
    });
}