<template>
  <div class="px-4 py-2 bg-white border border-gray-300 rounded-lg">
    <p class="mb-4">
      Dirección de envío
    </p>
    <div class="flex items-start justify-between space-x-4">
      <!-- SVG icon location -->
      <div class="p-1 rounded-lg bg-purple-50">
        <svg-icon name="location" class="w-6 h-6 fill-current text-begonia-primary-purple" />
      </div>
      <!-- Datos -->
      <div class="flex flex-col w-full space-y-3">
        <span><strong>Calle:</strong> {{ shippingAddress.street }}</span>
        <span><strong>Teléfono:</strong> {{ shippingAddress.phoneNumber }}</span>
        <span><strong>Código postal:</strong> {{ shippingAddress.postalCode }}</span>
        <span><strong>Ciudad:</strong> {{ shippingAddress.province }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import { cartStore } from '~/store'
export default Vue.extend({
  computed: {
    ...mapState({
      shippingAddress: state => cartStore.shippingAddress
    })
  }
})
</script>
