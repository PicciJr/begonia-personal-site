<template>
  <div>
    <a-dropdown-field
      placeholder="Provincia"
      :options="allowedCities"
      :class="[
        'w-full',
        {
          'border-red-400 ring-red-400 ring-1 bg-red-100 bg-opacity-60':
            errorMessage !== null,
        },
      ]"
      @change="validateCity"
    />
    <!-- Error label -->
    <p v-show="errorMessage" class="text-xs font-medium text-red-400">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script>
import ADropdownField from '~/components/atoms/ADropdownField.vue'

export default {
  components: {
    ADropdownField
  },
  data () {
    return {
      errorMessage: null,
      allowedCities: null,
      selectedOption: null
    }
  },
  created () {
    this.allowedCities = this.getAllowedCities()
    this.$emit('invalid-city')
  },
  methods: {
    validateCity (event) {
      if (this.isValidCitySelected(event.target.value)) {
        this.$emit('valid-city')
        this.errorMessage = null
      } else {
        this.$emit('invalid-city')
        this.errorMessage = 'Por favor, seleccione una provincia.'
      }
    },
    isValidCitySelected (citySelected) {
      return this.allowedCities.indexOf(citySelected) !== 0
    },
    getAllowedCities () {
      return [
        '-- Provincia --',
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
