const state = {
  requserCount: 0, // 网络请求计数
  cachePageName: '' // 缓存页面名称
}

const mutations = {
  // 修改网络请求计数
  CHANGE_COUNT: (state, newCount) => {
    state.requserCount = newCount
  },
  // 重置缓存组件名称
  RESET_NAME: (state, name) => {
    state.cachePageName = name
  },
  // 添加缓存组件名称
  ADD_NAME: (state, name) => {
    if (state.cachePageName === '') {
      state.cachePageName = name
    } else {
      const arr = state.cachePageName.split(',')
      if (name && typeof name === 'string') {
        if (arr.indexOf(name) <= -1) {
          state.cachePageName = state.cachePageName + ',' + name
        }
      }
    }
  },
  // 删除缓存组件名称
  DEL_NAME: (state, name) => {
    const arr = state.cachePageName.split(',')
    if (name && typeof name === 'string') {
      const i = arr.indexOf(name)
      if (i > -1) {
        arr.splice(i, 1)
        state.cachePageName = arr.join()
      }
    }
  }
}

const actions = {
  changeCount({
    commit
  }, newCount) {
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
