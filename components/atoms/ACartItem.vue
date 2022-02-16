<!-- Cart item for checkout summary -->
<template>
  <div class="relative flex h-16 p-1 rounded-lg shadow-md ring-1 ring-gray-200">
    <nuxt-link :to="`/producto/${product.slug}`">
      <img
        class="object-cover w-24 h-full rounded-md"
        :src="imgResolver"
        :alt="product.longDescription"
      >
    </nuxt-link>
    <div class="flex flex-col justify-between pl-4">
      <nuxt-link :to="`/producto/${product.slug}`" class="space-x-1 text-sm">
        <span>{{ product.title }}</span><span v-if="hasVariants" class="text-xs">({{ variantInfo }})</span>
        <span v-if="isCustomizableProduct" class="font-bold">{{ customOptionsSelected }}</span>
      </nuxt-link>
      <div class="flex items-center justify-between space-x-3">
        <a-spinner-field
          v-show="isBuyableProduct && !isCustomizableProduct"
          :amount="product.amount"
          @decrease-amount="decreaseAmount"
          @increase-amount="increaseAmount"
        />
        <div class="space-x-1">
          <span class="font-bold">{{ priceSelected | formatToEuroCurrency }}</span>
          <span class="text-xs italic font-medium">(unidad)</span>
        </div>
      </div>
    </div>
    <!-- Delete product button -->
    <svg-icon
      v-show="isBuyableProduct"
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
      return `${this.product.images[0].url}`
    },
    hasVariants () {
      return (
        this.product.variantSelected !== null &&
        typeof this.product.variantSelected !== 'undefined'
      )
    },
    variantInfo () {
      return this.product.variantSelected.variant
    },
    priceSelected () {
      if (!this.hasVariants) {
        return this.product.price
      }
      return this.product.variants.find(
        ({ id }) => id === this.product?.variantSelected?.id
      )?.price
    },
    isBuyableProduct () {
      return this.product.type !== 'Encargo'
    },
    isCustomizableProduct () {
      return this.isHoroscopeProduct
    },
    isHoroscopeProduct () {
      return this.product.customHoroscopes.length > 0
    },
    customOptionsSelected () {
      if (this.isHoroscopeProduct) { return `${this.product.customOptionSelected.firstHand} + ${this.product.customOptionSelected.secondHand}` }
      return null
    }
  },
  methods: {
    async decreaseAmount () {
      const newAmount = this.product.amount - 1
      if (newAmount === 0) {
        await cartStore.removeCartItem({
          product: this.product,
          variantId: this.product?.variantSelected?.id ?? null
        })
      } else {
        await cartStore.updateCartItem({
          product: this.product,
          variantId: this.product?.variantSelected?.id ?? null,
          quantity: newAmount
        })
      }
    },
    async increaseAmount () {
      await cartStore.updateCartItem({
        product: this.product,
        variantId: this.product?.variantSelected?.id ?? null,
        quantity: this.product.amount + 1
      })
    }
  }
})
</script>
