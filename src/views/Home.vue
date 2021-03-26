<template>
  <layout>
    <div slot="header" class="header" flex="justify:around align:center">
      <p v-for="item in 4" :key="item">头部</p>
    </div>
    <div class="wrap">
      <p @click="pageAction('/list')">去列表页</p>
      <tiled-select
        disabled
        label="选项"
        type="1"
        :list="list"
        v-model="selectValue"
        @selectChange="selectChange"
      ></tiled-select>
      <down-select
        label="下拉选择"
        :list="list"
        v-model="selectValue"
        @selectChange="selectChange"
      />
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
import { getDemo } from "@/api/home.js";
import tiledSelect from "@/components/common/tiledSelect";
import downSelect from "@/components/common/downSelect";
import { Toast } from 'vant'
export default {
  name: "Home",
  components: {
    tiledSelect,
    downSelect
  },
  data() {
    return {
      value: "",
      active: 0,
      list: [
        { name: "选项一", value: "1" },
        { name: "选项二", value: "2" },
        { name: "选项三", value: "3" },
        { name: "选项四", value: "4" },
      ],
      selectValue: "2",
      columns: ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州']
    };
  },
  created() {
    console.log("home: created");
  },
  activated() {
    console.log("home: activated");
  },
  methods: {
    onConfirm(value, index) {
      Toast(`当前值：${value}, 当前索引：${index}`);
    },
    onChange(picker, value, index) {
      Toast(`当前值：${value}, 当前索引：${index}`);
    },
    onCancel() {
      Toast('取消');
    },
    selectChange(e) {
      console.log(e);
    },
    getDemoData() {
      getDemo().then((res) => {
        this.list = res.data;
      });
    },
    pageAction(url) {
      this.$router.push(url);
    },
  },
};
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
  padding: 0 0.3rem;
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
