<template>
  <vue-glide :breakpoints="breakpoints">
    <vue-glide-slide v-for="image in content" :key="image.id">
      <img :src="image" alt="">
    </vue-glide-slide>
  </vue-glide>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    content: {
      type: Array,
      default: null
    },
    breakpoints: {
      type: Object,
      default () {
        return {
          800: {
            perView: 1
          }
        }
      }
    }
  }
})
</script>
