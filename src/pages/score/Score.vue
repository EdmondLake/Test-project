<template>
  <div>
    <div class="score-container">
      <header class="your-score">
        <span class="score-num">{{score}}</span>
        <span class="fenshu">分！</span>
      </header>
      <div class="result-tip">{{scoreTips}}</div>
    </div>
    <div class="share-button" @click="showCover"></div>
    <div class="follow-detail">
      <header class="follow-header">关注XXXX，获取答案</header>
      <img src="../../images/4-4.png" alt="" class="follow-img">
    </div>
    <div class="share-cover" v-show="showHide" @click="showCover">
      <img src="../../images/5-2.png" alt="" class="share-img">
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Score',
  data () {
    return {
      showHide: false, // 是否显示提示
      score: 0, // 分数
      scoreTips: '', // 分数评价
      rightAnswer: [2, 7, 12, 13, 20], // 正确答案id（topic_answer_id）
      scoreTipsArr: [
        '你说，你是不是把知识都还给小学老师了？',
        '还不错，但还需要继续加油哦',
        '不要得瑟还有进步的空间',
        '智商离爆表只差一步了',
        '你也太聪明了，葡萄之家欢迎你'
      ]
    }
  },
  computed: mapState(['answerid']),
  created () {
    this.computedScore()
    this.getScoreTip()
  },
  methods: {
    showCover () {
      this.showHide = !this.showHide
    },
    // 计算分数
    computedScore () {
      this.answerid.forEach((item, index) => {
        if (item === this.rightAnswer[index]) {
          this.score += 20
          // console.log(this.score)
        }
      })
    },
    getScoreTip () {
      let index = Math.ceil(this.score / 20) - 1
      this.scoreTips = this.scoreTipsArr[index]
    }
  }
}
</script>

<style lang="stylus">
  body
    background-image: url(../../images/4-1.jpg)
    padding-top: 1.2rem
</style>

<style lang="stylus" scoped>
  .score-container
    width: 9.7rem
    height: 9.1rem
    background: url(../../images/4-2.png) no-repeat
    -webkit-background-size: 100% 100%
    background-size: 100% 100%
    margin: 0 auto
    position: relative
    .your-score
      position: absolute
      width: 100%
      text-indent: 3.3rem
      top: 4.7rem
      font-size: 1.4rem
      font-weight: 900
      // 文字描边
      -webkit-text-stroke: .05rem #412318
      font-family: 'Microsoft Yahei'
      .score-num
        font-family: tohoma,Helvetica,Arial
        color: #a51d31
      .fenshu
        color: #a51d31
    .result-tip
      position: absolute
      top: 7rem
      left: .6rem
      width: 9rem
      text-align: center
      color: #3e2415
      font-size: .65rem
  .share-button
    width: 6.025rem
    height: 2.4rem
    margin: .8rem auto 0
    background: url(../../images/4-3.png) no-repeat .4rem 0
    -webkit-background-size: 5.825rem 100%
    background-size: 5.825rem 100%
  .follow-detail
    width: 5.3rem
    margin: 1.5rem auto 0
    .follow-header
      color: #664718
      font-size: .475rem
      font-family: "Microsoft YaHei"
      width: 7rem
      font-weight: 500
    .follow-img
      height: 5.3rem
      width: 5.3rem
      margin-top: .5rem
  .share-cover
    position: fixed
    bottom: 0
    right: 0
    top: 0
    left: 0
    background: rgba(0,0,0,0.8)
    .share-img
      height: 10.975rem
      width: 11.95rem
      position: fixed
      top: .5rem
      left: 50%
      margin-left: -5.975rem
</style>
