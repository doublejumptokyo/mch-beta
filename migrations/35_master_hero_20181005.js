let HeroManager = artifacts.require('HeroManager')

module.exports = function(deployer) {
    deployer.then(async function() {
        let heroManager = await HeroManager.deployed()

        let heroes = [
            [2002,"Spartacus","",264,23,17,16,2001,1036,2,1000],
            [3002,"MCHD'Artagnan","",99,21,47,47,2001,1037,3,9999],
            [3003,"MCHHiraga Gennai","",117,31,47,31,2001,1038,3,9999],
        ]

        for(let i in heroes) {
            await heroManager.setHeroType(
                heroes[i][0],
                heroes[i][1],
                heroes[i][2],
                heroes[i][3],
                heroes[i][4],
                heroes[i][5],
                heroes[i][6],
                heroes[i][7],
                heroes[i][8],
                heroes[i][9],
                heroes[i][10],
            )
        }
    })
}
