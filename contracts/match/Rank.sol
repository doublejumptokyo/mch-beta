pragma solidity 0.4.24;

import "../lib/openzeppelin-solidity/contracts/access/roles/SignerRole.sol";


contract Rank is SignerRole {

    event RankChange (address indexed user, int16 indexed current, int16 indexed prev);

    int16 public constant VIEW_LIMIT = 20;

    int16 public participants;
    mapping(int16=>address) public rankToAddress;
    mapping(address=>int16) public addressToRank;

    uint8 public swapLimit = 9;
    uint64 public swapSince = 1539828000;
    uint64 public swapUntil = 1540101600;

    function changeSwapLimit(uint8 _swapLimit) public onlySigner {
        swapLimit = _swapLimit;
    }
    
    function changeSwapPeriod(uint64 _since, uint64 _until) public onlySigner {
        require(_since < _until);
        swapSince = _since;
        swapUntil = _until;
    }

    function participate(address _participant) public onlySigner {
        participants++;
        rankToAddress[participants] = _participant;
        addressToRank[_participant] = participants;
        
        emit RankChange (_participant, participants, -1);
    }

    function list(int16 _from) public view returns (address[VIEW_LIMIT] results) {
        if(_from < 1) _from = 1;
        for (uint8 i = 0; i < VIEW_LIMIT; i++) {
            results[i] = rankToAddress[_from + i];
        }
    }
    
    function getRank(address _address) public view returns (int16) {
        return addressToRank[_address];
    }
    
    function getAddress(int16 _rank) public view returns (address) {
        return rankToAddress[_rank];
    }
    
    function getParticipants() public view returns (int16) {
        return participants;
    }

    function swap(address _address1, address _address2) public onlySigner {
        uint64 _now = uint64(block.timestamp);
        if (_now < swapSince || swapUntil < _now) return;

        int16 _rank1 = addressToRank[_address1];
        int16 _rank2 = addressToRank[_address2];
        
        if (_rank1 > _rank2 && _rank2 >= _rank1 - swapLimit) {
            addressToRank[_address1] = _rank2;
            addressToRank[_address2] = _rank1;
            rankToAddress[_rank2] = _address1;
            rankToAddress[_rank1] = _address2;
            emit RankChange (_address1, _rank2, _rank1);
            emit RankChange (_address2, _rank1, _rank2);
        }
        
    }
}
