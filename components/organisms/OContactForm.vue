<template>
  <form class="space-y-6" @submit="$event.preventDefault()">
    <div class="space-y-1">
      <a-input-text-field
        v-model="email"
        class="w-full"
        placeholder="Correo electrónico"
        @change="updateEmail"
      />
      <p v-if="errorMessage.email" class="text-xs text-red-500">
        {{ errorMessage.email }}
      </p>
    </div>
    <div class="space-y-1">
      <a-input-text-field
        v-model="name"
        class="w-full"
        placeholder="Tu nombre"
        @change="updateName"
      />
      <p v-if="errorMessage.name" class="text-xs text-red-500">
        {{ errorMessage.name }}
      </p>
    </div>
    <textarea
      id=""
      v-model="comment"
      name=""
      cols="30"
      class="w-full text-sm rounded-md border-begonia-primary-gray"
      :placeholder="commentPlaceholderText"
    />
    <a-button
      :cta-text="ctaText"
      class="w-full px-4 py-1 text-lg bg-begonia-primary-purple hover:bg-purple-200"
      @click="checkFormValidity"
    />
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import AInputTextField from '~/components/atoms/AInputTextField.vue'
import AButton from '~/components/atoms/AButton.vue'
export default Vue.extend({
  components: {
    AButton,
    AInputTextField
  },
  props: {
    commentPlaceholderText: {
      type: String,
      default: 'Dime qué te gustaría saber...'
    },
    ctaText: {
      type: String,
      default: 'Quiero más información'
    }
  },
  data () {
    return {
      name: null,
      email: null,
      comment: null,
      errorMessage: {
        name: '',
        email: ''
      }
    }
  },
  methods: {
    checkFormValidity () {
      if (this.isValidEmail() && this.isValidName()) {
        this.$emit('form-ok', {
          email: this.email,
          name: this.name,
          comment: this.comment
        })
      }
    },
    updateEmail (event) {
      this.email = event.target.value
    },
    updateName (event) {
      this.name = event.target.value
    },
    isValidEmail () {
      if (!this.email) {
        this.errorMessage.email =
          'Por favor, indica un email al que podamos contactarte'
        return false
      } else if (!this.isValidPattern(this.email)) {
        this.errorMessage.email = 'Por favor, indica un email válido'
        return false
      } else {
        this.errorMessage.email = ''
        return true
      }
    },
    isValidName () {
      if (!this.name) {
        this.errorMessage.name = 'Por favor, indícame tu nombre'
        return false
      } else {
        this.errorMessage.name = ''
        return true
      }
    },
    isValidPattern (email) {
      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    }
  }
})
</script>
