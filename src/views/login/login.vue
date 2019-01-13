<script src="../../utils/http.js"></script>
<template>
  <div class="login">
    <div class="loginWap">
      <div class="tit">LOGIN FORM</div>
      <div class="account">
        <el-row>
          <el-col :span="24">
            <el-input placeholder="请输入账号" prefix-icon="el-icon-service" v-model="account" suffix-icon="el-icon-close"
                      class="inputBgs"></el-input>
          </el-col>
          <el-col :span="12" class="countWrong" v-show="countWrong">账号错误</el-col>
        </el-row>
      </div>
      <div class="password">
        <el-row>
          <el-col :span="24">
            <el-input placeholder="请输入密码" prefix-icon="el-icon-setting" v-model="password" suffix-icon="el-icon-view"
                      class="inputBgs"></el-input>
          </el-col>
          <el-col :span="12" class="passwordWrong" v-show="passwordWrong">密码错误</el-col>
        </el-row>
      </div>
      <div class="confirmBtn">
        <el-button type="primary" class="prims" @click="login">登录</el-button>
        <div class="go-register" @click="goRegister">没有账户，去注册</div>
      </div>
    </div>
  </div>
</template>

<script>
import { url } from '../../config/ipconfig'
import { mapMutations } from 'vuex'

export default {
  data () {
    return {
      account: '',
      password: '',
      countWrong: false,
      passwordWrong: false
    }
  },
  created() {
    localStorage.removeItem('token')
  },
  methods: {
    login () {
      let data = {
        account: this.account,
        password: this.password,
        type: 100
      }
      const urls = url + '/login'
      this.$post(urls, data).then(res => {
        if (res.status.error_code === 0) {
          this.$notify({
            title: '成功',
            duration: 2000,
            message: '登录成功',
            type: 'success'
          })
          localStorage.setItem('token', res.token)
          this.$router.push({
            path: '/index'
          })
        }
      })
    },
    goRegister () {
      this.$router.push({
        path: '/register'
      })
    },
    ...mapMutations({
      setToken: 'SET_TOKEN'
    })
  }
}
</script>

<style scoped lang="less">
  .login {
    width: 100%;
    height: 100%;
    background-color: #2d3a4b;
    position: relative;

    .loginWap {
      width: 30%;
      margin-left: 35%;
      height: 40%;
      position: absolute;
      top: 25%;
      left: 0;

      .tit {
        width: 100%;
        height: 15%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
        color: white;
      }

      .account {
        width: 70%;
        margin-left: 15%;
        margin-top: 6%;
        background-color: #2d3a4b;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
      }

      .password {
        width: 70%;
        margin-left: 15%;
        margin-top: 8%;
      }

      .confirmBtn {
        width: 70%;
        margin-left: 15%;
        margin-top: 10%;

        .prims {
          width: 100%;
          height: 100%;
        }

        .go-register {
          font-size: 14px;
          color: white;
          float: right;
          margin-top: 12px;
        }
      }
    }
  }

  .countWrong, .passwordWrong {
    color: white;
    padding: 5px 0 0 5px;
  }
</style>
