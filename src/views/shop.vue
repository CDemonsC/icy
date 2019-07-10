<template>
  <div>
    <searchbar></searchbar>
    <div class="banner" v-if="banners[0]">
      <img :src="`https://image3.ichuanyi.cn/${banners[0].image.image}`">
      <a href="javascript:;"></a>
      <a href="javascript:;"></a>
      <a href="javascript:;"></a>
      <a href="javascript:;"></a>
      <a href="javascript:;"></a>
      <a href="javascript:;"></a>
      <a href="javascript:;"></a>
      <a href="javascript:;"></a>
      <a href="javascript:;"></a>
      <a href="javascript:;"></a>
      <a href="javascript:;"></a>
      <a href="javascript:;"></a>
    </div>
    <div class="allgoods">
      <div class="title">全部单品</div>
      <shopswiper
        swipername="sizes"
        slidesPerView="7"
        :spaceBetween="15"
        :key="sizes.length?'sizes-1':'sizes-2'"
      >
        <div class="swiper-slide" v-for="data in sizes" :key="data.value">
          <el-row>
            <el-button size="mini" round>{{data.name}}</el-button>
          </el-row>
        </div>
      </shopswiper>
      <shopswiper
        swipername="categories"
        slidesPerView="5"
        :spaceBetween="15"
        :key="categories.length?'categories-1':'categories-2'"
      >
        <div class="swiper-slide" v-for="data in categories" :key="data.value">{{data.name}}</div>
      </shopswiper>
      <shopswiper
        swipername="elements"
        slidesPerView="6"
        :spaceBetween="15"
        :key="elements.length?'elements-1':'elements-2'"
      >
        <div class="swiper-slide" v-for="data in elements" :key="data.value">{{data.name}}</div>
      </shopswiper>
      <shopswiper
        swipername="upNew"
        slidesPerView="4"
        :spaceBetween="15"
        :key="upNew.length?'upNew-1':'upNew-2'"
      >
        <div class="swiper-slide" v-for="data in upNew" :key="data.value">{{data.name}}</div>
      </shopswiper>
      <shopswiper
        swipername="sales"
        slidesPerView="5"
        :spaceBetween="15"
        :key="sales.length?'sales-1':'sales-2'"
      >
        <div class="swiper-slide" v-for="data in sales" :key="data.value">{{data.name}}</div>
      </shopswiper>
      <shopswiper
        swipername="prices"
        slidesPerView="4"
        :spaceBetween="15"
        :key="prices.length?'prices-1':'prices-2'"
      >
        <div class="swiper-slide" v-for="data in prices" :key="data.value">{{data.name}}</div>
      </shopswiper>
    </div>
    <div class="product-list">
      <ul class="nav">
        <router-link to="/shop/ShopTotal" tag="li" activeClass="active">综合排序</router-link>
        <router-link to="/shop/ShopSale" tag="li" activeClass="active">销量排序</router-link>
        <router-link to="/shop/ShopNew" tag="li" activeClass="active">上新排序</router-link>
        <router-link to="/shop/ShopPrice" tag="li" activeClass="active">价格排序</router-link>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import searchbar from '../components/searchbar'
import shopswiper from './shop/ShopSwiper'

export default {
  data () {
    return {
      banners: [],
      categories: [],
      elements: [],
      prices: [],
      sales: [],
      sizes: [],
      upNew: []
    }
  },
  components: {
    searchbar,
    shopswiper
  },
  mounted () {
    axios({
      url: '/icym.php?method=icy.getGoodsCategoryList&appId=4'
    }).then(res => {
      this.banners = res.data.data.banners
      this.categories = res.data.data.filters.categories
      this.elements = res.data.data.filters.elements
      this.prices = res.data.data.filters.prices
      this.sales = res.data.data.filters.sales
      this.upNew = res.data.data.filters.upNew
      this.sizes = res.data.data.filters.sizes
    })
  }

}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
body {
  margin: 0;
}
.banner {
  position: relative;
  img {
    width: 100%;
  }
  a {
    position: absolute;
    display: block;
    //background: rgba($color:#f00, $alpha: .5);
    width: 70px;
    height: 72px;
  }
  a:nth-of-type(1) {
    top: 12px;
    left: 7px;
  }
  a:nth-of-type(2) {
    top: 12px;
    left: 99px;
  }
  a:nth-of-type(3) {
    top: 12px;
    left: 190px;
  }
  a:nth-of-type(4) {
    top: 12px;
    left: 283px;
  }
  a:nth-of-type(5) {
    top: 93px;
    left: 7px;
  }
  a:nth-of-type(6) {
    top: 93px;
    left: 99px;
  }
  a:nth-of-type(7) {
    top: 93px;
    left: 190px;
  }
  a:nth-of-type(8) {
    top: 93px;
    left: 283px;
  }
  a:nth-of-type(9) {
    top: 172px;
    left: 7px;
  }
  a:nth-of-type(10) {
    top: 172px;
    left: 99px;
  }
  a:nth-of-type(11) {
    top: 172px;
    left: 190px;
  }
  a:nth-of-type(12) {
    top: 172px;
    left: 283px;
  }
}
 .active{
      color: #ff966b
  }
.allgoods {
  height: 325px;
  .title {
    color: #333;
    font-size: 17px;
    font-weight: bolder;
    line-height: 45px;
    border-bottom: 1px solid #eaeaea;
    padding-left: 10px;
  }
  .swiper-slide {
    height: 45px;
    line-height: 45px;
    text-align: left;
    color: #474747;
    font-size: 12px;
  }
}
.product-list {

  .nav {
    height: 45px;
    line-height: 45px;
    padding: 0 10px;
    list-style: none;
    color: #474747;
    font-size: 12px;
    display: flex;
    li {
      flex: 1;
      text-align: center;

    }
  }

}
</style>
