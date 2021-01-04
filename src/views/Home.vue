<template>
  <layout>
    <div slot="header" class="header" flex="justify:around align:center">
      <p v-for="item in 4" :key="item">头部</p>
    </div>
    <div class="wrap">
      <p @click="pageAction('/list')">
        去列表页
      </p>
    </div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="search">搜索</van-tabbar-item>
      <van-tabbar-item icon="friends-o">购物车</van-tabbar-item>
      <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
  </layout>
</template>

<script>
import {
  getDemo
} from '@/api/home.js'
export default {
  name: 'Home',
  data() {
    return {
      value: '',
      active: 0,
      list: []
    }
  },
  created() {
    console.log('home: created')
  },
  activated() {
    console.log('home: activated')
  },
  methods: {
    getDemoData() {
      getDemo().then(res => {
        this.list = res.data
      })
    },
    pageAction(url) {
      this.$router.push(url)
    }
  }
}
</script>

<style scoped lang="scss">
	.header {
		height: 0.9rem;
		background: #ccc;
		text-align: center;
		font-size: 0.32rem;
		line-height: 0.9rem;
		color: #fff;
	}

	.wrap {
		padding-bottom: 1rem;

		p {
			line-height: 0.8rem;
			border-bottom: 0.01rem solid #eee;
			padding-left: 0.3rem;
			font-size: 0.32rem;
		}
	}

	.footer {
		background: $mainColor;
		height: 1rem;
		line-height: 1rem;
		color: #fff;
		text-align: center;
		font-size: 0.32rem;
	}
</style>
