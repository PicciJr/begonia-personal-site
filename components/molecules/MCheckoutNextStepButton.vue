<template>
  <a-button
    :cta-text="buttonText"
    :class="['w-full px-4 py-2 mb-4 text-xl font-bold', isClickableButton]"
    @click="$emit('click')"
  />
</template>

<script>
import AButton from '@/components/atoms/AButton.vue'

export default {
  components: {
    AButton
  },
  props: {
    buttonText: {
      type: String,
      default: null
    },
    isEnabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isClickableButton () {
      return this.isEnabled ? 'bg-begonia-primary-purple text-begonia-sec-gray hover:ring-2 ring-purple-300' : 'text-white bg-gray-300 cursor-not-allowed opacity-70 pointer-events-none'
    }
  }
}
</script>

<style>

</style>
