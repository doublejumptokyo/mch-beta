let HeroManager = artifacts.require('HeroManager')

module.exports = function (deployer) {
    deployer.then(async function() {
        let heroManager = await HeroManager.deployed()

        await heroManager.addMinter('0xbb96f87282a72acc26f217f45e3381013f06db14')


        //await heroManager.addMinter('0xE0078b70fC486334724F2d8deb57aF0BAf3355eA')
        //await heroManager.addMinter('0x09258a2D8989EFDc1E5F2132cFa6bE5d04AC2EBc')
        /*
            local address: 0x09258a2D8989EFDc1E5F2132cFa6bE5d04AC2EBc
            local address base64: CSWKLYmJ79weXyEyz6a+XQSsLrw=
            cat priv_key 
            bOP87I6QXqYe1FcxqTtQs7BBqlxnsBM6OFui8yiy1hxPEzOayit2IC21SaB1nNklGDLZBpXyZyq2rzM19UvaSw==~/devs/go-mydapps$ 
            cat pub_key 
            TxMzmsordiAttUmgdZzZJRgy2QaV8mcqtq8zNfVL2ks=
        */
    });
}
