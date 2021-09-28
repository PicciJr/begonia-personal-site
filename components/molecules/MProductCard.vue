<!-- Big product thumb for grids and bigger areas -->
<template>
  <nuxt-link :to="`/producto/${product.slug}`" class="relative flex items-end justify-center w-48 h-56 rounded-md shadow-xl md:w-56 md:h-64 hover:shadow-2xl">
    <img :src="product.images[0].url" alt="" class="absolute top-0 h-48 rounded-md shadow-md left-1/2" style="transform: translate(-50%, -50%);">
    <div class="flex flex-col p-2 space-y-3">
      <h3 class="text-lg font-bold">
        {{ product.title }}
      </h3>
      <span class="mb-2 font-medium text-md md:text-xl">{{ product.price }} €</span>
      <a-button
        class="px-2 py-1 text-sm font-bold uppercase rounded-md text-begonia-sec-gray bg-begonia-primary-purple hover:bg-purple-200"
        @click.prevent.native="handleAddToCart"
      >
        Añadir al carrito
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
    }
  },
  methods: {
    async handleAddToCart () {
      if (this.isEmtpyCart) {
        await cartStore.createCart({
          productId: this.product.id,
          quantity: 1
        })
      } else {
        await cartStore.addCartItem({
          productId: this.product.id,
          quantity: 1
        })
      }
    }
  }
})
</script>
