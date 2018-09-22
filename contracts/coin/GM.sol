pragma solidity 0.4.24;

import "../lib/openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol";
import "../lib/openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";


contract GM is ERC20Mintable, ERC20Detailed {

    constructor() public ERC20Detailed("Game User's Money", "GUM", 18) {}

}
