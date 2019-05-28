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
    <el-row class="max-height" :gutter="20">
      <el-col class="max-height content" :offset="3" :span="18">
        <el-row>
          <el-col class="show-box" :span="24">
            <el-carousel :interval="2000" arrow="always">
              <el-carousel-item v-for="item in dataimg" :key="item">
                <img src="../../assets/images/1.jpg">
              </el-carousel-item>
            </el-carousel>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      dataimg: [
        {
          src: "../../assets/images/1.jpg"
        },
        {
          src: "../../assets/images/2.jpg"
        },
        {
          src: "../../assets/images/3.jpg"
        }
      ]
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
.show-box {
  height: 300px;
  background-color: red;
}
.max-height {
  height: 100%;
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
  z-index: 10;
}
.main-container {
  height: 100%;
  width: 100%;
  min-height: 1000px;
  min-width: 1000px;
  position: absolute;
  background-color: #f6f6f6;
}
.content {
  background-color: #ffffff;
  margin-top: 61px;
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
