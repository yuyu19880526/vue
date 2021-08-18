<template>
  <validate-form autocomplete="off" @form-submit="onFormSubmit">
    <div class="mb-3">
      <label for="exampleInputEmail1">邮箱地址</label>
      <validate-input :rules="emailRules" v-model="emailVal" placeholder="请输入邮箱地址"/>
    </div>
    <div class="mb-3">
      <label class="form-label">密码</label>
      <validate-input
        type="password"
        placeholder="请输入密码"
        :rules="passwordRules"
        v-model="passwordVal"
      />
    </div>
    <template #submit>
      <span class="btn btn-primary">登录</span>
    </template>
  </validate-form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ValidateInput, { RulesProp } from '../components/ValidateInput.vue'
import ValidateForm from '../components/ValidateForm.vue'

// const emailReg = /^[A-Za-zd0-9]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/
// const useEmailEffect = () => {
//   const emailRef = reactive({
//     val: '',
//     error: false,
//     message: ''
//   })
//   const validateEmail = () => {
//     if (emailRef.val.trim() === '') {
//       emailRef.error = true
//       emailRef.message = 'emial不能为空'
//     } else if (!emailReg.test(emailRef.val)) {
//       emailRef.error = true
//       emailRef.message = '请输入正确的email'
//     }
//   }
//   return { emailRef, validateEmail }
// }

export default defineComponent({
  name: 'Login',
  components: { ValidateInput, ValidateForm },
  setup () {
    const emailVal = ref('')
    const passwordVal = ref('')
    const emailRules:RulesProp = [
      { type: 'required', message: '电子邮箱地址不能为空' },
      { type: 'email', message: '请输入正确的电子邮箱格式' }
    ]
    const passwordRules: RulesProp = [
      { type: 'required', message: '密码不能为空' }
    ]
    const onFormSubmit = (result: boolean) => {
      console.log('1234', result)
    }
    return { emailRules, passwordRules, emailVal, passwordVal, onFormSubmit }
  }
})
</script>
