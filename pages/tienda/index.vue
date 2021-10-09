<template>
  <div
    class="flex flex-wrap justify-center px-4 mt-40 mb-8 md:mt-16 text-begonia-sec-gray"
  >
    <m-product-card
      v-for="product in products"
      :key="product.id"
      :product="product"
      class="mx-0 mb-32 md:mx-2"
    />
  </div>
</template>

<script>
import MProductCard from '~/components/molecules/MProductCard.vue'
export default {
  name: 'Tienda',
  components: {
    MProductCard
  },
  layout: 'default',
  async asyncData ({ app }) {
    try {
      console.log(
        'tienda ve',
        app.$apiConnection,
        process.env.API_BASE_URL,
        app.$bugsnag,
        process.env.BUGSNAG_API_KEY
      )
      const response = await app.$apiConnection.get('/product/tienda/all')
      return {
        products: response.data
      }
    } catch (err) {
      console.log('error tienda', err)
      app.$bugsnag.notify(new Error('Error tienda', err))
    }
  }
}
</script>
