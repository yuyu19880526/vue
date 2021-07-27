<template>
  <div class="wrapper">
    <img class="wrapper__img" src="http://www.dell-lee.com/imgs/vue3/user.png" alt="">
    <div class="wrapper__input">
      <input
        class="wrapper__input__content"
        placeholder="请输入手机号"
        v-model="username"
        type="text"
        name=""
        id=""
        autocomplete="new-password"
      >
    </div>
    <div class="wrapper__input">
      <input
        class="wrapper__input__content"
        placeholder="请输入密码"
        type="password"
        v-model="password"
        name=""
        id=""
        autocomplete="new-password"
      >
    </div>
    <div class="wrapper__input">
      <input
        class="wrapper__input__content"
        placeholder="确认密码"
        type="password"
        name=""
        id=""
        v-model="ensurement"
        autocomplete="new-password"
      >
    </div>
    <div class="wrapper__register-button" @click="handleRegister">登陆</div>
    <div class="wrapper__register-link" @click="handleRegisterClick">已有账号，立即登陆</div>
    <Toast v-if="show" :message="toastMessage"/>
  </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { post } from '../../utils/request'
import Toast, { useToastEffect } from '../../components/Toast.vue'

// 处理注册逻辑
const useRegisterEffect = (showToast) => {
  const router = useRouter()
  const data = reactive({
    username: '',
    password: '',
    ensurement: ''
  })
  const handleRegister = async () => {
    try {
      const result = await post('/api/user/register', {
        username: data.username,
        password: data.password,
        ensurement: data.ensurement
      })
      if (result?.errno === 0) {
        router.push({ name: 'Login' })
      } else {
        showToast('注册失败')
      }
    } catch (e) {
      showToast('请求失败')
    }
  }
  const { username, password, ensurement } = toRefs(data)
  return {
    handleRegister,
    username,
    password,
    ensurement
  }
}
// 处理已有账号逻辑
const useRegisterClickEffect = () => {
  const router = useRouter()
  const handleRegisterClick = () => {
    router.push({ name: 'Login' })
  }
  return { handleRegisterClick }
}
export default {
  name: 'Register',
  components: { Toast },
  setup () {
    const { showToast, show, toastMessage } = useToastEffect()
    const { handleRegister } = useRegisterEffect(showToast)
    const { handleRegisterClick } = useRegisterClickEffect()
    return { handleRegister, handleRegisterClick, show, toastMessage }
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
  &__register-button{
    margin: .32rem .4rem 0 .4rem;
    height: .48rem;
    line-height: .48rem;
    font-size: .16rem;
    text-align: center;
    background: $content-button;
    box-shadow: 0 .04rem .08rem 0 $content-buttonShadow;
    border-radius: .04rem;
    border-radius: .04rem;
    color: $bgColor;
  }
  &__register-link{
    text-align: center;
    margin: .16rem 0;
    font-size: .14rem;
    color: #777;
  }
}
</style>
