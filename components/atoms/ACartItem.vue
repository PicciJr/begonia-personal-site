<!-- Cart item for checkout summary -->
<template>
  <div class="relative flex h-16 p-1 rounded-lg shadow-md ring-1 ring-gray-200">
    <img
      class="object-cover w-24 rounded-md"
      :src="imgResolver"
      :alt="product.longDescription"
    >
    <div class="flex flex-col justify-between pl-4">
      <span>{{ product.title }}</span>
      <div class="flex items-center justify-between space-x-3">
        <a-spinner-field
          :amount="product.amount"
          @decrease-amount="decreaseAmount"
          @increase-amount="increaseAmount"
        />
        <span class="font-bold">{{ product.price }} €</span>
      </div>
    </div>
    <!-- Delete product button -->
    <svg-icon
      name="close-circle"
      class="absolute w-6 h-6 cursor-pointer fill-current -top-2 -right-2 text-begonia-primary-purple"
      @click="$emit('remove-product', product)"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { IProduct } from 'types/product/index'
import { cartStore } from '@/store'
import ASpinnerField from '@/components/atoms/ASpinnerField.vue'
export default Vue.extend({
  components: {
    ASpinnerField
  },
  props: {
    product: {
      type: Object as () => IProduct,
      default: null
    }
  },
  computed: {
    imgResolver (): string {
      return `${process.env.STRAPI_BASE_URL}${this.product.images[0].url}`
    }
  },
  methods: {
    async decreaseAmount () {
      await cartStore.updateCartItem({
        product: this.product,
        quantity: this.product.amount - 1
      })
    },
    async increaseAmount () {
      await cartStore.updateCartItem({
        product: this.product,
        quantity: this.product.amount + 1
      })
    }
  }
})
</script>
