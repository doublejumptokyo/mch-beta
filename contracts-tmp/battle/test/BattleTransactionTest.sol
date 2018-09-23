pragma solidity ^0.4.23;

import "../BattleTransaction.sol";

contract BattleTransactionTest is BattleTransaction {

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

    function setSkill() public {

        initSkill(23, Condition$none, 100);
        addSkillEffect(23, Target$enemyAll, Param$hp, Calc$myPhy, 10, 10, true);

        initSkill(100, Condition$selfHp50, 50);
        addSkillEffect(100, Target$enemyAll, Param$hp, Calc$myPhy, 30, 30, true);

    }

/*
    function initData() public {
        setSkill();
        setBattle2();
    }

    function setBattle() public {
        uint32 battleId = init();
        
        BattleContext.Unit memory unit;
        unit.exists = true;
        unit.passiveSkillId = 100;

        unit.current.hp = 200;
        unit.current.phy = 50;
        unit.current.agi = 100;
        unit.activeSkillIds[0] = 23;
        unit.position = 1;
        set(battleId, unit);

        unit.current.hp = 100;
        unit.current.intl = 30;
        unit.current.agi = 90;
        unit.position = 2;
        set(battleId, unit);

        unit.current.hp = 180;
        unit.current.phy = 40;
        unit.current.intl = 60;
        unit.current.agi = 110;
        unit.activeSkillIds[0] = 23;
        unit.position = 3;
        set(battleId, unit);

        unit.current.hp = 0;
        unit.current.agi = 100;
        unit.position = 4;
        set(battleId, unit);

        unit.current.hp = 125;
        unit.original.hp = 125;
        unit.current.intl = 60;
        unit.current.agi = 100;
        unit.position = 5;
        set(battleId, unit);

        unit.current.hp = 225;
        unit.original.hp = 225;
        unit.current.intl = 40;
        unit.current.agi = 90;
        unit.position = 6;
        set(battleId, unit);
        
    }

    function setBattle2() public {
        uint32 battleId = init();
        
        BattleContext.Unit memory unit;
        unit.exists = true;
        unit.passiveSkillId = 100;
        unit.activeSkillIds[0] = 23;
        unit.activeSkillIds[1] = 23;
        unit.activeSkillIds[2] = 23;

        unit.heroId = 999999999;
        unit.itemId1 = 888888888;
        unit.itemId2 = 777777777;
        unit.original.hp = 200;
        unit.current.hp = 200;
        unit.current.phy = 90;
        unit.current.intl = 89;
        unit.current.agi = 88;
        unit.position = 1;
        set(battleId, unit);

        unit.original.hp = 199;
        unit.current.hp = 199;
        unit.current.phy = 80;
        unit.current.intl = 79;
        unit.current.agi = 78;
        unit.position = 2;
        set(battleId, unit);

        unit.original.hp = 198;
        unit.current.hp = 198;
        unit.current.phy = 70;
        unit.current.intl = 69;
        unit.current.agi = 68;
        unit.position = 3;
        set(battleId, unit);

        unit.original.hp = 197;
        unit.current.hp = 197;
        unit.current.phy = 100;
        unit.current.intl = 99;
        unit.current.agi = 98;
        unit.position = 4;
        set(battleId, unit);

        unit.original.hp = 196;
        unit.current.hp = 196;
        unit.current.phy = 97;
        unit.current.intl = 96;
        unit.current.agi = 95;
        unit.position = 5;
        set(battleId, unit);

        unit.original.hp = 195;
        unit.current.hp = 190;
        unit.current.phy = 94;
        unit.current.intl = 93;
        unit.current.agi = 92;
        unit.position = 6;
        set(battleId, unit);
        
    }
    */

    function getBattleHps(uint32 id) public view returns (int16[7] result) {
        for(uint8 i = 0; i < 7; i++) {
            result[i] = battles[id].units[i].current.hp;
        }
    }

}