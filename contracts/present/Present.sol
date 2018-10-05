pragma solidity 0.4.24;

import "../hero/HeroManager.sol";
import "../extension/ExtensionManager.sol";
import "../deck/DeckManager.sol";
import "../match/Rank.sol";
import "../lib/openzeppelin-solidity/contracts/ownership/Ownable.sol";


contract Present is Ownable {
    
    event PresentReceived (address indexed user, uint8 presentType, uint16 assetType);

    mapping(address => uint16) public addressToReceived;
    PresentItem[] public presents;    
    HeroManager public heroManager;
    ExtensionManager public extensionManager;
    
    struct PresentItem {
        uint8 presentType; // none:0, hero:1, extension:2
        uint16 assetType;
    }

    constructor() public {
        presents.push(PresentItem(0, 0));
    }

    function setHeroManagerAddress(address _heroManagerAddress) public onlyOwner {
        heroManager = HeroManager(_heroManagerAddress);
    }

    function setExtensionManagerAddress(address _extensionManagerAddress) public onlyOwner {
        extensionManager = ExtensionManager(_extensionManagerAddress);
    }

    function setPresentItem(uint8 presentType, uint16 assetType) public onlyOwner {
        presents.push(PresentItem(presentType, assetType));
    }
    
    function receive() public {
        uint16 received = addressToReceived[msg.sender];
        if (received == presents.length) return;

        while (received < presents.length) {
            PresentItem storage item = presents[received];
            if (item.presentType == 1) {
                heroManager.mintHeroByType(msg.sender, item.assetType);
                emit PresentReceived(msg.sender, item.presentType, item.assetType);
            } else if (item.presentType == 2) {
                extensionManager.mintExtensionByType(msg.sender, item.assetType);
                emit PresentReceived(msg.sender, item.presentType, item.assetType);
            }
            received++;
        }
        addressToReceived[msg.sender] = received;
    }
    
    function canReceive() public view returns (bool) {
        return addressToReceived[msg.sender] < presents.length;
    }

}
