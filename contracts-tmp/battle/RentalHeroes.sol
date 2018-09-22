pragma solidity ^0.4.23;

//This is for PvE
contract RentalHeroes {

    Unit[] public units;
    mapping(address=>uint) addressToUnitIndex;

    constructor () {
        Unit memory _unit;
        units.push(_unit);
    }

    struct Unit {
        uint256 hero;
        uint256 item1;
        uint256 item2;
        uint256 activeSkill1;
        uint256 activeSkill2;
        uint256 activeSkill3;
        uint256 at;
        bool lock;
    }    

    function isOwnedHeroAsset(
        uint256[6] _hero1
    ) public returns (bool){
        return true;
    }

    function isUnitAvailable(uint256 _index) public returns (bool) {
        Unit memory _unit = units[_index];
        return (_unit.at >= block.timestamp + 1 days || _unit.lock == false );
    }

    function setDeck(
        uint256[6] _hero    
    ) public {
        require(isOwnedHeroAsset(_hero));
        Unit memory _unit; 
        _unit.hero = _hero[0];
        _unit.item1 = _hero[1];
        _unit.item2 = _hero[2];
        _unit.activeSkill1 = _hero[3];
        _unit.activeSkill2 = _hero[4];
        _unit.activeSkill3 = _hero[5];
        uint _index = addressToUnitIndex[msg.sender];
        if(_index == 0 ) {
            addressToUnitIndex[msg.sender] = units.push(_unit) - 1;
        } else {
            units[_index] = _unit;
        }
    }    

    function getDeck(uint _index) public returns(uint256[6] _output){
        Unit memory _unit = units[_index];
        _output[0] = _unit.hero;
        _output[1] = _unit.item1;
        _output[2] = _unit.item2;
        _output[3] = _unit.activeSkill1;
        _output[4] = _unit.activeSkill2;
        _output[5] = _unit.activeSkill3;
    }

    function rentalUnit(uint _index) public {
        require(isUnitAvailable(_index));
        units[_index].lock = true; 
    }

    function returnUnit(uint _index) public {
        units[_index].lock = false; 
    }

    
  
}