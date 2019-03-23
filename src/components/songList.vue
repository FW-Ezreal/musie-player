<template>
  <div>
    <mt-cell
      v-for="(item, index) in songListData"
      :key="index"
      :title="item.filename">
    </mt-cell>
  </div>
</template>
<script>

export default {
  props: {
    songListData: Array
  },
  methods: {
    handleMusic(muiscInfo) {
      // console.log('muiscInfo: ', muiscInfo.audio_id);
    }
  }
}
</script>

<style lang="less">
  .mint-cell:hover{
    background: rgba(0,0,0,.09);
  }
  div.mint-cell-wrapper {
    font-size: 14px;
    background-image: none;
    border-bottom: 1px solid rgba(0,0,0,.09);
  }
</style>
