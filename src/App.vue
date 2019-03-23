<template>
  <div>
    <!-- <Head /> -->
    <new-song/>
    <router-view></router-view>
  </div>
</template>
<script>
import newSong from './src/newSong';
export default {
  components:{
    'new-song': newSong
  }
}
</script>

<style lang="less" scoped>
</style>
