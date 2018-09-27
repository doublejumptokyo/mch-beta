pragma solidity 0.4.24;

import {BattleContext as BC} from "./BattleContext.sol";


library BattleCharge {

    int16 constant private BASE_CHARGE = 100;
    int16 constant private REQUIRED_CHARGE = 1000;
    uint8 constant private BATTLE_UNITS_LIMIT = 6;
    uint8 constant private UNITS_LIMIT = 7;

    function charge(BC.Battle storage battle) internal {

        uint8 i;
        BC.Unit storage unit = battle.units[0]; // temporary initializing
        int16 minChargeTime = 1000;
        int16 chargeDiff;
        int16 chargeTime;
        int16 maxCharge;
        uint8 maxPosition = 255;
        uint8 nextActiveUnit;

        for (i = 0; i < UNITS_LIMIT; i++) {
            unit = battle.units[i];
            if (!unit.exists || unit.position >= BATTLE_UNITS_LIMIT || unit.current.hp == 0) continue;
            chargeDiff = REQUIRED_CHARGE - unit.charge;
            if (chargeDiff <= 0) {
                chargeTime = 0;
            } else {
                chargeTime = (chargeDiff - 1) / (BASE_CHARGE + unit.current.agi) + 1;
            }
            if (chargeTime < minChargeTime) minChargeTime = chargeTime;
        }

        for (i = 0; i < UNITS_LIMIT; i++) {
            unit = battle.units[i];
            if (!unit.exists || unit.position >= BATTLE_UNITS_LIMIT || unit.current.hp == 0) continue;
            unit.charge += (BASE_CHARGE + unit.current.agi) * minChargeTime;
            if (unit.charge > maxCharge || (unit.charge == maxCharge && unit.position < maxPosition)) {
                maxCharge = unit.charge;
                maxPosition = unit.position;
                nextActiveUnit = i;
            }
        }

        battle.activeUnit = nextActiveUnit;
        battle.actionUnit = nextActiveUnit;
        battle.units[nextActiveUnit].charge = 0;
    }

}
