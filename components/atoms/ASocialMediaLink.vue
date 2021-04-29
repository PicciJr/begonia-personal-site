<template>
  <a :href="item.linkTo" target="_blank">
    <img :src="item.imgSrc" class="w-8 h-8 cursor-pointer">
  </a>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    item: {
      type: Object,
      default: null
    }
  }
})
</script>
