<template>
  <div>
    <div class="flex justify-center">
      <!-- Logos redes -->
      <a-social-media-link
        v-for="item in socialMediaItems"
        :key="item.id"
        :item="item"
        class="mx-4"
      />
    </div>
    <!-- Politica privacidad -->
    <nuxt-link to="/politica-privacidad" class="flex justify-center py-2 mx-auto mt-4 text-xs text-center max-w-max text-begonia-sec-gray">
      Política de privacidad
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ISocialMediaLink } from 'types/common/index'
import ASocialMediaLink from '@/components/atoms/ASocialMediaLink.vue'

export default Vue.extend({
  components: {
    ASocialMediaLink
  },
  data () {
    const socialMediaItems: ISocialMediaLink[] = [
      {
        imgSrc: '/logo-ig.png',
        linkTo: 'https://www.instagram.com/begonia.ilustracion/'
      },
      {
        imgSrc: '/logo-pinterest.png',
        linkTo: 'https://www.pinterest.es/begoniailustra'
      }
    ]
    return {
      socialMediaItems
    }
  }
})
</script>
