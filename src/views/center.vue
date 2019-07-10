<template>
  <div id="center">
    <search></search>

    <div class="my">
      <div class="head-portrait">
        <h2></h2>
        <p>fc8a18ee552297ead656</p>
      </div>
      <div class="vip">
        <p>当前消费0元，再消费1000元可称为白棉会员，获取9.8折扣专属权益</p>
        <a href="#">查看会员细则></a>
      </div>
    </div>
    <div class="order">
      <div class="title">
        <div class="left">我的订单</div>
        <div class="right">查看全部</div>
      </div>
      <ul>
        <li v-for="(data,index) in orderlist" :key="index">
          <div></div>
          <p>{{data}}</p>
        </li>
      </ul>
    </div>
    <div class="other">
      <ul>
        <li v-for="(other,index) in otherlist" :key="index">
          {{other}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import search from './style/barsearch'

export default {
  data () {
    return {
      orderlist: ['待付款', '待发货', '待收货', '退款/退货'],
      otherlist: ['我的优惠券', '我喜欢的', '编辑收货地址', '编辑个人资料', '品牌故事', '客服电话：400-060-6989']
    }
  },
  components: {
    search
  }
}
</script>

<style lang="scss">
  div#center{
    background: #ccc;
    .search{
      position: fixed;
      top: 0;
    }
  }
  .my{
    background: #fff;
    margin-top: 50px;
    margin-bottom: 10px;
    padding: 10px;
    width: 100%;
    .head-portrait{
      width: 90%;
      margin: 0 auto;
      border-bottom: 2px solid #ccc;
      h2{
        width: 100px;
        height: 100px;
        margin: 0 auto;
        border-radius: 50%;
        background-image: url('http://img1.imgtn.bdimg.com/it/u=48233734,421872981&fm=26&gp=0.jpg');
        background-size:auto 100%;
        background-repeat: no-repeat;
        background-position: center;
      }
      p{
        text-align: center;
        padding-top: 20px;
      }
    }
    .vip{
      width: 90%;
      margin: 0 auto;
      padding-top: 10px;
      a{
        width: 100%;
        color: #858585;
        text-align: center;
        display: block;
        padding-top: 12px;
      }
    }
  }
  .order{
    background: #ffffff;
    .title{
      border-bottom: 1px solid #ccc;
      padding: 20px;
      height:20px;
      line-height: 20px;
      font-size: 15px;
      .left{
        float: left;
      }
      .right{
        float: right;
      }
    }
    ul{
      padding: 10px;
      width: 100%;
      list-style: none;
      display: flex;
      li{
        float: left;
        flex: 1;
        text-align:center;
        div{
          width: 50px;
          height: 50px;
          background: #ccc;
          margin: 0 auto;
        }
        p{
          padding-top: 10px;
          padding-bottom: 10px;
        }
      }
    }
  }
  .other{
      width: 100%;
    ul{
      width: 100%;
      margin-bottom: 60px;
      margin-top: 10px;
      li{
        background: #fff;
        font-size: 15px;
        padding: 32px;
      }
      li:nth-of-type(2){
        margin-bottom: 10px;
      }
      li:nth-of-type(4){
        margin-bottom: 10px;
      }
    }
  }

</style>
