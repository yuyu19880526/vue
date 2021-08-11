<template>
  <div id="nav">
    <button @click="openModal">打开弹框</button>
    <Modal :isOpen="IsOpen" @close-modal="closeModal">my modal</Modal>
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
import { defineComponent, computed, reactive, toRefs, ref } from 'vue'
import { useMousePosition } from './hooks/useMousePosition'
import Modal from './components/modal.vue'

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

const useModalEffect = () => {
  const IsOpen = ref(false)
  const openModal = () => {
    IsOpen.value = true
  }
  const closeModal = () => {
    IsOpen.value = false
  }
  return { IsOpen, openModal, closeModal }
}
export default defineComponent({
  name: 'App',
  components: {
    Modal
  },
  setup () {
    const { refData } = useAddCountEffect()
    const { x, y } = useMousePosition()
    const { IsOpen, openModal, closeModal } = useModalEffect()
    return { ...refData, x, y, IsOpen, openModal, closeModal }
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
