<!-- Step 1 -->
<template>
  <div class="px-4 text-begonia-sec-gray">
    <h2 class="mt-2 mb-8 text-2xl font-bold text-center">
      Mi carrito
    </h2>
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
    <m-checkout-next-step-button :is-enabled="isValidForm" button-text="Siguiente paso" @click="setShippingAddress" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { cartStore } from '@/store'
import { mapState } from 'vuex'
import ACartSummary from '@/components/atoms/ACartSummary.vue'
import MCartItems from '@/components/molecules/MCartItems.vue'
import OShippingForm from '~/components/organisms/OShippingForm.vue'
import MCheckoutNextStepButton from '~/components/molecules/MCheckoutNextStepButton.vue'
export default Vue.extend({
  components: {
    ACartSummary,
    MCartItems,
    OShippingForm,
    MCheckoutNextStepButton
  },
  layout: 'checkout',
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
    }
  },
  methods: {
    handleNextStep () {
      this.$router.push('/checkout/pago')
    },
    async handleRemoveProduct (product) {
      // TODO: usar store
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
