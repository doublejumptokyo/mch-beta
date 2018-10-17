let HeroManager = artifacts.require('HeroManager')

module.exports = function(deployer) {
    deployer.then(async function() {
        let heroManager = await HeroManager.deployed()

        let heroes = [
            [3005,"ETHEREMON-BLUE","",147,15,47,37,2001,1040,3,500],
            [3006,"ETHEREMON-GREEN","",111,37,37,37,2001,1041,3,500],
            [2003,"Jack the Ripper","",90,48,6,60,2001,1042,2,500],
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
