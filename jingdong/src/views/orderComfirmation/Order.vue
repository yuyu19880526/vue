<template>
  <div class="cart">
    <div class="check">
      <div class="check__info">
        实付金额<span class="check__info__price">&yen;<b>{{price}}</b></span>
      </div>
      <div class="check__btn">
        <router-link :to="{path: `/shop/${shopId}`}">
          提交订单
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Order',
  props: ['price', 'shopId']
}
</script>
<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../shop/shop.scss';
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
