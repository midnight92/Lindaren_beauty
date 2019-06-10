<template>
  <el-container class="main-container">
    <!-- 切换按钮 -->
    <el-button type="primary" id="switchBtn" @click="switchMenu" icon="el-icon-search" circle></el-button>

    <el-main id="content">
      <el-button type="primary" id="btn-upload-blog" @click="upload">发布文章</el-button>
      <!-- 博客编辑区 -->
      <el-container id="blog-edit-content">
        <!-- markdown编辑 -->
        <div v-if="isMarkdown">
          <mavon-editor
            v-model="content"
            :ishljs="true"
            @change="changeData"
            @imgAdd="$imgAdd"
            class="mavonEditor"
          />
        </div>
        <!-- 富文本编辑 -->
        <div v-else-if="!isMarkdown">
          <div v-html="content"></div>
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
import hljs from "highlight.js";

import * as Quill from "quill"; //引入编辑器
import { quillEditor } from "vue-quill-editor";
import { ImageDrop } from "quill-image-drop-module"; //quill图片可拖拽上传
import ImageResize from "quill-image-resize-module"; //quill图片可拖拽改变大小

import http from "@/common/http";

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
Quill.register("modules/imageResize", ImageResize);

export default {
  data() {
    return {
      content: "",
      mkdContent: "",
      isMarkdown: true,
      editorOption: {
        modules: {
          imageDrop: true,
          imageResize: {},
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
      //value 是markdown格式文本, render是转换后的html格式文本
      console.log("after ", value);
      console.log("render ", render);
      console.log("content ", this.content);

      this.mkdContent = value;
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
      console.log("html", this.html);
      console.log("text", this.text);
      console.log("content", this.content);
    },
    upload() {
      http
        .post("http://localhost/api/blog/saveBlog", {
          blogContent: this.content
        })
        .then(data => {
          console.log("res: ", data);
        })
        .catch(err => console.log(err));
    },
    $imgAdd(pos, $file) {
      // 第一步.将图片上传到服务器.
      var formdata = new FormData();
      formdata.append("file", $file);

      http
        .postFile("http://localhost/api/blog/upload", formdata)
        .then(data => {
          console.log("res: ", data);
          
        })
        .catch(err => console.log(err));

      // axios({
      //   url: "server url",
      //   method: "post",
      //   data: formdata,
      //   headers: { "Content-Type": "multipart/form-data" }
      // }).then(url => {
      //   // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
      //   /**
      //    * $vm 指为mavonEditor实例，可以通过如下两种方式获取
      //    * 1. 通过引入对象获取: `import {mavonEditor} from ...` 等方式引入后，`$vm`为`mavonEditor`
      //    * 2. 通过$refs获取: html声明ref : `<mavon-editor ref=md ></mavon-editor>，`$vm`为 `this.$refs.md`
      //    */
      //   $vm.$img2Url(pos, url);
      // });
    }
  },
  created() {
    this.editorOption.modules.syntax = {
      highlight: text => hljs.highlightAuto(text).value
    };
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
