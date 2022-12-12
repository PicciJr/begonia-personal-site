<template>
  <div>
    <span class="text-xs text-gray-400">Provincia</span>
    <a-dropdown-field
      v-model="selectedOption"
      :selected-option="selectedOption"
      :options="allowedCities"
      :class="[
        'w-full',
        {
          'border-red-400 ring-red-400 ring-1 bg-red-100 bg-opacity-60':
            errorMessage !== null
        }
      ]"
      @change="validateCity" />
    <!-- Error label -->
    <p v-show="errorMessage" class="text-xs font-medium text-red-400">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { cartStore } from '@/store'
import ADropdownField from '~/components/atoms/ADropdownField.vue'

export default {
  name: 'MCityInput',
  components: {
    ADropdownField
  },
  data() {
    return {
      errorMessage: null,
      allowedCities: null
      // selectedOption: null
    }
  },
  computed: {
    ...mapState({
      selectedOption: (state) => cartStore.shippingAddress.province
    })
  },
  created() {
    this.allowedCities = this.getAllowedCities()
    if (this.isValidCitySelected(this.selectedOption)) {
      this.$emit('valid-city')
    } else {
      this.$emit('invalid-city')
    }
  },
  methods: {
    validateCity(event) {
      cartStore.updateProvince(event.target.value)
      if (this.isValidCitySelected(event.target.value)) {
        this.$emit('valid-city')
        this.errorMessage = null
      } else {
        this.$emit('invalid-city')
        this.errorMessage = 'Por favor, seleccione una provincia.'
      }
    },
    isValidCitySelected(citySelected) {
      return this.allowedCities.indexOf(citySelected) !== 0
    },
    getAllowedCities() {
      return [
        '-- Selecciona provincia --',
        'Alava',
        'Albacete',
        'Alicante',
        'Almería',
        'Asturias',
        'Avila',
        'Badajoz',
        'Barcelona',
        'Burgos',
        'Cáceres',
        'Cádiz',
        'Cantabria',
        'Castellón',
        'Ciudad Real',
        'Córdoba',
        'La Coruña',
        'Cuenca',
        'Gerona',
        'Granada',
        'Guadalajara',
        'Guipúzcoa',
        'Huelva',
        'Huesca',
        'Jaén',
        'León',
        'Lérida',
        'Lugo',
        'Madrid',
        'Málaga',
        'Murcia',
        'Navarra',
        'Orense',
        'Palencia',
        'Pontevedra',
        'La Rioja',
        'Salamanca',
        'Segovia',
        'Sevilla',
        'Soria',
        'Tarragona',
        'Teruel',
        'Toledo',
        'Valencia',
        'Valladolid',
        'Vizcaya',
        'Zamora',
        'Zaragoza'
      ]
    }
  }
}
</script>

<style></style>
