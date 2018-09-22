pragma solidity ^0.4.21;

import "./Land.sol";
import "./LandAsset.sol";
import "../lib/openzeppelin-solidity/contracts/ownership/Ownable.sol";

contract LandManager is Ownable {
 
    address salesAddress;

    Land public land;
    LandAsset public landAsset;

    function setLandAddress(address _landAddress) public onlyOwner {
        land = Land(_landAddress);
    }

    function setLandAssetAddress(address _landAssetAddress) public onlyOwner {
        landAsset = LandAsset(_landAssetAddress);
    }

    function createLand(uint16 _landType, address _owner) public {
        uint256 _tokenId = land.createLand(_landType);
        landAsset.mintLandAsset(_owner, _tokenId);
    }    

}