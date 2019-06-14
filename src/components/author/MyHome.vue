<template>
  <el-container class="global-main-container">
    <!-- 导航栏 -->
    <LHeader/>

    <!-- 主内容 -->
    <el-row class="global-outer-row" :gutter="20">
      <el-col class="global-content" :offset="3" :span="18">
        <el-row class="main-content" :gutter="0"></el-row>
      </el-col>
    </el-row>
  </el-container>
</template>


<script>
import LHeader from "../commons/Header";

export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    LHeader
  }
};
</script>

<style scoped>
.main-container {
  height: 100%;
  width: 100%;
  min-height: 1000px;
  position: absolute;
}
</style>
