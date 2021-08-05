<template>
  <div class="content">
    <div class="category">
      <div
        :class="{'category__item' : true, 'category__item--active': currentTab === item.tab }"
        v-for="(item, index) in categoryItem"
        :key="index"
        @click="() => {handleTabClick(item.tab)}"
      >
        {{item.name}}
      </div>
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
          <span
            v-if="cartList?.[shopId]?.productList?.[item._id]?.count > 0"
            class="product__number__minus"
            @click="() => { changeCartItem(shopId, item._id, item, -1, shopName) }"
          >-</span>
          {{ cartList?.[shopId]?.productList?.[item._id]?.count || 0 }}
          <span
            :class="{'product__number__plus': true, 'product__number__plus--dis': item.count >= item.sales}"
            @click="() => { changeCartItem(shopId, item._id, item, 1, shopName) }"
          >+</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, toRefs, ref, watchEffect } from 'vue'
import { useCommonCartEffect } from './commonCartEffect'
import { useRoute } from 'vue-router'
import { get } from '../../utils/request'

const categoryItem = [
  { name: '全部商品', tab: 'all' },
  { name: '秒杀', tab: 'seckill' },
  { name: '新鲜水果', tab: 'fruit' },
  { name: '休闲食品', tab: 'snacks' },
  { name: '时令蔬菜', tab: 'vegetables' },
  { name: '肉蛋家禽', tab: 'egg' }
]

// 切换tab
const useTabEffect = () => {
  const currentTab = ref(categoryItem[0].tab)
  const handleTabClick = (tab) => {
    currentTab.value = tab
  }
  return { currentTab, handleTabClick }
}

// 列表相关的数据逻辑
const useShopListEffect = (currentTab, shopId) => {
  const data = reactive({ contentList: [] })
  const getProductListData = async () => {
    const result = await get(`/api/shop/${shopId}/products`, { tab: currentTab.value })
    if (result?.errno === 0 && result?.data?.length) {
      data.contentList = result.data
    }
  }
  watchEffect(() => {
    getProductListData()
  })
  const { contentList } = toRefs(data)
  return { getProductListData, contentList }
}

// 购物车相关逻辑
const useCartEffect = () => {
  const { changeCartItemInfo, cartList, changeShopName } = useCommonCartEffect()
  const changeCartItem = (shopId, productId, item, num, shopName) => {
    changeCartItemInfo(shopId, productId, item, num)
    changeShopName(shopId, shopName)
  }
  return { cartList, changeCartItem }
}

export default {
  name: 'Content',
  props: ['shopName'],
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const { currentTab, handleTabClick } = useTabEffect()
    const { contentList } = useShopListEffect(currentTab, shopId)
    const { cartList, changeCartItem } = useCartEffect()
    return {
      shopId,
      currentTab,
      handleTabClick,
      contentList,
      categoryItem,
      cartList,
      changeCartItem
    }
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
</style>
