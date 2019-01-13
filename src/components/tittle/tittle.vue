<template>
  <div class="cmmons-hader">
    <el-row class="serch-wrapper">
      <el-col :span="8" class="centerRight avatat-wrapper">
        <div class="avatat"></div>
      </el-col>
      <el-col :span="8">
        <el-input placeholder="请输入内容">
          <template slot="append"><i class="el-icon-search"></i></template>
        </el-input>
      </el-col>
      <el-col :span="8" class="center logState">
        <div class="name" v-show="logState">{{`欢迎${name}`}}</div>
        <div class="logout" v-show="logState">注销</div>
        <div class="login" v-show="!logState" @click="login">登录</div>
        <div class="register" v-show="!logState" @click="regiser">注册</div>
      </el-col>
    </el-row>
    <el-row class="operate-wrapper">
      <el-col :span="6"></el-col>
      <el-col :span="12" class="center">
          <ul :span="8" class="block list-wrap" :class="active==1?'active':''" @click="crrentUpload">
            <li class="operate-icon center"><i class="el-icon-upload"></i></li>
            <li class="operate-name center">最近上传</li>
          </ul>
          <ul class="block list-wrap" :class="active==2?'active':''" @click="presentList">
             <li class="operate-icon center"><i class="el-icon-back"></i></li>
            <li class="operate-name center">赠送清单</li>
          </ul>
          <ul class="block list-wrap" :class="active==3?'active':''" @click="wishesList">
             <li class="operate-icon center"><i class="el-icon-star-on"></i></li>
            <li class="operate-name center">心愿清单</li>
          </ul>
          <ul class="block list-wrap" :class="active==4?'active':''" @click="doDrift">
             <li class="operate-icon center"><i class="el-icon-sort"></i></li>
            <li class="operate-name center">鱼漂</li>
          </ul>
      </el-col>
      <el-col :span="6"></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      name: '小刚',
      logState: false,
      active: 1
    }
  },
  methods: {
    login () {
      this.$router.push('/login')
    },
    regiser () {
      this.$router.push('/register')
    },
    crrentUpload () {
      this.active = 1
      this.$router.push({
        path: '/index'
      })
    },
    presentList () {
      this.active = 2
    },
    wishesList () {
      this.active = 3
    },
    doDrift () {
      this.active = 4
    }
  }
}
</script>

<style scoped lang="less">
  @import "../../stylus/common.css";
  .cmmons-hader{
    width: 100%;
    height: 170px;
    .el-col{
      height: 100%;
      display: flex;
      align-items: center;
    }
    .serch-wrapper{
      height: 70px;
      background: #364653;
      .el-input{
        height: 35px;
      }
      .avatat-wrapper{
        .avatat{
          width:70px;
          height: 46px;
          background: url('../../assets/image/logo-yushu.png') no-repeat;
          background-size: 100% 100%;
          margin-right: 50px;
        }
      }
      .logState{
        display: flex;
        justify-content: flex-start;
        div{
          width: 26%;
          text-align: center;
        }
        div:nth-child(odd){
          margin-left: 20%;
        }
      }
    }
    .operate-wrapper{
      height: 100px;
      background: #505E69;
      .list-wrap{
        flex: 1;
        height: 80%;
        .operate-icon{
          width: 100%;
          height: 60%;
          i{
            font-size: 35px;
          }
        }
        .operate-name{
          width: 100%;
          height: 40%;
          font-size: 18px;
        }
      }
    }
    .active{
      background: #606266;
    }
  }
</style>
