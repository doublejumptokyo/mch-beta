var Hero = artifacts.require("Hero");
var HeroAsset = artifacts.require("HeroAsset");
var HeroManager = artifacts.require("HeroManager");

var blue = '\u001b[34m　    values:';

var heroType = 1;
var supply = 10;

var phy = 40;
var intl = 40;
var agi = 40

var actualPhy = 12;
var actualIntl = 12;
var actualAgi = 12;

var initialIpfs = "https://ipfs.io/ipfs/QmRCtT46RQEgHHvWWzAh8HHnd9Gg9fxWb4CnsrM4bC7rq4";
var Ipfs2 = "https://ipfs.io/ipfs/QmRCtT46RQEgHHvWWzAh8HHnd9Gg9fxWb4CnsrM4bC7rq5";
var IpfsType = 3;

var heroTypeName = "Test";

var initialActiveSkill = 1;
var passiveSkill = 1;
var rarity = 5;

var sampleHeroId = 10001;
var alias = "nobunaga"
var heroManagerAddress;

contract('Hero', function (accounts) {

    it("setSalesAddress to manager", function () {
        return HeroManager.deployed().then(async function (hm) {
            await hm.setSalesAddress(
                accounts[0],
                { from: accounts[0] });
            return hm.heroSalesAddress();
        }).then(function (val) {
            assert.equal(val, accounts[0], "Sales not set");
        });
    });

    it("setHeroAddress to manager", function () {
        return HeroManager.deployed().then(async function (hm) {
            return Hero.deployed().then(async function (instance) {
                await hm.setHeroAddress(
                    instance.address,
                    { from: accounts[0] });
                return hm.hero();
            }).then(function (val) {
                Hero.deployed().then(async function (instance) {
                    assert.equal(val, instance.address, "Hero address not set");
                });
            });

        });
    }); 
    
    it("setHeroAssetAddress to manager", function () {
        return HeroManager.deployed().then(async function (hm) {
            return HeroAsset.deployed().then(async function (hs) {
                await hm.setHeroAssetAddress(
                    hs.address,
                    { from: accounts[0] });
                return hm.heroAsset();
            }).then(function (val) {
                HeroAsset.deployed().then(async function (hs) {
                    assert.equal(val, hs.address, "Hero address not set");
                });
            });
        });
    });        

    it("setHeroManagerAddress to hero", function () {
        return HeroManager.deployed().then(async function (hm) {
            return Hero.deployed().then(async function (instance) {
                await instance.setHeroManagerAddress(
                    hm.address,
                    { from: accounts[0] });
                return instance.heroManagerAddress();
            }).then(function (val) {
                assert.equal(val, hm.address, "Hero manager not set");
            });

        });
    });

    it("setHeroManagerAddress to heroAsset", function () {
        return HeroManager.deployed().then(async function (hm) {
            return HeroAsset.deployed().then(async function (hs) {
                await hs.addMinter(
                    hm.address,
                    { from: accounts[0] });
                return hs.isMinter(hm.address);
            }).then(function (val) {
                assert.equal(val, true, "Hero manager not set");
            });

        });
    });

    it("createHeroType rarity 5", function () {

        return Hero.deployed().then(async function (instance) {
            var receipt = await instance.setHeroType(
                heroType,
                heroTypeName,
                initialIpfs,
                supply,
                phy,
                intl,
                agi,
                initialActiveSkill,
                passiveSkill,
                rarity,
                { from: accounts[0] })

            return instance.getHeroType(heroType);
        }).then(function (val) {
            assert.equal(val[0], heroTypeName, "Hero name not set");
            assert.equal(val[1], initialIpfs, "image not set");
            assert.equal(val[2], supply, "Supply not set");
            assert.equal(val[3], phy, "PHY not set");
            assert.equal(val[4], intl, "INT not set");
            assert.equal(val[5], agi, "AGI not set");
            assert.equal(val[6], initialActiveSkill, "Active Skill id not set");
            assert.equal(val[7], passiveSkill, "Passive Skill id not set");
            assert.equal(val[8], rarity, "Rarity not set");
        });
    });

    it("createHero", function () {
        return HeroManager.deployed().then(async function (hm) {
            return Hero.deployed().then(async function (instance) {
                await hm.createHero(
                    heroType,
                    accounts[0],
                    { from: accounts[0] });
                return instance.getHero(sampleHeroId);
            }).then(function (val) {
                assert.equal(val[0], heroType, "Hero type not set");
                assert.equal(val[1], 1, "Hero level not set");
                assert.equal(val[2], 0, "Hero experience not set");
                assert.equal(val[3][0], actualPhy, "Hero phy not set");
                assert.equal(val[3][1], actualIntl, "Hero int not set");
                assert.equal(val[3][2], actualAgi, "Hero agi not set");
                assert.equal(val[4][0], initialActiveSkill, "Hero initialActiveSkillnot set");
                assert.equal(val[4][1], passiveSkill, "Hero passiveSkill not set");
                assert.equal(val[5], heroTypeName, "Hero alias not set");
                assert.equal(val[6], initialIpfs, "Hero ipfs not set");
                assert.equal(val[7], false, "Hero ipfs should not be set");
                assert.equal(val[8][0], 4, "Extension1 not set");
                assert.equal(val[8][1], 2, "Extension2 not set");
                assert.equal(val[8][2], 1, "Extension3 not set");
                assert.equal(val[8][3], 6, "Extension4 not set");
                assert.equal(val[8][4], 8, "Extension5 not set");
                assert.equal(val[8][5], 9, "Extension6 not set");
                assert.equal(val[9][0], 0, "Item1 not set");
                assert.equal(val[9][1], 0, "Item2 not set");
                assert.equal(val[9][2], 0, "Item3 not set");
                assert.equal(val[9][3], 0, "Item4 not set");
                assert.equal(val[9][4], 0, "Item5 not set");
                assert.equal(val[9][5], 0, "Item6 not set");
                assert.equal(val[10], false, "ItemSet not set");

            });
        });
    });


    it("setAlias", function () {
        return HeroManager.deployed().then(async function (hm) {
            return Hero.deployed().then(async function (instance) {
                await hm.setAlias(
                    sampleHeroId,
                    alias,
                    { from: accounts[0] });
                return instance.getHero(sampleHeroId);
            }).then(function (val) {
                assert.equal(val[5], alias, "Hero alias not set");
            });
        });
    });

    it("setIpfsType", function () {
        return Hero.deployed().then(async function (instance) {
            await instance.setIpfsType(
                Ipfs2,
                IpfsType,
                { from: accounts[0] });
            return instance.getIpfsType(Ipfs2);
        }).then(function (val) {
            assert.equal(val, IpfsType, "IpfsType not set");
        });
    });



    it("addExperience up to 20, and phy:31, int:31, agi: 31", function () {
        return HeroManager.deployed().then(async function (hm) {
            return Hero.deployed().then(async function (instance) {
                await hm.addExperience(
                    sampleHeroId,
                    3215,
                    { from: accounts[0] });
                return instance.getHero(sampleHeroId);
            }).then(function (val) {
                assert.equal(val[1], 20, "Hero level not set");
                assert.equal(val[2], 3215, "Hero experience not set");
                assert.equal(val[3][0], 31);
                assert.equal(val[3][1], 31);
                assert.equal(val[3][2], 31);
            });
        });
    });

    it("setIpfs, and phy:35, int:31, agi: 26", function () {
        return HeroManager.deployed().then(async function (hm) {
            return Hero.deployed().then(async function (instance) {
                await hm.setIpfs(
                    sampleHeroId,
                    Ipfs2,
                    { from: accounts[0] });
                return instance.getHero(sampleHeroId);
            }).then(function (val) {
                assert.equal(val[6], Ipfs2, "Hero ipfs not set");
                assert.equal(val[3][0], 35, "Hero phy not set");
                assert.equal(val[3][1], 31, "Hero int not set");
                assert.equal(val[3][2], 26, "Hero agi not set");
            });
        });
    });

    it("addExperience up to 100, and phy:127, int:111, agi: 94", function () {
        return HeroManager.deployed().then(async function (hm) {
            return Hero.deployed().then(async function (instance) {
                await hm.addExperience(
                    sampleHeroId,
                    220416,
                    { from: accounts[0] }).then(function(result){

                    }
                    );
                return instance.getHero(sampleHeroId);
            }).then(function (val) {
                assert.equal(val[1], 100, "Hero level not set");
                assert.equal(val[2], 223631, "Hero experience not set");
                assert.equal(val[3][0], 127, "Hero phy not set");
                assert.equal(val[3][1], 111, "Hero int not set");
                assert.equal(val[3][2], 94, "Hero agi not set");
            });
        });
    });

    it("addItem", function () {
        return HeroManager.deployed().then(async function (hm) {
            return Hero.deployed().then(async function (instance) {
                await hm.addItem(
                    sampleHeroId,
                    0,
                    1,
                    { from: accounts[0] });
                await hm.addItem(
                    sampleHeroId,
                    1,
                    2,
                    { from: accounts[0] });
                await hm.addItem(
                    sampleHeroId,
                    2,
                    3,
                    { from: accounts[0] });
                await hm.addItem(
                    sampleHeroId,
                    3,
                    4,
                    { from: accounts[0] });
                await hm.addItem(
                    sampleHeroId,
                    4,
                    5,
                    { from: accounts[0] });
                await hm.addItem(
                    sampleHeroId,
                    5,
                    6,
                    { from: accounts[0] });
                return instance.getHero(sampleHeroId);
            }).then(function (val) {
                assert.equal(val[10], true, "ItemSet not set");
                assert.equal(val[3][0], 139, "Hero phy not set");
                assert.equal(val[3][1], 121, "Hero int not set");
                assert.equal(val[3][2], 102, "Hero agi not set");
            });
        });
    });

});