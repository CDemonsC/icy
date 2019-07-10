<template>
  <div>
    <tabbar></tabbar>
    <section>
      <router-view></router-view>
    </section>
  </div>

</template>

<script>
import tabbar from './components/tabbar'
export default {
  data () {
    return {

    }
  },
  components: {
    tabbar
  }
}
</script>

<style lang="scss" >
*{
    margin: 0;
    padding: 0;
   }

</style>
