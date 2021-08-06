<template>
  <div class="wrapper">
    <div class="top">
      <div class="top__header">
        <div class="iconfont top__header__back">&#xe606;</div>
        确认订单
      </div>
      <div class="top__receiver">
        <div class="top__receiver__title">收货地址</div>
        <div class="top__receiver__arddress">北京理工大学国防科技园2号楼10层</div>
        <div class="top__receiver__info">
          <span class="top__receiver__info__name">瑶妹（先生）</span>
          <span class="top__receiver__info__tel">18911024266</span>
        </div>
        <div class="iconfont top__receiver__icon">&#xe606;</div>
      </div>
    </div>
    <div class="product">
      <div class="product__top__title">{{shopName}}</div>
      <div class="product__item" v-for="item in productList" :key="item._id">
        <img class="product__item__img" :src="item.imgUrl" alt="">
        <div class="product__item__detail">
          <h4 class="product__item__title">{{item.name}}</h4>
          <p class="product__item__price">
            <span>
              <span class="product__item__yen">&yen;</span>
              {{item.price}} x {{item.count}}
            </span>
            <span class="product__item__total">
              <span class="product__item__yen">&yen;</span>
              {{(item.price * item.count).toFixed(2)}}
            </span>
          </p>
        </div>
      </div>
    </div>
    <div class="cart">
      <div class="check">
        <div class="check__info">
          实付金额<span class="check__info__price">&yen;{{computedCart.price}}</span>
        </div>
        <div class="check__btn">
          <router-link :to="{path: `/order-comfirmation/${shopId}`}">
            提交订单
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useCommonCartEffect } from '../../effect/commonCartEffect'
import { useRoute } from 'vue-router'
export default {
  name: 'OrderComfirmation',
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const { productList, shopName, computedCart } = useCommonCartEffect(shopId)
    return { productList, shopName, computedCart }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../shop/shop.scss';
.wrapper{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: $search-bgColor;
}
.top{
  position: relative;
  height: 1.96rem;
  background-size: 100% 1.59rem;
  background-image: linear-gradient(0deg, rgba(0,145,255,0.00) 4%, #0091FF 50%);
  background-repeat: no-repeat;
  &__header{
    padding-top: .26rem;
    line-height: .24rem;
    color: $bgColor;
    text-align: center;
    font-size: .16rem;
    &__back{
      position: absolute;
      left: .18rem;
      font-size: .22rem;
    }
  }
  &__receiver{
    position: absolute;
    left: .18rem;
    right: .18rem;
    bottom: 0;
    height: 1.11rem;
    background: $bgColor;
    border-radius: .04rem;
    padding: .16rem;
    box-sizing: border-box;
    color: $content-fontcolor;
    &__title{
      line-height: .22rem;
      font-size: .16rem;
      margin-bottom: .14rem;
    }
    &__arddress{
      font-size: .14rem;
      line-height: .2rem;
      margin-bottom: .06rem;
    }
    &__info{
      color: $medium-fontColor;
      font-size: .12rem;
      line-height: .17rem;
      &__name{
        margin-right: .06rem;
      }
    }
    &__icon{
      position: absolute;
      right:  .16rem;
      top:  .5rem;
      transform: rotate(180deg);
      color: $medium-fontColor;
      font-size:  .2rem;
    }
  }
}
.product {
  margin: .16rem .18rem .55rem .16rem;
  border-radius: .04rem;
  &__top{
    &__title{
      font-size: .16rem;
      color: $content-fontcolor;
      margin: .16rem .16rem .04rem .16rem;
    }
  }
  &__item{
    &__detail {
      flex: 1;
    }
    &__price{
      display: flex;
      font-size: .14rem;
      line-height: .14rem;
    }
    em{
      display: inline-block;
      font-style: normal;
      font-size: .12rem;
      line-height: .14rem
    }
    &__total{
      flex: 1;
      text-align: right;
      margin-right: .1rem;
      color: #000;
    }
  }
}
.check{
  &__info{
    margin-left: .24rem;
    font-size: .14rem;
    color: $content-fontcolor;
    &__price{
      margin-left: .05rem;
      font-size: .16rem;
      color: #151515;
      line-height: .2rem;
    }
  }
}
</style>
