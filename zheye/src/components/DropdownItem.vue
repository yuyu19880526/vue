<template>
  <li
    :class="{ 'dropdown-option': true, 'is-disabled': disabled }"
  >
    <slot></slot>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DropdownItem',
  props: {
    disabled: {
      type: Boolean,
      required: false
    }
  }
})
</script>

<style>
.is-disabled *{
  color: #adb5bd;
  background: transparent;
  pointer-events: none;
}
</style>
