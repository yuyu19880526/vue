<template>
  <div class="container">
    <form autocomplete="off">
      <div class="mb-3">
        <label for="exampleInputEmail1">邮箱地址</label>
        <validate-input :rules="emailRules" v-model="emailVal" placeholder="请输入邮箱地址"/>
        {{ emailVal }}
      </div>
    </form>
    <global-header :user="user"/>
    <colum-list :list="testData"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumList, { ColumProps } from './components/ColumList.vue'
import GlobalHeader, { UseProps } from './components/GlobalHeader.vue'
import ValidateInput, { RulesProp } from './components/ValidateInput.vue'

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
  components: { ColumList, GlobalHeader, ValidateInput },
  setup () {
    const emailVal = ref('')
    const emailRules:RulesProp = [
      { type: 'required', message: '电子邮箱地址不能为空' },
      { type: 'email', message: '请输入正确的电子邮箱格式' }
    ]
    console.log(emailVal.value)
    return { testData, user, emailRules, emailVal }
  }
})
</script>

<style>
</style>
