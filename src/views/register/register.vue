<template>
  <div class="register">
    <div class="registerWap">
      <div class="tit">REGISTER FORM</div>
      <div class="account">
        <el-row>
          <el-col :span="24">
            <el-input placeholder="请输入邮箱" v-model="account" prefix-icon="el-icon-service" suffix-icon="el-icon-close"
                      class="inputBgs"></el-input>
          </el-col>
          <el-col :span="12" class="countWrong" v-show="countWrong">请输入正确的邮箱</el-col>
        </el-row>
      </div>
      <div class="password">
        <el-row>
          <el-col :span="24">
            <el-input placeholder="请输入密码" v-model="password" prefix-icon="el-icon-setting" suffix-icon="el-icon-view"
                      class="inputBgs"></el-input>
          </el-col>
        </el-row>
      </div>
      <div class="account">
        <el-row>
          <el-col :span="24">
            <el-input placeholder="请输入昵称" v-model="nickname" prefix-icon="el-icon-service" suffix-icon="el-icon-close"
                      class="inputBgs"></el-input>
          </el-col>
        </el-row>
      </div>
      <div class="confirmBtn">
        <el-button type="primary" class="prims" @click="register">注册</el-button>
      </div>
    </div>
  </div>
</template>

<script>
// import { url } from '../../config/ipconfig'

export default {
  data () {
    return {
      countWrong: false,
      account: '',
      password: '',
      nickname: ''
    }
  },
  methods: {
    register () {
      const urls = 'register'
      // const urls = 'https://api.apiopen.top/EmailSearch?number=1012002'
      let data = {
        nickname: this.nickname,
        account: this.account,
        password: this.password,
        type: 100
      }
      console.log(data)
      this.$post(urls, data).then(res => {
        this.$router.push({
          path: '/index'
        })
      })
    }
  }
}
</script>

<style scoped lang="less">
  .register {
    width: 100%;
    height: 100%;
    background-color: #2d3a4b;
    position: relative;
    .registerWap {
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
        margin-top: 6%;
      }
      .confirmBtn {
        width: 70%;
        margin-left: 15%;
        margin-top: 10%;
        .prims {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  .countWrong, .passwordWrong {
    color: white;
    padding: 5px 0 0 5px;
  }
</style>
