<template>
  <div>
    <div
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="isDisabled"
      infinite-scroll-immediate-check="false"
      class="box"
    >
      <div v-for="data in productlist" :key="data.goodsId" class="product">
        <div class="imgbox" @click="handleClick(data.goodsId)">
          <img :src="'https://image3.ichuanyi.cn/'+data.image.image">
        </div>
        <div class="infobox">
          <p class="hot" v-if="data.badges.length">爆款</p>
          <p class="goodsname">{{data.goodsName}}</p>
          <span v-if="data.isCombineColors" class="colors">多色可选</span>
          <span v-if="!data.isCombineColors" class="one-color">{{data.colors[0].color}}</span>
          <p class="price">￥{{data.price}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      current: 1,
      productlist: [],
      isDisabled: false
    }
  },
  mounted () {
    axios({
      url: `/icym.php?method=icy.getGoodsList&appId=4&page=1&pageSize=5&sortType=0`
    }).then(res => {
      this.productlist = res.data.data.list
    })
  },
  methods: {
    loadMore () {
      this.isDisabled = true
      this.current++
      axios({
        url: `/icym.php?method=icy.getGoodsList&appId=4&page=${
          this.current
        }&pageSize=5&sortType=0`
      }).then(res => {
        this.productlist = [...this.productlist, ...res.data.data.list]
        this.isDisabled = false
      })
    },
    handleClick (id) {
      this.$router.push(`/detail/${id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  overflow: hidden;
}
.product:nth-of-type(odd) {
  float: left;
}
.product:nth-of-type(even) {
  float: right;
}
.product {
  width: 49%;
  height: 374px;
  //float: left;
  .imgbox {
    height: 245px;
    overflow: hidden;
    margin-bottom: 9px;
    img {
      width: 185px;
    }
  }
  .infobox{
    padding-left: 10px;
  }
  .hot {
    width: 30px;
    height: 15px;
    line-height: 15px;
    background-color: #ff763e;
    font-size: 10px;
    color: #fff;
    text-align: center;
    margin-bottom: 8px;
  }
  .goodsname {
    color: #333;
    margin: 0 0 8px 0;
  }
  .colors {
    font-size: 12px;
    display: inline-block;
    width: 48px;
    height: 15px;
    line-height: 15px;
    border: 1px solid #ccc;
    margin-bottom: 9px;
    padding: 0 5px;
  }
  .one-color {
    font-size: 12px;
    display: inline-block;
    height: 15px;
    line-height: 15px;
    margin-bottom: 6px;
    background: #efefef;
    padding: 0 5px;
  }
  .price {
    color: #333;
    font-size: 15px;
    margin: 0;
  }
}
</style>
