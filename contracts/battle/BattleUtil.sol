pragma solidity 0.4.24;

import {BattleContext as BC} from "./BattleContext.sol";


library BattleUtil {

    function checkEnd(BC.Battle storage battle) internal returns (bool) {

        if (battle.actionCounts > 100) {
            battle.state = BC.BattleState.timeUp;
            return true;
        }
        
        bool attackerHp0 = true;
        bool defenderHp0 = true;
        
        for (uint8 i = 0; i < 7; i++) {
            if (battle.units[i].current.hp > 0) {
                if (battle.units[i].position < 3 || battle.units[i].position == 6) {
                    attackerHp0 = false;
                } else {
                    defenderHp0 = false;
                }
            }
        }
        
        if (attackerHp0) {
            battle.state = BC.BattleState.lose;
            return true;
        } else if (defenderHp0) {
            battle.state = BC.BattleState.win;
            return true;
        }
        
        return false;
    }

    /*
      highest digit(tmp): 1
      position          : 1
      hero id           : 9
      item id 1         : 9
      item id 2         : 9
      max hp            : 4
      hp                : 4
      phy               : 3
      int               : 3
      agi               : 3
      active skill id 1 : 4
      active skill id 2 : 4
      active skill id 3 : 4
      passive skill id  : 4
    */
    function getInitialUnitData(BC.Battle storage battle) internal view returns (uint256[7]) {
        uint256[7] memory data;
        BC.Unit storage unit = battle.units[0];
        
        for (uint8 i = 0; i < 7; i++) {
            unit = battle.units[i];
            if (unit.exists) {
                uint256 digit = 77;
                uint256 tmp = 0;
                digit -= 1; tmp += uint256(1) * (10**digit); // 1
                digit -= 1; tmp += uint256(unit.position) * (10**digit); // 1
                digit -= 9; tmp += uint256(unit.heroId) * (10**digit); // 9
                digit -= 9; tmp += uint256(unit.itemId1) * (10**digit); // 9
                digit -= 9; tmp += uint256(unit.itemId2) * (10**digit); // 9
                digit -= 4; tmp += uint256(unit.original.hp) * (10**digit); // 4
                digit -= 4; tmp += uint256(unit.current.hp) * (10**digit); // 4
                digit -= 3; tmp += uint256(unit.current.phy) * (10**digit); // 3
                digit -= 3; tmp += uint256(unit.current.intl) * (10**digit); // 3
                digit -= 3; tmp += uint256(unit.current.agi) * (10**digit); // 3
                digit -= 4; tmp += uint256(unit.activeIds[0]) * (10**digit); // 4
                digit -= 4; tmp += uint256(unit.activeIds[1]) * (10**digit); // 4
                digit -= 4; tmp += uint256(unit.activeIds[2]) * (10**digit); // 4
                digit -= 4; tmp += uint256(unit.passiveId) * (10**digit); // 4
                data[i] = tmp;
            }
        }
        
        return data;
    }

    /*
      highest digit(tmp): 1
      position          : 1
      hp                : 4
      phy               : 3
      int               : 3
      agi               : 3
      charge            : 4
      status            : 1
      active skill counts : 3
      passive skill enabled : 1
      extra     : 1
    */
    function getActionUnitData(BC.Battle storage battle) internal view returns (uint128[7]) {
        uint128[7] memory data;
        BC.Unit storage unit = battle.units[0];
        
        for (uint8 i = 0; i < 7; i++) {
            unit = battle.units[i];
            if (unit.exists) {
                uint256 digit = 38;
                uint256 tmp = 0;
                digit -= 1; tmp += uint256(1) * (10**digit); // 1
                digit -= 1; tmp += uint256(unit.position) * (10**digit); // 1
                digit -= 4; tmp += uint256(unit.current.hp) * (10**digit); // 4
                digit -= 3; tmp += uint256(unit.current.phy) * (10**digit); // 3
                digit -= 3; tmp += uint256(unit.current.intl) * (10**digit); // 3
                digit -= 3; tmp += uint256(unit.current.agi) * (10**digit); // 3
                digit -= 4; tmp += uint256(unit.charge) * (10**digit); // 4
                digit -= 1; tmp += uint256(unit.state) * (10**digit); // 1
                digit -= 3; tmp += uint256(unit.activeCounts) * (10**digit); // 3
                digit -= 1; if (unit.passiveEnabled) tmp += uint256(1) * (10**digit); // 1
                digit -= 1; tmp += uint256(unit.extra) * (10**digit); // 1
                data[i] = uint128(tmp);
            }
        }

        return data;
    }

    function nextActionInit(BC.Battle storage battle) internal {
        battle.actionCounts++;
        battle.damage = 0;
        delete battle.effectUnits;
        
    }
    
    function getEffectPositions(BC.Battle storage battle) internal view returns(bool[7]) {
        bool[7] memory positions;
        for (uint8 i = 0; i < 7; i++) {
            if (battle.effectUnits[i]) {
                positions[battle.units[i].position] = true;
            }
        }
        return positions;
    }
}
