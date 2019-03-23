<template>
  <div class="banner-wrap">
    <!-- <mt-navbar v-model="headNav" class="container">
      <mt-tab-item id="head-nav1">新歌</mt-tab-item>
      <mt-tab-item id="head-nav2">排行</mt-tab-item>
      <mt-tab-item id="head-nav3">歌单</mt-tab-item>
      <mt-tab-item id="head-nav4">歌手</mt-tab-item>
    </mt-navbar> -->
    <mt-swipe :auto="100000">
      <mt-swipe-item v-for="(item, index) in bannerLists" :key="index">
        <a :href="item.extra.tourl">
          <img :src="item.imgurl" :alt="item.title">
        </a>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>

export default {
  props:{
    bannerLists: Array
  }
}
</script>

<style lang="less" scoped>
  .mint-swipe{
    height: 39vw!important;
  }
  .mint-swipe-items-wrap{
    img{
      width: 100%;
      height: 100%;
    }
  }
</style>
