<template>
  <div class="px-4 mt-12 mb-8 text-begonia-sec-gray">
    <!-- Image carousel -->
    <a-image-carousel :images="product.images" class="mb-4" :autoplay="3000" :hoverpause="true" />
    <!-- Title & price -->
    <div class="flex flex-col mb-4">
      <h3 class="text-xl font-bold md:text-3xl">
        {{ product.title }}
      </h3>
      <span class="text-lg font-medium md:text-xl">{{ product.price }} €</span>
    </div>
    <!-- Product options -->
    <m-product-configuration-options :product="product" class="mb-4" />
    <!-- Add to cart -->
    <a-button cta-text="Añadir al carrito" class="w-full px-4 py-1 bg-begonia-primary-purple" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AButton from '@/components/atoms/AButton.vue'
import MProductConfigurationOptions from '@/components/molecules/MProductConfigurationOptions.vue'
import AImageCarousel from '~/components/atoms/AImageCarousel.vue'
export default Vue.extend({
  components: {
    AButton,
    AImageCarousel,
    MProductConfigurationOptions
  },
  layout: 'default',
  data () {
    /**
     * @param title: titulo del producto
     * @param price: precio del producto
     * @param type: [lamina, original, etc]
     * @param sizes: tamaños disponibles, si aplica
     * @param hasVariants: saber si un producto es configurable/el usuario puede elegir opciones de tamaño o similar
     */
    interface IProduct {
        title: string
        price: number
        type: string
        sizes?: string[]
        images: string[]
        hasVariants: boolean
    }

    const product: IProduct = {
      title: 'Lamina 1',
      price: 10.50,
      type: 'lamina',
      sizes: ['A4', 'A2', 'A3'],
      images: ['https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=980&q=80',
        'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=980&q=80',
        'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=980&q=80'],
      hasVariants: true
    }

    return {
      product
    }
  }
})
</script>
