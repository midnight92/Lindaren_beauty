<template>
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
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
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
</style>
