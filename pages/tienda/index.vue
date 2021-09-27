<template>
  <div class="flex justify-center px-1 mt-40 mb-8 space-x-3 text-begonia-sec-gray">
    <m-product-card v-for="product in products" :key="product.id" :product="product" class="mb-32 sm:mb-0" />
  </div>
</template>

<script>
import MProductCard from '~/components/molecules/MProductCard.vue'
export default {
  name: 'Tienda',
  components: {
    MProductCard
  },
  async asyncData ({ app }) {
    try {
      const response = await app.$apiConnection.get('/product/tienda/all')
      return {
        products: response.data
      }
    } catch (err) {

    }
  }
}
</script>
