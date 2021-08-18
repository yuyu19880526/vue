<template>
  <div class="container">
    <global-header :user="user"/>
    <router-view></router-view>
    <global-footer></global-footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalHeader, { UseProps } from './components/GlobalHeader.vue'
import GlobalFooter from './components/GlobalFooter.vue'

const user: UseProps = {
  isLogin: false,
  name: 'test',
  id: 1
}
export default defineComponent({
  name: 'App',
  components: { GlobalHeader, GlobalFooter },
  setup () {
    return { user }
  }
})
</script>

<style>
</style>
