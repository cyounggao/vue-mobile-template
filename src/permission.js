import router from './router'
import store from './store'

router.beforeEach(async (to, form, next) => {
	to.meta.title && (document.title = to.meta.title)
	await store.dispatch('app/getThemeConfig')
	next()
})
