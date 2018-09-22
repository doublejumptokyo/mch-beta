pragma solidity ^0.4.23;

contract User {

    address coinManagerAddress; 
    
    mapping(address=>address) public etherAddressToLoomAddress;
    mapping(address=>Account) public loomAccounts;

    struct Account {
        address ownEthereumAddress;
        address affiliateEthereumAddress;
        bytes  name;
        bytes  ipfs;
        uint64  lastDailyBonusAt; 
        bool    exists;
    }

    modifier onlyCoinManagerAddress() {
        require(msg.sender == coinManagerAddress);
        _;
    }

    function createUserAccount(address _ownEthereumAddress) public {
        Account storage account = loomAccounts[msg.sender];
        require(!account.exists);
        etherAddressToLoomAddress[_ownEthereumAddress] = msg.sender;
        account.ownEthereumAddress = _ownEthereumAddress;
        account.exists = true;
    }

    function setName(string _name) public {
        Account storage account = loomAccounts[msg.sender];   
        require(account.exists);     
        account.name = bytes(_name);        
    } 

    function setIpfs(string _ipfs) public {
        Account storage account = loomAccounts[msg.sender];   
        require(account.exists);     
        account.ipfs = bytes(_ipfs);        
    }     

    function setAffiliate(address _affiliateEthereumAddress) public {
        Account storage account = loomAccounts[msg.sender];   
        require(account.exists);     
        account.affiliateEthereumAddress = _affiliateEthereumAddress;
    }
    
    function getAccount(address _address) public returns (
        address _ownEthereumAddress,
        address _affiliateEthereumAAddress,
        string  _name,
        string  _ipfs,
        uint64  _lastDailyBonusAt,
        bool    _exists 
    ) {
        Account memory _account = loomAccounts[_address];
        _ownEthereumAddress = _account.ownEthereumAddress;
        _affiliateEthereumAAddress = _account.affiliateEthereumAddress;
        _name = string(_account.name);
        _ipfs = string(_account.ipfs);
        _lastDailyBonusAt = _account.lastDailyBonusAt;
        _exists = _account.exists;
    }

    function updateLastDailyBonusAt(address _address, uint64 _at) public onlyCoinManagerAddress {
        Account storage account = loomAccounts[_address];   
        require(account.exists);     
        account.lastDailyBonusAt = _at;        
    }

}