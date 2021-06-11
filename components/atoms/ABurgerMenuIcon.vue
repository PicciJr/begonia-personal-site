<!-- Burger menu -->
<template>
  <div>
    <!-- Open menu button -->
    <svg-icon v-if="!isMenuOpen" name="burger-menu" class="w-full h-full transition-all duration-500 ease-in-out transform rotate-180" @click="toggleMenuStatus" />
    <!-- Close button -->
    <svg-icon v-else name="close" class="w-full h-full transition-all duration-500 ease-in-out transform rotate-90" @click="toggleMenuStatus" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { commonStore } from '~/store'
export default Vue.extend({
  computed: {
    isMenuOpen (): boolean {
      return commonStore.isMenuOpen
    }
  },
  methods: {
    toggleMenuStatus () {
      commonStore.setIsMenuOpen(!this.isMenuOpen)
    }
  }
})
</script>
