<template>
  <div class="docker">
    <div
    v-for="(item, index) in dockerList"
    :key="index"
    :class="{'docker__item': true, 'docker__item--active': index === 0}"
  >
      <router-link :to="item.to">
        <div class="iconfont" v-html="item.icon" />
        <div class="docker__title">{{ item.title }}</div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Docker',
  setup () {
    const dockerList = [
      { icon: '&#xe64e', title: '首页', to: { name: 'Home' } },
      { icon: '&#xe607', title: '购物车', to: { name: 'CartList' } },
      { icon: '&#xe608', title: '订单', to: { name: 'Home' } },
      { icon: '&#xe660', title: '我的', to: { name: 'Home' } }
    ]
    return { dockerList }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/viriables.scss';
.docker{
  display: flex;
  position: absolute;
  padding: 0 .18rem;
  box-sizing: border-box;
  left: 0;
  bottom: 0;
  width: 100%;
  height: .49rem;
  border-top: 1px solid $content-bgColor;
  &__item{
    flex: 1;
    text-align: center;
    a{
      color: $content-fontcolor;
      text-decoration: none;
    }
    .iconfont{
      font-size: .18rem;
      margin: .07rem 0 .02rem 0;
    }
    &--active{
      a{
        color:#1FA4FC;
      }
    }
  }
  &__title{
    font-size: 20px;
    transform: scale(0.5, 0.5);
    transform-origin: center top;
  }
}
</style>
