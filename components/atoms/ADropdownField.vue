<!-- Dropdown box for selecting a single option -->
<template>
  <select
    class="text-sm text-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600"
  >
    <option v-for="option in options" :key="option.id" :value="option">
      {{ option }}
    </option>
  </select>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    options: {
      type: Array,
      default: null
    }
  }
})
</script>
