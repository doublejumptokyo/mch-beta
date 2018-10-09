import humps from 'humps'

export default function({ $axios }) {
  $axios.onRequest(config => {
    if (config.headers['Content-Type'] === 'multipart/form-data') {
      return
    }
    config.data = humps.decamelizeKeys(config.data)
  })
  $axios.onResponse(response => {
    response.data = humps.camelizeKeys(response.data)
  })
}
