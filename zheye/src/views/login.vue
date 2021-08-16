<template>
  <form autocomplete="off">
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input
        type="email"
        autocomplete="off"
        class="form-control"
        v-model="emailRef.val"
        @blur="validateEmail"
      >
      <div class="form-text" v-if="emailRef.error">{{emailRef.message}}</div>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" autocomplete="new-password" class="form-control">
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

const emailReg = /^[A-Za-zd0-9]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/
const useEmailEffect = () => {
  const emailRef = reactive({
    val: '',
    error: false,
    message: ''
  })
  const validateEmail = () => {
    if (emailRef.val.trim() === '') {
      emailRef.error = true
      emailRef.message = 'emial不能为空'
    } else if (!emailReg.test(emailRef.val)) {
      emailRef.error = true
      emailRef.message = '请输入正确的email'
    }
  }
  return { emailRef, validateEmail }
}

export default defineComponent({
  name: 'login',
  setup () {
    const { emailRef, validateEmail } = useEmailEffect()
    return { emailRef, validateEmail }
  }
})
</script>
