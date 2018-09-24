let ExtensionManager = artifacts.require('ExtensionManager')

module.exports = function(deployer) {
    deployer.then(async function() {
        const extensionManager = await ExtensionManager.deployed()

        let extensions = [
            [5006,"Codex Atlanticus",0,0,27,13,2002,5,9999],
            [5004,"Heshikiri Hasebe",0,25,0,15,2003,5,9999],
            [4006,"Crime and Punishment",0,0,32,0,2004,4,9999],
            [3011,"Brave Shield",51,7,0,0,2005,3,9999],
            [3010,"Brave Armor",72,0,0,0,2006,3,9999],
            [3008,"Brave Musket",0,6,18,0,2007,3,9999],
            [3007,"Wisdom Quill",21,0,17,0,2008,3,9999],
            [3006,"Wisdom book",0,0,14,10,2009,3,9999],
            [3001,"Brave Blade",0,24,0,0,2010,3,9999],
            [1001,"Novice Blade",0,8,0,0,2011,1,9999],
        ]

        for(let i in extensions) {
            await extensionManager.setExtensionType(
                extensions[i][0],
                extensions[i][1],
                extensions[i][2],
                extensions[i][3],
                extensions[i][4],
                extensions[i][5],
                extensions[i][6],
                extensions[i][7],
                extensions[i][8],
            )
        }

    })
}
