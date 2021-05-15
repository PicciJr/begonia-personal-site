<template>
  <button class="text-xl font-semibold rounded-lg" @click="$emit('click')">
    {{ ctaText }}
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    ctaText: {
      type: String,
      default: null
    }
  }

})
</script>
