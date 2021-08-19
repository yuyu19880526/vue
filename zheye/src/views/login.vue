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
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Login',
  components: { ValidateInput, ValidateForm },
  setup () {
    const store = useStore()
    const router = useRouter()
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
      if (result) {
        router.push('/')
        store.commit('login', { name: emailVal.value, id: 111 })
      }
    }
    return { emailRules, passwordRules, emailVal, passwordVal, onFormSubmit }
  }
})
</script>
