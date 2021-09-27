<!-- Small product thumb for reduced areas like related products -->
<template>
  <div class="flex flex-col flex-wrap">
    <img :src="product.images[0]" alt="" class="object-cover rounded-md max-h-24">
    <h3 class="mb-2 font-extrabold">
      {{ product.title }}
    </h3>
    <span class="mb-2 text-xs">{{ product.price }} €</span>
    <span class="px-2 py-1 text-sm font-bold uppercase rounded-full text-begonia-sec-gray bg-begonia-primary-purple">Añadir al carrito</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    product: {
      type: Object,
      default: null
    }
  }
})
</script>
