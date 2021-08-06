<template>
  <div class="mask" @click="handleShowCartlist" v-if="showCartList"></div>
  <div class="cart">
    <div class="product" v-if="showCartList && computedCart.total > 0">
      <div class="product__header">
        <div class="product__header__all">
          <span
            v-html="computedCart.isAllchecked ? '&#xe652;': '&#xe615;'"
            @click="() => setCartItemCheck(shopId)"
            :class="{
              'product__header__icon': true,
              'iconfont': true,
              'product__header__icon--all': computedCart.isAllchecked
            }"
          />
          全选
        </div>
        <div class="product__header__clear">
          <span @click="()=>cleanCartProduct(shopId)">清空购物车</span>
        </div>
      </div>
      <template
        v-for="item in productList"
        :key="item._id"
      >
        <div class="product__item" v-if="item.count > 0">
          <div
            v-html="item.check ? '&#xe652;': '&#xe615;'"
            :class="{
              'product__item__icon': true,
              'iconfont':true,
              'product__item__icon--nocheck': !item.check
            }"
            @click="() => changeCartItemChecked(shopId, item._id)"
          />
          <img class="product__item__img" :src="item.imgUrl" alt="">
          <div class="product__item__detail">
            <h4 class="product__item__title">{{item.name}}</h4>
            <p class="product__item__price">
              <span class="product__item__yen">&yen;</span>{{item.price}}
              <span class="product__item__origin">{{item.oldPrice}}</span>
            </p>
          </div>
          <div class="product__number">
            <span
              class="product__number__minus"
              @click="() => { changeCartItemInfo(shopId, item._id, item, -1) }"
            >-</span>
            {{ item.count || 0 }}
            <span
              :class="{'product__number__plus': true, 'product__number__plus--dis': item.count >= item.sales}"
              @click="() => { changeCartItemInfo(shopId, item._id, item, 1) }"
            >+</span>
          </div>
        </div>
      </template>
    </div>
    <div class="check">
      <div class="check__icon" @click="handleShowCartlist">
        <img class="check__icon__img" src="http://www.dell-lee.com/imgs/vue3/basket.png" alt="">
        <div class="check__icon__tag">{{computedCart.total}}</div>
      </div>
      <div class="check__info">
        总计：<span class="check__info__price">&yen; {{computedCart.price}}</span>
      </div>
      <div class="check__btn">
        <router-link :to="{path: `/order-comfirmation/${shopId}`}">
          去结算
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { useCommonCartEffect } from '../../effect/commonCartEffect'

// 购物车相关逻辑
const useCartEffect = (shopId) => {
  const store = useStore()
  const cartList = store.state.cartList
  const showCartList = ref(false)

  // 显示隐藏购物车内容
  const handleShowCartlist = () => {
    showCartList.value = !showCartList.value
  }

  const computedCart = computed(() => {
    const result = {
      total: 0,
      price: 0,
      isAllchecked: true
    }
    const productList = cartList?.[shopId]?.productList
    if (productList) {
      for (const i in productList) {
        const product = productList[i]
        result.total += product.count
        result.price += product.count * product.price
        if (product.count > 0 && !product.check) {
          result.isAllchecked = false
        }
      }
    }
    result.price = result.price.toFixed(2)
    return result
  })
  // 购物车内容
  const productList = computed(() => {
    const productList = cartList?.[shopId]?.productList || []
    return productList
  })
  // 购物车勾选
  const changeCartItemChecked = (shopId, productId) => {
    store.commit('changeCartItemChecked', { shopId, productId })
  }
  // 全部清空
  const cleanCartProduct = (shopId) => {
    store.commit('cleanCartProduct', { shopId })
    showCartList.value = false
  }
  // 全选
  const setCartItemCheck = (shopId) => {
    store.commit('setCartItemCheck', { shopId })
  }
  return { cartList, computedCart, productList, changeCartItemChecked, cleanCartProduct, setCartItemCheck, showCartList, handleShowCartlist }
}
export default {
  name: 'Cart',
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const { cartList, computedCart, productList, changeCartItemChecked, cleanCartProduct, setCartItemCheck, showCartList, handleShowCartlist } = useCartEffect(shopId)
    const { changeCartItemInfo } = useCommonCartEffect()
    return {
      cartList,
      computedCart,
      productList,
      changeCartItemInfo,
      shopId,
      changeCartItemChecked,
      cleanCartProduct,
      setCartItemCheck,
      showCartList,
      handleShowCartlist
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
@import './shop.scss';
.mask{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: $content-inputPlaceholder;
  z-index: 1;
}
.cart{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background: $bgColor;
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
    a{
      color: $bgColor;
      text-decoration: none;
    }
  }
}
</style>
