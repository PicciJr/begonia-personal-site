<template>
  <vue-glide
    v-model="activeSlide"
    :breakpoints="breakpoints"
    :hoverpause="hoverpause"
    :autoplay="autoplay"
  >
    <vue-glide-slide v-for="image in product.images" :key="image.id">
      <img :src="image.formats.medium.url" alt="" class="rounded-lg">
    </vue-glide-slide>
    <template slot="control">
      <div class="relative w-full pt-2 text-center">
        <div class="inline-block px-3 py-1 bg-white rounded-full">
          <button
            v-for="(item, index) in product.images"
            :key="index"
            class="w-2 h-2 ml-px mr-1 bg-gray-400 rounded-full"
            :class="{ 'bg-begonia-primary-orange': index === activeSlide }"
            @click="productActive = index"
          />
        </div>
      </div>
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
      default () {
        return {
          800: {
            perView: 1
          }
        }
      }
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
  data () {
    return {
      activeSlide: -1
    }
  }
})
</script>
