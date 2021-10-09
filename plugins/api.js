export default function ({ $axios, $config }, inject) {
  const api = $axios.create({
    headers: {
      common: {
        Accept: 'text/plain, */*'
      }
    }
  })

  api.setBaseURL($config.apiBaseUrl)

  // Inject to context as $apiConnection
  inject('apiConnection', api)
}
