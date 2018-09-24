let HeroManager = artifacts.require('HeroManager');

module.exports = function(deployer) {
    deployer.then(async function() {
        let heroManager = await HeroManager.deployed();

        await heroManager.forceMintHero("0x0589434CEc26D9e388A6cc391F99cA483fc26fc6", 20010431) // Block:6388836 EthAddr:0x925437EAd20D406AB091E8308324B4BD37e4f477
        await heroManager.forceMintHero("0xF7c1391C1eD82DfA3D04B2a0c8DAEe6C502A4d36", 30010103) // Block:6388865 EthAddr:0x12EF2cD4231D5CF655a6CDD4Ac1524FFaa439c17
        await heroManager.forceMintHero("0x00AC963e39e4d0262418E4Dd65dDc12B9F6ecb20", 20010432) // Block:6388879 EthAddr:0x161B1bafEfC30202C67b1E938f23AeA0Ccbf021d
        await heroManager.forceMintHero("0xbc90e8C377713B3C96068ddAD7c3a836ba1F7bC1", 20010433) // Block:6388900 EthAddr:0x396e05690B22F3f555fBc6A691B45F5c479E84E7
        await heroManager.forceMintHero("0xbe2f3222497Ce4477a7ac04c3a700E78f4c4Fb5A", 20010434) // Block:6388929 EthAddr:0x302978fEf749198Da1336e57Ec133D994482BAf1
        await heroManager.forceMintHero("0x79Ba57a15767c577FB9657fE38aB2f52edcD89C2", 20010435) // Block:6388929 EthAddr:0xc4dc11788F37cb339684735E1a99ef769Ccb386e
        await heroManager.forceMintHero("0x82aeC17983fcfACDE5D3f05F8E507Ce741210564", 40070073) // Block:6388998 EthAddr:0xe487c7F0A9f1D11B9Df1c327a4E44b222F40fceF
        await heroManager.forceMintHero("0x04Bc2994f9C63eDa514940A85D4853aD8c7d45D7", 20010436) // Block:6389021 EthAddr:0x2eA884f32b033401390B350EbB51b54A3Ee34f9A
        await heroManager.forceMintHero("0xc7385Df4Eca36baE7C9FE5dC83893Df91d3aacAD", 20010437) // Block:6389027 EthAddr:0x32D364E663AE23126ceB2DD0522C9ab170c0A24D
        await heroManager.forceMintHero("0xd759195870c7769F092c7b02c33cDb77e24f3a27", 20010438) // Block:6389102 EthAddr:0x878fBc4d7c81f9420aC2270E7A548b48e530aDa2
        await heroManager.forceMintHero("0xBEBb9cfB036D331e2d5ab6c1342eb0806D0d255A", 20010439) // Block:6389235 EthAddr:0xaad0bb0dFfaEF8C2b0C07Dc9Ba9603083E8bE1f5
        await heroManager.forceMintHero("0xeEE1555b3014186C293D87E5c1360A5164BA65a0", 20010440) // Block:6389237 EthAddr:0x8E5DF5531cf0593A89D4A82e66B4F445534f18Bf
        await heroManager.forceMintHero("0x751634bA174BF431Ae49BB74B7Dd1B578813976c", 20010439) // Block:6389254 EthAddr:0xB1A25D6E37ad12579801eBb6787636fd63ba87cc
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
    });
}