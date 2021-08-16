<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
    <a class="navbar-brand" href="#">者也专栏</a>
    <ul v-if="!user.isLogin" class="list-inline mb-0">
      <li class="list-inline-item">
        <a href="#" class="btn btn-outline-light my-2">登录</a>
        <a href="#" class="btn btn-outline-light my-2">注册</a>
      </li>
    </ul>
    <ul v-if="user.isLogin" class="list-inline mb-0">
      <li class="list-inline-item">
        <Dropdown :title="`你好，${ user.name }`">
          <DropdownItem><a class="dropdown-item" href="#">新建文章</a></DropdownItem>
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
