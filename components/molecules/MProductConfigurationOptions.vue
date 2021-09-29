<!-- Product options that the user can configure with different markup depending on the product type -->
<template>
  <div>
    <!-- Type lamina -->
    <div v-if="product.hasVariants">
      <a-dropdown-field
        class="w-full h-10 px-4 mb-4"
        :options="product.sizes"
      />
    </div>
    <!-- Amounts -->
    <div class="flex items-center mt-6">
      <a-spinner-field
        :amount="amount"
        @decrease-amount="$emit('decrease-amount')"
        @increase-amount="$emit('increase-amount')"
      />
      <span class="pl-4">
        <strong>Tienes {{ amount }} unidad(es)</strong> de este producto en tu
        carrito
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ASpinnerField from '@/components/atoms/ASpinnerField.vue'
import ADropdownField from '@/components/atoms/ADropdownField.vue'
export default Vue.extend({
  components: {
    ADropdownField,
    ASpinnerField
  },
  props: {
    product: {
      type: Object,
      default: null
    },
    amount: {
      type: Number,
      default: 1
    }
  }
})
</script>
