let HeroManager = artifacts.require('HeroManager');

module.exports = function(deployer) {
    deployer.then(async function() {
        let heroManager = await HeroManager.deployed();

        await heroManager.forceMintHero("0x2F897904A72C9dc619F6d815CaeE46b41103051a", 20010238) // Block:6372317 EthAddr:0x7Fe68a2C10302F00024A499b0459EC8c80cac150
        await heroManager.forceMintHero("0x74be0820Fc28c9ab36367D3d4c8f9578A7AE8957", 40040051) // Block:6372320 EthAddr:0x6e9c932b0eF7F2E5aF6A185B48f219bb7D60AbFC
        await heroManager.forceMintHero("0x1546f347184eCA5fF24a1d78181AE353a1d89Ac0", 40060040) // Block:6372320 EthAddr:0x635Bad82656765dcDA26E37e7F10819216553dBe
        await heroManager.forceMintHero("0x56F81A4902E1CCCe353dea10AF0a598c4a674b7b", 20010239) // Block:6372320 EthAddr:0xfC5Fc2bEDEA05dbb485A2Bd4e319B207b1dC2D40
        await heroManager.forceMintHero("0x74be0820Fc28c9ab36367D3d4c8f9578A7AE8957", 40010061) // Block:6372332 EthAddr:0x6e9c932b0eF7F2E5aF6A185B48f219bb7D60AbFC
        await heroManager.forceMintHero("0x74be0820Fc28c9ab36367D3d4c8f9578A7AE8957", 40030043) // Block:6372340 EthAddr:0x6e9c932b0eF7F2E5aF6A185B48f219bb7D60AbFC
        await heroManager.forceMintHero("0x11A8bf81f1887232A577B81595cAa129427385A8", 40090078) // Block:6372341 EthAddr:0x81BAA737a23aAF007A6aa4aBf1dd6FD0919e7D99
        await heroManager.forceMintHero("0xA568cc86d1e2876B47c79B8376201a6B60C23b10", 40040052) // Block:6372343 EthAddr:0x962077B67d68F145B57D0cc58464702C83CaBccC
        await heroManager.forceMintHero("0xcC80279112f94E66AE458b6d53440803F049e444", 40020093) // Block:6372346 EthAddr:0x264cbD2979105B4fc597206F5F90cA55CD63705D
        await heroManager.forceMintHero("0x74be0820Fc28c9ab36367D3d4c8f9578A7AE8957", 40050036) // Block:6372346 EthAddr:0x6e9c932b0eF7F2E5aF6A185B48f219bb7D60AbFC
        await heroManager.forceMintHero("0x74be0820Fc28c9ab36367D3d4c8f9578A7AE8957", 40060041) // Block:6372351 EthAddr:0x6e9c932b0eF7F2E5aF6A185B48f219bb7D60AbFC
        await heroManager.forceMintHero("0xe2ba633B66782a831979F88589b16bC5C7bA3113", 40050037) // Block:6372355 EthAddr:0xa4d0AE57A7e6ac93Da6A7434bBE9E24B911C63F4
        await heroManager.forceMintHero("0x74be0820Fc28c9ab36367D3d4c8f9578A7AE8957", 40070043) // Block:6372357 EthAddr:0x6e9c932b0eF7F2E5aF6A185B48f219bb7D60AbFC
        await heroManager.forceMintHero("0x74be0820Fc28c9ab36367D3d4c8f9578A7AE8957", 40080033) // Block:6372361 EthAddr:0x6e9c932b0eF7F2E5aF6A185B48f219bb7D60AbFC
        await heroManager.forceMintHero("0xe2ba633B66782a831979F88589b16bC5C7bA3113", 20010240) // Block:6372368 EthAddr:0xa4d0AE57A7e6ac93Da6A7434bBE9E24B911C63F4
        await heroManager.forceMintHero("0xe2ba633B66782a831979F88589b16bC5C7bA3113", 40040053) // Block:6372380 EthAddr:0xa4d0AE57A7e6ac93Da6A7434bBE9E24B911C63F4
        await heroManager.forceMintHero("0x11A8bf81f1887232A577B81595cAa129427385A8", 40070044) // Block:6372383 EthAddr:0x81BAA737a23aAF007A6aa4aBf1dd6FD0919e7D99
        await heroManager.forceMintHero("0x11A8bf81f1887232A577B81595cAa129427385A8", 40060042) // Block:6372391 EthAddr:0x81BAA737a23aAF007A6aa4aBf1dd6FD0919e7D99
        await heroManager.forceMintHero("0x11A8bf81f1887232A577B81595cAa129427385A8", 40050038) // Block:6372393 EthAddr:0x81BAA737a23aAF007A6aa4aBf1dd6FD0919e7D99
        await heroManager.forceMintHero("0x11A8bf81f1887232A577B81595cAa129427385A8", 40040054) // Block:6372395 EthAddr:0x81BAA737a23aAF007A6aa4aBf1dd6FD0919e7D99
        await heroManager.forceMintHero("0x11A8bf81f1887232A577B81595cAa129427385A8", 40030044) // Block:6372397 EthAddr:0x81BAA737a23aAF007A6aa4aBf1dd6FD0919e7D99
        await heroManager.forceMintHero("0xa0be27276a45Cd6a97C6903bd7bA8E0427499046", 20010241) // Block:6372404 EthAddr:0xA24669f08D519609C26Cf5257062C1689eFe69dB
        await heroManager.forceMintHero("0xb067C19F968e5FaEF757E289eF0Dea6fd3cC9cDB", 20010242) // Block:6372428 EthAddr:0x3aCdbd0e1bc29405ad25388b41eB423967584Ecc
        await heroManager.forceMintHero("0x108658088461A461682108578e5f6896A6303523", 20010243) // Block:6372437 EthAddr:0x3068fDce90Efa560f5a0D6790115D6623810F682
        await heroManager.forceMintHero("0x099216b1160F548dAE4846c0d6f0B2F24010728D", 20010244) // Block:6372439 EthAddr:0x76E1E12E7Bd4abEFCE188a045A7f1be679a11228
        await heroManager.forceMintHero("0x0A62E2c12D128e0Cac6CeB346a24Bb07A9b43C36", 20010245) // Block:6372445 EthAddr:0x44569c13864f4a252f512c0FDb1C68a5ABc543bf
        await heroManager.forceMintHero("0x89AF2dAF1C92e07279243cF8c49B1841e688d9e0", 20010246) // Block:6372446 EthAddr:0x74A5488fa9213aef751a3d6b124664Dd620Ff6eE
        await heroManager.forceMintHero("0x22530B88109f84f4d00AA84C4e93Caf3C06a6955", 20010247) // Block:6372448 EthAddr:0x85AB669ba35f5fe2B337A7Ba14939B0517aA4017
        await heroManager.forceMintHero("0xf2EaBbCaCEB5AC990bbf97632aaEfd4F2b3c36d0", 20010248) // Block:6372452 EthAddr:0xac682b0320C37e58F07e8B819c7c12ec642A3f55
        await heroManager.forceMintHero("0x63714c900f69382Fe7b8925b44389A14c641c864", 40050039) // Block:6372454 EthAddr:0x3A58C1543F82a5Fa7efa20b2Dffa17Ea4C4dd6F1
        await heroManager.forceMintHero("0xcC80279112f94E66AE458b6d53440803F049e444", 40060043) // Block:6372455 EthAddr:0x264cbD2979105B4fc597206F5F90cA55CD63705D
        await heroManager.forceMintHero("0xE62983cC50bF348269170D298F093518B56Be6B6", 20010249) // Block:6372461 EthAddr:0x2520AF0612880CB5355C400a5087b1d35A877441
        await heroManager.forceMintHero("0x63714c900f69382Fe7b8925b44389A14c641c864", 40070045) // Block:6372466 EthAddr:0x3A58C1543F82a5Fa7efa20b2Dffa17Ea4C4dd6F1
        await heroManager.forceMintHero("0xa15eB84Ad87516315e3505364966B038912483a0", 20010250) // Block:6372477 EthAddr:0xeD081EA02CA571E61309F163226ABe4A4685684d
        await heroManager.forceMintHero("0x63714c900f69382Fe7b8925b44389A14c641c864", 20010251) // Block:6372500 EthAddr:0x3A58C1543F82a5Fa7efa20b2Dffa17Ea4C4dd6F1
        await heroManager.forceMintHero("0xa15eB84Ad87516315e3505364966B038912483a0", 30010045) // Block:6372512 EthAddr:0xeD081EA02CA571E61309F163226ABe4A4685684d
        await heroManager.forceMintHero("0x2358D981C82ba88D5768A98cF0A462e7c3D63256", 20010252) // Block:6372513 EthAddr:0x87FC0Cdb581f84456C02F20eC1a844d95803C437
        await heroManager.forceMintHero("0x63714c900f69382Fe7b8925b44389A14c641c864", 40040055) // Block:6372552 EthAddr:0x3A58C1543F82a5Fa7efa20b2Dffa17Ea4C4dd6F1
        await heroManager.forceMintHero("0x2b6f2BB88Aa866560C6100495E26725b96080200", 20010253) // Block:6372567 EthAddr:0x0af6Ce1745A6E2B955aA39734dbD983FAF854c39
        await heroManager.forceMintHero("0xf2EaBbCaCEB5AC990bbf97632aaEfd4F2b3c36d0", 30010046) // Block:6372581 EthAddr:0xac682b0320C37e58F07e8B819c7c12ec642A3f55
        await heroManager.forceMintHero("0x6F67E424d57eD73B088f3aDBc68f7417C9B131E6", 40010062) // Block:6372581 EthAddr:0x3Fa301c0173C3241659e2F185748f4Ed3816A206
        await heroManager.forceMintHero("0x6F67E424d57eD73B088f3aDBc68f7417C9B131E6", 40040056) // Block:6372581 EthAddr:0x3Fa301c0173C3241659e2F185748f4Ed3816A206
        await heroManager.forceMintHero("0xcC80279112f94E66AE458b6d53440803F049e444", 40060044) // Block:6372585 EthAddr:0x264cbD2979105B4fc597206F5F90cA55CD63705D
        await heroManager.forceMintHero("0x47eb8188bA4f2399dE6d52E2890c376a8aB119E1", 40050040) // Block:6372585 EthAddr:0xE56268f1332f0c5861509FB3504256D82e192A64
        await heroManager.forceMintHero("0xB8AB5671C8698011f24634a3893D851F3a2dfA6e", 40020094) // Block:6372592 EthAddr:0xeFF855fca9BC316A2b404e86b328f63a732c0914
        await heroManager.forceMintHero("0xcC80279112f94E66AE458b6d53440803F049e444", 40080034) // Block:6372594 EthAddr:0x264cbD2979105B4fc597206F5F90cA55CD63705D
        await heroManager.forceMintHero("0xB8AB5671C8698011f24634a3893D851F3a2dfA6e", 40010063) // Block:6372611 EthAddr:0xeFF855fca9BC316A2b404e86b328f63a732c0914
        await heroManager.forceMintHero("0xe934b00609cf66deE89759c839d9fA789Db04397", 40020095) // Block:6372611 EthAddr:0x24f958970d04A1fC57d912348F7A957dFA4d2e40
        await heroManager.forceMintHero("0xB8AB5671C8698011f24634a3893D851F3a2dfA6e", 40040057) // Block:6372633 EthAddr:0xeFF855fca9BC316A2b404e86b328f63a732c0914
        await heroManager.forceMintHero("0x6F67E424d57eD73B088f3aDBc68f7417C9B131E6", 40060045) // Block:6372633 EthAddr:0x3Fa301c0173C3241659e2F185748f4Ed3816A206
        await heroManager.forceMintHero("0x853Cb6bdEc40054ACf2e9bcdA5579Db76AAF66C5", 30010047) // Block:6372652 EthAddr:0x0537544De3935408246EE2Ad09949D046F92574D
        await heroManager.forceMintHero("0xCeB353399B83d16D1CC7866FD01bF350543f7bB3", 20010254) // Block:6372655 EthAddr:0x83F1686D5146476eD99b2fe02B56d935a3c06A0e
        await heroManager.forceMintHero("0x63714c900f69382Fe7b8925b44389A14c641c864", 40090079) // Block:6372661 EthAddr:0x3A58C1543F82a5Fa7efa20b2Dffa17Ea4C4dd6F1
        await heroManager.forceMintHero("0x589199fbf0e4480895447032b595c722B5b46969", 20010255) // Block:6372663 EthAddr:0xc90C18C8DCc795fAd48C782C22e1EA68926EACfC
        await heroManager.forceMintHero("0x34BCFEdDFC49f3d32B952771c9707Ba2cF02D462", 20010256) // Block:6372694 EthAddr:0xF467aA729236C24A415679BF62150fD61E229409
        await heroManager.forceMintHero("0x32eE21d28f673EB25ec1B66dEf415ca2B81cE3d6", 20010257) // Block:6372702 EthAddr:0x6d3D576d316925fbf4a6BA443cE8000b5a723bB1
        await heroManager.forceMintHero("0x1782249e489249ac18f52e12F1b834ecAa0c90b2", 40030045) // Block:6372702 EthAddr:0x0Aa6920041e5111C464D9Aa5cd736D1867342813
        await heroManager.forceMintHero("0x724f12EebBD6A3De70ab908B7018ba96967E3A9c", 20010258) // Block:6372711 EthAddr:0x83AE0664E3a5AeADf179DAdAe48479CC82Ac5E9B
        await heroManager.forceMintHero("0xc7794093497c103071Ea2a0C558a04b4600C547C", 20010259) // Block:6372719 EthAddr:0x05DaeD4EbdCE7E0Eca746d03E0c57A480565CD9d
        await heroManager.forceMintHero("0x32eE21d28f673EB25ec1B66dEf415ca2B81cE3d6", 30010048) // Block:6372721 EthAddr:0x6d3D576d316925fbf4a6BA443cE8000b5a723bB1
        await heroManager.forceMintHero("0xcC80279112f94E66AE458b6d53440803F049e444", 40090080) // Block:6372726 EthAddr:0x264cbD2979105B4fc597206F5F90cA55CD63705D
        await heroManager.forceMintHero("0x42280586B46B3075e3c961b38fc798df7bB6497d", 40010064) // Block:6372761 EthAddr:0x9cb845F189F7556ec5A9438cB8662dB645d551C0
        await heroManager.forceMintHero("0x8673BeDd7DAFd82665eA0d13934423aEae9aA8EB", 20010260) // Block:6372765 EthAddr:0x081794bf52f18f781b4C4c1427D928FDefbB5ba5
        await heroManager.forceMintHero("0x1782249e489249ac18f52e12F1b834ecAa0c90b2", 30010049) // Block:6372768 EthAddr:0x0Aa6920041e5111C464D9Aa5cd736D1867342813
        await heroManager.forceMintHero("0x34BCFEdDFC49f3d32B952771c9707Ba2cF02D462", 30010050) // Block:6372776 EthAddr:0xF467aA729236C24A415679BF62150fD61E229409
        await heroManager.forceMintHero("0x29C5D7E6FB649959Ef0a88acF333072E65bC28CD", 20010261) // Block:6372810 EthAddr:0xb9Dc4F49901Be206d932B6bb5E7a128599deAd77
        await heroManager.forceMintHero("0xba886e14dDD487475894cBa9f42437eafDE5337B", 40040058) // Block:6372828 EthAddr:0xB007f748f2223E205483d80a3b634bFD5268A504
        await heroManager.forceMintHero("0x14540Eb569809530E294d9ADd6eb1E036d979D71", 20010262) // Block:6372839 EthAddr:0x9A1dA5eb73B76B7bD51D0E7f7A1eA569417fb303
        await heroManager.forceMintHero("0x9dcf038CEdA06101A4CCf34B1fD3AE0484bcF3cC", 40030046) // Block:6372841 EthAddr:0xB0cf52dE092B77A584f2eFfEc755DdaB4da96467
        await heroManager.forceMintHero("0x8b664B772AcAfa05ee259379f16EbC0778aABCE3", 40070046) // Block:6372841 EthAddr:0x69f4B838f14c179aC56d2f8bEe73C67c5cb26020
        await heroManager.forceMintHero("0x8b664B772AcAfa05ee259379f16EbC0778aABCE3", 40080035) // Block:6372843 EthAddr:0x69f4B838f14c179aC56d2f8bEe73C67c5cb26020
        await heroManager.forceMintHero("0x9dcf038CEdA06101A4CCf34B1fD3AE0484bcF3cC", 40020096) // Block:6372843 EthAddr:0xB0cf52dE092B77A584f2eFfEc755DdaB4da96467
        await heroManager.forceMintHero("0x32eE21d28f673EB25ec1B66dEf415ca2B81cE3d6", 40060046) // Block:6372850 EthAddr:0x6d3D576d316925fbf4a6BA443cE8000b5a723bB1
        await heroManager.forceMintHero("0x8b664B772AcAfa05ee259379f16EbC0778aABCE3", 40030047) // Block:6372855 EthAddr:0x69f4B838f14c179aC56d2f8bEe73C67c5cb26020
        await heroManager.forceMintHero("0x8b664B772AcAfa05ee259379f16EbC0778aABCE3", 40060047) // Block:6372858 EthAddr:0x69f4B838f14c179aC56d2f8bEe73C67c5cb26020
        await heroManager.forceMintHero("0xfb2a20481299C0F39374E9792Af309e6fa07729E", 20010263) // Block:6372872 EthAddr:0x9354b7d4B38cBb6CF4D12feD073b6cF0431ccD18
        await heroManager.forceMintHero("0x5A3D5316128474e2A329D9979D5CDcfEB21d2183", 40040059) // Block:6372874 EthAddr:0xedafC915B6bF13B6f03a46D372f266322492cc4b
        await heroManager.forceMintHero("0x5A3D5316128474e2A329D9979D5CDcfEB21d2183", 40080036) // Block:6372883 EthAddr:0xedafC915B6bF13B6f03a46D372f266322492cc4b
        await heroManager.forceMintHero("0x9dcf038CEdA06101A4CCf34B1fD3AE0484bcF3cC", 40040060) // Block:6372883 EthAddr:0xB0cf52dE092B77A584f2eFfEc755DdaB4da96467
        await heroManager.forceMintHero("0x9dcf038CEdA06101A4CCf34B1fD3AE0484bcF3cC", 40050041) // Block:6372894 EthAddr:0xB0cf52dE092B77A584f2eFfEc755DdaB4da96467
        await heroManager.forceMintHero("0x9dcf038CEdA06101A4CCf34B1fD3AE0484bcF3cC", 40060048) // Block:6372898 EthAddr:0xB0cf52dE092B77A584f2eFfEc755DdaB4da96467
        await heroManager.forceMintHero("0x9dcf038CEdA06101A4CCf34B1fD3AE0484bcF3cC", 40070047) // Block:6372901 EthAddr:0xB0cf52dE092B77A584f2eFfEc755DdaB4da96467
        await heroManager.forceMintHero("0x9dcf038CEdA06101A4CCf34B1fD3AE0484bcF3cC", 40080037) // Block:6372906 EthAddr:0xB0cf52dE092B77A584f2eFfEc755DdaB4da96467
        await heroManager.forceMintHero("0x14540Eb569809530E294d9ADd6eb1E036d979D71", 40090081) // Block:6372906 EthAddr:0x9A1dA5eb73B76B7bD51D0E7f7A1eA569417fb303
        await heroManager.forceMintHero("0x8673BeDd7DAFd82665eA0d13934423aEae9aA8EB", 40060049) // Block:6372915 EthAddr:0x081794bf52f18f781b4C4c1427D928FDefbB5ba5
        await heroManager.forceMintHero("0x9dcf038CEdA06101A4CCf34B1fD3AE0484bcF3cC", 40090082) // Block:6372932 EthAddr:0xB0cf52dE092B77A584f2eFfEc755DdaB4da96467
        await heroManager.forceMintHero("0x83D61F13C54Caa7b1a2C5D1243AB69f590d9115E", 20010264) // Block:6372983 EthAddr:0xb1dD78E89C37c85ba76c5339e4324DDa1f9D55f1
        await heroManager.forceMintHero("0x9dcf038CEdA06101A4CCf34B1fD3AE0484bcF3cC", 40010065) // Block:6372990 EthAddr:0xB0cf52dE092B77A584f2eFfEc755DdaB4da96467
        await heroManager.forceMintHero("0x9dcf038CEdA06101A4CCf34B1fD3AE0484bcF3cC", 40030048) // Block:6372992 EthAddr:0xB0cf52dE092B77A584f2eFfEc755DdaB4da96467
        await heroManager.forceMintHero("0x9dcf038CEdA06101A4CCf34B1fD3AE0484bcF3cC", 40040061) // Block:6372995 EthAddr:0xB0cf52dE092B77A584f2eFfEc755DdaB4da96467
        await heroManager.forceMintHero("0x9dcf038CEdA06101A4CCf34B1fD3AE0484bcF3cC", 40050042) // Block:6372997 EthAddr:0xB0cf52dE092B77A584f2eFfEc755DdaB4da96467
        await heroManager.forceMintHero("0x83D61F13C54Caa7b1a2C5D1243AB69f590d9115E", 40030049) // Block:6373000 EthAddr:0xb1dD78E89C37c85ba76c5339e4324DDa1f9D55f1
        await heroManager.forceMintHero("0x9dcf038CEdA06101A4CCf34B1fD3AE0484bcF3cC", 40060050) // Block:6373001 EthAddr:0xB0cf52dE092B77A584f2eFfEc755DdaB4da96467
        await heroManager.forceMintHero("0x83D61F13C54Caa7b1a2C5D1243AB69f590d9115E", 40070048) // Block:6373006 EthAddr:0xb1dD78E89C37c85ba76c5339e4324DDa1f9D55f1
        await heroManager.forceMintHero("0x9dcf038CEdA06101A4CCf34B1fD3AE0484bcF3cC", 40070049) // Block:6373012 EthAddr:0xB0cf52dE092B77A584f2eFfEc755DdaB4da96467
        await heroManager.forceMintHero("0xf875Ed55A4F4678e8a2D654A1E25f4EC174ac798", 30010051) // Block:6373013 EthAddr:0x19e573ED6458Cd7d433AC4D31BC039510621Dc75
        await heroManager.forceMintHero("0x9dcf038CEdA06101A4CCf34B1fD3AE0484bcF3cC", 40080038) // Block:6373014 EthAddr:0xB0cf52dE092B77A584f2eFfEc755DdaB4da96467
        await heroManager.forceMintHero("0x83D61F13C54Caa7b1a2C5D1243AB69f590d9115E", 40010066) // Block:6373014 EthAddr:0xb1dD78E89C37c85ba76c5339e4324DDa1f9D55f1
        await heroManager.forceMintHero("0x83D61F13C54Caa7b1a2C5D1243AB69f590d9115E", 30010052) // Block:6373021 EthAddr:0xb1dD78E89C37c85ba76c5339e4324DDa1f9D55f1
        await heroManager.forceMintHero("0xf875Ed55A4F4678e8a2D654A1E25f4EC174ac798", 20010265) // Block:6373021 EthAddr:0x19e573ED6458Cd7d433AC4D31BC039510621Dc75
    });
}