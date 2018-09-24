let HeroManager = artifacts.require('HeroManager');

module.exports = function(deployer) {
    deployer.then(async function() {
        let heroManager = await HeroManager.deployed();

        await heroManager.forceMintHero("0x36ba8E820b2701Fd0bDA118D7bAD4149cA4d9eBA", 20010001) // Block:6369390 EthAddr:0xB1A25D6E37ad12579801eBb6787636fd63ba87cc
        await heroManager.forceMintHero("0x1888ddA0eed5957f14e1C60d95154c66ECCe77B7", 20010002) // Block:6369392 EthAddr:0x1b7E43b4389Fc0dE4F3d66F45DA60C6F95504c06
        await heroManager.forceMintHero("0xBA8c1DBa523777724b1d5F6a3dB2338ADdE24a5d", 20010003) // Block:6369395 EthAddr:0x7E1DCf785f0353BF657c38Ab7865C1f184EFE208
        await heroManager.forceMintHero("0xfa989e846AF7a2c9414C856792bA8592845A7091", 20010004) // Block:6369397 EthAddr:0x65821d8B421fAB80c67Fa4302df6Efd13b8462Ae
        await heroManager.forceMintHero("0xE43a734033d04d555023a3af2216bd35B0039414", 20010005) // Block:6369404 EthAddr:0xe313839f9A1F18B94BcD308914fB070FCAA6c416
        await heroManager.forceMintHero("0xb8e567102c0D6581742EE71Da9F1E0fcBBE1e408", 20010006) // Block:6369404 EthAddr:0x16C0db08cAa75E99a0597FEd22414E6903674470
        await heroManager.forceMintHero("0x42C555e5BB2E477aD73D0472B4FD6F04eA8911c1", 40030001) // Block:6369404 EthAddr:0x7bEED30332656CA4220CB2ce8E4508fb18013E8d
        await heroManager.forceMintHero("0x2269AD6E88a093C4D5EDdeb6716a7082b588ADcf", 40070001) // Block:6369405 EthAddr:0xd8B7fC1700BD55D1b96e3c1d001e23380E2d3A8B
        await heroManager.forceMintHero("0x42C555e5BB2E477aD73D0472B4FD6F04eA8911c1", 20010007) // Block:6369406 EthAddr:0x7bEED30332656CA4220CB2ce8E4508fb18013E8d
        await heroManager.forceMintHero("0x36ba8E820b2701Fd0bDA118D7bAD4149cA4d9eBA", 50010001) // Block:6369408 EthAddr:0xB1A25D6E37ad12579801eBb6787636fd63ba87cc
        await heroManager.forceMintHero("0x6d2fCBb5f3C64DD03fCcE88CbFB0B76431D7ace5", 20010008) // Block:6369409 EthAddr:0x759dE6B9806A5F695B8FE92f58a6771fB5DB52C6
        await heroManager.forceMintHero("0xFaB6FB596A76731A2041CaFc42A9106A6dFEABd6", 20010009) // Block:6369412 EthAddr:0x82fb29C741F6131B9290Cd579b789d10A4Ae6820
        await heroManager.forceMintHero("0x4D993C0726fDBC26b513cb16c6955CD4bf9Eb85e", 20010010) // Block:6369417 EthAddr:0x0662596A2a8F7FE81E13F5b68F77E851A1251f73
        await heroManager.forceMintHero("0x4c09AeE8316e1eB1D9D00792F38d9c11b11077BD", 20010011) // Block:6369417 EthAddr:0x088e25e6027816c753d01D7F243C367710F20497
        await heroManager.forceMintHero("0x76d0EBF5bE3176E7D05E0681415a54b99ca8f2eA", 40040001) // Block:6369418 EthAddr:0x813074b9A3c964C51AC66b841C2577A3Ce1062F6
        await heroManager.forceMintHero("0x752095592D68809e3710d8e13dd0C62c11833dfE", 50030001) // Block:6369419 EthAddr:0x342Ab615bF0Bf9e8E21D24B6fe804039BDb11960
        await heroManager.forceMintHero("0x505252E7df4089Cbb8b0694Ea70d1f1134BC225d", 20010012) // Block:6369421 EthAddr:0xD9037bcF8E25AD4e01650025ef249c161Cb4936a
        await heroManager.forceMintHero("0x96EDfcdF2a9DF26A63C17cc96060a505c5Ae32F6", 40090001) // Block:6369421 EthAddr:0x75576a8b074b609c482c11c5A09e4E651D9b4B01
        await heroManager.forceMintHero("0x8E6753354bfFDaA10dEEf58199d62915729fB72D", 20010013) // Block:6369423 EthAddr:0x94f7c2E527C6F5684ad00326dbc8c4959f5A10fd
        await heroManager.forceMintHero("0xFaB6FB596A76731A2041CaFc42A9106A6dFEABd6", 40020001) // Block:6369424 EthAddr:0x82fb29C741F6131B9290Cd579b789d10A4Ae6820
        await heroManager.forceMintHero("0x752095592D68809e3710d8e13dd0C62c11833dfE", 50040001) // Block:6369424 EthAddr:0x342Ab615bF0Bf9e8E21D24B6fe804039BDb11960
        await heroManager.forceMintHero("0xBA8c1DBa523777724b1d5F6a3dB2338ADdE24a5d", 40020002) // Block:6369431 EthAddr:0x7E1DCf785f0353BF657c38Ab7865C1f184EFE208
        await heroManager.forceMintHero("0xBA8c1DBa523777724b1d5F6a3dB2338ADdE24a5d", 50030002) // Block:6369436 EthAddr:0x7E1DCf785f0353BF657c38Ab7865C1f184EFE208
        await heroManager.forceMintHero("0x4D993C0726fDBC26b513cb16c6955CD4bf9Eb85e", 40020003) // Block:6369436 EthAddr:0x0662596A2a8F7FE81E13F5b68F77E851A1251f73
        await heroManager.forceMintHero("0xFaB6FB596A76731A2041CaFc42A9106A6dFEABd6", 40050001) // Block:6369437 EthAddr:0x82fb29C741F6131B9290Cd579b789d10A4Ae6820
        await heroManager.forceMintHero("0xFaB6FB596A76731A2041CaFc42A9106A6dFEABd6", 40060001) // Block:6369439 EthAddr:0x82fb29C741F6131B9290Cd579b789d10A4Ae6820
        await heroManager.forceMintHero("0xBA8c1DBa523777724b1d5F6a3dB2338ADdE24a5d", 30010001) // Block:6369439 EthAddr:0x7E1DCf785f0353BF657c38Ab7865C1f184EFE208
        await heroManager.forceMintHero("0x9C832bEcCeb2e9e3a5De4cf3ccD210A2d7b93e9d", 20010014) // Block:6369442 EthAddr:0x43501e11aCF3DfDaE4bd2cA40c5ea1303Fc51941
        await heroManager.forceMintHero("0x6d2fCBb5f3C64DD03fCcE88CbFB0B76431D7ace5", 40010001) // Block:6369443 EthAddr:0x759dE6B9806A5F695B8FE92f58a6771fB5DB52C6
        await heroManager.forceMintHero("0xBA8c1DBa523777724b1d5F6a3dB2338ADdE24a5d", 40090002) // Block:6369445 EthAddr:0x7E1DCf785f0353BF657c38Ab7865C1f184EFE208
        await heroManager.forceMintHero("0x6d2fCBb5f3C64DD03fCcE88CbFB0B76431D7ace5", 40020004) // Block:6369445 EthAddr:0x759dE6B9806A5F695B8FE92f58a6771fB5DB52C6
        await heroManager.forceMintHero("0x76d0EBF5bE3176E7D05E0681415a54b99ca8f2eA", 40060002) // Block:6369447 EthAddr:0x813074b9A3c964C51AC66b841C2577A3Ce1062F6
        await heroManager.forceMintHero("0x76d0EBF5bE3176E7D05E0681415a54b99ca8f2eA", 40020005) // Block:6369452 EthAddr:0x813074b9A3c964C51AC66b841C2577A3Ce1062F6
        await heroManager.forceMintHero("0x6d2fCBb5f3C64DD03fCcE88CbFB0B76431D7ace5", 40060003) // Block:6369453 EthAddr:0x759dE6B9806A5F695B8FE92f58a6771fB5DB52C6
        await heroManager.forceMintHero("0x4c09AeE8316e1eB1D9D00792F38d9c11b11077BD", 40040002) // Block:6369453 EthAddr:0x088e25e6027816c753d01D7F243C367710F20497
        await heroManager.forceMintHero("0x6d2fCBb5f3C64DD03fCcE88CbFB0B76431D7ace5", 40090003) // Block:6369457 EthAddr:0x759dE6B9806A5F695B8FE92f58a6771fB5DB52C6
        await heroManager.forceMintHero("0xCC69C1A897028404cD401fAd0291441573C7a917", 20010015) // Block:6369461 EthAddr:0xB130168eC63Ca7e30A8f8C7268aA56E4d6730Fb5
        await heroManager.forceMintHero("0xFaB6FB596A76731A2041CaFc42A9106A6dFEABd6", 40090004) // Block:6369469 EthAddr:0x82fb29C741F6131B9290Cd579b789d10A4Ae6820
        await heroManager.forceMintHero("0x8A8F46B49c00EE522423f97CD04358619C789e20", 20010016) // Block:6369470 EthAddr:0x8e5d30f161Ba3EbB09dc3c1F06515656af34BaA1
        await heroManager.forceMintHero("0x2FCfD45cc786d7Ca875209EFC3284237c2c658EE", 20010017) // Block:6369470 EthAddr:0xc5BcFc66e795878539b32eBEF0dc9F9E53D29e2B
        await heroManager.forceMintHero("0x3b107eba53c13d6caD7e338a6bc9f6436eb41559", 20010018) // Block:6369473 EthAddr:0x40c9afd96646dF172b6fA31211Fb51bf5144081e
        await heroManager.forceMintHero("0x4D993C0726fDBC26b513cb16c6955CD4bf9Eb85e", 40090005) // Block:6369479 EthAddr:0x0662596A2a8F7FE81E13F5b68F77E851A1251f73
        await heroManager.forceMintHero("0xFaB6FB596A76731A2041CaFc42A9106A6dFEABd6", 40040003) // Block:6369479 EthAddr:0x82fb29C741F6131B9290Cd579b789d10A4Ae6820
        await heroManager.forceMintHero("0x2CA9d7715a8d118608778f28265c8AFa9cC25AA9", 20010019) // Block:6369483 EthAddr:0x20De17B3941c1497b14211734F721704EEd5b1cC
        await heroManager.forceMintHero("0xFaB6FB596A76731A2041CaFc42A9106A6dFEABd6", 40030002) // Block:6369484 EthAddr:0x82fb29C741F6131B9290Cd579b789d10A4Ae6820
        await heroManager.forceMintHero("0xb0749Edba10Ab20d3D37c7bC21787D74a5523bb1", 20010020) // Block:6369486 EthAddr:0x151983Ce33eFB42f3ce29Fa9E41977888405abe1
        await heroManager.forceMintHero("0x14BEDb22F3D4fBdafBAd6E07949765c3Dd2B15d3", 20010021) // Block:6369494 EthAddr:0x694CCab8fBe06350147fcd3F12D885E34f79EA85
        await heroManager.forceMintHero("0xE14bf01D47fD5fcB20646fF8D4542e04831bF023", 20010022) // Block:6369498 EthAddr:0x8C5fC43ad00Cc53e11F61bEce329DDc5E3ea0929
        await heroManager.forceMintHero("0xaf10f7c1726D4daDeee7b471089cCAd9F696baaA", 20010023) // Block:6369501 EthAddr:0x5fD794a8364198cF74C6e71F7efc1754a2641F30
        await heroManager.forceMintHero("0xf28e81B5CF34ec4dcB9CC5C5BCac49c6e85d7BfA", 30010002) // Block:6369503 EthAddr:0xF796b8fb98c7c98Fd4b5424CeD013820d1f2EE76
        await heroManager.forceMintHero("0x48f72875096EA28632B1bdc63Bfa5bD872411FBD", 20010024) // Block:6369507 EthAddr:0x3375b75AD4428b13fE7a31113BA87226972Ee4Bb
        await heroManager.forceMintHero("0x390548b5eA067ca1925B93d7A0be09357749b748", 40020006) // Block:6369518 EthAddr:0x1D62cf8353F0ABf24fE71f021491A9d03eD59d2D
        await heroManager.forceMintHero("0x4a8947BdeA1CEB8756348560eC8FF120f280724B", 30010003) // Block:6369518 EthAddr:0xe531544dB533D5fdb6BDbBb1f8f5eE9545e94109
        await heroManager.forceMintHero("0xff9aB439fE7697e7eB6824907B4fde2ABAe53876", 20010025) // Block:6369518 EthAddr:0x828F0AE9185C30ad5cc50031689ED82C270c9350
        await heroManager.forceMintHero("0x96EDfcdF2a9DF26A63C17cc96060a505c5Ae32F6", 40070002) // Block:6369518 EthAddr:0x75576a8b074b609c482c11c5A09e4E651D9b4B01
        await heroManager.forceMintHero("0xb9D15fDB7dFA531abd30081c15489C1fd2ac0ce5", 20010026) // Block:6369520 EthAddr:0xBcd2c48E447A45244CcEFdb232b2F7B5F86f43bD
        await heroManager.forceMintHero("0x078268e16f7fB12c161a6FC78E2fd5327b8bC74A", 40090006) // Block:6369522 EthAddr:0xd80170377dd2869BfAC5e9dC3335A5AB7610981f
        await heroManager.forceMintHero("0xE14bf01D47fD5fcB20646fF8D4542e04831bF023", 40010002) // Block:6369524 EthAddr:0x8C5fC43ad00Cc53e11F61bEce329DDc5E3ea0929
        await heroManager.forceMintHero("0xE14bf01D47fD5fcB20646fF8D4542e04831bF023", 40040004) // Block:6369527 EthAddr:0x8C5fC43ad00Cc53e11F61bEce329DDc5E3ea0929
        await heroManager.forceMintHero("0x48dE690bf2E1fF20d6B776420c203207A2E309C0", 20010027) // Block:6369527 EthAddr:0xBACa1a10f0c0b11571f58a3D027AD5637958Ff47
        await heroManager.forceMintHero("0x8B484f9636347B2eDbE6D53d92639b65D455Cf67", 20010028) // Block:6369529 EthAddr:0x56f6bf6B793713C050Fd02147a45b563Bb4D8eFa
        await heroManager.forceMintHero("0x390548b5eA067ca1925B93d7A0be09357749b748", 40010003) // Block:6369534 EthAddr:0x1D62cf8353F0ABf24fE71f021491A9d03eD59d2D
        await heroManager.forceMintHero("0x8A8F46B49c00EE522423f97CD04358619C789e20", 30010004) // Block:6369534 EthAddr:0x8e5d30f161Ba3EbB09dc3c1F06515656af34BaA1
        await heroManager.forceMintHero("0x614a4A3d3201066DD277c8d843ff4f0f9a9a5Ce2", 20010029) // Block:6369534 EthAddr:0xA4e7918fb5F4a8c12f9513b193bE1d764d5757Dc
        await heroManager.forceMintHero("0xb9D15fDB7dFA531abd30081c15489C1fd2ac0ce5", 40080001) // Block:6369536 EthAddr:0xBcd2c48E447A45244CcEFdb232b2F7B5F86f43bD
        await heroManager.forceMintHero("0xE14bf01D47fD5fcB20646fF8D4542e04831bF023", 40090007) // Block:6369536 EthAddr:0x8C5fC43ad00Cc53e11F61bEce329DDc5E3ea0929
        await heroManager.forceMintHero("0x501d8996A8Ae2c31De70AEe85D0897d875d1232b", 20010030) // Block:6369538 EthAddr:0xE1252aD07b5E9AD4cbA018448570aC84205e03F5
        await heroManager.forceMintHero("0x47eaA04c9Aa1725E4cF4Efd54363A668FeBB3FD9", 20010031) // Block:6369538 EthAddr:0xCD6fB0F2bf2476E43219E5616709Adc58360A8Da
        await heroManager.forceMintHero("0x68A4a94E611F6c92EA157f6c67B853835a28cCA9", 40020007) // Block:6369540 EthAddr:0xbd06a353f091Cf92c8Ae1cBAf3a75C7F4D685809
        await heroManager.forceMintHero("0x68A4a94E611F6c92EA157f6c67B853835a28cCA9", 40090008) // Block:6369549 EthAddr:0xbd06a353f091Cf92c8Ae1cBAf3a75C7F4D685809
        await heroManager.forceMintHero("0x2269AD6E88a093C4D5EDdeb6716a7082b588ADcf", 50050001) // Block:6369550 EthAddr:0xd8B7fC1700BD55D1b96e3c1d001e23380E2d3A8B
        await heroManager.forceMintHero("0xE059ba65B20466CB200D48DC320a6E8cD07D0aa3", 20010032) // Block:6369550 EthAddr:0xC42EB96867Fa64fa764089Db1b071F45Eb629B10
        await heroManager.forceMintHero("0x68A4a94E611F6c92EA157f6c67B853835a28cCA9", 20010033) // Block:6369551 EthAddr:0xbd06a353f091Cf92c8Ae1cBAf3a75C7F4D685809
        await heroManager.forceMintHero("0x76d0EBF5bE3176E7D05E0681415a54b99ca8f2eA", 20010034) // Block:6369553 EthAddr:0x813074b9A3c964C51AC66b841C2577A3Ce1062F6
        await heroManager.forceMintHero("0xd5CBBC88C98639C85af32804cD75a533c68Ea05E", 20010035) // Block:6369554 EthAddr:0xf498d081C814738216175451Ffc2cdc9dDE62F5C
        await heroManager.forceMintHero("0x96EDfcdF2a9DF26A63C17cc96060a505c5Ae32F6", 20010036) // Block:6369554 EthAddr:0x75576a8b074b609c482c11c5A09e4E651D9b4B01
        await heroManager.forceMintHero("0x85f4f52B29Ddd87987099241B0Cf7D07be3F049b", 20010037) // Block:6369554 EthAddr:0x558F50B2F2d0FcfA2a0D487D316323af725e1767
        await heroManager.forceMintHero("0xa0c94B5a61A125aCa371e432bc63547d3308E30D", 20010038) // Block:6369560 EthAddr:0xc966152e50FfE676e579AB02eE2E9ae5793e06DD
        await heroManager.forceMintHero("0xd883bE3b1751160bEBe65cBCD228b7C28D318295", 20010039) // Block:6369560 EthAddr:0x543CD94c5A5e7BA34B33F38c0bc6F8552Ae4CC62
        await heroManager.forceMintHero("0x752095592D68809e3710d8e13dd0C62c11833dfE", 20010040) // Block:6369560 EthAddr:0x342Ab615bF0Bf9e8E21D24B6fe804039BDb11960
        await heroManager.forceMintHero("0xb0749Edba10Ab20d3D37c7bC21787D74a5523bb1", 40020008) // Block:6369564 EthAddr:0x151983Ce33eFB42f3ce29Fa9E41977888405abe1
        await heroManager.forceMintHero("0x450512Bcde1acD2375DcCbaDc0459B7F6588Cb8a", 40090009) // Block:6369564 EthAddr:0x0Aa6920041e5111C464D9Aa5cd736D1867342813
        await heroManager.forceMintHero("0x5c03852b7c451884071da703F8CAF227F08B7b9f", 30010005) // Block:6369565 EthAddr:0x7EBC7e83CB2b43Deafa82eB0Ae8B5DAEa3fE9a13
        await heroManager.forceMintHero("0xfcFD96B7d264B7edCef4168bDec2db9dF71b799e", 40040005) // Block:6369567 EthAddr:0x66Cead289B5F76fE61844b4010d3E162DBbbd0a4
        await heroManager.forceMintHero("0x6E361ee76B011755b5088b421E393E0BE049EDE8", 40050002) // Block:6369567 EthAddr:0x87Dfef3b445667292AAc89078B51F0F75795805F
        await heroManager.forceMintHero("0xfcFD96B7d264B7edCef4168bDec2db9dF71b799e", 40020009) // Block:6369569 EthAddr:0x66Cead289B5F76fE61844b4010d3E162DBbbd0a4
        await heroManager.forceMintHero("0xFC777a647F0e156CeE7f48cfdC6B1FE8bb3C2bc3", 30010006) // Block:6369576 EthAddr:0xD0d0F23D8D2c66B5C445d37BAa377661080436bF
        await heroManager.forceMintHero("0x53EEfdE578B152353FA29AcEF7d1599D0D20DE4D", 20010041) // Block:6369580 EthAddr:0x3fD3440732867cB9e6c78477280b5cc660FcA11a
        await heroManager.forceMintHero("0x6E361ee76B011755b5088b421E393E0BE049EDE8", 40030003) // Block:6369585 EthAddr:0x87Dfef3b445667292AAc89078B51F0F75795805F
        await heroManager.forceMintHero("0x6fFa8A8045ce4e882E315745D7d390Cf200bfda4", 50020001) // Block:6369585 EthAddr:0x12592d3AB9A313574D3F72fD896cb243780915E7
        await heroManager.forceMintHero("0x051095D23cE60875185FCfDF02DBC15B3D1DEd2C", 20010042) // Block:6369586 EthAddr:0x920b52d30837f29085366487154d4bC6C04702BF
        await heroManager.forceMintHero("0x6eCC1b201B6F919FA48123f423b53D6BEc1C0CFB", 30010007) // Block:6369587 EthAddr:0x69aAE7a2969d5ef1A6521ED2F2CC68b9d16360B3
        await heroManager.forceMintHero("0x96EDfcdF2a9DF26A63C17cc96060a505c5Ae32F6", 40040006) // Block:6369588 EthAddr:0x75576a8b074b609c482c11c5A09e4E651D9b4B01
        await heroManager.forceMintHero("0x078268e16f7fB12c161a6FC78E2fd5327b8bC74A", 40060004) // Block:6369589 EthAddr:0xd80170377dd2869BfAC5e9dC3335A5AB7610981f
        await heroManager.forceMintHero("0xFC777a647F0e156CeE7f48cfdC6B1FE8bb3C2bc3", 20010043) // Block:6369590 EthAddr:0xD0d0F23D8D2c66B5C445d37BAa377661080436bF
        await heroManager.forceMintHero("0x7566994C6783Eac7b096589951041072548a5e6B", 20010044) // Block:6369593 EthAddr:0x2af3Eb7CAb5B35F046CcC3b81Ab484dFBE431aC3
        await heroManager.forceMintHero("0x96EDfcdF2a9DF26A63C17cc96060a505c5Ae32F6", 40020010) // Block:6369594 EthAddr:0x75576a8b074b609c482c11c5A09e4E651D9b4B01
        await heroManager.forceMintHero("0xd5CBBC88C98639C85af32804cD75a533c68Ea05E", 40080002) // Block:6369595 EthAddr:0xf498d081C814738216175451Ffc2cdc9dDE62F5C
        await heroManager.forceMintHero("0x7056A59603060226A37dE607b63fFcb31b9ED375", 20010045) // Block:6369596 EthAddr:0xbC7B75B1F4f4d4fD303bBf654aBd3d791F33180e
        await heroManager.forceMintHero("0x68A4a94E611F6c92EA157f6c67B853835a28cCA9", 50030003) // Block:6369596 EthAddr:0xbd06a353f091Cf92c8Ae1cBAf3a75C7F4D685809
    });
}