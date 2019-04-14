<template>
  <el-container class="main-container">
    <!-- 侧边菜单 -->
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>

        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>

        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>

      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>

      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
    <!-- 切换按钮 -->
    <el-button type="primary" id="switchBtn" @click="switchMenu" icon="el-icon-search" circle></el-button>

    <!-- 主内容 -->
    <el-main id="content">
      <!-- 博客展示区 -->
      <el-container id="blog-show_content">
        <div v-html="blogContent"></div>
      </el-container>

      <!-- 博客编辑区 -->
      <el-container id="blog-show_content">
        <div>
          <div class="info">UE编辑器示例</div>
          <el-button @click="getUEContent()">获取内容</el-button>
          <div class="editor-container">
            <ueditor :defaultMsg="defaultMsg" :config="config" ref="ue"></ueditor>
          </div>
        </div>
      </el-container>
    </el-main>
  </el-container>
</template>

<script>
import ueditor from "@/components/ue.vue";

export default {
  data() {
    return {
      isCollapse: true,
      blogContent: "",
      defaultMsg: "这里是UE测试",
      config: {
        initialFrameWidth: null,
        initialFrameHeight: 350
      }
    };
  },
  methods: {
    switchMenu() {
      this.isCollapse = !this.isCollapse;
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    getUEContent() {
      let content = this.$refs.ue.getUEContent();
      this.$notify({
        title: "获取成功，可在控制台查看！",
        message: content,
        type: "success"
      });
      this.blogContent = content;
      console.log(content);
    }
  },
  components: {
    ueditor
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
.unfreeze-content {
  height: 400px;
  padding-top: 60px;
  background-color: #ffffff;
  border-radius: 2px;
}
#content {
  background-color: #f6f6f6;
}
#header-container {
  height: 300px;
  background-color: red;
}
#header-container {
  background-color: gold;
  height: 250px;
  margin-top: 50px;
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
