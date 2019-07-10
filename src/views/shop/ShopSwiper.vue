<template>
  <div :class="'swiper-container '+swipername">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'

export default {
  mounted () {
    /* eslint-disable no-new */
    new Swiper('.' + this.swipername, {
      slidesPerView: this.slidesPerView,
      spaceBetween: this.spaceBetween,
      freeMode: true
    })
  },
  props: ['slidesPerView', 'spaceBetween', 'swipername']
}
</script>

<style lang="scss" scoped>
    .swiper-wrapper{
         border-bottom: 1px solid #eaeaea;
         padding: 0 10px
    }
</style>
