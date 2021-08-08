import { createStore } from 'vuex'

const setLocalCartList = (state) => {
  const { cartList } = state
  const cartListString = JSON.stringify(cartList)
  localStorage.setItem('cartList', cartListString)
}

const getLocalCartList = () => {
  // {shopId: {shopName: '', productList: {}}}
  return JSON.parse(localStorage.getItem('cartList')) || {}
}

export default createStore({
  state: {
    cartList: getLocalCartList()
  },
  mutations: {
    changeCartItemInfo (state, payload) {
      console.log(777)
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
      console.log(state.cartList)
      state.cartList[shopId] = shopInfo
      setLocalCartList(state)
    },
    changeShopName (state, payload) {
      const { shopId, shopName } = payload
      const shopInfo = state.cartList[shopId] || {
        shopName: '', productList: {}
      }
      shopInfo.shopName = shopName
      state.cartList[shopId] = shopInfo
      setLocalCartList(state)
    },
    changeCartItemChecked (state, payload) {
      const { shopId, productId } = payload
      const product = state.cartList[shopId].productList[productId]
      product.check = !product.check
      setLocalCartList(state)
    },
    cleanCartProduct (state, payload) {
      const { shopId } = payload
      state.cartList[shopId] = {
        shopName: '',
        productList: {}
      }
      setLocalCartList(state)
    },
    setCartItemCheck (state, payload) {
      const { shopId } = payload
      const productList = state.cartList[shopId].productList
      for (const i in productList) {
        productList[i].check = true
      }
      setLocalCartList(state)
    },
    clearCartData (state, shopId) {
      // const { shopId } = payload
      state.cartList[shopId].productList = {}
    }
  },
  actions: {
  },
  modules: {
  }
})
