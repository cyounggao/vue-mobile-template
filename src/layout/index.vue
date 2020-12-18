<template>
	<div class="layout">
		<header class="layout-header" ref="header">
			<slot name="header"></slot>
		</header>
		<section class="layout-section" ref="section">
			<slot></slot>
		</section>
		<footer class="layout-footer fixed-bottom safe-area" ref="footer">
			<slot name="footer"></slot>
		</footer>
	</div>
</template>

<script>
	export default {
		name: 'layout',
		data() {
			return {
				
			}
		},
		mounted() {
			let top = this.$refs.header.clientHeight
			let section =  this.$refs.section
			section.style.marginTop = `${top}px`
			setTimeout(() => {
				let bottom = this.$refs.footer.clientHeight
				section.style.paddingBottom = `${bottom}px`
			},300)
			
			/*监听所有的输入事件,使窗口在可视区域*/
			window.addEventListener("resize", function() {
			  if (document.activeElement.tagName == "INPUT" || document.activeElement.tagName == "TEXTAREA") {
			    window.setTimeout(function() {
			      document.activeElement.scrollIntoViewIfNeeded();
			    }, 0);
			  }
			});
		}
	}
</script>

<style scoped lang="scss">
	.layout{
		height: 100%;
		position: relative;
		.layout-header{
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			z-index: 10;
		}
		.layout-section{
			-webkit-overflow-scrolling: touch;
			float: left;
			width: 100%;
		}
		.layout-footer{
			background-color: $mainBg;;
		}
	}
</style>
