<template>
  <div class="cart">
    <div class="product">
      <template
        v-for="item in productList"
        :key="item._id"
      >
        <div class="product__item" v-if="item.count > 0">
          <div
            v-html="item.check ? '&#xe652;': '&#xe66c;'"
            :class="{
              'product__item__icon': true,
              'iconfont':true,
              'product__item__icon--nocheck': !item.check
            }"
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
import { useCommonCartEffect } from './commonCartEffect'
// 购物车相关逻辑
const useCartEffect = (shopId) => {
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
  const productList = computed(() => {
    const productList = cartList[shopId] || []
    return productList
  })
  return { total, price, productList }
}
export default {
  name: 'Cart',
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const { total, price, productList } = useCartEffect(shopId)
    const { changeCartItemInfo } = useCommonCartEffect()
    return { total, price, productList, changeCartItemInfo, shopId }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.cart{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  .product{
    flex: 1;
    overflow-y: scroll;
    background: $bgColor;
    &__item{
      position: relative;
      display: flex;
      padding: .12rem 0;
      margin: 0 .16rem;
      &__detail{
        overflow: hidden;
      }
      &__icon{
        color: $medium-fontColor;
        line-height: .5rem;
        margin-right: .16rem;
        font-size: .2rem;
        color: #0091FF;
        &--nocheck{
          color: $medium-fontColor;
        }
      }
      &__img{
        width: .46rem;
        height: .46rem;
        margin-right: .16rem;
      }
      &__title{
        margin: 0;
        font-size: .14rem;
        line-height: .2rem;
        color: $content-fontcolor;
        @include ellipsis;
      }
      &__price{
        line-height: .2rem;
        font-size: .14rem;
        margin: 0.06rem 0 0 0;
        color: $content-highlignt;
      }
      &__yen{
        font-size: .12rem;
      }
      &__origin{
        font-size: 12px;
        transform: scale(0.5, 0.5);
        transform-origin: center top;
        color: $light-fontColor;
        text-decoration: line-through;
        margin-left: .06rem;
      }
    }
    &__number {
      position: absolute;
      right: 0;
      bottom: .12rem;
      line-height: .16rem;
      height: .2rem;
      &__minus, &__plus {
        display: inline-block;
        width: .2rem;
        height: .2rem;
        border-radius: 50%;
        font-size: .2rem;
        text-align: center;
      }
      &__minus {
        border: .01rem solid $medium-fontColor;
        color: $medium-fontColor;
        margin-right: .05rem;
      }
      &__plus {
        background: $content-button;
        border: .01rem solid $content-button;
        color: $bgColor;
        margin-left: .05rem;
        &--dis{
          background: $light-fontColor;
        }
      }
    }
  }
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
