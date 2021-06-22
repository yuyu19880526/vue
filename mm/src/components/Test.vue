<template>
  <div @click="handleClick">{{name}}</div>
</template>
<script>

export default {
  name: 'Test',
  setup() {
    return {
      name: 'mm',
      handleClick: () => {
        alert(444)
      }
    }
  },
}
</script>
