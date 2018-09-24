let HeroManager = artifacts.require('HeroManager');

module.exports = function(deployer) {
    deployer.then(async function() {
        let heroManager = await HeroManager.deployed();

        await heroManager.forceMintHero("0x0ee64Fcf41EFD39ea5c4442067C96Ef8C119b10A", 20010431) // Block:6388836 EthAddr:0x925437EAd20D406AB091E8308324B4BD37e4f477
        await heroManager.forceMintHero("0xaa86fB2F1d670c55Af628D27Fd57d3a0Ee4736bd", 30010103) // Block:6388865 EthAddr:0x12EF2cD4231D5CF655a6CDD4Ac1524FFaa439c17
        await heroManager.forceMintHero("0xbA7BbC6FF02415229695e981F66C9E9E9420AEA7", 20010432) // Block:6388879 EthAddr:0x161B1bafEfC30202C67b1E938f23AeA0Ccbf021d
        await heroManager.forceMintHero("0x6Dad909f983413b4aaE1Bcc0c455EFa47EEb18AD", 20010433) // Block:6388900 EthAddr:0x396e05690B22F3f555fBc6A691B45F5c479E84E7
        await heroManager.forceMintHero("0xf22f27bf3BDBe2C365ac59A70f4308D9f04251c3", 20010434) // Block:6388929 EthAddr:0x302978fEf749198Da1336e57Ec133D994482BAf1
        await heroManager.forceMintHero("0xdeA12D3dC59b4337d2999EcEa8eFe95726024714", 20010435) // Block:6388929 EthAddr:0xc4dc11788F37cb339684735E1a99ef769Ccb386e
        await heroManager.forceMintHero("0xd87Cc3B0134d86E534122dA3D7434130A480eCA3", 40070073) // Block:6388998 EthAddr:0xe487c7F0A9f1D11B9Df1c327a4E44b222F40fceF
        await heroManager.forceMintHero("0xE08B6E3ed108593c47a6835f41142f5C707ed303", 20010436) // Block:6389021 EthAddr:0x2eA884f32b033401390B350EbB51b54A3Ee34f9A
        await heroManager.forceMintHero("0x6469B62C425Ad41e48E83E6Af8a71bEF99ca686d", 20010437) // Block:6389027 EthAddr:0x32D364E663AE23126ceB2DD0522C9ab170c0A24D
        await heroManager.forceMintHero("0x28b440d2824e9f468FAEc53AA69ec9d077872d36", 20010438) // Block:6389102 EthAddr:0x878fBc4d7c81f9420aC2270E7A548b48e530aDa2
        await heroManager.forceMintHero("0xdAe70702E8E5937a452c30D7F23F412582036110", 20010439) // Block:6389235 EthAddr:0xaad0bb0dFfaEF8C2b0C07Dc9Ba9603083E8bE1f5
        await heroManager.forceMintHero("0x17ad79ADf510265c2ee477e64AD4062A2C8950A7", 20010440) // Block:6389237 EthAddr:0x8E5DF5531cf0593A89D4A82e66B4F445534f18Bf
        await heroManager.forceMintHero("0x36ba8E820b2701Fd0bDA118D7bAD4149cA4d9eBA", 20010439) // Block:6389254 EthAddr:0xB1A25D6E37ad12579801eBb6787636fd63ba87cc
        await heroManager.forceMintHero("0x17ca55E6E03B983E6788108cE0b8AE088D8e5265", 20010441) // Block:6389273 EthAddr:0x3C25C82B510790cC88c15D2d784b7DcbCf75b18D
        await heroManager.forceMintHero("0x5BfF81f307FeAd70e67Fc3c4FAE764Bf7c3bD93C", 20010442) // Block:6389303 EthAddr:0x6069d8eB5469564cd5d407B3bfDb290DB9d6135d
        await heroManager.forceMintHero("0xbA0BA5A9732B3f8da1De69cE04693c6ec6Ea028D", 40030072) // Block:6389403 EthAddr:0xcc569f495cEc90d5C4b5cbEF1d51217e190566aD
        await heroManager.forceMintHero("0x4031e5567F9AbaE3Dcf20Bc6432F01a283a20FA2", 20010443) // Block:6389434 EthAddr:0xE85110cD2383eed1CB9c776ddb50a6EC39B6E86f
        await heroManager.forceMintHero("0x4031e5567F9AbaE3Dcf20Bc6432F01a283a20FA2", 40050066) // Block:6389479 EthAddr:0xE85110cD2383eed1CB9c776ddb50a6EC39B6E86f
        await heroManager.forceMintHero("0x48a20c67d9fd894E1B741531804d9375d1F1B633", 20010444) // Block:6389535 EthAddr:0xFA595c3f3EA63BbFb408eeF222CA947F791da0Bc
        await heroManager.forceMintHero("0x322926f994ab3d5C405438bB365175370731640b", 20010445) // Block:6389535 EthAddr:0x5f5D9b49CF41B9FC35f1D18Bd58ECa43B684E416
        await heroManager.forceMintHero("0x48a20c67d9fd894E1B741531804d9375d1F1B633", 40050067) // Block:6389550 EthAddr:0xFA595c3f3EA63BbFb408eeF222CA947F791da0Bc
        await heroManager.forceMintHero("0x48a20c67d9fd894E1B741531804d9375d1F1B633", 40060074) // Block:6389560 EthAddr:0xFA595c3f3EA63BbFb408eeF222CA947F791da0Bc
        await heroManager.forceMintHero("0x38f9a9A7e897f82eF5083EcEE12Ad889Ac62A1B8", 20010446) // Block:6389588 EthAddr:0xFa254f3ED3c1B9Ed05E308B505eFFF0ceb0f7f80
        await heroManager.forceMintHero("0x71d81df48E4A8A5622943e49A9d00b220a5E255f", 20010447) // Block:6389603 EthAddr:0x51bd4c735927f958a90dB80398826Ff47a9832f1
        await heroManager.forceMintHero("0xC5E100732dfECA56626652d20B429363d711F78e", 20010448) // Block:6389608 EthAddr:0x29D14Aff654C9257c3145F16262a315BF79baEb3
        await heroManager.forceMintHero("0xdb43C2a0423a9dfD54d9102532F3493896C73455", 20010449) // Block:6389656 EthAddr:0xadDcA46a382222809f59035b3Ab3224DF2Dd31A8
        await heroManager.forceMintHero("0x8A811Cf4d4C22Fc3D627161e8A4C895e255f2044", 20010450) // Block:6389664 EthAddr:0x73a6DDb6456F25FaaFc16242DF5E9C6AFe959B18
        await heroManager.forceMintHero("0x50B6228f062D5c499f8F4c9013C63dD47C84cbd9", 20010451) // Block:6389668 EthAddr:0x12620EDF0f788171b231645C9d711c492619491a
        await heroManager.forceMintHero("0xC535DC1C3C67A7B2dCA215575bC8Ae70fED07e8E", 20010452) // Block:6389684 EthAddr:0x3C293a2b31907acC2a827f37eD193E34A115Ea3F
        await heroManager.forceMintHero("0xEeA5EE8a48876F68195b87fA41035908D1317a0E", 20010453) // Block:6389691 EthAddr:0xE9Ff85497916a3931A62921ef006269c47C9d6B9
        await heroManager.forceMintHero("0xb0FFDC654A6dDe541bEFC46d7014602Feca4F9A9", 20010454) // Block:6389694 EthAddr:0xcf7B954cfFAFb738dABe7d928a39Df28f522e08c
        await heroManager.forceMintHero("0xb486F38a1D26122321b8C69dF9e7A8434460e063", 20010455) // Block:6389694 EthAddr:0x26404746CD2228018f86c98f580E5030b06Ff3c8
        await heroManager.forceMintHero("0xF5A03C687f6AC0A3E57D857D1fD9E93fef40D099", 20010456) // Block:6389703 EthAddr:0xB69173Ba8b2Fb6d25cca68Db044e2f823d276D77
        await heroManager.forceMintHero("0x8663CEd45bce88135d476a89A31007DD835992ee", 20010457) // Block:6389754 EthAddr:0xbdfb33cB576a15712a8779521b245124E67a0FAA
        await heroManager.forceMintHero("0xF1B29410560287e07B751c1f25d02602887c9255", 20010458) // Block:6389754 EthAddr:0x6114CAFbD9fCE22d141ac6fe7f45238fA4f6F88A
        await heroManager.forceMintHero("0x15082a3da4781eE516756D166A934aC3Ab5d7A8c", 20010459) // Block:6389754 EthAddr:0x46Ec69dcAE79ab1500015FEf318b4Da5c3b8F79a
        await heroManager.forceMintHero("0x8d5101810c39A906acdD61C2e6cdC1Eb88259F42", 20010460) // Block:6389754 EthAddr:0xf7A6486Fd6FFcB11a8053dEeFaAA217D29dAf800
        await heroManager.forceMintHero("0x9CcaCA049bBC1972E1A2a4cFa81E21Bf629DC865", 20010461) // Block:6389754 EthAddr:0x1dA5c91cc2E7Cdd8068bc118A00aB94a35EA9A5D
        await heroManager.forceMintHero("0x1D80C1b0511CcB47607112888D4765B1CdD744B3", 20010462) // Block:6389775 EthAddr:0x91f441261654558f5b23D2632Ac434398CEAe61E
        await heroManager.forceMintHero("0x4E79244577fdA63B8631B947989F2328Ed4B8f58", 20010463) // Block:6389775 EthAddr:0x78CB36b50911c584d6E92755d1E92fE01c5A788E
        await heroManager.forceMintHero("0xC4C9e60C4499AA1f493849bfEBfaE749D91daf37", 20010464) // Block:6389775 EthAddr:0x158de6596E2e6cB9944f8d69Fd98b36253dD261f
        await heroManager.forceMintHero("0x69226a9f16f4f3d84d44E727Fc156a41584d7137", 20010465) // Block:6389776 EthAddr:0x447f30a3F4F77ED88dC5240e18E87bd91206aF60
        await heroManager.forceMintHero("0x848EC068E2834Ae5c090fA600394E1E95093ad0E", 20010466) // Block:6389776 EthAddr:0x2C923a56a71B6C12104A400F0862077e5A81C845
        await heroManager.forceMintHero("0x4FF8562f25716301fB94F03b1aD74c1Ef312dE87", 20010467) // Block:6389805 EthAddr:0xEe3f680bf684303e8bBED99D4eE4d16179157368
        await heroManager.forceMintHero("0x28495E86e04538cc4edc15aFb98f4422462A62B9", 20010468) // Block:6389805 EthAddr:0xaB3009dbb3C9A5694Ed818Cf0d159E069Dd55107
        await heroManager.forceMintHero("0x16aEc71aD78B52C79Ba6f17Da5A491B3731b6A59", 20010469) // Block:6389811 EthAddr:0x40e3CE1EB12bbdD77ECa97a46E3f95F37e5276DB
        await heroManager.forceMintHero("0xb9291DBD8453Be2b977289fbd1C4991918689da5", 20010470) // Block:6389818 EthAddr:0xc05f2e51D719813fDD0F60443087c64624FfDF07
        await heroManager.forceMintHero("0x9B0E836C7daA368BD8D548399f3f624695E9927a", 20010471) // Block:6389830 EthAddr:0x75f9e276ff31494E8b0f224990D4193Ac4a7B7F5
        await heroManager.forceMintHero("0xF756A1C03D79Ec9317538F6Fe51B41e1de85D2e5", 20010472) // Block:6389841 EthAddr:0x8ca0Da8082e238213218DF0D1BcE2d96f32AFBC4
        await heroManager.forceMintHero("0xFB257aD5D99D8C709EcC2670e64D4a47243a8D24", 20010473) // Block:6389842 EthAddr:0x07203eCb38cDaAE97C137984cdFB64C478745835
        await heroManager.forceMintHero("0xAaD0A348221A694d7b316b3F1b8AeE36aB6c62e3", 20010474) // Block:6389850 EthAddr:0x6E0566dD6793F3e0c7a58aE03976D300a6E127fb
        await heroManager.forceMintHero("0x49f1800EBC98fb04Dc2928AB8c68fD0A6B461b32", 20010475) // Block:6389861 EthAddr:0x11670672321258C38C028809C1EDdC4E12133653
        await heroManager.forceMintHero("0x6C1Ab5B4c684a1a722a9a36D959945BDBe5Ea19c", 20010476) // Block:6389901 EthAddr:0x28f087664a49a27C0eb78b1C7FbD7231794D9a7e
        await heroManager.forceMintHero("0x5A061a87f10cFf60E5B2854E68583B7DBb5747f3", 20010477) // Block:6389911 EthAddr:0xa2bb38270aF3116a6Ed41EC36a11EE7313918046
        await heroManager.forceMintHero("0x5f607C38f8b97d2071B40804354B55FeC57Fc4a4", 20010478) // Block:6389913 EthAddr:0x789bb47b1feAE92594c7C871968Ff69aa5622e2c
        await heroManager.forceMintHero("0x84751B9e8D5d89BAE03CcC16436AbE9a6A98CA79", 20010479) // Block:6389915 EthAddr:0xcd8dBF2c846Aa2CA11bbd189A74e0BAc9DCbE11E
        await heroManager.forceMintHero("0x73C4c962eA32166EebBF8B43755C57A828F7CB8b", 20010480) // Block:6389947 EthAddr:0x78004c4d2cf7Be282881103F8354Bc616bC1775D
        await heroManager.forceMintHero("0xd2432Bfa43515A49eC39aC722Ae1515d583bB30b", 20010481) // Block:6389954 EthAddr:0xAB924A69D1d853ea6Cac57e645D6838ecEc90f3f
        await heroManager.forceMintHero("0x16Fe129Efb7012efbFb68Cb6ba06962eA32E4AF0", 20010482) // Block:6389961 EthAddr:0x8A2616f0Bf2ca470E4D1BD3dEa3F1bb65DF88DFA
        await heroManager.forceMintHero("0x0fA26341C10013EE928A072ABf75E2C2dbBb2c67", 20010483) // Block:6389969 EthAddr:0x58116289b5b5E5B738837f59487247920fc11019
        await heroManager.forceMintHero("0xD6485D25bBb89FdC7F312c2a97C2BC4CDb4aE6eC", 20010484) // Block:6389978 EthAddr:0x8fd01A651d38d0cce18EA4F74097De734be85ddd
        await heroManager.forceMintHero("0x1Fa28323a614557ea33D748178befb33DBB5B5A4", 20010485) // Block:6389978 EthAddr:0x7F92cd429A1F2F556d90bbceF7cD185C40fE5790
        await heroManager.forceMintHero("0x50A5A0a5DB3f0F9cBA6E085f4330c2E044DD8B44", 20010486) // Block:6389980 EthAddr:0x98598b02f2b762259F90Bc3CEf0296013abB66bb
        await heroManager.forceMintHero("0xbcF2cF52d839eB8ABc208247619AcEFa3c2A6818", 20010487) // Block:6389981 EthAddr:0x798fC047B8628533d70544A24A9ea37f92C88B64
        await heroManager.forceMintHero("0x6065Cf75F20e75226191332162383df30e106A78", 20010488) // Block:6389983 EthAddr:0x1BFB27C96949E8eE3a3Fa8B1e7368F9d73E41DBE
        await heroManager.forceMintHero("0xaf10f7c1726D4daDeee7b471089cCAd9F696baaA", 30010104) // Block:6389991 EthAddr:0x5fD794a8364198cF74C6e71F7efc1754a2641F30
        await heroManager.forceMintHero("0x0AdA1614644F13c56EF6df8F23a00423EC06193f", 20010489) // Block:6390004 EthAddr:0x9Af971BCaeAA324A03742EcB63105AEB83E8FdEF
        await heroManager.forceMintHero("0x282f1E2d6e00700f7738E29e856fC419E1D1eAc5", 20010490) // Block:6390004 EthAddr:0xC733E98ad6d70670420e981309b4eA9F7ac54A5c
        await heroManager.forceMintHero("0xdD6E112319b7D964bC89891EC721B8B2e87D4705", 20010491) // Block:6390020 EthAddr:0x1eb10258250A68309A21DDAc6c8B1f33a1112BD0
        await heroManager.forceMintHero("0x1681E1701F849CfE78c65c538c2cb31aEe0D6683", 20010492) // Block:6390021 EthAddr:0x2730559b56bC55c1Ed37EBdf8213D86949ad0d39
        await heroManager.forceMintHero("0x7FC254ae11C3dfAF7d9492e066308F88b0d98B3F", 20010493) // Block:6390026 EthAddr:0x5caD6a70B11aD7A0aD83798FfA96c468C90ad8B7
        await heroManager.forceMintHero("0x04C7f5Bc2F53BB394113972520bE6af300a3555F", 20010494) // Block:6390034 EthAddr:0x164bFc99CAD440b798325a49D6A7DA5234948143
        await heroManager.forceMintHero("0xA13222b5aa9Bebb3119a6D23B7f407e6C0971116", 20010495) // Block:6390057 EthAddr:0xcF2C88F08D3a9fd8307f74B6a08ac36EF3DB3c1d
        await heroManager.forceMintHero("0xFFD2d6bB8dE41e60F423aef3E0128d093cB1A1b7", 20010496) // Block:6390057 EthAddr:0xff8Ea90C72fAfd71e7a1354d6da7a3a8937E3536
        await heroManager.forceMintHero("0x58b07A0316204F1517a4Ca3149f51Fd04060a177", 20010497) // Block:6390096 EthAddr:0x6046Bab804978C60a4400e811F0F86dCf7Ac758c
        await heroManager.forceMintHero("0x8Fad04DA2944c86652296443c0d4D13eb562730B", 20010498) // Block:6390096 EthAddr:0xe712f8335b250f6B2B53099F420C4fF4D32d7860
        await heroManager.forceMintHero("0xb888BdF0fF87081f739E78bEd614d70203713001", 20010499) // Block:6390096 EthAddr:0x9Deae96c38757f8385c0320Ae2c69676F965B288
        await heroManager.forceMintHero("0x73748d1C8529639d9CddA0188280AD385df536B7", 20010500) // Block:6390126 EthAddr:0x6230C1C6881A5Db38093c6059F5E714a01eA00e9
        await heroManager.forceMintHero("0xE6dA94de1529449c8273035a50b1540Eb203f782", 20010501) // Block:6390167 EthAddr:0x9c4910817144CCA6b4d9B198a505a91794328022
        await heroManager.forceMintHero("0x512Db8edB00921E77A8a7C9A61eb07F049496785", 20010502) // Block:6390186 EthAddr:0xDD4A96944d14819D9157d662Af6955cD7C99B33D
        await heroManager.forceMintHero("0x55Aa32AC1aaFD585d76e57864FA5ff615Fcc5F12", 20010503) // Block:6390204 EthAddr:0x28f291AAcB8d99D9e8855D002a19D40f028F3C60
        await heroManager.forceMintHero("0x77d36b0770e81cd74580D7e8d8BCf41b51Ad822b", 20010504) // Block:6390212 EthAddr:0x3cA2F7287c93694Ef96db9c02390d98dA6225301
        await heroManager.forceMintHero("0x7fa6F8b7F71136467A27a94f584a46da6c77d281", 20010505) // Block:6390219 EthAddr:0xC92bD462f41245eC79622516712976f4784a59Ef
        await heroManager.forceMintHero("0x7cCC08e41250019b0553824096D7960E0D522fdA", 20010506) // Block:6390230 EthAddr:0xC9a8A61331b2ED554bcD191cce2bEC60088cd90d
        await heroManager.forceMintHero("0xe3370F99b94Dd9e4BDb034033e30b70eAf4375D7", 20010507) // Block:6390238 EthAddr:0xFAFB6Be9CACb285D5ef0F519BF2F0784677B74A0
        await heroManager.forceMintHero("0x20DB5DA46460D68729BBFE49d0de37A9848C75F7", 20010508) // Block:6390246 EthAddr:0x3C96E78848fB4e8CBe9679bA74af361fEC39D251
        await heroManager.forceMintHero("0xE150646b349177de874336990BC5FF973b7D916E", 20010509) // Block:6390246 EthAddr:0x7E8952a02C11E0e5F4bd3832A74ea2Ff040FD27C
        await heroManager.forceMintHero("0x90707D41252644CF671b4c9dCB4357352A70fc7F", 20010510) // Block:6390253 EthAddr:0xfe0044944536D966dCC9877e43d7cF793e35D96C
        await heroManager.forceMintHero("0xCd8838Aef3Ed5eaCD1256180E6285f32f2fc87e1", 20010511) // Block:6390259 EthAddr:0x1Dad2fD457A55cf68e743EDeb4DF49cE2aE60f6B
        await heroManager.forceMintHero("0xaB228B007a57b08cF70aae54855949Fb1b029Ad0", 20010512) // Block:6390266 EthAddr:0x2F6204c1Fb3520e8ea847d10403A2F98f8fA36a3
        await heroManager.forceMintHero("0xa2c0341B42291FB7F1A3C2f717b96a8188ADB633", 20010513) // Block:6390280 EthAddr:0x620C311978d327B29183312825B348133a8afbDa
        await heroManager.forceMintHero("0x33FDe4E73755090469E1A1a8Fc0215CA76bEC249", 20010514) // Block:6390290 EthAddr:0xdd26a0cd7EED4Ec4dc7f94b35260FE7a99698cbD
        await heroManager.forceMintHero("0x1373aD1C0B80B41af314B5D1E4D583fa664557C7", 20010515) // Block:6390290 EthAddr:0xA80AF6EAaD9b9418fc2167c7f184044De2f540E9
        await heroManager.forceMintHero("0xf76eab4f2F0642B492aF104dC5f8769249A46038", 20010516) // Block:6390316 EthAddr:0xE4E54f6b5061B303d291b84208c2Bf955F0fd388
        await heroManager.forceMintHero("0x2948f89256F17A88CdA3147F8e25A83D91415D96", 20010517) // Block:6390319 EthAddr:0xFf153a8D1C24672Ffa243e183D3a1EDbb9d4E428
        await heroManager.forceMintHero("0x7bBd73ebCe2aF24616dF7B1802a4cac85b615FFD", 20010518) // Block:6390336 EthAddr:0x977fBf003613998b88d20b674Eb71f541af16cC8
        await heroManager.forceMintHero("0xbcF2cF52d839eB8ABc208247619AcEFa3c2A6818", 30010105) // Block:6390344 EthAddr:0x798fC047B8628533d70544A24A9ea37f92C88B64
        await heroManager.forceMintHero("0xc01A9a5E74487e913C426b467e05Ddd37DCb1e94", 20010519) // Block:6390371 EthAddr:0x6c803171b4BB2893aF761C1BCBd4c9dE00342954
        await heroManager.forceMintHero("0xf46Be6804ac6E3d61875f5B89633b78F13F244Be", 20010520) // Block:6390373 EthAddr:0xb1B539cdcA6A1A6bf188af6348DfD05559558711
        await heroManager.forceMintHero("0xd3a71A48CbC9ac63dd31e329b6352033AC06D7cF", 20010521) // Block:6390383 EthAddr:0xB5865AE05DbefA82637c9f654b00a60e729aA29E
    });
}