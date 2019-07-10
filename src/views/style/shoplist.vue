<template>
  <div class="swiper-container shoplist">
    <!-- {{myclass}} -->
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
export default {
  props: ['preview', 'myclass'],

  mounted () {
    console.log('数据插入插槽了')
    /* eslint-disable no-new */
    new Swiper('.' + this.myclass, {
      // direction: 'vertical',
      slidesPerView: 2.4, // 根据需求动态展示多个slide
      spaceBetween: 30,
      freeMode: true
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
</style>
