<template>
  <div>
    <a-cart-item v-for="product in items" :key="product.id" :product="product" class="mb-4" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { IProduct } from 'types/product/index'
import ACartItem from '~/components/atoms/ACartItem.vue'
export default Vue.extend({
  components: {
    ACartItem
  },
  props: {
    items: {
      type: Array as () => IProduct[],
      default: null
    }
  }
})
</script>
