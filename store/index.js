import Vue from 'vue' //引入vue
import Vuex from 'vuex' // 引入vuex
import faqModule from './faq'
import learnModule from './learn'
import volunteerModule from './volunteer'
Vue.use(Vuex) // 让vue使用vuex
// 通过vuex构造函数创建store对象
const store = new Vuex.Store({
  state() {
    return {
      count: 0,
      userInfo:{},
    }
  },
  mutations: {
    setUserInfo(state, userInfo) { //设置参数
          state.userInfo = userInfo;//存储用户信息
        },
  },
  modules: {
    faqModule,
    learnModule,
    volunteerModule
  }
})
export default store //导出store对象
