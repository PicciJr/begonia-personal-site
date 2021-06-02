<!-- Controls how elements are stacked and should look like across the app -->
<template>
  <div class="max-w-md mx-auto">
    <!-- Burger menu (mobile) -->
    <div class="px-4">
      <a-burger-menu-icon class="fixed top-0 z-50 w-10 h-10 p-2 mt-2 text-gray-500 rounded-full fill-current bg-begonia-primary-gray md:hidden" />
    </div>
    <!-- Mini cart icon -->
    <a-mini-cart-icon class="fixed top-0 z-50 w-10 h-10 p-2 mt-2 rounded-lg fill-current text-begonia-sec-gray right-5 bg-begonia-primary-purple md:hidden" />
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
import AMiniCartIcon from '@/components/atoms/AMiniCartIcon.vue'
import OMainMenu from '@/components/organisms/OMainMenu.vue'
import OFooter from '@/components/organisms/OFooter.vue'

export default Vue.extend({
  components: {
    ABurgerMenuIcon,
    AMiniCartIcon,
    OMainMenu,
    OFooter
  }
})
</script>
