<template>
  <div class="wrapper">
    <div class="title">我的全部购物车（2）</div>
    <div class="wrapper--product--box">
      <template v-for="(item, index) in products" :key="index">
        <ProductList :shopName="item.shopName" :productList="item['productsList']"/>
      </template>
    </div>
  </div>
  <Docker :currentIndex="1"/>
</template>
<script>
import Docker from '../../components/Docker'
import ProductList from '../../components/ProductList'
import { useCommonCartEffect } from '../../effect/commonCartEffect'

export default {
  name: 'cartList',
  components: { Docker, ProductList },
  setup () {
    const products = []
    const { cartList } = useCommonCartEffect()
    for (const i in cartList) {
      const cartShop = cartList[i]
      const productsList = []
      for (const j in cartShop.productList) {
        productsList.push(cartShop.productList[j])
      }
      cartShop.productsList = productsList
      products.push(cartShop)
    }
    return { products }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/viriables.scss';
.wrapper {
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: .5rem;
  right: 0;
  background: rgb(248, 248,248);
}
.title {
  line-height: .44rem;
  background: $bgColor;
  font-size: .16rem;
  color: $content-fontcolor;
  text-align: center;
}
.wrapper--product--box{
  position: absolute;
  left:0;
  right:0;
  top: .4rem;
  bottom: 0;
  overflow-y: scroll;
}
</style>
