<template>
  <div class="position">
    <span class="iconfont positon__icon">&#xe648;</span>
    北京理工大学国防科技园2号楼10层
    <span class="iconfont positon__notice">&#xe630;</span>
  </div>
  <div class="search">
    <span class="iconfont">&#xe69a;</span>
    <span class="search__text">山姆会员商店优惠商品</span>
  </div>
  <div class="banner">
    <img class="banner__img" src="http://www.dell-lee.com/imgs/vue3/banner.jpg" alt=""/>
  </div>
  <div class="icons">
    <div
      class="icons__item"
      v-for="(item, index) in iconsList"
      :key="index"
    >
      <img
        class="icons__item__img"
        :src="`http://www.dell-lee.com/imgs/vue3/${item.imgName}.png`"
      />
      <p class="icons__item__desc">{{ item.desc }}</p>
    </div>
  </div>
  <div class="gap"></div>
</template>

<script>
export default {
  name: 'StaticPart',
  setup () {
    const iconsList = [{
      imgName: '超市',
      desc: '超市便利'
    }, {
      imgName: '菜市场',
      desc: '菜市场'
    }, {
      imgName: '水果店',
      desc: '水果店'
    }, {
      imgName: '鲜花',
      desc: '鲜花绿植'
    }, {
      imgName: '医药健康',
      desc: '医药健康'
    }, {
      imgName: '家居',
      desc: '家居时尚'
    }, {
      imgName: '蛋糕',
      desc: '烘培蛋糕'
    }, {
      imgName: '签到',
      desc: '签到'
    }, {
      imgName: '大牌免运',
      desc: '大牌免运'
    }, {
      imgName: '红包',
      desc: '红包套餐'
    }]
    return { iconsList }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.position{
  position: relative;
  padding: .16rem .24rem .16rem 0;
  line-height: .22rem;
  font-size: .16rem;
  @include ellipsis;
  color: $content-fontcolor;
  .positon__icon{
    font-size: .18rem;
  }
  .positon__notice{
    position: absolute;
    font-size: .2rem;
    right: 0;
    top: .17rem;
  }
}
.search{
  margin-bottom: .12rem;
  line-height: .32rem;
  background: $search-bgColor;
  color: $search-contentColor;
  border-radius: .16rem;
  .iconfont{
    position: relative;
    top: .02rem;
    display: inline-block;
    font-size: .2rem;
    padding: 0 .08rem 0 .16rem;
  }
  &__text{
    display: inline-block;
    font-size: .14rem;
  }
}
.banner{
  height: 0;
  overflow: hidden;
  padding-bottom: 25.4%;
  &__img{
    width: 100%;
  }
}
.icons{
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  margin-top: .16rem;
  &__item{
    width: 20%;
    &__img{
      width: .4rem;
      height: .4rem;
      display: block;
      margin: 0 auto
    }
    &__desc {
      margin: .06rem 0 .16rem 0;
      color: $content-fontcolor;
    }
  }
}
.gap{
  height: .1rem;
  background: $content-bgColor;
  margin: 0 -.18rem;
}
</style>
