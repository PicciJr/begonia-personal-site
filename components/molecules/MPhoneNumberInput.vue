<template>
  <div>
    <a-input-text-field
      v-model="phoneNumber"
      v-mask="'###-###-###'"
      placeholder="Teléfono de contacto"
      :class="[
        'w-full',
        {
          'border-red-400 ring-red-400 ring-1 bg-red-100 bg-opacity-60':
            errorMessage !== null,
        },
      ]"
      @change="validatePhone"
    />
    <!-- Error label -->
    <p v-show="errorMessage" class="text-xs font-medium text-red-400">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script>
import { cartStore } from '@/store'
import AInputTextField from '../atoms/AInputTextField.vue'

export default {
  components: {
    AInputTextField
  },
  data () {
    return {
      errorMessage: null,
      phoneNumber: null
    }
  },
  methods: {
    validatePhone (event) {
      cartStore.updatePhoneNumber(event.target.value)
      if (this.isValidLength(event.target.value)) {
        this.$emit('valid-phone')
        this.errorMessage = null
      } else {
        this.$emit('invalid-phone')
        this.errorMessage = 'Por favor, introduzca un número de teléfono válido'
      }
    },
    isValidLength (phone) {
      return phone.length >= 9
    }
  }
}
</script>

<style></style>
