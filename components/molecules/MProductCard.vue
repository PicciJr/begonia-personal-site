<!-- Big product thumb for grids and bigger areas -->
<template>
  <nuxt-link
    :to="`/producto/${product.slug}`"
    class="relative flex items-end justify-center w-64 h-56 py-3 rounded-md shadow-xl md:w-56 md:h-64 hover:shadow-2xl"
  >
    <img
      :src="product.images[0].url"
      alt=""
      class="absolute top-0 h-48 rounded-md shadow-md left-1/2 productCardImage"
    >
    <div class="flex flex-col items-center px-8 space-y-1 text-center">
      <h3 class="text-base font-medium">
        {{ product.title }}
      </h3>
      <!-- Precio -->
      <div
        v-if="hasRangeInPricing"
        class="mb-2 font-bold text-md md:text-lg"
      >
        {{ product.minPrice | formatToEuroCurrency }}
        <span class="px-1 text-xs font-medium">-</span>
        {{ product.maxPrice | formatToEuroCurrency }}
      </div>
      <span
        v-else
        class="mb-2 font-bold text-md md:text-lg"
      ><span class="text-xs font-medium">desde</span> {{ productLowestPrice | formatToEuroCurrency }}</span>
      <a-button
        class="px-2 py-1 text-sm font-bold uppercase rounded-md text-begonia-sec-gray bg-begonia-primary-purple hover:bg-purple-200"
      >
        Ver producto
      </a-button>
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
      cart: state => cartStore.cart
    }),
    isEmtpyCart () {
      return this.cart.items.length <= 0
    },
    hasVariants () {
      return this.product.variants.length > 0
    },
    productLowestPrice () {
      return this.hasVariants
        ? Math.min(...this.product.variants.map(({ price }) => price))
        : this.product.price
    },
    hasRangeInPricing () {
      return this.product.minPrice !== null && this.product.maxPrice !== null
    }
  }
})
</script>

<style scoped>
.productCardImage {
  transform: translate(-50%, -50%);
}

@screen md {
  .productCardImage {
    transform: translate(-50%, -35%);
  }
}
</style>
