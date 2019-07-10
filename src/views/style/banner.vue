<template>
  <div class="swiper-container banner">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from "swiper"; // swiper .js
import "swiper/dist/css/swiper.css"; // swiper.css
export default {
  mounted() {
    /* eslint-disable no-new */
    new Swiper(".banner", {
      pagination: {
        el: ".swiper-pagination"
      },
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.swiper-wrapper {
  img {
    width: 100%;
  }
}
</style>
