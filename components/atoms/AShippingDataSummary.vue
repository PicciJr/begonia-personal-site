<template>
  <div class="px-4 py-2 bg-white border border-gray-300 rounded-lg">
    <p class="mb-4">
      Dirección de envío
    </p>
    <div class="flex items-start justify-between space-x-4">
      <!-- SVG location -->
      <div class="p-1 rounded-lg bg-purple-50">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-current text-begonia-primary-purple" viewBox="0 0 20 20"><path d="M10 20S3 10.87 3 7a7 7 0 1 1 14 0c0 3.87-7 13-7 13zm0-11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" /></svg>
      </div>
      <!-- Datos -->
      <div class="flex flex-col w-full space-y-3">
        <span>{{ shippingAddress.street }}</span>
        <span>{{ shippingAddress.phoneNumber }}</span>
        <span>{{ shippingAddress.postalCode }}</span>
        <span>{{ shippingAddress.province }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    shippingAddress: {
      type: Object,
      default: null
    }
  }
})
</script>
