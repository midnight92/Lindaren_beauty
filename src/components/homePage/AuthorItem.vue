<template>
  <el-col :span="24" class="recommend-authors-item">
    <el-row>
      <el-col class="authors-header-container" :span="4">
        <img :src="avator">
      </el-col>
      <el-col class="authors-info" :span="20">
        <el-row class="authors-info-row">
          <el-col :span="6">{{authorName}}</el-col>
          <el-col :offset="14" :span="4">
            <span class="interested-btn">
              <i class="el-icon-plus"></i>关注
            </span>
          </el-col>
        </el-row>
        <el-row class="authors-info-row">
          <el-col :span="7">
            <i class="el-icon-view"></i>&nbsp;{{attentionCount}}&nbsp;人关注
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </el-col>
</template>

<script>
export default {
  props: {
    authorName: {
      type: String,
      default: ""
    },
    avator: {
      type: String,
      default: ""
    },
    attentionCount: {
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
.authors-info-row {
  padding: 2px 5px;
}
.authors-header-container img {
  width: 45px;
  height: 45px;
  border-radius: 100px;
  margin-top: 5px;
}
.interested-btn {
  color: #67c23a;
  cursor: pointer;
}
.authors-info {
  padding: 5px 5px 0px 10px;
}
.recommend-authors-item {
  padding: 5px 0px;
  color: #999;
  font-size: 12px;
}
</style>
