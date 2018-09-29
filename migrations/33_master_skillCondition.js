let BattleTransaction = artifacts.require('./BattleTransaction.sol')

module.exports = function (deployer) {
    deployer.then(async function() {
        let skillConsitions = [
            [1001,1,10],
            [1002,1,10],
            [1003,1,100],
            [1004,1,10],
            [1005,4,60],
            [1006,6,100],
            [1007,1,10],
            [1008,1,10],
            [1009,1,100],
            [1010,1,10],
            [1011,3,100],
            [1012,1,15],
            [1013,6,100],
            [1014,1,10],
            [1015,1,10],
            [1016,2,100],
            [1017,4,70],
            [1018,4,50],
            [1019,4,40],
            [1020,6,50],
            [1021,4,50],
            [1022,1,100],
            [1023,2,100],
            [1024,1,100],
            [1025,1,100],
            [1026,4,60],
            [1027,4,50],
            [1028,6,100],
            [1029,3,50],
            [1030,6,100],
            [1031,1,100],
            [1032,3,50],
            [1033,4,50],
            [1034,4,50],
            [1035,6,50],
            [2001,0,100],
            [2002,0,100],
            [2003,0,100],
            [2004,0,100],
            [2005,0,100],
            [2006,0,100],
            [2007,0,100],
            [2008,0,100],
            [2009,0,100],
            [2010,0,100],
            [2011,0,100],
        ]

        const transaction = await BattleTransaction.deployed()

        for(let i in skillConsitions) {
            await transaction.initSkill(
                skillConsitions[i][0],
                skillConsitions[i][1],
                skillConsitions[i][2],
            )
        }
    })
}
