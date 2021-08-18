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
import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'
import PostList from '../components/PostList.vue'
import { useStore } from 'vuex'

export default defineComponent({
  components: { PostList },
  setup () {
    const route = useRoute()
    const store = useStore()
    const currentId = +route.params.id
    // const column = store.state.columnList.find(item => {
    //   if (item.id === currentId) {
    //     if (!item.avatar) {
    //       item.avatar = require('@/assets/column.jpg')
    //     }
    //     return item
    //   }
    // })
    // const list = store.state.postList.filter(post => post.columnId === currentId)
    const column = computed(() => store.getters.getColumnById(currentId))
    const list = computed(() => store.getters.getPostById(currentId))
    return { column, list }
  }
})
</script>
