let HeroManager = artifacts.require('HeroManager');

module.exports = function(deployer) {
    deployer.then(async function() {
        let heroManager = await HeroManager.deployed();

        await heroManager.mintHero("0xd759195870c7769F092c7b02c33cDb77e24f3a27", 20010438) // Block:6389102 EthAddr:0x878fBc4d7c81f9420aC2270E7A548b48e530aDa2
        await heroManager.mintHero("0xBEBb9cfB036D331e2d5ab6c1342eb0806D0d255A", 20010439) // Block:6389235 EthAddr:0xaad0bb0dFfaEF8C2b0C07Dc9Ba9603083E8bE1f5
        await heroManager.mintHero("0xeEE1555b3014186C293D87E5c1360A5164BA65a0", 20010440) // Block:6389237 EthAddr:0x8E5DF5531cf0593A89D4A82e66B4F445534f18Bf
        await heroManager.mintHero("0x9A1DAdd41E43E664b0517E93e7b8fd636D4AA49d", 20010441) // Block:6389273 EthAddr:0x3C25C82B510790cC88c15D2d784b7DcbCf75b18D
        await heroManager.mintHero("0x9935a5A026e3b858ca9B8439349D952e3290f6C3", 20010442) // Block:6389303 EthAddr:0x6069d8eB5469564cd5d407B3bfDb290DB9d6135d
        await heroManager.mintHero("0xe88c4c06c33C24E36E80d86Ac39651Ad0153C8ba", 40030072) // Block:6389403 EthAddr:0xcc569f495cEc90d5C4b5cbEF1d51217e190566aD
        await heroManager.mintHero("0x49A923d1E5c6439e792e3Af981b93b767B16Ea89", 20010443) // Block:6389434 EthAddr:0xE85110cD2383eed1CB9c776ddb50a6EC39B6E86f
        await heroManager.mintHero("0x49A923d1E5c6439e792e3Af981b93b767B16Ea89", 40050066) // Block:6389479 EthAddr:0xE85110cD2383eed1CB9c776ddb50a6EC39B6E86f
        await heroManager.mintHero("0x73Ce4B0e51D78Aeb298b5Ed9A683D7BBB4B497F3", 20010444) // Block:6389535 EthAddr:0xFA595c3f3EA63BbFb408eeF222CA947F791da0Bc
        await heroManager.mintHero("0xdfc0862Ee07a0a7877aeaF924126e974724560Ce", 20010445) // Block:6389535 EthAddr:0x5f5D9b49CF41B9FC35f1D18Bd58ECa43B684E416
        await heroManager.mintHero("0x73Ce4B0e51D78Aeb298b5Ed9A683D7BBB4B497F3", 40050067) // Block:6389550 EthAddr:0xFA595c3f3EA63BbFb408eeF222CA947F791da0Bc
    });
}