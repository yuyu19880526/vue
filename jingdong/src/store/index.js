import { createStore } from 'vuex'

export default createStore({
  state: {
    cartList: {
      // {
      //   shopId: '',
      //   prodoctId: {
      //     _id: 1,
      //     name: '番茄250g/份',
      //     imgUrl: 'http://www.dell-lee.com/imgs/vue3/tomato.png',
      //     sales: 10,
      //     price: 23.6,
      //     oldPrice: 39.6
      //   }
      // }
    }
  },
  mutations: {
    changeCartItemInfo (state, payload) {
      const { shopId, productId, productInfo, number } = payload
      let shopInfo = state.cartList[shopId]
      if (!shopInfo) { shopInfo = {} }
      let product = shopInfo[productId]
      if (!product) {
        product = productInfo
        product.count = 0
      }
      product.count += number
      product.check = true
      if (product.count < 0) { product.count = 0 }
      if (product.count > productInfo.sales) { product.count = productInfo.sales }
      shopInfo[productId] = product
      state.cartList[shopId] = shopInfo
    },
    changeCartItemChecked (state, payload) {
      const { shopId, productId } = payload
      const product = state.cartList[shopId][productId]
      product.check = !product.check
    },
    cleanCartProduct (state, payload) {
      const { shopId } = payload
      state.cartList[shopId] = {}
    },
    setCartItemCheck (state, payload) {
      const { shopId } = payload
      const productList = state.cartList[shopId]
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
