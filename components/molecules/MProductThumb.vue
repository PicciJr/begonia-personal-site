<!-- Small product thumb for reduced areas like related products -->
<template>
  <nuxt-link :to="`/producto/${product.slug}`" class="flex flex-col flex-wrap">
    <img
      :src="product.images[0].url"
      :alt="`Begoña Quereda Ilustraciones ${product.longDescription}`"
      class="object-cover rounded-md max-h-24"
    >
    <h3 class="mb-2 text-base font-medium">
      {{ product.title }}
    </h3>
    <div
      v-if="hasRangeInPricing"
      class="mb-2 font-bold text-md md:text-lg"
    >
      {{ product.minPrice | formatToEuroCurrency }}
      <span class="px-1 text-xs font-medium">-</span>
      {{ product.maxPrice | formatToEuroCurrency }}
    </div>
    <span v-else class="mb-2 font-bold text-md md:text-lg">{{ product.price | formatToEuroCurrency }}</span>
    <span
      class="px-2 py-1 text-sm font-bold text-center uppercase rounded-full text-begonia-sec-gray bg-begonia-primary-purple hover:bg-purple-200"
    >Ver producto</span>
  </nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue'
import { IProduct } from '~/types/product'
export default Vue.extend({
  props: {
    product: {
      type: Object as () => IProduct,
      default: null
    }
  },
  computed: {
    hasRangeInPricing () {
      return this.product.minPrice !== null && this.product.maxPrice !== null
    }
  }
})
</script>
