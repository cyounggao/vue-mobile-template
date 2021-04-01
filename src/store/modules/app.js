import switchTheme from '@/utils/theme.js'
import { isObj } from '@/utils'

const state = {
  requserCount: 0, // 网络请求计数
  cachePageName: '', // 缓存页面名称
  theme: localStorage.getItem('theme') || 'green',  //主题
  themeConfigObj: {}
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
  },
  //修改主题
  CHANGE_THEME: (state, value) => {
    state.theme = value
    localStorage.setItem('theme', value)
    switchTheme(state.themeConfigObj[value])
  },
  //修改主题配置
  CHANGE_THEME_CONFIG: (state, value) => {
    if (isObj(value)) {
      state.themeConfigObj = value
      switchTheme(value[state.theme])
    }
  },
}

const actions = {
  changeCount({
    commit
  }, newCount) {
    return new Promise(resolve => {
      commit('CHANGE_COUNT', newCount)
      resolve()
    })
  },
  getThemeConfig({ commit }) {
    return new Promise(resolve => {
      const themeConfigObj = {   //接口获取
        green: {
          mainColor: '#00FF00',
          promptColor: '#F5BB1F',
          errorColor: '#FF3148',
          explainColor: '#898C9B',
          palceholderColor: '#C7C8D0',
          bgColor: '#F8F8F8',
          fontDarkColor: '#FFFFFF',
          fontlightColor: '#333333'
        },
        orange: {
          mainColor: '#FF9900',
          promptColor: '#F5BB1F',
          errorColor: '#FF3148',
          explainColor: '#898C9B',
          palceholderColor: '#C7C8D0',
          bgColor: '#F8F8F8',
          fontDarkColor: '#FFFFFF',
          fontlightColor: '#333333'
        }
      }
      commit('CHANGE_THEME_CONFIG', themeConfigObj)
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
