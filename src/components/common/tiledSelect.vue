<template>
  <div flex="justify:between align:center" class="select-wrap">
    <div class="label">{{label}}</div>
    <div class="select" flex="align:center">
      <div
        class="select-item"
        :class="{active: item.isSelected}"
        v-for="(item,index) in selectOptions"
        :key="index"
        @click="selectOption(index)"
      >{{item[labelName]}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "tiledSelect",
  props: {
    label: {
      type: String,
      default: "",
    },
    type: {
      type: String, //类型 1 表示单选 2 表示多选
      default: "1",
    },
    value: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    list: {
      type: Array,
      default: () => {
        return [];
      },
    },
    labelName: {
      type: String,
      default: "name",
    },
    valueName: {
      type: String,
      default: "value",
    },
  },
  data() {
    return {
      selectOptions: [],
    };
  },
  created() {
    this.list.length && this.initData(this.list);
  },
  methods: {
    initData(val) {
      let value = this.value.split(",");
      this.selectOptions = JSON.parse(JSON.stringify(val));
      this.selectOptions.forEach((item) => {
        if (value.indexOf(item[this.valueName]) > -1) {
          this.$set(item, "isSelected", true);
        } else {
          this.$set(item, "isSelected", false);
        }
      });
    },
    selectOption(e) {
      if (this.disabled) {
        return;
      }
      let value = [];
      this.selectOptions.forEach((item, index) => {
        if (index === e) {
          item.isSelected = !item.isSelected;
        } else {
          if (this.type === "1") {
            item.isSelected = false;
          }
        }
      });
      this.selectOptions.forEach((item) => {
        if (item.isSelected) {
          value.push(item[this.valueName]);
        }
      });
      this.$emit("input", value.join(","));
      this.$emit("selectChange", value.join(","));
    },
  },
  watch: {
    list(val) {
      val.length && this.initData(val);
    },
  },
};
</script>
<style lang="scss" scoped>
.select-wrap {
  min-height: 0.8rem;
}
.label {
  margin-right: 0.1rem;
  font-size: 0.32rem;
}
.select {
  flex-wrap: wrap;
  .select-item {
    height: 0.5rem;
    line-height: 0.5rem;
    padding: 0 0.16rem;
    font-size: 0.28rem;
    background: $fontDarkColor;
    color: $mainColor;
    border: 0.01rem solid $mainColor;
    transition: 0.3s all linear;
    margin-left: 0.2rem;
    border-radius: 0.1rem;
    &.active {
      background: $mainColor;
      color: $fontDarkColor;
    }
  }
}
</style>