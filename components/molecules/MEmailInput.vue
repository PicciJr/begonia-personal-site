<template>
  <div>
    <span class="text-xs text-gray-400">Correo electrónico</span>
    <a-input-text-field
      v-model="email"
      :class="[
        'w-full',
        {
          'border-red-400 ring-red-400 ring-1 bg-red-100 bg-opacity-60':
            errorMessage !== null
        }
      ]"
      type="email"
      @change="validateEmail" />
    <!-- Error label -->
    <p v-show="errorMessage" class="text-xs font-medium text-red-400">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { cartStore } from '@/store'
import AInputTextField from '~/components/atoms/AInputTextField.vue'

export default {
  name: 'MEmailInput',
  components: {
    AInputTextField
  },
  data() {
    return {
      errorMessage: null
    }
  },
  computed: {
    ...mapState({
      email: (state) => cartStore.shippingAddress.email
    })
  },
  created() {
    if (this.isValidLength(this.email) && this.isValidPattern(this.email)) {
      this.$emit('valid-email')
    }
  },
  methods: {
    validateEmail(event) {
      cartStore.updateEmail(event.target.value)
      if (
        this.isValidLength(event.target.value) &&
        this.isValidPattern(event.target.value)
      ) {
        this.$emit('valid-email')
        this.errorMessage = null
      } else {
        this.$emit('invalid-email')
        this.errorMessage = 'Por favor, introduzca un email válido.'
      }
    },
    isValidLength(email) {
      return email.length > 5
    },
    isValidPattern(email) {
      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    }
  }
}
</script>

<style></style>
