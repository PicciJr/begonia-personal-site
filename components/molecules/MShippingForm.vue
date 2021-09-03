<template>
  <div>
    <p class="mb-4 text-xl">
      Tus datos de envío
    </p>
    <form class="flex flex-col">
      <a-input-text-field placeholder="Dirección de entrega: calle, número" class="mb-4" />
      <a-input-text-field placeholder="Provincia" class="mb-4" />
      <a-input-text-field placeholder="Código Postal" class="mb-4" maxlength="5" />
      <a-input-text-field placeholder="Teléfono de contacto" class="mb-4" maxlength="9" type="tel" />
      <m-email-input />
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AInputTextField from '~/components/atoms/AInputTextField.vue'
import MEmailInput from '~/components/molecules/MEmailInput.vue'
export default Vue.extend({
  components: {
    AInputTextField,
    MEmailInput
  }
})
</script>
