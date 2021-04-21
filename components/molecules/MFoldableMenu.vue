<!-- Vertical foldable menu with items and subitems -->
<template>
  <div>
    <a-menu-item v-for="item in menuItems" :key="item.id" :menu-item="item" class="pb-8 text-2xl font-semibold text-gray-800" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AMenuItem from '@/components/atoms/AMenuItem.vue'

export default Vue.extend({
  components: {
    AMenuItem
  },
  props: {
    menuItems: {
      type: Array,
      default: null
    }
  }
})
</script>
