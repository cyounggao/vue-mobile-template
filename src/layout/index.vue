<template>
  <div class="layout">
    <header ref="header" class="layout-header">
      <slot name="header" />
    </header>
    <section ref="section" class="layout-section">
      <slot />
    </section>
    <footer ref="footer" class="layout-footer fixed-bottom safe-area">
      <slot name="footer" />
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  data() {
    return {}
  },
  mounted() {
    const top = this.$refs.header.clientHeight
    const section = this.$refs.section
	const bottom = this.$refs.footer.clientHeight
    section.style.marginTop = `${top}px`
    setTimeout(() => {
      section.style.paddingBottom = `${bottom}px`
    }, 300)

    /* 监听所有的输入事件,使窗口在可视区域*/
    window.addEventListener('resize', function() {
      if (
        document.activeElement.tagName === 'INPUT' ||
        document.activeElement.tagName === 'TEXTAREA'
      ) {
        window.setTimeout(function() {
          document.activeElement.scrollIntoViewIfNeeded()
        }, 0)
      }
    })
  }
}
</script>

<style scoped lang="scss">
.layout {
  height: 100%;
  position: relative;
  .layout-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
  }
  .layout-section {
    -webkit-overflow-scrolling: touch;
    float: left;
    width: 100%;
  }
  .layout-footer {
    background-color: $mainBg;
  }
}
</style>
