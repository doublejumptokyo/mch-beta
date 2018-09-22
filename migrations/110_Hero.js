var Hero = artifacts.require('./Hero.sol')

module.exports = function(deployer) {
  deployer.deploy(Hero)
}
