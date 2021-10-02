<template>
  <div>
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
export default Vue.extend({
  name: 'MProductInCartSpinner',
  components: {
    ASpinnerField
  },
  props: {
    amount: {
      type: Number,
      default: 1
    }
  }
})
</script>
