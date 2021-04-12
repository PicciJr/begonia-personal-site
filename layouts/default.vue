<template>
  <div class="max-w-md mx-auto">
    <!-- Burger menu (mobile) -->
    <div class="absolute top-0 px-4 mt-2">
      <a-burger-menu class="w-8 h-8 text-gray-300 fill-current" />
    </div>
    <!-- View content -->
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ABurgerMenu from '@/components/atoms/ABurgerMenu.vue'

export default Vue.extend({
  components: {
    ABurgerMenu
  }
})
</script>
