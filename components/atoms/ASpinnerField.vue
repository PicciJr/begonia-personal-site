<!-- Spinner field to incremente o decrement amounts by click or touch -->
<template>
  <div class="flex items-center">
    <svg-icon name="minus-circle" class="w-8 h-8 text-gray-400 cursor-pointer stroke-current" @click="$emit('decrease-amount')" />
    <span class="px-2 font-bold">{{ amount }}</span>
    <svg-icon name="plus-circle" class="w-8 h-8 text-gray-400 cursor-pointer stroke-current" @click="$emit('increase-amount')" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    amount: {
      type: Number,
      default: 1
    },
    /** Customize spinner main color */
    color: {
      type: String,
      default: null
    }
  },
  computed: {
    bgColor (): string {
      return this.color !== null ? this.color : 'bg-begonia-primary-gray'
    }
  }
})
</script>
