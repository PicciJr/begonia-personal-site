<!-- Big product thumb for grids and bigger areas -->
<template>
  <nuxt-link
    :to="`/producto/${product.slug}`"
    class="flex flex-col justify-center max-w-sm py-3 space-y-4 md:w-56">
    <img
      :src="product.images[0].url"
      :alt="`Begoña Quereda Ilustraciones - ${product.title}`"
      class="md:h-80 md:object-cover"
      loading="lazy" />
    <div class="flex flex-col items-center px-8 space-y-1 text-center">
      <h3 class="text-lg font-medium">
        {{ product.title }}
      </h3>
      <!-- Precio -->
      <div v-if="hasRangeInPricing" class="mb-2 font-bold text-md md:text-lg">
        {{ product.minPrice | formatToEuroCurrency }}
        <span class="px-1 text-xs font-medium">-</span>
        {{ product.maxPrice | formatToEuroCurrency }}
      </div>
      <span v-else class="mb-2 font-bold text-md md:text-lg"
        ><span v-if="hasMultipleVariants" class="text-xs font-medium"
          >desde</span
        >
        {{ productLowestPrice | formatToEuroCurrency }}</span
      >
    </div>
  </nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import { cartStore } from '@/store'
import AButton from '~/components/atoms/AButton.vue'
import { IProduct } from '~/types/product'
export default Vue.extend({
  name: 'MProductCard',
  components: {
    AButton
  },
  props: {
    product: {
      type: Object as () => IProduct,
      default: null
    }
  },
  computed: {
    ...mapState({
      cart: (state) => cartStore.cart
    }),
    isEmtpyCart() {
      return this.cart.items.length <= 0
    },
    hasVariants() {
      return this.product.variants.length > 0
    },
    hasMultipleVariants() {
      return this.product.variants.length > 1
    },
    productLowestPrice() {
      return this.hasVariants
        ? Math.min(...this.product.variants.map(({ price }) => price))
        : this.product.price
    },
    hasRangeInPricing() {
      return this.product.minPrice !== null && this.product.maxPrice !== null
    }
  }
})
</script>
