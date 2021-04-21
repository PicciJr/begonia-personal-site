<!-- Contact page with form -->
<template>
  <div>
    <o-contact-form />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import OContactForm from '~/components/organisms/OContactForm.vue'
export default Vue.extend({
  components: {
    OContactForm
  }
})
</script>
