pragma solidity ^0.4.24;

import "../lib/openzeppelin-solidity/contracts/ownership/Ownable.sol";


contract EtherPool is Ownable {

    event EtherRecieved(address sender, uint value);
    
    uint128 minimumEther = 0.01 ether;

    function () external payable {
        require(msg.value >= minimumEther);
        emit EtherRecieved(msg.sender, msg.value);
    }

    function withdraw () public onlyOwner {
        owner().transfer(address(this).balance);
    }

}