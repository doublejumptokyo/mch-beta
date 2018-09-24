pragma solidity ^0.4.23;

import {BattleContext as BC} from "./BattleContext.sol";
import "./BattleCharge.sol";
import "./BattleSkill.sol";
import "./BattleUtil.sol";


contract BattleTransaction {

    event BattleStart(uint32 indexed battleId, address indexed attacker, address indexed defender, uint256[7] data);
    event BattleAction(uint32 indexed battleId, uint8 actionCounts, uint16 skillId, uint8 actionPosition, bool[7] effectPositions, int16 poisonDamage, uint128[7] data);
    event BattleEnd(uint32 indexed battleId, address indexed attacker, address indexed defender, uint8 result);

    using BattleCharge for BC.Battle;
    using BattleSkill for BC.Battle;
    using BattleUtil for BC.Battle;

    uint32 public currentId = 100;
    uint32[] public incompleteIds;
    mapping(uint32 => BC.Battle) internal battles;
    mapping(uint16 => BC.Skill) internal skills;
    
    constructor() public {
        initSkill(1, uint8(BC.SkillCondition.none), 100);
        addSkillEffect(1, uint8(BC.EffectTarget.random), uint8(BC.EffectParam.hp), uint8(BC.EffectCalc.myPhy), 100, 100, true);
    }

    function init(address _attacker, address _defender) public returns (uint32) {
        currentId++;
        BC.Battle storage battle = battles[currentId];
        battle.exists = true;
        battle.id = currentId;
        battle.attacker = _attacker;
        battle.defender = _defender;
        battle.actionCounts = 1;
        battle.state = BC.BattleState.init;
        incompleteIds.push(currentId);
        return currentId;
    }
    
    function initFrom(uint32 battleId) public returns (uint32) {
        BC.Battle storage fromBattle = battles[battleId];
        require(fromBattle.exists);
        require(fromBattle.state != BC.BattleState.init && fromBattle.state != BC.BattleState.progress);

        uint32 toBattleId = init(fromBattle.attacker, fromBattle.defender);
        uint8 unitIndex = 0;
        for (uint8 i = 0; i < 7; i++) {
            BC.Unit storage unit = fromBattle.units[i];
            if (unit.exists && (unit.position < 3 || unit.position == 6)) {
                unit.current.phy = unit.original.phy;
                unit.current.intl = unit.original.intl;
                unit.current.agi = unit.original.agi;
                unit.charge = 0;
                unit.activeCounts = 0;
                unit.passiveEnabled = true;
                battles[toBattleId].units[unitIndex] = unit;
                unitIndex++;
            }
        }

        return toBattleId;
    }

    function setUnit(
        uint32 _battleId, uint8 _position, uint256[3] _ids, int16[4] _params, uint16[4] _skills
    ) public {
        BC.Battle storage battle = battles[_battleId];
        require(battle.exists);
        
        for (uint8 i = 0; i < 7; i++) {
            BC.Unit storage unit = battle.units[i];
            require(!(unit.exists && unit.position == _position));
            if (!unit.exists) {
                unit.exists = true;
                unit.position = _position;
                unit.original.hp = _params[0];
                unit.original.phy = _params[1];
                unit.original.intl = _params[2];
                unit.original.agi = _params[3];
                unit.current.hp = _params[0];
                unit.current.phy = _params[1];
                unit.current.intl = _params[2];
                unit.current.agi = _params[3];
                unit.activeIds[0] = _skills[0];
                unit.activeIds[1] = _skills[1];
                unit.activeIds[2] = _skills[2];
                unit.passiveId = _skills[3];
                unit.heroId = uint32(_ids[0]);
                unit.itemId1 = uint32(_ids[1]);
                unit.itemId2 = uint32(_ids[2]);
                unit.passiveEnabled = true;
                return;
            }
        }
    }

    function start(uint32 battleId) public {
        BC.Battle storage battle = battles[battleId];
        require(battle.exists);
        emit BattleStart(battle.id, battle.attacker, battle.defender, battle.getInitialUnitData());
        battle.state = BC.BattleState.progress;
    }

    function end(uint32 battleId) public {
        BC.Battle storage battle = battles[battleId];
        require(battle.exists);
        require(battle.state != BC.BattleState.init && battle.state != BC.BattleState.progress);
        
        delete battles[battleId];
    }

    function next(uint32 battleId) public returns (BC.BattleState) {
        uint16 skillId;

        BC.Battle storage battle = battles[battleId];
        require(battle.exists);

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
            emit BattleEnd(battle.id, battle.attacker, battle.defender, uint8(battle.state));
            uint lastIndex = incompleteIds.length - 1;
            for (uint index = 0; index < incompleteIds.length; index++) {
                if (incompleteIds[index] == battleId) break;
            }
            incompleteIds[index] = incompleteIds[lastIndex];
            incompleteIds.length--;
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
