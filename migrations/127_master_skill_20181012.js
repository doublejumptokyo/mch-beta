let BattleTransaction2 = artifacts.require('BattleTransaction2')

module.exports = function (deployer) {
    deployer.then(async function() {
        let skillConsitions = [
            [1040,1,10],
            [1041,1,10],
            [1042,1,100],
        ]

        let skillEffects = [
            [1040,1,1,1,50,50,true],
            [1041,4,1,3,30,30,false],
            [1042,6,1,0,30,10,true],
            [1042,0,4,2,5,5,false],
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
