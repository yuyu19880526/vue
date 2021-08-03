import { useStore } from 'vuex'
import { toRefs } from 'vue'

// 购物车相关逻辑
export const useCommonCartEffect = () => {
  const store = useStore()
  const { cartList } = toRefs(store.state)
  const changeCartItemInfo = (shopId, productId, productInfo, number) => {
    store.commit('changeCartItemInfo', { shopId, productId, productInfo, number })
  }
  return { cartList, changeCartItemInfo }
}
