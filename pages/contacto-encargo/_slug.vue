<!-- Contact page with form -->
<template>
  <div class="max-w-md px-4 mx-auto mt-16 mb-8 text-begonia-sec-gray">
    <div v-if="!isValidForm">
      <p class="mb-4 font-bold text-center text-md">
        Quisiera hacer un encargo
      </p>
      <!-- Product Thumb -->
      <a-cart-item class="mb-4" :product="product" />
      <o-contact-form
        class="mb-4"
        comment-placeholder-text="Cuéntame tu idea para este encargo..."
        cta-text="Me interesa"
        @form-ok="submitFormData"
      />
    </div>
    <div v-else class="flex flex-col items-center justify-center space-y-3">
      <p>¡Muchas gracias por contactarme!</p>
      <p>
        Me pondré en contacto contigo brevemente para que podamos llevar
        adelante tu <strong>encargo personalizado</strong>
      </p>
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
import ACartItem from '~/components/atoms/ACartItem.vue'
import OContactForm from '~/components/organisms/OContactForm.vue'
export default Vue.extend({
  components: {
    AButton,
    ACartItem,
    OContactForm
  },
  layout: 'default',
  async asyncData ({ app, route }) {
    try {
      const productSlug = route.params.slug
      const response = await app.$apiConnection.get(
        `/product/slug/${productSlug}`
      )
      const product = response.data
      return {
        product
      }
    } catch (err) {
      app.$bugsnag.notify(new Error('Error contacto encargo', err))
    }
  },
  data () {
    return {
      isValidForm: false
    }
  },
  methods: {
    async submitFormData ({ email, name, comment }) {
      this.isValidForm = true
      await this.$apiConnection.post('/mail/encargo', {
        email,
        name,
        longDescription: comment
      })
    }
  }
})
</script>
