pragma solidity ^0.4.23;

import {BattleContext as BC} from "../BattleContext.sol";
import "../BattleSkill.sol";

contract BattleSkillTest {

    using BattleSkill for BC.Battle;
    BC.Battle battle;
    BC.Effect effect;

    function initBattle() internal {
        battle.exists = true;
        battle.actionCounts = 0;
        battle.randomCounts = 0;
        delete battle.units;
        battle.activeUnit = 0;
    }

    function setUnits1() internal {
        BC.Unit memory unit;

        unit.current.hp = 200;
        unit.current.phy = 40;
        unit.position = 1;
        battle.units[1] = unit;

        unit.current.hp = 100;
        unit.current.intl = 30;
        unit.position = 2;
        battle.units[2] = unit;

        unit.current.hp = 180;
        unit.current.intl = 60;
        unit.position = 3;
        battle.units[3] = unit;

        unit.current.hp = 0;
        unit.position = 4;
        battle.units[4] = unit;

        unit.current.hp = 125;
        unit.original.hp = 125;
        unit.current.intl = 60;
        unit.position = 5;
        battle.units[5] = unit;

        unit.current.hp = 225;
        unit.original.hp = 225;
        unit.current.intl = 40;
        unit.position = 6;
        battle.units[6] = unit;
    }

    function testGetTargets_1() public {
        initBattle();
        setUnits1();

        uint8[6] memory targets;
        uint8 targetSize;

        battle.actionUnit = 2;
        (targets, targetSize) = battle.getTargets(BC.EffectTarget.self);
        assert(targetSize == 1);
        assert(targets[0] == 2);

        battle.actionUnit = 2;
        (targets, targetSize) = battle.getTargets(BC.EffectTarget.enemyFirst);
        assert(targetSize == 1);
        assert(targets[0] == 5);

        battle.actionUnit = 5;
        (targets, targetSize) = battle.getTargets(BC.EffectTarget.enemyFirst);
        assert(targetSize == 1);
        assert(targets[0] == 1);

        battle.actionUnit = 2;
        (targets, targetSize) = battle.getTargets(BC.EffectTarget.enemyAll);
        assert(targetSize == 2);
        assert(targets[0] == 5);
        assert(targets[1] == 6);

        battle.actionUnit = 2;
        (targets, targetSize) = battle.getTargets(BC.EffectTarget.allyLowestHp);
        assert(targetSize == 1);
        assert(targets[0] == 2);

        battle.actionUnit = 2;
        (targets, targetSize) = battle.getTargets(BC.EffectTarget.allyFirst);
        assert(targetSize == 1);
        assert(targets[0] == 1);

        battle.actionUnit = 2;
        (targets, targetSize) = battle.getTargets(BC.EffectTarget.allyAll);
        assert(targetSize == 3);
        assert(targets[0] == 1);
        assert(targets[1] == 2);
        assert(targets[2] == 3);
    }

    function testOccurEffect_1() public {
        initBattle();
        setUnits1();

        battle.actionUnit = 2;
        effect = BC.Effect(true, BC.EffectTarget.enemyFirst, BC.EffectParam.hp, BC.EffectCalc.myIntl, 100, 100, true);
        battle.occurEffect(effect);
        assert(battle.units[5].current.hp == 104);
        
        battle.actionUnit = 1;
        effect = BC.Effect(true, BC.EffectTarget.enemyAll, BC.EffectParam.hp, BC.EffectCalc.myPhy, 90, 90, true);
        battle.occurEffect(effect);
        assert(battle.units[5].current.hp == 76);
        assert(battle.units[6].current.hp == 197);
        
        battle.actionUnit = 5;
        effect = BC.Effect(true, BC.EffectTarget.allyAll, BC.EffectParam.hp, BC.EffectCalc.myIntlYourPhy, 20, 20, false);
        battle.occurEffect(effect);
        assert(battle.units[5].current.hp == 86);
        assert(battle.units[6].current.hp == 207);

    }

    function getUnit(uint8 position, int16 maxHp, int16 hp, int16 phy, int16 intl, int16 agi) internal pure returns (BC.Unit memory unit) {
        unit.position = position;
        unit.original.hp = maxHp;
        unit.original.phy = phy;
        unit.original.intl = intl;
        unit.original.agi = agi;
        unit.current.hp = hp;
        unit.current.phy = phy;
        unit.current.intl = intl;
        unit.current.agi = agi;
    }

    function setUnits2() internal {
        battle.units[1] = getUnit(1,200, 200, 50, 50, 50);
        battle.units[2] = getUnit(2, 200, 200, 50, 50, 50);
        battle.units[3] = getUnit(3, 200, 200, 50, 50, 50);
        battle.units[4] = getUnit(4, 200, 200, 50, 50, 50);
        battle.units[5] = getUnit(5, 200, 200, 50, 50, 50);
        battle.units[6] = getUnit(6, 200, 200, 50, 50, 50);
    }

}
