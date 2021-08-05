import { useStore } from 'vuex'

// 购物车相关逻辑
export const useCommonCartEffect = () => {
  const store = useStore()
  const cartList = store.state.cartList
  const changeCartItemInfo = (shopId, productId, productInfo, number) => {
    store.commit('changeCartItemInfo', { shopId, productId, productInfo, number })
  }
  const changeShopName = (shopId, shopName) => {
    store.commit('changeShopName', { shopId, shopName })
  }
  return { changeCartItemInfo, cartList, changeShopName }
}
