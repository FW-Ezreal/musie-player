<template>
  <div class="banner-wrap">
    <!-- <mt-navbar v-model="headNav" class="container">
      <mt-tab-item id="head-nav1">新歌</mt-tab-item>
      <mt-tab-item id="head-nav2">排行</mt-tab-item>
      <mt-tab-item id="head-nav3">歌单</mt-tab-item>
      <mt-tab-item id="head-nav4">歌手</mt-tab-item>
    </mt-navbar> -->
    <Banner :banner-lists="bannerLists"/>
    <SongList :song-list-data="newSongsData"/>
  </div>
</template>

<script>
import Banner from '../components/banner';
import SongList from '../components/songList';
export default {
  name: 'newSong',
  components: {
    Banner,
    SongList
  },
  data() {
    return {
      headNav: 'head-nav1',
      bannerLists: [],
      newSongsData: []
    }
  },
  mounted() {
    const url = this.$url + 'http://m.kugou.com/?json=true';
    this.$http({
      url,
      method: 'get'
    }).then((res) => {
      // console.log('res', res.data.data);
      this.newSongsData = res.data.data;
      this.bannerLists = res.data.banner;
    })
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
