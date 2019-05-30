<template>
  <div class="main-container">
    <!-- 导航栏 -->
    <el-menu :default-active="activeIndex" class="top-bar" mode="horizontal" @select="handleSelect">
      <div id="logo">Lindaren</div>
      <el-menu-item class="left-item" index="1">
        <i class="el-icon-view"></i>发现
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-zoom-in"></i>关注
      </el-menu-item>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-message"></i>消息
        </template>
        <el-menu-item index="3-1">评论</el-menu-item>
        <el-menu-item index="3-2">关注</el-menu-item>
        <el-menu-item index="3-3">喜欢/赞</el-menu-item>
      </el-submenu>
      <el-submenu id="header" index="4">
        <template slot="title">
          <img id="header-img" src="../../assets/images/header.jpg">
        </template>
        <el-menu-item index="4-1">
          <i class="el-icon-user-solid"></i>我的主页
        </el-menu-item>
        <el-menu-item index="4-2">
          <i class="el-icon-setting"></i>设置
        </el-menu-item>
        <el-menu-item index="4-3">
          <i class="el-icon-switch-button"></i>退出
        </el-menu-item>
      </el-submenu>
      <el-button id="new-blog" icon="el-icon-edit" type="primary">写文章</el-button>
    </el-menu>

    <!-- 主内容 -->
    <el-row class="outer-row" :gutter="20">
      <el-col class="content" :offset="3" :span="18">
        <!-- 轮播图 -->
        <el-row>
          <el-col class="show-box" :span="24">
            <el-carousel :interval="2000" arrow="always">
              <el-carousel-item v-for="item in dataimg" :key="item.index">
                <img :src="item.src">
              </el-carousel-item>
            </el-carousel>
          </el-col>
        </el-row>

        <!-- 左右分栏 -->
        <el-row class="main-content" :gutter="0">
          <!-- 左 -->
          <el-col :span="16">
            <div class="content-col left-content">
              <div class="left-content-item">
                <div class="left-content-item-container">
                  <div class="left-content-item-title">Spring Boot 面试，一个问题就干趴下了！</div>
                  <div
                    class="left-content-item-content"
                  >最近栈长面试了不少人，其中不乏说对 Spring Boot 非常熟悉的，然后当我问到一些 Spring Boot 核心功能和原理的时候，没人能说...</div>
                  <div class="left-content-item-footer">
                    <span class="footer-item tag">Java技术栈</span>
                    <span class="footer-item comment-count">6</span>
                    <span class="footer-item nice-count">10</span>
                  </div>
                </div>
              </div>

              <div class="left-content-item">
                <div style="width:450px;" class="left-content-item-container">
                  <div class="left-content-item-title">Spring Boot 面试，一个问题就干趴下了！</div>
                  <div
                    class="left-content-item-content"
                  >最近栈长面试了不少人，其中不乏说对 Spring Boot 非常熟悉的，然后当我问到一些 Spring Boot 核心功能和原理的时候，没人能说...</div>
                  <div class="left-content-item-footer">
                    <span class="footer-item tag">Java技术栈</span>
                    <span class="footer-item comment-count">6</span>
                    <span class="footer-item nice-count">10</span>
                  </div>
                </div>
                <div class="left-content-item-img">
                  <img src="../../assets/images/1.jpg">
                </div>
              </div>

              <BlogItem/>
            </div>
          </el-col>

          <!-- 左 -->
          <el-col :span="8">
            <div class="content-col right-content"></div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
import BlogItem from "./BlogItem";

export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      dataimg: [
        {
          index: 1,
          src: require("../../assets/images/1.jpg")
        },
        {
          index: 2,
          src: require("../../assets/images/2.jpg")
        },
        {
          index: 3,
          src: require("../../assets/images/3.jpg")
        }
      ]
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  components: {
    BlogItem
  }
};
</script>

<style scoped>
.main-content {
  margin-top: 30px;
  min-height: 300px;
}
.left-content-item-img {
  width: 110px;
  display: inline-block;
}
.left-content-item-img img {
  width: 150px;
  height: 100px;
}
.left-content-item-container {
  display: inline-block;
}
.footer-item {
  font-size: 11px;
}
.tag {
}
.left-content-item-content {
  font-size: 12px;
  min-height: 60px;
  padding: 10px 0px;
}
.left-content-item-footer {
}
.left-content-item {
  margin: 20px 0px;
}
.left-content-item-title {
}
.el-row {
  margin-left: 0px !important;
  margin-right: 0px !important;
}
.left-content {
  padding-left: 0px;
  padding-right: 10px;
  text-align: left;
}
.right-content {
  padding-right: 0px;
  padding-left: 10px;
}
.content-col {
  height: 100px;
}
.outer-row {
  margin: 61px 0px 0px 0px;
}
.show-box {
  height: 300px;
  background-color: red;
}
.bg-purple {
  background: #d3dce6;
  height: 100%;
}
#new-blog {
  position: absolute;
  right: 100px;
  top: 10px;
  border-radius: 0px;
}
.left-item {
  margin-left: 200px;
}
#header {
  float: right;
  margin-right: 200px;
}
#header-img {
  width: 35px;
  height: 35px;
  border-radius: 100px;
}
#logo {
  color: #409eff;
  position: absolute;
  left: 55px;
  top: 17px;
  font-size: 24px;
}
.top-bar {
  position: fixed;
  width: 100%;
  min-width: 1000px;
  z-index: 20;
}
.main-container {
  width: 100%;
  min-width: 1000px;
  position: absolute;
  background-color: #f6f6f6;
}
.content {
  background-color: #ffffff;
}
.el-menu-vertical:not(.el-menu--collapse) {
  width: 300px;
  height: 100%;
  text-align: left;
  padding-left: 20px;
}
#switchBtn {
  position: fixed;
  left: 10px;
  bottom: 10px;
}
</style>
