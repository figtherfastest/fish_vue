<template>
  <div class="book_detail">
    <div class="detail">
      <div class="image">
        <img :src="bookDetail.image" alt="">
      </div>
      <ul class="detail_list">
        <li class="tittle">{{bookDetail.title}}</li>
        <li class="another_info centerLeft">
          <span>作者：</span> <span>{{bookDetail.author}}</span>
        </li>
        <li class="another_info">
          <span>出版社：</span> <span>{{bookDetail.publisher}}</span>
        </li>
        <li class="another_info centerLeft">
          <span>出版年：</span> <span>{{bookDetail.pubdate}}</span>
        </li>
        <li class="another_info centerLeft">
          <span>页数：</span> <span>{{bookDetail.pages}}</span>
        </li>
        <li class="another_info centerLeft">
          <span>定价：</span> <span>{{bookDetail.price}}</span>
        </li>
        <li class="another_info centerLeft">
          <span>精装：</span> <span>{{bookDetail.binding}}</span>
        </li>
        <li class="another_info centerLeft">
          <span>ISBN:</span> <span>{{bookDetail.isbn}}</span>
        </li>
        <li class="another_info centerLeft">
          <span>0人想要/</span> <span>3人可赠送</span>
        </li>
      </ul>
    </div>
    <div class="present">
      <div class="present_book">赠送此书</div>
      <div class="add_wish">加入到心愿清单</div>
    </div>
    <div class="short_detail">
      <div class="tit">内容简介</div>
      <div class="content_detail">{{bookDetail.summary}}</div>
    </div>
    <div class="choose_present">
      <div class="tittles centerLeft">向他们请求此书</div>
      <ul class="list-wrapper">
        <li class="present-list centerLeft">
          <div class="name">张三</div>
          <div class="time center">上传于00-00-00</div>
          <div class="to-present center">向他请求此书</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { url } from '../../config/ipconfig'
export default {
  name: 'bookDetail',
  data () {
    return {
      bookDetail: {}
    }
  },
  created () {
    this.bookDetails()
  },
  methods: {
    bookDetails () {
      let urls = url + '/book/detail/' + this.$route.query.isbn
      this.$get(urls).then(res => {
        this.bookDetail = res
      })
    }
  }
}
</script>

<style scoped lang="less">
  @import "../../stylus/common.css";
.book_detail {
  width: 60%;
  margin-left: 20%;
  padding-top: 30px;
  .detail {
    width: 100%;
    height: 240px;
    display: flex;
    justify-content: space-between;
    .image {
      width: 160px;
      height: 100%;
      img{
        display: block;
        width:100%;
        height: 100%;
      }
    }
    .detail_list {
      width: calc(100% - 170px);
      height: 100%;
      .tittle {
        width: 100%;
        height: 55px;
        font-size: 18px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }
      .another_info {
        width: 100%;
        height: 23px;
        color: #8e8e8e;
        font-size: 14px;
      }
    }
  }
  .present{
    width: 100%;
    height: 35px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 42px;
    .present_book{
      width: 90px;
      height: 100%;
      font-size: 14px;
      color: #8BACA1;
      text-align: center;
      line-height: 35px;
      border-radius: 3px;
      border: 1px solid #8BACA1;
    }
    .add_wish{
      width: 120px;
      height: 100%;
      font-size: 14px;
      color: #8BACA1;
      text-align: center;
      line-height: 35px;
      border-radius: 3px;
      border: 1px solid #8BACA1;
      margin-left: 35px;
    }
  }
  .short_detail{
    width: 100%;
    height: 100px;
    margin-top: 45px;
    .tit{
      width: 100%;
      height: 35px;
      display: flex;
      justify-content: flex-start;
      font-size: 16px;
      color: #8e8E8E;
    }
    .content_detail{
      width: 100%;
      height: 65px;
      font-size: 14px;
      color: #8e8E8E;
      text-indent: 25px;
    }
  }
  .choose_present{
    width: 100%;
    margin-top:80px;
    .tittles{
      width: 100%;
      height: 38px;
      font-size: 16px;
      color: #8e8E8E;
      border-bottom: 1px dashed #8BACA1;
    }
    .list-wrapper{
      width: 100%;
      .present-list{
        width: 100%;
        height: 50px;
        .name{
          color: #333;
          font-size: 14px;
          text-align: left;
          width: 80px;
          height: 100%;
          line-height: 50px;
        }
        .time{
          width: 150px;
          height: 100%;
          color: #8e8E8E;
          font-size: 14px;
        }
        .to-present{
          width: 150px;
          height: 60%;
          color: #fff;
          background: #3d4d80;
          border-radius: 3px;
          font-size: 14px;
          margin-left: 50px;
        }
      }
    }
  }
}
</style>
