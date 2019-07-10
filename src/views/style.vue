<template>
  <div class="container">
    <searchbar :class="isFixed?'fixed':''"></searchbar>
    <banner v-if="datalist.length">
      <div class="swiper-slide" v-for="data in datalist" :key="data.bannerId">
        <img :src="`https://image3.ichuanyi.cn/${data.image}`">
      </div>
    </banner>

    <navbar>
      <div v-for="nav in navlist" :key="nav.contentId">
        <img class="navimg" :src="`https://image3.ichuanyi.cn/${nav.image.image}`">
      </div>
      <a href class="first"></a>
      <a href class="second"></a>
      <div class="third" @click="handleThirdTo"></div>
      <a href class="fourth"></a>
    </navbar>

    <h2>新品入荷</h2>

    <shoplist class="new" myclass="new" v-if="shoplist">
      <div
        class="swiper-slide"
        v-for="list in shoplist"
        :key="list.goodsId"
        myclass="new"
        style="width:300px"
      >
        <div>
          <img
            :src="`https://image3.ichuanyi.cn/${list.image.image}`"
            style="width:100%"
            @click="handleClick(list.goodsId)"
          >
          <p>{{list.name}}</p>
          <p>{{'￥'+ list.price}}</p>
        </div>
      </div>
    </shoplist>

    <div v-for="list in star" :key="list.contentId">
      <img :src="`https://image3.ichuanyi.cn/${list.image.image}`" style="width:100%">
    </div>

    <h2>Best sellers</h2>


    <shoplist class="bestsellers" myclass="bestsellers" v-if="shoplist">
      <div
        class="swiper-slide"
        v-for="list in bestsellers"
        :key="list.goodsId"
        myclass="bestsellers"
        style="width:300px"
      >
        <div>
          <img
            :src="`https://image3.ichuanyi.cn/${list.image.image}`"
            style="width:100%"
            @click="handleClick(list.goodsId)"
          >
          <p>{{list.name}}</p>
          <p>{{'￥'+ list.price}}</p>
        </div>
      </div>
    </shoplist>

    <h2>NEW LOOK</h2>
    <div v-for="list in newlooklist" :key="list.contentId">
      <img :src="`https://image3.ichuanyi.cn/${list.banner.image}`" style="width:100%">
      <!-- <div v-for="img in list.goods">{{img.image.image}}</div> -->
      <shoplist class="newlook" myclass="newlook" v-if="newlooklist">
        <div
          class="swiper-slide"
          v-for="img in list.goods"
          :key="img.goodsId"
          myclass="newlooklist"
        >
          <div>
            <img
              :src="`https://image3.ichuanyi.cn/${img.image.image}`"
              style="width=100%"
              @click="handleClick(list.goodsId)"
            >
            <p>{{img.name}}</p>
            <p>{{'￥'+ img.price}}</p>
          </div>
        </div>
      </shoplist>
    </div>

    <!-- <div v-for="list in shirts" :key="list.contentId">
      <img :src="`https://image3.ichuanyi.cn/${list.image.image}`" style="width:100%">
    </div>-->

    <h2>生活秀场</h2>
    <div v-for="list in lifelist" :key="list.contentId">
      <img :src="`https://image3.ichuanyi.cn/${list.banner.image}`" style="width:100%">

      <shoplist class="lifelist" myclass="lifelist" v-if="lifelist">
        <div class="swiper-slide" v-for="img in list.goods" :key="img.goodsId" myclass="lifelist">
          <div>
            <img
              :src="`https://image3.ichuanyi.cn/${img.image.image}`"
              style="width=100%"
              @click="handleClick(list.goodsId)"
            >
            <p>{{img.name}}</p>
            <p>{{'￥'+ img.price}}</p>
          </div>
        </div>
      </shoplist>
    </div>

    <h2>合作设计师</h2>
    <ul>
      <li v-for="designer in designers" :key="designer.username" style="margin-bottom:50px">
        <img :src="`https://image3.ichuanyi.cn/${designer.avatar}`" style="width:80px;float:left">

        <div class="username" style="margin-top:10px">{{designer.username}}</div>
        <div class="nation">{{designer.nationality}}</div>
        <div class="coBranding">{{designer.coBranding}}</div>
        <shoplist class="goodsImages" myclass="goodsImages" v-if="designers">
          <div class="swiper-slide" v-for="img in designer.goodsImages" :key="img.goodsId">
            <div>
              <img
                :src="`https://image3.ichuanyi.cn/${img.image.image}`"
                style="width=100%"
                @click="handleClick(img.goodsId)"
              >
              <p>{{img.name}}</p>
              <p>{{'￥'+ img.price}}</p>
            </div>
          </div>
        </shoplist>
      </li>
    </ul>

    <router-view></router-view>
  </div>
</template>

<script>
import searchbar from './style/barsearch'
import shoplist from './style/shoplist'
import navbar from './style/nav'
import banner from './style/banner'
import axios from 'axios'
export default {
  data () {
    return {
      datalist: [],
      isFixed: false,
      navlist: [],
      shoplist: null,
      bestsellers: null,
      newlooklist: null,
      star: null,
      // shirts: null,
      lifelist: null,
      designers: null
    }
  },

  mounted () {
    axios({
      url: 'icym.php?method=icy.getHome&appId=4&page=1&pageSize=20'
    }).then(res => {
      console.log(res.data.data.list)
      var a = res.data.data.list
      console.log(a[0].list)
      this.datalist = a[0].list
      this.navlist = a[1].list
      this.shoplist = a[2].list
      this.star = a[3].list
      this.bestsellers = a[4].list
      this.newlooklist = a[5].list
      // this.shirts = a[4].list
      this.lifelist = a[6].list
      this.designers = a[7].list
      console.log(a[1].list)
      console.log(a[2].list)
      console.log(a[3].list)
      console.log(a[4].list)
      console.log(a[5].list)
      // console.log(a[1].list)
      // console.log(this.datalist[0].image)
    })((window.onscroll = this.handleScroll))
  },

  components: {
    searchbar,
    banner,
    navbar,
    shoplist
  },
  methods: {
    handleScroll () {
      if (
        (document.documentElement.scrollTop || document.body.scrollTop) >= 300
      ) {
        // console.log('吸顶了')
        this.isFixed = true
      } else {
        // console.log('不吸顶')
        this.isFixed = false
      }
    },
    handleThirdTo () {
      this.$router.push('/designer_list')
    },
    handleClick (id) {
      this.$router.push(`/detail/${id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
li {
  list-style: none;
}
.fixed {
  width: 100%;
  height: 50px;
  display: flex;
  color: #999;
  border-bottom: 1px solid #eaeaea;
  z-index: 100;
  background-color: white;
  position: fixed;
  top: 0;
}
.navimg {
  width: 100%;
}
.container {
  margin-bottom: 50px;
}
.first {
  display: block;
  width: 80px;
  height: 70px;
  position: absolute;
  top: 440px;
  left: 10px;
}
.second {
  display: block;
  width: 80px;
  height: 70px;
  position: absolute;
  top: 440px;
  left: 120px;
}
.third {
  display: block;
  width: 80px;
  height: 70px;
  position: absolute;
  top: 440px;
  left: 210px;
}
.fourth {
  display: block;
  width: 80px;
  height: 70px;
  position: absolute;
  top: 440px;
  left: 320px;
}
p {
  text-align: center;
}
</style>
