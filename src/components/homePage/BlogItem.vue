<template>
  <div class="left-content-item">
    <div :class="[hasImg ? 'tiny-width' : '']" class="left-content-item-container">
      <div class="left-content-item-title">{{title}}</div>
      <div class="left-content-item-content">{{content}}</div>
      <div class="left-content-item-footer">
        <el-button v-for="item of tags" :key="item" class="footer-item tag">{{item}}</el-button>
        <span class="footer-item comment-count">
          <i class="el-icon-share"></i>
          {{niceCount}}
        </span>
        <span class="footer-item nice-count">
          <i class="el-icon-star-on"></i>
          {{commentCount}}
        </span>
      </div>
    </div>
    <div v-if="hasImg" class="left-content-item-img">
      <img :src="imgSrc">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "标题"
    },
    hasImg: {
      type: Boolean,
      default: false
    },
    content: {
      type: String,
      default: ""
    },
    imgSrc: {
      type: String,
      default: ""
    },
    tags: {
      type: Array,
      default: ["Java", "Js"]
    },
    niceCount: {
      type: String,
      default: "0"
    },
    commentCount: {
      type: String,
      default: "0"
    }
  },
  data() {
    return {};
  },
  methods: {
    downPrice() {
      this.$emit("downPrice");
    }
  }
};
</script>

<style scoped>
.left-content-item {
  margin: 20px 0px;
  border-bottom: 1px solid #f1f1f1;
  padding-bottom: 20px;
  color: #999;
}
.left-content-item-img {
  width: 110px;
  display: inline-block;
}
.left-content-item-img img {
  width: 150px;
  height: 100px;
}
.tiny-width {
  width: 470px;
}
.left-content-item-container {
  display: inline-block;
}
.footer-item {
  font-size: 11px;
  margin: 0px 2px;
}
.tag {
  border: 1px solid #999;
  border-radius: 3px;
  padding: 2px 5px;
  cursor: pointer;
}
.left-content-item-content {
  font-size: 12px;
  min-height: 60px;
  padding: 10px 0px;
  color: #999;
}
.left-content-item-title {
  color: #000;
}
</style>
