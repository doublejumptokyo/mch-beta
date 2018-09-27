const E_URL = 'https://beta.mycryptoheroes.net/events';

E_NAME_USER_SETTING = '0xce5d88da863190896c4a6d05cbffc08a5de9c16482223f47351c2710c0eee7eb';

E_ABI_USER_SETTING =
[
{
  "indexed": true,
  "name": "user",
  "type": "address"
},
{
  "indexed": false,
  "name": "name",
  "type": "string"
},
{
  "indexed": false,
  "name": "ipfs",
  "type": "string"
}
];


(async()=>{

    let req = {};
    req.limit = 1000;
    req.name = E_NAME_USER_SETTING;
    let res = await $nuxt.$axios.get(E_URL, {params: req});

    let users = [];
    for (let index in res.data) {
        let rawEvent = res.data[index];
        rawEvent.topics.shift();
        let user = $nuxt.$accountManager.web3.eth.abi.decodeLog(E_ABI_USER_SETTING, rawEvent.data, rawEvent.topics);
        users.push(user);
    }

    let result = '';
    users.reverse().forEach(user => {
        result += "user.set('" + user.user + "','" + user.name + "','');\n";
    });

    console.log(result);
})();
