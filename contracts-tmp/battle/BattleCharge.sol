pragma solidity ^0.4.23;

import {BattleContext as BC} from "./BattleContext.sol";

library BattleCharge {

    int16 constant baseCharge = 100;
    int16 constant actionCharge = 1000;

    function charge(BC.Battle storage battle) internal {

        uint8 i;
        BC.Unit storage unit = battle.units[0]; // temporary initializing
        int16 minChargeTime = 1000;
        int16 chargeDiff;
        int16 chargeTime;
        int16 maxCharge;
        uint8 maxPosition = 255;
        uint8 nextActiveUnit;

        for(i = 0; i < 7; i++) {
            unit = battle.units[i];
            if(!unit.exists || unit.position > 6 || unit.current.hp == 0) continue;
            chargeDiff = actionCharge - unit.charge;
            if(chargeDiff <= 0) {
                chargeTime = 0;
            } else {
                chargeTime = (chargeDiff - 1) / (baseCharge + unit.current.agi) + 1;
            }
            if(chargeTime < minChargeTime) minChargeTime = chargeTime;
        }

        for(i = 0; i < 7; i++) {
            unit = battle.units[i];
            if(!unit.exists || unit.position > 6 || unit.current.hp == 0) continue;
            unit.charge += (baseCharge + unit.current.agi) * minChargeTime;
            if(unit.charge > maxCharge || (unit.charge == maxCharge && unit.position < maxPosition)) {
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
