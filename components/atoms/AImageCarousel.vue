<template>
  <vue-glide
    v-model="activeSlide"
    :breakpoints="breakpoints"
    :perView="perView"
    :hoverpause="hoverpause"
    :autoplay="autoplay">
    <vue-glide-slide
      v-for="(image, index) in product.images"
      :key="index"
      class="my-auto">
      <img
        :src="imageSourceResolver(image)"
        :alt="`Begoña Quereda Ilustraciones - ${product.title}`" />
    </vue-glide-slide>
    <template slot="control">
      <button
        v-for="(item, index) in product.images"
        :key="index"
        class="w-2 h-2 mx-2 mt-3 bg-gray-400 rounded-full"
        :class="{ 'bg-begonia-primary-orange': index === activeSlide }"
        :data-glide-dir="'=' + index" />
    </template>
  </vue-glide>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    product: {
      type: Object,
      default: null
    },
    breakpoints: {
      type: Object,
      default() {
        return {
          800: {
            perView: 1
          }
        }
      }
    },
    perView: {
      type: Number,
      default: 1
    },
    autoplay: {
      type: [Number, Boolean],
      default: false
    },
    hoverpause: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      activeSlide: 0
    }
  },
  mounted() {
    this.updateControlsDisplay()
  },
  methods: {
    imageSourceResolver(image) {
      return image.formats?.medium?.url || image.formats?.small?.url
    },
    updateControlsDisplay() {
      // Por css no funciona, con ningun selector no llega a responder
      const carouselControls = document.querySelector(
        "[data-glide-el='controls']"
      )
      if (carouselControls) {
        carouselControls.style.display = 'flex'
        carouselControls.style.justifyContent = 'center'
      }
    }
  }
})
</script>
