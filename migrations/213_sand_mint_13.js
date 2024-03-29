let HeroManager = artifacts.require('HeroManager');

module.exports = function(deployer) {
    deployer.then(async function() {
        let heroManager = await HeroManager.deployed();

        await heroManager.forceMintHero("0xd759195870c7769F092c7b02c33cDb77e24f3a27", 20010438) // Block:6389102 EthAddr:0x878fBc4d7c81f9420aC2270E7A548b48e530aDa2
        await heroManager.forceMintHero("0xBEBb9cfB036D331e2d5ab6c1342eb0806D0d255A", 20010439) // Block:6389235 EthAddr:0xaad0bb0dFfaEF8C2b0C07Dc9Ba9603083E8bE1f5
        await heroManager.forceMintHero("0xeEE1555b3014186C293D87E5c1360A5164BA65a0", 20010440) // Block:6389237 EthAddr:0x8E5DF5531cf0593A89D4A82e66B4F445534f18Bf
        await heroManager.forceMintHero("0x9A1DAdd41E43E664b0517E93e7b8fd636D4AA49d", 20010441) // Block:6389273 EthAddr:0x3C25C82B510790cC88c15D2d784b7DcbCf75b18D
        await heroManager.forceMintHero("0x9935a5A026e3b858ca9B8439349D952e3290f6C3", 20010442) // Block:6389303 EthAddr:0x6069d8eB5469564cd5d407B3bfDb290DB9d6135d
        await heroManager.forceMintHero("0xe88c4c06c33C24E36E80d86Ac39651Ad0153C8ba", 40030072) // Block:6389403 EthAddr:0xcc569f495cEc90d5C4b5cbEF1d51217e190566aD
        await heroManager.forceMintHero("0x49A923d1E5c6439e792e3Af981b93b767B16Ea89", 20010443) // Block:6389434 EthAddr:0xE85110cD2383eed1CB9c776ddb50a6EC39B6E86f
        await heroManager.forceMintHero("0x49A923d1E5c6439e792e3Af981b93b767B16Ea89", 40050066) // Block:6389479 EthAddr:0xE85110cD2383eed1CB9c776ddb50a6EC39B6E86f
        await heroManager.forceMintHero("0x73Ce4B0e51D78Aeb298b5Ed9A683D7BBB4B497F3", 20010444) // Block:6389535 EthAddr:0xFA595c3f3EA63BbFb408eeF222CA947F791da0Bc
        await heroManager.forceMintHero("0xdfc0862Ee07a0a7877aeaF924126e974724560Ce", 20010445) // Block:6389535 EthAddr:0x5f5D9b49CF41B9FC35f1D18Bd58ECa43B684E416
        await heroManager.forceMintHero("0x73Ce4B0e51D78Aeb298b5Ed9A683D7BBB4B497F3", 40050067) // Block:6389550 EthAddr:0xFA595c3f3EA63BbFb408eeF222CA947F791da0Bc
        await heroManager.forceMintHero("0x73Ce4B0e51D78Aeb298b5Ed9A683D7BBB4B497F3", 40060074) // Block:6389560 EthAddr:0xFA595c3f3EA63BbFb408eeF222CA947F791da0Bc
        await heroManager.forceMintHero("0xb8aC57f58A7e5dCE3E04E051e99a8530386738a1", 20010446) // Block:6389588 EthAddr:0xFa254f3ED3c1B9Ed05E308B505eFFF0ceb0f7f80
        await heroManager.forceMintHero("0x4015e23b23c3A148ECd93DB5B7d2fad2e90D0aa2", 20010447) // Block:6389603 EthAddr:0x51bd4c735927f958a90dB80398826Ff47a9832f1
        await heroManager.forceMintHero("0x536e3E44C4c032E22Ea8D4242eB21409C061f1aD", 20010448) // Block:6389608 EthAddr:0x29D14Aff654C9257c3145F16262a315BF79baEb3
        await heroManager.forceMintHero("0xe2dFac24B1085e39454ac2df815B5ec23a818115", 20010449) // Block:6389656 EthAddr:0xadDcA46a382222809f59035b3Ab3224DF2Dd31A8
        await heroManager.forceMintHero("0x5d1720F593eDF5C818BA2f2FA66CC9f46a68A746", 20010450) // Block:6389664 EthAddr:0x73a6DDb6456F25FaaFc16242DF5E9C6AFe959B18
        await heroManager.forceMintHero("0xe48BC62161A82f72469AdB10A4cD4c8D69385d44", 20010451) // Block:6389668 EthAddr:0x12620EDF0f788171b231645C9d711c492619491a
        await heroManager.forceMintHero("0xCe78343146f86AB8BEB43aBE2B1352a05C3379a1", 20010452) // Block:6389684 EthAddr:0x3C293a2b31907acC2a827f37eD193E34A115Ea3F
        await heroManager.forceMintHero("0x1920bA0fc5D42DAe2181b5AA7E4202CC2173C71B", 20010453) // Block:6389691 EthAddr:0xE9Ff85497916a3931A62921ef006269c47C9d6B9
        await heroManager.forceMintHero("0xfEA553dBDbd69Ca9449B9dad56Ee9B34aC56a272", 20010454) // Block:6389694 EthAddr:0xcf7B954cfFAFb738dABe7d928a39Df28f522e08c
        await heroManager.forceMintHero("0x3E47Bf0eb0D2B8101454bE52719bAd2481078bbD", 20010455) // Block:6389694 EthAddr:0x26404746CD2228018f86c98f580E5030b06Ff3c8
        await heroManager.forceMintHero("0xe7ddDd1774f6f5A949de1a03C27E1F242AB0C8A8", 20010456) // Block:6389703 EthAddr:0xB69173Ba8b2Fb6d25cca68Db044e2f823d276D77
        await heroManager.forceMintHero("0x1A80308C8baa642aFEe4368682A35Fb0fdcdEb9F", 20010457) // Block:6389754 EthAddr:0xbdfb33cB576a15712a8779521b245124E67a0FAA
        await heroManager.forceMintHero("0x04f3990FeAB4AC30236640A96EB2825A64Fd3015", 20010458) // Block:6389754 EthAddr:0x6114CAFbD9fCE22d141ac6fe7f45238fA4f6F88A
        await heroManager.forceMintHero("0x727E52593Ac8A8e9d43Fe6F042F46604DBb0A5ac", 20010459) // Block:6389754 EthAddr:0x46Ec69dcAE79ab1500015FEf318b4Da5c3b8F79a
        await heroManager.forceMintHero("0x4B4e30F2BCef44Ff7698883d22584ec58f5B34FB", 20010460) // Block:6389754 EthAddr:0xf7A6486Fd6FFcB11a8053dEeFaAA217D29dAf800
        await heroManager.forceMintHero("0xbbA9E6B7eb5a8A1b3358c9955fa01b43000b546c", 20010461) // Block:6389754 EthAddr:0x1dA5c91cc2E7Cdd8068bc118A00aB94a35EA9A5D
        await heroManager.forceMintHero("0x061Fd28768BdBc53d3f2035B4CeD778A7f619d68", 20010462) // Block:6389775 EthAddr:0x91f441261654558f5b23D2632Ac434398CEAe61E
        await heroManager.forceMintHero("0xaD8a0186B0dc3dE35ef08FB15E350b67c56d846D", 20010463) // Block:6389775 EthAddr:0x78CB36b50911c584d6E92755d1E92fE01c5A788E
        await heroManager.forceMintHero("0x85333E1722857Ab8D55F0721c8Bd1ddB2a8f9484", 20010464) // Block:6389775 EthAddr:0x158de6596E2e6cB9944f8d69Fd98b36253dD261f
        await heroManager.forceMintHero("0xC0c93f62dc6AF811827A289D870312029f567473", 20010465) // Block:6389776 EthAddr:0x447f30a3F4F77ED88dC5240e18E87bd91206aF60
        await heroManager.forceMintHero("0xcE28ccaA4337aC87CD6ED3cc66758b4cF91d2979", 20010466) // Block:6389776 EthAddr:0x2C923a56a71B6C12104A400F0862077e5A81C845
        await heroManager.forceMintHero("0xe6CF75cDB85646494fE2e817E56A574fAFE4E75b", 20010467) // Block:6389805 EthAddr:0xEe3f680bf684303e8bBED99D4eE4d16179157368
        await heroManager.forceMintHero("0x82c59aebE47f60Bfd51BBDE8ACF553D215469AD0", 20010468) // Block:6389805 EthAddr:0xaB3009dbb3C9A5694Ed818Cf0d159E069Dd55107
        await heroManager.forceMintHero("0x49C2c343E762AF0768869b1c27568FDDd3CE862c", 20010469) // Block:6389811 EthAddr:0x40e3CE1EB12bbdD77ECa97a46E3f95F37e5276DB
        await heroManager.forceMintHero("0xC3b94e39e36B4A922bA9a86d0F207C960f8a3edC", 20010470) // Block:6389818 EthAddr:0xc05f2e51D719813fDD0F60443087c64624FfDF07
        await heroManager.forceMintHero("0xE5F48e23f9A3A24E9936627E1b0257a1E8f313a2", 20010471) // Block:6389830 EthAddr:0x75f9e276ff31494E8b0f224990D4193Ac4a7B7F5
        await heroManager.forceMintHero("0x994793304c24249056115483285aa55bB605bfF8", 20010472) // Block:6389841 EthAddr:0x8ca0Da8082e238213218DF0D1BcE2d96f32AFBC4
        await heroManager.forceMintHero("0x5e4fD874C6F5E68a0E5318F5219c0e8C2632777B", 20010473) // Block:6389842 EthAddr:0x07203eCb38cDaAE97C137984cdFB64C478745835
        await heroManager.forceMintHero("0x0638aB483fEf536917cAc1BC4e1ca8901532099F", 20010474) // Block:6389850 EthAddr:0x6E0566dD6793F3e0c7a58aE03976D300a6E127fb
        await heroManager.forceMintHero("0x0c153ABc3f474f142AA10B7028e43B6d0da29727", 20010475) // Block:6389861 EthAddr:0x11670672321258C38C028809C1EDdC4E12133653
        await heroManager.forceMintHero("0x9D99b1d900c140e71585f0eA0Bd808BdbF5E8ef9", 20010476) // Block:6389901 EthAddr:0x28f087664a49a27C0eb78b1C7FbD7231794D9a7e
        await heroManager.forceMintHero("0x3600419E1947B37054C433b90B35e593925cE8Cf", 20010477) // Block:6389911 EthAddr:0xa2bb38270aF3116a6Ed41EC36a11EE7313918046
        await heroManager.forceMintHero("0x7dEC7BEf2B14E0FBBbF07eFd53fa72df9a1deE73", 20010478) // Block:6389913 EthAddr:0x789bb47b1feAE92594c7C871968Ff69aa5622e2c
        await heroManager.forceMintHero("0xd491370454e76dbD211338f9EF7d0B3d0f9c691A", 20010479) // Block:6389915 EthAddr:0xcd8dBF2c846Aa2CA11bbd189A74e0BAc9DCbE11E
        await heroManager.forceMintHero("0x1c477209f8440eF47818238a337c121176F20035", 20010480) // Block:6389947 EthAddr:0x78004c4d2cf7Be282881103F8354Bc616bC1775D
        await heroManager.forceMintHero("0xb5e1B19De588FE38f494a71E94A8D1d5A2B9EF8b", 20010481) // Block:6389954 EthAddr:0xAB924A69D1d853ea6Cac57e645D6838ecEc90f3f
        await heroManager.forceMintHero("0xf39e226e8909561867B31631360e8f320D64A7C3", 20010482) // Block:6389961 EthAddr:0x8A2616f0Bf2ca470E4D1BD3dEa3F1bb65DF88DFA
        await heroManager.forceMintHero("0x2b5233d75A20f8D7149b23b9a06E83A41bA0F0ca", 20010483) // Block:6389969 EthAddr:0x58116289b5b5E5B738837f59487247920fc11019
        await heroManager.forceMintHero("0x135689bAAC8dF55732aF65456395D92aB6FFc0e5", 20010484) // Block:6389978 EthAddr:0x8fd01A651d38d0cce18EA4F74097De734be85ddd
        await heroManager.forceMintHero("0x64670ce59fCEFFA961C14E8988421f2Bd8Cfe6fe", 20010485) // Block:6389978 EthAddr:0x7F92cd429A1F2F556d90bbceF7cD185C40fE5790
        await heroManager.forceMintHero("0xC950C8c28D3C0f5a925A16cB705E2fb2d601f2F6", 20010486) // Block:6389980 EthAddr:0x98598b02f2b762259F90Bc3CEf0296013abB66bb
        await heroManager.forceMintHero("0x67D1d2921165E079C3f540DF740F32e4Bef34d0f", 20010487) // Block:6389981 EthAddr:0x798fC047B8628533d70544A24A9ea37f92C88B64
        await heroManager.forceMintHero("0x32c0749E2b0C0Fc885CE2a9cDcded0289E72A963", 20010488) // Block:6389983 EthAddr:0x1BFB27C96949E8eE3a3Fa8B1e7368F9d73E41DBE
        await heroManager.forceMintHero("0xd19e3Ce39D7Fa23ed10DEC13Eec0a9DcE0E61E8B", 30010104) // Block:6389991 EthAddr:0x5fD794a8364198cF74C6e71F7efc1754a2641F30
        await heroManager.forceMintHero("0x88172ae526cD6459D9d8d1a4c356CC5fA31522Cd", 20010489) // Block:6390004 EthAddr:0x9Af971BCaeAA324A03742EcB63105AEB83E8FdEF
        await heroManager.forceMintHero("0xbCc27e846958fa65a62d8452346802b55Bf43C3E", 20010490) // Block:6390004 EthAddr:0xC733E98ad6d70670420e981309b4eA9F7ac54A5c
        await heroManager.forceMintHero("0xf107978e92B8579A48EEEAead2674859789db951", 20010491) // Block:6390020 EthAddr:0x1eb10258250A68309A21DDAc6c8B1f33a1112BD0
        await heroManager.forceMintHero("0xa2e3c6675feB7e73C734cD08c19B6426B918dd15", 20010492) // Block:6390021 EthAddr:0x2730559b56bC55c1Ed37EBdf8213D86949ad0d39
        await heroManager.forceMintHero("0xDBD8C822d111E8a90f689Fb86641E9bFcb218754", 20010493) // Block:6390026 EthAddr:0x5caD6a70B11aD7A0aD83798FfA96c468C90ad8B7
        await heroManager.forceMintHero("0x75FCd28cdf782E85ef79Afd0CB57788ecCA1bb0B", 20010494) // Block:6390034 EthAddr:0x164bFc99CAD440b798325a49D6A7DA5234948143
        await heroManager.forceMintHero("0x071E6029fCaA1Bf45b653A4c0B0d38ad607EE57c", 20010495) // Block:6390057 EthAddr:0xcF2C88F08D3a9fd8307f74B6a08ac36EF3DB3c1d
        await heroManager.forceMintHero("0xE96Ba23F2c20E1AeC76bdB55F900B650a0A24620", 20010496) // Block:6390057 EthAddr:0xff8Ea90C72fAfd71e7a1354d6da7a3a8937E3536
        await heroManager.forceMintHero("0x6135b3F726Ff61Ccc4d505b4492e90f8693042eD", 20010497) // Block:6390096 EthAddr:0x6046Bab804978C60a4400e811F0F86dCf7Ac758c
        await heroManager.forceMintHero("0x259FC623a074a19335197500D8Fe4aCfa137560D", 20010498) // Block:6390096 EthAddr:0xe712f8335b250f6B2B53099F420C4fF4D32d7860
        await heroManager.forceMintHero("0x9722D391A5ae16033A88FF3e91dB1e7696d8F329", 20010499) // Block:6390096 EthAddr:0x9Deae96c38757f8385c0320Ae2c69676F965B288
        await heroManager.forceMintHero("0x358e1A022A822E28495D2b79C21DCCFF4B9687a2", 20010500) // Block:6390126 EthAddr:0x6230C1C6881A5Db38093c6059F5E714a01eA00e9
        await heroManager.forceMintHero("0x0bD2061a348F7A46d3a7667a84959adDAFa038fa", 20010501) // Block:6390167 EthAddr:0x9c4910817144CCA6b4d9B198a505a91794328022
        await heroManager.forceMintHero("0x2164120DA5FcDee3FC9B53c949C9E2d54520ed13", 20010502) // Block:6390186 EthAddr:0xDD4A96944d14819D9157d662Af6955cD7C99B33D
        await heroManager.forceMintHero("0x34655Adba6509fB1430540AB26faB34688188DF3", 20010503) // Block:6390204 EthAddr:0x28f291AAcB8d99D9e8855D002a19D40f028F3C60
        await heroManager.forceMintHero("0x35882e270E6fd1b8703BA6e051ed6E7A0666eC74", 20010504) // Block:6390212 EthAddr:0x3cA2F7287c93694Ef96db9c02390d98dA6225301
        await heroManager.forceMintHero("0xbAeCC92a47bfa1936511Df4aaBF53738F6F75ecb", 20010505) // Block:6390219 EthAddr:0xC92bD462f41245eC79622516712976f4784a59Ef
        await heroManager.forceMintHero("0xBF03e7667e592A99d9EcA508822fd4987C8c0206", 20010506) // Block:6390230 EthAddr:0xC9a8A61331b2ED554bcD191cce2bEC60088cd90d
        await heroManager.forceMintHero("0x69b1FBd409BEf2f703E734195f1de70cc7e9aEE4", 20010507) // Block:6390238 EthAddr:0xFAFB6Be9CACb285D5ef0F519BF2F0784677B74A0
        await heroManager.forceMintHero("0x37b73834c1381bED5a64dbB8A44cCc59A4ea7885", 20010508) // Block:6390246 EthAddr:0x3C96E78848fB4e8CBe9679bA74af361fEC39D251
        await heroManager.forceMintHero("0x0D9Ca60088f399023c804f3ebDdAc113CB23f63F", 20010509) // Block:6390246 EthAddr:0x7E8952a02C11E0e5F4bd3832A74ea2Ff040FD27C
        await heroManager.forceMintHero("0xf6D3a870A534B95D2818f5F21cebA0823fC8FF77", 20010510) // Block:6390253 EthAddr:0xfe0044944536D966dCC9877e43d7cF793e35D96C
        await heroManager.forceMintHero("0x3a0ABC51018D7226480c91BAEfACcbA50BE4e52d", 20010511) // Block:6390259 EthAddr:0x1Dad2fD457A55cf68e743EDeb4DF49cE2aE60f6B
        await heroManager.forceMintHero("0xD96b3867942E4eaAfdC703c567D24be76d2b1E9B", 20010512) // Block:6390266 EthAddr:0x2F6204c1Fb3520e8ea847d10403A2F98f8fA36a3
        await heroManager.forceMintHero("0x2Cad27645788284aFC94619d95D4aE359E224e32", 20010513) // Block:6390280 EthAddr:0x620C311978d327B29183312825B348133a8afbDa
        await heroManager.forceMintHero("0x876b449022e2d11C3Fe3388189650731dF019B50", 20010514) // Block:6390290 EthAddr:0xdd26a0cd7EED4Ec4dc7f94b35260FE7a99698cbD
        await heroManager.forceMintHero("0x5012e17BC160503beAB3e9A8bED743b32bB19949", 20010515) // Block:6390290 EthAddr:0xA80AF6EAaD9b9418fc2167c7f184044De2f540E9
        await heroManager.forceMintHero("0xD25dE6453272Ea402eAA780E7908Da2C23377840", 20010516) // Block:6390316 EthAddr:0xE4E54f6b5061B303d291b84208c2Bf955F0fd388
        await heroManager.forceMintHero("0xDa02E3789db3404D01414816aFC2a491988409c0", 20010517) // Block:6390319 EthAddr:0xFf153a8D1C24672Ffa243e183D3a1EDbb9d4E428
        await heroManager.forceMintHero("0x8a80c9bD7D0367eC9a377028931819c9a718A2b6", 20010518) // Block:6390336 EthAddr:0x977fBf003613998b88d20b674Eb71f541af16cC8
        await heroManager.forceMintHero("0x67D1d2921165E079C3f540DF740F32e4Bef34d0f", 30010105) // Block:6390344 EthAddr:0x798fC047B8628533d70544A24A9ea37f92C88B64
        await heroManager.forceMintHero("0xC796919a344915e4BAc0e355d964D0b9499b11f7", 20010519) // Block:6390371 EthAddr:0x6c803171b4BB2893aF761C1BCBd4c9dE00342954
        await heroManager.forceMintHero("0x5d98a858cBD7cf1F7a32e21B77902d9810c168f6", 20010520) // Block:6390373 EthAddr:0xb1B539cdcA6A1A6bf188af6348DfD05559558711
        await heroManager.forceMintHero("0x297e94aC8A4f4Fc8f88E2aD61a72c4BD9D83B3D8", 20010521) // Block:6390383 EthAddr:0xB5865AE05DbefA82637c9f654b00a60e729aA29E
        await heroManager.forceMintHero("0x05a04bbf5c597a521584de159B5EffE0fAeAEe26", 20010522) // Block:6390391 EthAddr:0x144345e4D07AC6dd52C278d975Ca252ee8175F27
        await heroManager.forceMintHero("0xEDd4a40aBC8773dAE00032a13722912298c259b2", 20010523) // Block:6390408 EthAddr:0x8D7204B5F87E7650400dA517140DB6d43adC6eA1
        await heroManager.forceMintHero("0x623f2E9D6DBFAeE240EB8461C693DB8f71DCE9cd", 20010524) // Block:6390413 EthAddr:0x23b25E5DB79C699C55cF494CB6AC5FD268Bfe70e
        await heroManager.forceMintHero("0xc83116AE09e895e6Fb02c562f06FaC1641bCd4Bf", 20010525) // Block:6390461 EthAddr:0x7BdC5bBf59Cce775eF220adAF0081129FA175C3e
        await heroManager.forceMintHero("0xAEF976d1722a8fF0909aA8301a81Cef73cB559Db", 30010106) // Block:6390463 EthAddr:0x0A45477554B036877bEFD3189512a550932100bc
        await heroManager.forceMintHero("0xF35a6d36485833f72D4e1199a891a4a384Bc1367", 20010526) // Block:6390463 EthAddr:0x4E47005Da9227fe796636e43E59FDAB466615C92
        await heroManager.forceMintHero("0x442e85A3443d19e38c738b4d118101A63a12adee", 20010527) // Block:6390464 EthAddr:0x0E42581ac156bf84926366cF35DBb454c4e53135
        await heroManager.forceMintHero("0x44A27C1C3f26D2c1E51Be5e81c4A33866028e4fa", 20010528) // Block:6390466 EthAddr:0xd2fc9BE2F43dA641964fcC1AD92D7C94Aa1C5e45
        await heroManager.forceMintHero("0x555d94bb85895D62b02a68a767184E5ac49a5365", 20010529) // Block:6390496 EthAddr:0x1BF146B9F42bd229b33D49BbcFCb3B3b1C2FBD3c
        await heroManager.forceMintHero("0xa0b771ad6f938A7efce3A205Aa3e5F8c5578876F", 20010530) // Block:6390497 EthAddr:0x0D35b2Bdc342E582EDd637Ce6BB6d7Cef93636Ec
    });
}