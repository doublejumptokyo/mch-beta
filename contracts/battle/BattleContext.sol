pragma solidity ^0.4.24;


library BattleContext {

    enum BattleState {init, progress, win, lose, timeUp, finished}
    enum UnitState {normal, poison, sleep, confusion}
    enum SkillCondition {none, active, opning, counter, selfHp, allyHp, death, every}
    enum EffectTarget {self, enemyFirst, enemyAll, allyFirst, allyAll, allyLowestHp, random}
    enum EffectParam {none, hp, phy, intl, agi, poison, sleep, confusion}
    enum EffectCalc {myPhy, myIntl, myAgi, myIntlYourPhy, damage, myMaxHp}

    struct Battle {
        bool exists;
        uint32 id;
        address attacker;
        address defender;
        BattleState state;
        uint8 actionCounts;
        uint16 randomCounts;
        Unit[7] units;
        uint8 activeUnit;
        uint8 actionUnit;
        int16 damage;
        bool[7] effectUnits;
        uint8 passiveLoop;
    }

    struct Unit {
        bool exists;
        uint8 position; // 210(6) vs 345
        uint32 heroId;
        uint32 itemId1;
        uint32 itemId2;
        Param original;
        Param current;
        int16 charge;
        uint8 activeCounts;
        uint16[3] activeIds;
        uint16 passiveId;
        bool passiveEnabled;
        UnitState state;
        uint8 extra;
        int16 damage;
    }

    struct Param {
        int16 hp;
        int16 phy;
        int16 intl;
        int16 agi;
    }

    struct Skill {
        bool exists;
        SkillCondition condition;
        int16 rate;
        Effect[] effects;
    }

    struct Effect {
        bool exists;
        EffectTarget target;
        EffectParam param;
        EffectCalc calc;
        int16 rate;
        int16 minRate;
        bool damage;
    }

}
