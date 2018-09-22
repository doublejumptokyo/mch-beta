importScripts('/static/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  cacheId: 'mch-web',
  clientsClaim: true,
  directoryIndex: '/'
})

workboxSW.precache([
  {
    url: '/static/app.58f2e68432339d03dfe1.js',
    revision: '142e240454b2c97264663cd983629b32'
  },
  {
    url: '/static/layouts/battle.5ffa0dd26cf4764dd782.js',
    revision: '7586480fabc0821f25601f063bd8e745'
  },
  {
    url: '/static/layouts/default.2b467a23acdcaf566294.js',
    revision: 'e9f880857496d9c0e750b067c1eb83db'
  },
  {
    url: '/static/manifest.8bc2b98cc76d93487266.js',
    revision: '83d57f66c03046af1db0309b0aacff60'
  },
  {
    url: '/static/pages/account.0cb907844b079b9220b4.js',
    revision: '9a31891464844d35a3cd97da2a89151e'
  },
  {
    url: '/static/pages/battles/_id.3fb5815f761764390987.js',
    revision: '51d76709dc3524bf5b9837d5ea0cb264'
  },
  {
    url: '/static/pages/battles/index.8aafb0ec6e2e685e2dfe.js',
    revision: 'd7703fbf155a05e51ee1d3642095c355'
  },
  {
    url: '/static/pages/dungeons/_id.ce008538c79b2e05ae55.js',
    revision: '5e171b3e634c24ac07ab1ac60e793963'
  },
  {
    url: '/static/pages/dungeons/index.3d1f952bb4db0055424a.js',
    revision: 'f528bcdc90db5b4fde9391cc0ce7ee24'
  },
  {
    url: '/static/pages/help.2aacfe4d7a96e854a6d4.js',
    revision: '7a323dbec25041f19cd6b66b22c71a53'
  },
  {
    url: '/static/pages/heroes/_id.bb01227383ef11d22949.js',
    revision: '532b06b01a4df6f64b752aaf4e2c5040'
  },
  {
    url: '/static/pages/home.504442a153ffb8ccaacd.js',
    revision: '916f784b1a7ab0f2477a5e6076c8a328'
  },
  {
    url: '/static/pages/index.6cdfb03a7ec554d774b8.js',
    revision: '4e3367261befc1e391ebb632fb235810'
  },
  {
    url: '/static/pages/inventory/index.cc576a90dbf4e83c0a77.js',
    revision: 'b206612c870a4477f25745c449e2f620'
  },
  {
    url: '/static/pages/inventory/index/heroes.67c4c10b394390beae42.js',
    revision: '65d063e0b1fec4df6cd8cb58a385096b'
  },
  {
    url: '/static/pages/inventory/index/items.07fa9829baceb7df1395.js',
    revision: '77303fd9ff9e493a86482fc2019fea95'
  },
  {
    url:
      '/static/pages/inventory/parties/_partyId/positions/_positionId.c189c3abe5bbf7587d3c.js',
    revision: '7eda8a72f5779de54a7fdab6e96fd736'
  },
  {
    url: '/static/pages/inventory/parties/index.f301733fb8205ec63200.js',
    revision: 'dcb162a65b115d12c5754eb2a7242038'
  },
  {
    url: '/static/pages/items/_id.bf9cc96b329cf11cda71.js',
    revision: '2ddabe448473533b952240c53c294901'
  },
  {
    url: '/static/pages/market/index.d37d727cfb5bc0103bed.js',
    revision: 'cc84664a771dd92388dfa94707a36271'
  },
  {
    url: '/static/pages/market/shop.c7cd3b0313706862270b.js',
    revision: '057233b23abb3dc1df9342c219663680'
  },
  {
    url: '/static/pages/market/trade/index.66393ed090eeb50c9bde.js',
    revision: 'b798f263001b0a127d1b12bcc5efc40b'
  },
  {
    url: '/static/pages/market/trade/index/heroes.2d61a39d75cb437a1ca0.js',
    revision: 'a40b7994617e83b01a56d9224cbab630'
  },
  {
    url: '/static/pages/market/trade/index/items.ebb86f92f2f9a0fab976.js',
    revision: '17176a2e343aa583c7822bee0f305acf'
  },
  {
    url: '/static/pages/notifications.c1e461272e797cc279e9.js',
    revision: 'cfdb554e8287a8c3df8b31552e32a791'
  },
  {
    url: '/static/pages/pixelator.596ec7a4cfc97f056e70.js',
    revision: '0b4efc522a16fad2fb89184ae3a36779'
  },
  {
    url: '/static/pages/terms.e54dc9792de6bc641d50.js',
    revision: 'f80e73bcdbe46921faa8f47b708a260b'
  },
  {
    url: '/static/pages/users/_id.8b445102b8748c1ca5a4.js',
    revision: '968e8b75a2003d9556a11feb3532957d'
  },
  {
    url: '/static/vendor.f4dfb25391dcf42f7895.js',
    revision: '19dc6b53c81baab6a6c4129a0684b305'
  }
])

workboxSW.router.registerRoute(
  new RegExp('/static/.*'),
  workboxSW.strategies.cacheFirst({}),
  'GET'
)

workboxSW.router.registerRoute(
  new RegExp('/.*'),
  workboxSW.strategies.networkFirst({}),
  'GET'
)
