<template>
  <div class="flex flex-col">
    <span class="mb-2">Mano ella &#128105;</span>
    <a-dropdown-field
      v-model="selectedHoroscopeFirstHand"
      class="mb-2"
      :options="horoscopeOptions"
      :selected-option="selectedHoroscopeFirstHand"
      @change="updateHoroscopeSelectedFirstHand"
    />
    <span class="mb-2">Mano él &#128104;</span>
    <a-dropdown-field
      v-model="selectedHoroscopeSecondHand"
      class="mb-2"
      :options="horoscopeOptions"
      :selected-option="selectedHoroscopeSecondHand"
      @change="updateHoroscopeSelectedSecondHand"
    />
  </div>
</template>

<script lang="ts">
import { IProduct } from '~/types/product'
import ADropdownField from '~/components/atoms/ADropdownField.vue'
export default {
  name: 'MHoroscopeCustomization',
  components: {
    ADropdownField
  },
  props: {
    product: {
      type: Object as () => IProduct,
      default: null
    }
  },
  data () {
    return {
      selectedHoroscopeFirstHand: null,
      selectedHoroscopeSecondHand: null
    }
  },
  computed: {
    horoscopeOptions () {
      return this.product.customHoroscopes.map(({ nombre }) => nombre)
    }
  },
  created () {
    this.selectedHoroscopeFirstHand = this.product.customHoroscopes[0].nombre
    this.selectedHoroscopeSecondHand = this.product.customHoroscopes[1].nombre
    this.sendHoroscopeOptionsSelected()
  },
  methods: {
    updateHoroscopeSelectedFirstHand (event) {
      this.selectedHoroscopeFirstHand = event.target.value
      this.sendHoroscopeOptionsSelected()
    },
    updateHoroscopeSelectedSecondHand (event) {
      this.selectedHoroscopeSecondHand = event.target.value
      this.sendHoroscopeOptionsSelected()
    },
    sendHoroscopeOptionsSelected () {
      this.$emit('horoscope-selected', {
        firstHand: this.selectedHoroscopeFirstHand,
        secondHand: this.selectedHoroscopeSecondHand
      })
    }
  }
}
</script>
