pragma solidity ^0.4.24;

import "../lib/openzeppelin-solidity/contracts/token/ERC721/ERC721Mintable.sol";
import "../lib/openzeppelin-solidity/contracts/token/ERC721/ERC721Pausable.sol";


contract LandAsset is ERC721Mintable, ERC721Pausable {

    string public tokenURIPrefix = "https://www.mycryptoheroes.net/metadata/land/";

    constructor() public ERC721Full("MCH_Land", "MCHL") {}

    function setTokenURIPrefix(string _tokenURIPrefix) external onlyMinter {
        tokenURIPrefix = _tokenURIPrefix;
    }

    function mintLandAsset(address _owner, uint256 _tokenId) public onlyMinter {
        _mint(_owner, _tokenId);
    }

    function tokenURI(uint256 tokenId) public view returns (string) {
        bytes32 tokenIdBytes;
        if (tokenId == 0) {
            tokenIdBytes = "0";
        } else {
            uint256 value = tokenId;
            while (value > 0) {
                tokenIdBytes = bytes32(uint256(tokenIdBytes) / (2 ** 8));
                tokenIdBytes |= bytes32(((value % 10) + 48) * 2 ** (8 * 31));
                value /= 10;
            }
        }

        bytes memory prefixBytes = bytes(tokenURIPrefix);
        bytes memory tokenURIBytes = new bytes(prefixBytes.length + tokenIdBytes.length);

        uint8 i;
        uint8 index = 0;
        
        for (i = 0; i < prefixBytes.length; i++){
            tokenURIBytes[index] = prefixBytes[i];
            index++;
        }
        
        for (i = 0; i < tokenIdBytes.length; i++){
            tokenURIBytes[index] = tokenIdBytes[i];
            index++;
        }
        
        return string(tokenURIBytes);
    }

}