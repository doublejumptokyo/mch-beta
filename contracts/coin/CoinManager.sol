pragma solidity ^0.4.23;

import "./GM.sol";
import "../lib/openzeppelin-solidity/contracts/ownership/Ownable.sol";
import "../user/User.sol";

contract CoinManager is Ownable {

    mapping (address=>uint128) gmPool;

    uint16 dailyBonusRate = 1;
    uint128 maxBonus = 100;
    uint16 affiliateFee = 20;

    GM gm;    
    User user;

    function setGMAddress(address _GMAddress) public {
        gm = GM(_GMAddress);
    }

    function setUser(address _userAddress) public {
        user = User(_userAddress);
    }

    function setDailyBonusRate (uint16 _dailyBonusRate) public {
        dailyBonusRate = _dailyBonusRate;
    }

    function setMaxBonus (uint128 _maxBonus ) public {
        maxBonus = _maxBonus;
    }

    function setAffiliateFee (uint16 _affiliateFee) public {
        affiliateFee = _affiliateFee;
    }

    function getDaylyBonus () public {
        uint64 _lastLogin;
        (,,,,_lastLogin,)  = user.getAccount(msg.sender); 
        require(_lastLogin + 1 days < block.timestamp);
        uint _bonus;
        _bonus = gm.balanceOf(msg.sender) * dailyBonusRate / 100;
        if(_bonus > maxBonus){
            _bonus = maxBonus;
        }  
        gm.transfer(msg.sender, _bonus);
        user.updateLastDailyBonusAt(msg.sender, uint64(block.timestamp));
    }

    function sendGM (uint128 _gmAmount, address _to) public onlyOwner {
        address _affiliateEtherAddress;
        (,_affiliateEtherAddress,,,,)  = user.getAccount(msg.sender);         
        
        address _affiliateLoomAddress = user.etherAddressToLoomAddress(_affiliateEtherAddress);
        uint128 _affiliateFee = _gmAmount * affiliateFee / 100; 

        if(_affiliateLoomAddress != address(0x0)){
            gm.transfer(_affiliateLoomAddress, _affiliateFee);
        } else {
            gmPool[_affiliateEtherAddress] += _affiliateFee;
        }
        gm.transfer(_to, _gmAmount);
    }    

    function sendInitialGM() public {
        address ownEthereumAddress;
        (ownEthereumAddress,,,,,) = user.getAccount(msg.sender);

        uint128 _gmAmount = gmPool[ownEthereumAddress];
        if (_gmAmount > 0) {
            gmPool[ownEthereumAddress] = 0;
            gm.transfer(msg.sender, _gmAmount);
        } 
    }

}