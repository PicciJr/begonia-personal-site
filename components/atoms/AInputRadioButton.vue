<!-- Text field for manual user input/typing -->
<template>
  <div>
    <input
      class="fill-current text-begonia-primary-purple ring-0 focus:ring-transparent"
      type="radio"
      :name="group"
      :checked="checked"
      @change="$emit('change', option)"
    >
    <label :for="option">{{ option }}</label>
  </div>
</template>

<script lang="ts">
export default {
  name: 'AInputRadioButton',
  props: {
    group: {
      type: String,
      default: null
    },
    option: {
      type: String,
      default: null
    },
    checked: {
      type: Boolean,
      default: false
    }
  }
}
</script>
