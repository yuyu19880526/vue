<template>
  <div>
    <div class="row">
      <div v-for="column in columnList" :key="column.id" class="col-4 mb-4">
        <div class="card h-100 shadow-sm">
          <div class="card-body text-center">
            <img :src="column.avatar" class="rounded-circle border border-light w-25 my-3" :alt="column.title">
            <h5 class="card-title">{{column.title}}</h5>
            <p class="card-text text-left">{{column.description}}</p>
            <router-link :to="{name: 'ColumnDetail', params: {id: column.id}}" class="btn btn-outline-primary">进入专栏</router-link>
          </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'

export interface ColumProps {
  id: number;
  title: string;
  avatar?: string;
  description: string;
}

export default defineComponent({
  name: 'ColumList',
  props: {
    list: {
      type: Array as PropType<ColumProps[]>,
      required: true
    }
  },
  setup (props) {
    const columnList = computed(() => {
      const result = props.list.map(item => {
        if (!item.avatar) {
          item.avatar = require('@/assets/column.jpg')
        }
        return item
      })
      return result
    })
    return { columnList }
  }
})
</script>
