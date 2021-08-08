<template>
<div class="mask">
  <div class="mask__content">
    <h3 class="mask__content__title">确认要离开收银台？</h3>
    <p class="mask__content__desc">请尽快完成支付，否则将被取消</p>
    <div class="mask__content_btns">
      <div
        class="mask__content__btn mask__content__btn--first"
        @click="handleCancleOrder"
      >
        取消订单
      </div>
      <div
        class="mask__content__btn mask__content__btn--last"
        @click="handleConfirmOrder"
      >
        确认支付
      </div>
    </div>
  </div>
</div>
  <div class="cart">
    <div class="check">
      <div class="check__info">
        实付金额<span class="check__info__price">&yen;<b>{{price}}</b></span>
      </div>
      <div class="check__btn">
        <router-link :to="{path: `/shop`}">
          提交订单
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { post } from '../../utils/request'
import { useCommonCartEffect } from '../../effect/commonCartEffect'

const orderEffect = (shopId) => {
  const { shopName, productList } = useCommonCartEffect(shopId)
  const handleCancleOrder = () => {
    console.log(777)
  }
  const handleConfirmOrder = async () => {
    const products = []
    for (const i in productList.value) {
      products.push({
        id: productList.value[i]._id,
        num: productList.value[i].count
      })
    }
    try {
      const result = await post('/api/order', {
        addressId: 1,
        shopId,
        shopName: shopName.value,
        isCanceled: false,
        products: products
      })
      if (result?.errno === 0) {
        console.log('提交成功')
      }
    } catch (e) {
      console.log(2323)
    }
  }
  return { handleCancleOrder, handleConfirmOrder }
}
export default {
  name: 'Order',
  props: ['price', 'shopId'],
  setup (props) {
    console.log(props)
    const { handleCancleOrder, handleConfirmOrder } = orderEffect(props.shopId)
    return { handleCancleOrder, handleConfirmOrder }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../shop/shop.scss';
.mask{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: $content-inputPlaceholder;
  z-index: 3;
  &__content {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 3rem;
    height: 1.56rem;
    background: $bgColor;
    border-radius: .04rem;
    text-align: center;
    &__title{
      margin: .24rem 0 0 0;
      line-height: .26rem;
      font-size: .18rem;
      color: $content-fontcolor;
    }
    &__desc{
      font-size: .14rem;
      color: $medium-fontColor;
    }
    &_btns{
      display: flex;
      margin: .24rem .58rem;
    }
    &__btn{
      flex: 1;
      width: .8rem;
      height: .32rem;
      line-height: .32rem;
      text-align: center;
      border-radius: .16rem;
      border: 1px solid #4FB0F9;
      font-size: .14rem;
      &--first{
        margin-right: .24rem;
        color: #4FB0F9;
      }
      &--last{
        color: $bgColor;
        background: #4FB0F9;
      }
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
