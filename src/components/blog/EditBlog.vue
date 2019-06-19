<template>
  <el-container class="main-container">
    <!-- 切换按钮 -->
    <el-button type="primary" id="switchBtn" @click="switchMenu" icon="el-icon-search" circle></el-button>

    <!-- 主体内容 -->
    <el-container id="content">
      <el-menu default-active="1-4-1" class="menu-vertical" :collapse="isCollapse">
        <el-menu-item id="collapseBtn" index="0" @click="collapse">
          <i class="el-icon-menu"></i>
        </el-menu-item>
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

      <!-- 博客编辑区 -->
      <el-container id="blog-edit-content">
        <div class="edit-container">
          <!-- 标题 -->
          <div class="title-container">
            <el-input placeholder="标题" v-model="title" class="input-with-select">
              <el-select class="blog-title" v-model="select" slot="prepend" placeholder="请选择">
                <el-option label="餐厅名餐厅名餐厅名" value="1"></el-option>
                <el-option label="订单号" value="2"></el-option>
                <el-option label="用户电话" value="3"></el-option>
              </el-select>
              <el-button
                type="primary"
                slot="append"
                id="btn-upload-blog"
                @click="upload"
                icon="el-icon-edit"
              >发布文章</el-button>
            </el-input>
          </div>
          <!-- 标签 -->
          <Tags @updateTags="updateTags"/>
          <!-- markdown编辑 -->
          <mavon-editor
            ref="md"
            v-model="content"
            :toolbars="markdownOption"
            :ishljs="true"
            @change="changeData"
            @imgAdd="$imgAdd"
            class="mavon-editor"
            v-if="isMarkdown"
          />
          <!-- 富文本编辑 -->
          <quill-editor
            v-model="content"
            :options="editorOption"
            @blur="onEditorBlur($event)"
            @focus="onEditorFocus($event)"
            @change="onEditorChange($event)"
            v-else-if="!isMarkdown"
          />
        </div>
      </el-container>
    </el-container>
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
import Tags from "../commons/Tags";
import http from "@/common/http";
import { connect } from "net";

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
      title: "",
      content: "",
      blogContent: "",
      mkdContent: "",
      blogTags: [],
      isMarkdown: true,
      isCollapse: true,
      markdownOption: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true // 预览
      },
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
      },
      select: "Java多线程"
    };
  },
  methods: {
    collapse(key, keyPath) {
      this.isCollapse = !this.isCollapse;
    },
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
      console.log("value:", value);
      console.log("render:", render);

      this.mkdContent = value;
      this.blogContent = render;
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
      console.log("content: ", this.content);
      console.log("blogContent: ", this.blogContent);
      http
        .post("http://localhost/api/blog/saveBlog", {
          blogContent: this.blogContent,
          blogTitle: this.title,
          category: this.select,
          blogTags: this.blogTags
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
      var $vm = this.$refs.md;
      console.log("$vm: ", $vm);

      http
        .postFile("http://localhost/api/blog/upload", formdata)
        .then(data => {
          console.log("res: ", data.data);
          $vm.$img2Url(pos, data.data);
        })
        .catch(err => console.log(err));
    },
    updateTags(tags) {
      this.blogTags = tags;
    }
  },
  components: {
    Tags
  },
  created() {
    this.editorOption.modules.syntax = {
      highlight: text => hljs.highlightAuto(text).value
    };
  }
};
</script>

<style scoped>
.mavon-editor {
  width: 100%;
  height: 600px;
}
.edit-container {
  width: 100%;
}
.quill-editor {
  height: 600px;
}
#blog-edit-content {
  padding: 20px;
}
.main-container {
  width: 100%;
  min-width: 1200px;
  min-height: 800px;
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
#aside-menu-content {
  width: 400px;
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
  right: 10px;
  bottom: 10px;
}
#collapseBtn {
  margin-bottom: 30px;
}
.menu-vertical {
  left: 0px;
  z-index: 9;
}
#btn-upload-blog {
  color: #fff;
  background-color: #409eff;
  border-radius: 0px 3px 3px 0px;
}
#btn-upload-blog:hover {
  background-color: #66b1ff;
}
.menu-vertical:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.title-container {
  margin: 20px 0px;
}
.el-select .el-input {
  width: 130px;
}
.blog-title {
  width: 150px;
}
</style>
