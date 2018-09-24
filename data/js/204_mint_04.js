let HeroManager = artifacts.require('HeroManager');

module.exports = function(deployer) {
    deployer.then(async function() {
        let heroManager = await HeroManager.deployed();

        await heroManager.mintHero("0xd16C15b46b3AAA9d7f0DDc3b5A5C7c90cecea831", 40030018) // Block:6370287 EthAddr:0xfa06a45FB29129727b59095c609850b302ebb777
        await heroManager.mintHero("0x11C0e71746eF470E558d6616a3436FFEaaf79cB8", 20010108) // Block:6370296 EthAddr:0x809255cCE5Baf7a5038f3F3066873b730b19bF93
        await heroManager.mintHero("0xBcE5FDCe19Ef37aeEe6974467BbEF34f5536C4A7", 40070017) // Block:6370306 EthAddr:0x6ea9637c53924C4E2dC7B039ECa8d646F20cBdee
        await heroManager.mintHero("0x93130C156da903bDa7F05F74D356f4ffaCd2A6d6", 50040013) // Block:6370308 EthAddr:0xcAb642AFAD5dF9198F6AC31198c54B6bd0da8be6
        await heroManager.mintHero("0x11C0e71746eF470E558d6616a3436FFEaaf79cB8", 40080013) // Block:6370309 EthAddr:0x809255cCE5Baf7a5038f3F3066873b730b19bF93
        await heroManager.mintHero("0x9F28fcE9e16D1BDc880386A211d7dbc5960E85E0", 40090041) // Block:6370326 EthAddr:0xf7cC1cbE562Ff9072aa221951BfCA9A1bfbC2b2a
        await heroManager.mintHero("0x11C0e71746eF470E558d6616a3436FFEaaf79cB8", 40060022) // Block:6370326 EthAddr:0x809255cCE5Baf7a5038f3F3066873b730b19bF93
        await heroManager.mintHero("0x0b0986c81450CC20177EB60B5af4Ccb89db56545", 20010109) // Block:6370326 EthAddr:0x6C5F503E290BBa6A659972da78715694797fbac4
        await heroManager.mintHero("0xD71b57E1338cd7f8e47139b84e3FF195DD09edcE", 40020058) // Block:6370328 EthAddr:0x759dE6B9806A5F695B8FE92f58a6771fB5DB52C6
        await heroManager.mintHero("0x9F9982678ea67F29231AEfB887f2849bed4D00F4", 40010029) // Block:6370330 EthAddr:0x6a26CA0a772f1F32304870CB1ef302BC91cb6aea
        await heroManager.mintHero("0xf305D18224B18B5cD9A047Dc77A5b5b0bd87a9e3", 20010110) // Block:6370332 EthAddr:0x8Cdea15f8536e65A443eFd518BcDD7C22AC267EF
        await heroManager.mintHero("0x317f80C60D926ef26eFFbfa93b2C199270A1c1A0", 30010019) // Block:6370335 EthAddr:0xfcFEb1c563ce8a545F25f14a44Df37360744F045
        await heroManager.mintHero("0xD71b57E1338cd7f8e47139b84e3FF195DD09edcE", 40020059) // Block:6370337 EthAddr:0x759dE6B9806A5F695B8FE92f58a6771fB5DB52C6
        await heroManager.mintHero("0xf305D18224B18B5cD9A047Dc77A5b5b0bd87a9e3", 40080014) // Block:6370337 EthAddr:0x8Cdea15f8536e65A443eFd518BcDD7C22AC267EF
        await heroManager.mintHero("0xD0755837b6A09f3c93E24B32D78c3821Ad6A876C", 20010111) // Block:6370337 EthAddr:0xe9bb2FFde2abA96525a4cd384BaAB8d86d459134
        await heroManager.mintHero("0x11C0e71746eF470E558d6616a3436FFEaaf79cB8", 40040026) // Block:6370338 EthAddr:0x809255cCE5Baf7a5038f3F3066873b730b19bF93
        await heroManager.mintHero("0xF942f38C0348a9089A543Dd259458F0480efcf27", 20010112) // Block:6370338 EthAddr:0xFD1Be2AF81caA6E51E5A1FF91a9140e9C5B273dC
        await heroManager.mintHero("0x11C0e71746eF470E558d6616a3436FFEaaf79cB8", 40050014) // Block:6370341 EthAddr:0x809255cCE5Baf7a5038f3F3066873b730b19bF93
        await heroManager.mintHero("0x7F27228420180B5ddA18b03B660eEa880c02d7eD", 20010113) // Block:6370344 EthAddr:0x2Af23a40cbAb2bF4b50dAEC11e5F551f6D737FB0
        await heroManager.mintHero("0xd6516367b22Dc0f42B79847DEDE041420EB98307", 40090042) // Block:6370344 EthAddr:0x06d13d1562eb9da28C59e86e9BfC2a87d13AfB01
        await heroManager.mintHero("0x40AcD96D12547C3E8c1232187F46153fB507257A", 40070018) // Block:6370346 EthAddr:0xe313839f9A1F18B94BcD308914fB070FCAA6c416
        await heroManager.mintHero("0x43465f69F024851f5980c62A440DB6F26Df1B493", 40060023) // Block:6370346 EthAddr:0x5F9338166cd3F311ACcC67cA29cd102042e10788
        await heroManager.mintHero("0x43465f69F024851f5980c62A440DB6F26Df1B493", 40010030) // Block:6370368 EthAddr:0x5F9338166cd3F311ACcC67cA29cd102042e10788
        await heroManager.mintHero("0x11C0e71746eF470E558d6616a3436FFEaaf79cB8", 40090043) // Block:6370374 EthAddr:0x809255cCE5Baf7a5038f3F3066873b730b19bF93
        await heroManager.mintHero("0x86b4b7e1fa27eb97ba8F02dAfa3eC957aDbf3603", 30010020) // Block:6370374 EthAddr:0xB130168eC63Ca7e30A8f8C7268aA56E4d6730Fb5
        await heroManager.mintHero("0x43465f69F024851f5980c62A440DB6F26Df1B493", 40030019) // Block:6370374 EthAddr:0x5F9338166cd3F311ACcC67cA29cd102042e10788
        await heroManager.mintHero("0xBcE5FDCe19Ef37aeEe6974467BbEF34f5536C4A7", 40050015) // Block:6370382 EthAddr:0x6ea9637c53924C4E2dC7B039ECa8d646F20cBdee
        await heroManager.mintHero("0x43465f69F024851f5980c62A440DB6F26Df1B493", 40040027) // Block:6370386 EthAddr:0x5F9338166cd3F311ACcC67cA29cd102042e10788
        await heroManager.mintHero("0xB8AB5671C8698011f24634a3893D851F3a2dfA6e", 20010114) // Block:6370386 EthAddr:0xeFF855fca9BC316A2b404e86b328f63a732c0914
        await heroManager.mintHero("0xF942f38C0348a9089A543Dd259458F0480efcf27", 40070019) // Block:6370388 EthAddr:0xFD1Be2AF81caA6E51E5A1FF91a9140e9C5B273dC
        await heroManager.mintHero("0x43465f69F024851f5980c62A440DB6F26Df1B493", 40050016) // Block:6370396 EthAddr:0x5F9338166cd3F311ACcC67cA29cd102042e10788
        await heroManager.mintHero("0x3c1942fAa3D321C3c73f65069fB1131f71e18427", 20010115) // Block:6370400 EthAddr:0x88535370bC0c7c4931B9eb45Fe385261956811Ea
        await heroManager.mintHero("0x43465f69F024851f5980c62A440DB6F26Df1B493", 40070020) // Block:6370409 EthAddr:0x5F9338166cd3F311ACcC67cA29cd102042e10788
        await heroManager.mintHero("0x40AcD96D12547C3E8c1232187F46153fB507257A", 40090044) // Block:6370409 EthAddr:0xe313839f9A1F18B94BcD308914fB070FCAA6c416
        await heroManager.mintHero("0xd6516367b22Dc0f42B79847DEDE041420EB98307", 40020060) // Block:6370409 EthAddr:0x06d13d1562eb9da28C59e86e9BfC2a87d13AfB01
        await heroManager.mintHero("0xd6516367b22Dc0f42B79847DEDE041420EB98307", 20010116) // Block:6370411 EthAddr:0x06d13d1562eb9da28C59e86e9BfC2a87d13AfB01
        await heroManager.mintHero("0xF942f38C0348a9089A543Dd259458F0480efcf27", 40040028) // Block:6370413 EthAddr:0xFD1Be2AF81caA6E51E5A1FF91a9140e9C5B273dC
        await heroManager.mintHero("0x43465f69F024851f5980c62A440DB6F26Df1B493", 40080015) // Block:6370425 EthAddr:0x5F9338166cd3F311ACcC67cA29cd102042e10788
        await heroManager.mintHero("0xF41d72c7ADf101EDB201F510aE965d44faC39def", 40020061) // Block:6370434 EthAddr:0xFEAF597b1d8333E6b3D48DcF54CcE89170dF5A4C
        await heroManager.mintHero("0x9F9982678ea67F29231AEfB887f2849bed4D00F4", 20010117) // Block:6370435 EthAddr:0x6a26CA0a772f1F32304870CB1ef302BC91cb6aea
        await heroManager.mintHero("0x2b0100Db56685b7CE4CcC28696116d338539c62B", 40030020) // Block:6370443 EthAddr:0x69Cb82b4d047fCAFeD695cB72524E9E94b440394
        await heroManager.mintHero("0x18985E727B570358E96C6b653d4F334BfA8b7f34", 30010021) // Block:6370444 EthAddr:0x8C5fC43ad00Cc53e11F61bEce329DDc5E3ea0929
        await heroManager.mintHero("0x2b0100Db56685b7CE4CcC28696116d338539c62B", 40040029) // Block:6370453 EthAddr:0x69Cb82b4d047fCAFeD695cB72524E9E94b440394
        await heroManager.mintHero("0x83b2B6d57e9af0aFd73bEdeb3d48c2F14c51B483", 40030021) // Block:6370453 EthAddr:0x6A84D18cB29300fe6692d84ff89626491Ec59321
        await heroManager.mintHero("0x2b0100Db56685b7CE4CcC28696116d338539c62B", 40050017) // Block:6370455 EthAddr:0x69Cb82b4d047fCAFeD695cB72524E9E94b440394
        await heroManager.mintHero("0x8d6E739c140B63C383A5eE7d21156f050CA5fD46", 40010031) // Block:6370456 EthAddr:0x088e25e6027816c753d01D7F243C367710F20497
        await heroManager.mintHero("0x2b0100Db56685b7CE4CcC28696116d338539c62B", 20010118) // Block:6370458 EthAddr:0x69Cb82b4d047fCAFeD695cB72524E9E94b440394
        await heroManager.mintHero("0xEE8CFaf830bf161E58d59b7c6d6fB50721476f2b", 30010022) // Block:6370464 EthAddr:0xE99840f899d28566487F10E4046685f046958517
        await heroManager.mintHero("0xAE750B7a9A261481E0Ccff78e51f0Ab3B5321C1D", 40080016) // Block:6370473 EthAddr:0x16C0db08cAa75E99a0597FEd22414E6903674470
        await heroManager.mintHero("0x3336B3fc0EC19934238167e558E55895204096f4", 30010023) // Block:6370491 EthAddr:0xBcd2c48E447A45244CcEFdb232b2F7B5F86f43bD
        await heroManager.mintHero("0xCa949683cE277fFD6fB77df58e31753a2C290894", 40020062) // Block:6370496 EthAddr:0xc139Ef14FF6138d7b4793a884656b1bc41f23C15
        await heroManager.mintHero("0x9F9982678ea67F29231AEfB887f2849bed4D00F4", 40030022) // Block:6370498 EthAddr:0x6a26CA0a772f1F32304870CB1ef302BC91cb6aea
        await heroManager.mintHero("0x1D8DA6Dc71D4D557c1AD013D5c82fC33840595D1", 30010024) // Block:6370525 EthAddr:0x91f04ffE5AA427e977086746e7b9E1B997F2aFA8
        await heroManager.mintHero("0x453Fb5dd6a13BD507F3dcEB9FC331ACB395B9E4B", 20010119) // Block:6370525 EthAddr:0x88Bc8E70210BdFb484fe7820CD4796562C633eb7
        await heroManager.mintHero("0x9149f62536B0a02e362b2937f5E5b647A58AEFaF", 20010120) // Block:6370526 EthAddr:0xB55dD276196B78A5b85183dB21D63A2C3F8685a4
        await heroManager.mintHero("0xCa949683cE277fFD6fB77df58e31753a2C290894", 40010032) // Block:6370530 EthAddr:0xc139Ef14FF6138d7b4793a884656b1bc41f23C15
        await heroManager.mintHero("0x47eb8188bA4f2399dE6d52E2890c376a8aB119E1", 20010121) // Block:6370532 EthAddr:0xE56268f1332f0c5861509FB3504256D82e192A64
        await heroManager.mintHero("0x1D8DA6Dc71D4D557c1AD013D5c82fC33840595D1", 30010025) // Block:6370540 EthAddr:0x91f04ffE5AA427e977086746e7b9E1B997F2aFA8
        await heroManager.mintHero("0x7F9308099dBb5Ff8ef14bCFe5F5c7c15d562aC25", 20010122) // Block:6370548 EthAddr:0xf47F6A131CBddA75726C5f6D6199128ADDE11F92
        await heroManager.mintHero("0x9F9982678ea67F29231AEfB887f2849bed4D00F4", 40050018) // Block:6370549 EthAddr:0x6a26CA0a772f1F32304870CB1ef302BC91cb6aea
        await heroManager.mintHero("0x9F9982678ea67F29231AEfB887f2849bed4D00F4", 40060024) // Block:6370554 EthAddr:0x6a26CA0a772f1F32304870CB1ef302BC91cb6aea
        await heroManager.mintHero("0xdb0fF85abCE432bb8990eCdD2D945866C36154ba", 20010123) // Block:6370556 EthAddr:0xCC0FdBD73b0Ae916276D20540Dc6f41C312B8428
        await heroManager.mintHero("0x9F9982678ea67F29231AEfB887f2849bed4D00F4", 40090045) // Block:6370558 EthAddr:0x6a26CA0a772f1F32304870CB1ef302BC91cb6aea
        await heroManager.mintHero("0x51383717F443d64bFf31e188f68788e7629AA918", 40030023) // Block:6370573 EthAddr:0xD0d0F23D8D2c66B5C445d37BAa377661080436bF
        await heroManager.mintHero("0xd1A73ed449A1189De451fC82787a3da1c19C1676", 20010124) // Block:6370575 EthAddr:0x431434D43CEA4131650520Cb105b90Fe204fA39D
        await heroManager.mintHero("0x1D8DA6Dc71D4D557c1AD013D5c82fC33840595D1", 30010026) // Block:6370576 EthAddr:0x91f04ffE5AA427e977086746e7b9E1B997F2aFA8
        await heroManager.mintHero("0x116933a0bE2793CCB37eB6cb3D593016b4868314", 20010125) // Block:6370594 EthAddr:0xB4a70a23FbeFEE596E2F2E054ac4a84E7C38f849
        await heroManager.mintHero("0x207a85a34378ef7Fd79b4D1e2Bd0Fc1de006F577", 30010027) // Block:6370597 EthAddr:0xBdEb1139fd8ca792e7AFae6DF77d750E0f1F86c7
        await heroManager.mintHero("0x2d9EFae6b93DdBf999337e166cf21858127B71aC", 20010126) // Block:6370614 EthAddr:0xD9D3d2034C76413A12a990AAdb59035cc594c1fC
        await heroManager.mintHero("0x72960DFAa5f1E6323d87f911807CCe1b19Df9b3D", 20010127) // Block:6370615 EthAddr:0x2eCC61be93FE78b6DdfD1B8a174B4dBFBD2221F2
        await heroManager.mintHero("0x1D8DA6Dc71D4D557c1AD013D5c82fC33840595D1", 20010128) // Block:6370628 EthAddr:0x91f04ffE5AA427e977086746e7b9E1B997F2aFA8
        await heroManager.mintHero("0xA99A4D273A8Fc8ED8608328b7bd3A01a2dCB037f", 20010129) // Block:6370633 EthAddr:0x3D44F67b32454EBC1F579873EdF480FAA80Cd953
        await heroManager.mintHero("0xC800a74c461151551d62E2B5f27AC69bA1007c84", 20010130) // Block:6370634 EthAddr:0xa806a4C9660E29c29465743E554E68b08a07D113
        await heroManager.mintHero("0x453Fb5dd6a13BD507F3dcEB9FC331ACB395B9E4B", 40010033) // Block:6370636 EthAddr:0x88Bc8E70210BdFb484fe7820CD4796562C633eb7
        await heroManager.mintHero("0x8F6DD85Bfa87F0550B7790bc219013DDA97BCAfe", 20010131) // Block:6370637 EthAddr:0x490cD2fAe901d8b3eba3903fc9b67272414b182f
        await heroManager.mintHero("0x4f110ac7b351bDDf5E7ce5D4fd75b8F41441C186", 40020063) // Block:6370639 EthAddr:0xCD6fB0F2bf2476E43219E5616709Adc58360A8Da
        await heroManager.mintHero("0xCa949683cE277fFD6fB77df58e31753a2C290894", 40070021) // Block:6370639 EthAddr:0xc139Ef14FF6138d7b4793a884656b1bc41f23C15
        await heroManager.mintHero("0x1D8DA6Dc71D4D557c1AD013D5c82fC33840595D1", 30010028) // Block:6370639 EthAddr:0x91f04ffE5AA427e977086746e7b9E1B997F2aFA8
        await heroManager.mintHero("0xF41d72c7ADf101EDB201F510aE965d44faC39def", 20010132) // Block:6370640 EthAddr:0xFEAF597b1d8333E6b3D48DcF54CcE89170dF5A4C
        await heroManager.mintHero("0xf738FE461e35b18cfD56Fd255c982aD57eA6657A", 20010133) // Block:6370643 EthAddr:0xfe7452Ab30e8c16ff6E7DA87c06551c3c7D198de
        await heroManager.mintHero("0x3b1bBAe2215b679d3bac93d55359330975Faa189", 40040030) // Block:6370646 EthAddr:0x39a4B72CA79469A210836cBEA6C8630E8a76A9D4
        await heroManager.mintHero("0x1D8DA6Dc71D4D557c1AD013D5c82fC33840595D1", 40070022) // Block:6370673 EthAddr:0x91f04ffE5AA427e977086746e7b9E1B997F2aFA8
        await heroManager.mintHero("0x116933a0bE2793CCB37eB6cb3D593016b4868314", 40090046) // Block:6370680 EthAddr:0xB4a70a23FbeFEE596E2F2E054ac4a84E7C38f849
        await heroManager.mintHero("0x4f110ac7b351bDDf5E7ce5D4fd75b8F41441C186", 50040014) // Block:6370682 EthAddr:0xCD6fB0F2bf2476E43219E5616709Adc58360A8Da
        await heroManager.mintHero("0x7686B45CaD59de362056dEb54F86Cc9495885d09", 20010134) // Block:6370696 EthAddr:0x9F5515ff3F4aCf9fE321052d5fb4c6918Ef65712
        await heroManager.mintHero("0x11C0e71746eF470E558d6616a3436FFEaaf79cB8", 40020064) // Block:6370697 EthAddr:0x809255cCE5Baf7a5038f3F3066873b730b19bF93
        await heroManager.mintHero("0x10A668fc2B23D56e42553F1E92E4C7491229d957", 20010135) // Block:6370700 EthAddr:0x0F231faae73c7C668621B1327378bEB1c9ac3eA6
        await heroManager.mintHero("0xF2b8Caa2bCd5fC88B9064C494e81220eb8550186", 20010136) // Block:6370718 EthAddr:0xe914403Df7a49f1d2C31A2aC5D7dcdAf7C1eA8bd
        await heroManager.mintHero("0x456BF91A9EF7d44F9d9b07fa72281D43A59525f3", 40010034) // Block:6370720 EthAddr:0x4D77140740350FC149d85a0D231887a79Ef7170D
        await heroManager.mintHero("0x116933a0bE2793CCB37eB6cb3D593016b4868314", 40060025) // Block:6370728 EthAddr:0xB4a70a23FbeFEE596E2F2E054ac4a84E7C38f849
        await heroManager.mintHero("0xcC80279112f94E66AE458b6d53440803F049e444", 40030024) // Block:6370773 EthAddr:0x264cbD2979105B4fc597206F5F90cA55CD63705D
        await heroManager.mintHero("0x2B16683a6968557BBd13424A747e62158ab861f7", 40050019) // Block:6370782 EthAddr:0xe3953fAC36A885a44549C7069fb0179a7fc8E03A
        await heroManager.mintHero("0x632DF3396B002600AD1ba552f9DBD4CE390D725b", 20010137) // Block:6370785 EthAddr:0xC42c58b16662D1f0F1346Aca864d8c98AFaD9246
        await heroManager.mintHero("0x4f110ac7b351bDDf5E7ce5D4fd75b8F41441C186", 40080017) // Block:6370788 EthAddr:0xCD6fB0F2bf2476E43219E5616709Adc58360A8Da
        await heroManager.mintHero("0x2B16683a6968557BBd13424A747e62158ab861f7", 20010138) // Block:6370788 EthAddr:0xe3953fAC36A885a44549C7069fb0179a7fc8E03A
        await heroManager.mintHero("0xA99A4D273A8Fc8ED8608328b7bd3A01a2dCB037f", 30010029) // Block:6370789 EthAddr:0x3D44F67b32454EBC1F579873EdF480FAA80Cd953
        await heroManager.mintHero("0x023E5345e67029CD16c5179658042e7C42e8B9A5", 20010139) // Block:6370806 EthAddr:0x71a48855f7574F549bbBc05573eF9fAe333BA279
        await heroManager.mintHero("0x34F9C868ecb238b3F4e6D63Bf35CECf9227819a5", 20010140) // Block:6370810 EthAddr:0x772193b106F6d285DFfBa83B3962b98Ff13cb461
        await heroManager.mintHero("0x1c1daf0cA2C5707C5C69529a2E6E69Dc465221f0", 20010141) // Block:6370812 EthAddr:0xb91b27ff5a878864B57C27df892b3E7CA098393f
        await heroManager.mintHero("0xeA72843333DAD8948Dd6896b47ca49683B94dBD5", 20010142) // Block:6370822 EthAddr:0xb097BA1bBe6fE37545d1ED2e36ADA8c858Fe7756
    });
}