<!-- Step 1 -->
<template>
  <div class="px-4 text-begonia-sec-gray">
    <h2 class="mt-2 mb-8 text-2xl font-bold text-center">
      Mi carrito
    </h2>
    <!-- Cart list items -->
    <m-cart-items
      :items="items"
      class="mb-8"
      @remove-product="handleRemoveProduct"
    />
    <!-- Shipping data / Form -->
    <m-shipping-form class="mb-8" />
    <!-- Order summary / Costs -->
    <a-cart-summary :cart="cart" class="mb-8" />
    <!-- CTA / TODO: cambiarlo por un sticky footer cuando haga el sticky footer generico -->
    <a-button
      cta-text="Siguiente paso"
      class="w-full px-4 py-2 mb-4 text-xl font-bold text-begonia-sec-gray bg-begonia-primary-purple"
      @click="handleNextStep"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { cartStore } from '@/store'
import { mapState } from 'vuex'
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
  computed: {
    ...mapState({
      cart: state => cartStore.cart
    }),
    items () {
      return cartStore.cart.items
    }
  },
  methods: {
    handleNextStep () {
      this.$router.push('/checkout/pago')
    },
    async handleRemoveProduct (product) {
      // TODO: usar store
    }
  }
})
</script>
