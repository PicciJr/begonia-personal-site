<template>
  <div class="flex flex-col">
    <div class="flex mb-2 space-x-2">
      <span>Mano</span>
      <div class="flex space-x-1">
        <a-input-radio-button group="primera-mano" option="ella" :checked="firstHandGender === 'ella'" @change="updateFirstHandGender" />
        <a-input-radio-button group="primera-mano" option="él" :checked="firstHandGender === 'él'" @change="updateFirstHandGender" />
      </div>
    </div>
    <a-dropdown-field
      v-model="selectedHoroscopeFirstHand"
      class="mb-6"
      :options="horoscopeOptions"
      :selected-option="selectedHoroscopeFirstHand"
      @change="updateHoroscopeSelectedFirstHand"
    />
    <div class="flex mb-2 space-x-2">
      <span>Mano</span>
      <div class="flex space-x-1">
        <a-input-radio-button group="segunda-mano" option="ella" :checked="secondHandGender === 'ella'" @change="updateSecondHandGender" />
        <a-input-radio-button group="segunda-mano" option="él" :checked="secondHandGender === 'él'" @change="updateSecondHandGender" />
      </div>
    </div>
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
import { mapGetters } from 'vuex'
import { IProduct } from '~/types/product'
import ADropdownField from '~/components/atoms/ADropdownField.vue'
import AInputRadioButton from '~/components/atoms/AInputRadioButton.vue'
export default {
  name: 'MHoroscopeCustomization',
  components: {
    ADropdownField,
    AInputRadioButton
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
      selectedHoroscopeSecondHand: null,
      firstHandGender: null,
      secondHandGender: null
    }
  },
  computed: {
    ...mapGetters({
      productInCart: 'cart/productInCart'
    }),
    horoscopeOptions () {
      return this.product.customHoroscopes.map(({ nombre }) => nombre)
    }
  },
  created () {
    this.selectedHoroscopeFirstHand = this.product.customHoroscopes[0].nombre
    this.selectedHoroscopeSecondHand = this.product.customHoroscopes[1].nombre
    this.firstHandGender = typeof this.productInCart(this.product.id) !== 'undefined' ? this.productInCart(this.product.id).customOptionSelected.firstHandGender : 'ella'
    this.secondHandGender = typeof this.productInCart(this.product.id) !== 'undefined' ? this.productInCart(this.product.id).customOptionSelected.secondHandGender : 'él'
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
        secondHand: this.selectedHoroscopeSecondHand,
        firstHandGender: this.firstHandGender,
        secondHandGender: this.secondHandGender
      })
    },
    updateFirstHandGender (option) {
      this.firstHandGender = option
      this.sendHoroscopeOptionsSelected()
    },
    updateSecondHandGender (option) {
      this.secondHandGender = option
      this.sendHoroscopeOptionsSelected()
    }
  }
}
</script>
