import humps from 'humps'

export default ({ store, $axios }) => {
  $axios.onRequest(config => {
    if (process.client) {
      config.baseURL = store.state.env.siteUrl
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
