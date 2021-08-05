<template>
  <div class="wrapper">
    <div class="search">
      <div class="search__back iconfont" @click="handleBack">&#xe606;</div>
      <div class="search__content">
        <span class="search__content__icon iconfont">&#xe69a;</span>
        <input class="search__content__input" type="text" placeholder="请输入商品名称搜索">
      </div>
    </div>
    <ShopInfo
      :item="item"
      :isHideBoder="true"
      v-show="item.imgUrl"
    />
    <Content :shopName="item.name"/>
    <Cart/>
  </div>
</template>
<script>
import { useRouter, useRoute } from 'vue-router'
import { reactive, toRefs } from 'vue'
import { get } from '../../utils/request'
import ShopInfo from '../../components/ShopInfo.vue'
import Content from './Content.vue'
import Cart from './Cart.vue'

// 点击回退逻辑
const useBackEffect = () => {
  const router = useRouter()
  const handleBack = () => {
    router.push('/')
  }
  return { handleBack }
}

// 获取item代码
const useShopInfoEffect = () => {
  const data = reactive({ item: {} })
  const route = useRoute()
  const getItemData = async () => {
    const result = await get(`/api/shop/${route.params.id}`)
    if (result?.errno === 0 && result?.data) {
      data.item = result.data
    }
  }
  const { item } = toRefs(data)
  return { getItemData, item }
}
export default {
  name: 'Shop',
  components: { ShopInfo, Content, Cart },
  setup () {
    const { getItemData, item } = useShopInfoEffect()
    const { handleBack } = useBackEffect()
    getItemData()
    return { item, handleBack }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/viriables.scss';
.wrapper {
  padding: 0 .16rem;
  .search{
    display: flex;
    margin: .14rem 0 .04rem 0;
    line-height: .32rem;
    &__back{
      width: .3rem;
      font-size: .2rem;
      color: #B6B6B6;
    }
    &__content{
      display: flex;
      flex: 1;
      background: $search-bgColor;
      border-radius: .16rem;
      &__icon{
        width: .44rem;
        line-height: .32rem;
        text-align: center;
        color: $search-contentColor;
      }
      &__input {
        display: block;
        width: 100%;
        padding-right:.2rem;
        border: none;
        outline: none;
        background: none;
        height: .32rem;
        color: $content-fontcolor;
        font-size: .14rem;
        &::placeholder {
          color: $content-fontcolor;
        }
      }
    }
  }
}
</style>
