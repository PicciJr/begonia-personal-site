<template>
  <div id="paypal-button-container" />
</template>

<!-- Add the checkout buttons, set up the order and approve the order -->
<script>
export default {
  name: 'APaypalButton',
  mounted () {
    // TODO: completar la logica de pago con el carrito real
    paypal
      .Buttons({
        createOrder (data, actions) {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: '0.01'
                }
              }
            ]
          })
        },
        onApprove (data, actions) {
          return actions.order.capture().then(function (details) {
            alert('Transaction completed by ' + details.payer.name.given_name)
          })
        }
      })
      .render('#paypal-button-container') // Display payment options on your web page
  }
}
</script>
