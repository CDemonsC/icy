<template>
    <div>
      <Waterfall v-infinite-scroll="loadmore" infinite-scroll-immediate-check="false" infinite-scroll-disabled="isdisable">
        <WaterfallItem class="waterfall-box" v-for="(data) in newslist" :key="data.collocationId" tag="li">
          <div class="jump" @click="newestjump(data.collocationId)">
            <img :src="`https://image3.ichuanyi.cn/${data.image.image}`">
            <!--                                                              -->
            <div class="information" :class="data.collocationId?'':'hide'">
              <div class="image">
                <img :src="`https://image3.ichuanyi.cn/${data.avatar}`" alt="" class="head">
                <!-- <img :src="`https://image3.ichuanyi.cn/${data.identityIcon.image}`" alt="" class="lable"> -->
                <!-- {{data.identityIcon.image}} -->
              </div>
              <p class="occupation">{{data.username}}<br><span>{{data.introduce}}</span></p>
            </div>
          </div>
        </WaterfallItem>
      </Waterfall>
    </div>
</template>

<script>
import axios from 'axios'
import { Waterfall, WaterfallItem } from 'vue2-waterfall'

export default {

  data () {
    return {
      newslist: [],
      isdisable: false,
      courent: 1
    }
  },
  components: {
    Waterfall,
    WaterfallItem
  },
  methods: {
    loadmore () {
      this.courent++
      this.isdisable = true // 禁用无限滚动
      console.log('到底了,ajax请求数据')
      // console.log(document.querySelector('.lazyload').offsetHeight)
      axios({
        url: `icym.php?method=icy.getCollocationList&appId=4&page=${this.courent}&pageSize=10&categoryId=0`
      }).then(res => {
        this.newslist = [...this.newslist, ...res.data.data.list]
        this.isdisable = false // 开启无限滚动
      })
    },
    newestjump (number) {
      if (number === undefined) {
        return
      }
      this.$router.push(`/detail/${number}`)
    }
  },
  mounted () {
    axios({
      url: `icym.php?method=icy.getCollocationList&appId=4&page=0&pageSize=10&categoryId=0`
    }).then(res => {
      this.newslist = res.data.data.list
    })
  }

}
</script>

<style lang="scss" scoped>
  .hide{
    display: none;
  }
    div{
      width: 100%;
      margin: 0;
      padding: 0;
      div{
        margin: 0;
        padding: 0;
        margin-bottom: 50px;
        div{
        padding: 5px;
        margin: 0;
        padding: 0;
          img{
            width: 95%;
          }
          .information{
            .image{
              position: relative;
              img{
                width: 35px;
                height: 35px;
                border-radius: 50%;
                border:1px solid #f60;
                border-radius: 50%;
                position: absolute;
                left: 20px;
                top: -30px;
              }
            }
            p{
              margin-top: 5px;
              margin-bottom: 15px;
              font-size: 10px;
              float: right;
              span{
                color: #ccc;
              }
            }
          }
        }
      }
    }
</style>
