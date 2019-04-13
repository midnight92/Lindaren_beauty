<template>
  <div id="main-container">
    <div id="login-container">
      <div id="login-box">
        <div class="form-header">
          <div class="form-header-title">Welcome</div>
          <div class="form-header-content">Lindaren</div>
        </div>

        <!-- 登录 -->
        <div v-show="isShowLogin" id="login-form" class="form-item-container">
          <div class="form-item">
            <div class="input-text">邮箱</div>
            <input id="email" class="input-item" v-model="loginEmail" placeholder="Email">
            <div class="error-msg"></div>
          </div>
          <div class="form-item">
            <div class="input-text">密码</div>
            <input
              id="password"
              class="input-item"
              v-model="loginPassword"
              type="password"
              placeholder="Password"
            >
            <div class="error-msg"></div>
          </div>
          <el-button class="btn-form" @click="login" type="primary">登&nbsp;&nbsp;录</el-button>
        </div>

        <!-- 注册 -->
        <div v-show="isShowRegister" id="register-form" class="form-item-container">
          <div class="form-item">
            <div class="input-text">邮箱</div>
            <input id="email" class="input-item" v-model="registerEmail" placeholder="Email">
            <div class="error-msg"></div>
          </div>
          <div class="form-item">
            <div class="input-text">密码</div>
            <input
              id="password"
              class="input-item"
              v-model="registerPassword"
              type="password"
              placeholder="Password"
            >
            <div class="error-msg"></div>
          </div>
          <div class="form-item">
            <div class="input-text">昵称</div>
            <input id="nickName" class="input-item" v-model="userNickname" placeholder="nickName">
            <div class="error-msg"></div>
          </div>
          <el-button class="btn-form" @click="register" type="primary">注&nbsp;&nbsp;册</el-button>
        </div>
      </div>
      <div id="switch-box">
        <span v-show="isShowRegister" class="bottom-text">已有账号？</span>
        <span v-show="isShowLogin" class="bottom-text">没有账号？</span>
        <el-button id="btn-switch" @click="doSwitch">
          <span v-show="isShowRegister" class="bottom-text">登录</span>
          <span v-show="isShowLogin" class="bottom-text">注册</span>
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
import http from "@/common/http";

export default {
  name: "HelloWorld",
  data() {
    return {
      loginEmail: "",
      loginPassword: "",
      registerEmail: "",
      registerPassword: "",
      userNickname: "",
      isShowLogin: true,
      isShowRegister: false
    };
  },
  methods: {
    doSwitch() {
      this.isShowRegister = !this.isShowRegister;
      this.isShowLogin = !this.isShowLogin;
    },
    login() {
      http
        .post("http://localhost/api/user/login", {
          email: this.loginEmail,
          password: this.loginPassword
        })
        .then(data => {
          console.log("res: ", data);
        })
        .catch(err => console.log(err));
    },
    register() {
      http
        .post("http://localhost/api/user/register", {
          userEmail: this.registerEmail,
          userPassword: this.registerPassword,
          userNickname: this.userNickname
        })
        .then(data => {
          console.log("res: ", data);
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style scoped>
#main-container {
  text-align: center;
  height: 100vh;
  min-height: 700px;
  background-image: url("../../assets/sign_bg.db29b0fb.png");
  background-repeat: no-repeat;
  background-color: #b8e5f8;
  background-size: cover;
  width: 100%;
}
#login-container {
  margin: 0 auto;
  width: 430px;
  padding-top: 60px;
}
#login-box {
  min-height: 450px;
  background-color: #fff;
  padding: 0px 50px 20px 50px;
  border-radius: 2px;
}
.form-item-container {
  text-align: left;
}
#switch-box {
  height: 40px;
  background-color: #f6f6f6;
  padding: 15px;
}
.input-item {
  border-style: none;
  border: 0;
  outline: none;
  font-size: 16px;
  border-bottom: solid 1px #409eff;
  width: 100%;
  height: 40px;
}
.form-item {
  margin: 15px 0px;
}
#login-box .form-header {
  padding-top: 30px;
  height: 130px;
  color: #409eff;
  text-align: left;
}
.error-msg {
  height: 20px;
}
.btn-form {
  border-radius: 0px;
  width: 100%;
  font-size: 16px;
}
.input-text {
  color: #666666;
  font-weight: bolder;
}
#btn-switch {
  height: 36px;
  line-height: 0;
}
.form-header-title {
  font-size: 30px;
}
.form-header-content {
  font-size: 80px;
}
</style>
