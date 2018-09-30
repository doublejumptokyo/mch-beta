pragma solidity 0.4.24;

import {BattleContext as BC} from "./BattleContext.sol";
import "./BattleCharge.sol";
import "./BattleSkill.sol";
import "./BattleUtil.sol";


contract BattleTransaction2 {

    event BattleAction(uint32 indexed battleId, uint8 actionCounts, uint16 skillId, uint8 actionPosition, bool[7] effectPositions, int16 poisonDamage, uint128[7] data);
    event BattleEnd(uint32 indexed battleId, address indexed attacker, address indexed defender, uint8 result);

    using BattleCharge for BC.Battle;
    using BattleSkill for BC.Battle;
    using BattleUtil for BC.Battle;

    mapping(uint32 => BC.Battle) internal battles;
    mapping(uint16 => BC.Skill) internal skills;
    
    constructor() public {
        initSkill(1, uint8(BC.SkillCondition.none), 100);
        addSkillEffect(1, uint8(BC.EffectTarget.random), uint8(BC.EffectParam.hp), uint8(BC.EffectCalc.myPhy), 100, 100, true);
    }
    
    function setBattle(uint32 _battleId, uint256[7] _data, uint16 _randomSeed) public {
        BC.Battle memory battle;
        battle.exists = true;
        battle.id = _battleId;
        battle.actionCounts = 1;
        battle.state = BC.BattleState.init;
        battle.activeUnit = 6;
        battle.randomSeed = _randomSeed;

        for (uint8 i = 0; i < 7; i++) {
            BC.Unit memory unit;
            unit.exists = true;
            uint256 data = _data[i];
            uint256 digit = 77;
            digit -= 1; data %= 10**digit;
            digit -= 1; unit.position = uint8(data/10**digit); data %= 10**digit;
            digit -= 9; data %= 10**digit;
            digit -= 9; data %= 10**digit;
            digit -= 9; data %= 10**digit;
            digit -= 4; unit.original.hp = int16(data/10**digit); data %= 10**digit;
            digit -= 4; unit.current.hp = int16(data/10**digit); data %= 10**digit;
            digit -= 3; unit.original.phy = int16(data/10**digit); data %= 10**digit;
            digit -= 3; unit.original.intl = int16(data/10**digit); data %= 10**digit;
            digit -= 3; unit.original.agi = int16(data/10**digit); data %= 10**digit;
            digit -= 4; unit.activeIds[0] = uint16(data/10**digit); data %= 10**digit;
            digit -= 4; unit.activeIds[1] = uint16(data/10**digit); data %= 10**digit;
            digit -= 4; unit.activeIds[2] = uint16(data/10**digit); data %= 10**digit;
            digit -= 4; unit.passiveId = uint16(data/10**digit); data %= 10**digit;
            unit.current.phy = unit.original.phy;
            unit.current.intl = unit.original.intl;
            unit.current.agi = unit.original.agi;
            unit.passiveEnabled = true;
            battle.units[i] = unit;
        }
    }

    function next(BC.Battle memory battle) internal returns (BC.BattleState) {
        uint16 skillId;

        bool occurePassiveSkill;
        do {
            occurePassiveSkill = false;
            battle.passiveLoop++;
            for (uint8 i = 0; i < 7; i++) {
                if (!battle.units[i].exists) continue;
                battle.actionUnit = i;
                skillId = battle.units[i].passiveId;
                if (battle.usePassiveSkill(skills[skillId])) {
                    occurePassiveSkill = true;
                    emit BattleAction(battle.id, battle.actionCounts, skillId, battle.units[battle.actionUnit].position, battle.getEffectPositions(), 0, battle.getActionUnitData());
                    battle.nextActionInit();
                }
            }
        } while (occurePassiveSkill);
        battle.passiveLoop = 0;

        if (battle.checkEnd()) {
            return battle.state;
        }

        battle.charge();
        BC.UnitState state = battle.checkState(battle.activeUnit);
        if (state != BC.UnitState.sleep) {
            if (state == BC.UnitState.confusion) skillId = 1;
            else skillId = battle.nextActiveSkillId(battle.activeUnit);
            battle.useSkill(skills[skillId]);
            int16 poisonDamage = battle.poisonDamage();
            emit BattleAction(battle.id, battle.actionCounts, skillId, battle.units[battle.actionUnit].position, battle.getEffectPositions(), poisonDamage, battle.getActionUnitData());
            battle.nextActionInit();
        }
        
        return battle.state;
    }

    function nexts(uint32 battleId, uint8 counts) public returns (BC.BattleState result) {
        for (uint8 i = 0; i < counts; i++) {
            result = next(battleId);
            if (result != BC.BattleState.progress) return;
        }
    }

    function initSkill(uint16 id, uint8 condition, int16 rate) public {
        skills[id].exists = true;
        skills[id].effects.length = 0;
        skills[id].rate = rate;
        skills[id].condition = BC.SkillCondition(condition);
    }
    
    function addSkillEffect(uint16 id, uint8 target, uint8 param, uint8 calc, int16 rate, int16 minRate, bool damage) public {
        BC.Effect memory effect;
        effect.exists = true;
        effect.target = BC.EffectTarget(target);
        effect.param = BC.EffectParam(param);
        effect.calc = BC.EffectCalc(calc);
        effect.rate = rate;
        effect.minRate = minRate;
        effect.damage = damage;
        skills[id].effects.push(effect);
    }

    function getSkill(uint16 id) public view returns (bool exist, uint8 condition, int16 conditionRate, uint8 effects, uint8[3] target, uint8[3] param, uint8[3] calc, int16[3] rate, int16[3] minRate, bool[3] damage) {
        BC.Skill storage skill = skills[id];
        exist = skill.exists;
        condition = uint8(skill.condition);
        conditionRate = int16(skill.rate);
        effects = uint8(skill.effects.length);
        for (uint8 i = 0; i < skill.effects.length; i++) {
            target[i] = uint8(skill.effects[i].target);
            param[i] = uint8(skill.effects[i].param);
            calc[i] = uint8(skill.effects[i].calc);
            rate[i] = skill.effects[i].rate;
            minRate[i] = skill.effects[i].minRate;
            damage[i] = skill.effects[i].damage;
        }
    }

}
