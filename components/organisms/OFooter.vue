<template>
  <div>
    <!-- Logos redes -->
    <a-social-media-link
      v-for="item in socialMediaItems"
      :key="item.id"
      :item="item"
      class="mx-4"
    />
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
