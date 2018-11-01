const errors = {
  noWallet: { statusCode: 401, message: 'No wallet.' },
  notLoggedIn: { statusCode: 401, message: 'Not logged in.' }
}

export default function({ app, store, error }) {
  if (process.server) {
    if (!app.$cookies.get('mch-beta:has_wallet')) {
      error(errors.noWallet)
      return
    }
    if (!app.$cookies.get('mch-beta:loom_address')) {
      error(errors.notLoggedIn)
      return
    }
  } else {
    if (!store.state.hasWallet) {
      error(errors.noWallet)
      return
    }
    if (!store.getters.isLoggedIn) {
      error(errors.notLoggedIn)
      return
    }
  }
}
