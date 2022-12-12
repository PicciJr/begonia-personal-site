<template>
  <div>
    <p class="mb-4 text-xl">Tus datos de envío</p>
    <form class="flex flex-col">
      <m-person-name-input
        class="mb-3"
        @valid-name="handleValidName"
        @invalid-name="handleInvalidName" />
      <m-street-address-input
        class="mb-3"
        @valid-street="handleValidStreet"
        @invalid-street="handleInvalidStreet" />
      <m-city-input
        class="mb-3"
        @valid-city="handleValidCity"
        @invalid-city="handleInvalidCity" />
      <div class="flex justify-between space-x-3">
        <m-postal-code-input
          class="mb-3"
          @valid-postal="handleValidPostalCode"
          @invalid-postal="handleInvalidPostalCode" />
        <m-phone-number-input
          class="mb-3"
          @valid-phone="handleValidPhoneNumber"
          @invalid-phone="handleInvalidPhoneNumber" />
      </div>
      <m-email-input
        @valid-email="handleValidEmail"
        @invalid-email="handleInvalidEmail" />
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
import MPersonNameInput from '~/components/molecules/MPersonNameInput.vue'
export default Vue.extend({
  components: {
    MStreetAddressInput,
    MCityInput,
    MPhoneNumberInput,
    MPostalCodeInput,
    MEmailInput,
    MPersonNameInput
  },
  data() {
    return {
      isValidStreet: false,
      isValidProvince: false,
      isValidPostalCode: false,
      isValidPhoneNumber: false,
      isValidEmail: false,
      isValidName: false
    }
  },
  methods: {
    handleValidStreet() {
      this.isValidStreet = true
      this.sendValidityStatus()
    },
    handleInvalidStreet() {
      this.isValidStreet = false
      this.sendValidityStatus()
    },
    handleValidCity() {
      this.isValidProvince = true
      this.sendValidityStatus()
    },
    handleInvalidCity() {
      this.isValidProvince = false
      this.sendValidityStatus()
    },
    handleValidPostalCode() {
      this.isValidPostalCode = true
      this.sendValidityStatus()
    },
    handleInvalidPostalCode() {
      this.isValidPostalCode = false
      this.sendValidityStatus()
    },
    handleValidPhoneNumber() {
      this.isValidPhoneNumber = true
      this.sendValidityStatus()
    },
    handleInvalidPhoneNumber() {
      this.isValidPhoneNumber = false
      this.sendValidityStatus()
    },
    handleValidEmail() {
      this.isValidEmail = true
      this.sendValidityStatus()
    },
    handleInvalidEmail() {
      this.isValidEmail = false
      this.sendValidityStatus()
    },
    handleValidName() {
      this.isValidName = true
      this.sendValidityStatus()
    },
    handleInvalidName() {
      this.isValidName = false
      this.sendValidityStatus()
    },
    sendValidityStatus() {
      if (
        this.isValidEmail &&
        this.isValidPhoneNumber &&
        this.isValidPostalCode &&
        this.isValidProvince &&
        this.isValidStreet &&
        this.isValidName
      ) {
        this.$emit('valid-form')
      } else {
        this.$emit('invalid-form')
      }
    }
  }
})
</script>
