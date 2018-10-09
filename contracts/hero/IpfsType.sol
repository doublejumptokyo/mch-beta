pragma solidity 0.4.24;

import "../lib/openzeppelin-solidity/contracts/access/roles/MinterRole.sol";


contract IpfsType is MinterRole {

    mapping(string => uint16) internal ipfsTypes;

    function set(string _ipfs, uint16 _type) public onlyMinter {
        ipfsTypes[_ipfs] = _type;
    }

    function get(string _ipfs) public view returns (uint16) {
        return ipfsTypes[_ipfs];
    }
}
