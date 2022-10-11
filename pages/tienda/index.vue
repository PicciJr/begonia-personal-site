<template>
  <div
    class="flex flex-wrap justify-center px-4 mt-12 mb-8 md:mt-16 text-begonia-sec-gray md:items-start">
    <m-product-card
      v-for="product in products"
      :key="product.id"
      :product="product"
      class="mx-0 mb-8 md:mx-2" />
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
  async asyncData({ app }) {
    try {
      const response = await app.$apiConnection.get('/product/tienda/all')
      return {
        products: response.data
      }
    } catch (err) {
      app.$bugsnag.notify(new Error('Error tienda', err))
    }
  }
}
</script>
