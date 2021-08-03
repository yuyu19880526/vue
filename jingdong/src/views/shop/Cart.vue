<template>
  <div class="cart">
    <div class="check">
      <div class="check__icon">
        <img class="check__icon__img" src="http://www.dell-lee.com/imgs/vue3/basket.png" alt="">
        <div class="check__icon__tag">{{total}}</div>
      </div>
      <div class="check__info">
        总计：<span class="check__info__price">&yen; {{price}}</span>
      </div>
      <div class="check__btn">去结算</div>
    </div>
  </div>
</template>
<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
// 购物车相关逻辑
const useCartEffect = () => {
  const route = useRoute()
  const shopId = route.params.id
  const store = useStore()
  const cartList = store.state.cartList
  const total = computed(() => {
    const productList = cartList[shopId]
    let count = 0
    if (productList) {
      for (const i in productList) {
        const product = productList[i]
        count += product.count
      }
    }
    return count
  })
  const price = computed(() => {
    const productList = cartList[shopId]
    let count = 0
    if (productList) {
      for (const i in productList) {
        const product = productList[i]
        count += product.count * product.price
      }
    }
    return count.toFixed(2)
  })
  return { total, price }
}
export default {
  name: 'Cart',
  setup () {
    const { total, price } = useCartEffect()
    return { total, price }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/viriables.scss';
.cart{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.check{
  display: flex;
  line-height: .49rem;
  height: .49rem;
  border-top: .01rem solid $content-bgColor;
  &__icon{
    width: .84rem;
    position: relative;
    &__img {
      display: block;
      width: .28rem;
      height: .26rem;
      margin: .12rem auto;
    }
    &__tag{
      position: absolute;
      left: .48rem;
      top: .04rem;
      padding:0 .02rem;
      text-align: center;
      line-height: .2rem;
      min-width: .2rem;
      height: .2rem;
      font-size: .16rem;
      color: $bgColor;
      background: $content-highlignt;
      border-radius: .14rem;
      transform: scale(50%,50%);
      transform-origin: left center;
    }
  }
  &__info{
    flex: 1;
    font-size: .12rem;
    color: $content-fontcolor;
    &__price{
      font-size: .18rem;
      color:  $content-highlignt;
    }
  }
  &__btn{
    width: .98rem;
    font-size: .14rem;
    text-align: center;
    background: #4FB0F9;
    color: $bgColor;
  }
}
</style>
