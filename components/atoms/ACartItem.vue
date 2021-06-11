<!-- Cart item for checkout summary -->
<template>
  <div class="relative flex p-1 rounded-lg shadow-md ring-1 ring-gray-200">
    <img
      class="object-cover w-24 h-16 rounded-md"
      :src="product.images[0]"
      :alt="product.longDescription"
    >
    <div class="flex flex-col justify-between pl-4">
      <span>{{ product.title }}</span>
      <span class="font-bold">{{ product.price }} €</span>
    </div>
    <!-- Delete product button -->
    <svg-icon
      name="close-circle"
      class="absolute w-6 h-6 fill-current -top-2 -right-2 text-begonia-primary-purple"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { IProduct } from 'types/product/index'
export default Vue.extend({
  components: {},
  props: {
    product: {
      type: Object as () => IProduct,
      default: null
    }
  }
})
</script>
