import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/utils/flexible-c.js' // 移动端适配
import './permission.js' // 权限
import '@/styles/index.scss'
import '@/config/vant.js'
import directive from '@/config/directive.js'
import util from '@/utils'
import filter from '@/filters'
Vue.use(util)
Vue.use(directive)
Object.keys(filter).forEach(key => {
  Vue.filter(key, filter[key])
})
// 页面布局组件
import layout from '@/layout'

Vue.config.productionTip = false
Vue.component('layout', layout)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
