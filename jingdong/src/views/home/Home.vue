<template>
  <div class="wrapper">
    <StaticPart />
    <Nearby />
  </div>
  <Docker />
</template>
<script>
import StaticPart from './StaticPart.vue'
import Nearby from './Nearby.vue'
import Docker from './Docker.vue'
export default {
  name: 'Home',
  components: {
    StaticPart,
    Nearby,
    Docker
  }
}
</script>
<style lang="scss">
.wrapper{
  position: absolute;
  left: 0;
  right: 0;
  bottom: .5rem;
  top: 0;
  padding: 0 .18rem .2rem .18rem;
  overflow-y: auto;
}
</style>
