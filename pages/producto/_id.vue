<template>
  <div class="px-4 mt-16 mb-8 text-begonia-sec-gray">
    <!-- Image carousel -->
    <a-image-carousel
      :images="product.images"
      :product="product"
      class="mb-4"
      :autoplay="3000"
      :hoverpause="true"
    />
    <!-- Title & price -->
    <div class="flex flex-col mb-4">
      <h3 class="text-2xl font-bold md:text-4xl">
        {{ product.title }}
      </h3>
      <span class="text-lg font-medium md:text-xl">{{ product.price }} €</span>
    </div>
    <!-- Product options -->
    <m-product-configuration-options
      :product="product"
      :amount="amount"
      class="mb-4"
      @decrease-amount="handleDecreaseAmount"
      @increase-amount="increaseProductAmount"
    />
    <!-- Add to cart -->
    <a-button
      :cta-text="ctaButtonText"
      class="w-full px-4 py-2 mb-4 uppercase bg-begonia-primary-purple"
      @click="addToCart"
    />
    <!-- Product description -->
    <div class="mb-16">
      <h3 class="mb-4 text-xl font-bold md:text-3xl">
        Descripción
      </h3>
      <div :class="['mb-4 overflow-hidden', longDescriptionHeight]">
        {{ product.longDescription }}
      </div>
      <div class="flex justify-center">
        <span
          class="px-4 py-1 text-sm font-bold text-white rounded-full w-max bg-begonia-sec-gray"
          @click="toggleLongDescriptionVisibility"
        >{{ longDescriptionBadgeText }}</span>
      </div>
    </div>
    <!-- Related products -->
    <o-similar-products
      class="mt-8"
      :similar-products="product.similarProducts"
    />
    <!-- Sticky footer Add to cart -->
    <m-cart-sticky-footer class="w-full h-20" :product="product" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import { cartStore } from '@/store'
import AButton from '@/components/atoms/AButton.vue'
import AImageCarousel from '@/components/atoms/AImageCarousel.vue'
import MProductConfigurationOptions from '@/components/molecules/MProductConfigurationOptions.vue'
import MCartStickyFooter from '~/components/molecules/MCartStickyFooter.vue'
import OSimilarProducts from '~/components/organisms/OSimilarProducts.vue'
export default Vue.extend({
  components: {
    AButton,
    AImageCarousel,
    MProductConfigurationOptions,
    MCartStickyFooter,
    OSimilarProducts
  },
  layout: 'default',
  async asyncData ({ app, route }) {
    try {
      const productId = route.params.id
      const response = await app.$apiConnection.get(`/product/${productId}`)
      const product = response.data
      return {
        product
      }
    } catch (err) {}
  },
  data () {
    return {
      isLongDescriptionVisible: false
    }
  },
  computed: {
    ...mapState({
      cart: state => cartStore.cart
    }),
    isEmtpyCart () {
      return this.cart.items.length <= 0
    },
    amount () {
      const productInStore = this.cart.items.find(
        item => item.id === this.product.id
      )
      return typeof productInStore !== 'undefined' ? productInStore.amount : 1
    },
    longDescriptionHeight (): string {
      return this.isLongDescriptionVisible ? 'h-full' : 'h-20'
    },
    longDescriptionBadgeText (): string {
      return this.isLongDescriptionVisible ? 'Leer menos' : 'Leer más'
    },
    isProductInCartAlready () {
      return this.cart?.items?.find(product => product.id === this.product.id)
    },
    ctaButtonText () {
      return this.isProductInCartAlready
        ? 'Producto ya asignado'
        : 'Añadir al carrito'
    }
  },
  methods: {
    toggleLongDescriptionVisibility () {
      this.isLongDescriptionVisible = !this.isLongDescriptionVisible
    },
    async addToCart () {
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
    },
    async handleDecreaseAmount () {
      if (this.isProductInCartAlready) {
        await cartStore.updateCartItem({
          product: this.product,
          quantity: this.amount - 1
        })
      }
    },
    async increaseProductAmount () {
      if (this.isProductInCartAlready) {
        await cartStore.updateCartItem({
          product: this.product,
          quantity: this.amount + 1
        })
      }
    }
  }
})
</script>
