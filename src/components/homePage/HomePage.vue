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
        <div v-html="content"></div>
      </el-container>

      <!-- 博客编辑区 -->
      <el-container id="blog-show_content">
        <div>
          <quill-editor
            v-model="content"
            :options="editorOption"
            @blur="onEditorBlur($event)"
            @focus="onEditorFocus($event)"
            @change="onEditorChange($event)"
          ></quill-editor>
        </div>
      </el-container>
    </el-main>
  </el-container>
</template>

<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import "@/assets/css/font.css";

import * as Quill from "quill"; //引入编辑器
import { quillEditor } from "vue-quill-editor";
import { ImageDrop } from "quill-image-drop-module"; //quill图片可拖拽上传
// import ImageResize from "quill-image-resize-module"; //quill图片可拖拽改变大小

const fonts = [
  "SimSun",
  "SimHei",
  "Microsoft-YaHei",
  "KaiTi",
  "FangSong",
  "Arial",
  "Times-New-Roman",
  "sans-serif"
];
const Font = Quill.import("formats/font");
Font.whitelist = fonts; //将字体加入到白名单
Quill.register(Font, true);
Quill.register("modules/imageDrop", ImageDrop);
// Quill.register("modules/imageResize", ImageResize);

export default {
  data() {
    return {
      isCollapse: true,
      blogContent: "",
      content: "",
      editorOption: {
        modules: {
          imageDrop: true,
          // imageResize: {},
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            ["blockquote", "code-block"],

            [{ header: 1 }, { header: 2 }],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ script: "sub" }, { script: "super" }],
            [{ indent: "-1" }, { indent: "+1" }],
            [{ direction: "rtl" }],

            [{ size: ["small", false, "large", "huge"] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],

            [{ color: [] }, { background: [] }],
            [{ font: fonts }], //把上面定义的字体数组放进来

            [{ align: [] }],

            ["clean"],
            ["image", "video"]
          ]
        },
        theme: "snow"
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
    onEditorBlur(editor) {
      //失去焦点事件
    },
    onEditorFocus(editor) {
      //获得焦点事件
    },
    onEditorChange({ editor, html, text }) {
      //编辑器文本发生变化
      //this.content可以实时获取到当前编辑器内的文本内容
      console.log(this.content);
    }
  }
};
</script>

<style scoped>
.quill-editor {
  height: 350px;
}
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
