let Register = artifacts.require('Register')
let User = artifacts.require('User')
let HeroAsset = artifacts.require('HeroAsset')
let Hero = artifacts.require('Hero')
let HeroManager = artifacts.require('HeroManager')
let ExtensionAsset = artifacts.require('ExtensionAsset')
let Extension = artifacts.require('Extension')
let ExtensionManager = artifacts.require('ExtensionManager')
let DeckManager = artifacts.require('DeckManager')
let Rank = artifacts.require('Rank')
let BattleTransaction = artifacts.require('BattleTransaction')
let BattleManager = artifacts.require('BattleManager')

module.exports = function (deployer) {
    deployer.then(async function() {
        let deckManager = await DeckManager.deployed()
        let heroAsset = await HeroAsset.deployed()

        let address = '0x8820abba1598d89f9750a79ab0acba580872cfa7'

        let currentDeck = await deckManager.getDeck(address);

        let hero1 = await heroAsset.tokenOfOwnerByIndex(address,0);
        let hero2 = await heroAsset.tokenOfOwnerByIndex(address,1);
        let hero3 = await heroAsset.tokenOfOwnerByIndex(address,2);

        let unit1 = [];
        let unit2 = [];
        let unit3 = [];

        unit1.push(+hero1.toString())
        unit1.push(+currentDeck[0][1].toString())
        unit1.push(+currentDeck[0][2].toString())
        unit1.push(+currentDeck[0][3].toString())
        unit1.push(+currentDeck[0][4].toString())
        unit1.push(+currentDeck[0][5].toString())

        unit2.push(+hero2.toString())
        unit2.push(+currentDeck[1][1].toString())
        unit2.push(+currentDeck[1][2].toString())
        unit2.push(+currentDeck[1][3].toString())
        unit2.push(+currentDeck[1][4].toString())
        unit2.push(+currentDeck[1][5].toString())

        unit3.push(+hero3.toString())
        unit3.push(+currentDeck[2][1].toString())
        unit3.push(+currentDeck[2][2].toString())
        unit3.push(+currentDeck[2][3].toString())
        unit3.push(+currentDeck[2][4].toString())
        unit3.push(+currentDeck[2][5].toString())

        await deckManager.setInitialDeck(address,unit1,unit2,unit3)
    });
}
