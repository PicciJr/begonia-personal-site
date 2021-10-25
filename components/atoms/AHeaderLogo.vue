<template>
  <nuxt-link :to="linkTo">
    <img :src="headerLogoSrc" alt="Logo Begonia Ilustraciones" class="w-24 h-24 mx-auto">
  </nuxt-link>
</template>

<script>
export default {
  props: {
    linkTo: {
      type: String,
      default: '/'
    }
  },
  data () {
    return {
      headerLogoSrc: 'https://res.cloudinary.com/dhmap69lg/image/upload/v1634378945/begonia-personal/logos/logo_corto_sin_fondo_web_ldmqkx.png'
    }
  }
}
</script>
