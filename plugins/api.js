export default function ({ $axios, $config, store }, inject) {
  const api = $axios.create({
    headers: {
      common: {
        Accept: 'text/plain, */*'
      }
    }
  })

  api.setBaseURL($config.apiBaseUrl)

  api.onError((error) => {
    if (error.response.status === 500) {
      store.dispatch('cart/resetCartToInitialStatus')
    }
  })

  api.onResponse((response) => {
    // Nest API response handling
    if (typeof response === 'undefined' || response?.data?.status === 404 || response?.data?.status === 500) {
      store.dispatch('cart/resetCartToInitialStatus')
    }
  })

  // Inject to context as $apiConnection
  inject('apiConnection', api)
}
