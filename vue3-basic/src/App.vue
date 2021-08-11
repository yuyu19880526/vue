<template>
  <div id="nav">
    <h1>{{count}}</h1>
    <h1>{{double}}</h1>
    <div>
      <button @click="addCount">点击添加</button>
    </div>
    <h1>x坐标: {{x}}</h1>
    <h1>y坐标: {{y}}</h1>
  </div>
  <router-view/>
</template>
<script lang="ts">
import { defineComponent, computed, reactive, toRefs } from 'vue'
import { useMousePosition } from './hooks/useMousePosition'
interface DataProps {
  count: number,
  double: number,
  addCount: () => void
}
const useAddCountEffect = () => {
  const data:DataProps = reactive({
    count: 0,
    double: computed(() => {
      return data.count * 2
    }),
    addCount: () => {
      return data.count++
    }
  })

  const refData = toRefs(data)
  return { refData }
}

export default defineComponent({
  name: 'App',
  setup () {
    const { refData } = useAddCountEffect()
    const { x, y } = useMousePosition()
    return { ...refData, x, y }
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
