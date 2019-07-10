<template>
    <ul>
        <router-link to="/style" tag="li" activeClass="active">STYLE</router-link>
        <router-link to="/icon" tag="li" activeClass="active">ICON</router-link>
        <router-link to="/shop" tag="li" activeClass="active">SHOP</router-link>
        <router-link to="/center" tag="li" activeClass="active">ME</router-link>
    </ul>
</template>

<script>
export default {

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  ul{
    list-style:none;
    width:100%;
    position: fixed;
    background:white;
    bottom:0;
    left:0;
    display:flex;
    z-index:100;
  }
  li{
    width:25%;
    line-height:50px;
    text-align:center;
    color:#aaa;
  }
  .active{
    color:black;
    border-bottom:3px solid black;
  }
</style>
