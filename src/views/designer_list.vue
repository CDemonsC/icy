<template>
  <div>
    <div class="titlebar" :class="isFixed?'fixed':''">
      <i class="iconfont icon-fanhui-" @click="handleClick()"></i>
      <p>设计师列表</p>
    </div>
    <div>
      <ul class="infinite-list" v-infinite-scroll="loadmore" infinite-scroll-immediate-check="false" infinite-scroll-disabled="isdisable">
        <li
          v-for="data in datalist"
          :key="data.username"
          style="margin-bottom:20px"
          class="infinite-list-item"
        >
          <img
            :src="`https://image3.ichuanyi.cn/${data.avatar}`"
            style="width:20%;border-radius:50%"
          >
          <p>{{data.username}}</p>
          <p>{{data.nationality}}</p>
          <p>{{data.coBranding}}</p>
          <p>{{data.designStyle}}</p>
          <swiper class="designergoods" preview="1.3">
            <div class="swiper-slide" v-for="img in data.goodsImages" :key="img.link">
              <!-- {{data.goodsImages}} -->
              <img :src="`https://image3.ichuanyi.cn/${img.image}`" style="width:100%" @click="handleClickTo(img.link.slice(42,59))">
            </div>
          </swiper>
        </li>
      </ul>
      <div style="margin-bottom:50px;">加载中...</div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import swiper from "./designerlist/swiper";
export default {
  data() {
    return {
      datalist: [],
      current: 1,
      isFixed: false,
      isShow: true
    }
  },
  methods: {
    handleClick () {
      this.$router.push('/style')
    },
    handleClickTo (id) {
      this.$router.push(`/detail/${id}`)
    },
    loadmore () {
      this.current++
      this.isdisable = true // 禁用无限滚动
      // console.log('到底了,ajax请求数据')
      // console.log(document.querySelector('.lazyload').offsetHeight)
      this.isShow = true
      axios({
        url: `m.php?method=icy.getDesignerList&appId=4&page=${this.current}&pageSize=15`
      }).then(res => {
        this.datalist = [...this.datalist, ...res.data.data.list]
        this.isdisable = false // 开启无限滚动
      })
    },
    handleScroll () {
      if (
        (document.documentElement.scrollTop || document.body.scrollTop) >= 100
      ) {
        // console.log('吸顶了')
        this.isFixed = true
      } else {
        // console.log('不吸顶')
        this.isFixed = false
      }
    }
  },

  components: {
    swiper
  },
  mounted() {
    axios({
      url: "m.php?method=icy.getDesignerList&appId=4&page=1&pageSize=15"
    }).then(res => {
      console.log(res.data.data.list)
      this.datalist = res.data.data.list
    })
    window.onscroll = this.handleScroll
  }
};
</script>

<style lang="scss" scoped>
.titlebar {
  width: 100%;
  height: 50px;
  display: flex;
  color: #999;
  border-bottom: 1px solid #eaeaea;
  z-index: 100;
  background-color: white;
  p {
    font-size: 20px;
    margin: 10px auto;
    transform: translateX(-20px);
  }
}
.icon-fanhui- {
  font-size: 26px;
  line-height: 50px;
  padding-left: 10px;
}
.fixed{
    position: fixed;
  top: 0;
  z-index: 100;
}
</style>
