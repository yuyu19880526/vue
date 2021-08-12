<template>
  <div class="container">
    <colum-list :list="testData"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumList, { ColumProps } from './components/ColumList.vue'

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
export default defineComponent({
  name: 'App',
  components: { ColumList },
  setup () {
    return { testData }
  }
})
</script>

<style>
</style>
