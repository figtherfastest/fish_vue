<template>
  <div class="index">
    <div class="header">
      <tlttle/>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import tlttle from '../../components/tittle/tittle'
export default {
  name: 'Main',
  components: {
    tlttle
  }
}
</script>

<style scoped lang="less">
  .index{
    width: 100%;
    height: 100%;
    .header{
      width: 100%;
      height: 170px;
    }
    .content{
      width: 100%;
      height: calc(100% - 170px);
    }
  }
</style>
