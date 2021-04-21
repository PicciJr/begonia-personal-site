<!-- Sub item in menu element -->
<template>
  <div>
    {{ subitem.title }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    subitem: {
      type: Object,
      default: null
    }
  }
})
</script>
