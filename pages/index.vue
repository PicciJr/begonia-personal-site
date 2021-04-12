<template>
  <div class="relative">
    <!-- Header logo -->
    <!-- Main image -->
    <div class="w-full h-screen mt-10 mb-16 sm:mt-0">
      <a-portrait-image :img-src="headerLogoImgSrc" class="h-full" />
    </div>
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
