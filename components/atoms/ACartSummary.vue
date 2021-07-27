<!-- Summary panel info for checkout -->
<template>
  <div class="px-4 py-2 bg-white border border-gray-300 rounded-lg">
    <p class="pb-2 mb-4 text-xl border-b border-gray-100">
      Resumen de tu pedido
    </p>
    <div class="flex flex-col space-y-3">
      <div class="flex justify-between">
        <span>Items</span>
        <span>{{ cart.subtotal }}</span>
      </div>
      <div class="flex justify-between">
        <span>Costes de envío</span>
        <span>{{ cart.shippingCosts || 0 }}</span>
      </div>
      <div class="flex justify-between font-bold">
        <span>Total</span>
        <span>{{ cart.total || 0 }} </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import { cartStore } from '@/store'

export default Vue.extend({
  computed: {
    ...mapState({
      cart: state => cartStore.cart
    })
  }
  // props: {
  //   cart: {
  //     type: Object as () => ICart,
  //     default: null
  //   }
  // }
})
</script>
