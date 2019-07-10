<template>
  <div>
    <detailswiper :key="info.photoAlbum.length?'photoAlbum_1':'photoAlbum_2'">
      <div class="swiper-slide" v-for="(data,myindex) in info.photoAlbum" :key="myindex">
        <div class="bannerbox">
          <img :src="`https://image3.ichuanyi.cn/${data.image}`">
        </div>
      </div>
    </detailswiper>

    <div class="infos" v-if="info">
      <p class="title">
        {{info.shareInfo.title}}
        <span>已售{{info.soldInOuter}}件</span>
      </p>
      <span>{{info.shareInfo.content}}</span>
      <h3>{{info.showPrice}}</h3>
      <p>颜色</p>
      <span
        v-for="(data,index) in info.colors"
        :key="index"
        :class="index === current?'activ':'colors'"
        @click="handleClick(index)"
      >{{data}}</span>
      <img src="../assets/img/163776a98ec329fe1e3f7a64669b377ad1599d33_11570.png">
    </div>
    <div class="line"></div>

    <div class="iconshow" v-if="info.icyCollocations.length">
      <div class="title">
        <p>
          <span></span>
          ICON示范
        </p>
      </div>
      <iconswiper
        class="out"
      >
        <div v-for="data in info.icyCollocations" :key="data.collocationId" class="swiper-slide">
          <div class="icon-item">
            <div class="photos">
              <div v-for="imgdata in data.images" :key="imgdata.image" class="imgbox">
                <img :src="`https://image3.ichuanyi.cn/${imgdata.image}`">
              </div>
            </div>
            <p class="username">{{data.username}}</p>
            <div class="iconname">
              <img :src="`https://image3.ichuanyi.cn/${data.identityIcon.image}`">
              <span v-if="data.introduce">{{data.introduce}}</span>
              <span v-if="data.height">{{data.height}}cm</span>
              <span v-if="data.weight">{{data.weight}}kg</span>
              <span v-if="data.size">试穿尺码{{data.size}}</span>
              <a href="javascript:;">查看详情 ></a>
            </div>
          </div>
        </div>
      </iconswiper>
    </div>
    <div class="line"></div>

    <div class="singlegoods" v-if="info.relatedGoods.length">
      <div class="title">
        <p>
          <span></span>
          搭配单品
        </p>
      </div>
      <singleswiper >
        <div
          class="swiper-slide singgoods-box"
          v-for="data in info.relatedGoods"
          :key="data.image.image"
        >
          <div class="imgbox" @click="singlegoodsClick()">
            <img :src="`https://image3.ichuanyi.cn/${data.image.image}`">
          </div>
          <p>{{data.name}}</p>
        </div>
      </singleswiper>
    </div>
    <div class="line"></div>

    <div class="comment" v-if="comments.commentList.length">
      <div class="title">
        <p>
          <span></span>
          商品评论
        </p>
      </div>
      <ul>
        <li class="comment-item" v-for="data in comments.commentList" :key="data.userId">
          <div class="photo">
            <img :src="`https://image3.ichuanyi.cn/${data.avatar}`">
          </div>

          <div class="comment-info">
            <p class="name">{{data.username}}</p>
            <p>
              <span v-for="propertiesdata in data.properties" :key="propertiesdata.propertyName">
                {{propertiesdata.propertyName}}
                {{propertiesdata.value}}
              </span>
            </p>
            <p class="comment-content">{{data.comment}}</p>
            <div v-if="data.images.length">
              <div class="imgbox" v-for="imgdata in data.images" :key="imgdata.image">
                <img :src="`https://image3.ichuanyi.cn/${imgdata.image}`">
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div class="bottom">查看全部评论 >></div>
    </div>
    <div class="line"></div>

    <div class="xiangqing">
      <div class="title">
        <p>
          <span></span>
          图文详情
        </p>
      </div>
      <div class="designer-wrap">
        <div class="mask"></div>
        <div class="box">
          <div class="left">
            <p class="user-name text-overflow">{{extra.ownerInfo.username}}</p>
            <p class="country">
              <span></span>
              <span class="address">{{extra.ownerInfo.nationality}}</span>
              <span class="nationality">{{extra.ownerInfo.coBranding}}</span>
            </p>
            <p class="user-coBranding">{{extra.ownerInfo.designStyle}}</p>
            <p class="more-btn-icon">
              了解更多
              <span></span>
            </p>
          </div>
          <div class="right">
            <img :src="`https://image3.ichuanyi.cn/${extra.ownerInfo.avatar}`">
          </div>
        </div>
      </div>
      <div class="video">
        <span></span>
        <img :src="extra.video.image">
      </div>
      <div class="imgs" v-for="data in extra.teletext" :key="data.image">
        <img :src="`https://image3.ichuanyi.cn/${data.image}`">
      </div>
    </div>
    <div class="size">
      <div class="title">
        <p>
          <span></span>
          材质尺码
        </p>
      </div>
      <div class="imgbox" v-for="data in extra.sizeImages" :key="data.image">
        <img :src="`https://image3.ichuanyi.cn/${data.image}`">
      </div>
      <div class="line"></div>
      <div class="authImage">
        <img :src="`https://image3.ichuanyi.cn/${extra.authImage.image}`">
      </div>
    </div>

    <div class="toolbar-container">
      <div class="chat-btn">
        <i></i>
        <p>联系客服</p>
      </div>
      <div class="like-btn">
        <i></i>
        <p>喜欢</p>
      </div>
      <div class="btn-car">加入购物车</div>
      <div class="btn-buy">立即购买</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import detailswiper from './detail/detailSwiper'
