let HeroManager = artifacts.require('HeroManager')

module.exports = function(deployer) {
    deployer.then(async function() {
        let heroManager = await HeroManager.deployed()

        let heroes = [
            [3004,"Mata Hari","",84,21,47,52,2001,1039,3,250],
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
