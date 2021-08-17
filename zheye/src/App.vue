<template>
  <div class="container">
    <global-header :user="user"/>
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
        <span class="btn btn-danger">Submit</span>
      </template>
    </validate-form>
    <div style="display:none">
      <colum-list :list="testData"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumList, { ColumProps } from './components/ColumList.vue'
import GlobalHeader, { UseProps } from './components/GlobalHeader.vue'
import ValidateInput, { RulesProp } from './components/ValidateInput.vue'
import ValidateForm from './components/ValidateForm.vue'

const testData:ColumProps[] = [
  {
    id: 1,
    title: 'test1的专栏',
    description: '这是test1专栏，有一段非常有意思的简介，可以更新一下哦',
    avatar: ''
  },
  {
    id: 2,
    title: 'test2的专栏',
    description: '这是test2专栏，有一段非常有意思的简介，可以更新一下哦',
    avatar: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
  },
  {
    id: 3,
    title: 'test3的专栏',
    description: '这是test3专栏，有一段非常有意思的简介，可以更新一下哦',
    avatar: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
  },
  {
    id: 4,
    title: 'test4的专栏',
    description: '这是test4专栏，有一段非常有意思的简介，可以更新一下哦',
    avatar: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
  }
]

const user: UseProps = {
  isLogin: true,
  name: 'test',
  id: 1
}
export default defineComponent({
  name: 'App',
  components: { ColumList, GlobalHeader, ValidateInput, ValidateForm },
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
    return { testData, user, emailRules, passwordRules, emailVal, passwordVal, onFormSubmit }
  }
})
</script>

<style>
</style>
