<template>
  <div class="swiper-container iconbanner">
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
    new Swiper('.iconbanner')
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
  overflow: visible;
  margin-bottom: 70px;
}
.swiper-pagination {
  position: absolute;
  bottom: -37px;
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
  left: inherit;
}
</style>
