pragma solidity 0.4.24;

import "../hero/HeroManager.sol";
import "../lib/openzeppelin-solidity/contracts/ownership/Ownable.sol";


contract Register is Ownable {

    mapping(address => bool) public isRegistered;

    HeroManager public heroManager;

    function setHeroManagerAddress(address _heroManagerAddress) public onlyOwner {
        heroManager = HeroManager(_heroManagerAddress);
    }
    
    function register() public {
        if(!isRegistered[msg.sender]) {
            // heroManager.mintHero(msg.sender, defaultHeroId1);
            // heroManager.mintHero(msg.sender, defaultHeroId2);
            isRegistered[msg.sender] = true;
        }
    }

}
