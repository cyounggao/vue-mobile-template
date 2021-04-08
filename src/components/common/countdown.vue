<template>
  <div class="countdown-wrap" v-if="visible">
    <div class="text" v-for="(item,index) in list" :key="index" :style="item.style">{{item.value}}</div>
  </div>
</template>
<script>
import { mainColor } from '@/styles/variables.scss'
export default {
  name: "countdown",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    limit: {
      type: Number,
      default: 3,
    },
    color: {
      type: String,
      default: mainColor,
    },
    borderColor: {
      type: String,
      default: "#FFFFFF",
    },
    fontSize: {
      type: String,
      default: "2rem",
    },
  },
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    this.init();
  },
  watch: {
    visible: function (val) {
      if (val) {
        this.down();
      }
    },
  },
  methods: {
    init() {
      if (this.limit > 10) {
        this.limit = 10;
      } else if (this.limit < 1) {
        this.limit = 1;
      }
      this.list = [];
      for (let i = this.limit; i > 0; i--) {
        this.list.push({
          value: i,
          style: "",
        });
      }
    },
    //倒计时结束关闭
    down() {
      for (let i = 0; i < this.limit; i++) {
        this.list[
          i
        ].style = `font-size: ${this.fontSize}; color: ${this.color}; animation-delay:${i}s;text-shadow:${this.borderColor} 1px 0 0,${this.borderColor} 0 1px 0,${this.borderColor} -1px 0 0,${this.borderColor} 0 -1px 0;animation-name: scaleAnimation;`;
      }
      setTimeout(() => {
        this.$emit("countdownOver");
      }, this.limit * 1000);
    },
  },
};
</script>
<style lang="scss" scoped>
.countdown-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  touch-action: none;
  .text {
    font-family: "Helvetica Arial";
    animation-duration: 10s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    z-index: 1001;
    line-height: 1;
    text-align: center;
  }
}
</style>