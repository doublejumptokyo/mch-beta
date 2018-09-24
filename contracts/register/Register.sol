pragma solidity 0.4.24;

import "../hero/HeroManager.sol";
import "../extension/ExtensionManager.sol";
import "../deck/DeckManager.sol";
import "../match/Rank.sol";
import "../lib/openzeppelin-solidity/contracts/ownership/Ownable.sol";


contract Register is Ownable {
    
    event Registration (address indexed user);

    mapping(address => bool) private registrations;

    HeroManager public heroManager;
    ExtensionManager public extensionManager;
    DeckManager public deckManager;
    Rank public rank;

    function setHeroManagerAddress(address _heroManagerAddress) public onlyOwner {
        heroManager = HeroManager(_heroManagerAddress);
    }

    function setExtensionManagerAddress(address _extensionManagerAddress) public onlyOwner {
        extensionManager = ExtensionManager(_extensionManagerAddress);
    }

    function setDeckManagerAddress(address _deckManagerAddress) public onlyOwner {
        deckManager = DeckManager(_deckManagerAddress);
    }
    
    function setRankAddress(address _rankAddress) public onlyOwner {
        rank = Rank(_rankAddress);
    }
    
    function register() public {
        if(!registrations[msg.sender]) {
            uint256[6] memory _unit1;
            uint256[6] memory _unit2;
            uint256[6] memory _unit3;

            _unit1[0] = heroManager.mintHeroByType(msg.sender, 1001);
            _unit1[1] = extensionManager.mintExtensionByType(msg.sender, 1001);
            _unit1[2] = extensionManager.mintExtensionByType(msg.sender, 3011);
            _unit1[3] = 1;
            _unit1[4] = 0;
            _unit1[5] = 2;

            _unit2[0] = heroManager.mintHeroByType(msg.sender, 1002);
            _unit2[1] = extensionManager.mintExtensionByType(msg.sender, 3008);
            _unit2[2] = extensionManager.mintExtensionByType(msg.sender, 3007);
            _unit2[3] = 1;
            _unit2[4] = 0;
            _unit2[5] = 2;

            _unit3[0] = heroManager.mintHeroByType(msg.sender, 1003);
            _unit3[1] = extensionManager.mintExtensionByType(msg.sender, 4006);
            _unit3[2] = extensionManager.mintExtensionByType(msg.sender, 3010);
            _unit3[3] = 1;
            _unit3[4] = 0;
            _unit3[5] = 2;

            deckManager.setInitialDeck(msg.sender, _unit1, _unit2, _unit3);

            extensionManager.mintExtensionByType(msg.sender, 3001);
            extensionManager.mintExtensionByType(msg.sender, 3006);
            extensionManager.mintExtensionByType(msg.sender, 5004);
            extensionManager.mintExtensionByType(msg.sender, 5006);

            rank.participate(msg.sender);

            registrations[msg.sender] = true;
            
            emit Registration(msg.sender);
        }
    }
    
    function isRegistered() public view returns (bool) {
        return registrations[msg.sender];
    }

}
