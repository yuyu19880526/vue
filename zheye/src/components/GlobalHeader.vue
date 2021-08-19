<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
    <router-link class="navbar-brand" to="/">者也专栏</router-link>
    <ul v-if="!user.isLogin" class="list-inline mb-0">
      <li class="list-inline-item">
        <router-link to="/login">
          <button class="btn btn-outline-light">登录</button>
        </router-link>
        <router-link to="/login">
          <button class="btn btn-outline-light mx-2">注册</button>
        </router-link>
      </li>
    </ul>
    <ul v-if="user.isLogin" class="list-inline mb-0">
      <li class="list-inline-item">
        <Dropdown :title="`你好，${ user.name }`">
          <DropdownItem><router-link class="dropdown-item" to="/create">新建文章</router-link></DropdownItem>
          <DropdownItem disabled><a class="dropdown-item" href="#">管理账户</a></DropdownItem>
          <DropdownItem><a class="dropdown-item" href="#">退出登录</a></DropdownItem>
        </Dropdown>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Dropdown from './Dropdown.vue'
import DropdownItem from './DropdownItem.vue'

export interface UseProps {
  isLogin: boolean;
  name?: string;
  id?: number;
}

export default defineComponent({
  name: 'GlobalHeader',
  props: {
    user: {
      type: Object as PropType<UseProps>,
      require: true
    }
  },
  components: {
    Dropdown,
    DropdownItem
  }
})
</script>
