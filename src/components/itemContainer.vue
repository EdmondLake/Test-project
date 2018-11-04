<template>
  <section>
    <header class="top-tips">
      <span class="num-tip" v-if="fatherComponent === 'Home'">
        {{level}}
      </span>
      <span class="num-tip" v-if="fatherComponent === 'Item'">
        题目{{itemNum}}
      </span>
    </header>
    <!--home-->
    <div v-if="fatherComponent === 'Home'">
      <div class="home-logo item-container-style"></div>
      <router-link to="Item" class="start button-style"></router-link>
    </div>
    <!--item题目页面-->
    <div v-if="fatherComponent === 'Item'">
      <!--题目页详情-->
      <div class="item-back item-container-style">
        <div class="item-list-container" v-if="itemDetail.length > 0">
          <header class="item-title">{{itemDetail[itemNum-1].topic_name}}</header>
          <ul>
            <li
              class="item-list"
              v-for="(item, index) in itemDetail[itemNum-1].topic_answer"
              :key="index"
              @click="choosed(index, item.topic_answer_id)"
            >
              <span
                class="option-style"
                :class="{'has-choosed':choosedNum===index}"
              >
                {{chooseType(index)}}
              </span>
              <span class="option-detail">{{item.answer_name}}</span>
            </li>
          </ul>
        </div>
      </div>
      <!--下一题按钮-->
      <span class="next-item button-style" @click="nextItem" v-if="itemNum<itemDetail.length"></span>
      <!--提交按钮-->
      <span class="submit-item button-style" @click="submitAnswer" v-else></span>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'itemContainer',
  props: ['fatherComponent'],
  data () {
    return {
      // 题目id
      itemId: null,
      // 选中的答案的索引
      choosedNum: null,
      // 选中答案id
      choosedId: null
    }
  },
  computed: mapState([
    // 第几题
    'itemNum',
    // 第几周
    'level',
    // 题目详情
    'itemDetail',
    // 计时器
    'timer'
  ]),
  methods: {
    ...mapActions([
      'addNum', 'initializeData'
    ]),
    // 点击下一题
    nextItem () {
      if (this.choosedNum !== null) {
        this.choosedNum = null
        // 保存答案，题目索引加一，跳到下一题
        this.addNum(this.choosedId)
      } else {
        alert('您还没有选择答案哦')
      }
    },
    // 索引0-3对应答案A-D
    chooseType: type => {
      switch (type) {
        case 0:
          return 'A'
        case 1:
          return 'B'
        case 2:
          return 'C'
        case 3:
          return 'D'
      }
    },
    // 选中的答案信息
    // type：选中的答案索引
    // id：选中的答案选项的id
    choosed (type, id) {
      this.choosedNum = type
      this.choosedId = id
    },
    // 最后一题，提交，清空定时器，跳转到分数页面
    submitAnswer () {
      if (this.choosedNum !== null) {
        this.addNum(this.choosedId)
        clearInterval(this.timer)
        this.$router.push('score')
      } else {
        alert('你还没有选择答案哦')
      }
    }
  },
  created () {
    // 初始化信息
    if (this.fatherComponent === 'home') {
      this.initializeData()
      document.body.style.backgroundImage = 'url(../images/1-1.png)'
    }
  }
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
      margin-bottom: .5rem
    .item-list
      font-size: 0
      margin-top: .4rem
      width: 10rem
      line-height: .725rem
      margin-bottom: .5rem
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
</style>
