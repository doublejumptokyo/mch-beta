var Hero = artifacts.require('Hero')
var HeroAsset = artifacts.require('HeroAsset')
var HeroManager = artifacts.require('HeroManager')

var blue = '\u001b[34m　    values:'

var heroType = 1
var supply = 10

var phy = 40
var intl = 40
var agi = 40

var actualPhy = 12
var actualIntl = 12
var actualAgi = 12

var initialIpfs =
  'https://ipfs.io/ipfs/QmRCtT46RQEgHHvWWzAh8HHnd9Gg9fxWb4CnsrM4bC7rq4'
var Ipfs2 =
  'https://ipfs.io/ipfs/QmRCtT46RQEgHHvWWzAh8HHnd9Gg9fxWb4CnsrM4bC7rq5'
var IpfsType = 3

var heroTypeName = 'Test'

var initialActiveSkill = 1
var passiveSkill = 1
var rarity = 5

var sampleHeroId = 10000
var alias = 'nobunaga'
var heroManagerAddress

contract('BattleBeta', function(accounts) {
  it('setSalesAddress to manager', function() {
    return HeroManager.deployed()
      .then(async function(hm) {
        await hm.setSalesAddress(accounts[0], { from: accounts[0] })
        return hm.heroSalesAddress()
      })
      .then(function(val) {
        assert.equal(val, accounts[0], 'Sales not set')
      })
  })

  it('setHeroAddress to manager', function() {
    return HeroManager.deployed().then(async function(hm) {
      return Hero.deployed()
        .then(async function(instance) {
          await hm.setHeroAddress(instance.address, { from: accounts[0] })
          return hm.hero()
        })
        .then(function(val) {
          Hero.deployed().then(async function(instance) {
            assert.equal(val, instance.address, 'Hero address not set')
          })
        })
    })
  })

  it('setHeroAssetAddress to manager', function() {
    return HeroManager.deployed().then(async function(hm) {
      return HeroAsset.deployed()
        .then(async function(hs) {
          await hm.setHeroAssetAddress(hs.address, { from: accounts[0] })
          return hm.heroAsset()
        })
        .then(function(val) {
          HeroAsset.deployed().then(async function(hs) {
            assert.equal(val, hs.address, 'Hero address not set')
          })
        })
    })
  })

  it('setHeroManagerAddress to hero', function() {
    return HeroManager.deployed().then(async function(hm) {
      return Hero.deployed()
        .then(async function(instance) {
          await instance.setHeroManagerAddress(hm.address, {
            from: accounts[0]
          })
          return instance.heroManagerAddress()
        })
        .then(function(val) {
          assert.equal(val, hm.address, 'Hero manager not set')
        })
    })
  })

  it('setHeroManagerAddress to heroAsset', function() {
    return HeroManager.deployed().then(async function(hm) {
      return HeroAsset.deployed()
        .then(async function(hs) {
          await hs.setHeroManagerAddress(hm.address, { from: accounts[0] })
          return hs.heroManagerAddress()
        })
        .then(function(val) {
          assert.equal(val, hm.address, 'Hero manager not set')
        })
    })
  })

  it('createHeroType rarity 5', function() {
    return Hero.deployed()
      .then(async function(instance) {
        await instance.setHeroType(
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
          { from: accounts[0] }
        )

        return instance.getHero(heroType)
      })
      .then(function(val) {
        /*
            assert.equal(val[0], heroTypeName, "Hero name not set");
            assert.equal(val[1], initialIpfs, "image not set");
            assert.equal(val[2], supply, "Supply not set");
            assert.equal(val[3], phy, "PHY not set");
            assert.equal(val[4], intl, "INT not set");
            assert.equal(val[5], agi, "AGI not set");
            assert.equal(val[6], initialActiveSkill, "Active Skill id not set");
            assert.equal(val[7], passiveSkill, "Passive Skill id not set");
			assert.equal(val[8], rarity, "Rarity not set");
			*/
      })
  })

  for (var i = 1; i <= 6; i++) {
    it('createHero' + i, function() {
      return HeroManager.deployed().then(async function(hm) {
        return Hero.deployed()
          .then(async function(instance) {
            await hm.createHero(heroType, accounts[0], { from: accounts[0] })
            return instance.getHero(sampleHeroId + i)
          })
          .then(function(val) {})
      })
    })
  }

  var Item = artifacts.require('Item')
  var ItemAsset = artifacts.require('ItemAsset')
  var ItemManager = artifacts.require('ItemManager')

  var itemType = 1
  var supply = 20

  var phy = 30
  var intl = 30
  var agi = 30
  var HP = 30

  var initialIpfs =
    'https://ipfs.io/ipfs/QmRCtT46RQEgHHvWWzAh8HHnd9Gg9fxWb4CnsrM4bC7rq4'
  var itemTypeName = 'Test'

  var initialActiveSkill = 1

  var rarity = 5

  var sampleItemId = 10000
  var alias = 'buki'

  it('setItemAddress to manager', function() {
    return ItemManager.deployed().then(async function(im) {
      return Item.deployed()
        .then(async function(instance) {
          await im.setItemAddress(instance.address, { from: accounts[0] })
          return im.item()
        })
        .then(function(val) {
          Item.deployed().then(async function(instance) {
            assert.equal(val, instance.address, 'Item address not set')
          })
        })
    })
  })

  it('setItemAssetAddress to manager', function() {
    return ItemManager.deployed().then(async function(im) {
      return ItemAsset.deployed()
        .then(async function(ia) {
          await im.setItemAssetAddress(ia.address, { from: accounts[0] })
          return im.itemAsset()
        })
        .then(function(val) {
          ItemAsset.deployed().then(async function(ia) {
            assert.equal(val, ia.address, 'Item address not set')
          })
        })
    })
  })

  it('setItemManagerAddress to Item', function() {
    return ItemManager.deployed().then(async function(im) {
      return Item.deployed()
        .then(async function(instance) {
          await instance.setItemManagerAddress(im.address, {
            from: accounts[0]
          })
          return instance.itemManagerAddress()
        })
        .then(function(val) {
          assert.equal(val, im.address, 'Item manager not set')
        })
    })
  })

  it('setItemManagerAddress to itemAsset', function() {
    return ItemManager.deployed().then(async function(im) {
      return ItemAsset.deployed()
        .then(async function(ia) {
          await ia.setItemManagerAddress(im.address, { from: accounts[0] })
          return ia.itemManagerAddress()
        })
        .then(function(val) {
          assert.equal(val, im.address, 'Item manager not set')
        })
    })
  })

  it('createItemType rarity 5', function() {
    return Item.deployed()
      .then(async function(instance) {
        await instance.setItemType(
          itemType,
          itemTypeName,
          initialIpfs,
          supply,
          phy,
          intl,
          agi,
          HP,
          initialActiveSkill,
          rarity,
          { from: accounts[0] }
        )
        return instance.getItemType(itemType)
      })
      .then(function(val) {
        assert.equal(val[0], itemTypeName, 'ItemType name not set')
        assert.equal(val[1], initialIpfs, 'image not set')
        assert.equal(val[2], supply, 'Supply not set')
        assert.equal(val[3], phy, 'PHY not set')
        assert.equal(val[4], intl, 'INT not set')
        assert.equal(val[5], agi, 'AGI not set')
        assert.equal(val[6], HP, 'HP not set')
        assert.equal(val[7], initialActiveSkill, 'Active Skill id not set')
        assert.equal(val[8], rarity, 'Rarity not set')
      })
  })

  for (var i = 1; i <= 12; i++) {
    it('createItem' + i, function() {
      return ItemManager.deployed().then(async function(im) {
        return Item.deployed()
          .then(async function(instance) {
            await im.createItem(itemType, accounts[0], { from: accounts[0] })
            return instance.getItem(sampleItemId + i)
          })
          .then(function(val) {})
      })
    })
  }

  var BattleBeta = artifacts.require('BattleBeta')
  var BattleTransaction = artifacts.require('BattleTransaction')

  it('battle transaction set', function() {
    return BattleTransaction.deployed().then(async function(bt) {
      return BattleBeta.deployed()
        .then(async function(bb) {
          await bb.setBattleTransactionAddress(bt.address, {
            from: accounts[0]
          })
          return bb.battleTransaction()
        })
        .then(function(val) {
          assert.equal(val, bt.address, 'Battle Transaction address not set')
        })
    })
  })

  it('skill init', function() {
    return BattleTransaction.deployed()
      .then(async function(bt) {
        await bt.initSkill(1, 1, { from: accounts[0] })
        return bt.skills(1)
      })
      .then(function(val) {
        //console.log(blue + val)
      })
  })

  it('setHeroAddress to manager', function() {
    return Hero.deployed().then(async function(hr) {
      return BattleBeta.deployed()
        .then(async function(bb) {
          await bb.setHeroAddress(hr.address, { from: accounts[0] })
          return bb.hero()
        })
        .then(function(val) {
          assert.equal(val, hr.address, 'Hero address not set')
        })
    })
  })

  it('setItemAddress to manager', function() {
    return Item.deployed().then(async function(it) {
      return BattleBeta.deployed()
        .then(async function(bb) {
          await bb.setItemAddress(it.address, { from: accounts[0] })
          return bb.item()
        })
        .then(function(val) {
          //assert.equal(val, it.address, "Hero address not set");
        })
    })
  })

  it('setPartyTest', async function() {
    var input1 = []
    var input2 = []
    var input3 = []

    input1.push(10001)
    input1.push(10001)
    input1.push(10002)
    input1.push(1)
    input1.push(1)
    input1.push(1)

    input2.push(10002)
    input2.push(10003)
    input2.push(10004)
    input2.push(1)
    input2.push(1)
    input2.push(1)

    input3.push(10003)
    input3.push(10005)
    input3.push(10006)
    input3.push(1)
    input3.push(1)
    input3.push(1)

    await BattleBeta.deployed()
      .then(async function(bb) {
        await bb.setParty(input1, input2, input3, { from: accounts[0] })
        return bb.getParty(accounts[0])
      })
      .then(function(val) {
        //console.log(blue + val)
      })

    var input4 = []
    var input5 = []
    var input6 = []

    input4.push(10004)
    input4.push(10007)
    input4.push(10008)
    input4.push(1)
    input4.push(1)
    input4.push(1)

    input5.push(10005)
    input5.push(10009)
    input5.push(10010)
    input5.push(1)
    input5.push(1)
    input5.push(1)

    input6.push(10006)
    input6.push(10011)
    input6.push(10012)
    input6.push(1)
    input6.push(1)
    input6.push(1)

    return BattleBeta.deployed()
      .then(async function(bb) {
        await bb.setParty(input4, input5, input6, { from: accounts[1] })
        return bb.getParty(accounts[1])
      })
      .then(function(val) {
        ////console.log(blue + val)
      })
  })

  it('battle set', function() {
    return BattleBeta.deployed()
      .then(async function(bb) {
        await bb.startBattle(accounts[1], { from: accounts[0] })
        //return bb.startBattle(accounts[1]);
      })
      .then(function(val) {
        //assert.equal(val, bt.address, "Battle Transaction address not set");
      })
  })

  it('battle start', function() {
    return BattleTransaction.deployed()
      .then(async function(bt) {
        var start = await bt.start(1, { from: accounts[0] })

        let result = {}
        result.battleId = +start.logs[0].args.battleId.toString()

        let units = []
        for (u = 0; u < 7; u++) {
          let data = start.logs[0].args.data[u].toString()
          console.log(data)
        }

        //console.log("let start = " + JSON.stringify(result) + ";");

        //return bb.startBattle(accounts[1]);
      })
      .then(function(val) {
        //assert.equal(val, bt.address, "Battle Transaction address not set");
      })
  })

  it('battle next', function() {
    return BattleTransaction.deployed()
      .then(async function(bt) {
        await bt.next(1, { from: accounts[0] })
        //return bb.startBattle(accounts[1]);
      })
      .then(function(val) {
        //assert.equal(val, bt.address, "Battle Transaction address not set");
      })
  })
})
