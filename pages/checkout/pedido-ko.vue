<template>
  <div
    class="flex flex-col items-center justify-center px-4 mt-16 space-y-3 text-center md:space-y-6 text-begonia-sec-gray"
  >
    <svg-icon
      name="close-circle"
      class="w-48 h-48 text-red-700 fill-current"
    />
    <p>
      Ups, ha habido un problema con tu compra
    </p>
    <h2 class="text-2xl font-bold">
      No se ha podido efectuar la compra.
    </h2>
    <p>
      No se ha podido procesar el pago correctamente, por favor inténtalo de nuevo.
    </p>
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
  layout: 'checkout'
}
</script>
