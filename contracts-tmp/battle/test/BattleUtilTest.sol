pragma solidity ^0.4.23;

import "../BattleContext.sol";
import "../BattleUtil.sol";

contract BattleUtilTest {

    using BattleUtil for BattleContext.Battle;
    BattleContext.Battle battle;
    
    function init() internal {
        battle.actionCounts = 0;
        battle.randomCounts = 0;
        delete battle.units;
        battle.activeUnit = 0;
    }

    uint8 constant Condition$none = 0;
    uint8 constant Condition$active = 1;
    uint8 constant Condition$opning = 2;
    uint8 constant Condition$counter = 3;
    uint8 constant Condition$selfHp50 = 4;
    uint8 constant Condition$allyHp50 = 5;
    uint8 constant Condition$death = 6;

    uint8 constant Target$self = 0;
    uint8 constant Target$enemyFirst = 1;
    uint8 constant Target$enemyAll = 2;
    uint8 constant Target$allyFirst = 3;
    uint8 constant Target$allyAll = 4;
    uint8 constant Target$allyLowestHp = 5;

    uint8 constant Param$none = 0;
    uint8 constant Param$hp = 1;
    uint8 constant Param$phy = 2;
    uint8 constant Param$intl = 3;
    uint8 constant Param$agi = 4;

    uint8 constant Calc$myPhy = 0;
    uint8 constant Calc$myIntl = 1;
    uint8 constant Calc$myAgi = 2;
    uint8 constant Calc$bothIntl = 3;
    uint8 constant Calc$damage = 4;

    uint8 constant Success$always = 0;
    uint8 constant Success$enemyIntl = 1;
    uint8 constant Success$bothIntl = 2;

    function setBattle() public {
        init();
        
        BattleContext.Unit memory unit;
        unit.exists = true;

        unit.heroId = 999999999;
        unit.itemId1 = 888888888;
        unit.itemId2 = 777777777;
        unit.original.hp = 200;
        unit.current.hp = 200;
        unit.current.phy = 90;
        unit.current.intl = 89;
        unit.current.agi = 88;
        unit.activeIds[0] = 1111;
        unit.activeIds[1] = 2222;
        unit.activeIds[2] = 3333;
        unit.passiveId = 5555;
        unit.state = BattleContext.UnitState.confusion;
        unit.charge = 1234;
        unit.activeCounts = 99;
        unit.position = 0;
        battle.units[0] = unit;

        unit.original.hp = 199;
        unit.current.hp = 199;
        unit.current.phy = 80;
        unit.current.intl = 79;
        unit.current.agi = 78;
        unit.position = 1;
        battle.units[1] = unit;

        unit.original.hp = 198;
        unit.current.hp = 198;
        unit.current.phy = 70;
        unit.current.intl = 69;
        unit.current.agi = 68;
        unit.position = 2;
        battle.units[2] = unit;

        unit.original.hp = 197;
        unit.current.hp = 197;
        unit.current.phy = 100;
        unit.current.intl = 99;
        unit.current.agi = 98;
        unit.position = 3;
        battle.units[3] = unit;

        unit.original.hp = 196;
        unit.current.hp = 196;
        unit.current.phy = 97;
        unit.current.intl = 96;
        unit.current.agi = 95;
        unit.position = 4;
        battle.units[4] = unit;

        unit.original.hp = 195;
        unit.current.hp = 190;
        unit.current.phy = 94;
        unit.current.intl = 93;
        unit.current.agi = 92;
        unit.position = 5;
        battle.units[5] = unit;

    }

    event BattleStart(uint32 indexed battleId, uint256[7] data);
    function testGetInitialUnitData() public {
        setBattle();
        
        uint256[7] memory result = battle.getInitialUnitData();
        assert(result[0] == 10999999999888888888777777777020002000900890881111222233335555000000000000000);
        assert(result[1] == 11999999999888888888777777777019901990800790781111222233335555000000000000000);

        emit BattleStart(1, result);
    }
    
    event BattleAction(uint32 indexed battleId, uint8 actionCount, uint128[7] data);
    function testGetActionUnitData() public {
        setBattle();
        
        uint128[7] memory result = battle.getActionUnitData();
        assert(result[0] == 10020009008908812343099000000000000000);
        assert(result[1] == 11019908007907812343099000000000000000);

        emit BattleAction(1, 1, result);
    }
}
