<template>
  <div id="paypal-button-container" />
</template>

<!-- Add the checkout buttons, set up the order and approve the order -->
<script>
import { cartStore } from '@/store'

export default {
  name: 'APaypalButton',
  data () {
    return {
      cart: null
    }
  },
  created () {
    this.cart = cartStore.cart
  },
  mounted () {
    const cartTotalFormatted = parseFloat(this.cart.total.toFixed(2))
    const router = this.$router
    paypal
      .Buttons({
        createOrder (data, actions) {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: cartTotalFormatted
                }
              }
            ]
          })
        },
        onApprove (data, actions) {
          return actions.order
            .capture()
            .then((response) => {
              return cartStore.completeOrder()
            })
            .then(() => router.push('/checkout/pedido-ok'))
        },
        onError (err) {
          console.log('paypal onError', err)
          router.push('/checkout/pedido-ko')
          throw err
          // Show a cancel page, or return to cart
        }
      })
      .render('#paypal-button-container') // Display payment options on your web page
  }
}
</script>
