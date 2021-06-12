export default function ({ $axios }, inject) {
  const api = $axios.create({
    headers: {
      common: {
        Accept: 'text/plain, */*'
      }
    }
  })

  api.setBaseURL(process.env.API_BASE_URL)

  // Inject to context as $apiConnection
  inject('apiConnection', api)
}
