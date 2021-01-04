import router from './router'

router.beforeEach((to, form, next) => {
  to.meta.title && (document.title = to.meta.title)
  next()
})
