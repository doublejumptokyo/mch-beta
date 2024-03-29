const { shouldBehaveLikeERC721 } = require('./ERC721.behavior')

const BigNumber = web3.BigNumber
const ERC721 = artifacts.require('ERC721Mock.sol')

require('chai')
  .use(require('chai-bignumber')(BigNumber))
  .should()

contract('ERC721', function([_, creator, ...accounts]) {
  beforeEach(async function() {
    this.token = await ERC721.new({ from: creator })
  })

  shouldBehaveLikeERC721(creator, creator, accounts)
})
