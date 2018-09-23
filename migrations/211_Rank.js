var Rank = artifacts.require('./Rank.sol');
var Register = artifacts.require('./Register.sol');

module.exports = function (deployer) {
    deployer.then(async function() {
        const rank = await Rank.deployed();
        await rank.addSigner(Register.address);
    });
}