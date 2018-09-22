pragma solidity ^0.4.23;

import "./LandType.sol";

contract Land is LandType {

    mapping(uint256 => LandData) internal lands;
    mapping(uint16 => uint256[]) internal landTypeIds;    

    address public landManagerAddress;
    
    struct LandData {
        uint16 landType;
        bool   exists;
    }

    modifier onlyLandManagerAddress() {
        require(msg.sender == landManagerAddress);
        _;
    }

    function setLandManagerAddress(address _landManagerAddress) public onlyOwner {
        landManagerAddress = _landManagerAddress;
    }
    
    function createLand(uint16 _landType) public onlyLandManagerAddress returns (uint256) {
        LandTypeData memory landTypeData = landTypes[_landType];
        require(landTypeIds[_landType].length < landTypeData.supply);
        uint256 _landId = _landType * supplyLimit + landTypeIds[_landType].length + 1;
        LandData storage landData = lands[_landId];
        landData.landType = _landType;
        landData.exists = true;
        landTypeIds[_landType].push(_landId);        
        return _landId;
    } 
    
    function getLand(uint256 _landId) public view returns (
        uint16  _landType,
        string  _imageIpfs
    ) {
        LandData memory landData = lands[_landId];
        LandTypeData memory landTypeData = landTypes[landData.landType];
        _landType = landData.landType;
        _imageIpfs = string(landTypeData.image);
    }

}