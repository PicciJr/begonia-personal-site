<!-- Step 1 -->
<template>
  <div class="px-4 text-begonia-sec-gray">
    <h2 class="mt-2 mb-8 text-2xl font-bold text-center">
      Mi carrito
    </h2>
    <div v-if="!isCartEmpty">
      <!-- Cart list items -->
      <m-cart-items
        :items="items"
        class="mb-8"
        @remove-product="handleRemoveProduct"
      />
      <!-- Shipping data / Form -->
      <o-shipping-form
        class="mb-8"
        @valid-form="handleValidForm"
        @invalid-form="handleInvalidForm"
      />
      <!-- Order summary / Costs -->
      <a-cart-summary :cart="cart" class="mb-8" />
      <!-- CTA / TODO: cambiarlo por un sticky footer cuando haga el sticky footer generico -->
      <m-checkout-next-step-button
        :is-enabled="isValidForm"
        button-text="Siguiente paso"
        @click="setShippingAddress"
      />
    </div>
    <!-- Empty cart -->
    <div v-else class="flex flex-col justify-center space-y-4">
      <svg-icon name="shopping-cart" class="self-center w-32 h-32 fill-current text-begonia-sec-gray" @click="toggleMenuStatus" />
      <p>
        No tienes productos en tu carrito.
      </p>
      <p>Puedes volver a la tienda para encontrar algo que te guste.</p>
      <a-button
        cta-text="Volver a tienda"
        class="self-center w-40 p-2 text-sm font-bold rounded-md text-begonia-sec-gray bg-begonia-primary-purple hover:bg-purple-200"
        @click="$router.push('/tienda')"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { cartStore } from '@/store'
import { mapState } from 'vuex'
import ACartSummary from '@/components/atoms/ACartSummary.vue'
import MCartItems from '@/components/molecules/MCartItems.vue'
import AButton from '~/components/atoms/AButton.vue'
import OShippingForm from '~/components/organisms/OShippingForm.vue'
import MCheckoutNextStepButton from '~/components/molecules/MCheckoutNextStepButton.vue'
export default Vue.extend({
  components: {
    ACartSummary,
    AButton,
    MCartItems,
    OShippingForm,
    MCheckoutNextStepButton
  },
  layout: 'checkout',
  asyncData ({ store, redirect }) {
    if (store.state.cart.cart.items.length <= 0 && store.state.cart.cart.status !== 'Completed') {
      redirect('/tienda')
    }
  },
  data () {
    return {
      isValidForm: false
    }
  },
  computed: {
    ...mapState({
      cart: state => cartStore.cart
    }),
    items () {
      return cartStore.cart.items
    },
    isCartEmpty () {
      return this.items.length <= 0
    }
  },
  methods: {
    handleNextStep () {
      this.$router.push('/checkout/pago')
    },
    async handleRemoveProduct (product) {
      await cartStore.removeCartItem({
        product,
        variantId: product?.variantSelected?.id ?? null
      })
    },
    handleValidForm () {
      this.isValidForm = true
    },
    handleInvalidForm () {
      this.isValidForm = false
    },
    async setShippingAddress () {
      await cartStore.setCartAddress()
      this.handleNextStep()
    }
  }
})
</script>
