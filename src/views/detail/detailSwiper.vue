<template>
  <div class="swiper-container banner" id="banner">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper' // swiper .js
import 'swiper/dist/css/swiper.css' // swiper.css
export default {
  // mounted() {},
  mounted () {
    /* eslint-disable no-new */
    new Swiper('.banner', {
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction'
      },
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      controller: {
        control: [],
        inverse: true,
        by: 'slide'
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.swiper-wrapper {
  img {
    width: 100%;
  }
}
#banner {
  position: relative;
  height: 395px;
}
.swiper-pagination {
  position: relative;
  bottom: 50px;
  background: #fff;
  border: 1px solid #d4d4d4;
  color: #333;
  font-size: 12px;
  letter-spacing: 3px;
  min-width: 42px;
  padding: 2px 6px;
  right: 25px;
  text-align: center;
  width: 50px;
  z-index: 100;
  left: 75%;
}
</style>
