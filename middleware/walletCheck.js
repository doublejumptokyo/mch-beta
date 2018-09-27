export default function({ store, error }) {
  if (process.server) return
  if (!store.state.hasWallet) {
    error({ statusCode: 401, message: 'No wallet.' })
    return
  }
  if (!store.getters.isLoggedIn) {
    error({ statusCode: 401, message: 'Not logged in.' })
    return
  }
}
