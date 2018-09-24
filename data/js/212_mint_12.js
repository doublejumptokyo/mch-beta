let HeroManager = artifacts.require('HeroManager');

module.exports = function(deployer) {
    deployer.then(async function() {
        let heroManager = await HeroManager.deployed();

        await heroManager.forceMintHero("0x9E2B3f6823D2a66feFe1E6c040Ee4222213Ebc9c", 20010377) // Block:6383519 EthAddr:0x490207484c53Be012a639992D5912AF937e54f4d
        await heroManager.forceMintHero("0xFc5F763a4f3200995f127b57CEB59a365b408d1d", 20010378) // Block:6383530 EthAddr:0x39af810846Fd15e6eE1160CA363757480C8C9AAc
        await heroManager.forceMintHero("0x355720D1a3667c181985Bb58506F55AAfF92d1Ec", 20010379) // Block:6383530 EthAddr:0x7c0D2f1EB3dC2Cc21d6118789D26f2Db09311b1d
        await heroManager.forceMintHero("0xc97C865918e6f721D5c379Ff9d7654C987c99c31", 20010380) // Block:6383687 EthAddr:0xD94D7922eD9dfA3Bdb4253773bcdc78d5fc162E6
        await heroManager.forceMintHero("0xc97C865918e6f721D5c379Ff9d7654C987c99c31", 40040080) // Block:6383695 EthAddr:0xD94D7922eD9dfA3Bdb4253773bcdc78d5fc162E6
        await heroManager.forceMintHero("0x7B68226AA2879b751722B21c74a5784e207E6963", 20010381) // Block:6383713 EthAddr:0x7F48c6163Dd0cCb8785bEf5D44572509b5fDaF84
        await heroManager.forceMintHero("0xF842eeAB6a6D17F601A3D6417d919C8E459B3694", 20010382) // Block:6383727 EthAddr:0x8e5e01DCa1706F9Df683c53a6Fc9D4bb8D237153
        await heroManager.forceMintHero("0xEbFd5D2C461EeA9a711C5E79d527622647569898", 20010383) // Block:6383748 EthAddr:0x45a86919DD2aA3dfb643e7A1d82c1A035a16F8b1
        await heroManager.forceMintHero("0x833D7C4a0F58638fFB5141b56C18f2074e14C87F", 30010085) // Block:6383868 EthAddr:0x081dB39421CA2C82f3871A331fda572587F69299
        await heroManager.forceMintHero("0x023E5345e67029CD16c5179658042e7C42e8B9A5", 30010086) // Block:6383872 EthAddr:0x71a48855f7574F549bbBc05573eF9fAe333BA279
        await heroManager.forceMintHero("0x1744445039F10Be30d605C5328962EA861864ab1", 20010384) // Block:6383907 EthAddr:0xb8755E04a5623756C088826646FD3D13641384FD
        await heroManager.forceMintHero("0x3451ae4ECc794Ce878E2d3799a35796740170BB4", 20010385) // Block:6383992 EthAddr:0x0EA52953184b05b82Ea640A225354f15E5e5FFbD
        await heroManager.forceMintHero("0x1540538bC3b0df249e2AbaC7f5088c73d2AD9E8D", 20010386) // Block:6384126 EthAddr:0x557d9c665c4DC7BE280791869b68B15b41f72825
        await heroManager.forceMintHero("0xe1e0C0a6536A2D8489232E514F7cFbcA5b06e098", 20010387) // Block:6384219 EthAddr:0x745Ceb2f642A56dC16c608a8CC813B3EB3634819
        await heroManager.forceMintHero("0xe1e0C0a6536A2D8489232E514F7cFbcA5b06e098", 40080063) // Block:6384228 EthAddr:0x745Ceb2f642A56dC16c608a8CC813B3EB3634819
        await heroManager.forceMintHero("0x1540538bC3b0df249e2AbaC7f5088c73d2AD9E8D", 30010087) // Block:6384262 EthAddr:0x557d9c665c4DC7BE280791869b68B15b41f72825
        await heroManager.forceMintHero("0xF7c1391C1eD82DfA3D04B2a0c8DAEe6C502A4d36", 30010088) // Block:6384379 EthAddr:0x12EF2cD4231D5CF655a6CDD4Ac1524FFaa439c17
        await heroManager.forceMintHero("0x50D0F2830422e354f2F69ebdB2580056bBc1A85c", 20010388) // Block:6384453 EthAddr:0xaa0070cb01a932765Ad6E80866EE1a9209f56331
        await heroManager.forceMintHero("0x13ABc20F3c92278e660fd56963116907402743eb", 30010089) // Block:6384482 EthAddr:0xc66279677dE897291caCC6B2855f718eEe834568
        await heroManager.forceMintHero("0x390Ca917fFeDBD305EE136137cEfE45D1B3d0060", 20010389) // Block:6384774 EthAddr:0x46064D03D21B400D7f4132d49BD6db2776297a42
        await heroManager.forceMintHero("0x9a9378714813a1926f5443958732073cA5235c16", 20010390) // Block:6384790 EthAddr:0x406f4533B2F6209812d7eF9c7d69b8C54217C208
        await heroManager.forceMintHero("0xF6f0dBf7f7De4aAD9a5968BFf9dd718f1E2438fc", 30010090) // Block:6384919 EthAddr:0xB053F2c5C12B6b502640DC5D0d5480d62E0faCcD
        await heroManager.forceMintHero("0x7d31efbE074f6A65D52964E1Dd8584b077Ff070A", 30010091) // Block:6384935 EthAddr:0x76b5c7F0C55981d2f5c44ba3322673150838EB0e
        await heroManager.forceMintHero("0x877D4ff75B45011daB80E64b262C5236847aAF10", 20010391) // Block:6384985 EthAddr:0x83d8F20349a6Ebc1Bd8C556223fA36ADBe436853
        await heroManager.forceMintHero("0xf0F5463a7f57c71656267b1Ee3d861a60D7FaeF2", 20010392) // Block:6385003 EthAddr:0x081591764A13E72Aeb6bed098e7DA34063eA8aC4
        await heroManager.forceMintHero("0x9398ec4d13640bfb5ee76cb8c527f98416437607", 40070070) // Block:6385015 EthAddr:0x3825c8BA07166f34cE9a2cD1e08A68b105c82cB9
        await heroManager.forceMintHero("0x9398ec4d13640bfb5ee76cb8c527f98416437607", 20010393) // Block:6385021 EthAddr:0x3825c8BA07166f34cE9a2cD1e08A68b105c82cB9
        await heroManager.forceMintHero("0x75499B7CAAF50dae470bD280007F09D05e852D8D", 40050061) // Block:6385023 EthAddr:0x4E0De832086993881462DDAEE5E4D288D81559De
        await heroManager.forceMintHero("0x9398ec4d13640bfb5ee76cb8c527f98416437607", 40010082) // Block:6385026 EthAddr:0x3825c8BA07166f34cE9a2cD1e08A68b105c82cB9
        await heroManager.forceMintHero("0x9398ec4d13640bfb5ee76cb8c527f98416437607", 40050062) // Block:6385037 EthAddr:0x3825c8BA07166f34cE9a2cD1e08A68b105c82cB9
        await heroManager.forceMintHero("0x640DDCb4384c08Fc60f204feaeBEB4f6A15113FF", 20010394) // Block:6385119 EthAddr:0x0945255148A4E0fAfB31aF7964D67a827442c8fD
        await heroManager.forceMintHero("0x1b2059D9e3F656D5FF02116a0944A545A171af0C", 40050063) // Block:6385172 EthAddr:0x46053E2D1c77cB7015580848A811c773B31a03f0
        await heroManager.forceMintHero("0xb2CAb387aFd4c512360760DCdA7A41Db9c0F927e", 20010395) // Block:6385284 EthAddr:0x0DAd140bF4349fA3A5B12682fCed73d6Fef23CeB
        await heroManager.forceMintHero("0xb067C19F968e5FaEF757E289eF0Dea6fd3cC9cDB", 30010092) // Block:6385308 EthAddr:0x3aCdbd0e1bc29405ad25388b41eB423967584Ecc
        await heroManager.forceMintHero("0xF942f38C0348a9089A543Dd259458F0480efcf27", 40080064) // Block:6385313 EthAddr:0xFD1Be2AF81caA6E51E5A1FF91a9140e9C5B273dC
        await heroManager.forceMintHero("0xcCE56EB6A0067524Cc645872726a04Ec3A76E196", 20010396) // Block:6385369 EthAddr:0x7aFfeF35De67A986B138032cd1C01db1aF17bA8A
        await heroManager.forceMintHero("0x7Fc760acCC7CD4804FDe260daF7e12209480495E", 20010397) // Block:6385432 EthAddr:0xB190A1048ba5e8c8cb8126efCF6306b7606EB803
        await heroManager.forceMintHero("0x2Fe855a5C3eDDF5EE8cCEf9Cb6aD3f8a01476282", 30010093) // Block:6385438 EthAddr:0x8AFBf75238F4653a0A3Dd134129Db195E566f4C3
        await heroManager.forceMintHero("0xD8C8C59c8d68d2fcb362Cac09c9CE0808a055993", 20010398) // Block:6385707 EthAddr:0xC674d5f701bbD8A79315cd2434Af18c75816856e
        await heroManager.forceMintHero("0x8991d1139f065Af631841CC32491d42E9B1882Bc", 20010399) // Block:6385737 EthAddr:0xd04c453461a77b342fEA9d1fEc55861399401122
        await heroManager.forceMintHero("0x32BEd84e69eA8B6cF30B8f1a59c56F239b50c845", 20010400) // Block:6385810 EthAddr:0xEAAa67C55F52a8EdDFedBA8C24a9AE916ce702E3
        await heroManager.forceMintHero("0xE3388c79a2fBe4CAc8bE6404ad9D4a72Da837784", 20010401) // Block:6385817 EthAddr:0x5BA3E11aBf8c93186637847eC590fCd3aa588BD2
        await heroManager.forceMintHero("0x32BEd84e69eA8B6cF30B8f1a59c56F239b50c845", 40050064) // Block:6385826 EthAddr:0xEAAa67C55F52a8EdDFedBA8C24a9AE916ce702E3
        await heroManager.forceMintHero("0x32BEd84e69eA8B6cF30B8f1a59c56F239b50c845", 40040081) // Block:6385833 EthAddr:0xEAAa67C55F52a8EdDFedBA8C24a9AE916ce702E3
        await heroManager.forceMintHero("0x32BEd84e69eA8B6cF30B8f1a59c56F239b50c845", 40030070) // Block:6385836 EthAddr:0xEAAa67C55F52a8EdDFedBA8C24a9AE916ce702E3
        await heroManager.forceMintHero("0xCe11B0244D43db8ac23360Ae9a0A10C3d4D6e132", 20010402) // Block:6385873 EthAddr:0xEAc18b7A83f55b2b822e141fE219d4F8b1A9ACa4
        await heroManager.forceMintHero("0xc9a3c6C6f108b192Fa20e1387f99922594Fe825e", 20010403) // Block:6385933 EthAddr:0x9e6033FB9BC60653266D35275e764A0B1e0DCa4b
        await heroManager.forceMintHero("0x27AC28f22006163dDCC28AD869a32ACac9480D04", 30010094) // Block:6386060 EthAddr:0xD05f7dE9C1Ab204e13180Aa0598d96f9094Af3e4
        await heroManager.forceMintHero("0x108658088461A461682108578e5f6896A6303523", 30010095) // Block:6386091 EthAddr:0x3068fDce90Efa560f5a0D6790115D6623810F682
        await heroManager.forceMintHero("0x099216b1160F548dAE4846c0d6f0B2F24010728D", 30010096) // Block:6386166 EthAddr:0x76E1E12E7Bd4abEFCE188a045A7f1be679a11228
        await heroManager.forceMintHero("0x71eCC4FAEa5853AB8B7914ced4D0eFc4FE86C145", 20010404) // Block:6386170 EthAddr:0x5E74284e3176Ff675d7Cd17352EAfD9ac43BA630
        await heroManager.forceMintHero("0xd1a8488BbdCBF327052734F08330aA76d38aa5fd", 20010405) // Block:6386277 EthAddr:0xd9AeFEa111903Be73658fcCDD79c5c988926839c
        await heroManager.forceMintHero("0xcfb46db35fc2460DD28f663B2fc8A8d13f062916", 20010406) // Block:6386447 EthAddr:0xDB75F34C47B43a5C971CBC79c23E5E81497E6869
        await heroManager.forceMintHero("0x5E85eB47a0b63C7edAAF0011dDcbA35f442d00ac", 20010407) // Block:6386478 EthAddr:0xCA1A7ECd9E0Cf8330f71FBf5FAcF78890644F058
        await heroManager.forceMintHero("0xaBDba77E31A619995E2AE09A476b1D0cD6f9992C", 20010408) // Block:6386533 EthAddr:0x83C9440dc34DA00c47A0d4dC2b598d7BDB1b53F7
        await heroManager.forceMintHero("0xE780f3Dc2bd3991B1f81f6E8F888DE6466571D20", 20010409) // Block:6386852 EthAddr:0xd63DE3EE4197fDA5040d6045A3d4202c3b80f4DD
        await heroManager.forceMintHero("0x351866e0Dba47A5F79b0A89addB6c83c63846853", 20010410) // Block:6387086 EthAddr:0xEe9b429eD04bfb790306a1f96C7fE6281D8B38D5
        await heroManager.forceMintHero("0x720Ce3c6baB470491761df85B5D60e1B71075722", 20010411) // Block:6387087 EthAddr:0x07005c9B5F948918111322126B1DB739d43b1d7C
        await heroManager.forceMintHero("0x136A8a28bCD001C4B7F0C69250f6369d89B4Eaf9", 20010412) // Block:6387167 EthAddr:0x147b2106eF7a11D4De36423DcAFbd12564a24514
        await heroManager.forceMintHero("0x433AaFEA487D2FEBf61Ef9e553CDDa7c8D8ceC08", 20010413) // Block:6387225 EthAddr:0x56653E874263b2d936803a822DFE7f7Ff4f745bB
        await heroManager.forceMintHero("0x94c486AC286DD801C84B682c01Dbb09083Bc909a", 20010414) // Block:6387297 EthAddr:0x11210faB4778c118ecEB7331027abDC44D82C2e9
        await heroManager.forceMintHero("0x2414b33519320034470D79faA14BB26E5F58f741", 20010415) // Block:6387339 EthAddr:0x2d34bf7b38975663Fd3f2c2b6cc260160cB9ED30
        await heroManager.forceMintHero("0xfa45D04C66caFA7Bc3A21f4D6fDA39aC68194168", 20010416) // Block:6387344 EthAddr:0x96FCfB5f9525fa6e17F43C82B142F4e55C0c4183
        await heroManager.forceMintHero("0x471d9fbe69b0094Bc7EEad40e3Fb3B9767668C54", 20010417) // Block:6387345 EthAddr:0xc1918A97aacf3158abE2Eb298551103A7C173a14
        await heroManager.forceMintHero("0x9c84798AbbFB580c2cedF50A19DC179c125d80A7", 20010418) // Block:6387359 EthAddr:0x5F82010AfbEE17C4a7C1A79450b410962a9bB784
        await heroManager.forceMintHero("0x2342376652c0941C598a0C064255B1A69266c2a7", 20010419) // Block:6387361 EthAddr:0x42091922b2fFB8353d933eEa8Dd5Ceb5bd848c58
        await heroManager.forceMintHero("0xB7be51438A84E83933317a75ECd15546e22fF443", 20010420) // Block:6387387 EthAddr:0xf35baAbdD8c836fd69C3535E79c309e4426E5396
        await heroManager.forceMintHero("0xF7c1391C1eD82DfA3D04B2a0c8DAEe6C502A4d36", 30010097) // Block:6387402 EthAddr:0x12EF2cD4231D5CF655a6CDD4Ac1524FFaa439c17
        await heroManager.forceMintHero("0xFCC45A09873960B9AC1D7d8735BE57d4f4D9f85c", 20010421) // Block:6387415 EthAddr:0xC091C67D3773ceD69e55fAD0a72805BA55F1F12f
        await heroManager.forceMintHero("0xFCC45A09873960B9AC1D7d8735BE57d4f4D9f85c", 30010098) // Block:6387481 EthAddr:0xC091C67D3773ceD69e55fAD0a72805BA55F1F12f
        await heroManager.forceMintHero("0xF7c1391C1eD82DfA3D04B2a0c8DAEe6C502A4d36", 30010099) // Block:6387489 EthAddr:0x12EF2cD4231D5CF655a6CDD4Ac1524FFaa439c17
        await heroManager.forceMintHero("0x0a387345EE62636ED4F4e7a9148BcAbf4bb070A3", 20010422) // Block:6387517 EthAddr:0x6EAC7d87a9f2ad5c8c03c79E71B9038468043780
        await heroManager.forceMintHero("0x4573080b842Ed3008C6F8Af79ae7e83c5cBfBc0f", 40080065) // Block:6387607 EthAddr:0x4074839Db5dbc27DdfbF52f22903070F1DC3041f
        await heroManager.forceMintHero("0x681D3c3352da3D02e90b914c68386DC7f49FCbC3", 20010423) // Block:6387665 EthAddr:0xe1db8614A7609C471CF20D68624348Bc573D533f
        await heroManager.forceMintHero("0x3dB3Eb16A5e2479E034282B56dd581A946d4d2f0", 30010100) // Block:6387666 EthAddr:0xf55161739672929A20B94D611d2D98352e837E44
        await heroManager.forceMintHero("0x3dB3Eb16A5e2479E034282B56dd581A946d4d2f0", 20010424) // Block:6387671 EthAddr:0xf55161739672929A20B94D611d2D98352e837E44
        await heroManager.forceMintHero("0x24462B84Ad236501De22c4eCbA4b31384921818D", 40030071) // Block:6387837 EthAddr:0xf498d081C814738216175451Ffc2cdc9dDE62F5C
        await heroManager.forceMintHero("0x24462B84Ad236501De22c4eCbA4b31384921818D", 40050065) // Block:6387848 EthAddr:0xf498d081C814738216175451Ffc2cdc9dDE62F5C
        await heroManager.forceMintHero("0x24462B84Ad236501De22c4eCbA4b31384921818D", 40080066) // Block:6387860 EthAddr:0xf498d081C814738216175451Ffc2cdc9dDE62F5C
        await heroManager.forceMintHero("0x0b0986c81450CC20177EB60B5af4Ccb89db56545", 50040015) // Block:6388023 EthAddr:0x6C5F503E290BBa6A659972da78715694797fbac4
        await heroManager.forceMintHero("0x0b0986c81450CC20177EB60B5af4Ccb89db56545", 40040082) // Block:6388055 EthAddr:0x6C5F503E290BBa6A659972da78715694797fbac4
        await heroManager.forceMintHero("0x60Bc0CE902FAcE36A8B81712D73d3a0343334c22", 20010425) // Block:6388061 EthAddr:0xDdFED3D757262595135587f0d937c805873366d3
        await heroManager.forceMintHero("0x60Bc0CE902FAcE36A8B81712D73d3a0343334c22", 40070071) // Block:6388136 EthAddr:0xDdFED3D757262595135587f0d937c805873366d3
        await heroManager.forceMintHero("0x317f80C60D926ef26eFFbfa93b2C199270A1c1A0", 20010426) // Block:6388192 EthAddr:0xfcFEb1c563ce8a545F25f14a44Df37360744F045
        await heroManager.forceMintHero("0xEbFd5D2C461EeA9a711C5E79d527622647569898", 30010101) // Block:6388350 EthAddr:0x45a86919DD2aA3dfb643e7A1d82c1A035a16F8b1
        await heroManager.forceMintHero("0xc7794093497c103071Ea2a0C558a04b4600C547C", 40070072) // Block:6388373 EthAddr:0x05DaeD4EbdCE7E0Eca746d03E0c57A480565CD9d
        await heroManager.forceMintHero("0x264e5802DE9d4d8f41bE3fb86E30e3709CA5d1b0", 20010427) // Block:6388496 EthAddr:0x176bc0375Ab4980b4F999Db8215F1998434842fA
        await heroManager.forceMintHero("0x0dC6299B7D0547c441B37C5970D0e5b4669Ac62E", 20010428) // Block:6388725 EthAddr:0x4081879ceEabdB4A9e46cce4e69Fc24fD2B33AeE
        await heroManager.forceMintHero("0x03890b1712329F57221D4B36003Cb4a30BD90257", 30010102) // Block:6388781 EthAddr:0x12BCEFAff8878F84Fdd4ce2f33C3b49Ee43dE948
        await heroManager.forceMintHero("0x1F69E196A66bC7142aFdF570D4fd5a931204B2d5", 20010429) // Block:6388788 EthAddr:0xab6d136829f1Eddf1898CBF6Abed92F842F006c6
        await heroManager.forceMintHero("0x1C387fbf189d920C59BCF32eCE8546115BDBDC7c", 20010430) // Block:6388834 EthAddr:0xD5250c1960ac8BD9B778644aD68e5D5338346D82
        await heroManager.forceMintHero("0x0589434CEc26D9e388A6cc391F99cA483fc26fc6", 20010431) // Block:6388836 EthAddr:0x925437EAd20D406AB091E8308324B4BD37e4f477
        await heroManager.forceMintHero("0xF7c1391C1eD82DfA3D04B2a0c8DAEe6C502A4d36", 30010103) // Block:6388865 EthAddr:0x12EF2cD4231D5CF655a6CDD4Ac1524FFaa439c17
        await heroManager.forceMintHero("0x00AC963e39e4d0262418E4Dd65dDc12B9F6ecb20", 20010432) // Block:6388879 EthAddr:0x161B1bafEfC30202C67b1E938f23AeA0Ccbf021d
        await heroManager.forceMintHero("0xbc90e8C377713B3C96068ddAD7c3a836ba1F7bC1", 20010433) // Block:6388900 EthAddr:0x396e05690B22F3f555fBc6A691B45F5c479E84E7
        await heroManager.forceMintHero("0xbe2f3222497Ce4477a7ac04c3a700E78f4c4Fb5A", 20010434) // Block:6388929 EthAddr:0x302978fEf749198Da1336e57Ec133D994482BAf1
        await heroManager.forceMintHero("0x79Ba57a15767c577FB9657fE38aB2f52edcD89C2", 20010435) // Block:6388929 EthAddr:0xc4dc11788F37cb339684735E1a99ef769Ccb386e
        await heroManager.forceMintHero("0x82aeC17983fcfACDE5D3f05F8E507Ce741210564", 40070073) // Block:6388998 EthAddr:0xe487c7F0A9f1D11B9Df1c327a4E44b222F40fceF
        await heroManager.forceMintHero("0x04Bc2994f9C63eDa514940A85D4853aD8c7d45D7", 20010436) // Block:6389021 EthAddr:0x2eA884f32b033401390B350EbB51b54A3Ee34f9A
        await heroManager.forceMintHero("0xc7385Df4Eca36baE7C9FE5dC83893Df91d3aacAD", 20010437) // Block:6389027 EthAddr:0x32D364E663AE23126ceB2DD0522C9ab170c0A24D
    });
}