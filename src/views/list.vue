<template>
  <layout>
    <div class="wrap">
      <p v-for="item in 30" :key="item" @click="pageAction('/detail', item)">
        列表项{{ item }}
      </p>
    </div>
  </layout>
</template>

<script>
export default {
  name: 'List',
  data() {
    return {
      list: []
    }
  },
  created() {
    console.log('list: created')
  },
  activated() {
    console.log('list: activated')
  },
  methods: {
    pageAction(url, id) {
      this.$router.push({
        path: url,
        query: {
          id: id
        }
      })
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
