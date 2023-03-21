const faqModule = {
  namespaced: true,
  state() {
    return {
      questionList: [],
      answerList: [],
      commentList: []
    }
  },
  actions: {},
  mutations: {
    changeQuestionList(state, payload) {
      state.questionList = payload
    },
    changeAnswerList(state, payload) {
      state.answerList = payload
    },
    changeCommentList(state, payload) {
      state.commentList = payload
    }
  },
  modules: {}
}
export default faqModule //导出store对象
