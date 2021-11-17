<!-- Small product thumb for reduced areas like related products -->
<template>
  <nuxt-link :to="`/producto/${product.slug}`" class="flex flex-col flex-wrap">
    <img
      :src="product.images[0].url"
      :alt="`Begoña Quereda Ilustraciones ${product.longDescription}`"
      class="object-cover rounded-md max-h-24"
    >
    <h3 class="mb-2 text-sm font-extrabold sm:text-md">
      {{ product.title }}
    </h3>
    <span class="mb-2 text-xs">{{ product.price | formatToEuroCurrency }}</span>
    <span
      class="px-2 py-1 text-sm font-bold text-center uppercase rounded-full text-begonia-sec-gray bg-begonia-primary-purple hover:bg-purple-200"
    >Ver producto</span>
  </nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    product: {
      type: Object,
      default: null
    }
  }
})
</script>
