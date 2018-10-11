let BattleTransaction2 = artifacts.require('BattleTransaction2')

module.exports = function (deployer) {
    deployer.then(async function() {
        /*
        let skillConsitions = [
            [3102,0,100],
            [3103,0,100],
        ]

        let skillEffects = [
            [3102,1,1,0,50,40,true],
            [3102,0,4,1,20,20,false],
            [3103,1,1,0,50,40,true],
            [3103,0,2,1,20,20,false],
        ]
        */

        let skillConsitions = [
            [3007,0,100],
            [3008,0,100],
            [3101,0,100],
            [3104,0,100],
            [3105,0,100],
        ]

        let skillEffects = [
            [3007,1,1,0,50,30,true],
            [3007,1,7,1,50,50,false],
            [3008,4,1,3,20,20,false],
            [3101,2,1,1,30,20,true],
            [3104,2,1,0,30,15,true],
            [3105,0,2,1,10,10,false],
            [3105,0,3,1,10,10,false],
            [3105,0,4,1,10,10,false],
        ]

        const transaction = await BattleTransaction2.deployed()

        for(let i in skillConsitions) {
            await transaction.initSkill(
                skillConsitions[i][0],
                skillConsitions[i][1],
                skillConsitions[i][2],
            )
        }

        for(let i in skillEffects) {
            await transaction.addSkillEffect(
                skillEffects[i][0],
                skillEffects[i][1],
                skillEffects[i][2],
                skillEffects[i][3],
                skillEffects[i][4],
                skillEffects[i][5],
                skillEffects[i][6],
            )
        }
    })
}
