pragma solidity 0.4.24;

import "../lib/openzeppelin-solidity/contracts/access/roles/SignerRole.sol";


contract Rank is SignerRole {

    int16 public constant SWAP_LIMIT = 20;

    int16 public participants;
    mapping(int16=>address) public rankToAddress;
    mapping(address=>int16) public addressToRank;

    function participate(address _participant) public onlySigner {
        participants++;
        rankToAddress[participants] = _participant;
        addressToRank[_participant] = participants;
    }

    function list(int16 _from) public view returns (address[SWAP_LIMIT] results) {
        if(_from < 1) _from = 1;
        for (uint8 i = 0; i < SWAP_LIMIT; i++) {
            results[i] = rankToAddress[_from + i];
        }
    }
    
    function getRank(address _address) public view returns (int16) {
        return addressToRank[_address];
    }
    
    function getAddress(int16 _rank) public view returns (address) {
        return rankToAddress[_rank];
    }

    function swap(address _address1, address _address2) public onlySigner {
        int16 _rank1 = addressToRank[_address1];
        int16 _rank2 = addressToRank[_address2];
        
        if(_rank1 > _rank2 && _rank2 >= _rank1 - SWAP_LIMIT) {
            addressToRank[_address1] = _rank2;
            addressToRank[_address2] = _rank1;
            rankToAddress[_rank2] = _address1;
            rankToAddress[_rank1] = _address2;
        }
    }
}