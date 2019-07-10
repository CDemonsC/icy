<template>
  <div>
    <div class="search">
      <i class="iconfont icon-fanhui-" @click="handleClick()"></i>
      <div class="searchbar">
        <i class="iconfont icon-search"></i>
        <input type="text" :placeholder="placeholder" v-model="text">
      </div>
      <div class="btn" @click="handleBtnClick()">搜索</div>
    </div>
    <div class="hotsearch">
      <p>热门搜索</p>
      <ul>
        <li v-for="data in hotsearch" :key="data.index">{{data.keyword}}</li>
      </ul>
    </div>
    <div class="historysearch" v-if="historysearch.length">
      <p>历史搜索</p>
      <ul>
        <li v-for="data in historysearch" :key="data.index">{{data}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      placeholder: '',
      hotsearch: [],
      text: '',
      historysearch: []
    }
  },
  mounted () {
    axios({
      url: 'm.php?method=icy.getHotSearch&appId=4'
    }).then(res => {
      console.log(res.data.data)
      this.placeholder = res.data.data.placeHolder
      this.hotsearch = res.data.data.hotSearch
      console.log(this.hotsearch)
    })
  },
  methods: {
    handleClick () {
      this.$router.push('/style')
    },
    handleBtnClick () {
      this.historysearch.push(this.text)
    }
  }
}
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

.search {
  width: 100%;
  height: 50px;
  display: flex;
  color: #999;
  border-bottom: 1px solid #eaeaea;
  z-index: 100;
  background-color: white;
}
.searchbar {
  width: 260px;
  height: 30px;
  background: #f5f5f5;
  border-radius: 30px;
  margin: 10px auto 0 auto;
}
.icon-search {
  font-size: 20px;
  line-height: 30px;
  padding-left: 10px;
  padding-right: 5px;
}
.icon-fanhui- {
  font-size: 26px;
  line-height: 50px;
  padding-left: 10px;
}
span {
  display: inline-block;
  font-size: 10px;
}
input {
  background: none;
  outline: none;
  border: none;
}
.btn {
  width: 40px;
  font-size: 14px;
  margin-top: 16px;
  margin-left: -10px;
  float: left;
}
.hotsearch {
  width: 100%;
  margin-top: 20px;
  p {
    margin-left: 10px;
    font-size: 20px;
    color: #666;
    margin-bottom: 30px;
    margin-top: 20px;
  }
  ul {
    width: 100%;
    overflow: hidden;
    li {
      list-style: none;
      font-size: 16px;
      border: 1px solid #ccc;
      float: left;
      margin-left: 10px;
      margin-right: 10px;
      line-height: 30px;
      padding: 0 10px;
      margin-bottom: 10px;
      color: #666;
      cursor: pointer;
    }
  }
}
.historysearch {
  width: 100%;

  p {
    margin-left: 10px;
    font-size: 20px;
    color: #666;
    margin-bottom: 30px;
    margin-top: 20px;
  }
  ul {
    width: 100%;
    overflow: hidden;
    li {
      list-style: none;
      font-size: 16px;
      border: 1px solid #ccc;
      float: left;
      margin-left: 10px;
      margin-right: 10px;
      line-height: 30px;
      padding: 0 10px;
      margin-bottom: 10px;
      color: #666;
      cursor: pointer;
    }
  }
}
</style>
