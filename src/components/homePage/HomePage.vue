<template>
  <div class="global-main-container">
    <!-- 导航栏 -->
    <LHeader/>

    <!-- 主内容 -->
    <el-row class="global-outer-row" :gutter="20">
      <el-col class="global-content" :offset="3" :span="18">
        <!-- 轮播图 -->
        <el-row>
          <el-col class="show-box" :span="24">
            <el-carousel :interval="2000" arrow="always">
              <el-carousel-item v-for="item in dataimg" :key="item.index">
                <img :src="item.src">
              </el-carousel-item>
            </el-carousel>
          </el-col>
        </el-row>

        <!-- 左右分栏 -->
        <el-row class="main-content" :gutter="0">
          <!-- 左 -->
          <el-col :span="16">
            <div class="content-col left-content">
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
            </div>
          </el-col>

          <!-- 右 -->
          <el-col :span="8">
            <div class="content-col right-content">
              <div class="recommend-authors-contain">
                <el-row :gutter="0">
                  <el-col :span="24" class="recommend-authors-top">
                    <span class="top-header">推荐作者</span>
                    <span class="refresh-btn">
                      <i class="el-icon-refresh"></i>换一批
                    </span>
                  </el-col>
                  <AuthorItem
                    v-for="item of authorList"
                    :key="item.index"
                    :avator="item.avator"
                    :authorName="item.authorName"
                    :attentionCount="item.attentionCount"
                  />
                </el-row>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
import BlogItem from "./BlogItem";
import AuthorItem from "./AuthorItem";
import LHeader from "../commons/Header";

export default {
  data() {
    return {
      dataimg: [
        {
          index: 1,
          src: require("../../assets/images/1.jpg")
        },
        {
          index: 2,
          src: require("../../assets/images/2.jpg")
        },
        {
          index: 3,
          src: require("../../assets/images/3.jpg")
        }
      ],
      authorList: [
        {
          index: 1,
          authorName: "Lindaren",
          avator: require("../../assets/images/3.jpg"),
          attentionCount: "98"
        },
        {
          index: 2,
          authorName: "Baowen",
          avator: require("../../assets/images/1.jpg"),
          attentionCount: "66"
        }
      ],
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
  created: function() {
   
  },
  components: {
    BlogItem,
    AuthorItem,
    LHeader
  }
};
</script>

<style scoped>
.refresh-btn {
  font-size: 12px;
  float: right;
  color: #999;
}
.top-header {
  float: left;
  color: #999;
  font-size: 12px;
}
.main-content {
  margin-top: 30px;
  min-height: 300px;
}
.footer-item {
  font-size: 11px;
}
.el-row {
  margin-left: 0px !important;
  margin-right: 0px !important;
}
.recommend-authors-top {
  margin-bottom: 10px;
}
.left-content {
  padding-left: 0px;
  padding-right: 10px;
  text-align: left;
}
.right-content {
  padding-right: 0px;
  padding-left: 10px;
}
.show-box {
  height: 300px;
}
.global-content {
  background-color: #ffffff;
}
</style>
