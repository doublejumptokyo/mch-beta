pragma solidity 0.4.24;

import {BattleContext as BC} from "./BattleContext.sol";


library BattleSkill {

    function nextActiveSkillId(BC.Battle storage battle, uint8 unitIndex) internal returns (uint16) {
        uint8 activeIndex = battle.units[unitIndex].activeCounts++ % 3;
        return battle.units[unitIndex].activeIds[activeIndex];
    }
    
    function getPositionIndex(BC.Battle storage battle, uint8 position) internal view returns (int8) {
        for (int8 i = 0; i < 7; i++) {
            if (battle.units[uint8(i)].position == position) return i;
        }
        return -1;
    } 

    function getTargets(BC.Battle storage battle, BC.EffectTarget target) internal returns (uint8[6] results, uint8 size) {
        uint8 i;
        uint8 resultIndex;
        BC.Unit storage unit = battle.units[battle.actionUnit];
        if (!unit.exists) return;

        if (target == BC.EffectTarget.self) {
            results[0] = battle.actionUnit;
            return (results, 1);
        }
        
        if (target == BC.EffectTarget.random) {
            uint8[6] memory randomCandidate;
            uint8 randomCandidateSize = 0;
            for (i = 0; i < 7; i++) {
                unit = battle.units[i];
                if (unit.exists && unit.position < 6 && unit.current.hp > 0) {
                    randomCandidate[randomCandidateSize++] = i;
                }
            }
            results[0] = randomCandidate[uint8(getRandom(battle, randomCandidateSize))];
            return (results, 1);
        }

        bool isAttacker = false;
        if (unit.position < 3) isAttacker = true;

        int8[3] memory candidates;
        if (
            (isAttacker && (target == BC.EffectTarget.enemyFirst || target == BC.EffectTarget.enemyAll)) ||
            (!isAttacker && (target == BC.EffectTarget.allyFirst || target == BC.EffectTarget.allyAll || target == BC.EffectTarget.allyLowestHp))
        ) {
            candidates[0] = getPositionIndex(battle, 3);
            candidates[1] = getPositionIndex(battle, 4);
            candidates[2] = getPositionIndex(battle, 5);
        } else {
            candidates[0] = getPositionIndex(battle, 0);
            candidates[1] = getPositionIndex(battle, 1);
            candidates[2] = getPositionIndex(battle, 2);
        }

        if (target == BC.EffectTarget.enemyFirst || target == BC.EffectTarget.allyFirst) {
            for (i = 0; i < 3; i++) {
                if (candidates[i] < 0) continue;
                if (battle.units[uint8(candidates[i])].current.hp > 0) {
                    results[resultIndex++] = uint8(candidates[i]);
                    break;
                }
            }
        } else if (target == BC.EffectTarget.enemyAll || target == BC.EffectTarget.allyAll) {
            for (i = 0; i < 3; i++) {
                if (candidates[i] < 0) continue;
                if (battle.units[uint8(candidates[i])].current.hp > 0) {
                    results[resultIndex++] = uint8(candidates[i]);
                }
            }
        } else if (target == BC.EffectTarget.allyLowestHp) {
            int16 minHp = 32767; // max int16 = 32767
            uint8 minIndex;
            for (i = 0; i < 3; i++) {
                if (candidates[i] < 0) continue;
                int16 hp = battle.units[uint8(candidates[i])].current.hp;
                if (hp > 0 && minHp > hp) {
                    minHp = hp;
                    minIndex = uint8(candidates[i]);
                }
            }
            results[resultIndex++] = minIndex;
        }

        return (results, resultIndex);
    }

    function occurEffect(BC.Battle storage battle, BC.Effect storage effect) internal {
        require(effect.exists);
        
        BC.Unit storage actionUnit = battle.units[battle.actionUnit];
        BC.Unit storage unit = battle.units[0];
        uint8[6] memory targets;
        uint8 targetSize;
        (targets, targetSize) = getTargets(battle, effect.target);
        
        for (uint8 i = 0; i < targetSize; i++) {
            unit = battle.units[targets[i]];
            battle.effectUnits[targets[i]] = true;

            // bad status
            if (effect.param == BC.EffectParam.poison || effect.param == BC.EffectParam.sleep || effect.param == BC.EffectParam.confusion) {
                if (unit.state != BC.UnitState.normal) continue;
                int32 successRate = int32(effect.rate) * actionUnit.current.intl / unit.current.intl;
                if (int16(getRandom(battle, 100)) > successRate) continue;
                if (effect.param == BC.EffectParam.poison) unit.state = BC.UnitState.poison;
                else if (effect.param == BC.EffectParam.sleep) unit.state = BC.UnitState.sleep;
                else if (effect.param == BC.EffectParam.confusion) unit.state = BC.UnitState.confusion;
                continue;
            }

            int16 rate;
            if (effect.rate == effect.minRate) rate = effect.rate;
            else rate = effect.minRate + int16(getRandom(battle, uint16(effect.rate - effect.minRate)));
            if (effect.damage) rate *= -1;

            int32 points;
            if (effect.calc == BC.EffectCalc.myPhy) {
                points = int32(actionUnit.current.phy) * rate / 100;
            } else if (effect.calc == BC.EffectCalc.myIntl) {
                points = int32(actionUnit.current.intl) * rate / 100;
            } else if (effect.calc == BC.EffectCalc.myAgi) {
                points = int32(actionUnit.current.agi) * rate / 100;
            } else if (effect.calc == BC.EffectCalc.myIntlYourPhy) {
                points = int32(actionUnit.current.intl + unit.current.phy) * rate / 200;
            } else if (effect.calc == BC.EffectCalc.damage) {
                points = int32(battle.damage) * rate / 100;
            } else if (effect.calc == BC.EffectCalc.myMaxHp) {
                points = int32(actionUnit.original.hp) * rate / 100;
            }

            int16 diff;
            int16 damageCut = 0;
            if (effect.param == BC.EffectParam.hp) {
                if (points < 0 && effect.calc == BC.EffectCalc.myPhy) {
                    damageCut = unit.current.phy / 2;
                    if (damageCut > 40) damageCut = 40;
                } else if (points < 0 && effect.calc == BC.EffectCalc.myIntl) {
                    damageCut = unit.current.intl / 2;
                    if (damageCut > 40) damageCut = 40;
                }
                diff = int16(points * (100 - damageCut) / 100);
                if (unit.current.hp + diff < 0) {
                    diff = -unit.current.hp;
                } else if (unit.current.hp + diff > unit.original.hp) {
                    diff = unit.original.hp - unit.current.hp;
                }
                unit.current.hp += diff;
                //checkStatus(battle, targets[i]);
                if (battle.passiveLoop == 0 && diff < 0) {
                    battle.damage -= diff;
                    unit.damage -= diff;
                }
                if (unit.current.hp == 0) {
                    unit.current.phy = unit.original.phy;
                    unit.current.intl = unit.original.intl;
                    unit.current.agi = unit.original.agi;
                    unit.charge = 0;
                    unit.state = BC.UnitState.normal;
                }
            } else if (effect.param == BC.EffectParam.phy) {
                unit.current.phy += int16(points);
                if (unit.current.phy < 0) unit.current.phy = 0;
            } else if (effect.param == BC.EffectParam.intl) {
                unit.current.intl += int16(points);
                if (unit.current.intl < 0) unit.current.intl = 0;
            } else if (effect.param == BC.EffectParam.agi) {
                unit.current.agi += int16(points);
                if (unit.current.agi < 0) unit.current.agi = 0;
            }
            
        }

    }

    function useSkill(BC.Battle storage battle, BC.Skill storage skill) internal {
        require(skill.exists);
        uint8 i;

        for (i = 0; i < skill.effects.length; i++) {
            occurEffect(battle, skill.effects[i]);
        }
    }
    
    function checkState(BC.Battle storage battle, uint8 unitIndex) internal returns (BC.UnitState) {
        BC.Unit storage unit = battle.units[unitIndex];
        require(unit.exists);
        
        if (unit.state == BC.UnitState.sleep || unit.state == BC.UnitState.confusion) {
            if (getRandom(battle, 100) < 50) unit.state = BC.UnitState.normal;
        }
        
        return unit.state;
    }
    
    function poisonDamage(BC.Battle storage battle) internal returns (int16) {
        BC.Unit storage unit = battle.units[battle.activeUnit];
        require(unit.exists);
        
        if (unit.state == BC.UnitState.poison) {
            int16 damage = unit.original.hp * 5 / 100;
            if (damage > unit.current.hp) damage = unit.current.hp;
            unit.current.hp -= damage;
            if (unit.current.hp == 0) {
                unit.current.phy = unit.original.phy;
                unit.current.intl = unit.original.intl;
                unit.current.agi = unit.original.agi;
                unit.charge = 0;
                unit.state = BC.UnitState.normal;
            }
        }
        
        return damage;
    }

    function usePassiveSkill(BC.Battle storage battle, BC.Skill storage skill) internal returns (bool) {
        require(skill.exists);
        
        BC.Unit storage unit = battle.units[battle.actionUnit];
        if (!unit.exists || !unit.passiveEnabled || unit.current.hp == 0 || !(unit.position < 6) || unit.state == BC.UnitState.sleep || unit.state == BC.UnitState.confusion) return false;

        if (skill.condition == BC.SkillCondition.active) {
            if (battle.passiveLoop == 1 && battle.activeUnit == battle.actionUnit && int16(getRandom(battle, 100)) < skill.rate) {
                useSkill(battle, skill);
                return true;
            }
        } else if (skill.condition == BC.SkillCondition.opning) {
            unit.passiveEnabled = false;
            if (int16(getRandom(battle, 100)) < skill.rate) {
                useSkill(battle, skill);
                return true;
            }
        } else if (skill.condition == BC.SkillCondition.counter) {
            if (battle.passiveLoop == 1 && unit.damage > 0) {
                unit.damage = 0;
                if (int16(getRandom(battle, 100)) < skill.rate) {
                    useSkill(battle, skill);
                    return true;
                }
            }
        } else if (skill.condition == BC.SkillCondition.selfHp) {
            if (unit.current.hp < unit.original.hp * skill.rate / 100) {
                unit.passiveEnabled = false;
                useSkill(battle, skill);
                return true;
            }
        } else if (skill.condition == BC.SkillCondition.allyHp) {
            int16 maxHpSum;
            int16 hpSum;
            uint8 i;
            int8 unitIndex;
            if (unit.position < 3) {
                for (i = 0; i < 3; i++) {
                    unitIndex = getPositionIndex(battle, i);
                    if (unitIndex < 0) continue;
                    maxHpSum += battle.units[uint8(unitIndex)].original.hp;
                    hpSum += battle.units[uint8(unitIndex)].current.hp;
                }
            } else {
                for (i = 3; i < 6; i++) {
                    unitIndex = getPositionIndex(battle, i);
                    if (unitIndex < 0) continue;
                    maxHpSum += battle.units[uint8(unitIndex)].original.hp;
                    hpSum += battle.units[uint8(unitIndex)].current.hp;
                }
            }
            if (hpSum < maxHpSum * skill.rate / 100) {
                unit.passiveEnabled = false;
                useSkill(battle, skill);
                return true;
            }
        } else if (skill.condition == BC.SkillCondition.death) {
            if (unit.current.hp == 0) {
                unit.passiveEnabled = false;
                if (int16(getRandom(battle, 100)) < skill.rate) {
                    useSkill(battle, skill);
                    return true;
                }
            }
        } else if (skill.condition == BC.SkillCondition.every) {
            if (battle.passiveLoop == 1 && int16(getRandom(battle, 100)) < skill.rate) {
                useSkill(battle, skill);
                return true;
            }
        }
        return false;
    }

    function getRandom(BC.Battle storage battle, uint16 max) internal returns(uint16) {
        return uint16(
            keccak256(
                abi.encodePacked(blockhash(block.number-1), battle.randomCounts++)
            )) % max;
    }

    
}
