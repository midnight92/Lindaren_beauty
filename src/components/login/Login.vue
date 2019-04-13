<template>
  <div id="main-container">
    <div id="login-container">
      <div id="login-box">
        <div class="form-header">
          
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
            <input id="password" class="input-item" v-model="loginPassword" type="password" placeholder="Password">
            <div class="error-msg"></div>
          </div>
          <el-button class="btn-form" type="primary">登&nbsp;&nbsp;录</el-button>
        </div>

        <!-- 注册 -->
        <div v-show="isShowRegister" id="register-form" class="form-item-container">
          <div class="form-item">
            <div class="input-text">邮箱</div>
            <input id="email" class="input-item" placeholder="Email">
            <div class="error-msg"></div>
          </div>
          <div class="form-item">
            <div class="input-text">密码</div>
            <input id="password" class="input-item" type="password" placeholder="Password">
            <div class="error-msg"></div>
          </div>
          <div class="form-item">
            <div class="input-text">昵称</div>
            <input id="nickName" class="input-item" placeholder="nickName">
            <div class="error-msg"></div>
          </div>
          <el-button class="btn-form" type="primary">注&nbsp;&nbsp;册</el-button>
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
    },
  }
};
</script>

<style scoped>
#main-container {
  text-align: center;
  height: 100vh;
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
  border-bottom: solid 1px #409EFF;
  width: 100%;
  height: 40px;
  
}
.form-item {
  margin: 15px 0px;
}
#login-box .form-header {
  padding-top: 30px;
  height: 130px;
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
</style>
