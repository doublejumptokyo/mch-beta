let HeroManager = artifacts.require('HeroManager');

module.exports = function(deployer) {
    deployer.then(async function() {
        let heroManager = await HeroManager.deployed();

        await heroManager.forceMintHero("0x96EDfcdF2a9DF26A63C17cc96060a505c5Ae32F6", 40010004) // Block:6369597 EthAddr:0x75576a8b074b609c482c11c5A09e4E651D9b4B01
        await heroManager.forceMintHero("0x2Db64c45046A474278C4dDA542F1A04C6BcB67dE", 20010046) // Block:6369598 EthAddr:0x07b99B5A4093bE2C4465D55FcAAD50a3cb61447a
        await heroManager.forceMintHero("0xB9967CAe0B2C7D40ec13A46ECe693ED3A92825Eb", 20010047) // Block:6369598 EthAddr:0xA7B2D5cB80849C0e9D82e983a54da4f9403ED871
        await heroManager.forceMintHero("0x96EDfcdF2a9DF26A63C17cc96060a505c5Ae32F6", 40050003) // Block:6369599 EthAddr:0x75576a8b074b609c482c11c5A09e4E651D9b4B01
        await heroManager.forceMintHero("0x23965D678666ce1eF3F5971E0AC80bCbbAe78A56", 20010048) // Block:6369599 EthAddr:0xDb56FA27AA1ECe598bB65F243F88851725113E73
        await heroManager.forceMintHero("0x752095592D68809e3710d8e13dd0C62c11833dfE", 50050002) // Block:6369600 EthAddr:0x342Ab615bF0Bf9e8E21D24B6fe804039BDb11960
        await heroManager.forceMintHero("0x811cc2E55E46938ca3CA66055bAB5f4db6e6F76b", 20010049) // Block:6369602 EthAddr:0x165b440662b38c8c2d2Af9fCa313D3Af3f479851
        await heroManager.forceMintHero("0x96EDfcdF2a9DF26A63C17cc96060a505c5Ae32F6", 40060005) // Block:6369609 EthAddr:0x75576a8b074b609c482c11c5A09e4E651D9b4B01
        await heroManager.forceMintHero("0x96EDfcdF2a9DF26A63C17cc96060a505c5Ae32F6", 40030004) // Block:6369611 EthAddr:0x75576a8b074b609c482c11c5A09e4E651D9b4B01
        await heroManager.forceMintHero("0x96EDfcdF2a9DF26A63C17cc96060a505c5Ae32F6", 40080003) // Block:6369613 EthAddr:0x75576a8b074b609c482c11c5A09e4E651D9b4B01
        await heroManager.forceMintHero("0x300c66Df9240b91c9e99789FA90EAFd30a9a62B0", 40090010) // Block:6369626 EthAddr:0x08dD65737605b29E24F18981b4E0c5552C8eB224
        await heroManager.forceMintHero("0xCFb5b8F87561e32E70980ee619ee676De7d292DF", 50030004) // Block:6369626 EthAddr:0xB1ae2E48053b0fB4aff780Fc2D925EbB55f0CC13
        await heroManager.forceMintHero("0x88bA1F8951BF9E6018D2a2Ba7D703319FD919CF4", 20010050) // Block:6369626 EthAddr:0x62b8B7B7Af7CB5847Dd7335e0B6B4229CD1B7d48
        await heroManager.forceMintHero("0x2269AD6E88a093C4D5EDdeb6716a7082b588ADcf", 40020011) // Block:6369627 EthAddr:0xd8B7fC1700BD55D1b96e3c1d001e23380E2d3A8B
        await heroManager.forceMintHero("0xab576B8726478044E3EC0336aE0B5A562e8f89d8", 50040002) // Block:6369628 EthAddr:0x7792469E57e8176f79Ede636BB50201012263ff0
        await heroManager.forceMintHero("0xc5408a0688bF6FbFfCCA5FC7eB5fCDDfADFDeC95", 20010051) // Block:6369629 EthAddr:0xBdB33B63340A927e474e92ECbA62708848642A69
        await heroManager.forceMintHero("0x078268e16f7fB12c161a6FC78E2fd5327b8bC74A", 20010052) // Block:6369629 EthAddr:0xd80170377dd2869BfAC5e9dC3335A5AB7610981f
        await heroManager.forceMintHero("0xe006Bf070274732DC349e06F949DE6b1441Ef391", 50030005) // Block:6369640 EthAddr:0x255309578a5Aa7e0E30dD4Bda7A65C9Eee331a5C
        await heroManager.forceMintHero("0x752095592D68809e3710d8e13dd0C62c11833dfE", 40090011) // Block:6369642 EthAddr:0x342Ab615bF0Bf9e8E21D24B6fe804039BDb11960
        await heroManager.forceMintHero("0xCFb5b8F87561e32E70980ee619ee676De7d292DF", 40020012) // Block:6369645 EthAddr:0xB1ae2E48053b0fB4aff780Fc2D925EbB55f0CC13
        await heroManager.forceMintHero("0xCFb5b8F87561e32E70980ee619ee676De7d292DF", 40040007) // Block:6369648 EthAddr:0xB1ae2E48053b0fB4aff780Fc2D925EbB55f0CC13
        await heroManager.forceMintHero("0x505252E7df4089Cbb8b0694Ea70d1f1134BC225d", 40020013) // Block:6369654 EthAddr:0xD9037bcF8E25AD4e01650025ef249c161Cb4936a
        await heroManager.forceMintHero("0x2Db64c45046A474278C4dDA542F1A04C6BcB67dE", 30010008) // Block:6369654 EthAddr:0x07b99B5A4093bE2C4465D55FcAAD50a3cb61447a
        await heroManager.forceMintHero("0xCFb5b8F87561e32E70980ee619ee676De7d292DF", 20010053) // Block:6369654 EthAddr:0xB1ae2E48053b0fB4aff780Fc2D925EbB55f0CC13
        await heroManager.forceMintHero("0x47eaA04c9Aa1725E4cF4Efd54363A668FeBB3FD9", 40060006) // Block:6369654 EthAddr:0xCD6fB0F2bf2476E43219E5616709Adc58360A8Da
        await heroManager.forceMintHero("0x4D993C0726fDBC26b513cb16c6955CD4bf9Eb85e", 40080004) // Block:6369659 EthAddr:0x0662596A2a8F7FE81E13F5b68F77E851A1251f73
        await heroManager.forceMintHero("0x88bA1F8951BF9E6018D2a2Ba7D703319FD919CF4", 40010005) // Block:6369662 EthAddr:0x62b8B7B7Af7CB5847Dd7335e0B6B4229CD1B7d48
        await heroManager.forceMintHero("0x4c09AeE8316e1eB1D9D00792F38d9c11b11077BD", 40090012) // Block:6369674 EthAddr:0x088e25e6027816c753d01D7F243C367710F20497
        await heroManager.forceMintHero("0x76d0EBF5bE3176E7D05E0681415a54b99ca8f2eA", 40020014) // Block:6369674 EthAddr:0x813074b9A3c964C51AC66b841C2577A3Ce1062F6
        await heroManager.forceMintHero("0xD75D2f99574E3636d3F0fcb0AFeAF5203db7eE84", 50050003) // Block:6369674 EthAddr:0xC2a11A5c0Fd9bb2E1579b0E64935057D20AfF28D
        await heroManager.forceMintHero("0x85021aCE90CdBA6F7a697E5DeD4E33324Ca9adF4", 30010009) // Block:6369674 EthAddr:0x34EEc7D3d0755Ba9031C5fAE303Cea4DEF114FEa
        await heroManager.forceMintHero("0xA8f6B5eE71b43f4350ec02DEC413c09C90894e49", 50030006) // Block:6369675 EthAddr:0x4Ca145A4B114ca7cde49582541c02D8EEe4C9e9B
        await heroManager.forceMintHero("0x68A4a94E611F6c92EA157f6c67B853835a28cCA9", 50040003) // Block:6369675 EthAddr:0xbd06a353f091Cf92c8Ae1cBAf3a75C7F4D685809
        await heroManager.forceMintHero("0x066bDebaE2130a1bbbe07A4758Ad6Db85662E7b6", 20010054) // Block:6369675 EthAddr:0x6A84D18cB29300fe6692d84ff89626491Ec59321
        await heroManager.forceMintHero("0xABF15679Fbcf5b7fca55930e65f7e9CE30e6011c", 20010055) // Block:6369676 EthAddr:0x76Cb3cd3731A4a492F6E88BFA05Fa0B24f91Aaa0
        await heroManager.forceMintHero("0x42C555e5BB2E477aD73D0472B4FD6F04eA8911c1", 40010006) // Block:6369676 EthAddr:0x7bEED30332656CA4220CB2ce8E4508fb18013E8d
        await heroManager.forceMintHero("0xda0F799F149146Ae02BFac83B9F499538C9Ad97C", 20010056) // Block:6369677 EthAddr:0x686BF528CA3793954547070EbE25649e08197805
        await heroManager.forceMintHero("0xA8f6B5eE71b43f4350ec02DEC413c09C90894e49", 40040008) // Block:6369677 EthAddr:0x4Ca145A4B114ca7cde49582541c02D8EEe4C9e9B
        await heroManager.forceMintHero("0xab576B8726478044E3EC0336aE0B5A562e8f89d8", 20010057) // Block:6369677 EthAddr:0x7792469E57e8176f79Ede636BB50201012263ff0
        await heroManager.forceMintHero("0x4c09AeE8316e1eB1D9D00792F38d9c11b11077BD", 40020015) // Block:6369678 EthAddr:0x088e25e6027816c753d01D7F243C367710F20497
        await heroManager.forceMintHero("0xBA8c1DBa523777724b1d5F6a3dB2338ADdE24a5d", 50040004) // Block:6369679 EthAddr:0x7E1DCf785f0353BF657c38Ab7865C1f184EFE208
        await heroManager.forceMintHero("0x76d0EBF5bE3176E7D05E0681415a54b99ca8f2eA", 40020016) // Block:6369681 EthAddr:0x813074b9A3c964C51AC66b841C2577A3Ce1062F6
        await heroManager.forceMintHero("0xb9D15fDB7dFA531abd30081c15489C1fd2ac0ce5", 50050004) // Block:6369686 EthAddr:0xBcd2c48E447A45244CcEFdb232b2F7B5F86f43bD
        await heroManager.forceMintHero("0x4E7B3d20D957FCA137695Ccb4217CB166731ba6a", 20010058) // Block:6369686 EthAddr:0x081dB39421CA2C82f3871A331fda572587F69299
        await heroManager.forceMintHero("0x68A4a94E611F6c92EA157f6c67B853835a28cCA9", 40090013) // Block:6369686 EthAddr:0xbd06a353f091Cf92c8Ae1cBAf3a75C7F4D685809
        await heroManager.forceMintHero("0x76d0EBF5bE3176E7D05E0681415a54b99ca8f2eA", 40020017) // Block:6369688 EthAddr:0x813074b9A3c964C51AC66b841C2577A3Ce1062F6
        await heroManager.forceMintHero("0xBA8c1DBa523777724b1d5F6a3dB2338ADdE24a5d", 40010007) // Block:6369695 EthAddr:0x7E1DCf785f0353BF657c38Ab7865C1f184EFE208
        await heroManager.forceMintHero("0x752095592D68809e3710d8e13dd0C62c11833dfE", 40080005) // Block:6369697 EthAddr:0x342Ab615bF0Bf9e8E21D24B6fe804039BDb11960
        await heroManager.forceMintHero("0x2Db64c45046A474278C4dDA542F1A04C6BcB67dE", 50030007) // Block:6369697 EthAddr:0x07b99B5A4093bE2C4465D55FcAAD50a3cb61447a
        await heroManager.forceMintHero("0x4c09AeE8316e1eB1D9D00792F38d9c11b11077BD", 30010010) // Block:6369697 EthAddr:0x088e25e6027816c753d01D7F243C367710F20497
        await heroManager.forceMintHero("0xd5CBBC88C98639C85af32804cD75a533c68Ea05E", 50050005) // Block:6369697 EthAddr:0xf498d081C814738216175451Ffc2cdc9dDE62F5C
        await heroManager.forceMintHero("0x47eaA04c9Aa1725E4cF4Efd54363A668FeBB3FD9", 40090014) // Block:6369700 EthAddr:0xCD6fB0F2bf2476E43219E5616709Adc58360A8Da
        await heroManager.forceMintHero("0x300c66Df9240b91c9e99789FA90EAFd30a9a62B0", 50050006) // Block:6369701 EthAddr:0x08dD65737605b29E24F18981b4E0c5552C8eB224
        await heroManager.forceMintHero("0xA8f6B5eE71b43f4350ec02DEC413c09C90894e49", 40010008) // Block:6369701 EthAddr:0x4Ca145A4B114ca7cde49582541c02D8EEe4C9e9B
        await heroManager.forceMintHero("0xbc9010E1985b2527fa6a73B9425C2a98C5B87866", 20010059) // Block:6369704 EthAddr:0x027e414EcDc7CAE188faE20406B23C3D1F4e0716
        await heroManager.forceMintHero("0x76d0EBF5bE3176E7D05E0681415a54b99ca8f2eA", 40020018) // Block:6369704 EthAddr:0x813074b9A3c964C51AC66b841C2577A3Ce1062F6
        await heroManager.forceMintHero("0xA4A987A50D96a7183E1D15e78f0541FD608CD8a6", 20010060) // Block:6369706 EthAddr:0xA635A54b4305d786dB7A2Cb3a1c8BC90BB15123e
        await heroManager.forceMintHero("0xD75D2f99574E3636d3F0fcb0AFeAF5203db7eE84", 40020019) // Block:6369708 EthAddr:0xC2a11A5c0Fd9bb2E1579b0E64935057D20AfF28D
        await heroManager.forceMintHero("0x5C73cBfB0A6cCcABA69B8143604a31Ab8f1989Df", 50030008) // Block:6369709 EthAddr:0xfCA91E1411BE9F288Eb5Fd8519036B55D00B5573
        await heroManager.forceMintHero("0xA8f6B5eE71b43f4350ec02DEC413c09C90894e49", 40090015) // Block:6369710 EthAddr:0x4Ca145A4B114ca7cde49582541c02D8EEe4C9e9B
        await heroManager.forceMintHero("0xb4823CAc1732c7B188EFF2E0A2cF4e3a014da054", 20010061) // Block:6369710 EthAddr:0x81D6988148ddEac8532254d4845106Fa2BdBc28E
        await heroManager.forceMintHero("0x88bA1F8951BF9E6018D2a2Ba7D703319FD919CF4", 40020020) // Block:6369714 EthAddr:0x62b8B7B7Af7CB5847Dd7335e0B6B4229CD1B7d48
        await heroManager.forceMintHero("0xa5cc9d5423DE2976104EfbeEC9841f71fb421Fc7", 20010062) // Block:6369715 EthAddr:0x4550D74cc0AC86f88AABeD20a6c1a4b59DfAb3C5
        await heroManager.forceMintHero("0xD75D2f99574E3636d3F0fcb0AFeAF5203db7eE84", 40090016) // Block:6369715 EthAddr:0xC2a11A5c0Fd9bb2E1579b0E64935057D20AfF28D
        await heroManager.forceMintHero("0xe15c888b055acDc7aFF2296136B880169F6bE1bA", 20010063) // Block:6369715 EthAddr:0x8bE0FA1C306bc74036Da7A27680C025B099AA2C3
        await heroManager.forceMintHero("0xA4A987A50D96a7183E1D15e78f0541FD608CD8a6", 40070003) // Block:6369716 EthAddr:0xA635A54b4305d786dB7A2Cb3a1c8BC90BB15123e
        await heroManager.forceMintHero("0xD75D2f99574E3636d3F0fcb0AFeAF5203db7eE84", 40040009) // Block:6369717 EthAddr:0xC2a11A5c0Fd9bb2E1579b0E64935057D20AfF28D
        await heroManager.forceMintHero("0xb9D15fDB7dFA531abd30081c15489C1fd2ac0ce5", 50030009) // Block:6369722 EthAddr:0xBcd2c48E447A45244CcEFdb232b2F7B5F86f43bD
        await heroManager.forceMintHero("0x062CAAB09CD5D113745049E085De1ce489a3b69F", 50030010) // Block:6369725 EthAddr:0x916934bb49aadCc1DA29038a7b0Be1efAF2eE1da
        await heroManager.forceMintHero("0xa5cc9d5423DE2976104EfbeEC9841f71fb421Fc7", 40020021) // Block:6369734 EthAddr:0x4550D74cc0AC86f88AABeD20a6c1a4b59DfAb3C5
        await heroManager.forceMintHero("0x79b227046c213acE610B459CfD020c6C6F9c6F2b", 20010064) // Block:6369734 EthAddr:0x4ce15B37851a4448a28899062906a02E51DEE267
        await heroManager.forceMintHero("0xbc9010E1985b2527fa6a73B9425C2a98C5B87866", 40090017) // Block:6369737 EthAddr:0x027e414EcDc7CAE188faE20406B23C3D1F4e0716
        await heroManager.forceMintHero("0xD75D2f99574E3636d3F0fcb0AFeAF5203db7eE84", 40070004) // Block:6369737 EthAddr:0xC2a11A5c0Fd9bb2E1579b0E64935057D20AfF28D
        await heroManager.forceMintHero("0x76d0EBF5bE3176E7D05E0681415a54b99ca8f2eA", 30010011) // Block:6369737 EthAddr:0x813074b9A3c964C51AC66b841C2577A3Ce1062F6
        await heroManager.forceMintHero("0xb9D15fDB7dFA531abd30081c15489C1fd2ac0ce5", 50030011) // Block:6369741 EthAddr:0xBcd2c48E447A45244CcEFdb232b2F7B5F86f43bD
        await heroManager.forceMintHero("0x79b227046c213acE610B459CfD020c6C6F9c6F2b", 30010012) // Block:6369742 EthAddr:0x4ce15B37851a4448a28899062906a02E51DEE267
        await heroManager.forceMintHero("0x5C73cBfB0A6cCcABA69B8143604a31Ab8f1989Df", 40040010) // Block:6369743 EthAddr:0xfCA91E1411BE9F288Eb5Fd8519036B55D00B5573
        await heroManager.forceMintHero("0xD75D2f99574E3636d3F0fcb0AFeAF5203db7eE84", 40030005) // Block:6369744 EthAddr:0xC2a11A5c0Fd9bb2E1579b0E64935057D20AfF28D
        await heroManager.forceMintHero("0xD75D2f99574E3636d3F0fcb0AFeAF5203db7eE84", 40050004) // Block:6369744 EthAddr:0xC2a11A5c0Fd9bb2E1579b0E64935057D20AfF28D
        await heroManager.forceMintHero("0x8d8E91c4901D5810A104F37535aAa3fb60123541", 20010065) // Block:6369744 EthAddr:0x12d2c60a3d2C20E83B59b98A8Ef9E08125d2b6Cd
        await heroManager.forceMintHero("0x062CAAB09CD5D113745049E085De1ce489a3b69F", 40010009) // Block:6369746 EthAddr:0x916934bb49aadCc1DA29038a7b0Be1efAF2eE1da
        await heroManager.forceMintHero("0x066bDebaE2130a1bbbe07A4758Ad6Db85662E7b6", 40020022) // Block:6369747 EthAddr:0x6A84D18cB29300fe6692d84ff89626491Ec59321
        await heroManager.forceMintHero("0xb9D15fDB7dFA531abd30081c15489C1fd2ac0ce5", 40090018) // Block:6369750 EthAddr:0xBcd2c48E447A45244CcEFdb232b2F7B5F86f43bD
        await heroManager.forceMintHero("0xb9D15fDB7dFA531abd30081c15489C1fd2ac0ce5", 40090019) // Block:6369761 EthAddr:0xBcd2c48E447A45244CcEFdb232b2F7B5F86f43bD
        await heroManager.forceMintHero("0x062CAAB09CD5D113745049E085De1ce489a3b69F", 40020023) // Block:6369772 EthAddr:0x916934bb49aadCc1DA29038a7b0Be1efAF2eE1da
        await heroManager.forceMintHero("0x68A4a94E611F6c92EA157f6c67B853835a28cCA9", 50050007) // Block:6369776 EthAddr:0xbd06a353f091Cf92c8Ae1cBAf3a75C7F4D685809
        await heroManager.forceMintHero("0xa392ed8cb8B423d1259D4EA22F382a2F8417f283", 40090020) // Block:6369779 EthAddr:0xa77005F4e2eaA00A02Cd96bB553E89C004f9DA31
        await heroManager.forceMintHero("0xA67a6f1D7799EfC76D7180e87A43dAc1D7B0F0cd", 20010066) // Block:6369780 EthAddr:0xf09e6E4872EA1bbb16b2705D3323A2282E3541A6
        await heroManager.forceMintHero("0x58e2f4CFCf46eBa92114D8F96935506a07171dC9", 40060007) // Block:6369783 EthAddr:0x87FC0Cdb581f84456C02F20eC1a844d95803C437
        await heroManager.forceMintHero("0xe006Bf070274732DC349e06F949DE6b1441Ef391", 20010067) // Block:6369783 EthAddr:0x255309578a5Aa7e0E30dD4Bda7A65C9Eee331a5C
        await heroManager.forceMintHero("0x3AC02b538930C7079B2Bc9bF3664612C01bF0862", 40030006) // Block:6369783 EthAddr:0xd495CE54FFd5D50c6eA01fD87D589FbB2b54834b
        await heroManager.forceMintHero("0xA4A987A50D96a7183E1D15e78f0541FD608CD8a6", 40010010) // Block:6369789 EthAddr:0xA635A54b4305d786dB7A2Cb3a1c8BC90BB15123e
        await heroManager.forceMintHero("0x58e2f4CFCf46eBa92114D8F96935506a07171dC9", 50040005) // Block:6369790 EthAddr:0x87FC0Cdb581f84456C02F20eC1a844d95803C437
        await heroManager.forceMintHero("0x5C73cBfB0A6cCcABA69B8143604a31Ab8f1989Df", 40020024) // Block:6369794 EthAddr:0xfCA91E1411BE9F288Eb5Fd8519036B55D00B5573
        await heroManager.forceMintHero("0xa392ed8cb8B423d1259D4EA22F382a2F8417f283", 40040011) // Block:6369795 EthAddr:0xa77005F4e2eaA00A02Cd96bB553E89C004f9DA31
        await heroManager.forceMintHero("0x066bDebaE2130a1bbbe07A4758Ad6Db85662E7b6", 40090021) // Block:6369799 EthAddr:0x6A84D18cB29300fe6692d84ff89626491Ec59321
        await heroManager.forceMintHero("0x6d2fCBb5f3C64DD03fCcE88CbFB0B76431D7ace5", 30010013) // Block:6369800 EthAddr:0x759dE6B9806A5F695B8FE92f58a6771fB5DB52C6
        await heroManager.forceMintHero("0x68A4a94E611F6c92EA157f6c67B853835a28cCA9", 40080006) // Block:6369800 EthAddr:0xbd06a353f091Cf92c8Ae1cBAf3a75C7F4D685809
        await heroManager.forceMintHero("0xd5CBBC88C98639C85af32804cD75a533c68Ea05E", 50050008) // Block:6369802 EthAddr:0xf498d081C814738216175451Ffc2cdc9dDE62F5C
        await heroManager.forceMintHero("0x062CAAB09CD5D113745049E085De1ce489a3b69F", 40090022) // Block:6369803 EthAddr:0x916934bb49aadCc1DA29038a7b0Be1efAF2eE1da
    });
}