var Land = artifacts.require("Land");
var LandAsset = artifacts.require("LandAsset");
var LandManager = artifacts.require("LandManager");

var blue = '\u001b[34m　    values:';

var landType = 1;
var supply = 10;

var initialIpfs = "https://ipfs.io/ipfs/QmRCtT46RQEgHHvWWzAh8HHnd9Gg9fxWb4CnsrM4bC7rq4";
var landTypeName = "Test";

var sampleLandId = 10001;

contract('Land', function (accounts) {


    it("setLandAddress to manager", function () {
        return LandManager.deployed().then(async function (im) {
            return Land.deployed().then(async function (instance) {
                await im.setLandAddress(
                    instance.address,
                    { from: accounts[0] });
                return im.land();
            }).then(function (val) {
                Land.deployed().then(async function (instance) {
                    assert.equal(val, instance.address, "Land address not set");
                });
            });

        });
    });

    it("setLandAssetAddress to manager", function () {
        return LandManager.deployed().then(async function (im) {
            return LandAsset.deployed().then(async function (ia) {
                await im.setLandAssetAddress(
                    ia.address,
                    { from: accounts[0] });
                return im.landAsset();
            }).then(function (val) {
                LandAsset.deployed().then(async function (ia) {
                    assert.equal(val, ia.address, "Land address not set");
                });
            });
        });
    });

    it("setLandManagerAddress to Land", function () {
        return LandManager.deployed().then(async function (im) {
            return Land.deployed().then(async function (instance) {
                await instance.setLandManagerAddress(
                    im.address,
                    { from: accounts[0] });
                return instance.landManagerAddress();
            }).then(function (val) {
                assert.equal(val, im.address, "Land manager not set");
            });

        });
    });

    it("setLandManagerAddress to landAsset", function () {
        return LandManager.deployed().then(async function (im) {
            return LandAsset.deployed().then(async function (ia) {
                await ia.addMinter(
                    im.address,
                    { from: accounts[0] });
                return ia.isMinter(im.address);
            }).then(function (val) {
                assert.equal(val, true, "Land manager not set");
            });

        });
    });


    it("createLandType", function () {
        return Land.deployed().then(async function (instance) {
            await instance.setLandType(
                landType,
                landTypeName,
                initialIpfs,
                supply,
                { from: accounts[0] });
            return instance.getLandType(landType);
        }).then(function (val) {
            assert.equal(val[0], landTypeName, "LandType name not set");
            assert.equal(val[1], initialIpfs, "image not set");
            assert.equal(val[2], supply, "Supply not set");
        });
    });

    it("createLand", function () {
        return LandManager.deployed().then(async function (lm) {
            return Land.deployed().then(async function (instance) {
                await lm.createLand(
                    landType,
                    accounts[0],
                    { from: accounts[0] });
                return instance.getLand(sampleLandId);
            }).then(function (val) {
                assert.equal(val[0], landType, "Land type not set");
                assert.equal(val[1], initialIpfs, "Land image not set");
            });
        });
    });

});