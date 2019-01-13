<template>
  <div class="index">
    <ul class="list-wrapper">
      <li class="list" v-for="(item, index) in dataList" :key="index" @click="goDetail(item.isbn)">
        <div class="book-cover">
          <img :src="item.image" alt="">
        </div>
        <div class="book-detail">
          <ul class="detail-wrapper">
            <li class="tittle">{{item.title}}</li>
            <li class="author">
              <span>作者 ：</span>
              <span>{{item.author}}</span>
            </li>
            <li class="description">{{item.summary}}</li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { url } from '../../config/ipconfig'
export default {
  name: 'index',
  data () {
    return {
      dataList: []
    }
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {
      let urls = url + '/book/getCurrent'
      this.$get(urls).then(res => {
        console.log(res)
        if (res.status.msg === 'ok') {
          this.dataList = res.book
        }
      })
    },
    goDetail (isbn) {
      this.$router.push({
        path: '/bookDetail',
        query: {'isbn': isbn}
      })
    }
  }
}
</script>

<style scoped lang="less">
.index {
  width: 100%;
  height: 100%;
  .list-wrapper {
    width: 70%;
    margin-left: 15%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .list {
      width: 42%;
      height: 200px;
      margin-top: 43px;
      position: relative;
      z-index: 5;
      .book-cover{
        width: 142px;
        height: 88%;
        position:absolute;
        left: 0;
        top: 0;
        z-index: 10;
        box-shadow: 3px 3px 5px rgba(42, 42, 42, 0.91);
        img{
          display: block;
          width: 100%;
          height: 100%;
        }
      }
      .book-detail{
        position: absolute;
        width: 100%;
        height: 80%;
        right: 0;
        bottom: 0;
        z-index: -5;
        border:1px solid gray;
        display: flex;
        justify-content: flex-end;
        box-shadow: 1px 1px 2px rgba(42, 42, 42, 0.91);
        .detail-wrapper{
          width: calc(100% - 150px);
          height: 100%;
          .tittle{
            width: 100%;
            height: 28%;
            padding-left: 12px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            color: #826762;
            font-size: 17px;
            font-weight: 500;
          }
          .author{
            width: 100%;
            height: 22%;
            color: #8e8E8E;
            font-size: 14px;
            font-weight: normal;
            display: flex;
            justify-content: flex-start;
            align-items: center;
          }
          .description{
            width: 100%;
            height: 50%;
            color: #8e8E8E;
            font-size: 14px;
            font-weight: normal;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: pre-wrap;
            text-indent: 15px;
          }
        }
      }
    }
  }
}
</style>
