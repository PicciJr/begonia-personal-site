<!-- Contact page with form -->
<template>
  <div class="mt-12">
    <o-contact-form />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import OContactForm from '~/components/organisms/OContactForm.vue'
export default Vue.extend({
  components: {
    OContactForm
  },
  layout: 'default'
})
</script>
