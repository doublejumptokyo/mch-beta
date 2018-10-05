let BattleTransaction = artifacts.require('./BattleTransaction.sol')

module.exports = function (deployer) {
    deployer.then(async function() {
        let skillConsitions = [
            [1036,4,20],
            [1037,2,100],
            [1038,4,60],
            [2012,0,100],
            [2013,0,100],
        ]

        let skillEffects = [
            [2004,5,1,3,80,80,false],
            [2010,5,1,3,40,40,false],
            [1036,2,3,1,15,15,true],
            [1037,4,2,1,20,20,false],
            [1037,4,3,1,20,20,false],
            [1038,2,1,1,40,30,true],
            [2012,2,1,1,15,10,true],
            [2013,0,2,1,10,10,false],
            [2013,0,3,1,10,10,false],
        ]

        const transaction = await BattleTransaction.deployed()

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
