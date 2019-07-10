<template>
   <div class="search">
     <img src="../../assets/ICY全球设计师平台_files/logo.ec817d43.png" alt="" class="logo">
     <div class="searchbar" @click="handleClick()">
       <i class="iconfont icon-search"></i>
       <span>连衣裙</span>
     </div>
     <i class="iconfont icon-kefu"></i>
     <i class="iconfont icon-cart"></i>
   </div>
</template>

<script>
export default {

  data () {
    return {

    }
  },
  methods: {
    handleClick () {
      this.$router.push('/search')
    }
  }
}
</script>

<style src="../../assets/font_1239638_1d71itlyudf/iconfont.css"></style>

<style lang="scss" scoped>
  *{
    margin:0;
    padding:0
  }
 .search{
    width:100%;
    height:50px;
    display:flex;
    color:#999;
    border-bottom:1px solid #eaeaea;
    z-index:100;
    background-color:white;
  }
  .logo{
    width:30px;
    margin:5px 0 5px 10px;
  }
  .searchbar{
    width:60%;
    height:30px;
    background:#f5f5f5;
    border-radius:30px;
    margin-left:8%;
    margin-top:10px;
  }
  .icon-search{
    font-size:20px;
    line-height:30px;
    padding-left:10px;
    padding-right:5px;
  }
  .icon-kefu{
    font-size:24px;
    margin-left:10px;
    line-height:50px;
  }
  .icon-cart{
    font-size:24px;
    margin-left:10px;
    line-height:50px;
  }
  span{
    display:inline-block;
    font-size:10px;
  }
</style>
