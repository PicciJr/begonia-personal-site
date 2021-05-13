<!-- Controls how elements are stacked and should look like across the app -->
<template>
  <div class="max-w-md mx-auto">
    <!-- Burger menu (mobile) -->
    <div class="px-4">
      <a-burger-menu-icon class="absolute top-0 z-50 w-8 h-8 mt-2 text-gray-500 fill-current md:hidden" />
    </div>
    <!-- Main menu -->
    <o-main-menu class="absolute w-full h-full sm:relative sm:pb-12" />
    <!-- View content -->
    <Nuxt class="relative z-20" />
    <!-- Footer -->
    <o-footer class="flex items-center justify-center w-full max-w-md pb-4" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ABurgerMenuIcon from '@/components/atoms/ABurgerMenuIcon.vue'
import OMainMenu from '@/components/organisms/OMainMenu.vue'
import OFooter from '@/components/organisms/OFooter.vue'

export default Vue.extend({
  components: {
    ABurgerMenuIcon,
    OMainMenu,
    OFooter
  }
})
</script>
