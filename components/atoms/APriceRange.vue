<template>
  <div
    class="text-xl font-medium md:text-2xl"
  >
    {{ product.minPrice | formatToEuroCurrency }}
    <span class="px-1 text-xs font-medium">-</span>
    {{ product.maxPrice | formatToEuroCurrency }}
  </div>
</template>

<script lang="ts">
import { IProduct } from '~/types/product'

export default {
  name: 'APriceRange',
  props: {
    product: {
      type: Object as () => IProduct,
      default: null
    }
  }
}
</script>
