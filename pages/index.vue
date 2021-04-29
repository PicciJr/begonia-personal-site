<!-- Home page -->
<template>
  <div>
    <!-- Header logo -->
    <!-- Main image -->
    <a-portrait-image :img-src="headerLogoImgSrc" class="w-full sm:mt-12 portrait-image" />
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

<style scoped>
  .portrait-image {
    height: 28rem;
  }
</style>
