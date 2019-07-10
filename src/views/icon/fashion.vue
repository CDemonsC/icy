<template>
  <div>

    <Waterfall v-infinite-scroll="loadmore" infinite-scroll-immediate-check="false" infinite-scroll-disabled="canload">
        <WaterfallItem class="waterfall-box" v-for="data in fashionlist" :key="data.collocationId">
              <div @click="fashionjump(data.collocationId)">
                <img :src="`https://image3.ichuanyi.cn/${data.image.image}`">
                <div>
                  <span><img :src="`https://image3.ichuanyi.cn/${data.avatar}`"></span>
                  <img class="small" :src="`https://image3.ichuanyi.cn/${data.identityIcon.image}`">
                  <p>{{data.username}}<span>{{data.collectCount}}</span></p>
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
      fashionlist: [],
      num: 1,
      canload: false
    }
  },
  components: {
    Waterfall,
    WaterfallItem
  },
  methods: {
    loadmore () {
      this.num++
      this.canload = true
      console.log('222')
      axios({
        url: `icym.php?method=icy.getCollocationList&appId=4&page=${this.num}&pageSize=10&categoryId=1483760162`

      }).then(res => {
        this.fashionlist = [...this.fashionlist, ...res.data.data.list]
        this.canload = false
      })
    },
    fashionjump (info) {
      this.$router.push(`/detail/${info}`)
    }
  },
  mounted () {
    axios({
      url: 'icym.php?method=icy.getCollocationList&appId=4&page=1&pageSize=10&categoryId=1483760162'
    }).then(res => {
      this.fashionlist = res.data.data.list
      console.log('https://image3.ichuanyi.cn/' + this.fashionlist[0].image.image)
    })
  }
}
</script>

<style lang="scss" scoped>
    *{
        margin: 0;
        padding: 0;
    }

    div{
      width: 100%;
      margin: 0;
      padding: 0;
      div{
        margin: 0;
        padding: 0;
          div{
          padding: 5px;
          margin: 0;
          padding: 0;
          padding-bottom: 15px;
            img{
              width: 95%;
            }
            div{
                position: relative;
                margin: 0;
              span{
                img{
                  width: 40px;
                  height: 40px;
                  border-radius: 50%;
                  position: absolute;
                  top: -20px;
                  border: 3px solid #fff;
                  left: 5px;
                }
              }
              img.small{
                width: 20px;
                height: 20px;
                position: absolute;
                top: 10px;
                left: 30px;
              }
              p{
                margin-left: 60px;
                font-size: 8px;
                span{
                  color: #ccc;
                }
              }
            }
          }
      }
    }
</style>
