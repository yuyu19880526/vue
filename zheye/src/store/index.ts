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
console.log(localStorage)
export default createStore<storeProps>({
  state: {
    columnList: testData,
    postList: testPosts,
    user: (localStorage.user && JSON.parse(localStorage.user)) || { isLogin: false }
  },
  mutations: {
    login (state, payload) {
      state.user = { ...state.user, isLogin: true, name: payload.name, id: payload.id }
      localStorage.setItem('user', JSON.stringify(state.user))
    },
    createPost (state, payload) {
      state.postList.push(payload)
    },
    logout (state) {
      state.user = {
        isLogin: false,
        name: '',
        id: undefined
      }
      localStorage.removeItem('user')
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getColumnById: (state) => (id: number) => {
      return state.columnList.find(c => c.id === id)
    },
    getPostById: (state) => (cid: number) => {
      return state.postList.filter(c => c.columnId === cid)
    }
  }
})
