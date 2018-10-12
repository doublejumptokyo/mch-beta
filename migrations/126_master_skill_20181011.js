let BattleTransaction2 = artifacts.require('BattleTransaction2')

module.exports = function (deployer) {
    deployer.then(async function() {
        let skillConsitions = [
            [1039,1,100],
        ]

        let skillEffects = [
            [1039,1,3,1,10,10,true],
            [1039,0,1,1,40,20,true],
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
