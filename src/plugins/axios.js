import humps from 'humps'

function isGuest() {
  return false
}

export default ({ store, $axios }) => {
  $axios.onRequest(config => {
    if (process.client) {
      config.baseURL = store.state.env.siteUrl
      config.headers['Loom-Address'] = store.state.loomAddress
      config.headers['Eth-Address'] = store.state.ethAddress
      config.headers['MCH-Guest'] = String(isGuest())
    }
    if (config.headers['Content-Type'] === 'multipart/form-data') {
      return
    }
    config.data = humps.decamelizeKeys(config.data)
  })

  $axios.onResponse(response => {
    response.data = humps.camelizeKeys(response.data)
  })
}
