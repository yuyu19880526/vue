<template>
  <div class="nearby">
    <div class="nearby__title">附近店铺</div>
    <router-link
      v-for="item in nearbyList"
      :key="item._id"
      :to="{path: `/shop/${item._id}`}"
    >
      <ShopInfo :item="item"/>
    </router-link>
  </div>
</template>
<script>
import { ref } from 'vue'
import { get } from '../../utils/request'
import ShopInfo from '../../components/ShopInfo.vue'

const useNearbyEffect = () => {
  const nearbyList = ref([])
  const getNearbyList = async () => {
    const result = await get('/api/shop/hot-list')
    if (result?.errno === 0 && result?.data?.length) {
      nearbyList.value = result.data
    }
  }
  return { nearbyList, getNearbyList }
}
export default {
  name: 'Nearby',
  components: { ShopInfo },
  setup () {
    const { nearbyList, getNearbyList } = useNearbyEffect()
    getNearbyList()
    return { nearbyList }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/viriables.scss';
.nearby {
  &__title{
    margin: .16rem 0 .02rem 0;
    font-size: .18rem;
    color: $content-fontcolor;
    font-weight: bold;
  }
  a{
    text-decoration: none;
  }
}
</style>
