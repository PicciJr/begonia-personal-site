<!-- Wrapper for both the mobile an desktop menu version -->
<template>
  <div>
    <!-- Desktop only -->
    <m-nav-bar-menu :menu-items="menuItems" class="hidden mt-32 md:justify-center md:flex md:items-center" />
    <!-- Mobile only -->
    <m-foldable-menu
      v-show="isMenuOpen"
      :menu-items="menuItems"
      class="fixed top-0 left-0 z-40 flex flex-col items-center justify-center w-full h-full bg-begonia-primary-purple opacity-80 md:hidden slide-in-blurred-tl"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { commonStore } from '~/store'
import MNavBarMenu from '~/components/molecules/MNavBarMenu.vue'
import MFoldableMenu from '~/components/molecules/MFoldableMenu.vue'

export default Vue.extend({
  components: {
    MNavBarMenu,
    MFoldableMenu
  },
  data () {
    return {
      menuItems: [
        {
          title: 'Sobre mi',
          linkTo: '/sobre-mi'
        },
        {
          title: 'Tienda',
          linkTo: '',
          subitems: [
            {
              title: 'Encargos',
              linkTo: ''
            },
            {
              title: 'Láminas',
              linkTo: ''
            },
            {
              title: 'Originales',
              linkTo: ''
            }
          ]
        },
        {
          title: 'Contacto',
          linkTo: '/contacto'
        }
      ]
    }
  },
  computed: {
    isMenuOpen (): boolean {
      return commonStore.isMenuOpen
    }
  }
})
</script>

<style>
.slide-in-blurred-tl {
  -webkit-animation: slide-in-blurred-tl 0.8s cubic-bezier(0.23, 1, 0.32, 1)
    both;
  animation: slide-in-blurred-tl 0.8s cubic-bezier(0.23, 1, 0.32, 1) both;
}

@-webkit-keyframes slide-in-blurred-tl {
  0% {
    filter: blur(80px);
  }
  100% {
    filter: blur(0);
  }
}
@keyframes slide-in-blurred-tl {
  0% {
    filter: blur(80px);
  }
  100% {
    filter: blur(0);
  }
}
</style>
