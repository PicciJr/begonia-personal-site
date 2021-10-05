<template>
  <div
    class="flex flex-col items-center justify-center px-4 mt-16 space-y-3 text-begonia-sec-gray"
  >
    <svg-icon
      name="check-circle"
      class="w-48 h-48 text-green-700 fill-current"
    />
    <p>
      Muchas gracias por tu encargo
    </p>
    <h2 class="text-2xl font-bold">
      ¡Pedido confirmado!
    </h2>
    <div class="px-8 space-y-3 md:space-y-6">
      <p>
        &#x1F4E6; Estamos preparando minuciosa y cariñosamente tu encargo para que esté en
        tus manos lo antes posible.
      </p>
      <p>
        &#x1F4E9; Recibirás un email de confirmación en los próximos minutos donde te iremos
        informando sobre el estado del envío.
      </p>
    </div>
    <a-button
      cta-text="Volver a tienda"
      class="w-40 p-2 text-sm font-bold uppercase rounded-md text-begonia-sec-gray bg-begonia-primary-purple hover:bg-purple-200"
      @click="$router.push('/tienda')"
    />
  </div>
</template>

<script>
import AButton from '~/components/atoms/AButton.vue'
export default {
  components: {
    AButton
  },
  layout: 'checkout',
  asyncData ({ redirect, store }) {
    if (store.state.cart.cart.status !== 'Completed') {
      redirect('/checkout/envio')
    }
  }
}
</script>
