<template>
  <teleport to="#modal">
    <div id="center" v-if="isOpen">
      <slot>this is a modal</slot>
      <button @click="buttonClose">关闭</button>
    </div>
  </teleport>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
const useCloseEffect = (context: any) => {
  const buttonClose = () => {
    context.emit('close-modal')
  }
  return { buttonClose }
}
export default defineComponent({
  name: 'Modal',
  props: {
    isOpen: Boolean
  },
  emits: {
    'close-modal': null
  },
  setup(props, context) {
    const { buttonClose } = useCloseEffect(context)
    return { buttonClose }
  },
})
</script>
<style scoped>
#center{
  width: 200px;
  height: 200px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  border: 1px solid #b5b5b5;
}
</style>
