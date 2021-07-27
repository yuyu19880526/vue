<template>
  <div class="content">
    <div class="category">
      <div class="category__item category__item--active">全部商品</div>
      <div class="category__item">秒杀</div>
      <div class="category__item">新鲜水果</div>
      <div class="category__item">休闲食品</div>
      <div class="category__item">时令蔬菜</div>
      <div class="category__item">肉蛋家禽</div>
    </div>
    <div class="product">
      <div
        class="product__item"
        v-for="item in contentList"
        :key="item._id"
      >
        <img class="product__item__img" :src="item.imgUrl" alt="">
        <div class="product__item__detail">
          <h4 class="product__item__title">{{item.name}}</h4>
          <p class="product__item__sales">月售{{item.sales}}件</p>
          <p class="product__item__price">
            <span class="product__item__yen">&yen;</span>{{item.price}}
            <span class="product__item__origin">{{item.oldPrice}}</span>
          </p>
        </div>
        <div class="product__number">
          <span class="product__number__minus">-</span>
          0
          <span class="product__number__plus">+</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
import { useRoute } from 'vue-router'
import { get } from '../../utils/request'
const useShopListEffect = () => {
  const route = useRoute()
  const data = reactive({ contentList: [] })
  const getProductListData = async (tab) => {
    const result = await get(`/api/shop/${route.params.id}/products`, { tab })
    if (result?.errno === 0 && result?.data?.length) {
      data.contentList = result.data
    }
  }
  const { contentList } = toRefs(data)
  return { getProductListData, contentList }
}
export default {
  name: 'Content',
  setup () {
    const { getProductListData, contentList } = useShopListEffect()
    getProductListData('all')
    return { contentList }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';

.content{
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 1.5rem;
  bottom: .5rem;
  .category {
    overflow-y: scroll;
    height: 100%;
    width: .76rem;
    background: $search-bgColor;
    &__item{
      line-height: .4rem;
      text-align: center;
      font-size: .14rem;
      color: $content-fontcolor;
      &--active{
        background: $bgColor;
      }
    }
  }
  .product{
    flex: 1;
    overflow-y: scroll;
    &__item{
      position: relative;
      display: flex;
      padding: .12rem 0;
      margin: 0 .16rem;
      border-bottom: .01rem solid $content-bgColor;
      &__detail{
        overflow: hidden;
      }
      &__img{
        width: .68rem;
        height: .68rem;
        margin-right: .16rem;
      }
      &__title{
        margin: 0;
        font-size: .14rem;
        line-height: .2rem;
        color: $content-fontcolor;
        @include ellipsis;
      }
      &__sales{
        margin: .06rem 0;
        font-size: .12rem;
        line-height: .16rem;
      }
      &__price{
        line-height: .2rem;
        font-size: .14rem;
        margin: 0;
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
      &__minus, &__plus {
        display: inline-block;
        width: .2rem;
        height: .2rem;
        line-height: .16rem;
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
        color: $bgColor;
        margin-left: .05rem;
      }
    }
  }
}
</style>
