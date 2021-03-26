import router from './router'
import switchTheme from '@/utils/theme.js'

router.beforeEach((to, form, next) => {
  to.meta.title && (document.title = to.meta.title)
  // 修改主题
  let themeConfig = {
  	  mainColor: '#00FF00',
  	  promptColor: '#F5BB1F',
  	  errorColor: '#FF3148',
  	  explainColor: '#898C9B',
  	  palceholderColor: '#C7C8D0',
  	  bgColor: '#F8F8F8',
  	  fontDarkColor: '#FFFFFF',
  	  fontlightColor: '#333333'
  }
//   switchTheme(themeConfig)
  next()
})