import iconswiper from './detail/iconSwiper'
import singleswiper from './detail/singleSwiper'

export default {
  data () {
    return {
      info: {},
      comments: {},
      extra: {},
      current: 0,
      myindex: 2
    }
  },
  components: {
    detailswiper,
    iconswiper,
    singleswiper
  },
  methods: {
    handleClick (i) {
      this.current = i
    }
  },
  mounted () {
    axios({
      url: `/icym.php?method=goods.getInfo&appId=4&goodsId=${
        this.$route.params.id
      }`
    }).then(res => {
      this.info = res.data.data
    })
    axios({
      url: `/icym.php?method=goods.getComments&appId=4&goodsId=${
        this.$route.params.id
      }`
    }).then(res => {
      this.comments = res.data.data
    })
    axios({
      url: `/icym.php?method=goods.getExtra&appId=4&goodsId=${
        this.$route.params.id
      }`
    }).then(res => {
      this.extra = res.data.data
    })
  }
}
</script>

<style lang="scss" scoped>
.line {
  background: #f5f5f5;
  height: 10px;
  width: 100%;
}
.bannerbox {
  height: 320px;
  overflow: hidden;
}
.infos {
  padding-left: 16px;
  .title {
    color: #333;
    font-size: 15px;
    line-height: 42px;
    span {
      color: #999;
      font-size: 12px;
      line-height: 17px;
      position: absolute;
      right: 15px;
      text-align: center;
      top: 407px;
    }
  }
  span {
    color: #888;
    font-size: 12px;
    line-height: 17px;
  }
  h3 {
    color: #000;
    font-size: 22px;
    line-height: 44px;
  }
  p {
    color: #333;
    font-size: 14px;
  }
  .colors {
    border: 1px solid #f2f2f2;
    float: left;
    margin: 8px 15px 0 0;
    padding: 5px 16px;
  }
  .activ {
    border: 1px solid #f2f2f2;
    float: left;
    margin: 8px 15px 0 0;
    padding: 5px 16px;
    background-image: url("../assets/img/01.png");
    background-repeat: no-repeat;
    background-size: 20%;
    background-position-x: right;
    background-position-y: bottom;
  }
  img {
    margin-top: 30px;
    width: 100%;
    position: relative;
    left: -16px;
  }
}
.iconshow {
  height: 315px;
  .title {
    p {
      border-top: 1px solid #f2f2f2;
      color: #000;
      font-size: 15px;
      font-weight: 700;
      line-height: 18px;
      margin: 0 15px 15px;
      padding-top: 24px;
      height: 18px;
      span {
        background: #000;
        display: inline-block;
        height: 10px;
        margin-right: 5px;
        width: 3px;
      }
    }
  }
  .swiper-slide {
    .icon-item {
      border: 1px solid #f2f2f2;
      box-shadow: 0 0 5px #f2f2f2;
      margin: 0 0 30px 10px;
      overflow: hidden;
      padding-left: 9px;
      padding-top: 10px;
      width: 339px;
      .photos {
        margin-bottom: 20px;
        height: 147px;
        .imgbox {
          width: 100px;
          height: 147px;
          float: left;
          margin-right: 10px;
          img {
            width: 100%;
          }
        }
      }
      .username {
        color: #333;
        font-size: 14px;
        font-weight: 700;
        line-height: 17px;
        margin: 4px 0 4px 0;
      }
      .iconname {
        width: 309px;
        padding-bottom: 10px;
        overflow: hidden;
        img {
          display: inline-block;
          float: left;
          height: 12px;
          margin: 2px 5px 0 0;
          width: 12px;
        }
        span {
          float: left;
          color: #999;
          font-size: 10px;
          line-height: 17px;
          margin-right: 5px;
        }
        a {
          color: #ff9666;
          font-size: 12px;
          line-height: 17px;
          float: right;
          text-decoration: none;
        }
      }
    }
  }
}

