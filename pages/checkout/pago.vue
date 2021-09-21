<template>
  <div class="px-4 text-begonia-sec-gray">
    <h2 class="mt-2 mb-8 text-2xl font-bold text-center">
      Métodos de pago
    </h2>
    <!-- Your shipping address thumbnail -->
    <a-shipping-data-summary class="mb-8" />
    <!-- Order summary -->
    <a-cart-summary class="mb-8" />
    <!-- Paypal button -->
    <a-paypal-button />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ACartSummary from '@/components/atoms/ACartSummary.vue'
import AShippingDataSummary from '@/components/atoms/AShippingDataSummary.vue'
import APaypalButton from '@/components/atoms/APaypalButton.vue'

export default Vue.extend({
  components: {
    ACartSummary,
    AShippingDataSummary,
    APaypalButton
  },
  layout: 'checkout'
})
</script>
