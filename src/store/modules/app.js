const state = {
  requserCount: 0
}

const mutations = {
  CHANGE_COUNT: (state, newCount) => {
    state.requserCount = newCount
  }
}

const actions = {
  changeCount({ commit }, newCount) {
    return new Promise(resolve => {
      commit('CHANGE_COUNT', newCount)
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
