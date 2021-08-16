<template>
  <div class="dropdown" ref="dropdownRef">
    <a href="#" class="btn btn-outline-light my-2 dropdown-toggle" @click.prevent="toggleShow">
      {{ title }}
    </a>
    <ul class="dropdown-menu" :style="{display: 'block'}" v-if="isShow">
      <slot></slot>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { useClickOutside } from '../hooks/useClickOutside'

export default defineComponent({
  name: 'Dropdown',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup () {
    const isShow = ref<boolean>(false)
    const dropdownRef = ref<null | HTMLElement>(null)
    const toggleShow = () => {
      isShow.value = !isShow.value
    }

    const isClickOutSide = useClickOutside(dropdownRef)

    watch(isClickOutSide, () => {
      if (isClickOutSide.value && isShow.value) {
        isShow.value = false
      }
    })
    return { isShow, toggleShow, dropdownRef }
  }
})
</script>
