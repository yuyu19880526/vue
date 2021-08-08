<template>
  <div>cartList</div>
  <Docker :currentIndex="1"/>
</template>
<script>
import Docker from '../../components/Docker'
export default {
  name: 'cartList',
  components: { Docker }
}
</script>
