<template>
  <div class="wrapper">
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
      <div class="icons__item">
        <img
          class="icons__item__img"
          src="http://www.dell-lee.com/imgs/vue3/超市.png"
        />
        <p class="icons__item__desc">超市便利</p>
      </div>
      <div class="icons__item">
        <img
          class="icons__item__img"
          src="http://www.dell-lee.com/imgs/vue3/菜市场.png"
        />
        <p class="icons__item__desc">菜市场</p>
      </div>
      <div class="icons__item">
        <img
          class="icons__item__img"
          src="http://www.dell-lee.com/imgs/vue3/水果店.png"
        />
        <p class="icons__item__desc">水果店</p>
      </div>
      <div class="icons__item">
        <img
          class="icons__item__img"
          src="http://www.dell-lee.com/imgs/vue3/鲜花.png"
        />
        <p class="icons__item__desc">鲜花绿植</p>
      </div>
      <div class="icons__item">
        <img
          class="icons__item__img"
          src="http://www.dell-lee.com/imgs/vue3/医药健康.png"
        />
        <p class="icons__item__desc">医药健康</p>
      </div>
      <div class="icons__item">
        <img
          class="icons__item__img"
          src="http://www.dell-lee.com/imgs/vue3/家居.png"
        />
        <p class="icons__item__desc">家居时尚</p>
      </div>
      <div class="icons__item">
        <img
          class="icons__item__img"
          src="http://www.dell-lee.com/imgs/vue3/蛋糕.png"
        />
        <p class="icons__item__desc">烘培蛋糕</p>
      </div>
      <div class="icons__item">
        <img
          class="icons__item__img"
          src="http://www.dell-lee.com/imgs/vue3/签到.png"
        />
        <p class="icons__item__desc">签到</p>
      </div>
      <div class="icons__item">
        <img
          class="icons__item__img"
          src="http://www.dell-lee.com/imgs/vue3/大牌免运.png"
        />
        <p class="icons__item__desc">大牌免运</p>
      </div>
      <div class="icons__item">
        <img
          class="icons__item__img"
          src="http://www.dell-lee.com/imgs/vue3/红包.png"
        />
        <p class="icons__item__desc">红包套餐</p>
      </div>
    </div>
    <div class="gap"></div>
  </div>
  <div class="docker">
    <div class="docker__item docker__item--active">
      <div class="iconfont">&#xe64e;</div>
      <div class="docker__title">首页</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe607;</div>
      <div class="docker__title">购物车</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe608;</div>
      <div class="docker__title">订单</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe660;</div>
      <div class="docker__title">我的</div>
    </div>
  </div>
</template>

<style lang="scss">
@import './style/viriables.scss';
@import './style/mixins.scss';
.wrapper{
  position: absolute;
  left: 0;
  right: 0;
  bottom: .5rem;
  top: 0;
  padding: 0 .18rem;
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
    background: #f5f5f5;
    color: #b7b7b7;
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
}
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
