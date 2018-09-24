let HeroManager = artifacts.require('HeroManager')

module.exports = function(deployer) {
    deployer.then(async function() {
        let heroManager = await HeroManager.deployed()

        let heroes = [
            [5001,"Nobunaga Oda","",150,66,34,42,2001,1001,5,10],
            [5002,"Napoleon Bonaparte","",129,37,64,48,2001,1002,5,10],
            [5003,"CaoCao","",159,45,42,28,2001,1003,5,20],
            [5004,"George Washington","",129,38,45,42,2001,1004,5,20],
            [5005,"Leonardo da Vinci","",117,31,56,42,2001,1005,5,20],
            [4001,"ZhangFei","",174,47,34,17,2001,1006,4,100],
            [4002,"Florence Nightingale","",120,30,47,39,2001,1007,4,100],
            [4003,"Ludwigvan Beethoven","",108,34,47,39,2001,1008,4,100],
            [4004,"Kojiro Sasaki","",108,47,21,52,2001,1009,4,100],
            [4005,"Kaishu Katsu","",132,39,34,39,2001,1010,4,100],
            [4006,"Billy theKid","",120,26,43,47,2001,1011,4,100],
            [4007,"Thomas Edison","",159,30,43,30,2001,1012,4,100],
            [4008,"Marco Polo","",132,39,34,39,2001,1013,4,100],
            [4009,"Masamune Date","",120,56,26,34,2001,1014,4,100],
            [3001,"ETHEREMON-RED","",147,42,26,31,2001,1015,3,1000],
            [2001,"Wright Brothers","",90,12,42,60,2001,1016,2,2500],
            [1001,"MCHWarrior","",105,42,25,34,2001,1033,1,9999],
            [1002,"MCHTactician","",105,25,42,34,2001,1034,1,9999],
            [1003,"MCHArtist","",102,34,34,34,2001,1035,1,9999],
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
