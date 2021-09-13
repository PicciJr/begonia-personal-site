<template>
  <div>
    <p class="mb-4 text-xl">
      Tus datos de envío
    </p>
    <form class="flex flex-col">
      <m-street-address-input class="mb-3" />
      <m-city-input class="mb-3" />
      <m-postal-code-input class="mb-3" />
      <m-phone-number-input class="mb-3" />
      <m-email-input />
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MPhoneNumberInput from '~/components/molecules/MPhoneNumberInput.vue'
import MStreetAddressInput from '~/components/molecules/MStreetAddressInput.vue'
import MCityInput from '~/components/molecules/MCityInput.vue'
import MPostalCodeInput from '~/components/molecules/MPostalCodeInput.vue'
import MEmailInput from '~/components/molecules/MEmailInput.vue'
export default Vue.extend({
  components: {
    MStreetAddressInput,
    MCityInput,
    MPhoneNumberInput,
    MPostalCodeInput,
    MEmailInput
  }
})
</script>
