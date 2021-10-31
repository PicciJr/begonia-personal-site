<template>
  <nuxt-link :to="linkTo" class="px-2 py-1 rounded-full bg-begonia-primary-purple">
    <slot name="left-icon">
      <svg-icon v-if="leftIcon" :name="leftIcon" class="inline w-5 h-5 fill-current text-begonia-sec-gray" />
    </slot>
    <span class="text-xs text-begonia-sec-gray">{{ buttonText }}</span>
    <slot name="right-icon">
      <svg-icon v-if="rightIcon" :name="rightIcon" class="inline w-5 h-5 fill-current text-begonia-sec-gray" />
    </slot>
  </nuxt-link>
</template>

<script>
export default {
  name: 'ALabeledButton',
  props: {
    linkTo: {
      type: String,
      default: '/tienda'
    },
    leftIcon: {
      type: String,
      default: null
    },
    rightIcon: {
      type: String,
      default: null
    },
    buttonText: {
      type: String,
      default: 'Volver a tienda'
    }
  }
}
</script>

<style>

</style>
