<!-- Burger menu -->
<template>
  <div>
    <!-- Open menu button -->
    <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="transition-all duration-500 ease-in-out transform rotate-180" @click="toggleMenuStatus">
      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </svg>
    <!-- Close button -->
    <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="transition-all duration-500 ease-in-out transform rotate-90" @click="toggleMenuStatus">
      <path
        d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
      />
    </svg>
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

<style></style>
