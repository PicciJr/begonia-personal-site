<!-- Controls how elements are stacked and should look like across the app -->
<template>
  <div class="relative max-w-3xl mx-auto font-bitter">
    <!-- Burger menu (mobile) -->
    <div class="px-4">
      <a-burger-menu-icon class="fixed top-0 z-50 w-10 h-10 p-2 mt-2 text-gray-500 rounded-full fill-current bg-begonia-primary-gray md:hidden" />
    </div>
    <!-- Header logo -->
    <a-header-logo v-if="isHeaderLogoVisible" />
    <!-- Mini cart icon -->
    <a-mini-cart-icon class="fixed top-0 z-50 mt-2 right-5" />
    <!-- Main menu -->
    <o-main-menu class="absolute w-full h-full sm:relative sm:pb-12" />
    <!-- View content -->
    <Nuxt class="relative z-20" />
    <!-- Footer -->
    <o-footer class="absolute bottom-0 w-full pb-4 mx-auto -mb-24" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ABurgerMenuIcon from '@/components/atoms/ABurgerMenuIcon.vue'
import AHeaderLogo from '@/components/atoms/AHeaderLogo.vue'
import AMiniCartIcon from '@/components/atoms/AMiniCartIcon.vue'
import OMainMenu from '@/components/organisms/OMainMenu.vue'
import OFooter from '@/components/organisms/OFooter.vue'

export default Vue.extend({
  components: {
    ABurgerMenuIcon,
    AMiniCartIcon,
    AHeaderLogo,
    OMainMenu,
    OFooter
  },
  computed: {
    isHeaderLogoVisible () {
      return this.$route.path !== '/'
    }
  }
})
</script>
