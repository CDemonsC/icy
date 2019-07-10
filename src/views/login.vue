<template>
  <div id="ME">
    <img src="https://icy.design/icy/static/img/login-bg3.a044c753.jpg" alt>
    <div class="opacity"></div>
    <div class="login">
      <h1></h1>
      <input class="z" type="text" placeholder="请输入账号">
      <input type="password" placeholder="请输入密码">
      <button>登录</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="scss">
#ME {
  overflow: hidden;
  img {
    width: 100%;
    overflow: hidden;
    position: absolute;
    z-index: -50;
  }
  .opacity {
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.5;
    position: absolute;
    top: 0;
    z-index: -50;
  }
  .login {
    margin: 0 auto;
    width: 80%;
    margin-top:50px;
    h1 {
      width: 100px;
      height: 140px;
      margin: 0 auto;
    margin-bottom:50px;

      background-image: url(https://icy.design/icy/static/img/logo2.d370c4ef.png);
      background-size: 100% 100%;
    }
    input{
      border: 0;
      color: #333;
      font-size: 24px;
      height: 56px;
      outline: none;
      width: 100%;
    }
    .z{
      border-bottom:1px solid #333;
    }
    button{
      background: #333;
      color: #fff;
      display: block;
      font-size: 30px;
      height: 80px;
      line-height: 80px;
      margin-top: 20px;
      text-align: center;
      width: 100%;
    }
  }
}

// background-image: url();
</style>
