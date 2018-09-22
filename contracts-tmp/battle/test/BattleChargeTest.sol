pragma solidity ^0.4.23;

import "../BattleContext.sol";
import "../BattleCharge.sol";

contract BattleChargeTest {
    
    using BattleCharge for BattleContext.Battle;
    BattleContext.Battle battle;
    
    function init() internal {
        battle.actionCounts = 0;
        battle.randomCounts = 0;
        delete battle.units;
        battle.activeUnit = 0;
    }
    
    function testCharge_1() public {
        init();
        
        BattleContext.Unit memory unit;
        unit.exists = true;
        unit.current.hp = 1;

        unit.current.agi = 100;
        unit.position = 0;
        battle.units[0] = unit;

        unit.current.agi = 110;
        unit.position = 3;
        battle.units[1] = unit;

        battle.charge();
        assert(battle.activeUnit == uint8(1));

    }

    function testCharge_2() public {
        init();
        
        BattleContext.Unit memory unit;
        unit.exists = true;
        unit.current.hp = 1;

        unit.current.agi = 90;
        unit.position = 1;
        battle.units[1] = unit;

        unit.current.agi = 105;
        unit.position = 2;
        battle.units[2] = unit;

        unit.current.agi = 80;
        unit.position = 3;
        battle.units[3] = unit;

        unit.current.agi = 95;
        unit.position = 4;
        battle.units[4] = unit;

        unit.current.agi = 110;
        unit.position = 5;
        battle.units[5] = unit;

        unit.current.agi = 105;
        unit.position = 6;
        battle.units[6] = unit;

        battle.charge();
        assert(battle.activeUnit == uint8(5));

        battle.charge();
        assert(battle.activeUnit == uint8(2));
    }

    function testChargeLoop(uint8 loop) public {
        init();
        
        BattleContext.Unit memory unit;
        unit.exists = true;
        unit.current.hp = 1;

        unit.current.agi = 90;
        unit.position = 1;
        battle.units[1] = unit;

        unit.current.agi = 105;
        unit.position = 2;
        battle.units[2] = unit;

        unit.current.agi = 80;
        unit.position = 3;
        battle.units[3] = unit;

        unit.current.agi = 95;
        unit.position = 4;
        battle.units[4] = unit;

        unit.current.agi = 110;
        unit.position = 5;
        battle.units[5] = unit;

        unit.current.agi = 105;
        unit.position = 6;
        battle.units[6] = unit;
        
        for(uint8 i = 0; i < loop; i++) {
            battle.charge();
        }
    }

}