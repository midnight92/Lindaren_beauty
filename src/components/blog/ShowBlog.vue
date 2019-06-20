<template>
  <div class="global-main-container">
    <!-- 导航栏 -->
    <LHeader/>

    <!-- 主内容 -->
    <el-row class="global-outer-content" :gutter="20">
      <el-col class="global-content" :offset="4" :span="16">
        <!-- 博客展示区 -->
        <div class="article-title">{{blogTitle}}</div>
        <div class="article-info">
          <el-row>
            <el-col :span="4">
              <div class="author-header">
                <img id="header-img" src="../../assets/images/header.jpg">
              </div>
            </el-col>
            <el-col :span="20">
              <div class="author-name">
                <span class="author-name-text">若琳</span>
                <el-button id="edit-blog" round>编辑文章</el-button>
              </div>
              <el-row class="article-info-box">
                <el-col :span="5" class="info-item">
                  <span class="name">时间</span>
                  <span class="blog-date">{{blogTime}}</span>
                </el-col>
                <el-col :span="2" class="info-item">
                  <span class="name">字数</span>
                  <span class="value">3580</span>
                </el-col>
                <el-col :span="2" class="info-item">
                  <span class="name">评论</span>
                  <span class="value">{{blogCommentCount}}</span>
                </el-col>
                <el-col :span="2" class="info-item">
                  <span class="name">阅读</span>
                  <span class="value">{{blogViews}}</span>
                </el-col>
                <el-col :span="2" class="info-item">
                  <span class="name">喜欢</span>
                  <span class="value">{{blogLikeCount}}</span>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </div>
        <div class="tags-container">
          <el-tag
            v-for="item in items"
            :key="item.label"
            :type="item.type"
            effect="dark"
          >{{ item.label }}</el-tag>
        </div>
        <div id="blog-container">
          <div v-html="content"></div>
          <!-- <mavon-editor v-html="content" :subfield="false" :defaultOpen=preview :toolbarsFlag="false" :boxShadow="false" @change="changeData" /> -->
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import LHeader from "../commons/Header";
import http from "@/common/http";

export default {
  data() {
    return {
      content: "",
      blogCommentCount: 0,
      blogId: "",
      blogLikeCount: 0,
      blogTitle: "",
      blogViews: 0,
      blogTime: "",
      items: []
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
      console.log("after ", value);
    }
  },
  components: {
    LHeader
  },
  created: function() {
    http
      .post("http://localhost/api/blog/show", {
        blogId: "blog1561047648304"
      })
      .then(data => {
        console.log("res: ", data);
        let result = data.data;
        let blog = result.blog;
        let tagArr = result.tags;

        this.content = blog.blogContent;
        this.blogTitle = blog.blogTitle;
        this.blogCommentCount = blog.blogCommentCount;
        this.blogLikeCount = blog.blogLikeCount;
        this.blogViews = blog.blogViews;
        this.blogTime = blog.createTime;

        for (let i = 0; i < tagArr.length; i++) {
          this.items.push({ type: "", label: tagArr[i] });
        }
      })
      .catch(err => console.log(err));
  }
};
</script>

<style scoped>
.article-title {
  font-family: -apple-system, SF UI Display, Arial, PingFang SC,
    Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
  font-size: 30px;
  font-weight: 700;
  line-height: 1.3;
  margin: 20px 0px 30px 0px;
}
#header-img {
  width: 50px;
  height: 50px;
  border-radius: 50px;
}
.article-info {
  text-align: left;
}
.author-header {
  text-align: center;
}
.info-item {
  font-size: 12px;
  color: #999;
}
#edit-blog {
  position: relative;
  left: 600px;
}
#blog-container {
  margin: 50px;
  text-align: left;
}
#blog-container img {
  max-width: 100%;
}
.tags-container {
  text-align: left;
  padding: 0px 50px;
  margin: 10px 0px;
}
</style>
