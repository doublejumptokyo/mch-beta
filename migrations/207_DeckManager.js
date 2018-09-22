var DeckManager = artifacts.require('./DeckManager.sol');
var Register = artifacts.require('./Register.sol');

module.exports = function (deployer) {
    deployer.then(async function() {
        const deckManager = await DeckManager.deployed();
        await deckManager.addSigner(Register.address);
    });
}