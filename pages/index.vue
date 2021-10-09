<!-- Home page -->
<template>
  <div>
    <!-- Header logo -->
    <!-- Main image -->
    <a-portrait-image :img-src="headerLogoImgSrc" class="w-full sm:mt-12 portrait-image" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import APortraitImage from '@/components/atoms/APortraitImage.vue'

export default Vue.extend({
  components: {
    APortraitImage
  },
  layout: 'default',
  data () {
    const headerLogoImgSrc: string =
      'https://begonia-personal.s3.eu-west-3.amazonaws.com/ilustracion+portada.jpg'
    return {
      headerLogoImgSrc
    }
  }
})
</script>

<style scoped>
  .portrait-image {
    height: 28rem;
  }
</style>
