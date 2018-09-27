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
        let user = await User.deployed();

        user.set('0x7E8c2E34BC66f5aE2C40b3d32D55CB4dfC128d78','beta player','');
        user.set('0x48A20C67D9Fd894e1b741531804d9375D1f1B633','beta player','');

    });
}
