pragma solidity 0.4.24;

import "../lib/openzeppelin-solidity/contracts/token/ERC721/ERC721Mintable.sol";
import "../lib/openzeppelin-solidity/contracts/token/ERC721/ERC721Pausable.sol";


contract HeroAsset is ERC721Mintable, ERC721Pausable {

    uint16 public constant HERO_TYPE_OFFSET = 10000;

    string public tokenURIPrefix = "https://www.mycryptoheroes.net/metadata/hero/";
    mapping(uint16 => uint16) private heroTypeToSupplyLimit;

    constructor() public ERC721Full("MyCryptoHeroes:Hero", "MCHH") {}

    function setSupplyLimit(uint16 _heroType, uint16 _supplyLimit) external onlyMinter {
        require(heroTypeToSupplyLimit[_heroType] == 0 || _supplyLimit < heroTypeToSupplyLimit[_heroType],
            "_supplyLimit is bigger");
        heroTypeToSupplyLimit[_heroType] = _supplyLimit;
    }

    function setTokenURIPrefix(string _tokenURIPrefix) external onlyMinter {
        tokenURIPrefix = _tokenURIPrefix;
    }

    function getSupplyLimit(uint16 _heroType) public view returns (uint16) {
        return heroTypeToSupplyLimit[_heroType];
    }

    function mintHeroAsset(address _owner, uint256 _tokenId) public {//onlyMinter {
        uint16 _heroType = uint16(_tokenId / HERO_TYPE_OFFSET);
        uint16 _heroTypeIndex = uint16(_tokenId % HERO_TYPE_OFFSET) - 1;
        require(_heroTypeIndex < heroTypeToSupplyLimit[_heroType], "supply over");
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
        
        for (i = 0; i < prefixBytes.length; i++) {
            tokenURIBytes[index] = prefixBytes[i];
            index++;
        }
        
        for (i = 0; i < tokenIdBytes.length; i++) {
            tokenURIBytes[index] = tokenIdBytes[i];
            index++;
        }
        
        return string(tokenURIBytes);
    }

}
