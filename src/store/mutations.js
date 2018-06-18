// mutations中放的是一个个头部对state的修改，只有通过mutations，才能够改变公用数据的值
const AddItemNum = 'AddItemNum'
const RemberAnswer = 'RemberAnswer'
const RemberTime = 'RemberTime'
const InitializeData = 'InitializeData'

export default {
  // 点击进入下一题
  [AddItemNum] (state) {
    state.itemNum += 1
  },
  // 记录答案
  [RemberAnswer] (state, id) {
    state.answerid.push(id)
  },
  // 记录做题时间
  [RemberTime] (state) {
    state.timer = setInterval(() => {
      state.allTime++
    }, 1000)
  },
  // 初始化信息
  [InitializeData] (state) {
    state.itemNum = 1
    state.allTime = 0
    state.answerid = []
  }
}
