import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
// import ajax from '../assets/js/ajax'

Vue.use(Vuex)

const state = {
  level: '第一周', // 活动周数
  itemNum: 1, // 第几题
  allTime: 0,
  timer: '', // 定时器
  itemDetail: [{
    'topic_id': 20,
    'active_topic_id': 4,
    'type': 'ONE',
    'topic_name': '题目一',
    'active_id': 1,
    'active_title': '欢乐星期五标题',
    'active_topic_phase': '第一周',
    'active_start_time': '1479139200',
    'active_end_time': '1482163200',
    'topic_answer': [{
      'topic_answer_id': 1,
      'topic_id': 20,
      'answer_name': 'A',
      'is_standard_answer': 0
    }, {
      'topic_answer_id': 2,
      'topic_id': 20,
      'answer_name': '正确答案',
      'is_standard_answer': 0
    }, {
      'topic_answer_id': 3,
      'topic_id': 20,
      'answer_name': 'C',
      'is_standard_answer': 0
    }, {
      'topic_answer_id': 4,
      'topic_id': 20,
      'answer_name': 'D',
      'is_standard_answer': 1
    }]
  }, {
    'topic_id': 21,
    'active_topic_id': 4,
    'type': 'MORE',
    'topic_name': '题目二',
    'active_id': 1,
    'active_title': '欢乐星期五标题',
    'active_topic_phase': '第一周',
    'active_start_time': '1479139200',
    'active_end_time': '1482163200',
    'topic_answer': [{
      'topic_answer_id': 5,
      'topic_id': 21,
      'answer_name': 'A',
      'is_standard_answer': 1
    }, {
      'topic_answer_id': 6,
      'topic_id': 21,
      'answer_name': 'B',
      'is_standard_answer': 0
    }, {
      'topic_answer_id': 7,
      'topic_id': 21,
      'answer_name': '正确答案',
      'is_standard_answer': 0
    }, {
      'topic_answer_id': 8,
      'topic_id': 21,
      'answer_name': 'D',
      'is_standard_answer': 0
    }]
  }, {
    'topic_id': 21,
    'active_topic_id': 4,
    'type': 'MORE',
    'topic_name': '题目三',
    'active_id': 1,
    'active_title': '欢乐星期五标题',
    'active_topic_phase': '第一周',
    'active_start_time': '1479139200',
    'active_end_time': '1482163200',
    'topic_answer': [{
      'topic_answer_id': 9,
      'topic_id': 21,
      'answer_name': 'A',
      'is_standard_answer': 1
    }, {
      'topic_answer_id': 10,
      'topic_id': 21,
      'answer_name': 'B',
      'is_standard_answer': 0
    }, {
      'topic_answer_id': 11,
      'topic_id': 21,
      'answer_name': 'C',
      'is_standard_answer': 0
    }, {
      'topic_answer_id': 12,
      'topic_id': 21,
      'answer_name': '正确答案',
      'is_standard_answer': 0
    }]
  }, {
    'topic_id': 21,
    'active_topic_id': 4,
    'type': 'MORE',
    'topic_name': '题目四',
    'active_id': 1,
    'active_title': '欢乐星期五标题',
    'active_topic_phase': '第一周',
    'active_start_time': '1479139200',
    'active_end_time': '1482163200',
    'topic_answer': [{
      'topic_answer_id': 13,
      'topic_id': 21,
      'answer_name': '正确答案',
      'is_standard_answer': 1
    }, {
      'topic_answer_id': 14,
      'topic_id': 21,
      'answer_name': 'B',
      'is_standard_answer': 0
    }, {
      'topic_answer_id': 15,
      'topic_id': 21,
      'answer_name': 'C',
      'is_standard_answer': 0
    }, {
      'topic_answer_id': 16,
      'topic_id': 21,
      'answer_name': 'D',
      'is_standard_answer': 0
    }]
  }, {
    'topic_id': 21,
    'active_topic_id': 4,
    'type': 'MORE',
    'topic_name': '题目四',
    'active_id': 1,
    'active_title': '欢乐星期五标题',
    'active_topic_phase': '第一周',
    'active_start_time': '1479139200',
    'active_end_time': '1482163200',
    'topic_answer': [{
      'topic_answer_id': 17,
      'topic_id': 21,
      'answer_name': 'A',
      'is_standard_answer': 1
    }, {
      'topic_answer_id': 18,
      'topic_id': 21,
      'answer_name': 'B',
      'is_standard_answer': 0
    }, {
      'topic_answer_id': 19,
      'topic_id': 21,
      'answer_name': 'C',
      'is_standard_answer': 0
    }, {
      'topic_answer_id': 20,
      'topic_id': 21,
      'answer_name': '正确答案',
      'is_standard_answer': 0
    }]
  }],
  answerid: [] // 答案id
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
