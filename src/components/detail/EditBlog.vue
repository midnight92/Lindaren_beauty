<template>
  <el-container class="main-container">
    <!-- 切换按钮 -->
    <el-button type="primary" id="switchBtn" @click="switchMenu" icon="el-icon-search" circle></el-button>

    <el-main id="content">
      <!-- 博客编辑区 -->
      <el-container id="blog-edit-content">
        <!-- markdown编辑 -->
        <div v-if="isMarkdown">
          <mavon-editor v-model="content" :ishljs="true" @change="changeData" class="mavonEditor"/>
        </div>
        <!-- 富文本编辑 -->
        <div v-else-if="!isMarkdown">
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
      content: "",
      isMarkdown: true,
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
      this.isMarkdown = !this.isMarkdown;
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    changeData(value, render) {
      console.log("after ", value);
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
.mavonEditor {
  width: 100%;
}
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
