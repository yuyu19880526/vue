import { createStore } from 'vuex'
import { ColumnProps, PostProps, testData, testPosts } from '../api/testData'

interface userProps {
  isLogin: boolean;
  id?: number;
  name?: string;
}
interface storeProps {
  columnList: ColumnProps[];
  postList: PostProps[];
  user: userProps
}

export default createStore<storeProps>({
  state: {
    columnList: testData,
    postList: testPosts,
    user: {
      isLogin: false
    }
  },
  mutations: {
    login (state) {
      state.user = { ...state.user, isLogin: true, name: 'mm', id: 2 }
      console.log(state.user)
    }
  },
  actions: {
  },
  modules: {
  }
})
