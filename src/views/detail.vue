<template>
	<layout>
		<div class="wrap">
			<p>
				详情数据{{id}}
			</p>
			<p @click="pageAction">回到首页</p>
		</div>
	</layout>
</template>

<script>
	export default {
		name: 'detail',
		data() {
			return {
				id: this.$route.query.id
			}
		},
		created() {
			console.log('detail: created')
		},
		activated() {
			console.log('detail: activated')
		},
		methods: {
			pageAction(url) {
				this.$store.commit('app/RESET_NAME', '')
				history.go(-2)
			}
		}
	}
</script>

<style scoped lang="scss">
	.wrap {
		padding-bottom: 1rem;

		p {
			line-height: 0.8rem;
			border-bottom: 0.01rem solid #eee;
			padding-left: 0.3rem;
			font-size: 0.32rem;
		}
	}
</style>
