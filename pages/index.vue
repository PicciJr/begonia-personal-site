<!-- Home page -->
<template>
  <div>
    <!-- Main image -->
    <a-portrait-image :img-src="mainImgSrc" class="w-full portrait-image" />
    <!-- Main logo -->
    <img :src="logoHome" alt="Begonia Ilustraciones" class="h-48 mx-auto -mt-12">
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import APortraitImage from '@/components/atoms/APortraitImage.vue'

export default Vue.extend({
  name: 'Home',
  components: {
    APortraitImage
  },
  layout: 'default',
  data () {
    const mainImgSrc: string =
      'https://res.cloudinary.com/dhmap69lg/image/upload/v1630865559/begonia-personal/small_ilustracion_portada_8e0985d6af.jpg'
    const logoHome: string =
      'https://res.cloudinary.com/dhmap69lg/image/upload/v1634378945/begonia-personal/logos/logo_largo_web_sin_fondo_xmqv7w.png'
    return {
      mainImgSrc,
      logoHome
    }
  }
})
</script>

<style scoped>
.portrait-image {
  height: 28rem;
}
</style>
