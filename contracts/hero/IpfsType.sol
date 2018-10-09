pragma solidity 0.4.24;

import "../lib/openzeppelin-solidity/contracts/ownership/Ownable.sol";


contract IpfsType is Ownable {

    mapping(string => uint16) internal ipfsTypes;

    function set(string _ipfs, uint16 _type) public onlyOwner {
        ipfsTypes[_ipfs] = _type;
    }

    function get(string _ipfs) public view returns (uint16) {
        return ipfsTypes[_ipfs];
    }
}
