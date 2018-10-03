let DeckManager = artifacts.require('DeckManager')
let Rank = artifacts.require('Rank')
let BattleManager2 = artifacts.require('BattleManager2')

module.exports = function (deployer) {
    deployer.then(async function() {
        await deployer.deploy(BattleManager2)

        let battleManager2 = await BattleManager2.deployed()
        let rank = await Rank.deployed()
        await rank.addSigner(BattleManager2.address)
        await battleManager2.setRankAddress(Rank.address)
        await battleManager2.setDeckManagerAddress(DeckManager.address)

        // vlr8bjE3GA1Hz+PFE2CuzHDTmWPKqrslxEPHLsFk4yWCHrCGGRjqQgtRqq6EkmiR+tpOBl3yzQkOAXepJLAVpg==
        await battleManager2.addSigner('0x5E6221564bB9f98C01C831417c68c44C955268D5')
    });
}
