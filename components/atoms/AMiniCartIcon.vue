<template>
  <nuxt-link to="/checkout/envio" class="w-10 h-10 p-1 rounded-lg fill-current text-begonia-sec-gray bg-begonia-primary-purple">
    <svg-icon name="shopping-cart" class="w-full h-full" />
    <div v-if="cartItems > 0" class="absolute bottom-0 right-0 w-6 h-6 -m-2 text-center text-white bg-red-600 rounded-full opacity-90">
      {{ cartItems }}
    </div>
  </nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
export default Vue.extend({
  computed: {
    ...mapGetters({
      cartItems: 'cart/cartItemsTotalAmount'
    })
  }
})
</script>
