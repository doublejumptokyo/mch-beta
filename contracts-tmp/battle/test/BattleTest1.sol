pragma solidity ^0.4.23;

import "../BattleTransaction.sol";

contract BattleTest1 is BattleTransaction {

    event BattleInit(uint32 battleId);

    function initData() public {
        setSkill();
        setBattle();
    }

    function setSkill() public {

        initSkill(3, uint8(BC.SkillCondition.none), 100);
        addSkillEffect(3, uint8(BC.EffectTarget.enemyFirst), uint8(BC.EffectParam.hp), uint8(BC.EffectCalc.myPhy), 100, 100, true);

        initSkill(2, uint8(BC.SkillCondition.none), 100);
        addSkillEffect(2, uint8(BC.EffectTarget.enemyAll), uint8(BC.EffectParam.hp), uint8(BC.EffectCalc.myPhy), 40, 40, true);

        initSkill(11, uint8(BC.SkillCondition.none), 100);
        addSkillEffect(11, uint8(BC.EffectTarget.enemyFirst), uint8(BC.EffectParam.hp), uint8(BC.EffectCalc.myIntl), 100, 100, true);

        initSkill(12, uint8(BC.SkillCondition.none), 100);
        addSkillEffect(12, uint8(BC.EffectTarget.enemyAll), uint8(BC.EffectParam.hp), uint8(BC.EffectCalc.myIntl), 40, 40, true);

        initSkill(21, uint8(BC.SkillCondition.none), 100);
        addSkillEffect(21, uint8(BC.EffectTarget.allyLowestHp), uint8(BC.EffectParam.hp), uint8(BC.EffectCalc.myIntlYourPhy), 100, 100, false);

        initSkill(22, uint8(BC.SkillCondition.none), 100);
        addSkillEffect(22, uint8(BC.EffectTarget.allyAll), uint8(BC.EffectParam.hp), uint8(BC.EffectCalc.myIntlYourPhy), 40, 40, false);


        initSkill(100, uint8(BC.SkillCondition.selfHp), 50);
        addSkillEffect(100, uint8(BC.EffectTarget.enemyAll), uint8(BC.EffectParam.hp), uint8(BC.EffectCalc.myPhy), 40, 40, true);
    }

    function setSkillBeta() public {
        initSkill(1000, uint8(BC.SkillCondition.selfHp), 50);
        addSkillEffect(1000, uint8(BC.EffectTarget.enemyFirst), uint8(BC.EffectParam.hp), uint8(BC.EffectCalc.myIntl), 150, 150, true);

        initSkill(1001, uint8(BC.SkillCondition.selfHp), 50);
        addSkillEffect(1001, uint8(BC.EffectTarget.enemyFirst), uint8(BC.EffectParam.hp), uint8(BC.EffectCalc.myPhy), 150, 150, true);

        initSkill(1002, uint8(BC.SkillCondition.active), 100);
        addSkillEffect(1002, uint8(BC.EffectTarget.self), uint8(BC.EffectParam.hp), uint8(BC.EffectCalc.damage), 10, 10, false);

        initSkill(1003, uint8(BC.SkillCondition.allyHp), 50);
        addSkillEffect(1003, uint8(BC.EffectTarget.allyAll), uint8(BC.EffectParam.hp), uint8(BC.EffectCalc.myIntl), 50, 50, false);
        addSkillEffect(1003, uint8(BC.EffectTarget.allyAll), uint8(BC.EffectParam.phy), uint8(BC.EffectCalc.myIntl), 30, 30, false);
        addSkillEffect(1003, uint8(BC.EffectTarget.allyAll), uint8(BC.EffectParam.intl), uint8(BC.EffectCalc.myIntl), 30, 30, false);

        initSkill(1004, uint8(BC.SkillCondition.selfHp), 60);
        addSkillEffect(1004, uint8(BC.EffectTarget.enemyAll), uint8(BC.EffectParam.hp), uint8(BC.EffectCalc.myIntl), 80, 80, true);

        initSkill(1005, uint8(BC.SkillCondition.death), 100);
        addSkillEffect(1005, uint8(BC.EffectTarget.self), uint8(BC.EffectParam.hp), uint8(BC.EffectCalc.myMaxHp), 30, 30, false);

        initSkill(1006, uint8(BC.SkillCondition.allyHp), 50);
        addSkillEffect(1006, uint8(BC.EffectTarget.allyAll), uint8(BC.EffectParam.hp), uint8(BC.EffectCalc.myIntl), 100, 100, false);

        initSkill(1007, uint8(BC.SkillCondition.allyHp), 50);
        addSkillEffect(1007, uint8(BC.EffectTarget.enemyAll), uint8(BC.EffectParam.phy), uint8(BC.EffectCalc.myIntl), 25, 25, true);
        addSkillEffect(1007, uint8(BC.EffectTarget.enemyAll), uint8(BC.EffectParam.intl), uint8(BC.EffectCalc.myIntl), 25, 25, true);
        addSkillEffect(1007, uint8(BC.EffectTarget.enemyAll), uint8(BC.EffectParam.agi), uint8(BC.EffectCalc.myIntl), 25, 25, true);

        setSkillId(1000);
        setSkillId(1001);
        setSkillId(1002);
        setSkillId(1003);
        setSkillId(1004);
        setSkillId(1005);
        setSkillId(1006);
        setSkillId(1007);
    }

    function initEx() public {
        uint32 battleId = init();
        emit BattleInit(battleId);
    }

    uint16[] skillIds;
    function setSkillId(uint16 id) public {
        for(uint16 i = 0; i < skillIds.length; i++) {
            if(skillIds[i] == id) return;
        }
        skillIds.push(id);
    }
    
    function getSkillIds() public view returns (uint16 length, uint16[1000] ids) {
        length = uint16(skillIds.length);
        for(uint16 i = 0; i < skillIds.length; i++) {
            ids[i] = skillIds[i];
        }
    }

    function setBattle() public returns (uint32) {
        uint32 battleId = init();

        setUnit(0, 500, 100, 50, 50, 1, 2, 1, 100, 1001, 1002, 1003, battleId);
        setUnit(1, 300, 120, 30, 50, 2, 1, 2, 100, 2001, 2002, 2003, battleId);
        setUnit(2, 300, 50, 100, 50, 11, 12, 21, 100, 3001, 3002, 3003, battleId);
        setUnit(3, 500, 100, 50, 50, 1, 1, 1, 100, 4001, 4002, 4003, battleId);
        setUnit(4, 400, 130, 40, 30, 2, 2, 2, 100, 5001, 5002, 5003, battleId);
        setUnit(5, 300, 20, 150, 30, 12, 11, 22, 100, 6001, 6002, 6003, battleId);

        emit BattleInit(battleId);
        return battleId;
    }

    function getBattleHps(uint32 id) public view returns (int16[7] result) {
        for(uint8 i = 0; i < 7; i++) {
            result[i] = battles[id].units[i].current.hp;
        }
    }

}
