<template>
  <div class="wrapper">
    <img class="wrapper__img" src="http://www.dell-lee.com/imgs/vue3/user.png" alt="">
    <div class="wrapper__input">
      <input class="wrapper__input__content" placeholder="请输入手机号" type="text" name="" id="">
    </div>
    <div class="wrapper__input">
      <input class="wrapper__input__content" placeholder="请输入密码" type="password" name="" id="">
    </div>
    <div class="wrapper__login-button" @click="handleLogin">登陆</div>
    <div class="wrapper__login-link" @click="handleRegister">立即注册</div>
  </div>
</template>
<script>
import { useRouter } from 'vue-router'
export default {
  name: 'Login',
  setup () {
    const router = useRouter()
    const handleLogin = () => {
      localStorage.setItem('isLogin', true)
      router.push('/')
    }
    const handleRegister = () => {
      router.push({ name: 'Register' })
    }
    return { handleLogin, handleRegister }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/viriables.scss';
.wrapper{
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  &__img{
    display: block;
    margin: 0 auto .4rem auto;
    width: .66rem;
    height: .66rem;
  }
  &__input{
    box-sizing: border-box;
    height: .48rem;
    margin: 0 .4rem .16rem .4rem;
    background: $content-input;
    padding: 0 .16rem;
    border-radius: .06rem;
    border: 1px solid $content-inputBoder;
    &__content{
      width: 100%;
      border: none;
      outline: none;
      background: none;
      line-height: .48rem;
      font-size: .16rem;
      &::placeholder{
        color: $content-inputPlaceholder;
      }
    }
  }
  &__login-button{
    margin: .32rem .4rem 0 .4rem;
    height: .48rem;
    line-height: .48rem;
    font-size: .16rem;
    text-align: center;
    background: $content-button;
    box-shadow: 0 .04rem .08rem 0 $content-buttonShadow;
    border-radius: .04rem;
    border-radius: .04rem;
    color: #fff;
  }
  &__login-link{
    text-align: center;
    margin: .16rem 0;
    font-size: .14rem;
    color: #777;
  }
}
</style>
