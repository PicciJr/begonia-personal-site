<!-- Contact page with form -->
<template>
  <div class="max-w-md px-4 mx-auto mt-16 mb-8 text-begonia-sec-gray">
    <div v-if="!isValidForm">
      <p class="mb-4 font-bold text-center text-md">
        ¿Alguna duda? Escríbeme
      </p>
      <o-contact-form class="mb-4" @form-ok="submitFormData" />
    </div>
    <div v-else class="flex flex-col items-center justify-center space-y-3">
      <p>¡Muchas gracias por contactarme!</p>
      <p>Me pondré en contacto contigo brevemente para aclarar tus dudas</p>
      <a-button
        cta-text="Volver a tienda"
        class="w-40 p-2 text-sm font-bold rounded-md text-begonia-sec-gray bg-begonia-primary-purple hover:bg-purple-200"
        @click="$router.push('/tienda')"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AButton from '~/components/atoms/AButton.vue'
import OContactForm from '~/components/organisms/OContactForm.vue'
export default Vue.extend({
  components: {
    AButton,
    OContactForm
  },
  layout: 'default',
  data () {
    return {
      isValidForm: false
    }
  },
  methods: {
    async submitFormData ({ email, name, comment }) {
      this.isValidForm = true
      await this.$apiConnection.post('/mail/contacto', {
        email,
        name,
        longDescription: comment
      })
    }
  }
})
</script>
