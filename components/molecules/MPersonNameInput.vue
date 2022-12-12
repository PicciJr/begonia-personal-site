<template>
  <div>
    <span class="text-xs text-gray-400">Nombre y apellidos</span>
    <a-input-text-field
      v-model="name"
      :class="[
        'w-full',
        {
          'border-red-400 ring-red-400 ring-1 bg-red-100 bg-opacity-60':
            errorMessage !== null
        }
      ]"
      @change="validateName" />
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
  name: 'MPersonNameInput',
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
      name: (state) => cartStore.shippingAddress.name
    }),
    isValidName() {
      return this.name.length > 3
    }
  },
  created() {
    if (this.isValidName) {
      this.$emit('valid-name')
    }
  },
  methods: {
    validateName(event) {
      cartStore.updatePersonName(event.target.value.trim())
      if (this.isValidName) {
        this.$emit('valid-name')
        this.errorMessage = null
      } else {
        this.$emit('invalid-name')
        this.errorMessage = 'Por favor, introduce tu nombre'
      }
    }
  }
}
</script>

<style></style>
