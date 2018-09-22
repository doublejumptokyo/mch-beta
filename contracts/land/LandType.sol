pragma solidity ^0.4.23;

import "../lib/openzeppelin-solidity/contracts/ownership/Ownable.sol";

contract LandType is Ownable {
    
    mapping(uint16 => LandTypeData) internal landTypes;
    uint16 constant supplyLimit = 10000;

    struct LandTypeData {
        bytes  landName;
        bytes  image;
        uint16 supply;
        bool   exists;
    }

    function setLandType(
        uint16 _landType,
        string _landName,
        string _image,
        uint16 _supply
    ) public onlyOwner {
        require(_landType > 0);
        require(_supply > 0 && _supply < supplyLimit);
        require(!landTypes[_landType].exists);
        landTypes[_landType] = LandTypeData(
            bytes(_landName),
            bytes(_image),
            _supply,
            true
        );
    }

    function getLandType(uint16 _landType) public view returns (
        string _landName,
        string _image,        
        uint16 _supply
    ) {
        LandTypeData storage landTypeData = landTypes[_landType];
        require(landTypeData.exists);        
        _landName = string(landTypeData.landName);
        _image = string(landTypeData.image);
        _supply = landTypeData.supply;
    }
    
}