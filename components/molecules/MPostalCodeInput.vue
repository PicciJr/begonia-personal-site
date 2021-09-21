<template>
  <div>
    <a-input-text-field
      v-model="postalCode"
      v-mask="'#####'"
      placeholder="Código Postal"
      :class="[
        'w-full',
        {
          'border-red-400 ring-red-400 ring-1 bg-red-100 bg-opacity-60':
            errorMessage !== null,
        },
      ]"
      @keydown="preventInvalidChars"
      @change="validatePostalCode"
    />
    <!-- Error label -->
    <p v-show="errorMessage" class="text-xs font-medium text-red-400">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { cartStore } from '@/store'
import AInputTextField from '../atoms/AInputTextField.vue'

export default {
  components: {
    AInputTextField
  },
  data () {
    return {
      errorMessage: null
    }
  },
  computed: {
    ...mapState({
      postalCode: state => cartStore.shippingAddress.postalCode
    })
  },
  created () {
    if (this.isValidLength(this.postalCode)) {
      this.$emit('valid-postal')
    }
  },
  methods: {
    validatePostalCode (event) {
      cartStore.updatePostalCode(event.target.value)
      if (this.isValidLength(event.target.value)) {
        this.$emit('valid-postal')
        this.errorMessage = null
      } else {
        this.$emit('invalid-postal')
        this.errorMessage = 'Por favor, introduzca un código postal válido'
      }
    },
    preventInvalidChars (event) {
      // keycode = 9 to allow tab index
      if ((event.which < 48 || event.which > 57) && event.which !== 9) {
        event.preventDefault()
      }
    },
    isValidLength (postalCode) {
      return postalCode.length >= 4 && postalCode.length <= 5
    }
  }
}
</script>

<style></style>
