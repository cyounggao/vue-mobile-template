<template>
  <div id="app">
    <keep-alive :include="cachePageName">
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
  </div>
</template>

<script type="text/javascript">
export default {
  computed: {
    cachePageName() {
      return this.$store.getters.cachePageName
    }
  }
}
</script>

<style lang="scss">
	#app {
		height: 100%;
		position: relative;
		overflow: inherit;
	}
</style>
