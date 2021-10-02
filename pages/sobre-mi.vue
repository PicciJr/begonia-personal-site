<!-- About me page -->
<template>
  <div class="flex flex-col items-center justify-center max-w-md px-8 mx-auto text-md md:text-lg text-begonia-sec-gray">
    <!-- Profile image -->
    <img
      src="https://cdn.domestika.org/c_fill,dpr_auto,f_auto,h_256,pg_1,t_base_params,w_256/v1574944295/avatars/001/463/838/1463838-original.jpg?1574944295"
      alt=""
      class="w-64 h-64 mt-16 rounded-full shadow-lg"
    >
    <!-- Biography text -->
    <p class="my-8 text-left">
      It is a long established fact that a reader will be distracted by the
      readable content of a page when looking at its layout. The point of using
      Lorem Ipsum is that it has a more-or-less normal distribution of letters,
      as opposed to using 'Content here, content here', making it look like
      readable English. Many desktop publishing packages and web page editors
      now use Lorem Ipsum as their default model text, and a search for 'lorem
      ipsum' will uncover many web sites still in their infancy. Various
      versions have evolved over the years, sometimes by accident, sometimes on
      purpose (injected humour and the like).
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'default'
})
</script>
