import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'home',
		meta: {
			title: '首页'
		},
		component: () => import('@/views/home')
	},
	{
		path: '/list',
		name: 'list',
		meta: {
			title: '列表页',
			keepAlive: true
		},
		component: () => import('@/views/list')
	},
	{
		path: '/detail',
		name: 'detail',
		meta: {
			title: '详情页',
			keepAlive: true
		},
		component: () => import('@/views/detail')
	}
]

const router = new VueRouter({
	routes,
	scrollBehavior: (to, from, savedPosition) => {
		if (savedPosition || typeof savedPosition === 'undefined') { //后退
			//后退到缓存页面，那么这里需要删除上一个页面的缓存
			store.commit('app/DEL_NAME', from.name)
			//后退滚动到上一次位置
			if (savedPosition) {
				return savedPosition
			}
		} else { //前进
			//前进把前进的页面加入到要缓存的组件中
			store.commit('app/ADD_NAME', to.name)
			//前进滚动到顶部
			return {
				x: 0,
				y: 0
			}

		}
	}
})

export default router
