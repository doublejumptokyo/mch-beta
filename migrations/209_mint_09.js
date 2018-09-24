let HeroManager = artifacts.require('HeroManager');

module.exports = function(deployer) {
    deployer.then(async function() {
        let heroManager = await HeroManager.deployed();

        await heroManager.mintHero("0x83D61F13C54Caa7b1a2C5D1243AB69f590d9115E", 40080039) // Block:6373028 EthAddr:0xb1dD78E89C37c85ba76c5339e4324DDa1f9D55f1
        await heroManager.mintHero("0x83D61F13C54Caa7b1a2C5D1243AB69f590d9115E", 40060051) // Block:6373042 EthAddr:0xb1dD78E89C37c85ba76c5339e4324DDa1f9D55f1
        await heroManager.mintHero("0xdBcE2E53B0D0388502D4FaF7eFc13681f212C2f4", 20010266) // Block:6373086 EthAddr:0xAC981E77b5AA4679bE9282939fE02cf928FB529c
        await heroManager.mintHero("0x0f549A13ad4925A491f01d31CEa267549CF4ac97", 30010053) // Block:6373086 EthAddr:0x558F50B2F2d0FcfA2a0D487D316323af725e1767
        await heroManager.mintHero("0xA568cc86d1e2876B47c79B8376201a6B60C23b10", 40010067) // Block:6373088 EthAddr:0x962077B67d68F145B57D0cc58464702C83CaBccC
        await heroManager.mintHero("0xA568cc86d1e2876B47c79B8376201a6B60C23b10", 40080040) // Block:6373100 EthAddr:0x962077B67d68F145B57D0cc58464702C83CaBccC
        await heroManager.mintHero("0x91E0259D423cdD41ce59c2aa62361352415960f2", 40030050) // Block:6373176 EthAddr:0x68B5d2b865da2C90F05E10c62Ade13edc4461708
        await heroManager.mintHero("0x3B02a240D11604d56e7EEb6EDF04D19De0E53508", 40080041) // Block:6373179 EthAddr:0x5F4Bc1C70743abD16Ab5D62af6722AC7E00D6Db9
        await heroManager.mintHero("0x91E0259D423cdD41ce59c2aa62361352415960f2", 20010267) // Block:6373186 EthAddr:0x68B5d2b865da2C90F05E10c62Ade13edc4461708
        await heroManager.mintHero("0x3B02a240D11604d56e7EEb6EDF04D19De0E53508", 40070050) // Block:6373192 EthAddr:0x5F4Bc1C70743abD16Ab5D62af6722AC7E00D6Db9
        await heroManager.mintHero("0x91E0259D423cdD41ce59c2aa62361352415960f2", 30010054) // Block:6373216 EthAddr:0x68B5d2b865da2C90F05E10c62Ade13edc4461708
        await heroManager.mintHero("0x36dC9744e6cC3A1cfbcb2C2a7cfc45EB90919B68", 20010268) // Block:6373239 EthAddr:0x808de368c7D6fb270Be6453F38070A36F86cf3b4
        await heroManager.mintHero("0x74be0820Fc28c9ab36367D3d4c8f9578A7AE8957", 40080042) // Block:6373240 EthAddr:0x6e9c932b0eF7F2E5aF6A185B48f219bb7D60AbFC
        await heroManager.mintHero("0xB65352FaDd2B30F335C6C5674E724AD9967eeF65", 20010269) // Block:6373273 EthAddr:0x5Ec6835dED689a9a66b16276345367EEC8087E14
        await heroManager.mintHero("0x5A4f718eF3Cf6651FDEB167e58e9689D1f63b0B7", 30010055) // Block:6373319 EthAddr:0x057dC43Af6187a931E78a56b3293912A5b42e5Ec
        await heroManager.mintHero("0x5A4f718eF3Cf6651FDEB167e58e9689D1f63b0B7", 20010270) // Block:6373323 EthAddr:0x057dC43Af6187a931E78a56b3293912A5b42e5Ec
        await heroManager.mintHero("0x587185272624720f7DE8eDB094e445677c91E619", 20010271) // Block:6373332 EthAddr:0x3904d7DeBCE689933d4E10d245E714cBAdb50c0E
        await heroManager.mintHero("0x587185272624720f7DE8eDB094e445677c91E619", 30010056) // Block:6373339 EthAddr:0x3904d7DeBCE689933d4E10d245E714cBAdb50c0E
        await heroManager.mintHero("0x128c1A05C961D43140B7C69AD3A88abeAe7A1650", 20010272) // Block:6373348 EthAddr:0xE61EcC646799Bb74405E676656C0F6300D0ab999
        await heroManager.mintHero("0x11A8bf81f1887232A577B81595cAa129427385A8", 40010068) // Block:6373362 EthAddr:0x81BAA737a23aAF007A6aa4aBf1dd6FD0919e7D99
        await heroManager.mintHero("0x11A8bf81f1887232A577B81595cAa129427385A8", 40050043) // Block:6373366 EthAddr:0x81BAA737a23aAF007A6aa4aBf1dd6FD0919e7D99
        await heroManager.mintHero("0x11A8bf81f1887232A577B81595cAa129427385A8", 40030051) // Block:6373368 EthAddr:0x81BAA737a23aAF007A6aa4aBf1dd6FD0919e7D99
        await heroManager.mintHero("0x11A8bf81f1887232A577B81595cAa129427385A8", 40060052) // Block:6373371 EthAddr:0x81BAA737a23aAF007A6aa4aBf1dd6FD0919e7D99
        await heroManager.mintHero("0x11A8bf81f1887232A577B81595cAa129427385A8", 40090083) // Block:6373381 EthAddr:0x81BAA737a23aAF007A6aa4aBf1dd6FD0919e7D99
        await heroManager.mintHero("0xe964Fe8F1ba109136c4B56E93Fa41ADF3d4996Eb", 20010273) // Block:6373403 EthAddr:0x378D6972a69247a5bf6613864599a8447Ef38De4
        await heroManager.mintHero("0xF33198502D752e8D694769990c7c668663b69b87", 20010274) // Block:6373431 EthAddr:0x4EB5c09f266a6681f3a7729cd4587cbB1AE3D41E
        await heroManager.mintHero("0xF33198502D752e8D694769990c7c668663b69b87", 40010069) // Block:6373437 EthAddr:0x4EB5c09f266a6681f3a7729cd4587cbB1AE3D41E
        await heroManager.mintHero("0xF33198502D752e8D694769990c7c668663b69b87", 40040062) // Block:6373441 EthAddr:0x4EB5c09f266a6681f3a7729cd4587cbB1AE3D41E
        await heroManager.mintHero("0xF33198502D752e8D694769990c7c668663b69b87", 40070051) // Block:6373445 EthAddr:0x4EB5c09f266a6681f3a7729cd4587cbB1AE3D41E
        await heroManager.mintHero("0xeA72843333DAD8948Dd6896b47ca49683B94dBD5", 40090084) // Block:6373448 EthAddr:0xb097BA1bBe6fE37545d1ED2e36ADA8c858Fe7756
        await heroManager.mintHero("0xF33198502D752e8D694769990c7c668663b69b87", 40060053) // Block:6373450 EthAddr:0x4EB5c09f266a6681f3a7729cd4587cbB1AE3D41E
        await heroManager.mintHero("0xF33198502D752e8D694769990c7c668663b69b87", 40070052) // Block:6373453 EthAddr:0x4EB5c09f266a6681f3a7729cd4587cbB1AE3D41E
        await heroManager.mintHero("0x284960FcA2E3B0534A60C2adf4469880b8fa233a", 20010275) // Block:6373476 EthAddr:0xE7EA83d1407f5E3698cE8aFa1fb8852d2bc8d447
        await heroManager.mintHero("0xF33198502D752e8D694769990c7c668663b69b87", 30010057) // Block:6373495 EthAddr:0x4EB5c09f266a6681f3a7729cd4587cbB1AE3D41E
        await heroManager.mintHero("0x1f275aB6851fBf2097b9a004128Ca52d8869131c", 20010276) // Block:6373495 EthAddr:0x129D0f0E0c7dE88b1A537F58Eaa6d7DBac2e4CA1
        await heroManager.mintHero("0xe964Fe8F1ba109136c4B56E93Fa41ADF3d4996Eb", 40070053) // Block:6373495 EthAddr:0x378D6972a69247a5bf6613864599a8447Ef38De4
        await heroManager.mintHero("0xe964Fe8F1ba109136c4B56E93Fa41ADF3d4996Eb", 40060054) // Block:6373497 EthAddr:0x378D6972a69247a5bf6613864599a8447Ef38De4
        await heroManager.mintHero("0x3be8a6B6D777AC2798190c4C0d471EBf191C81d1", 20010277) // Block:6373543 EthAddr:0xFa582A884133eB49A526daed931345b45B53a8f8
        await heroManager.mintHero("0x63ccFb0ac3b719aD9A4555cF66574ac84AA969BC", 20010278) // Block:6373618 EthAddr:0x8c1bdfD0AD1f571a6A71840e1E2d28F9a392A5Cb
        await heroManager.mintHero("0x50b7C1D0106684FDCf05644e5496002C44aDda0E", 20010279) // Block:6373655 EthAddr:0x4e66c8fea449D7aC5C2a55061c0FCf24C4106A9c
        await heroManager.mintHero("0x82aeC17983fcfACDE5D3f05F8E507Ce741210564", 20010280) // Block:6373667 EthAddr:0xe487c7F0A9f1D11B9Df1c327a4E44b222F40fceF
        await heroManager.mintHero("0xa8DacDA51E6ee494751857bA9912b93b35713Dc6", 20010281) // Block:6373860 EthAddr:0x094e4b82a5722271546CCa99c8C351BD840669AE
        await heroManager.mintHero("0x01D7EAB1276A28fb86B41B7Abf93c033256f4731", 20010282) // Block:6373942 EthAddr:0xFA51bA1B1Fc2592eDB66B2C792aCa4A268697C8E
        await heroManager.mintHero("0xa8321184BAF38cf0ee2b3979b4B026ACe28a7812", 20010283) // Block:6374153 EthAddr:0x3c8Bce8e2449e35659cD5ce7113A3b800Eaca950
        await heroManager.mintHero("0xa8321184BAF38cf0ee2b3979b4B026ACe28a7812", 40090085) // Block:6374205 EthAddr:0x3c8Bce8e2449e35659cD5ce7113A3b800Eaca950
        await heroManager.mintHero("0x1d41712F175AC26Bcd51157E1bb3c827f07Fe0Dc", 20010284) // Block:6374222 EthAddr:0x0a858F2009b39ccbB363c9f6CED6E74b40E3e474
        await heroManager.mintHero("0x2963ea302dd42e0BD1b2684A73e45BEd72368668", 20010285) // Block:6374269 EthAddr:0xE81475e1A9Adaef7deDA4258345ad58A35561466
        await heroManager.mintHero("0x6b9c2269A95306dd8f52FaAae80D836F905C3bFd", 20010286) // Block:6374308 EthAddr:0xD102B9d51751F6af9d77Ee1F356dD1f656774f2A
        await heroManager.mintHero("0x136629ad98f9ea3b811da476BC535De3c3B9F2Bd", 20010287) // Block:6374317 EthAddr:0x2Fef65e4D69a38bf0dd074079f367CDF176eC0De
        await heroManager.mintHero("0x136629ad98f9ea3b811da476BC535De3c3B9F2Bd", 30010058) // Block:6374396 EthAddr:0x2Fef65e4D69a38bf0dd074079f367CDF176eC0De
        await heroManager.mintHero("0xeC44E7CF24A9192554C1955BDb88f960dd0D97E0", 20010288) // Block:6374446 EthAddr:0x02d163Da64e985020229A851B21199A9D82373c6
        await heroManager.mintHero("0x33680CCF3603febFF7C61E747E2967E40BD290F3", 20010289) // Block:6374473 EthAddr:0xf862c9413f2Cc21eBFDA534eCFa6dF4f59F0B197
        await heroManager.mintHero("0xaF9D9A9fd71c049A024ffd314bd513119333836d", 30010059) // Block:6374475 EthAddr:0xaBDF11DA12739D33d04fF02e059869DB92eAD694
        await heroManager.mintHero("0x535bB19F74dC93B69FEc6a64A320af81cff10067", 30010060) // Block:6374504 EthAddr:0x8bFaB81f1c8242203ef905a9E224e59E0E5e9F9a
        await heroManager.mintHero("0xE498366Ca9d0607De74Fc0114DBE0f00cCCeD06E", 20010290) // Block:6374569 EthAddr:0x21Dee3112de6E62Fb47f2040AD4b9b69789Ad1f0
        await heroManager.mintHero("0xF41d200e9e5EE14B715F2Bef55A68DcD7CaB49b1", 20010291) // Block:6374649 EthAddr:0xF529Bc476F4547D7F366E101C26260451F05d79A
        await heroManager.mintHero("0x50ec419f24BA277E3Fe5603e015455F127E0099c", 20010292) // Block:6374886 EthAddr:0x71f35825a3B1528859dFa1A64b24242BC0d12990
        await heroManager.mintHero("0x3be8a6B6D777AC2798190c4C0d471EBf191C81d1", 40060055) // Block:6375033 EthAddr:0xFa582A884133eB49A526daed931345b45B53a8f8
        await heroManager.mintHero("0x3be8a6B6D777AC2798190c4C0d471EBf191C81d1", 40050044) // Block:6375077 EthAddr:0xFa582A884133eB49A526daed931345b45B53a8f8
        await heroManager.mintHero("0x70Ee2876546F8A074DF2647D00D454B9ec298E53", 40010070) // Block:6375199 EthAddr:0xA3aD2389F8666aDF188F61Bc59b553f4524AE102
        await heroManager.mintHero("0x13ABc20F3c92278e660fd56963116907402743eb", 20010293) // Block:6375319 EthAddr:0xc66279677dE897291caCC6B2855f718eEe834568
        await heroManager.mintHero("0x70Ee2876546F8A074DF2647D00D454B9ec298E53", 20010294) // Block:6375328 EthAddr:0xA3aD2389F8666aDF188F61Bc59b553f4524AE102
        await heroManager.mintHero("0xdbf296D0f66f97767A3f9BB9A0d89550946E7478", 30010061) // Block:6375407 EthAddr:0x61d8B2cFC0594daF7DeF2dd75E5e0c35bB80885C
        await heroManager.mintHero("0xA4446c27F58a64e013bAE35CE0F5EDC4392287cE", 20010295) // Block:6375491 EthAddr:0x1FB905AE7acFb396BB282dDB9b83A0755Bdd5721
        await heroManager.mintHero("0xA4446c27F58a64e013bAE35CE0F5EDC4392287cE", 40080043) // Block:6375558 EthAddr:0x1FB905AE7acFb396BB282dDB9b83A0755Bdd5721
        await heroManager.mintHero("0x81177935b7E153707150cb6C36069417220262AC", 20010296) // Block:6375605 EthAddr:0xEd82D3015a958F01dEC34AbC3Fc0AAadE923726D
        await heroManager.mintHero("0xa81A0426E39abB65E0936B63f838fD94E4143a71", 30010062) // Block:6375774 EthAddr:0x0A338782562E1740b9468F0855dD4C51F29dEfDE
        await heroManager.mintHero("0x4aCF1266c895CBdE8853c63C8054C72fecd4B698", 20010297) // Block:6375789 EthAddr:0x89Dc18Ffe141072Bc3f1040A5FF5f459710Aaec2
        await heroManager.mintHero("0x289d21c89564d2A4BC1951e24Ca86b36be15a5E4", 20010298) // Block:6375821 EthAddr:0x5E499E855E0f915F1147c922E7F2C658F8724F25
        await heroManager.mintHero("0x660981DB1dBE8ab2C9d0405Ec6D7293b6D13fB10", 30010063) // Block:6375827 EthAddr:0xEfd942d5c108470F398Be7c496E54b41e598a8a5
        await heroManager.mintHero("0x5E5b35086139e92515D8293400b769652D8c9cf4", 20010299) // Block:6375852 EthAddr:0x0817f4f56a409ad9f2FFfb042CaCb431e9179B45
        await heroManager.mintHero("0xC0BB338b4713021B15aE0E2Ff01e776cbD14A029", 30010064) // Block:6375854 EthAddr:0xCbB48458b5cD93839c3134A871e6992f700026C0
        await heroManager.mintHero("0x5E5b35086139e92515D8293400b769652D8c9cf4", 40030052) // Block:6375886 EthAddr:0x0817f4f56a409ad9f2FFfb042CaCb431e9179B45
        await heroManager.mintHero("0x8FEE52D0eB286fe74c581652D0e8e16609725ad8", 30010065) // Block:6375888 EthAddr:0xB329c3EfB37d3D7083DDa0FdC0f04616035fC645
        await heroManager.mintHero("0x5E5b35086139e92515D8293400b769652D8c9cf4", 40070054) // Block:6375908 EthAddr:0x0817f4f56a409ad9f2FFfb042CaCb431e9179B45
        await heroManager.mintHero("0x7d9844819c8b3F1bf02142B753fc29C3e25Ed228", 40090086) // Block:6375932 EthAddr:0xAc43Df42Ba2d186DA57342e1B685F024dB445A22
        await heroManager.mintHero("0x7d9844819c8b3F1bf02142B753fc29C3e25Ed228", 40010071) // Block:6375941 EthAddr:0xAc43Df42Ba2d186DA57342e1B685F024dB445A22
        await heroManager.mintHero("0x7d9844819c8b3F1bf02142B753fc29C3e25Ed228", 40060056) // Block:6375946 EthAddr:0xAc43Df42Ba2d186DA57342e1B685F024dB445A22
        await heroManager.mintHero("0x43BEA91a7C8347397d3e82D5F5eEF77b2fE7C407", 30010066) // Block:6375966 EthAddr:0xb81aa090AF3c7B31EbBEf8224984D9f1eDc51Be3
        await heroManager.mintHero("0xEc9AaAd5b4421645efbdEC1c90985c062485e3D5", 40030053) // Block:6376013 EthAddr:0xbd06a353f091Cf92c8Ae1cBAf3a75C7F4D685809
        await heroManager.mintHero("0x70Ee2876546F8A074DF2647D00D454B9ec298E53", 50010005) // Block:6376017 EthAddr:0xA3aD2389F8666aDF188F61Bc59b553f4524AE102
        await heroManager.mintHero("0xEc9AaAd5b4421645efbdEC1c90985c062485e3D5", 40050045) // Block:6376033 EthAddr:0xbd06a353f091Cf92c8Ae1cBAf3a75C7F4D685809
        await heroManager.mintHero("0xEc9AaAd5b4421645efbdEC1c90985c062485e3D5", 40060057) // Block:6376045 EthAddr:0xbd06a353f091Cf92c8Ae1cBAf3a75C7F4D685809
        await heroManager.mintHero("0x28996C3f490BcA08A6a24f9382C4f3A7Fae5FF4a", 40090087) // Block:6376052 EthAddr:0x17Bea9d885595DEb5A8e7caD697013A28fe22463
        await heroManager.mintHero("0x7d9844819c8b3F1bf02142B753fc29C3e25Ed228", 40090088) // Block:6376069 EthAddr:0xAc43Df42Ba2d186DA57342e1B685F024dB445A22
        await heroManager.mintHero("0x28996C3f490BcA08A6a24f9382C4f3A7Fae5FF4a", 20010300) // Block:6376078 EthAddr:0x17Bea9d885595DEb5A8e7caD697013A28fe22463
        await heroManager.mintHero("0x7d9844819c8b3F1bf02142B753fc29C3e25Ed228", 40030054) // Block:6376081 EthAddr:0xAc43Df42Ba2d186DA57342e1B685F024dB445A22
        await heroManager.mintHero("0x509a19a2E78c86302485c4d4b301a2e2854Efb18", 20010301) // Block:6376084 EthAddr:0x55611b747Af18E27bA99C251377912FcD96ea656
        await heroManager.mintHero("0x7d9844819c8b3F1bf02142B753fc29C3e25Ed228", 40050046) // Block:6376098 EthAddr:0xAc43Df42Ba2d186DA57342e1B685F024dB445A22
        await heroManager.mintHero("0xEc9AaAd5b4421645efbdEC1c90985c062485e3D5", 40070055) // Block:6376098 EthAddr:0xbd06a353f091Cf92c8Ae1cBAf3a75C7F4D685809
        await heroManager.mintHero("0xEc9AaAd5b4421645efbdEC1c90985c062485e3D5", 40040063) // Block:6376110 EthAddr:0xbd06a353f091Cf92c8Ae1cBAf3a75C7F4D685809
        await heroManager.mintHero("0xEc9AaAd5b4421645efbdEC1c90985c062485e3D5", 40090089) // Block:6376114 EthAddr:0xbd06a353f091Cf92c8Ae1cBAf3a75C7F4D685809
        await heroManager.mintHero("0xEc9AaAd5b4421645efbdEC1c90985c062485e3D5", 40040064) // Block:6376126 EthAddr:0xbd06a353f091Cf92c8Ae1cBAf3a75C7F4D685809
        await heroManager.mintHero("0x24462B84Ad236501De22c4eCbA4b31384921818D", 40060058) // Block:6376129 EthAddr:0xf498d081C814738216175451Ffc2cdc9dDE62F5C
        await heroManager.mintHero("0xEc9AaAd5b4421645efbdEC1c90985c062485e3D5", 40070056) // Block:6376135 EthAddr:0xbd06a353f091Cf92c8Ae1cBAf3a75C7F4D685809
        await heroManager.mintHero("0x7d9844819c8b3F1bf02142B753fc29C3e25Ed228", 40040065) // Block:6376140 EthAddr:0xAc43Df42Ba2d186DA57342e1B685F024dB445A22
        await heroManager.mintHero("0x0704C82616c8fF21c28B007e80A895899458F146", 20010302) // Block:6376164 EthAddr:0x8A51be3BfEF93590EF4FE6d41E2ef1532822aCA8
        await heroManager.mintHero("0x7d9844819c8b3F1bf02142B753fc29C3e25Ed228", 40070057) // Block:6376165 EthAddr:0xAc43Df42Ba2d186DA57342e1B685F024dB445A22
        await heroManager.mintHero("0x70Ee2876546F8A074DF2647D00D454B9ec298E53", 40060059) // Block:6376166 EthAddr:0xA3aD2389F8666aDF188F61Bc59b553f4524AE102
        await heroManager.mintHero("0x24462B84Ad236501De22c4eCbA4b31384921818D", 40040066) // Block:6376174 EthAddr:0xf498d081C814738216175451Ffc2cdc9dDE62F5C
    });
}