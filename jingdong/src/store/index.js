import { createStore } from 'vuex'

export default createStore({
  state: {
    // {shopId: {shopName: '', productList: {}}}
    cartList: {}
  },
  mutations: {
    changeCartItemInfo (state, payload) {
      const { shopId, productId, productInfo, number } = payload
      let shopInfo = state.cartList[shopId]
      if (!shopInfo) {
        shopInfo = {
          shopName: '',
          productList: {}
        }
      }
      let product = shopInfo.productList[productId]
      if (!product) {
        productInfo.count = 0
        product = productInfo
      }
      product.count += number
      product.check = true
      if (product.count < 0) { product.count = 0 }
      if (product.count > productInfo.sales) { product.count = productInfo.sales }
      shopInfo.productList[productId] = product
      state.cartList[shopId] = shopInfo
    },
    changeShopName (state, payload) {
      const { shopId, shopName } = payload
      const shopInfo = state.cartList[shopId] || {
        shopName: '', productList: {}
      }
      shopInfo.shopName = shopName
      state.cartList[shopId] = shopInfo
    },
    changeCartItemChecked (state, payload) {
      const { shopId, productId } = payload
      const product = state.cartList[shopId].productList[productId]
      product.check = !product.check
    },
    cleanCartProduct (state, payload) {
      const { shopId } = payload
      state.cartList[shopId] = {
        shopName: '',
        productList: {}
      }
    },
    setCartItemCheck (state, payload) {
      const { shopId } = payload
      const productList = state.cartList[shopId].productList
      for (const i in productList) {
        productList[i].check = true
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
