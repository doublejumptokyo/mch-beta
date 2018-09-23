var HeroManager = artifacts.require('./HeroManager.sol');

module.exports = function(deployer) {
    deployer.then(async function() {
        const heroManager = await HeroManager.deployed();

        await heroManager.setHeroType(5001,'NobunagaOda','',150,66,34,42,1001,1001,5,10);
        await heroManager.setHeroType(5002,'NapoleonBonaparte','',129,37,64,48,1001,1002,5,10);
        await heroManager.setHeroType(5003,'CaoCao','',159,45,42,28,1001,1003,5,20);
        await heroManager.setHeroType(5004,'JoanofArc','',129,38,45,42,1001,1004,5,20);
        await heroManager.setHeroType(5005,'LeonardodaVinci','',117,31,56,42,1001,1005,5,20);
        await heroManager.setHeroType(4001,'ZhangFei','',174,47,34,17,1001,1006,4,100);
        await heroManager.setHeroType(4002,'FlorenceNightingale','',120,30,47,39,1001,1007,4,100);
        await heroManager.setHeroType(4003,'LudwigvanBeethoven','',108,34,47,39,1001,1008,4,100);
        await heroManager.setHeroType(4004,'KojiroSasaki','',108,47,21,52,1001,1009,4,100);
        await heroManager.setHeroType(4005,'KaishuKatsu','',132,39,34,39,1001,1010,4,100);
        await heroManager.setHeroType(4006,'BillytheKid','',120,26,43,47,1001,1011,4,100);
        await heroManager.setHeroType(4007,'ThomasEdison','',159,30,43,30,1001,1012,4,100);
        await heroManager.setHeroType(4008,'MarcoPolo','',132,39,34,39,1001,1013,4,100);
        await heroManager.setHeroType(4009,'MasamuneDate','',120,56,26,34,1001,1014,4,100);
        await heroManager.setHeroType(3001,'ETHEREMON-RED','',147,42,26,31,1001,1015,3,1000);
        await heroManager.setHeroType(2001,'WrightBrothers','',90,12,42,60,1001,1016,2,2500);
        await heroManager.setHeroType(1001,'MCHWarrior','',105,42,25,34,1001,1033,1,9999);
        await heroManager.setHeroType(1002,'MCHTactician','',105,25,42,34,1001,1034,1,9999);
        await heroManager.setHeroType(1003,'MCHArtist','',102,34,34,34,1001,1035,1,9999);
    });
}
