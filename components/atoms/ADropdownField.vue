<!-- Dropdown box for selecting a single option -->
<template>
  <select
    :value="selectedOption"
    class="h-12 text-sm text-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600"
    @change="$emit('change', $event)"
    @select="$emit('select', $event)"
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
    },
    selectedOption: {
      type: String,
      default: null
    }
  }
})
</script>
