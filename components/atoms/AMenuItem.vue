<!-- Single menu item with subitems if applies -->
<template>
  <div>
    <nuxt-link :to="menuItem.linkTo" @click.native="closeMenu">
      {{ menuItem.title }}
    </nuxt-link>
    <div
      v-if="menuItem !== null"
      class="md:pt-8 md:absolute md:top-0"
    >
      <!-- Subitems -->
      <a-menu-subitem
        v-for="subitem in menuItem.subitems"
        :key="subitem.id"
        :subitem="subitem"
        class="flex flex-col items-start justify-center pl-3 mb-2 text-base font-medium text-gray-600 cursor-pointer subitem-element"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { commonStore } from '~/store'

import AMenuSubitem from '~/components/atoms/AMenuSubitem.vue'
export default Vue.extend({
  components: {
    AMenuSubitem
  },
  props: {
    menuItem: {
      type: Object,
      default: null
    }
  },
  methods: {
    closeMenu () {
      commonStore.setIsMenuOpen(false)
    }
  }
})
</script>
