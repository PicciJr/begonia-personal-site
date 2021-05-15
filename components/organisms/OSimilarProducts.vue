<template>
  <div>
    <h3 class="mb-4 text-lg font-bold md:text-xl">
      Productos relacionados
    </h3>
    <div class="flex flex-wrap items-center justify-center">
      <m-product-thumb v-for="product in similarProducts" :key="product.id" :product="product" class="mx-2 mb-4" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MProductThumb from '@/components/molecules/MProductThumb.vue'
export default Vue.extend({
  components: {
    MProductThumb
  },
  props: {
    similarProducts: {
      type: Array,
      default: null
    }
  }
})
</script>
