<template>
  <el-container class="main-container">
    <!-- 主内容 -->
    <el-main id="content">
      <!-- 博客展示区 -->
      <el-container id="blog-show_content">
        <div  v-html="content"></div>
        <!-- <mavon-editor v-html="content" :subfield="false" :defaultOpen=preview :toolbarsFlag="false" :boxShadow="false" @change="changeData" /> -->
      </el-container>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: true,
      content: `# 你好
                                    <p><code>java</code></p>
                                    <p><span style="background-color: rgb(230, 0, 0);">asdf asdfasdf</span>adsf</p>`
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
    changeData(value, render) {
            console.log('after ', value);
        }
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
