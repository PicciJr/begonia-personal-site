<!-- Portrait image as cover -->
<template>
  <div :style="imgStyle" />
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    imgSrc: {
      type: String,
      default: ''
    }
  },
  computed: {
    imgStyle () : string {
      return `background-image: url(${this.imgSrc}); background-size: contain; background-position: center; background-repeat: no-repeat; margin-top: 2rem;`
    }
  }
})
</script>

<style>

</style>
