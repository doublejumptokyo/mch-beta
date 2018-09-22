import humps from 'humps'

export default function({ $axios, browser }) {
  $axios.onRequest(config => {
    if (browser && config.data instanceof FormData) {
      return
    }
    config.data = humps.decamelizeKeys(config.data)
  })
  $axios.onResponse(response => {
    response.data = humps.camelizeKeys(response.data)
  })
}
