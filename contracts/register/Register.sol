pragma solidity 0.4.24;

import "../hero/HeroManager.sol";
import "../lib/openzeppelin-solidity/contracts/ownership/Ownable.sol";


contract Register is Ownable {

    mapping(address => bool) private registrations;

    HeroManager public heroManager;

    function setHeroManagerAddress(address _heroManagerAddress) public onlyOwner {
        heroManager = HeroManager(_heroManagerAddress);
    }
    
    function register() public {
        if(!registrations[msg.sender]) {
            // heroManager.mintHero(msg.sender, defaultHeroId1);
            // heroManager.mintHero(msg.sender, defaultHeroId2);
            registrations[msg.sender] = true;
        }
    }
    
    function isRegistered() public view returns (bool) {
        return registrations[msg.sender];
    }

}
