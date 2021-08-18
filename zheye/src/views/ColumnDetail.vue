<template>
  <div class="column-detail-page w-75 mx-auto">
    <div class="column-info row mb-4 border-bottom pb-4 align-items-center" v-if="column">
      <div class="col-3 text-center">
        <img :src="column.avatar" :alt="column.title" class="rounded-circle border w-100">
      </div>
      <div class="col-9">
        <h4>{{column.title}}</h4>
        <p class="text-muted">{{column.description}}</p>
      </div>
    </div>
    <post-list :list="list"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import PostList from '../components/PostList.vue'
import { testData, testPosts } from '../api/testData'

export default defineComponent({
  components: { PostList },
  setup () {
    const router = useRoute()
    const currentId = parseInt(router.params.id)
    const column = testData.find(item => {
      if (item.id === currentId) {
        if (!item.avatar) {
          item.avatar = require('@/assets/column.jpg')
        }
        return item
      }
    })
    const list = testPosts.filter(post => post.columnId === currentId)
    return { column, list }
  }
})
</script>
