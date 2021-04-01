<template>
  <div flex="justify:between align:center" class="select-wrap">
    <div class="label">{{label}}</div>
    <div class="select" flex="align:center" @click="openPicker">
      <p class="placeholder" v-if="!valueDesc">{{placeholder || `请选择${label}`}}</p>
      <p v-else>{{valueDesc}}</p>
    </div>
    <van-popup v-model="showPicker" position="bottom">
      <van-picker
        item-height="0.88rem"
        show-toolbar
        :default-index="defaultIndex"
        :columns="columns"
        @cancel="showPicker = false"
        @confirm="onConfirm"
      />
    </van-popup>
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
    placeholder: {
      type: String,
      default: "",
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
      showPicker: false,
      defaultIndex: "",
      valueDesc: "",
    };
  },
  computed: {
    columns() {
      if (this.list.length) {
        return this.list.map((item, index) => {
          if (item[this.valueName] === this.value) {
            this.defaultIndex = index;
            this.valueDesc = item[this.labelName];
          }
          return {
            text: item[this.labelName],
            value: item[this.valueName],
          };
        });
      } else{
        return []
      }
    },
  },
  methods: {
    openPicker() {
      !this.disabled && (this.showPicker = true);
    },
    initData(val) {
      this.columns = val.map((item, index) => {
        if (item[this.valueName] === this.value) {
          this.defaultIndex = index;
          this.valueDesc = item[this.labelName];
        }
        return {
          text: item[this.labelName],
          value: item[this.valueName],
        };
      });
    },
    onConfirm(e) {
      this.showPicker = false;
      this.valueDesc = e.text;
      this.$emit("input", e[this.valueName]);
      this.$emit("selectChange", e[this.valueName]);
    },
  }
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
  font-size: 0.32rem;
  .placeholder {
    color: $placeholderColor;
  }
}
</style>