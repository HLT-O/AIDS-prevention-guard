const learnModule = {
  namespaced: true,
  state() {
    return {
      knowledgeList: [],
      experienceList: []
    }
  },
  mutations: {
    changeKnowledgeList(state, payload) {
      state.knowledgeList = payload
    },
    changeExperienceList(state, payload) {
      state.experienceList = payload
    }
  }
}

export default learnModule
