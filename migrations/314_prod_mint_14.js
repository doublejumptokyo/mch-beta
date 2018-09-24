let HeroManager = artifacts.require('HeroManager');

module.exports = function(deployer) {
    deployer.then(async function() {
        let heroManager = await HeroManager.deployed();

        await heroManager.forceMintHero("0x081bB235aCDc63899c51AfBd73DcE54eA00A1c3B", 20010531) // Block:6390497 EthAddr:0xE4AEE1991c2D1572A6e084381941Be54448B85db
        await heroManager.forceMintHero("0xcA883C2D334c39Db71E226Af2a186d92C59b05D1", 20010532) // Block:6390502 EthAddr:0x04acE15202E0A1cF291d4DaA54817B8d00100C0F
        await heroManager.forceMintHero("0xc37AA2d8C662bfb2f89577644CE750Cb6Dfa93AA", 20010533) // Block:6390505 EthAddr:0x46D62E03eE3F22b8b28fAa524862d1820b540e1a
        await heroManager.forceMintHero("0x467a28b64E9aC09E8f2dA881381cd4C139AEe998", 20010534) // Block:6390505 EthAddr:0xf36c8ebeb04544C309340D3618401D5e7DDdE067
        await heroManager.forceMintHero("0x002178B75A70c5f99812c84a8d5477539343Cc4B", 20010535) // Block:6390505 EthAddr:0xaA95d3D8fE3EcFa4fcfCd1375Dfd069A8B867F50
        await heroManager.forceMintHero("0x05e159d1608E8eB27e5cF76fEBd12c9f3f87f1cf", 20010536) // Block:6390510 EthAddr:0x78ADD68bbDc72aA47E493965b64FC1079254902A
        await heroManager.forceMintHero("0x7a556fE153CDDc7C68E2e0B5106999b6A6444A95", 20010537) // Block:6390520 EthAddr:0xCf0E9b4746cfB97bAE329FE5F696969F6564566a
        await heroManager.forceMintHero("0x7B2831C9590e697b41F321148A38F4476A8109D6", 20010538) // Block:6390525 EthAddr:0x2B50f2bA175391E5bA75d933fE46D608C36f5409
        await heroManager.forceMintHero("0x7a556fE153CDDc7C68E2e0B5106999b6A6444A95", 30010107) // Block:6390533 EthAddr:0xCf0E9b4746cfB97bAE329FE5F696969F6564566a
        await heroManager.forceMintHero("0xE5363d1C4cCB4aDD8187e6BBFeEB62CC1A88ccee", 20010539) // Block:6390537 EthAddr:0x83464F7970728D528Abab8E95d4236cA11fcBeD1
        await heroManager.forceMintHero("0xCA5709172B5b80e41bACE07F324798aC70A73d86", 20010540) // Block:6390543 EthAddr:0x2E2BfB9d533EC40f32b2cA2feDddEbbdbBCAA40B
        await heroManager.forceMintHero("0xc2D4dF5bDf5be12fda63961993D5d9D9183c7e4d", 20010541) // Block:6390545 EthAddr:0x7a7f1aCEA70731058D8D76a30D27405587c0e521
        await heroManager.forceMintHero("0x15634470B1D2bF0d3C5E01E840b7cE0D149Bf367", 20010542) // Block:6390560 EthAddr:0x185d7cFcF4Eb88533cbC9aaD4F2A7c8F9250A289
        await heroManager.forceMintHero("0xD968884124e289B0d38631025B814be695c747Ff", 20010543) // Block:6390564 EthAddr:0xca86CeEC4d51b5552A052B27A8361fd53a7B9D11
        await heroManager.forceMintHero("0xBae349Fee08EF170611A5CAB9bbce9d30dCA576A", 20010544) // Block:6390564 EthAddr:0xa4e566c0Aa45680eD257eC95931bb67ADD699560
        await heroManager.forceMintHero("0x97551a0670c8FaE302ed83Bf8651C33125747a8A", 20010545) // Block:6390566 EthAddr:0x024B01A0Dd22bF4E6e68f1F1c6BB255784375aaa
        await heroManager.forceMintHero("0xc82f0D8F5F5a5bADe26c278BDeB615d82Ab7160e", 20010546) // Block:6390592 EthAddr:0xe15f65775Cc255fCD0E2169D89CE59D856D16ff6
        await heroManager.forceMintHero("0xBae349Fee08EF170611A5CAB9bbce9d30dCA576A", 40080067) // Block:6390619 EthAddr:0xa4e566c0Aa45680eD257eC95931bb67ADD699560
    });
}