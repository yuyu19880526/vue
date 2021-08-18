<template>
  <div class="container">
    <global-header :user="curretUser"/>
    <router-view></router-view>
    <global-footer></global-footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalHeader from './components/GlobalHeader.vue'
import GlobalFooter from './components/GlobalFooter.vue'

export default defineComponent({
  name: 'App',
  components: { GlobalHeader, GlobalFooter },
  setup () {
    const store = useStore()
    const curretUser = computed(() => store.state.user)
    return { curretUser }
  }
})
</script>

<style>
</style>
