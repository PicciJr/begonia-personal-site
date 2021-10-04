<!-- Big product thumb for grids and bigger areas -->
<template>
  <nuxt-link
    :to="`/producto/${product.slug}`"
    class="relative flex items-end justify-center w-64 h-56 py-1 rounded-md shadow-xl md:w-56 md:h-64 hover:shadow-2xl"
  >
    <img
      :src="product.images[0].url"
      alt=""
      class="absolute top-0 h-48 rounded-md shadow-md left-1/2 productCardImage"
    >
    <div class="flex flex-col items-center p-2 space-y-1">
      <h3 class="font-medium text-md">
        {{ product.title }}
      </h3>
      <span
        class="mb-2 font-bold text-md md:text-lg"
      ><span class="text-xs font-medium">desde</span> {{ productLowestPrice }} €</span>
      <a-button
        class="px-2 py-1 text-sm font-bold uppercase rounded-md text-begonia-sec-gray bg-begonia-primary-purple hover:bg-purple-200"
      >
        Ver producto
      </a-button>
    </div>
  </nuxt-link>
</template>

<script lang="ts">
import { mapState } from 'vuex'
import { cartStore } from '@/store'
import Vue from 'vue'
import AButton from '~/components/atoms/AButton.vue'
export default Vue.extend({
  name: 'MProductCard',
  components: {
    AButton
  },
  props: {
    product: {
      type: Object,
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
