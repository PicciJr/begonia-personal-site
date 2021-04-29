<!-- Sub item in menu element -->
<template>
  <nuxt-link :to="subitem.linkTo">
    {{ subitem.title }}
  </nuxt-link>
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
