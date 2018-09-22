importScripts('/static/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "mch-beta",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/static/app.f250b1cafe8b9daae72a.js",
    "revision": "eb6ab2bd3aa57153b3a318db9dc6aff0"
  },
  {
    "url": "/static/layouts/battle.3601288ee8c2a46431e7.js",
    "revision": "30f18035c45328da0cc55ea5431b9646"
  },
  {
    "url": "/static/layouts/default.f0a6b5a85b7fe337c1c1.js",
    "revision": "2c0466fead9a440a18fc0168b55270d7"
  },
  {
    "url": "/static/manifest.6a993c17eaf2f5454855.js",
    "revision": "3631b759f63452bb024d8c5ece648f5a"
  },
  {
    "url": "/static/pages/account.9b6ed4f2098c41cbfd33.js",
    "revision": "01124127234cb7fa0f6ef662bc8755de"
  },
  {
    "url": "/static/pages/battles/_id.d5ed4d475086c5a00dba.js",
    "revision": "00598e8132aae485d0a6dc9961bc87d3"
  },
  {
    "url": "/static/pages/battles/index.d36faa434d7428a4dee1.js",
    "revision": "21202945cb98eeb863e2e063d441cd47"
  },
  {
    "url": "/static/pages/dungeons/_id.c697405008d80198581c.js",
    "revision": "641bfc8bfca3381f84f984d0cf736094"
  },
  {
    "url": "/static/pages/dungeons/index.38b80fb5c55a029c8955.js",
    "revision": "b262538b2fbdbcca9d0ad36d91c020ed"
  },
  {
    "url": "/static/pages/help.2aacfe4d7a96e854a6d4.js",
    "revision": "7a323dbec25041f19cd6b66b22c71a53"
  },
  {
    "url": "/static/pages/heroes/_id.97bb0b352392f9b269f3.js",
    "revision": "d3d33a218f90f1cd4193025de1f30701"
  },
  {
    "url": "/static/pages/home.445f98eb331c8d00a742.js",
    "revision": "fb1193c90b85cdbd3acd758f52a9ed3d"
  },
  {
    "url": "/static/pages/index.afa176ed5f051c13605c.js",
    "revision": "57f2da54049bb1f9623fd88af459c5d0"
  },
  {
    "url": "/static/pages/inventory/index.b1ef87ac3d9c4d412f8b.js",
    "revision": "eb405acd543af8f9ed749c00af58eeca"
  },
  {
    "url": "/static/pages/inventory/index/heroes.5ea5b6380399fef0f667.js",
    "revision": "e6e6c3593ff15b1fa035ea364ff7ac8c"
  },
  {
    "url": "/static/pages/inventory/index/items.c0668daf85f406611f3c.js",
    "revision": "506b944639f1327182dce9476b0aeb59"
  },
  {
    "url": "/static/pages/inventory/parties/_partyId/positions/_positionId.ae7d11f830caf92fd92f.js",
    "revision": "78269fbf143e008c80ae3ed6a0ada544"
  },
  {
    "url": "/static/pages/inventory/parties/index.97694c1abe54cd7d4ca3.js",
    "revision": "79d45d796861cd94a597f7d980004302"
  },
  {
    "url": "/static/pages/items/_id.3bc9959f55ee1ecc74e7.js",
    "revision": "4c061a4ef3398633f86cbd939cb221fd"
  },
  {
    "url": "/static/pages/market/index.d37d727cfb5bc0103bed.js",
    "revision": "cc84664a771dd92388dfa94707a36271"
  },
  {
    "url": "/static/pages/market/shop.9829aff96f3b00512e10.js",
    "revision": "37cb1531fe26075e662ceb4701397690"
  },
  {
    "url": "/static/pages/market/trade/index.7424256667e08cf7e2e3.js",
    "revision": "9193f2acb35a7a99d6128264b3361f51"
  },
  {
    "url": "/static/pages/market/trade/index/heroes.cc13015a18ca47623b95.js",
    "revision": "e249463bb2d62458d0103e82e339f4bb"
  },
  {
    "url": "/static/pages/market/trade/index/items.8b82bea6053261189f90.js",
    "revision": "68b2ff6e72db28297dbc84d27beb66f3"
  },
  {
    "url": "/static/pages/notifications.0a2a1a34d746988d0833.js",
    "revision": "ad398d0b0473c611c15481b8fea648ab"
  },
  {
    "url": "/static/pages/pixelator.632cb3e32bd3f749520b.js",
    "revision": "26954ee55a8f902b05aa43ef224406b9"
  },
  {
    "url": "/static/pages/terms.e54dc9792de6bc641d50.js",
    "revision": "f80e73bcdbe46921faa8f47b708a260b"
  },
  {
    "url": "/static/pages/users/_id.c37ada9d26bceab2303a.js",
    "revision": "62b758c109badac4371bda6e27198ebc"
  }
])


workboxSW.router.registerRoute(new RegExp('/static/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

