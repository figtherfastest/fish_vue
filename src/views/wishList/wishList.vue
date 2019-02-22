<template>
  <div class="wishList">
    <ul class="list-wrapper">
      <div class="sum">{{`我想要的书籍共${total}本`}}</div>
      <li class="list" v-for="(item, index) in giftLists" :key="index">
        <div class="book">
          <img :src="item.image" alt="">
        </div>
        <ul class="info" >
          <li class="name">{{item.title}}</li>
          <li>{{ item.author }}</li>
          <li>{{ item.publisher }}</li>
          <li>{{ item.price }}</li>
          <li>{{ item.isbn }}</li>
          <li class="redraw" @click="drawBack(item.isbn)">撤销</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { url } from '../../config/ipconfig'
export default {
  name: 'wishList',
  data () {
    return {
      giftLists: [],
      total: 0
    }
  },
  created () {
    this.wishList()
  },
  methods: {
    wishList () {
      let urls = url + '/getWishes'
      this.$get(urls).then(res => {
        if (res.status.error_code === 0) {
          this.giftLists = res.responce.wishes
          this.total = res.responce.total
        }
      })
    },
    drawBack (isbn) {
      let urls = url + '/redrawWish'
      let data = {
        isbn: isbn
      }
      this.$post(urls, data).then(res => {
        if (res.error_code === 0) {
          this.wishList()
          let message = '撤销成功'
          this.alertStatus(message)
        }
      })
    },
    alertStatus (tittle = '成功', message, type = 'success') {
      this.$notify({
        title: tittle,
        message: message,
        type: type
      })
    }
  }
}
</script>

<style scoped lang="less">
  .wishList{
    width: 100%;
    height: 100%;
    .sum{
      width: 100%;
      height: 25px;
      font-size: 16px;
      border-bottom: 1px dotted gray;
    }
    .list-wrapper{
      width: 50%;
      height: 100%;
      margin-left: 25%;
      margin-top: 38px;
      .list{
        width: 100%;
        height: 135px;
        display: flex;
        justify-content: flex-start;
        margin-top: 20px;
        .book{
          width: 100px;
          height: 100%;
          img{
            display: block;
            width: 100%;
            height: 100%;
          }
        }
        .info{
          width: calc(100% - 150px);
          margin-left: 20px;
          height: 100%;
          li{
            width: 100%;
            height: 16.6%;
            color: #8e8E8E;
            font-size: 14px;
            font-weight: normal;
          }
          .name{ font-size: 16px;
            color: #323232;
          }
          .redraw{
            font-size: 13px;
            color: #151d1e;
          }
        }
      }
    }
  }

</style>
