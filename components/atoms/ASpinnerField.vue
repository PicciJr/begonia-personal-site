<!-- Spinner field to incremente o decrement amounts by click or touch -->
<template>
  <div>
    <span :class="['px-3 py-1 font-extrabold text-white rounded-full cursor-pointer', bgColor]" @click="$emit('decrease-amount')">-</span>
    <span class="px-2">{{ amount }}</span>
    <span :class="['px-3 py-1 font-bold text-white rounded-full cursor-pointer', bgColor]" @click="$emit('increase-amount')">+</span>
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
