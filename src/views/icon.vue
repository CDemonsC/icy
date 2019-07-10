<template>
    <div id="icon">
      <search></search>
      <iconbar></iconbar>
      <div class="con">
        <router-view></router-view>
      </div>
    </div>

</template>

<script>
import iconbar from './icon/iconbar'
import search from './style/barsearch'
export default {
  data () {
    return {

    }
  },
  components: {
    iconbar,
    search
  }

}
</script>

<style lang="scss" scoped>
  #icon{
    .search{
      position: fixed;
      top: 0;
    }
    div.con{
      margin-top: 81px;
      width: 100%;

    }
  }
</style>
