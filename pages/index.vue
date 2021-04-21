<!-- Home page -->
<template>
  <div class="relative">
    <!-- Header logo -->
    <!-- Main image -->
    <a-portrait-image :img-src="headerLogoImgSrc" class="w-full h-screen" />
    <!-- Footer -->
  </div>
</template>

<script lang="ts">
import APortraitImage from '@/components/atoms/APortraitImage.vue'
import Vue from 'vue'

export default Vue.extend({
  components: {
    APortraitImage
  },
  data () {
    const headerLogoImgSrc: string =
      'https://begonia-personal.s3.eu-west-3.amazonaws.com/ilustracion+portada.jpg'
    return {
      headerLogoImgSrc
    }
  }
})
</script>
