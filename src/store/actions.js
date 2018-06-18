// 异步操作放在actions中，组件先调用actions，actions紧接着去调用mutations
// import ajax from '../assets/js/ajax'

export default {
  addNum ({ commit, state }, id) {
    // 点击下一题，记录答案id，判断是否是最后一题，如果不是则跳转下一题
    commit('RemberAnswer', id)
    if (state.itemNum < state.itemDetail.length) {
      commit('AddItemNum')
    }
  },
  // 初始化信息
  initializeData ({ commit }) {
    commit('InitializeData')
  }
}