.singlegoods {
  height: 238px;
  .title {
    p {
      border-top: 1px solid #f2f2f2;
      color: #000;
      font-size: 15px;
      font-weight: 700;
      line-height: 18px;
      margin: 0 15px 15px;
      padding-top: 24px;
      height: 18px;
      span {
        background: #000;
        display: inline-block;
        height: 10px;
        margin-right: 5px;
        width: 3px;
      }
    }
  }
  .singgoods-box {
    width: 130px;
    height: 157px;
    margin-right: 10px;
    .imgbox {
      height: 130px;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    p {
      color: #333;
      font-size: 12px;
      line-height: 17px;
      margin-top: 10px;
      text-align: center;
    }
  }
}
.comment {
  padding-left: 10px;
  .title {
    p {
      border-top: 1px solid #f2f2f2;
      color: #000;
      font-size: 15px;
      font-weight: 700;
      line-height: 18px;
      margin: 0 15px 15px;
      padding-top: 24px;
      height: 18px;
      span {
        background: #000;
        display: inline-block;
        height: 10px;
        margin-right: 5px;
        width: 3px;
      }
    }
  }
  ul {
    list-style: none;
    li {
      //height: 218px;
      padding-left: 10px;
      border-bottom: 1px solid #f2f2f2;
      padding-top: 25px;
      overflow: hidden;
      .photo {
        border-radius: 50%;
        float: left;
        height: 34px;
        width: 34px;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
      .comment-info {
        float: left;
        margin-left: 12px;
        overflow: hidden;
        padding-bottom: 8px;
        width: 273px;
        p.name {
          color: #333;
          display: inline-block;
          font-size: 13px;
          line-height: 18px;
        }
        p span {
          color: #999;
          font-size: 10px;
          line-height: 14px;
          margin-right: 16px;
        }
        p.comment-content {
          color: #333;
          font-size: 12px;
          margin: 24px 0 12px;
        }
        .imgbox {
          width: 90px;
          height: 90px;
          display: inline-block;
          float: left;
          margin-right: 4px;
          overflow: hidden;
          img {
            width: 100%;
          }
        }
      }
    }
  }
  .bottom {
    color: #333;
    display: block;
    font-size: 13px;
    line-height: 21px;
    padding: 16px 0 24px;
    position: relative;
    text-align: center;
  }
}
.xiangqing {
  img {
    display: block;
  }
  .title {
    p {
      border-top: 1px solid #f2f2f2;
      color: #000;
      font-size: 15px;
      font-weight: 700;
      line-height: 18px;
      margin: 0 15px 15px;
      padding-top: 24px;
      height: 18px;
      span {
        background: #000;
        display: inline-block;
        height: 10px;
        margin-right: 5px;
        width: 3px;
      }
    }
  }
  .designer-wrap {
    height: 250px;
    position: relative;
    width: 100%;
    background: #eee;
    .box {
      color: #333;
      left: 15px;
      position: absolute;
      top: 23px;
      z-index: 12;
      width: 330px;
      height: 228px;
      .left {
        background: #fff;
        font-size: 12px;
        height: 210px;
        line-height: 17px;
        overflow: hidden;
        padding-left: 11px;
        position: relative;
        width: 159px;
        float: left;
        .user-name {
          color: #000;
          font-size: 20px;
          font-weight: 700;
          line-height: 20px;
          padding-top: 22px;
          width: 150px;
        }
        .country {
          margin-bottom: 15px;
          margin-top: 14px;
          color: #333;
        }
        .user-coBranding {
          font-size: 15px;
          line-height: 24px;
          margin-bottom: 20px;
          max-height: 48px;
          overflow: hidden;
        }
      }
      .right {
        background: #fff;
        height: 210px;
        margin-bottom: 18px;
        overflow: hidden;
        position: relative;
        width: 160px;
        float: left;
        img {
          height: 100%;
        }
      }
    }
  }
  .video {
    height: 200px;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .imgs {
    img {
      width: 100%;
    }
  }
}
.size {
  img {
    display: block;
  }
  .title {
    p {
      border-top: 1px solid #f2f2f2;
      color: #000;
      font-size: 15px;
      font-weight: 700;
      line-height: 18px;
      margin: 0 15px 15px;
      padding-top: 24px;
      height: 18px;
      span {
        background: #000;
        display: inline-block;
        height: 10px;
        margin-right: 5px;
        width: 3px;
      }
    }
  }
  img {
    width: 100%;
  }
}
.toolbar-container {
  width: 100%;
  background: #fff;
  bottom: 0;
  height: 55px;
  margin: 0 auto;
  position: fixed;
  width: 100%;
  z-index: 100;
  div {
    float: left;
  }
  .chat-btn {
    color: #333;
    font-size: 11px;
    height: 55px;
    position: relative;
    text-align: center;
    width: 16%;
    i {
      display: inline-block;
      height: 30px;
      width: 100%;
      background-image: url("../assets/img/kefu.png");
      background-repeat: no-repeat;
      background-position-x: center;
      background-position-y: bottom;
      background-size: 20px;
    }
    &::after {
      background-color: #d6d6d6;
      content: "";
      height: 35px;
      position: absolute;
      right: -3px;
      top: 10px;
      width: 1px;
    }
  }
  .like-btn {
    color: #333;
    font-size: 11px;
    height: 55px;
    position: relative;
    text-align: center;
    width: 16%;
    i {
      display: inline-block;
      height: 30px;
      width: 100%;
      background-image: url("../assets/img/like.png");
      background-repeat: no-repeat;
      background-position-x: center;
      background-position-y: bottom;
      background-size: 25px;
    }
  }
  .btn-car {
    width: 34%;
    height: 55px;
    background: #d8b3a1;
    color: #fff;
    line-height: 55px;
    text-align: center;
  }
  .btn-buy{
       width: 34%;
    height: 55px;
    background: #333;
    color: #fff;
    line-height: 55px;
    text-align: center;
  }
}
</style>
