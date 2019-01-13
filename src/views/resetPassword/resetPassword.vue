<template>
  <div class="login">
    <div class="loginWap">
      <div class="tit">RESET FORM</div>
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
        </el-row>
      </div>
      <div class="confirmBtn">
        <el-button type="primary" class="prims" @click="reset">重置密码</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { url } from '../../config/ipconfig'
export default {
  data () {
    return {
      account: '',
      password: '',
      countWrong: false
    }
  },
  methods: {
    reset () {
      let data = {
        account: this.account,
        password: this.password,
        type: 100
      }
      const urls = url + '/resetPassword'
      this.$post(urls, data).then(res => {
        console.log(res)
      })
      this.$router.push({
        path: '/register'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
