<template>
  <div class="cart">
    <div class="check">
      <div class="check__icon">
        <img class="check__icon__img" src="http://www.dell-lee.com/imgs/vue3/basket.png" alt="">
        <div class="check__icon__tag">1</div>
      </div>
      <div class="check__info">
        总计：<span class="check__info__price">&yen;128</span>
      </div>
      <div class="check__btn">去结算</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Cart'
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
      right: .2rem;
      top: .04rem;
      text-align: center;
      line-height: .2rem;
      width: .2rem;
      height: .2rem;
      font-size: .16rem;
      color: $bgColor;
      background: $content-highlignt;
      border-radius: 50%;
      transform: scale(50%,50%);
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
