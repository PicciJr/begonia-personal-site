<template>
  <div>
    <p class="mb-4 text-xl">
      Tus datos de envío
    </p>
    <form class="flex flex-col md:flex-row">
      <a-input-text-field placeholder="Dirección de entrega: calle, número" class="mb-4" />
      <div class="flex justify-between space-x-2">
        <a-input-text-field placeholder="Provincia" class="w-1/2 mb-4" />
        <a-input-text-field placeholder="Código Postal" class="w-1/2 mb-4" maxlength="5" />
      </div>
      <a-input-text-field placeholder="Teléfono de contacto" class="mb-4" maxlength="9" />
      <a-input-text-field placeholder="Correo electrónico" class="mb-4" type="email" />
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AInputTextField from '~/components/atoms/AInputTextField.vue'
export default Vue.extend({
  components: {
    AInputTextField
  }
})
</script>
