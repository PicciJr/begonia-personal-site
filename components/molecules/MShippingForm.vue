<template>
  <div>
    <p class="mb-4 text-xl">
      Tus datos de envío
    </p>
    <form class="flex flex-col">
      <!-- <a-input-text-field placeholder="Dirección de entrega: calle, número" class="mb-4" /> -->
      <m-street-address-input class="mb-3" />
      <!-- <a-input-text-field placeholder="Provincia" class="mb-3" /> -->
      <m-city-input class="mb-3" />
      <!-- <a-input-text-field placeholder="Código Postal" class="mb-3" maxlength="5" /> -->
      <m-postal-code-input class="mb-3" />
      <!-- <a-input-text-field placeholder="Teléfono de contacto" class="mb-3" maxlength="9" type="tel" /> -->
      <m-phone-number-input class="mb-3" />
      <m-email-input />
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AInputTextField from '~/components/atoms/AInputTextField.vue'
import MPhoneNumberInput from '~/components/molecules/MPhoneNumberInput.vue'
import MStreetAddressInput from '~/components/molecules/MStreetAddressInput.vue'
import MCityInput from '~/components/molecules/MCityInput.vue'
import MPostalCodeInput from '~/components/molecules/MPostalCodeInput.vue'
import MEmailInput from '~/components/molecules/MEmailInput.vue'
export default Vue.extend({
  components: {
    AInputTextField,
    MStreetAddressInput,
    MCityInput,
    MPhoneNumberInput,
    MPostalCodeInput,
    MEmailInput
  }
})
</script>
