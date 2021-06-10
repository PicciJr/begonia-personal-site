<!-- Step 1 -->
<template>
  <div class="px-4 text-begonia-sec-gray">
    <h2 class="mt-2 mb-8 text-2xl font-bold text-center">
      Mi carrito
    </h2>
    <!-- Cart list items -->
    <m-cart-items :items="items" class="mb-8" />
    <!-- Shipping data / Form -->
    <m-shipping-form class="mb-8" />
    <!-- Order summary / Costs -->
    <a-cart-summary class="mb-8" />
    <!-- CTA / TODO: cambiarlo por un sticky footer cuando haga el sticky footer generico -->
    <a-button cta-text="Siguiente paso" class="w-full px-4 py-2 mb-4 text-xl font-bold text-begonia-sec-gray bg-begonia-primary-purple" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ACartSummary from '@/components/atoms/ACartSummary.vue'
import AButton from '@/components/atoms/AButton.vue'
import MCartItems from '@/components/molecules/MCartItems.vue'
import MShippingForm from '@/components/molecules/MShippingForm.vue'
export default Vue.extend({
  components: {
    ACartSummary,
    AButton,
    MCartItems,
    MShippingForm
  },
  layout: 'checkout',
  data () {
    return {
      items: [
        {
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
        },
        {
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
      ]
    }
  }
})
</script>
