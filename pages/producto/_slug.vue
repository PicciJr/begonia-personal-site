<template>
  <div class="max-w-md px-4 mx-auto mt-16 mb-8 md:mt-4 text-begonia-sec-gray">
    <!-- Image carousel -->
    <a-image-carousel
      :images="product.images"
      :product="product"
      class="mb-4"
      :autoplay="false"
      :hoverpause="true" />
    <!-- Title -->
    <h3 class="mb-4 text-2xl font-bold md:text-4xl">
      {{ product.title }}
    </h3>
    <!-- Add to cart management -->
    <o-product-add-to-cart
      v-if="isBuyableProduct"
      :product="product"
      class="w-full mb-4" />
    <!-- Price & Send to form -->
    <div v-else class="flex flex-col justify-center">
      <a-price-range v-if="hasRangeInPricing" :product="product" class="mb-2" />
      <a-button
        cta-text="Me interesa"
        class="w-full px-4 py-1 mb-4 text-lg uppercase bg-begonia-primary-purple hover:bg-purple-200"
        @click="$router.push(`/contacto-encargo/${product.slug}`)" />
    </div>
    <!-- Product description -->
    <div class="mb-16">
      <h3 class="mb-4 text-xl font-bold md:text-3xl">Descripción</h3>
      <div
        :class="['px-2 leading-7', longDescriptionBehaviour]"
        v-html="$md.render(product.longDescription)" />
      <div v-if="isDescriptionVeryLong" class="flex justify-center">
        <span
          class="px-4 py-1 text-sm font-bold text-white rounded-full cursor-pointer w-max bg-begonia-sec-gray"
          @click="toggleLongDescriptionVisibility"
          >{{ longDescriptionBadgeText }}</span
        >
      </div>
    </div>
    <!-- Related products -->
    <o-similar-products
      v-if="hasRelatedProducts"
      class="mt-8"
      :similar-products="relatedProducts" />
    <!-- Sticky footer Add to cart -->
    <!-- TODO: que el sticky footer importe la logica del oproductaddtocart para no duplicar -->
    <!-- <m-cart-sticky-footer
      class="w-full h-20"
      :product="product"
    /> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AImageCarousel from '@/components/atoms/AImageCarousel.vue'
import AButton from '@/components/atoms/AButton.vue'
import APriceRange from '@/components/atoms/APriceRange.vue'
// import MCartStickyFooter from '~/components/molecules/MCartStickyFooter.vue'
import OProductAddToCart from '~/components/organisms/OProductAddToCart.vue'
import { IProduct } from '~/types/product'
import OSimilarProducts from '~/components/organisms/OSimilarProducts.vue'
export default Vue.extend({
  name: 'Product',
  components: {
    AImageCarousel,
    AButton,
    APriceRange,
    // MCartStickyFooter,
    OProductAddToCart,
    OSimilarProducts
  },
  layout: 'default',
  async asyncData({ app, route }) {
    try {
      const productSlug = route.params.slug
      const response = await app.$apiConnection.get(
        `/product/slug/${productSlug}`
      )
      const product = response.data
      const relatedProducts: IProduct[] = []
      if (product.relatedProducts) {
        for (const relatedProduct of product.relatedProducts) {
          const response = await app.$apiConnection.get(
            `/product/${relatedProduct[0].id}`
          )
          relatedProducts.push(response.data)
        }
      }
      return {
        product,
        relatedProducts
      }
    } catch (err) {
      app.$bugsnag.notify(new Error('Error ficha producto', err))
    }
  },
  data() {
    return {
      isLongDescriptionVisible: false
    }
  },
  computed: {
    longDescriptionBehaviour(): string {
      return !this.isDescriptionVeryLong ||
        (this.isDescriptionVeryLong && this.isLongDescriptionVisible)
        ? 'h-full'
        : 'h-20 overflow-hidden'
    },
    longDescriptionBadgeText(): string {
      return this.isLongDescriptionVisible ? 'Leer menos' : 'Leer más'
    },
    isBuyableProduct() {
      return this.product.type !== 'Encargo'
    },
    isDescriptionVeryLong() {
      return this.product.longDescription.length > 500
    },
    hasRelatedProducts() {
      return this.relatedProducts.length > 0
    },
    hasRangeInPricing() {
      return this.product.minPrice !== null && this.product.maxPrice !== null
    }
  },
  methods: {
    toggleLongDescriptionVisibility() {
      this.isLongDescriptionVisible = !this.isLongDescriptionVisible
    }
  }
})
</script>
