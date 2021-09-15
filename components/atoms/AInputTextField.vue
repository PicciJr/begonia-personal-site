<!-- Text field for manual user input/typing -->
<template>
  <input
    class="h-12 px-4 text-sm text-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600"
    @change="$emit('change', $event)"
    @keydown="$emit('keydown', $event)"
    @input="$emit('input', $event)"
  >
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>
