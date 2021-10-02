<template>
  <div>
    <!-- Variantes -->
    <a-dropdown-field
      v-if="hasVariants"
      class="mr-3"
      :options="variants"
      :selected-option="selectedVariant"
    />
    <!-- Precio -->
    <span
      class="text-lg font-medium md:text-xl"
    >{{ product.price }} €</span>
    <!-- Product amount configuration -->
    <m-product-in-cart-spinner
      v-if="isProductInCartAlready"
      :amount="amount"
      class="mb-4"
      @decrease-amount="handleDecreaseAmount"
      @increase-amount="increaseProductAmount"
    />
    <!-- TODO: Opciones -->
    <!-- Add to cart -->
    <a-button
      :cta-text="ctaButtonText"
      class="w-full px-4 py-2 mb-4 uppercase bg-begonia-primary-purple hover:bg-purple-200"
      @click="handleMainButtonAction"
    />
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex'
import { cartStore } from '@/store'
import { IProduct } from 'types/product/index'
import ADropdownField from '~/components/atoms/ADropdownField.vue'
import AButton from '~/components/atoms/AButton.vue'
import MProductInCartSpinner from '~/components/molecules/MProductInCartSpinner.vue'

export default {
  name: 'OProductAddToCart',
  components: {
    ADropdownField,
    AButton,
    MProductInCartSpinner
  },
  props: {
    product: {
      type: Object as () => IProduct,
      default: null
    }
  },
  data () {
    return {
      selectedVariant: null,
      selectedOption: null
    }
  },
  computed: {
    ...mapState({
      cart: state => cartStore.cart
    }),
    isEmtpyCart () {
      return this.cart.items.length <= 0
    },
    amount () {
      const productInStore = this.cart.items.find(
        item => item.id === this.product.id
      )
      return typeof productInStore !== 'undefined' ? productInStore.amount : 1
    },
    isProductInCartAlready () {
      return (
        typeof this.cart?.items?.find(
          product => product.id === this.product.id
        ) !== 'undefined'
      )
    },
    hasVariants () {
      return this.product.hasVariants
    },
    variants () {
      return this.product.variants.map(({ variant }) => variant)
    },
    ctaButtonText () {
      return this.isProductInCartAlready
        ? 'Finalizar compra'
        : 'Añadir al carrito'
    }
  },
  created () {
    if (this.hasVariants) {
      this.selectedVariant = this.product.variants[0].variant
    }
  },
  methods: {
    async addToCart () {
      if (this.isEmtpyCart) {
        await cartStore.createCart({
          productId: this.product.id,
          quantity: 1
        })
      } else {
        await cartStore.addCartItem({
          productId: this.product.id,
          quantity: 1
        })
      }
    },
    handleMainButtonAction () {
      if (!this.isProductInCartAlready) {
        this.addToCart()
      } else {
        this.$router.push('/checkout/envio')
      }
    },
    async handleDecreaseAmount () {
      if (this.isProductInCartAlready) {
        await cartStore.updateCartItem({
          product: this.product,
          quantity: this.amount - 1
        })
      }
    },
    async increaseProductAmount () {
      if (this.isProductInCartAlready) {
        await cartStore.updateCartItem({
          product: this.product,
          quantity: this.amount + 1
        })
      }
    }
  }
}
</script>
