var Hero = artifacts.require("./Hero.sol");
var HeroAsset = artifacts.require("./HeroAsset.sol");
var HeroManager = artifacts.require("./HeroManager.sol");

var Item = artifacts.require("./Item.sol");
var ItemAsset = artifacts.require("./ItemAsset.sol");
var ItemManager = artifacts.require("./ItemManager.sol");

var Land = artifacts.require("./Land.sol");
var LandManager = artifacts.require("./LandManager.sol");
var LandAsset = artifacts.require("./LandAsset.sol");

var　BattleBeta = artifacts.require("./BattleBeta.sol");
var　BattleTransaction = artifacts.require("./BattleTransaction.sol");

module.exports = function(deployer) {
  deployer.deploy(Hero);
  deployer.deploy(HeroAsset);
  deployer.deploy(HeroManager);

  deployer.deploy(Item);
  deployer.deploy(ItemAsset);
  deployer.deploy(ItemManager);

  deployer.deploy(Land);
  deployer.deploy(LandManager);
  deployer.deploy(LandAsset);

  deployer.deploy(BattleBeta);
  deployer.deploy(BattleTransaction);

};
