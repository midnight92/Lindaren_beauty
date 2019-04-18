<template>
  <el-container>
    <el-main class="main-container">
      <el-row>
        <el-col :offset="2" :span="20">
          <div class="unfreeze-content">
            <div v-show="isShowSuccess">
              {{msg}}
              <router-link to="/homePage">进入主页</router-link>
            </div>
            <div v-show="isShowFail">
              {{msg}}
              <router-link to="/login">回到注册页</router-link>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import http from "@/common/http";

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      isShowSuccess: false,
      isShowFail: false
    };
  },
  mounted() {
    let token = this.getQueryVariable("token");
    http
      .get("http://localhost/api/user/unfreeze?token=" + token)
      .then(data => {
        console.log("res: ", data);
        if (data.success) {
          this.isShowSuccess = true;
        } else {
          this.isShowFail = true;
        }
        this.msg = data.errorMsg;
      })
      .catch(err => {
        console.log(err);
        this.msg = err.errorMsg;
      });
  },
  methods: {
    goToHomePage() {
      alert(123);
    },
    goToRegister() {
      alert(123);
    },
    getQueryVariable(variable) {
      let name, value;
      let str = location.href; //取得整个地址栏
      let num = str.indexOf("?");
      str = str.substr(num + 1); //取得所有参数   stringvar.substr(start [, length ]

      let arr = str.split("&"); //各个参数放到数组里
      for (let i = 0; i < arr.length; i++) {
        num = arr[i].indexOf("=");
        if (num > 0) {
          name = arr[i].substring(0, num);
          if (name === variable) {
            return arr[i].substr(num + 1);
          }
        }
      }
      return null;
    }
  }
};
</script>

<style scoped>
.main-container {
  height: 100vh;
  background-image: url("../../assets/sign_bg.db29b0fb.png");
  background-repeat: no-repeat;
  background-color: #b8e5f8;
}
.unfreeze-content {
  height: 400px;
  padding-top: 60px;
  background-color: #ffffff;
  border-radius: 2px;
}
</style>
