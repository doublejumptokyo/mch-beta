let ExtensionManager = artifacts.require('ExtensionManager')

module.exports = function(deployer) {
    deployer.then(async function() {
        const extensionManager = await ExtensionManager.deployed()

        let extensions = [
            [4008,"Three Musketeers' Musket",0,8,24,0,2012,4,9999],
            [3012,"Brave Kabuto",42,0,10,0,2013,3,9999],
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
