<template>
  <div class="product">
    <div class="product__title">{{shopName}}</div>
    <div class="product__wrapper">
      <div class="product__list">
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
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProductList',
  props: ['shopName', 'productList']
}
</script>
<style lang="scss" scoped>
@import '../style/viriables.scss';
@import '../views/shop/shop.scss';
.product {
  margin: .16rem .18rem .1rem .18rem;
  background: $bgColor;
  border-radius: .04rem;
  &__title {
    padding: .16rem;
    font-size: .16rem;
    color: $content-fontcolor;
  }
  &__list {
    background: $bgColor;
  }
  &__item {
    position: relative;
    display: flex;
    padding: 0 .16rem 0.16rem .16rem;
    &__img {
      width: .46rem;
      height: .46rem;
      margin-right: .16rem;
    }
    &__detail {
      flex: 1;
    }
    &__title {
      margin: 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $content-fontcolor;
      @include ellipsis;
    }
    &__price {
      display: flex;
      margin: .06rem 0 0 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $content-highlignt;
    }
    &__total {
      flex: 1;
      text-align: right;
      color: $content-fontcolor;
    }
    &__yen {
      font-size: .12rem;
    }
  }
}
</style>
