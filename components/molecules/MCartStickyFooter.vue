<!-- Mobile component for sticky footer add to cart action -->
<template>
  <div class="fixed bottom-0 left-0 flex items-center justify-between px-4 bg-white rounded-tl-2xl rounded-tr-2xl md:hidden sticky-footer-shadow">
    <a-spinner-field />
    <a-button cta-text="Añadir al carrito" class="w-2/3 px-4 py-1 text-lg uppercase bg-begonia-primary-purple" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AButton from '@/components/atoms/AButton.vue'
import ASpinnerField from '@/components/atoms/ASpinnerField.vue'

export default Vue.extend({
  components: {
    AButton,
    ASpinnerField
  }
})
</script>

<style scoped>
    .sticky-footer-shadow {
        box-shadow:  6px -6px 21px #adadad,
             -6px 6px 21px #ffffff;
    }
</style>
