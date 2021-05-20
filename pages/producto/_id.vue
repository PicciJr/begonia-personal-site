<template>
  <div class="px-4 mt-12 mb-8 text-begonia-sec-gray">
    <!-- Image carousel -->
    <a-image-carousel
      :images="product.images"
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
    <m-product-configuration-options :product="product" class="mb-4" />
    <!-- Add to cart -->
    <a-button
      cta-text="Añadir al carrito"
      class="w-full px-4 py-1 mb-4 uppercase bg-begonia-primary-purple"
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
        <span class="px-4 py-1 text-sm font-bold text-white rounded-full w-max bg-begonia-sec-gray" @click="toggleLongDescriptionVisibility">{{ longDescriptionBadgeText }}</span>
      </div>
    </div>
    <!-- Related products -->
    <o-similar-products
      class="mt-8"
      :similar-products="product.similarProducts"
    />
    <!-- Sticky footer Add to cart -->
    <m-cart-sticky-footer class="w-full h-20" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { IProduct } from '@/types/product/index'
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
  data () {
    const product: IProduct = {
      title: 'Lamina 1',
      longDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      price: 10.5,
      type: 'lamina',
      sizes: ['A4', 'A2', 'A3'],
      images: [
        'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=980&q=80',
        'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=980&q=80',
        'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=980&q=80'
      ],
      hasVariants: true,
      similarProducts: [
        {
          title: 'Original 1',
          longDescription: '',
          price: 100.2,
          type: 'original',
          images: [
            'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=983&q=80'
          ]
        },
        {
          title: 'Original 2',
          longDescription: '',
          price: 90.6,
          type: 'original',
          images: [
            'https://images.unsplash.com/photo-1579965342575-16428a7c8881?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=999&q=80'
          ]
        }
      ]
    }

    return {
      product,
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
