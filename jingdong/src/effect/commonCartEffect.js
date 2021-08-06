import { computed } from 'vue'
import { useStore } from 'vuex'

// 购物车相关逻辑
export const useCommonCartEffect = (shopId) => {
  const store = useStore()
  const cartList = store.state.cartList
  const changeCartItemInfo = (shopId, productId, productInfo, number) => {
    store.commit('changeCartItemInfo', { shopId, productId, productInfo, number })
  }
  const changeShopName = (shopId, shopName) => {
    store.commit('changeShopName', { shopId, shopName })
  }
  // 获取product
  const productList = computed(() => {
    const productList = cartList?.[shopId]?.productList || []
    return productList
  })

  // 获取shopName
  const shopName = computed(() => {
    const shopName = cartList[shopId]?.shopName || ''
    return shopName
  })

  const computedCart = computed(() => {
    const result = {
      total: 0,
      price: 0,
      isAllchecked: true
    }
    const productList = cartList?.[shopId]?.productList || []
    if (productList) {
      for (const i in productList) {
        const product = productList[i]
        result.total += product.count
        result.price += product.count * product.price
        if (product.count > 0 && !product.check) {
          result.isAllchecked = false
        }
      }
    }
    result.price = result.price.toFixed(2)
    return result
  })
  return { changeCartItemInfo, cartList, changeShopName, productList, shopName, computedCart }
}
