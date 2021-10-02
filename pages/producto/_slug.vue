<template>
  <div class="max-w-md px-4 mx-auto mt-16 mb-8 text-begonia-sec-gray">
    <!-- Image carousel -->
    <a-image-carousel
      :images="product.images"
      :product="product"
      class="mb-4"
      :autoplay="3000"
      :hoverpause="true"
    />
    <!-- Title -->
    <h3 class="text-2xl font-bold md:text-4xl">
      {{ product.title }}
    </h3>
    <!-- Add to cart management -->
    <o-product-add-to-cart :product="product" />
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
    <!-- TODO: reactivar -->
    <!-- <o-similar-products
      class="mt-8"
      :similar-products="product.similarProducts"
    /> -->
    <!-- Sticky footer Add to cart -->
    <!-- TODO: que el sticky footer importe la logica del oproductaddtocart para no duplicar -->
    <m-cart-sticky-footer
      class="w-full h-20"
      :product="product"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AImageCarousel from '@/components/atoms/AImageCarousel.vue'
import MCartStickyFooter from '~/components/molecules/MCartStickyFooter.vue'
import OProductAddToCart from '~/components/molecules/OProductAddToCart.vue'
// import OSimilarProducts from '~/components/organisms/OSimilarProducts.vue'
export default Vue.extend({
  name: 'Product',
  components: {
    AImageCarousel,
    MCartStickyFooter,
    OProductAddToCart
    // OSimilarProducts
  },
  layout: 'default',
  async asyncData ({ app, route }) {
    try {
      const productSlug = route.params.slug
      const response = await app.$apiConnection.get(
        `/product/slug/${productSlug}`
      )
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
    longDescriptionHeight (): string {
      return this.isLongDescriptionVisible ? 'h-full' : 'h-20'
    },
    longDescriptionBadgeText (): string {
      return this.isLongDescriptionVisible ? 'Leer menos' : 'Leer más'
    }
  },
  methods: {
    toggleLongDescriptionVisibility () {
      this.isLongDescriptionVisible = !this.isLongDescriptionVisible
    }
  }
})
</script>
