<template>
  <div>
    <a-input-text-field
      v-model="street"
      placeholder="Dirección de entrega: calle, número"
      :class="[
        'w-full',
        {
          'border-red-400 ring-red-400 ring-1 bg-red-100 bg-opacity-60':
            errorMessage !== null,
        },
      ]"
      @change="validateStreet"
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
import AInputTextField from '~/components/atoms/AInputTextField.vue'

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
      street: state => cartStore.shippingAddress.street
    })
  },
  created () {
    if (this.isValidLength(this.street)) {
      this.$emit('valid-street')
    }
  },
  methods: {
    validateStreet (event) {
      cartStore.updateStreet(event.target.value)
      if (this.isValidLength(event.target.value)) {
        this.$emit('valid-street')
        this.errorMessage = null
      } else {
        this.$emit('invalid-street')
        this.errorMessage = 'Por favor, introduzca una dirección válida.'
      }
    },
    isValidLength (street) {
      return street.length > 3
    }
  }
}
</script>

<style></style>
