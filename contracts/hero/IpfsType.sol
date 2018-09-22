pragma solidity ^0.4.23;

import "../lib/openzeppelin-solidity/contracts/ownership/Ownable.sol";

contract IpfsType is Ownable {

    mapping(bytes => uint16) internal ipfsTypes;

    function set(string _ipfs, uint16 _type) public onlyOwner {
        ipfsTypes[bytes(_ipfs)] = _type;
    }

    function get(string _ipfs) public view returns (uint16) {
        return ipfsTypes[bytes(_ipfs)];
    }
}