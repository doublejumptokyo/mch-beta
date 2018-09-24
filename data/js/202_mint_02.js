let HeroManager = artifacts.require('HeroManager');

module.exports = function(deployer) {
    deployer.then(async function() {
        let heroManager = await HeroManager.deployed();

        await heroManager.mintHero("0x348CCE63C8478CAdab6Cc5fe16A560256c6DDB97", 30010014) // Block:6369804 EthAddr:0x07b99B5A4093bE2C4465D55FcAAD50a3cb61447a
        await heroManager.mintHero("0x8b56B2b0AEE796849eAD21255267503C36254643", 20010068) // Block:6369804 EthAddr:0xd7436A5d7AabaDE2cdBA5FA9489Afd15af2E86EA
        await heroManager.mintHero("0x9F4A17EeF718043f10bc168DE7B309CeE66562B5", 40020025) // Block:6369805 EthAddr:0xd8B7fC1700BD55D1b96e3c1d001e23380E2d3A8B
        await heroManager.mintHero("0x3EC78576876696A2e117fA919242a0C8045a97Fc", 40010011) // Block:6369809 EthAddr:0x40c9afd96646dF172b6fA31211Fb51bf5144081e
        await heroManager.mintHero("0x63931A350B322DCdCeff2686d880Bf0ac9E12ab7", 20010069) // Block:6369809 EthAddr:0xBe21A1ccC576F2978F33227d302e3123843112F0
        await heroManager.mintHero("0x0f549A13ad4925A491f01d31CEa267549CF4ac97", 40090023) // Block:6369811 EthAddr:0x558F50B2F2d0FcfA2a0D487D316323af725e1767
        await heroManager.mintHero("0xfBc293c1382D9096f8C2f9aCB0a1406B1747D93E", 20010070) // Block:6369816 EthAddr:0x08dD65737605b29E24F18981b4E0c5552C8eB224
        await heroManager.mintHero("0x8b56B2b0AEE796849eAD21255267503C36254643", 40020026) // Block:6369816 EthAddr:0xd7436A5d7AabaDE2cdBA5FA9489Afd15af2E86EA
        await heroManager.mintHero("0x63931A350B322DCdCeff2686d880Bf0ac9E12ab7", 50050009) // Block:6369825 EthAddr:0xBe21A1ccC576F2978F33227d302e3123843112F0
        await heroManager.mintHero("0x9F4A17EeF718043f10bc168DE7B309CeE66562B5", 40090024) // Block:6369826 EthAddr:0xd8B7fC1700BD55D1b96e3c1d001e23380E2d3A8B
        await heroManager.mintHero("0x40AcD96D12547C3E8c1232187F46153fB507257A", 40020027) // Block:6369826 EthAddr:0xe313839f9A1F18B94BcD308914fB070FCAA6c416
        await heroManager.mintHero("0xa1549b0C7c586cC5ceB6B7a90B8a6862410e3AF7", 20010071) // Block:6369829 EthAddr:0x66Cead289B5F76fE61844b4010d3E162DBbbd0a4
        await heroManager.mintHero("0xfBc293c1382D9096f8C2f9aCB0a1406B1747D93E", 40020028) // Block:6369832 EthAddr:0x08dD65737605b29E24F18981b4E0c5552C8eB224
        await heroManager.mintHero("0x63931A350B322DCdCeff2686d880Bf0ac9E12ab7", 40090025) // Block:6369837 EthAddr:0xBe21A1ccC576F2978F33227d302e3123843112F0
        await heroManager.mintHero("0x0Cc4bd6EaeBB0c397E0F90533F275D65468b6260", 40010012) // Block:6369839 EthAddr:0x4ce15B37851a4448a28899062906a02E51DEE267
        await heroManager.mintHero("0x63931A350B322DCdCeff2686d880Bf0ac9E12ab7", 40060008) // Block:6369840 EthAddr:0xBe21A1ccC576F2978F33227d302e3123843112F0
        await heroManager.mintHero("0xd2d8EDd09c4d4493166EFFf2C9355e326eEc97d5", 30010015) // Block:6369841 EthAddr:0x571F7c00c09D34977b338654C9d1B3c158099b83
        await heroManager.mintHero("0x86b4b7e1fa27eb97ba8F02dAfa3eC957aDbf3603", 40020029) // Block:6369843 EthAddr:0xB130168eC63Ca7e30A8f8C7268aA56E4d6730Fb5
        await heroManager.mintHero("0x63931A350B322DCdCeff2686d880Bf0ac9E12ab7", 40040012) // Block:6369844 EthAddr:0xBe21A1ccC576F2978F33227d302e3123843112F0
        await heroManager.mintHero("0xa1549b0C7c586cC5ceB6B7a90B8a6862410e3AF7", 40030007) // Block:6369846 EthAddr:0x66Cead289B5F76fE61844b4010d3E162DBbbd0a4
        await heroManager.mintHero("0xEc9AaAd5b4421645efbdEC1c90985c062485e3D5", 40010013) // Block:6369847 EthAddr:0xbd06a353f091Cf92c8Ae1cBAf3a75C7F4D685809
        await heroManager.mintHero("0x63931A350B322DCdCeff2686d880Bf0ac9E12ab7", 40020030) // Block:6369851 EthAddr:0xBe21A1ccC576F2978F33227d302e3123843112F0
        await heroManager.mintHero("0x0C0E4257f882bc22bE86aB74fc29413DB40923e3", 40050005) // Block:6369853 EthAddr:0xfCA91E1411BE9F288Eb5Fd8519036B55D00B5573
        await heroManager.mintHero("0xfBc293c1382D9096f8C2f9aCB0a1406B1747D93E", 40090026) // Block:6369854 EthAddr:0x08dD65737605b29E24F18981b4E0c5552C8eB224
        await heroManager.mintHero("0x88d532f5FA624F4AE81928e6c483a6D1BB7f7558", 40020031) // Block:6369856 EthAddr:0x916934bb49aadCc1DA29038a7b0Be1efAF2eE1da
        await heroManager.mintHero("0xfBc293c1382D9096f8C2f9aCB0a1406B1747D93E", 40020032) // Block:6369860 EthAddr:0x08dD65737605b29E24F18981b4E0c5552C8eB224
        await heroManager.mintHero("0x88d532f5FA624F4AE81928e6c483a6D1BB7f7558", 40090027) // Block:6369864 EthAddr:0x916934bb49aadCc1DA29038a7b0Be1efAF2eE1da
        await heroManager.mintHero("0x63931A350B322DCdCeff2686d880Bf0ac9E12ab7", 40070005) // Block:6369865 EthAddr:0xBe21A1ccC576F2978F33227d302e3123843112F0
        await heroManager.mintHero("0xfBc293c1382D9096f8C2f9aCB0a1406B1747D93E", 40040013) // Block:6369866 EthAddr:0x08dD65737605b29E24F18981b4E0c5552C8eB224
        await heroManager.mintHero("0xCD24aEbab023610db1abdC806c7522C47b047a82", 50050010) // Block:6369870 EthAddr:0x255309578a5Aa7e0E30dD4Bda7A65C9Eee331a5C
        await heroManager.mintHero("0x63931A350B322DCdCeff2686d880Bf0ac9E12ab7", 40050006) // Block:6369873 EthAddr:0xBe21A1ccC576F2978F33227d302e3123843112F0
        await heroManager.mintHero("0x52Cf32E8Ecf4512A79920517737aA181F232D24C", 20010072) // Block:6369873 EthAddr:0x066d0782Aa1003eb6EEd7a34d6df18CbB03933AB
        await heroManager.mintHero("0x63931A350B322DCdCeff2686d880Bf0ac9E12ab7", 40010014) // Block:6369876 EthAddr:0xBe21A1ccC576F2978F33227d302e3123843112F0
        await heroManager.mintHero("0xfBc293c1382D9096f8C2f9aCB0a1406B1747D93E", 40040014) // Block:6369877 EthAddr:0x08dD65737605b29E24F18981b4E0c5552C8eB224
        await heroManager.mintHero("0xF1881265f6b37146DFC1e40B1C5BC1e5e55Ba8fB", 20010073) // Block:6369877 EthAddr:0x65f899E41a38724Dc1B857Ed114c9820afFB462C
        await heroManager.mintHero("0x63931A350B322DCdCeff2686d880Bf0ac9E12ab7", 40080007) // Block:6369880 EthAddr:0xBe21A1ccC576F2978F33227d302e3123843112F0
        await heroManager.mintHero("0xfBc293c1382D9096f8C2f9aCB0a1406B1747D93E", 40040015) // Block:6369880 EthAddr:0x08dD65737605b29E24F18981b4E0c5552C8eB224
        await heroManager.mintHero("0x97083370bEf410D1c3C520C47277995eDd0A3E72", 20010074) // Block:6369886 EthAddr:0x1f1073cC8a88245b2BF1AF6e6c64601E809f4e1e
        await heroManager.mintHero("0x0f549A13ad4925A491f01d31CEa267549CF4ac97", 40020033) // Block:6369887 EthAddr:0x558F50B2F2d0FcfA2a0D487D316323af725e1767
        await heroManager.mintHero("0x3F9CeE7f6888cFf3e6F154ca2D909736222b50E8", 20010075) // Block:6369887 EthAddr:0xEdf179c555547d25DA84076429d2f94c38B99BFe
        await heroManager.mintHero("0xC835C6e19a923A3fC2E38C1fd327D5dcb7D5730F", 20010076) // Block:6369887 EthAddr:0x2CdBef1Af0DA1f7a67227DED93cC2cA5fe2A223E
        await heroManager.mintHero("0x63931A350B322DCdCeff2686d880Bf0ac9E12ab7", 40030008) // Block:6369890 EthAddr:0xBe21A1ccC576F2978F33227d302e3123843112F0
        await heroManager.mintHero("0x52Cf32E8Ecf4512A79920517737aA181F232D24C", 40090028) // Block:6369890 EthAddr:0x066d0782Aa1003eb6EEd7a34d6df18CbB03933AB
        await heroManager.mintHero("0xfBc293c1382D9096f8C2f9aCB0a1406B1747D93E", 40060009) // Block:6369896 EthAddr:0x08dD65737605b29E24F18981b4E0c5552C8eB224
        await heroManager.mintHero("0x63931A350B322DCdCeff2686d880Bf0ac9E12ab7", 40090029) // Block:6369904 EthAddr:0xBe21A1ccC576F2978F33227d302e3123843112F0
        await heroManager.mintHero("0xfBc293c1382D9096f8C2f9aCB0a1406B1747D93E", 40060010) // Block:6369907 EthAddr:0x08dD65737605b29E24F18981b4E0c5552C8eB224
        await heroManager.mintHero("0x24462B84Ad236501De22c4eCbA4b31384921818D", 40070006) // Block:6369907 EthAddr:0xf498d081C814738216175451Ffc2cdc9dDE62F5C
        await heroManager.mintHero("0x093F6C6F79eaE69c35e9e93C026b90bDf4263f8B", 20010077) // Block:6369907 EthAddr:0xBf4E60a40083b8c1C27b6F8C93f000f2B35764F6
        await heroManager.mintHero("0x63931A350B322DCdCeff2686d880Bf0ac9E12ab7", 40040016) // Block:6369908 EthAddr:0xBe21A1ccC576F2978F33227d302e3123843112F0
        await heroManager.mintHero("0x52Cf32E8Ecf4512A79920517737aA181F232D24C", 50030012) // Block:6369908 EthAddr:0x066d0782Aa1003eb6EEd7a34d6df18CbB03933AB
        await heroManager.mintHero("0x8704f5F2F6Bdb3E3c53ADFA9d76575b0A204133a", 20010078) // Block:6369908 EthAddr:0x1300F54fB9bC2563Fb9ce0f47B9839842D9a3741
        await heroManager.mintHero("0x5bb0251B352ad935A904Ca9778c2DC95382aD62f", 50040006) // Block:6369911 EthAddr:0xB1ae2E48053b0fB4aff780Fc2D925EbB55f0CC13
        await heroManager.mintHero("0xfBc293c1382D9096f8C2f9aCB0a1406B1747D93E", 40070007) // Block:6369913 EthAddr:0x08dD65737605b29E24F18981b4E0c5552C8eB224
        await heroManager.mintHero("0x63931A350B322DCdCeff2686d880Bf0ac9E12ab7", 40040017) // Block:6369914 EthAddr:0xBe21A1ccC576F2978F33227d302e3123843112F0
        await heroManager.mintHero("0x63931A350B322DCdCeff2686d880Bf0ac9E12ab7", 40010015) // Block:6369919 EthAddr:0xBe21A1ccC576F2978F33227d302e3123843112F0
        await heroManager.mintHero("0xfBc293c1382D9096f8C2f9aCB0a1406B1747D93E", 40070008) // Block:6369925 EthAddr:0x08dD65737605b29E24F18981b4E0c5552C8eB224
        await heroManager.mintHero("0x63931A350B322DCdCeff2686d880Bf0ac9E12ab7", 40060011) // Block:6369927 EthAddr:0xBe21A1ccC576F2978F33227d302e3123843112F0
        await heroManager.mintHero("0x2Fb54fdf948FADA0b0e5F14cA417C4F145Ef8923", 30010016) // Block:6369927 EthAddr:0x4550D74cc0AC86f88AABeD20a6c1a4b59DfAb3C5
        await heroManager.mintHero("0x88d532f5FA624F4AE81928e6c483a6D1BB7f7558", 20010079) // Block:6369928 EthAddr:0x916934bb49aadCc1DA29038a7b0Be1efAF2eE1da
        await heroManager.mintHero("0xEaAeb932fa13691Eb9D868BCf5599dfdD2184D4b", 50030013) // Block:6369931 EthAddr:0xC42EB96867Fa64fa764089Db1b071F45Eb629B10
        await heroManager.mintHero("0x5bb0251B352ad935A904Ca9778c2DC95382aD62f", 40010016) // Block:6369937 EthAddr:0xB1ae2E48053b0fB4aff780Fc2D925EbB55f0CC13
        await heroManager.mintHero("0xEaAeb932fa13691Eb9D868BCf5599dfdD2184D4b", 50010002) // Block:6369938 EthAddr:0xC42EB96867Fa64fa764089Db1b071F45Eb629B10
        await heroManager.mintHero("0xba886e14dDD487475894cBa9f42437eafDE5337B", 20010080) // Block:6369942 EthAddr:0xB007f748f2223E205483d80a3b634bFD5268A504
        await heroManager.mintHero("0xEaAeb932fa13691Eb9D868BCf5599dfdD2184D4b", 50020002) // Block:6369943 EthAddr:0xC42EB96867Fa64fa764089Db1b071F45Eb629B10
        await heroManager.mintHero("0x88d532f5FA624F4AE81928e6c483a6D1BB7f7558", 40060012) // Block:6369945 EthAddr:0x916934bb49aadCc1DA29038a7b0Be1efAF2eE1da
        await heroManager.mintHero("0x5bb0251B352ad935A904Ca9778c2DC95382aD62f", 50050011) // Block:6369945 EthAddr:0xB1ae2E48053b0fB4aff780Fc2D925EbB55f0CC13
        await heroManager.mintHero("0xEaAeb932fa13691Eb9D868BCf5599dfdD2184D4b", 50040007) // Block:6369948 EthAddr:0xC42EB96867Fa64fa764089Db1b071F45Eb629B10
        await heroManager.mintHero("0xD71b57E1338cd7f8e47139b84e3FF195DD09edcE", 40040018) // Block:6369949 EthAddr:0x759dE6B9806A5F695B8FE92f58a6771fB5DB52C6
        await heroManager.mintHero("0xfBc293c1382D9096f8C2f9aCB0a1406B1747D93E", 40020034) // Block:6369951 EthAddr:0x08dD65737605b29E24F18981b4E0c5552C8eB224
        await heroManager.mintHero("0x5bb0251B352ad935A904Ca9778c2DC95382aD62f", 40030009) // Block:6369953 EthAddr:0xB1ae2E48053b0fB4aff780Fc2D925EbB55f0CC13
        await heroManager.mintHero("0x903E1484E30ecEa5e06f0f5EAbd135559b2215E1", 40080008) // Block:6369955 EthAddr:0xC2a11A5c0Fd9bb2E1579b0E64935057D20AfF28D
        await heroManager.mintHero("0xfBc293c1382D9096f8C2f9aCB0a1406B1747D93E", 40020035) // Block:6369957 EthAddr:0x08dD65737605b29E24F18981b4E0c5552C8eB224
        await heroManager.mintHero("0x0Cc4bd6EaeBB0c397E0F90533F275D65468b6260", 40090030) // Block:6369961 EthAddr:0x4ce15B37851a4448a28899062906a02E51DEE267
        await heroManager.mintHero("0x903E1484E30ecEa5e06f0f5EAbd135559b2215E1", 40060013) // Block:6369963 EthAddr:0xC2a11A5c0Fd9bb2E1579b0E64935057D20AfF28D
        await heroManager.mintHero("0xfBc293c1382D9096f8C2f9aCB0a1406B1747D93E", 40010017) // Block:6369964 EthAddr:0x08dD65737605b29E24F18981b4E0c5552C8eB224
        await heroManager.mintHero("0x9F28fcE9e16D1BDc880386A211d7dbc5960E85E0", 50040008) // Block:6369968 EthAddr:0xf7cC1cbE562Ff9072aa221951BfCA9A1bfbC2b2a
        await heroManager.mintHero("0xfBc293c1382D9096f8C2f9aCB0a1406B1747D93E", 40010018) // Block:6369969 EthAddr:0x08dD65737605b29E24F18981b4E0c5552C8eB224
        await heroManager.mintHero("0x52Cf32E8Ecf4512A79920517737aA181F232D24C", 40020036) // Block:6369970 EthAddr:0x066d0782Aa1003eb6EEd7a34d6df18CbB03933AB
        await heroManager.mintHero("0xD71b57E1338cd7f8e47139b84e3FF195DD09edcE", 40030010) // Block:6369972 EthAddr:0x759dE6B9806A5F695B8FE92f58a6771fB5DB52C6
        await heroManager.mintHero("0x9F28fcE9e16D1BDc880386A211d7dbc5960E85E0", 40020037) // Block:6369975 EthAddr:0xf7cC1cbE562Ff9072aa221951BfCA9A1bfbC2b2a
        await heroManager.mintHero("0xfBc293c1382D9096f8C2f9aCB0a1406B1747D93E", 40090031) // Block:6369975 EthAddr:0x08dD65737605b29E24F18981b4E0c5552C8eB224
        await heroManager.mintHero("0xD71b57E1338cd7f8e47139b84e3FF195DD09edcE", 40070009) // Block:6369977 EthAddr:0x759dE6B9806A5F695B8FE92f58a6771fB5DB52C6
        await heroManager.mintHero("0xfBc293c1382D9096f8C2f9aCB0a1406B1747D93E", 40090032) // Block:6369980 EthAddr:0x08dD65737605b29E24F18981b4E0c5552C8eB224
        await heroManager.mintHero("0x9e524ECa91F080751bBB5115De5d04253001F28E", 50040009) // Block:6369981 EthAddr:0xA7B2D5cB80849C0e9D82e983a54da4f9403ED871
        await heroManager.mintHero("0x9F4A17EeF718043f10bc168DE7B309CeE66562B5", 40060014) // Block:6369982 EthAddr:0xd8B7fC1700BD55D1b96e3c1d001e23380E2d3A8B
        await heroManager.mintHero("0x1dBDc23c24DcFE1a1EE4FC961aec7c9c07c453d1", 20010081) // Block:6369982 EthAddr:0x7488C0cd409F9D5Ea1E7c4D5C5b58a9178c55af0
        await heroManager.mintHero("0x52Cf32E8Ecf4512A79920517737aA181F232D24C", 40020038) // Block:6369982 EthAddr:0x066d0782Aa1003eb6EEd7a34d6df18CbB03933AB
        await heroManager.mintHero("0xD71b57E1338cd7f8e47139b84e3FF195DD09edcE", 40050007) // Block:6369984 EthAddr:0x759dE6B9806A5F695B8FE92f58a6771fB5DB52C6
        await heroManager.mintHero("0x9e524ECa91F080751bBB5115De5d04253001F28E", 40090033) // Block:6369986 EthAddr:0xA7B2D5cB80849C0e9D82e983a54da4f9403ED871
        await heroManager.mintHero("0xD71b57E1338cd7f8e47139b84e3FF195DD09edcE", 40080009) // Block:6369988 EthAddr:0x759dE6B9806A5F695B8FE92f58a6771fB5DB52C6
        await heroManager.mintHero("0x9e524ECa91F080751bBB5115De5d04253001F28E", 40020039) // Block:6369989 EthAddr:0xA7B2D5cB80849C0e9D82e983a54da4f9403ED871
        await heroManager.mintHero("0x35825a1a9Ca9F21F5C073344D39848bC5e35A316", 50040010) // Block:6369989 EthAddr:0xE6Ac3949D1881c449F779E99194FB528aFEe3556
        await heroManager.mintHero("0x35825a1a9Ca9F21F5C073344D39848bC5e35A316", 40020040) // Block:6369997 EthAddr:0xE6Ac3949D1881c449F779E99194FB528aFEe3556
        await heroManager.mintHero("0x1b2059D9e3F656D5FF02116a0944A545A171af0C", 20010082) // Block:6369997 EthAddr:0x46053E2D1c77cB7015580848A811c773B31a03f0
        await heroManager.mintHero("0x9e524ECa91F080751bBB5115De5d04253001F28E", 40060015) // Block:6369998 EthAddr:0xA7B2D5cB80849C0e9D82e983a54da4f9403ED871
        await heroManager.mintHero("0x1b2059D9e3F656D5FF02116a0944A545A171af0C", 50050012) // Block:6370000 EthAddr:0x46053E2D1c77cB7015580848A811c773B31a03f0
        await heroManager.mintHero("0x9F28fcE9e16D1BDc880386A211d7dbc5960E85E0", 20010083) // Block:6370004 EthAddr:0xf7cC1cbE562Ff9072aa221951BfCA9A1bfbC2b2a
        await heroManager.mintHero("0x9F28fcE9e16D1BDc880386A211d7dbc5960E85E0", 40040019) // Block:6370004 EthAddr:0xf7cC1cbE562Ff9072aa221951BfCA9A1bfbC2b2a
        await heroManager.mintHero("0x52Cf32E8Ecf4512A79920517737aA181F232D24C", 40060016) // Block:6370005 EthAddr:0x066d0782Aa1003eb6EEd7a34d6df18CbB03933AB
        await heroManager.mintHero("0x9e524ECa91F080751bBB5115De5d04253001F28E", 40020041) // Block:6370006 EthAddr:0xA7B2D5cB80849C0e9D82e983a54da4f9403ED871
    });
}