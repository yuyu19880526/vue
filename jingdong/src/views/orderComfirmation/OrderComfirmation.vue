<template>
  <div class="wrapper">
    <TopArea />
    <ProductList :shopNam="shopName" :productList="productList"/>
    <Order :shopId="shopId" :price="computedCart.price"/>
  </div>
</template>
<script>
import { useCommonCartEffect } from '../../effect/commonCartEffect'
import { useRoute } from 'vue-router'
import TopArea from './TopArea'
import Order from './Order'
import ProductList from './ProductList'

export default {
  name: 'OrderComfirmation',
  components: {
    TopArea,
    Order,
    ProductList
  },
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const { productList, shopName, computedCart } = useCommonCartEffect(shopId)
    return { productList, shopName, computedCart, shopId }
  }
}
</script>
<style lang="scss" scoped>
.wrapper{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #eee;
  overflow-y: scroll;
}
</style>
