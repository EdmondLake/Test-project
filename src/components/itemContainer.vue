<template>
  <section>
    <header class="top-tips">
      <span class="num-tip" v-if="fatherComponent === 'Home'">
        第一周
      </span>
      <span class="num-tip" v-if="fatherComponent === 'Item'">
        题目1
      </span>
    </header>
    <!--home-->
    <div v-if="fatherComponent === 'Home'">
      <div class="home-logo item-container-style"></div>
      <router-link to="Item" class="start button-style"></router-link>
    </div>
    <!--item-->
    <div v-if="fatherComponent === 'Item'">
      <div class="item-back item-container-style">
        <div class="item-list-container">
          <header class="item-title">题目一</header>
          <ul>
            <li class="item-list">
              <span class="option-style">A</span>
              <span class="option-detail">答案A</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'itemContainer',
  props: ['fatherComponent']
}
</script>

<style lang="stylus" scoped>
  /*云朵背景样式*/
  .top-tips
    position: absolute
    height: 7.35rem
    width: 3.25rem
    top: -1.3rem
    right: 1.6rem
    background: url(../images/WechatIMG2.png) no-repeat
    -webkit-background-size: 100% 100%
    background-size: 100% 100%
    z-index: 99
    /*题目序号样式*/
    .num-tip
      position: absolute
      left: .48rem
      bottom: 1.1rem
      height: .7rem
      width: 2.5rem
      font-size: .6rem
      font-family: 'SimHei'
      font-weight: 600
      color: #a57c50
      text-align: center
  /*题目框和首页logo框样式*/
  .item-container-style
    height: 11.625rem
    width: 13.15rem
    position: absolute
    top: 4.1rem
    left: 1rem
  /*首页logo*/
  .home-logo
    background-image: url(../images/1-2.png)
    -webkit-background-size: 13.142rem 100%
    background-size: 13.142rem 100%
  /*题目logo*/
  .item-back
    background-image: url(../images/2-1.png)
    -webkit-background-size: 100% 100%
    background-size: 100% 100%
  /*公用按钮样式*/
  .button-style
    display: block
    height: 2.1rem
    width: 4.35rem
    -webkit-background-size: 100% 100%
    background-size: 100% 100%
    position: absolute
    top: 16.5rem
    left: 50%
    margin-left: -2.4rem
    background-repeat:no-repeat
/*首页开始按钮样式*/
  .start
    background-image: url(../images/1-4.png)
  //下一题按钮
  .next-item
    background-image: url(../images/2-2.png)
    //提交按钮
  .submit-item
    background-image: url(../images/3-1.png)
    //题目内容框
  .item-list-container
    position: absolute
    height: 7rem
    width: 8rem
    top: 2.4rem
    left: 3rem
    //对字体进行抗锯齿渲染
    -webkit-font-smoothing: antialiased
    .item-title
      font-size: .65rem
      color: #fff
      line-height: .7rem
    .item-list
      font-size: 0
      margin-top: .4rem
      width: 10rem
      span
        display: inline-block
        font-size: .6rem
        color: #fff
        vertical-align: middle
        //选项样式
      .option-style
        height: .725rem
        width: .725rem
        border: 1px solid #fff
        border-radius: 50%
        line-height:.725rem
        text-align: center
        margin-right: .3rem
        font-size: .5rem
        font-family: 'Arial'
        //选中样式
      .has-choosed
        background-color: #ffd400
        color: #575757
        border-color: #ffd400
        //选项文字
      .option-detail
        width: 7.5rem
        padding-top: .11rem
</style>
