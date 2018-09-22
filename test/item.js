var Item = artifacts.require('Item')
var ItemAsset = artifacts.require('ItemAsset')
var ItemManager = artifacts.require('ItemManager')

var blue = '\u001b[34m　    values:'

var itemType = 1
var supply = 10

var phy = 30
var intl = 30
var agi = 30
var HP = 30

var actualPhy = 9
var actualIntl = 9
var actualAgi = 9
var actualHp = 9

var initialIpfs =
  'https://ipfs.io/ipfs/QmRCtT46RQEgHHvWWzAh8HHnd9Gg9fxWb4CnsrM4bC7rq4'
var itemTypeName = 'Test'

var initialActiveSkill = 1

var rarity = 5

var sampleItemId = 10001
var alias = 'buki'

contract('Item', function(accounts) {
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
          await ia.addMinter(im.address, { from: accounts[0] })
          return ia.isMinter(im.address)
        })
        .then(function(val) {
          assert.equal(val, true, 'Item manager not set')
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

  it('createItem', function() {
    return ItemManager.deployed().then(async function(im) {
      return Item.deployed()
        .then(async function(instance) {
          await im.createItem(itemType, accounts[0], { from: accounts[0] })
          return instance.getItem(sampleItemId)
        })
        .then(function(val) {
          assert.equal(val[0], itemType, 'Item type not set')
          assert.equal(val[1], 1, 'Item level not set')
          assert.equal(val[2], 0, 'Item experience not set')
          assert.equal(val[3][0], actualPhy, 'Item phy not set')
          assert.equal(val[3][1], actualIntl, 'Item int not set')
          assert.equal(val[3][2], actualAgi, 'Item agi not set')
          assert.equal(val[3][3], actualHp, 'Item hp not set')
          assert.equal(val[4], initialActiveSkill, 'Item skill not set')
          assert.equal(val[5], itemTypeName, 'Item alias not set')
          assert.equal(val[6], initialIpfs, 'Item ipfs not set')
        })
    })
  })

  it('setAlias', function() {
    return ItemManager.deployed().then(async function(im) {
      return Item.deployed()
        .then(async function(instance) {
          await im.setAlias(sampleItemId, alias, { from: accounts[0] })
          return instance.getItem(sampleItemId)
        })
        .then(function(val) {
          assert.equal(val[5], alias, 'Item alias not set')
        })
    })
  })

  it('addExperience up to 100, and phy:33, int:33, agi: 33, hp:33', function() {
    return ItemManager.deployed().then(async function(im) {
      return Item.deployed()
        .then(async function(instance) {
          await im.addExperience(sampleItemId, 223631, { from: accounts[0] })
          return instance.getItem(sampleItemId)
        })
        .then(function(val) {
          assert.equal(val[1], 100, 'Item level not set')
          assert.equal(val[2], 223631, 'Item experience not set')
          assert.equal(val[3][0], 33, 'Item phy not set')
          assert.equal(val[3][1], 33, 'Item int not set')
          assert.equal(val[3][2], 33, 'Item agi not set')
        })
    })
  })
})
