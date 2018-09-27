pragma solidity 0.4.24;

import "../lib/openzeppelin-solidity/contracts/ownership/Ownable.sol";


contract User is Ownable {

    event UserSetting_2 (address indexed user, string name, string ipfs);

    string public constant DEFAULT_NAME = "beta player";

    mapping(address=>Account) public accounts;

    struct Account {
        string name;
        string ipfs;
        bool   exists;
    }

    function createUserAccount() public {
        Account storage account = accounts[msg.sender];
        require(!account.exists);
        account.exists = true;
        // account.name = addressToString(msg.sender);
        account.name = DEFAULT_NAME;
        
        emit UserSetting_2 (msg.sender, account.name, account.ipfs);
    }

    function setName(string _name) public {
        Account storage account = accounts[msg.sender];   
        require(account.exists);     
        account.name = _name;

        emit UserSetting_2 (msg.sender, account.name, account.ipfs);
    }

    function setIpfs(string _ipfs) public {
        Account storage account = accounts[msg.sender];   
        require(account.exists);     
        account.ipfs = _ipfs;

        emit UserSetting_2 (msg.sender, account.name, account.ipfs);
    }

    function set(address _address, string _name, string _ipfs) public onlyOwner {
        Account storage account = accounts[_address];   

        account.name = _name;
        account.ipfs = _ipfs;
        account.exists = true;

        emit UserSetting_2 (_address, account.name, account.ipfs);
    }

    function getAccount() public view returns (
        bool exists,
        string  name,
        string  ipfs
    ) {
        Account storage account = accounts[msg.sender];
        if (account.exists) {
            return (true, account.name, account.ipfs);
        }
        return (false, "", "");
    }

    function get(address _address) public view returns (
        bool exists,
        string  name,
        string  ipfs
    ) {
        Account storage account = accounts[_address];
        return (account.exists, account.name, account.ipfs);
    }

    function addressToString(address _address) public pure returns (string) {
        bytes32 value = bytes32(uint256(_address));
        bytes memory alphabet = "0123456789abcdef";
        bytes memory str = new bytes(51);
        str[0] = '0';
        str[1] = 'x';
        for (uint i = 0; i < 20; i++) {
            str[2+i*2] = alphabet[uint(value[i + 12] >> 4)];
            str[3+i*2] = alphabet[uint(value[i + 12] & 0x0f)];
        }
        return string(str);
    }
}
