<template>
    <div>
        <ul>
            <router-link to="/icon/newest" tag="li" activeClass="active"><span>最新</span></router-link>
            <router-link to="/icon/fashion" tag="li" activeClass="active"><span>时尚博主</span></router-link>
            <router-link to="/icon/star" tag="li" activeClass="active"><span>明星</span></router-link>
        </ul>
    </div>

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
    *{
        margin: 0;
        padding: 0;
    }
    .active{
        span{border-bottom: 5px solid #000;}
    }
    ul{
        z-index: 11111;
        width: 100%;
        list-style: none;
        height: 30px;
        line-height: 30px;
        background: #fff;
        position: fixed;
        top: 50px;
        left:0;
        li{
            width: 30%;
            float: left;
            text-align: center;
        }
    }
</style>
