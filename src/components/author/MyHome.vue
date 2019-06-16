<template>
  <div class="global-main-container">
    <!-- 导航栏 -->
    <LHeader/>

    <!-- 主内容 -->
    <el-row class="global-outer-row" :gutter="20">
      <el-col class="global-content" :offset="3" :span="18">
        <!-- 中间内容 -->
        <el-row class="global-main-content" :gutter="0">
          <!-- 左 -->
          <el-col :span="16">
            <div class="content-col global-left-content">
              <div class="meta-info">
                <el-row>
                  <el-col :span="4" class="avator-box">
                    <img id="avator" src="../../assets/images/header.jpg">
                  </el-col>
                  <el-col :span="20">
                    <div class="author-info">
                      <div class="author-name">若琳</div>
                      <el-row :gutter="20" class="author-data">
                        <el-col :span="3" class="info-item attention">
                          <div class="count">6</div>
                          <div class="name">
                            关注&nbsp;&nbsp;
                            <i class="el-icon-view"></i>
                          </div>
                        </el-col>
                        <el-col :span="3" class="info-item fans">
                          <div class="count">10</div>
                          <div class="name">
                            粉丝&nbsp;&nbsp;
                            <i class="el-icon-edit"></i>
                          </div>
                        </el-col>
                        <el-col :span="3" class="info-item article">
                          <div class="count">9</div>
                          <div class="name">
                            文章&nbsp;&nbsp;
                            <i class="el-icon-edit"></i>
                          </div>
                        </el-col>
                        <el-col :span="3" class="info-item like">
                          <div class="count">8</div>
                          <div class="name">
                            喜欢&nbsp;&nbsp;
                            <i class="el-icon-edit"></i>
                          </div>
                        </el-col>
                      </el-row>
                    </div>
                  </el-col>
                </el-row>
              </div>

              <div class="tabs-container">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                  <el-tab-pane label="文章" name="first">
                    <BlogItem
                      v-for="item of blogItemList"
                      :key="item.key"
                      :tags="item.tags"
                      :title="item.title"
                      :niceCount="item.niceCount"
                      :commentCount="item.commentCount"
                      :content="item.content"
                      :hasImg="item.hasImg"
                      :imgSrc="item.imgSrc"
                    />
                  </el-tab-pane>
                  <el-tab-pane label="动态" name="second">动态</el-tab-pane>
                  <el-tab-pane label="最新评论" name="third">最新评论</el-tab-pane>
                  <el-tab-pane label="热门" name="fourth">热门</el-tab-pane>
                </el-tabs>
              </div>
            </div>
          </el-col>

          <!-- 右 -->
          <el-col :span="8">
            <div class="content-col global-right-content"></div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>


<script>
import LHeader from "../commons/Header";
import BlogItem from "../homePage/BlogItem";

export default {
  data() {
    return {
      activeName: "first",
      blogItemList: [
        {
          key: 1,
          title: "Spring Boot 面试，一个问题就干趴下了",
          content:
            "最近栈长面试了不少人，其中不乏说对 Spring Boot 非常熟悉的，然后当我问到一些 Spring Boot 核心功能今天整理书柜，发现最底层还压着两证:一计算机二级证，一英语四级证。这两证都是十几年前考的，至今记忆犹新: 当年我一中文系学生，为什么考这两证呢和原理的时候，没人能说...",
          hasImg: false,
          tags: ["Java基础"],
          niceCount: "6",
          commentCount: "10"
        },
        {
          key: 2,
          title: "如果学历造假，就没资格评价自己能力强",
          content:
            "公司有个女孩，今年28岁，在公司工作做了将近一个月，试用期还没过，前天下午的时候，她突然提出辞职，辞职的理由说是要跟男朋友出去玩，出去旅公司有个女孩，今年28岁，在公司工作做了将近一个月，试用期还没过，前天下午的时候，她突然提出辞职，辞职的理由说是要跟男朋友出去玩，出去旅...",
          hasImg: false,
          tags: ["鸡汤", "毒鸡汤"],
          niceCount: "8",
          commentCount: "8"
        },
        {
          key: 3,
          title: "国内稳定的免费API接口，我也来分享下",
          content:
            "今天整理书柜，发现最底层还压着两证:一计算机二级证，一英语四级证。这两证都是十几年前考的，至今记忆犹新: 当年我一中文系学生文系学生，为什么考这两证呢？今天整理书柜，发现最底层还压着两证:一计算机二级证，一英语四级证。这两证都是十几年前考的，至今记忆犹新: 当年我一中文系学生，为什么考这两证呢？...",
          hasImg: true,
          imgSrc: require("../../assets/images/3.jpg"),
          tags: ["爽文"],
          niceCount: "2",
          commentCount: "7"
        }
      ]
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  components: {
    LHeader,
    BlogItem
  }
};
</script>

<style scoped>
.info-item {
  height: 30px;
  font-size: 12px;
}
.info-item .name {
  color: #999;
}
.author-data {
  margin-top: 10px;
}
.meta-info {
  height: 100px;
}
.author-name {
  font-size: 20px;
}
.tabs-container {
}
#avator {
  width: 70px;
  height: 70px;
  border-radius: 100px;
}
</style>
