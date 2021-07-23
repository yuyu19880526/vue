<template>
  <div class="shop__item">
    <img :src="item.imgUrl" class="shop__item__img">
    <div class="shop__content">
      <div class="shop__content__title">{{ item.name }}</div>
      <div class="shop__content__tags">
        <span class="shop__content__tag" >月销{{ item.sales }}</span>
        <span class="shop__content__tag" >起送{{ item.expressLimit }}</span>
        <span class="shop__content__tag" >基础运费{{ item.expressPrice }}</span>
      </div>
      <div class="shop__content__highlight">{{ item.slogan }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ShopInfo',
  props: ['item']
}
</script>
<style lang="scss" scoped>
@import '../style/viriables.scss';
.shop{
  &__item{
    display: flex;
    padding-top: .12rem;
    &__img{
      width: .56rem;
      height: .56rem;
      margin-right: .16rem;
    }
  }
  &__content{
    flex: 1;
    padding-bottom: .12rem;
    border-bottom: 1px solid $content-bgColor;
    &__title{
      line-height: .22rem;
      font-size: .16rem;
      color: $content-fontcolor;
    }
    &__tags{
      margin-top: .08rem;
      line-height: .18rem;
      font-size: .13rem;
      color: $content-fontcolor;
    }
    &__tag {
      margin-right: .16rem;
    }
    &__highlight{
      color: $content-highlignt;
      margin-top: .08rem;
      font-size: .13rem;
      line-height: .22rem;
      margin: 0;
    }
  }
}
</style>
