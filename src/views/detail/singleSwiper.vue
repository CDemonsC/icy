<template>
  <div class="swiper-container singleswiper">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper' // swiper .js
import 'swiper/dist/css/swiper.css' // swiper.css
export default {
  mounted () {
    /* eslint-disable no-new */
    new Swiper('.singleswiper', {
      slidesPerView: 3,
      spaceBetween: 0,
      freeMode: true
    })
  }
}
</script>

<style lang="scss" scoped>
.singleswiper {
  padding-left: 16px;
}
</style>
