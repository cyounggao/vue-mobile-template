import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/utils/flexible-c.js' // 移动端适配
import './permission.js' // 权限
import '@/styles/index.scss'
import '@/config/vuePrototype.js'
import '@/config/vant.js'

// 页面布局组件
import layout from '@/layout'

Vue.config.productionTip = false
Vue.component('layout', layout)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
