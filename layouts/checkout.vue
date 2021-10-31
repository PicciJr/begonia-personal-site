<!-- Controls how elements are stacked and should look like across the app -->
<template>
  <div class="max-w-md mx-auto font-bitter">
    <!-- Go Back button -->
    <div class="p-2">
      <a-labeled-button left-icon="arrow-left" />
    </div>
    <!-- View content -->
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ALabeledButton from '~/components/atoms/ALabeledButton.vue'

export default Vue.extend({
  components: {
    ALabeledButton
  }
})
</script>
