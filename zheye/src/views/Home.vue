<template>
  <div class="home">
    <colum-list :list="testData"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ColumList from '../components/ColumList.vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Home',
  components: { ColumList },
  setup () {
    const store = useStore()
    const testData = store.state.columnList
    return { testData }
  }
})
</script>
