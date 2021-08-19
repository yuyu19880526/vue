import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */'../views/Login.vue'),
    beforeEnter (to, from, next) {
      const isLogin = localStorage && localStorage.user
      isLogin ? next({ name: 'Home' }) : next()
    }
  },
  {
    path: '/column-detail/:id',
    name: 'ColumnDetail',
    component: () => import(/* webpackChunkName: "column-detail" */'../views/ColumnDetail.vue')
  },
  {
    path: '/create',
    name: 'CreatePost',
    component: () => import(/* webpackChunkName: "create" */'../views/CreatePost.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isLogin = localStorage && localStorage.user
  const { name } = to
  const isLoginOrisRegister = (name === 'Login' || name === 'Register');
  (isLogin || isLoginOrisRegister) ? next() : next({ name: 'Login' })
})

export default router
