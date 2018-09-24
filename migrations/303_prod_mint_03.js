let HeroManager = artifacts.require('HeroManager');

module.exports = function(deployer) {
    deployer.then(async function() {
        let heroManager = await HeroManager.deployed();

        await heroManager.forceMintHero("0x0f239BEb21C8Ba859e52D1EF2B82457EA4B4DFCd", 40030011) // Block:6370007 EthAddr:0xf7cC1cbE562Ff9072aa221951BfCA9A1bfbC2b2a
        await heroManager.forceMintHero("0xA8f6B5eE71b43f4350ec02DEC413c09C90894e49", 20010084) // Block:6370011 EthAddr:0x4Ca145A4B114ca7cde49582541c02D8EEe4C9e9B
        await heroManager.forceMintHero("0xFaB6FB596A76731A2041CaFc42A9106A6dFEABd6", 40080010) // Block:6370011 EthAddr:0x82fb29C741F6131B9290Cd579b789d10A4Ae6820
        await heroManager.forceMintHero("0xFaB6FB596A76731A2041CaFc42A9106A6dFEABd6", 40070010) // Block:6370013 EthAddr:0x82fb29C741F6131B9290Cd579b789d10A4Ae6820
        await heroManager.forceMintHero("0x300c66Df9240b91c9e99789FA90EAFd30a9a62B0", 40050008) // Block:6370014 EthAddr:0x08dD65737605b29E24F18981b4E0c5552C8eB224
        await heroManager.forceMintHero("0x0f239BEb21C8Ba859e52D1EF2B82457EA4B4DFCd", 40010019) // Block:6370016 EthAddr:0xf7cC1cbE562Ff9072aa221951BfCA9A1bfbC2b2a
        await heroManager.forceMintHero("0x6edD06A6B2c0aE45E0ccd352C6945Ac09e731879", 20010085) // Block:6370019 EthAddr:0xc139Ef14FF6138d7b4793a884656b1bc41f23C15
        await heroManager.forceMintHero("0x08414eA3248D740Fe4f2f8E03A218ABeBF7e7cA1", 20010086) // Block:6370019 EthAddr:0x25a5CF0Bb12C2cce12420e2fD34099DF506A7a88
        await heroManager.forceMintHero("0x7cA62E63dcf213622eC74dC96C0BFf997141151d", 20010087) // Block:6370020 EthAddr:0xa93b8C89d89dc5fe774141eF959A71629EefbdF9
        await heroManager.forceMintHero("0x0f239BEb21C8Ba859e52D1EF2B82457EA4B4DFCd", 40060017) // Block:6370021 EthAddr:0xf7cC1cbE562Ff9072aa221951BfCA9A1bfbC2b2a
        await heroManager.forceMintHero("0x4327B3154BbfaF75AD5f0e5cCF247E5fdF8d02ff", 40030012) // Block:6370021 EthAddr:0xE6Ac3949D1881c449F779E99194FB528aFEe3556
        await heroManager.forceMintHero("0xaf10f7c1726D4daDeee7b471089cCAd9F696baaA", 40090034) // Block:6370021 EthAddr:0x5fD794a8364198cF74C6e71F7efc1754a2641F30
        await heroManager.forceMintHero("0xa2188B72d96733B8885991E07f36220f5C3aE23B", 20010088) // Block:6370022 EthAddr:0xBeD5F0F80d9281597D40035798e878b1E906654c
        await heroManager.forceMintHero("0xA8f6B5eE71b43f4350ec02DEC413c09C90894e49", 40020042) // Block:6370025 EthAddr:0x4Ca145A4B114ca7cde49582541c02D8EEe4C9e9B
        await heroManager.forceMintHero("0x087cE69fC84B1558a1AE6E7b0e0a23D13Ad4962D", 20010089) // Block:6370025 EthAddr:0xEaC9a54305463f1Db064c2018c11EeB61Ae50842
        await heroManager.forceMintHero("0xb6385B48B837Da4021E372b8fdb63307A1b9E17c", 20010090) // Block:6370025 EthAddr:0xe52F09B2b8aF439C0A541C2a5f493FF68485e632
        await heroManager.forceMintHero("0xFaB6FB596A76731A2041CaFc42A9106A6dFEABd6", 40010020) // Block:6370026 EthAddr:0x82fb29C741F6131B9290Cd579b789d10A4Ae6820
        await heroManager.forceMintHero("0xA796c39c8d53d07E27EeDD2596f2957377d70D43", 20010091) // Block:6370026 EthAddr:0xDf6afFf5dEe99CcDC119174D94942947d6f7ba4b
        await heroManager.forceMintHero("0x0f239BEb21C8Ba859e52D1EF2B82457EA4B4DFCd", 40020043) // Block:6370033 EthAddr:0xf7cC1cbE562Ff9072aa221951BfCA9A1bfbC2b2a
        await heroManager.forceMintHero("0x669cEb4E3C3D0Ae925d17772BA405428f0B3f7E7", 50040011) // Block:6370033 EthAddr:0xb5558072255b7D505302A09E746c6B5772B4dbBB
        await heroManager.forceMintHero("0xa1B8c995Bd545c291a90Ba839D42726bA7581686", 40020044) // Block:6370039 EthAddr:0xAc43Df42Ba2d186DA57342e1B685F024dB445A22
        await heroManager.forceMintHero("0x4327B3154BbfaF75AD5f0e5cCF247E5fdF8d02ff", 40030013) // Block:6370040 EthAddr:0xE6Ac3949D1881c449F779E99194FB528aFEe3556
        await heroManager.forceMintHero("0xCFb5b8F87561e32E70980ee619ee676De7d292DF", 40090035) // Block:6370041 EthAddr:0xB1ae2E48053b0fB4aff780Fc2D925EbB55f0CC13
        await heroManager.forceMintHero("0x669cEb4E3C3D0Ae925d17772BA405428f0B3f7E7", 20010092) // Block:6370044 EthAddr:0xb5558072255b7D505302A09E746c6B5772B4dbBB
        await heroManager.forceMintHero("0xA8f6B5eE71b43f4350ec02DEC413c09C90894e49", 40060018) // Block:6370050 EthAddr:0x4Ca145A4B114ca7cde49582541c02D8EEe4C9e9B
        await heroManager.forceMintHero("0xD75D2f99574E3636d3F0fcb0AFeAF5203db7eE84", 40010021) // Block:6370050 EthAddr:0xC2a11A5c0Fd9bb2E1579b0E64935057D20AfF28D
        await heroManager.forceMintHero("0xCFb5b8F87561e32E70980ee619ee676De7d292DF", 40090036) // Block:6370055 EthAddr:0xB1ae2E48053b0fB4aff780Fc2D925EbB55f0CC13
        await heroManager.forceMintHero("0x5d798b417FFB543FcC4aa7A023a898326606c34c", 40030014) // Block:6370055 EthAddr:0x46053E2D1c77cB7015580848A811c773B31a03f0
        await heroManager.forceMintHero("0xa1B8c995Bd545c291a90Ba839D42726bA7581686", 40010022) // Block:6370058 EthAddr:0xAc43Df42Ba2d186DA57342e1B685F024dB445A22
        await heroManager.forceMintHero("0x7cA62E63dcf213622eC74dC96C0BFf997141151d", 40020045) // Block:6370059 EthAddr:0xa93b8C89d89dc5fe774141eF959A71629EefbdF9
        await heroManager.forceMintHero("0xa1B8c995Bd545c291a90Ba839D42726bA7581686", 40090037) // Block:6370064 EthAddr:0xAc43Df42Ba2d186DA57342e1B685F024dB445A22
        await heroManager.forceMintHero("0xA8f6B5eE71b43f4350ec02DEC413c09C90894e49", 40020046) // Block:6370067 EthAddr:0x4Ca145A4B114ca7cde49582541c02D8EEe4C9e9B
        await heroManager.forceMintHero("0x0f239BEb21C8Ba859e52D1EF2B82457EA4B4DFCd", 40070011) // Block:6370071 EthAddr:0xf7cC1cbE562Ff9072aa221951BfCA9A1bfbC2b2a
        await heroManager.forceMintHero("0xa1B8c995Bd545c291a90Ba839D42726bA7581686", 40040020) // Block:6370073 EthAddr:0xAc43Df42Ba2d186DA57342e1B685F024dB445A22
        await heroManager.forceMintHero("0xa1B8c995Bd545c291a90Ba839D42726bA7581686", 40020047) // Block:6370077 EthAddr:0xAc43Df42Ba2d186DA57342e1B685F024dB445A22
        await heroManager.forceMintHero("0xb7481d37F2D9585daC19E58bC2Dc5BD3796B18B6", 40060019) // Block:6370079 EthAddr:0xBdEb1139fd8ca792e7AFae6DF77d750E0f1F86c7
        await heroManager.forceMintHero("0xa1B8c995Bd545c291a90Ba839D42726bA7581686", 40060020) // Block:6370084 EthAddr:0xAc43Df42Ba2d186DA57342e1B685F024dB445A22
        await heroManager.forceMintHero("0xb7481d37F2D9585daC19E58bC2Dc5BD3796B18B6", 40010023) // Block:6370084 EthAddr:0xBdEb1139fd8ca792e7AFae6DF77d750E0f1F86c7
        await heroManager.forceMintHero("0x46689a058eb3f0553afd20140212d100805e9f3C", 20010093) // Block:6370085 EthAddr:0xBe34C0f1e16CB24c904c9C6566E3A2552611837A
        await heroManager.forceMintHero("0xc7d86Cb1e3EcA31B00f4F82Cf39a856c53DDB24F", 20010094) // Block:6370086 EthAddr:0x81d70658A722aF07758EfDaa174D477a7418b327
        await heroManager.forceMintHero("0x3AC02b538930C7079B2Bc9bF3664612C01bF0862", 40050009) // Block:6370086 EthAddr:0xd495CE54FFd5D50c6eA01fD87D589FbB2b54834b
        await heroManager.forceMintHero("0x50986f1E8aae8098924fB42c6786bB57d1210468", 20010095) // Block:6370087 EthAddr:0x5F9338166cd3F311ACcC67cA29cd102042e10788
        await heroManager.forceMintHero("0xb7481d37F2D9585daC19E58bC2Dc5BD3796B18B6", 40070012) // Block:6370091 EthAddr:0xBdEb1139fd8ca792e7AFae6DF77d750E0f1F86c7
        await heroManager.forceMintHero("0xA796c39c8d53d07E27EeDD2596f2957377d70D43", 50040012) // Block:6370091 EthAddr:0xDf6afFf5dEe99CcDC119174D94942947d6f7ba4b
        await heroManager.forceMintHero("0xd193C7f1F93462EE0aE8E8e64Ba10C9C82a56229", 20010096) // Block:6370091 EthAddr:0x264cbD2979105B4fc597206F5F90cA55CD63705D
        await heroManager.forceMintHero("0xa1B8c995Bd545c291a90Ba839D42726bA7581686", 20010097) // Block:6370093 EthAddr:0xAc43Df42Ba2d186DA57342e1B685F024dB445A22
        await heroManager.forceMintHero("0x50986f1E8aae8098924fB42c6786bB57d1210468", 50010003) // Block:6370096 EthAddr:0x5F9338166cd3F311ACcC67cA29cd102042e10788
        await heroManager.forceMintHero("0xb7481d37F2D9585daC19E58bC2Dc5BD3796B18B6", 40040021) // Block:6370098 EthAddr:0xBdEb1139fd8ca792e7AFae6DF77d750E0f1F86c7
        await heroManager.forceMintHero("0xd5CBBC88C98639C85af32804cD75a533c68Ea05E", 40050010) // Block:6370105 EthAddr:0xf498d081C814738216175451Ffc2cdc9dDE62F5C
        await heroManager.forceMintHero("0xa1B8c995Bd545c291a90Ba839D42726bA7581686", 40080011) // Block:6370109 EthAddr:0xAc43Df42Ba2d186DA57342e1B685F024dB445A22
        await heroManager.forceMintHero("0xa1B8c995Bd545c291a90Ba839D42726bA7581686", 50030014) // Block:6370111 EthAddr:0xAc43Df42Ba2d186DA57342e1B685F024dB445A22
        await heroManager.forceMintHero("0x08414eA3248D740Fe4f2f8E03A218ABeBF7e7cA1", 40020048) // Block:6370112 EthAddr:0x25a5CF0Bb12C2cce12420e2fD34099DF506A7a88
        await heroManager.forceMintHero("0x3AC02b538930C7079B2Bc9bF3664612C01bF0862", 20010098) // Block:6370115 EthAddr:0xd495CE54FFd5D50c6eA01fD87D589FbB2b54834b
        await heroManager.forceMintHero("0x47eaA04c9Aa1725E4cF4Efd54363A668FeBB3FD9", 50050013) // Block:6370117 EthAddr:0xCD6fB0F2bf2476E43219E5616709Adc58360A8Da
        await heroManager.forceMintHero("0xb7481d37F2D9585daC19E58bC2Dc5BD3796B18B6", 20010099) // Block:6370117 EthAddr:0xBdEb1139fd8ca792e7AFae6DF77d750E0f1F86c7
        await heroManager.forceMintHero("0xa1B8c995Bd545c291a90Ba839D42726bA7581686", 40030015) // Block:6370124 EthAddr:0xAc43Df42Ba2d186DA57342e1B685F024dB445A22
        await heroManager.forceMintHero("0xa1B8c995Bd545c291a90Ba839D42726bA7581686", 40050011) // Block:6370129 EthAddr:0xAc43Df42Ba2d186DA57342e1B685F024dB445A22
        await heroManager.forceMintHero("0x8f1Ed3d7a3759B3D1098ACe15db170365D6ee2da", 40070013) // Block:6370129 EthAddr:0xccB82218c6F82a2B750Cf0D65e21AE6eAE14070c
        await heroManager.forceMintHero("0x6edD06A6B2c0aE45E0ccd352C6945Ac09e731879", 50010004) // Block:6370129 EthAddr:0xc139Ef14FF6138d7b4793a884656b1bc41f23C15
        await heroManager.forceMintHero("0x21E45E5926cC6A00672d8EBECBF62208688f12c6", 40020049) // Block:6370129 EthAddr:0x1f1073cC8a88245b2BF1AF6e6c64601E809f4e1e
        await heroManager.forceMintHero("0xd193C7f1F93462EE0aE8E8e64Ba10C9C82a56229", 40010024) // Block:6370130 EthAddr:0x264cbD2979105B4fc597206F5F90cA55CD63705D
        await heroManager.forceMintHero("0xd193C7f1F93462EE0aE8E8e64Ba10C9C82a56229", 40040022) // Block:6370139 EthAddr:0x264cbD2979105B4fc597206F5F90cA55CD63705D
        await heroManager.forceMintHero("0x5d798b417FFB543FcC4aa7A023a898326606c34c", 40020050) // Block:6370143 EthAddr:0x46053E2D1c77cB7015580848A811c773B31a03f0
        await heroManager.forceMintHero("0xd88582fAD885f51b42F08C4d4D9E4A3Be8b9C2c1", 20010100) // Block:6370143 EthAddr:0x6ea9637c53924C4E2dC7B039ECa8d646F20cBdee
        await heroManager.forceMintHero("0xa1B8c995Bd545c291a90Ba839D42726bA7581686", 40070014) // Block:6370144 EthAddr:0xAc43Df42Ba2d186DA57342e1B685F024dB445A22
        await heroManager.forceMintHero("0xd193C7f1F93462EE0aE8E8e64Ba10C9C82a56229", 40020051) // Block:6370147 EthAddr:0x264cbD2979105B4fc597206F5F90cA55CD63705D
        await heroManager.forceMintHero("0x98a9640fA6dd86d2bA64B62D7502dcb2c974cB19", 40090038) // Block:6370148 EthAddr:0x2CdBef1Af0DA1f7a67227DED93cC2cA5fe2A223E
        await heroManager.forceMintHero("0xa1B8c995Bd545c291a90Ba839D42726bA7581686", 40020052) // Block:6370154 EthAddr:0xAc43Df42Ba2d186DA57342e1B685F024dB445A22
        await heroManager.forceMintHero("0x21E45E5926cC6A00672d8EBECBF62208688f12c6", 40060021) // Block:6370166 EthAddr:0x1f1073cC8a88245b2BF1AF6e6c64601E809f4e1e
        await heroManager.forceMintHero("0x2269AD6E88a093C4D5EDdeb6716a7082b588ADcf", 40040023) // Block:6370167 EthAddr:0xd8B7fC1700BD55D1b96e3c1d001e23380E2d3A8B
        await heroManager.forceMintHero("0x58e2f4CFCf46eBa92114D8F96935506a07171dC9", 40010025) // Block:6370187 EthAddr:0x87FC0Cdb581f84456C02F20eC1a844d95803C437
        await heroManager.forceMintHero("0x58e2f4CFCf46eBa92114D8F96935506a07171dC9", 40040024) // Block:6370187 EthAddr:0x87FC0Cdb581f84456C02F20eC1a844d95803C437
        await heroManager.forceMintHero("0xD75D2f99574E3636d3F0fcb0AFeAF5203db7eE84", 40040025) // Block:6370190 EthAddr:0xC2a11A5c0Fd9bb2E1579b0E64935057D20AfF28D
        await heroManager.forceMintHero("0x58e2f4CFCf46eBa92114D8F96935506a07171dC9", 40080012) // Block:6370191 EthAddr:0x87FC0Cdb581f84456C02F20eC1a844d95803C437
        await heroManager.forceMintHero("0x58e2f4CFCf46eBa92114D8F96935506a07171dC9", 40020053) // Block:6370193 EthAddr:0x87FC0Cdb581f84456C02F20eC1a844d95803C437
        await heroManager.forceMintHero("0xd193C7f1F93462EE0aE8E8e64Ba10C9C82a56229", 40020054) // Block:6370200 EthAddr:0x264cbD2979105B4fc597206F5F90cA55CD63705D
        await heroManager.forceMintHero("0x58e2f4CFCf46eBa92114D8F96935506a07171dC9", 40030016) // Block:6370206 EthAddr:0x87FC0Cdb581f84456C02F20eC1a844d95803C437
        await heroManager.forceMintHero("0x58e2f4CFCf46eBa92114D8F96935506a07171dC9", 40050012) // Block:6370208 EthAddr:0x87FC0Cdb581f84456C02F20eC1a844d95803C437
        await heroManager.forceMintHero("0x752A91F62890012Ab0b08Ec8B6cAD5E951Fb4340", 20010101) // Block:6370209 EthAddr:0xD0CA0fE6C4fA002a05F8890eFC700c084d7c3D90
        await heroManager.forceMintHero("0x8f1Ed3d7a3759B3D1098ACe15db170365D6ee2da", 20010102) // Block:6370209 EthAddr:0xccB82218c6F82a2B750Cf0D65e21AE6eAE14070c
        await heroManager.forceMintHero("0x58e2f4CFCf46eBa92114D8F96935506a07171dC9", 30010017) // Block:6370211 EthAddr:0x87FC0Cdb581f84456C02F20eC1a844d95803C437
        await heroManager.forceMintHero("0x58e2f4CFCf46eBa92114D8F96935506a07171dC9", 40090039) // Block:6370214 EthAddr:0x87FC0Cdb581f84456C02F20eC1a844d95803C437
        await heroManager.forceMintHero("0x58e2f4CFCf46eBa92114D8F96935506a07171dC9", 40070015) // Block:6370216 EthAddr:0x87FC0Cdb581f84456C02F20eC1a844d95803C437
        await heroManager.forceMintHero("0xE43a734033d04d555023a3af2216bd35B0039414", 50020003) // Block:6370216 EthAddr:0xe313839f9A1F18B94BcD308914fB070FCAA6c416
        await heroManager.forceMintHero("0xF6478bBF254d51c909a3f66ded5565d9c06D0ad0", 40020055) // Block:6370218 EthAddr:0x119426c38390762c35e8741227E518282B91EABA
        await heroManager.forceMintHero("0xF6478bBF254d51c909a3f66ded5565d9c06D0ad0", 20010103) // Block:6370224 EthAddr:0x119426c38390762c35e8741227E518282B91EABA
        await heroManager.forceMintHero("0xb458276BF31D26562A8fe7881d75e9a5aF9E82Fc", 40010026) // Block:6370225 EthAddr:0x809255cCE5Baf7a5038f3F3066873b730b19bF93
        await heroManager.forceMintHero("0xA2cfFDCb23DC1014E2C7e5Cea2635F31Fa533371", 20010104) // Block:6370229 EthAddr:0xdA3d5d67a206e35ab08aa25015BcA191584a5eeD
        await heroManager.forceMintHero("0x6918eC06618542Dd11d0f1416D59cA81585672A1", 20010105) // Block:6370233 EthAddr:0x71Acb3F17e6C928Dc6DC8B2fF4DB684584c8B2Fd
        await heroManager.forceMintHero("0xA4A987A50D96a7183E1D15e78f0541FD608CD8a6", 40050013) // Block:6370238 EthAddr:0xA635A54b4305d786dB7A2Cb3a1c8BC90BB15123e
        await heroManager.forceMintHero("0x3b107eba53c13d6caD7e338a6bc9f6436eb41559", 40070016) // Block:6370245 EthAddr:0x40c9afd96646dF172b6fA31211Fb51bf5144081e
        await heroManager.forceMintHero("0xCBb25cCF353a16A32FfcCFD3954b5Bf959307453", 20010106) // Block:6370252 EthAddr:0x9F1BeE52A02890fEC054D35476efA97AC4870703
        await heroManager.forceMintHero("0x98a9640fA6dd86d2bA64B62D7502dcb2c974cB19", 40020056) // Block:6370252 EthAddr:0x2CdBef1Af0DA1f7a67227DED93cC2cA5fe2A223E
        await heroManager.forceMintHero("0xA1F2e8EfF2f36173aeF50e7E5E009F0BD811fE9C", 40010027) // Block:6370259 EthAddr:0x708c0F87E1B3163e5980A4EF1C8A2EF87C158083
        await heroManager.forceMintHero("0x50986f1E8aae8098924fB42c6786bB57d1210468", 40020057) // Block:6370261 EthAddr:0x5F9338166cd3F311ACcC67cA29cd102042e10788
        await heroManager.forceMintHero("0xd88582fAD885f51b42F08C4d4D9E4A3Be8b9C2c1", 40030017) // Block:6370261 EthAddr:0x6ea9637c53924C4E2dC7B039ECa8d646F20cBdee
        await heroManager.forceMintHero("0xd88582fAD885f51b42F08C4d4D9E4A3Be8b9C2c1", 30010018) // Block:6370262 EthAddr:0x6ea9637c53924C4E2dC7B039ECa8d646F20cBdee
        await heroManager.forceMintHero("0x50986f1E8aae8098924fB42c6786bB57d1210468", 40090040) // Block:6370275 EthAddr:0x5F9338166cd3F311ACcC67cA29cd102042e10788
        await heroManager.forceMintHero("0xA1F2e8EfF2f36173aeF50e7E5E009F0BD811fE9C", 20010107) // Block:6370278 EthAddr:0x708c0F87E1B3163e5980A4EF1C8A2EF87C158083
        await heroManager.forceMintHero("0x00708B0Fb1e8C1cC5941A0c7bf4C437711422c08", 40010028) // Block:6370280 EthAddr:0xfa06a45FB29129727b59095c609850b302ebb777
    });
}