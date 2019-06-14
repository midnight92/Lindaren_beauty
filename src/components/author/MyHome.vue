<template>
  <div class="global-main-container">
    <!-- 导航栏 -->
    <LHeader/>

    <!-- 主内容 -->
    <el-row class="global-outer-row" :gutter="20">
      <el-col class="global-content" :offset="3" :span="18">
        <!-- 中间内容 -->
        <el-row class="global-main-content" :gutter="0">
          <!-- 左 -->
          <el-col :span="16">
            <div class="content-col global-left-content"></div>
          </el-col>

          <!-- 右 -->
          <el-col :span="8">
            <div class="content-col global-right-content"></div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
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
</style>
