<template>
  <div class="space-y-4">
    <!-- Variantes -->
    <a-dropdown-field
      v-if="hasVariants"
      class="mr-3"
      :options="variants"
      :selected-option="selectedVariant.variant"
      @change="updateVariantSelected"
    />
    <!-- Precio -->
    <span class="text-lg font-medium md:text-xl">{{ priceSelected }}€</span>
    <!-- Product amount configuration -->
    <m-product-in-cart-spinner
      v-if="isProductInCartAlready"
      :amount="amount"
      :product="product"
      :selected-variant="selectedVariant"
      @decrease-amount="handleDecreaseAmount"
      @increase-amount="increaseProductAmount"
    />
    <!-- TODO: Opciones -->
    <!-- Add to cart -->
    <a-button
      :cta-text="ctaButtonText"
      class="w-full px-4 py-2 uppercase bg-begonia-primary-purple hover:bg-purple-200"
      @click="handleMainButtonAction"
    />
  </div>
</template>

<script lang="ts">
import { mapState, mapGetters } from 'vuex'
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
    ...mapGetters({
      productInCart: 'cart/productInCart',
      variantInCart: 'cart/productVariantInCart'
    }),
    isEmtpyCart () {
      return this.cart.items.length <= 0
    },
    isVariantInCart () {
      return (
        this.variantInCart(this.selectedVariant?.id) !== null ??
        false
      )
    },
    isProductInCartAlready () {
      if (!this.hasVariants) {
        return typeof this.productInCart(this.product.id) !== 'undefined'
      }
      return this.isVariantInCart
    },
    amount () {
      if (!this.hasVariants) {
        return this.productInCart(this.product?.id)?.amount ?? 0
      }
      return (
        this.cart.items.find(
          product => product?.variantSelected?.id === this.selectedVariant?.id
        )?.amount ?? 0
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
    },
    priceSelected () {
      if (!this.hasVariants) {
        return this.product.price
      }
      return this.product.variants.find(
        ({ id }) => id === this.selectedVariant.id
      )?.price
    }
  },
  created () {
    if (this.hasVariants) {
      this.selectedVariant = this.product.variants[0]
    }
  },
  methods: {
    async addToCart () {
      if (this.isEmtpyCart) {
        await cartStore.createCart({
          productId: this.product.id,
          variantId: this.selectedVariant?.id ?? null,
          quantity: 1
        })
      } else {
        await cartStore.addCartItem({
          productId: this.product.id,
          variantId: this.selectedVariant?.id ?? null,
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
      const newAmount = this.amount - 1
      if (this.isProductInCartAlready) {
        if (newAmount === 0) {
          await cartStore.removeCartItem({
            product: this.product,
            variantId: this.selectedVariant?.id ?? null
          })
        } else {
          await cartStore.updateCartItem({
            product: this.product,
            variantId: this.selectedVariant?.id ?? null,
            quantity: newAmount
          })
        }
      }
    },
    async increaseProductAmount () {
      if (this.isProductInCartAlready) {
        await cartStore.updateCartItem({
          product: this.product,
          variantId: this.selectedVariant?.id ?? null,
          quantity: this.amount + 1
        })
      }
    },
    updateVariantSelected (event) {
      this.selectedVariant = this.product.variants.find(
        ({ variant }) => variant === event.target.value
      )
    }
  }
}
</script>
