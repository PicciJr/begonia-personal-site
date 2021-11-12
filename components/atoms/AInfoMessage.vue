<template>
  <div class="flex items-center p-1 space-x-2 text-xs bg-yellow-100 border-b-2 border-gray-400 rounded-b-xl justify-evenly">
    <svg-icon
      name="information"
      class="inline w-8 h-8 fill-current text-begonia-sec-gray"
    />
    <span>{{ infoMessage }}</span>
  </div>
</template>

<script>
export default {
  name: 'AInfoMessage',
  props: {
    infoMessage: {
      type: String,
      default: null
    }
  }
}
</script>

<style></style>
