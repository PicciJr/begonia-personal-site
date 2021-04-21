<template>
  <div class="max-w-md mx-auto">
    <!-- Burger menu (mobile) -->
    <div class="px-4">
      <a-burger-menu-icon class="absolute top-0 z-50 w-8 h-8 mt-2 text-gray-500 fill-current md:hidden" />
    </div>
    <!-- Main menu -->
    <o-main-menu class="z-40 w-full" />
    <!-- View content -->
    <Nuxt class="z-30 mt-16 md:mt-24" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ABurgerMenuIcon from '@/components/atoms/ABurgerMenuIcon.vue'
import OMainMenu from '@/components/organisms/OMainMenu.vue'

export default Vue.extend({
  components: {
    ABurgerMenuIcon,
    OMainMenu
  }
})
</script>
