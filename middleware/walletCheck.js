export default function({ store, error }) {
  if (process.server) return
  if (!store.getters.isLoggedIn) {
    error({ statusCode: 401, message: 'No wallet.' })
  }
}
