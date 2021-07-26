<template>
  <form class="px-4">
    <a-input-text-field class="w-full h-10 px-4 mb-4" placeholder="Email" />
    <a-input-text-field type="checkbox" class="text-green-400 rounded" />
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import AInputTextField from '~/components/atoms/AInputTextField.vue'
export default Vue.extend({
  components: {
    AInputTextField
  }
})
</script>

<style>

</style>
