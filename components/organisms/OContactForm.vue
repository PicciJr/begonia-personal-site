<template>
  <div class="px-4">
    <a-input-field class="w-full h-10 px-4 mb-4" placeholder="Email" />
    <a-input-field type="checkbox" class="text-green-400 rounded" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AInputField from '~/components/atoms/AInputField.vue'
export default Vue.extend({
  components: {
    AInputField
  }
})
</script>

<style>

</style>
