<!-- Mobile component for sticky footer add to cart action -->
<!-- TODO: hacer que el componente sea más genérico para que se pueda
usar en otros contextos como el checkout-->
<template>
  <div
    class="fixed bottom-0 left-0 flex items-center justify-between px-4 space-x-3 bg-white rounded-tl-2xl rounded-tr-2xl md:hidden sticky-footer-shadow"
  >
    <a-spinner-field
      v-if="isProductInCartAlready"
      :amount="amount"
      @decrease-amount="$emit('decrease-amount')"
      @increase-amount="$emit('increase-amount')"
    />
    <a-button
      :cta-text="ctaText"
      class="w-full px-4 py-1 text-lg uppercase bg-begonia-primary-purple hover:bg-purple-200"
      @click="handleClick"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import { cartStore } from '@/store'
import AButton from '@/components/atoms/AButton.vue'
import ASpinnerField from '@/components/atoms/ASpinnerField.vue'

export default Vue.extend({
  components: {
    AButton,
    ASpinnerField
  },
  props: {
    product: {
      type: Object,
      default: null
    },
    amount: {
      type: Number,
      default: 0
    }
  },
  computed: {
    ...mapState({
      cart: state => cartStore.cart
    }),
    isEmtpyCart () {
      return this.cart.items.length <= 0
    },
    isProductInCartAlready () {
      return (
        typeof this.cart?.items?.find(
          product => product.id === this.product.id
        ) !== 'undefined'
      )
    },
    ctaText () {
      return this.isProductInCartAlready
        ? 'Finalizar compra'
        : 'Añadir al carrito'
    }
  },
  methods: {
    handleClick () {
      if (!this.isProductInCartAlready) {
        this.addToCart()
      } else {
        this.$router.push('/checkout/envio')
      }
    },
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
    }
  }
})
</script>

<style scoped>
.sticky-footer-shadow {
  box-shadow: 6px -6px 21px #adadad, -6px 6px 21px #ffffff;
}
</style>
