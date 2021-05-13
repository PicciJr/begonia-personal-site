<!-- Spinner field to incremente o decrement amounts by click or touch -->
<template>
  <div>
    <span class="px-3 py-1 font-bold text-white bg-purple-400 rounded-full" @click="$emit('decrease-amount')">-</span>
    <span class="px-4">{{ amount }}</span>
    <span class="px-3 py-1 font-bold text-white bg-purple-400 rounded-full" @click="$emit('increase-amount')">+</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    amount: {
      type: Number,
      default: 1
    }
  }
})
</script>
