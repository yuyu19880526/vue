<template>
  <div class="docker">
    <div
    v-for="(item, index) in dockerList"
    :key="index"
    :class="{'docker__item': true, 'docker__item--active': index === 0}"
  >
      <div class="iconfont" v-html="item.icon" />
      <div class="docker__title">{{ item.title }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Docker',
  setup () {
    const dockerList = [{
      icon: '&#xe64e',
      title: '首页'
    }, {
      icon: '&#xe607',
      title: '购物车'
    }, {
      icon: '&#xe608',
      title: '订单'
    }, {
      icon: '&#xe660',
      title: '我的'
    }]
    return { dockerList }
  }
}
</script>
<style lang="scss">
@import '../../style/viriables.scss';
.docker{
  display: flex;
  position: absolute;
  padding: 0 .18rem;
  color: $content-fontcolor;
  box-sizing: border-box;
  left: 0;
  bottom: 0;
  width: 100%;
  height: .49rem;
  border-top: 1px solid $content-bgColor;
  &__item{
    flex: 1;
    text-align: center;
    .iconfont{
      font-size: .18rem;
      margin: .07rem 0 .02rem 0;
    }
    &--active{
      color:#1FA4FC;
    }
  }
  &__title{
    font-size: 20px;
    transform: scale(0.5, 0.5);
    transform-origin: center top;
  }
}
</style>
