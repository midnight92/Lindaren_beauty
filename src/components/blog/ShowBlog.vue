<template>
  <div class="global-main-container">
    <!-- 导航栏 -->
    <LHeader/>

    <!-- 主内容 -->
    <el-row class="global-outer-content" :gutter="20">
      <el-col class="global-content" :offset="4" :span="16">
        <!-- 博客展示区 -->
        <div class="article-title">Spring Boot 面试，一个问题就干趴下了</div>
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
                <el-col :span="4" class="info-item">
                  <span class="name">时间</span>
                  <span class="blog-date">2019-06-12 21:22</span>
                </el-col>
                <el-col :span="2" class="info-item">
                  <span class="name">字数</span>
                  <span class="value">3580</span>
                </el-col>
                <el-col :span="2" class="info-item">
                  <span class="name">评论</span>
                  <span class="value">6</span>
                </el-col>
                <el-col :span="2" class="info-item">
                  <span class="name">阅读</span>
                  <span class="value">8</span>
                </el-col>
                <el-col :span="2" class="info-item">
                  <span class="name">喜欢</span>
                  <span class="value">8</span>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </div>
        <div id="blog-container">
          <div v-html="content"></div>
        </div>
        <!-- <mavon-editor v-html="content" :subfield="false" :defaultOpen=preview :toolbarsFlag="false" :boxShadow="false" @change="changeData" /> -->
      </el-col>
    </el-row>
  </div>
</template>

<script>
import LHeader from "../commons/Header";

export default {
  data() {
    return {
      isCollapse: true,
      content: `<html>
 <head></head>
 <body>
  <p><span style="background-color: rgb(230, 0, 0);"> asdf asdfasdf</span>adsf</p>
  <p><img src="https://lindaren.oss-cn-beijing.aliyuncs.com/blog/content/201906/05cb53c1818440288529b4325fce4083.jpg" width="216" style=""><img src="https://lindaren.oss-cn-beijing.aliyuncs.com/blog/content/201906/7e5492273f1b48d697e25b2ba59de879.jpg" width="184" style="cursor: nwse-resize;"></p>
 </body>
</html>`
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
.author-name-text {
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
}
</style>
