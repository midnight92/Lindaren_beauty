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
                    <img id="avator" src>
                  </el-col>
                  <el-col :span="20">
                    <div class="author-info">
                      <div class="author-name">若琳</div>
                      <el-row>
                        <el-col :span="5" class="info-item attention">
                          <div class="grid-content bg-purple"></div>
                        </el-col>
                        <el-col :span="5" class="info-item fans">
                          <div class="grid-content bg-purple-light"></div>
                        </el-col>
                        <el-col :span="5" class="info-item article">
                          <div class="grid-content bg-purple"></div>
                        </el-col>
                        <el-col :span="5" class="info-item like">
                          <div class="grid-content bg-purple-light"></div>
                        </el-col>
                      </el-row>
                    </div>
                  </el-col>
                </el-row>
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

export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    LHeader
  }
};
</script>

<style scoped>
.meta-info {
  height: 100px;
}
</style>
