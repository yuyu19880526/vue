<template>
  <div class="wrapper">
    <div class="top">
      <div class="top__header">
        <div class="iconfont top__header__back">&#xe606;</div>
        确认订单
      </div>
      <div class="top__receiver">
        <div class="top__receiver__title">收货地址</div>
        <div class="top__receiver__arddress">北京理工大学国防科技园2号楼10层</div>
        <div class="top__receiver__info">
          <span class="top__receiver__info__name">瑶妹（先生）</span>
          <span class="top__receiver__info__tel">18911024266</span>
        </div>
        <div class="iconfont top__receiver__enter">&#xe606;</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'OrderComfirmation'
}
</script>
<style lang="scss" scoped>
@import '../../style/viriables.scss';
.wrapper{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: $search-bgColor;
}
.top{
  position: relative;
  height: 1.96rem;
  background-size: 100% 1.59rem;
  background-image: linear-gradient(0deg, rgba(0,145,255,0.00) 4%, #0091FF 50%);
  background-repeat: no-repeat;
  &__header{
    padding-top: .26rem;
    line-height: .24rem;
    color: $bgColor;
    text-align: center;
    font-size: .16rem;
    &__back{
      position: absolute;
      left: .18rem;
      font-size: .22rem;
    }
  }
  &__receiver{
    position: absolute;
    left: .18rem;
    right: .18rem;
    bottom: 0;
    height: 1.11rem;
    background: $bgColor;
    border-radius: .04rem;
    padding: .16rem;
    box-sizing: border-box;
    color: $content-fontcolor;
    &__title{
      line-height: .22rem;
      font-size: .16rem;
      margin-bottom: .14rem;
    }
    &__arddress{
      font-size: .14rem;
      line-height: .2rem;
      margin-bottom: .06rem;
    }
    &__info{
      color: $medium-fontColor;
      font-size: .12rem;
      line-height: .17rem;
      &__name{
        margin-right: .06rem;
      }
    }
  }
}
</style>
